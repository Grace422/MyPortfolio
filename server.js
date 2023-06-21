const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

//connect to db and start server
mongoose
     .connect(process.env.MONGO_URI)
     .then(() => {
        
        app.listen(PORT, () => {
            console.log(`Connection Successfull, Server Running on port ${PORT}`) 
        })
     })
     .catch((err) => console.log(err)) 

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/app.route"));

