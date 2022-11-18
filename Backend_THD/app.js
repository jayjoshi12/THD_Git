const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000
const postmodel = require('./models/post');  
const  userRoutes = require("./routes/user");  
const cors = require("cors");
const bodyparser = require("body-parser");  


app.use(bodyparser.json());  

app.use((req, res, next)=>{  
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");  
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept"); 
    res.setHeader(
        "Access-Control-Allow-Methods",  
        "GET, POST, PATCH, DELETE, OPTIONS");  
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();  
});  

// const corsConfig = {
//     credentials: true,
//     origin: "http://localhost:4200",
// };


mongoose.connect("mongodb+srv://joshijay65:joshi7907@cluster0.k8pe1jk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to database");  
})
.catch(()=>{
    console.log("Connection Failed"); 
});  

app.use('/api/login', (req, res, next) =>{  
    const login_data = [
        {
            id:'dsjh',
            username:'jayjoshi',
            password:'Jay@123'
        },
        {
            id:'hrfd',
            username:'meetjoshi',
            password:'Meet@123'
        }

    ];
    res.status(200).json({  
        message: 'login data Fetched Successfully',  
        login: login_data  
    });   
 }); 

 app.use("/api/user", userRoutes);  
//  app.use(cors(corsConfig))
module.exports = app;  