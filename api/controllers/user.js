import { db } from "../connect.js"

export const getAllUsers =(req,res)=>{

    const q = "SELECT id, username, email, name FROM user WHERE usertype= 'user' "; 

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
  
}

export const getAllSellers =(req,res)=>{

    const q = "SELECT id, username, email, name FROM user WHERE usertype= 'seller' "; 

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
  
}