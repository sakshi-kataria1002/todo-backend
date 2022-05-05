const express = require('express')
const mongoose = require('mongoose')
const apiroutes = require('./routes/api_routes')
const cors = require('cors')

const app = express()

const port = 2000
app.use(express.json()) 

app.use('/', apiroutes)
app.use(cors({
    origin: '*'
}))

const url = "mongodb+srv://sakshi_kataria:12345@kelltontech.yr85k.mongodb.net/Kellton-Todo?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser:true})
.then(() => {
    console.log('Database Connected')
}).catch(error => console.log(error))

app.listen(port, () => {
    console.log(`Running the ecommerce backend on port:
    "http://localhost:${port}/"`)
})
