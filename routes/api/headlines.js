var router = require("express").Router();
var headlineController = require("../../controllers/headline");
router.get("/",headlineController.findAll);
router.delete("/",headlineController.delete);
router.put("/",headlineController.update);


module.exports = router;