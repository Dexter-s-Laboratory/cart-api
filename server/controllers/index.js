const model = require('../models');

module.exports = {
  getCartByUserId: async(req, res) => {
    const{user_id} = req.headers;
    try {
      const result = await model.getCartByUserIdFromDB(user_id)
      res.send(result);
    } catch(error) {
      res.status(404).send(error);
    }
  },

  createTransaction: async (req, res) => {

    const{user_id} = req.headers;

    try {
      const result = await model.createTransactionInDB(user_id);
      res.send(result);
    } catch(error) {
      res.status(404).send(error);
    }
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