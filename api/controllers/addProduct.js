// controllers/addProduct.js

import { db } from "../connect.js";
import multer from "multer";

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // The directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage }).single('pimg'); // 'pimg' should match the field name in your form

export const getProduct = (req, res) => {
  const q = "SELECT id, pname, pimg, price, quantity, description FROM addproduct";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addProduct = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }

    const { pname, price, quantity, description } = req.body;
    const pimg = req.file.path; // Multer will add a 'file' property to the request object

    const q = `INSERT INTO addproduct (pname, pimg, price, quantity, description) 
               VALUES (?, ?, ?, ?, ?)`;

    db.query(q, [pname, pimg, price, quantity, description], (err, result) => {
      if (err) return res.status(500).json(err);

      // You can send the newly inserted product's ID back to the frontend if needed
      return res.status(201).json({ message: "Product added successfully", productId: result.insertId });
    });
  });
};
