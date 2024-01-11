import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.js"
import alluserRoute from "./routes/users.js"
import  productRoute  from "./routes/addProduct.js"

const app = express();


app.use(express.json());

app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      origin:"http://localhost:3000"
    })
  );

app.use("/api/auth", authRoute);
app.use("/api/user",alluserRoute);
app.use("/api/addProduct",productRoute);



app.listen(8700,()=>{
    console.log("api running dude")
})