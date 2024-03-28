const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String, required: [true, "Needs a title"]
    }, 
    price: {
        type: Number, required: [true, "Needs price"]
    }, 
    description: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);