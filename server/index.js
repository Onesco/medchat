const express = require('express')
const {validator, config} = require('valdocs')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));

config({app,title:"Med Chat AP1", version:"1.0.0"})




const port = 7000

app.listen(port, (err)=>{
    if (err){
        console.log(err)
    }
    console.log(`app is runnung at ${port}`)
})
