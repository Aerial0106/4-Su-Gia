var express = require("express");
var router = express.Router();

router.use("/", function(req,res){
    router.use("/widgets", require(__dirname + "/widgetscontroller"));
    res.render('widgets.ejs');
});
module.exports = router;