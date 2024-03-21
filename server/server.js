const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json())

const users = require('./routers/users')
const wallpapers = require('./routers/wallpapers') 
const animations = require('./routers/animations')


const uri =process.env.REACT_APP_URL || 'mongodb://127.0.0.1:27017/checklistDatabase'  
const PORT = 3001;
const API_URL = "/api/v1/"

const connect = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('MongoDB Error:', err);
    }
}
connect();

app.use(`${API_URL}users`, users);
app.use(`${API_URL}users/new`, users);
app.use(`${API_URL}wallpapers`, wallpapers);
app.use(`${API_URL}animation`, animations);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} ${uri}`);
});