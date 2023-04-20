const router = require("express").Router()
const hotelController = require("../app/controllers/hotelController")
const vendorAuth = require("../app/middleware/vendorMiddleware")
const upload = require('../app/middleware/uploadMiddleware')
//add new hotel record
router.post("/", vendorAuth, upload.single("img"), hotelController.newHotel)
router.get("/myHotels", vendorAuth, hotelController.myHotels)
//show single and all hotels
router.get("/showAll", hotelController.viewAllHotels)
router.get("/show/:id", hotelController.viewOneHotel)
//update single hotel
router.patch("/show/:id", hotelController.updateHotel)
//delete one and all hotels
router.delete("/show/:id", hotelController.deleteHotel)
router.delete("/", hotelController.delAllHotels)
module.exports = router