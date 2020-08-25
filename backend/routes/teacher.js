var express = require('express');
const { sequelize } = require('../models');
var router = express.Router();


/* GET users listing. */
router.post('/teacher', function(req, res, next) {
    console.log(req);
    //var query=`select * from yjoon2k.teacher.${}`;
    sequelize.query()

    res.send("success");
});

router.get('/',function(req,res,next){
    var teacherlist = [];

    res.send();
});

module.exports = router;
