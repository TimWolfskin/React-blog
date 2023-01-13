const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();


const mongoConnect = () => {
    mongoose.connect(process.env.MONGO_URL);
}

// async function main() {

    
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   }

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }).then(console.log("connected to mongoose"))


app.listen("5000", () => {
    console.log("Backend is runnig")
});