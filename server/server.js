const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const Wallpaper = require('./models/wallpapersModels');
const Animation = require('./models/animationModels');
const User = require('./models');

app.use(cors());
app.use(express.json())

// const uri = 'mongodb+srv://lahiruCodeOlimaChecklist:rootUser@cluster0.dnzcict.mongodb.net/codeolimachecklist?retryWrites=true&w=majority'
const uri = 'mongodb://127.0.0.1:27017/checklistDatabase'
const PORT = process.env.PORT || 3001;

const connect = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('MongoDB Error:', err);
    }
}
connect();


app.post('/api/v1/users', (req, res)=>{
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

app.post('/api/v1/usersNew', (req, res)=>{
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>err.json(err))
})

app.get('/api/v1/wallpapers', async (req, res)=>{
    
    try{
        const data = await Wallpaper.find();
        res.json(data)
    }
    catch(err)
    {
        res.json(err)
    }
});

app.get('/api/v1/animation', async (req, res)=>{
    
    try{
        const data = await Animation.find();
        res.json(data)
    }
    catch(err)
    {
        res.json(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});