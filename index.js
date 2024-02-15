require('dotenv').config()
const express = require('express')
const app=express()
// const port=4000


app.get('/',(req,res)=>{
    res.send('congrusulation server has been created')
})


app.listen(process.env.PORT,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})