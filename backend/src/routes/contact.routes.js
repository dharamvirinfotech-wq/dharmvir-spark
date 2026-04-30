const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { requireAuth, requireRole } = require('../middleware/auth');
const ctrl = require('../controllers/contact.controller');

// Public submission
router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 150 }).withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('phone').optional({ nullable: true }).isString().isLength({ max: 30 }),
    body('subject').optional({ nullable: true }).isString().isLength({ max: 255 }),
    body('service').optional({ nullable: true }).isString().isLength({ max: 150 }),
    body('message').trim().isLength({ min: 5, max: 5000 }).withMessage('Message is required'),
  ],
  validate,
  ctrl.create
);

// Admin / editor
router.get('/', requireAuth, requireRole('admin', 'editor'), ctrl.list);
router.get('/:id', requireAuth, requireRole('admin', 'editor'), ctrl.get);
router.patch(
  '/:id',
  requireAuth,
  requireRole('admin', 'editor'),
  [
    body('status').optional().isIn(['new', 'replied', 'closed']),
    body('admin_notes').optional({ nullable: true }).isString().isLength({ max: 5000 }),
  ],
  validate,
  ctrl.updateStatus
);
router.delete('/:id', requireAuth, requireRole('admin'), ctrl.remove);

module.exports = router;
