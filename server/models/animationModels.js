const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
    name: String,
})
const Animation = mongoose.model("animations", animationSchema)
module.exports = Animation;