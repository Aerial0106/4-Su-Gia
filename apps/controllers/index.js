var express = require("express");
var router = express.Router();

router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));
router.use("/widgets", require(__dirname + "/admin/widgetscontroller"));

router.get("/", function (req, res) {
    res.render('index.ejs');
});
module.exports = router;