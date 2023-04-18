const handler = require("../helper")
const roomModel = require("../../database/models/roomModel");
const Handler = require("../helper");
class Room {
    static newRoom = async (req, res) => {
        try {
            const newRoom = await new roomModel(req.body)
            const ext = handler.resFile(req)
            newRoom.images = `${process.env.APPURL}${req.file.filename}.${ext}`
            await newRoom.save()
            handler.responseHandler(res, 200, true, newRoom, "room added successfully")
        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static viewAllRooms = async (req, res) => {
        try {
            const rooms = await roomModel.find();
            handler.responseHandler(res, 200, true, rooms, "rooms fetched successfully")

        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static viewOneRoom = async (req, res) => {
        try {
            const rooms = await roomModel.findById(req.params.id);
            handler.responseHandler(res, 200, true, rooms, "rooms fetched successfully")

        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static updateRoom = async (req, res) => {
        try {
            const rooms = await roomModel.findById(req.params.id)
            for (let el in req.body) {
                rooms[el] = req.body[el]
                await rooms.save()
                handler.responseHandler(res, 200, true, rooms, "room edited successfully")
            }
        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static deleteRoom = async (req, res) => {
        try {
            const rooms = await roomModel.findByIdAndDelete(req.params.id)
            handler.responseHandler(res, 200, true, rooms, "deleted one room")
        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static delAllRooms = async (req, res) => {
        try {
            await roomModel.deleteMany()
            handler.responseHandler(res, 200, true, [], "deleted all rooms")
        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    };
    static myRooms = async (req, res) => {
        try {
            await req.vendor.populate("myRooms")
            Handler.responseHandler(res, 200, true, req.vendor.myRooms, "show single room")
        } catch (e) { handler.responseHandler(res, 500, false, e.message, "error") }
    }
}
module.exports = Room