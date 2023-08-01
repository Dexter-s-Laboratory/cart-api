const db = require('../db');

module.exports = {

  getCartByUserIdFromDB: async (user_id) => {
    try {
      const listingsInCart = await db.any('SELECT listings.* json_agg(listing_photos.*) AS photos FROM listings JOIN carts ON listings.id = carts.listing_id LEFT JOIN listing_photos ON listings.id = listing_photos.listing_id WHERE carts.user_id = $1 GROUP BY listings.id', [user_id]);
      return listingsInCart;
    } catch(error) {
      console.log('unable to retrieve listings, ', error);
    }
  },

  createTransactionInDB: () => {

  },

  getTransactionByIdFromDB: () => {

  },

  getPurchasesByUserIdFromDB: () => {

  },

  getSalesByUserIdFromDB: () => {

  },

};