var express = require("express");
var router = express();
router.use("/", function(req, res){
    res.render('shop.ejs');
});
module.exports = router;