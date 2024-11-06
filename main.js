const express = require('express');
const app = express();
const port = 3203;
const path = require('path');

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/welcom', (req,res)=>{
    res.sendFile(path.join(__dirname,'welcom.html'))
})

app.get('/datos', (req,res)=>{
    res.sendFile(path.join(__dirname,'datos.html'))
})

app.listen(port)