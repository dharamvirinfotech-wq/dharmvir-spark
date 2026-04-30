require('dotenv').config();
const mysql = require('mysql2/promise');

async function migrate() {
  const {
    DB_HOST = 'localhost',
    DB_PORT = 3306,
    DB_USER = 'root',
    DB_PASSWORD = '',
    DB_NAME = 'dvitlive',
  } = process.env;

  const root = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await root.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
  await root.query(`USE \`${DB_NAME}\`;`);

  await root.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(150) NOT NULL,
      email VARCHAR(190) NOT NULL UNIQUE,
      phone VARCHAR(30) DEFAULT NULL,
      password_hash VARCHAR(255) DEFAULT NULL,
      role ENUM('admin','employee','employee') NOT NULL DEFAULT 'user',
      company_name VARCHAR(150) DEFAULT NULL,
      status ENUM('active','inactive','suspended') NOT NULL DEFAULT 'active',
      two_factor_enabled TINYINT(1) NOT NULL DEFAULT 0,
      avatar_url VARCHAR(500) DEFAULT NULL,
      provider ENUM('local','google','facebook') NOT NULL DEFAULT 'local',
      provider_id VARCHAR(190) DEFAULT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_users_role (role),
      INDEX idx_users_status (status),
      INDEX idx_users_provider (provider, provider_id)
    ) ENGINE=InnoDB;
  `);

  // Make password_hash nullable for OAuth users (idempotent)
  try {
    await root.query(`ALTER TABLE users MODIFY password_hash VARCHAR(255) DEFAULT NULL;`);
  } catch (_) { /* ignore */ }

  // Add columns if upgrading an existing DB
  const ensureColumn = async (col, ddl) => {
    const [rows] = await root.query(
      `SELECT COUNT(*) AS c FROM information_schema.COLUMNS
       WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'users' AND COLUMN_NAME = ?`,
      [DB_NAME, col]
    );
    if (rows[0].c === 0) await root.query(`ALTER TABLE users ADD COLUMN ${ddl};`);
  };
  await ensureColumn('avatar_url', `avatar_url VARCHAR(500) DEFAULT NULL`);
  await ensureColumn('provider', `provider ENUM('local','google','facebook') NOT NULL DEFAULT 'local'`);
  await ensureColumn('provider_id', `provider_id VARCHAR(190) DEFAULT NULL`);

  // Contact Us inquiries
  await root.query(`
    CREATE TABLE IF NOT EXISTS contact_inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(190) NOT NULL,
      phone VARCHAR(30) DEFAULT NULL,
      subject VARCHAR(255) DEFAULT NULL,
      service VARCHAR(150) DEFAULT NULL,
      message TEXT NOT NULL,
      status ENUM('new','replied','closed') NOT NULL DEFAULT 'new',
      admin_notes TEXT DEFAULT NULL,
      ip_address VARCHAR(64) DEFAULT NULL,
      user_agent VARCHAR(500) DEFAULT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_inq_status (status),
      INDEX idx_inq_email (email),
      INDEX idx_inq_created (created_at)
    ) ENGINE=InnoDB;
  `);

  console.log(`Migration complete on database "${DB_NAME}"`);
  await root.end();
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
