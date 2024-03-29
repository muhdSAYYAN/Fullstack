
import  Jwt  from "jsonwebtoken";
import { db } from "../connect.js";

  
export const postOrder = async (req, res) => {

  const userName = req.body.userName.username;
  const address =  req.body.userName.address;
  const ph =  req.body.userName.ph;

  console.log("address",address)
  console.log("ph",ph)
 
  console.log("values",req.body)
  


  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretkey", (err, userinfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userinfo.id;

    const q = 'INSERT INTO `order` (`uid`, `pname`, `price`, `desc`, `client`, `quantity`,`pimg`,`address`,`ph`) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)';

    req.body.orderData.forEach((row) => {
      db.query(
          q, [
            userId,
            row.pname,
            row.price,
            row.description,
            userName,
            row.quantity,
            row.pimg,
            address,
            ph
          ], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(201).json({ message: "Products added successfully!" });
    });
  })
  });
};


export const getOrder =(req, res) => {

  const q = "SELECT * FROM `order`";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });

} 
  // console.log('accesed',req.body)
  // res.status(200).send({msg: 'dsfsdfsdf'})

  export const getRecentOrder = (req, res) => {
    const userName = req.query.userName; // Access the userName parameter from the query string
    console.log("object",userName)

    const q = "SELECT * FROM order WHERE client = ?";
    db.query(q, [userName], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data); // Return the data directly
    });
};

