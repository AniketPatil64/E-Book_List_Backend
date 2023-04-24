const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRouter")
const BookRouter = require("./routes/BooksRouter")

app.use(express.json());
app.use(cors());

app.use("/",UserRouter);
app.use("/",BookRouter);

mongoose.connect("mongodb+srv://admin:admin@cluster0.u7beohz.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("err"+ err)
});


app.listen(6000,()=>{
    console.log("connected");
})

