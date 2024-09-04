import express from "express";
import userMiddleware from "./middleware/user-middleware.js";
//import crossMiddleware from "./middleware/cross-middleware.js";
const router=express.Router();
  
//router.use(crossMiddleware);
router.use(userMiddleware);

router.get("/",(req,res,next)=> {
   // some logic here
   next();
});

router.post("/add",(req,res)=> {
    res.send("Add users");
 });
 router.put("/update",(req,res)=> {
    res.send("update user");
 });
 router.delete("/delete",(req,res)=> {
     res.send("delete a user");
  });
export default router;
