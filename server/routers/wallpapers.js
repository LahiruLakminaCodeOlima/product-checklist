const express = require('express');
const router = express.Router();
require('dotenv').config()

const Wallpaper = require('../models/wallpapersModels');

router.get("/", async (req, res)=>{
    
    try{
        const data = await Wallpaper.find();
        res.json(data)
    }
    catch(err)
    {
        res.json(err)
    }
});


module.exports = router;