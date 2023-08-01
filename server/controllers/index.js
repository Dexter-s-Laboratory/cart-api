const model = require('../models');

module.exports = {
  getCartByUserId: async(req, res) => {
    const{user_id} = req.params;
    try {
      const result = await model.getCartByUserIdFromDB(user_id)
      res.send(result);
    } catch(error) {
      res.status(404).send();
    }
  },

  createTransaction: (req, res) => {
    res.end();
  },

  getTransactionById: (req, res) => {
    res.end();
  },

  getPurchasesByUserId: (req, res) => {
    res.end();
  },

  getSalesByUserId: (req, res) => {
    res.end();
  }
};