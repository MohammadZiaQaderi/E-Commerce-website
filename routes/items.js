import express from "express";
//import itemsMiddleware from "./middleware/items-middleware.js";
//import crossMiddleware from "./middleware/cross-middleware.js";
const router=express.Router();
  
//router.use(crossMiddleware);
//router.use(itemsMiddleware);

router.get("/",(req,res,next)=> {
    res.send("items list");
 //  next();
});
router.post("/add",(req,res)=> {
    res.send("Add items");
 });
 router.put("/update",(req,res)=> {
    res.send("update items");
 });
 router.delete("/delete",(req,res)=> {
     res.send("delete an items");
  });
export default router;