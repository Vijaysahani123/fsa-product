const express = require('express')
const mongoose = require('mongoose')

const homeRouter = require('./routes/homeRouter')
const productRooter = require('./routes/productRouter')
const config=require('./config') 

const app = express();


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

mongoose.connect(config.dbConStr, (err, result) => {
    if (!err) {
        console.log('connected to db')
    } else {
        console.log(err)
    }

})

app.use('/', homeRouter)
app.use('/', productRooter)