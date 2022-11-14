
const express = require('express')
const app = express()
const port = 3000

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

module.exports = app;  