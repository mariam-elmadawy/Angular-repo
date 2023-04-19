const mongoose = require("mongoose")
const roomSchema = mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "hotels"
    },
    roomnumber: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    roomtype: {
        type: String,
        lowercase: true,
        required: true,
        enum: ["single", "double", "triple", "suite"]
    },
    details: {
        type: String,
        required: true,
        lowercase: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000
    },
    images: {
        type: String
    }
})
// roomSchema.virtual('room', {
//     ref: 'Hotels',
//     localField: 'hotelId', // Of post collection
//     foreignField: '_id',    // Of user collection
// })
const roomModel = mongoose.model("Rooms", roomSchema)
module.exports = roomModel