const express = require('express');
const router = express.Router();
require('dotenv').config()

const Animation = require('../models/animationModels');

router.get('/', async (req, res)=>{
    
    try{
        const data = await Animation.find();
        res.json(data)
    }
    catch(err)
    {
        res.json(err)
    }
})

module.exports = router;