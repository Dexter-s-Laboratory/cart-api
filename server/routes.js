var controller = require('./controllers');
var router = require('express').Router();

// GET /api/om/cart/:user_id (authentication required)
router.get('/om/cart', controller.getCartByUserId);

router.post('/om/cart', controller.createItemInCart);

// POST /api/om/transactions/ (authentication required)
// Creates transaction record and updates each listing to be completed and adds the transaction ID
router.post('/om/transactions', controller.createTransaction);

// GET /api/om/transactions/:transaction_id (authentication required)
router.get('/om/transactions/:transaction_id', controller.getTransactionById);

// GET /api/om/transactions/purchases (authentication required)
router.get('/om/purchases', controller.getPurchasesByUserId);

// GET /api/om/transactions/sales (authentication required)
router.get('/om/sales', controller.getSalesByUserId);

module.exports = router;

