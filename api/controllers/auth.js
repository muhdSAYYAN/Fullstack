import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register =(req,res)=>{

    console.log('req.body:', req.body.username);
  
    const q = "SELECT * FROM user WHERE username = ?"

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json("first error")
        if(data.length > 0) return res.status(409).json("User already exist!")
    
    //   craete new user

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
     
    const insertQuery = 'INSERT INTO user (`username`,`password`,`name`,`email`,`usertype`,`address`,`ph`) VALUES (?)';
    
    const values = [
        req.body.username,
        hashPassword,
        req.body.name,
        req.body.email,
        "user",
        req.body.address,
        req.body.ph
    ]
    
    db.query(insertQuery, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("user created")
    })
})
}


export const login =(req,res)=>{
    console.log("acessed!", req.body)
   const q= "SELECT * FROM user WHERE username= ?";

   const w= req.body.username

//    console.log(w)

   db.query(q, w, (err,data)=>{
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(405).json("user not found")

    const checkPassword = bcrypt.compareSync(
        req.body.password,
        data[0].password
    );

    if (!checkPassword)
    return res.status(300).json("wrong password or username");
    
    const token = jwt.sign({id:data[0].id} , "secretkey")
   
    // console.log(token)

    const { password, ...others } = data[0];
// console.log(data[0]);
    res.cookie("accessToken", token, {
        httpOnly: true
        }).status(201).json(others);
   })
}


export const logout =(req,res)=>{
    
}