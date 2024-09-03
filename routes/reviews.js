import express from "express";
//import userMiddleware from "./middleware/user-middleware.js";
//import crossMiddleware from "./middleware/cross-middleware.js";
const router=express.Router();
  
//router.use(crossMiddleware);

router.get("/",(req,res)=> {
   res.send("reviews list");
});
router.post("/add",(req,res)=> {
    res.send("Add reviews");
 });
 router.put("/update",(req,res)=> {
    res.send("update review");
 });
 router.delete("/delete",(req,res)=> {
     res.send("delete a review");
  });
export default router;