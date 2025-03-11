var express = require("express");
var router = express.Router();
router.use("/", function(req, res){
router.use("/contact", require(__dirname + "/contactcontroller"));

    res.render('contact.ejs');
});
module.exports = router;