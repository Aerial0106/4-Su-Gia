var express = require("express");
var router = express.Router();
router.use("/", function(req, res){
router.use("/shop", require(__dirname + "/shopcontroller"));

    res.render('shop.ejs');
});
module.exports = router;