var controller = require('./controllers');
var router = require('express').Router();

// GET /api/om/carts/:user_id (authentication required)
router.get('/om/carts/', controller.getCartByUserId);

// POST /api/om/transactions/ (authentication required)
// Creates transaction record and updates each listing to be completed and adds the transaction ID
router.post('/om/transactions', controller.createTransaction);

// GET /api/om/transactions/:transaction_id (authentication required)
router.get('/om/transactions/:transcation_id', controller.getTransactionById);

// GET /api/om/transactions/:user_id/purchases (authentication required)
router.get('/om/transactions/purchases', controller.getPurchasesByUserId);

// GET /api/om/transactions/:user_id/sales (authentication required)
router.get('/om/transactions/sales', controller.getSalesByUserId);

module.exports = router;

