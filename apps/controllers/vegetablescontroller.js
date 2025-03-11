var express = require("express");
var router = express.Router();
router.use("/", function(req, res){
    router.use("/vegetables", require(__dirname + "/vegetablescontroller"));
    
        res.render('vegetables.ejs');
    });
module.exports = router;