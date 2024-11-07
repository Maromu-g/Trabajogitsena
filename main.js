const express = require('express');
const app = express();
const port = 3203;
const path = require('path');
const colors = require('colors')
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('Login')
    console.log("Yendo al login".green.bgBlue)
})

app.get('/welcom', (req,res)=>{
    res.render('welcom')
    console.log('Llendo al menu de bienvenida'.cyan.bgWhite)
})

app.get('/datos', (req,res)=>{
    res.render('datos')
    console.log('Llendo al menu de bienvenida'.magenta.bgYellow)
})

app.listen(port)