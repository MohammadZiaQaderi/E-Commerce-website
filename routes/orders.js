import express from "express";
//import userMiddleware from "./middleware/user-middleware.js";
//import crossMiddleware from "./middleware/cross-middleware.js";
const router=express.Router();
  
//router.use(crossMiddleware);


router.get("/",(req,res)=> {
   res.send("orders list");
});
router.post("/add",(req,res)=> {
    res.send("Add orders");
 });
 router.put("/update",(req,res)=> {
    res.send("update order");
 });
 router.delete("/delete",(req,res)=> {
     res.send("delete a order");
  });
export default router;