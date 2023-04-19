const router = require("express").Router()
const roomController = require("../app/controllers/roomController")
// const vendorAuth = require("../app/middleware/vendorMiddleware")
const upload = require('../app/middleware/uploadMiddleware')
//add new
router.post("/", upload.single("img"), roomController.newRoom)
//show 
router.get("/showAll", roomController.viewAllRooms)
router.get("/show/:id", roomController.viewOneRoom)
router.get("/myRooms/:id", roomController.myRooms)
//update
router.patch("/show/:id", roomController.updateRoom)
//delete 
router.delete("/show/:id", roomController.deleteRoom)
router.delete("/", roomController.delAllRooms)
module.exports = router