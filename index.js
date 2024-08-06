const express=require('express');
const app=express();
const cors = require("cors");
require("./Connection/conn");
const userRoutes=require("./routes/userRoutes");
const listRoutes=require("./routes/listRoutes");


app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use("/users",userRoutes);
app.use("/lists",listRoutes);

app.listen(4000,()=>{
    console.log("server started");
})