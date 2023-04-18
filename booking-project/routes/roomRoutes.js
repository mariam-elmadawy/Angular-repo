const router = require("express").Router()
const roomController = require("../app/controllers/roomController")
const vendorAuth = require("../app/middleware/vendorMiddleware")
const upload = require('../app/middleware/uploadMiddleware')
//add new
router.post("/", vendorAuth, upload.single("img"), roomController.newRoom)
//show 
router.get("/showAll", roomController.viewAllRooms)
router.get("/show/:id", roomController.viewOneRoom)
router.get("/myRooms", vendorAuth, roomController.myRooms)
//update
router.patch("/show/:id", vendorAuth, roomController.updateRoom)
//delete 
router.delete("/show/:id", roomController.deleteRoom)
router.delete("/", roomController.delAllRooms)
module.exports = router