var express=require('express');
var router = express.Router();
var {User}=require('../models');

router.get('/',function(req,res,next){
    User.find({where:{id:1}})
        .then((user)=>{
            res.render('index',{
                title:'Express',
            useremail: user.useremail});
        });
});


module.exports=router;