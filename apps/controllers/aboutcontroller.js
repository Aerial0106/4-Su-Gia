var express = require("express");
var router = express.Router();
router.use("/", function(req, res){
router.use("/about", require(__dirname + "/aboutcontroller"));

    res.render('about.ejs');
});
module.exports = router;