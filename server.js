const mongoose=require('mongoose')
const dbConfig=require('./configs/db.config')
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
mongoose.connect(dbConfig.DB_URL,
    ()=>{console.log("Connected to MongodB")},
    (err)=>{console.log("Error:",err.message)})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json())
const notificationRoutes=require("./routes/ticketNotification.route")
notificationRoutes(app)
app.listen(3030,()=>{
    console.log("Application started on Port Number:3030")
})   