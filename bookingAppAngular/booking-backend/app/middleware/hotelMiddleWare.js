const handler = require("../helper")
const { verify } = require("jsonwebtoken")
const hotelModel = require("../../database/models/hotelModel")
const hotelAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("bearer ", "")
        const decodeToken = verify(token, process.env.JWT)
        const hotelDATA = await hotelModel.findOne({
            _id: decodeToken._id,
            "tokens.token": token
        })
        if (!hotelDATA) throw new Error("un authorized")
        req.hotel = hotelDATA
        req.token = token
        next()

    } catch (e) {
        handler.responseHandler(res, 500, false, e.message, "unautherized")
    }
}
module.exports = hotelAuth
