const mongoose = require("mongoose");
const computerserverSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    video: {
        type: String,
    },
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    image3: {
        type: String,
        required: true,
    },
    image4: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating:{
        type: String,
        required:true,
    },
    category: {
        type: String,
        required: true,
    },
    cuttedprice: {
        type: String,
        required: true,
    },
    itemWeight:{
        type: String,
    },
    compatibleDevices:{
        type: String,
    },
    modelName:{
        type: String,
    },
    powerSupply:{
        type: String,
    },
    warranty:{
        type: String,
    },
    processor:{
        type: String,
    },
    hardDrive:{
        type: String,
    },
    colour:{
        type: String,
        required:true,
    },
    screenSize:{
        type: String,
    },
    about_this_item:{
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('computerserver', computerserverSchema);