
import { db } from "../connect.js";
import  Jwt  from "jsonwebtoken";
import fs from "fs"


export const getProduct = (req, res) => {
  const q = "SELECT * FROM addproduct";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};



export const addProduct = (req, res) => {
  const file =req.file

  const token = req.cookies.accessToken;

  // console.log('cookie', token)

  if(!token) return res.status(401).json("not logged in!")

  Jwt.verify(token,"secretkey", (err,userinfo)=>{
    if(err) return res.status(403).json("token is not valid!")
  
    const userId = userinfo.id;

    // console.log(userId)

  const {pname, price, quantity ,description} = req.body;
  const filename = req.file ? req.file.filename : null;
   
  console.log("File uploaded:", file);
  console.log("Product data:", { pname, price, quantity, description });

  const q = 'INSERT INTO addproduct (uid, pname, price, quantity, description, pimg) VALUES (?, ?, ?, ?, ?,?)'

  db.query(q,[userId,pname, price, quantity ,description,filename],(err,data)=>{
    if(err) return res.status(500).json(err);
    // console.log(err)
    return res.status(201).json({message:"product added successfully!"})
      
  })
});


};


export const deleteProduct = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("not logged in!");

  Jwt.verify(token, "secretkey", (err, userinfo) => {
    if (err) return res.status(403).json("token is not valid!");

    const userId = userinfo.id;
    const productId = req.params.productId;

    const q = 'SELECT pimg FROM addproduct WHERE id = ? AND uid = ?';

    db.query(q, [productId, userId], (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({ message: "Product not found or you don't have permission to delete." });
      }

      const filename = result[0].pimg;

      // Delete the product entry from the database
      const deleteProductQuery = 'DELETE FROM addproduct WHERE id = ? AND uid = ?';
      db.query(deleteProductQuery, [productId, userId], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.affectedRows === 0) {
          return res.status(404).json({ message: "Product not found or you don't have permission to delete." });
        }

        // Delete the associated image file from the server
        const filePath = `../Trayon-main/public/upload/${filename}`;
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
            return res.status(500).json({ message: "Error deleting image file." });
          }

          return res.status(200).json({ message: "Product and associated image deleted successfully!" });
        });
      });
    });
  });
};

