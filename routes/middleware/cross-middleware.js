import express from "express";
const router =express.Router();

//this code will be executed before any route was handeled
router.use((req,res,next)=> {
  
    if(req.headers["name"]==="war")
    {
     res.send("war is not a good idea!... please change your mind or header into some nice words like peace!");
    }
     console.log("user authenticated!..."); 
     next();
  });


//this code will be executed after any route was handeled
  router.use((req,res)=> {
    res.send("list from middleware");
    console.log("API call ended. ");
  });

  export default router; 