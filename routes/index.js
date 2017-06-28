var express = require('express');
var router = express.Router();
var fileUpload = require('express-fileupload');
var multer=require("multer");
var upload = multer({ dest: 'public/images/' });
router.get("/",function(req,res,next){
   res.render("upload");
});
router.post('/', upload.any(),function(req, res, next) {
   
   console.log(req.files);
   if(!req.files){
     res.send("No file chosen");
   }
   else{
     res.send({"size":req.files[0].size});
   }
});

module.exports = router;
