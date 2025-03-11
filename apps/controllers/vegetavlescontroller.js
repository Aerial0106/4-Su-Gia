var express = require("express");
var router = express();
router.use("/", function(req, res){
    res.render('vegetables.ejs');
});
module.exports = router;