import mongoose from 'mongoose'
import shortid from 'shortid'

const {String} = mongoose.Schema.Types;
const {Number} = mongoose.Schema.Types;

// Specify which fields the product object must have, and what type each field holds
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: true
    },
    price: {
        type: Number,
        requires: true
    },
    // Unique Id
    sku: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    description: {
        type: String,
        requires: true
    },
    mediaUrl: {
        type: String,
        requires: true
    }
});
// If the schema of Product already exists export it
export default mongoose.models.Product || mongoose.model("Product", ProductSchema)