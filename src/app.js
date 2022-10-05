const express = require('express');

const app= express();

//! habilita el recivir datos en formato JSON
app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({message: 'server OK!'});
})

app.listen(8001, ()=>{
    console.log('server started at port 8001')
})


const userRouter = require('./users/users.router')

app.use('/', userRouter)