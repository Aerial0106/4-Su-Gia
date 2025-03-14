var express = require("express");
var router = express.Router();

//user
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/shop", require(__dirname + "/shopcontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));
router.use("/vegetables", require(__dirname + "/vegetablescontroller"));

//admin
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/widgets", require(__dirname + "/admin/widgetscontroller"));
router.use("/forms", require(__dirname + "/admin/formscontroller"));

router.get("/", function (req, res) {
    res.render('index.ejs');
});
module.exports = router;