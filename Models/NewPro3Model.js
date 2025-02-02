const mongoose = require("mongoose");
const newproSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
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
        type: Number,
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
    category: {
        type: String,
        required: true,
    },
    cuttedprice: {
        type: Number,
        required: true,
    },
    modelName: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    colour: {
        type: String,
        required: true,
    },
    screenSize: {
        type: String,
        required: true,
    },
    about_this_item: {
        type: String,
    },
    product_dimensions: {
        type: String,
    },
    fash_memory_type: {
        type: String,
    },
    operating_sysyem: {
        type: String,
    },
    mounting_hardware: {
        type: String,
    },
    special_teatures: {
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('newpro3', newproSchema);