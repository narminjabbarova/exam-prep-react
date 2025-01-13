const express = require('express')
const mongoose = require('mongoose');
const productRouter = require('./routes/Route.js')
const DB_URL = "mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express()
const port = 3000


app.use(express.json())
app.use("/api/products", productRouter)



mongoose.connect(DB_URL)
.then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

    console.log('Connected!')
  });