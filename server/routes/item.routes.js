const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/", itemController.addOne)
router.put("/:id", itemController.updateOne)
router.delete("/:id", itemController.deleteOne)
router.get("/api/userInfo", itemController.selectA);
router.post("/api/userInfo", itemController.addO)
router.delete("/api/userInfo/:id", itemController.deleteO)

module.exports = router;
