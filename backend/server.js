import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import path from 'path'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


import fs from 'fs'
if (!fs.existsSync('uploads')){
    fs.mkdirSync('uploads')
}



//app config

const app = express()
const port = process.env.PORT || 4000

//middleware
// app.use(express.json())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

// app.use(cors())
app.use(cors({
  origin: "https://varufoods.onrender.com",
  credentials: true
}))


// Serve uploaded images statically
app.use('/uploads', express.static('uploads'))

//db connection
connectDB();


// api endpoint
app.use("/api/food",foodRouter)

app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
      res.send("API Working")
})

app.listen(port,'0.0.0.0',()=>{

    console.log(`Server Started on http://localhost:${port}`)
})
