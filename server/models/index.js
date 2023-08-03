const db = require('../db');

module.exports = {
  getCartByUserIdFromDB: async (user_id) => {
    try {
      const listingsInCart = await db.any('SELECT listings.* ,json_agg(listing_photos.*) AS photos FROM listings JOIN carts ON listings.id = carts.listing_id LEFT JOIN listing_photos ON listings.id = listing_photos.listing_id WHERE carts.user_id = $1 GROUP BY listings.id', [user_id]);
      return listingsInCart;
    } catch(error) {
      console.log('unable to retrieve cart, ', error);
    }
  },
  createItemInCartDB: async(user_id, listing_id) => {
    try {
      const confirm = await db.any('INSERT INTO carts (user_id, listing_id) VALUES($1, $2)', [user_id, listing_id]);
      return confirm;
    } catch(error) {
      console.log('unable to create cart item, ', error);
    }
  },

  createTransactionInDB: async (buyer_id, total_amount, listing_ids) => {
    const status = 'fulfilled';
    try {
      const insertTransaction = await db.any('INSERT INTO transactions (buyer_id, total_amount) VALUES ($1, $2)', [buyer_id,total_amount ]);
      const transaction_id  = await db.any('SELECT id FROM transactions WHERE buyer_id = $1', [buyer_id]);
      const updateListing = await db.any(`UPDATE listing SET transaction_id = $1, status = $2 WHERE id = ANY($3)`, [transaction_id, status, listing_ids]);
      return updateListing;
    } catch(error) {
      console.log('unable to create listings, ', error);
    }
  },

  getTransactionByIdFromDB: async (transaction_id) => {
    try {
      const transactions = await db.any('SELECT * FROM transactions WHERE id = $1', [transaction_id]);
      console.log(transactions);
      return transactions;
    } catch(error) {
      console.log('unable to retrieve transactions, ', error);
    }
  },

  getPurchasesByUserIdFromDB: async(user_id) => {
    try {
      const purchases  = await db.any('SELECT listings.* FROM listings JOIN transactions ON transactions.id = listings.transaction_id WHERE transactions.buyer_id = $1', [user_id]);
      return purchases;
    } catch(error) {
      console.log('unable to retrieve purchases, ', error);
    }
  },

  getSalesByUserIdFromDB: async (user_id) => {
    try {
      const sales = await db.any('SELECT * from listings where seller_id = $1',[user_id] )
      return sales;
    } catch(error) {
      console.log('unable to retrieve sales, ', error);
    }
  },

};