require('dotenv').config();
const mysql = require('mysql2/promise');

async function migrate() {
  const {
    DB_HOST = 'localhost',
    DB_PORT = 3306,
    DB_USER = 'root',
    DB_PASSWORD = '',
    DB_NAME = 'dv_auth',
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
      password_hash VARCHAR(255) NOT NULL,
      role ENUM('admin','editor','user') NOT NULL DEFAULT 'user',
      company_name VARCHAR(150) DEFAULT NULL,
      status ENUM('active','inactive','suspended') NOT NULL DEFAULT 'active',
      two_factor_enabled TINYINT(1) NOT NULL DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_users_role (role),
      INDEX idx_users_status (status)
    ) ENGINE=InnoDB;
  `);

  console.log(`Migration complete on database "${DB_NAME}"`);
  await root.end();
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
