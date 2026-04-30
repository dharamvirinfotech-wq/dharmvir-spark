const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { requireAuth } = require('../middleware/auth');
const ctrl = require('../controllers/auth.controller');

router.post(
  '/register',
  [
    body('full_name').trim().isLength({ min: 2 }).withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('phone').optional({ nullable: true }).isString(),
    body('role').optional().isIn(['admin', 'editor', 'user']),
    body('company_name').optional({ nullable: true }).isString(),
    body('two_factor_enabled').optional().isBoolean(),
  ],
  validate,
  ctrl.register
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password').isString().notEmpty().withMessage('Password required'),
  ],
  validate,
  ctrl.login
);

router.get('/me', requireAuth, ctrl.me);

module.exports = router;
