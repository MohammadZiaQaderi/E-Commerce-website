import express from "express";
import items from "./routes/items.js";
import orders from "./routes/orders.js";
import products from "./routes/products.js";
import reviews from "./routes/reviews.js";
import users from "./routes/users.js";
const app=express();

app.get("/",(req,res)=> {
   res.send("Welcom there!");
});

app.use("/items",items);
app.use("/orders",orders);
app.use("/products",products);
app.use("/reviews",reviews);
app.use("/users",users);

const port=3000;
app.listen(port,()=> {
    console.log("The server runs on port number: "+port);
    
});