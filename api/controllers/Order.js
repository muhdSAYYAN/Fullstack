// Order.js

import { db } from "../connect.js";

 // Assuming you have a database configuration file
 const insertOrder = async (uid, product, orderdate, status) => {
    const query = 'INSERT INTO orders (uid, product, orderdate, status) VALUES (?, ?, ?, ?)';
    const values = [uid, product, orderdate, status];
  
    try {
      await db.query(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  export const postOrder = async (req, res) => {
    try {
      const { products } = req.body;
      const uid = req.body.uid; // Extracting uid directly from req.body
  
      if (!uid) {
        return res.status(400).json({ error: 'User ID is required in the request body' });
      }
  
      const orderDate = new Date(); // Get the current date and time
      const status = 'placed'; // You can set the initial status as 'placed' or any other value
  
      // Loop through the products array and insert each product into the database
      for (const product of products) {
        const { productName } = product;
        await insertOrder(uid, productName, orderDate, status);
      }
  
      res.status(200).json({ message: 'Order placed successfully' });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };