import express from "express";
const router =express.Router();
  //below middleware is special for "get" method, you can add for other methods as well
  router.get("/",(req,res,next)=> {
  
    if(req.headers["name"]==="war")
    {
     res.send("war is not a good idea!... please change your mind or header into some nice words like peace!");
    }
     console.log("user authenticated!..."); 
     next();
  });

  router.get("/",(req,res)=> {
    res.send("users list from middleware");
    console.log("API call ended.inside middleware ");
  });

  export default router; 
  