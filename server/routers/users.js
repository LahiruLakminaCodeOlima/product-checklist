const express = require('express');
const router = express.Router();
require('dotenv').config()

const User = require('../models/userModels');

router.post("/", (req, res)=>{
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password)
            {
                res.json("Success")
            }
            else
            {
                res.json("The password is worn")
            }
        }
        else{
            res.json("No account in this email")
        }
    })
})

router.post("/new", (req, res)=>{
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>err.json(err))
})

module.exports = router;