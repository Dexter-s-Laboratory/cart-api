const model = require('../models');

module.exports = {
  getCartByUserId: async(req, res) => {
    try {
      const{user_id} = req.headers;
      const result = await model.getCartByUserIdFromDB(user_id)
      res.send(result);
    } catch(error) {
      res.status(404).send(error);
    }
  },
  createItemInCart: async(req, res) => {
    try {
      const{user_id} = req.headers;
      const{listing_id} = req.body;
      const confirm = await model.createItemInCartDB(user_id, listing_id);
      res.status(201).send(confirm);
    }catch(error) {
      res.status(404).send(error);
    }
  },

  createTransaction: async (req, res) => {

    const{user_id} = req.headers;
    const{total_amount, listing_ids} = req.body;
    try {
      const result = await model.createTransactionInDB(user_id, total_amount, listing_ids);
      res.send(result);
    } catch(error) {
      res.status(404).send(error);
    }
  },

  getTransactionById: async (req, res) => {
    const{transaction_id} = req.params;
    try {
      const result = await model.getTransactionByIdFromDB(transaction_id);
      res.send(result);
    } catch(error) {
      res.status(404).send(error);
    }
  },

  getPurchasesByUserId: async(req, res) => {
    const{user_id} = req.headers;
    try {
      const purchases = await model.getPurchasesByUserIdFromDB(user_id);
      res.send(purchases);
    } catch(error) {
      res.status(404).send(error);
    }
  },

  getSalesByUserId: async(req, res) => {
    const{user_id} = req.headers;
    try {
      const sales = await model.getSalesByUserIdFromDB(user_id);
      res.send(sales);
    } catch(error) {
      res.status(404).send(error);
    }

  }
};