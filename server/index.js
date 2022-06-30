const express = require('express')
const {config} = require('valdocs')
const cors = require('cors')
require('dotenv').config()

const router = require('./routes/auth')

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));

config({app,title:"Med Chat AP1", version:"1.0.0"})


app.use('/', router)

const port = 7000

app.listen(port, (err)=>{
    if (err){
        console.log(err)
    }
    console.log(`app is runnung at ${port}`)
})
