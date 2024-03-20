const mongoose = require('mongoose');

const WallpaperSchema = new mongoose.Schema({
    name: String,
})
const Wallpaper = mongoose.model("wallpaper", WallpaperSchema)
module.exports = Wallpaper;