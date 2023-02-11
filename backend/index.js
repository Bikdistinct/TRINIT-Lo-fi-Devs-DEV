const express = require('express');
const bodyParser = require('body-parser');
const cropAdvisor = require('./api/cropAdvisor');
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const port  = process.env.PORT || 5000

// const connectToMongo=require("./db");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// connectToMongo();

// const port=5000;
// app.get("/",(req,res)=>{
  //     res.send("hello world");
  // });
  
  // mongoose.connect(process.env.MONGOMY, { useNewUrlParser: true });
  
  //available Routes
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/feed", require("./routes/feeds"));
  app.use("/api/cropAdvisor", cropAdvisor);


  const getLocation = require('./api/currentLoc');

  getLocation().then(location => {
    console.log(location);
  }).catch(error => {
    console.error(error);
  });


  


  // app.use("/loc", "./geolocation");

// app.listen(process.env.port,()=>{
//     console.log("connected to server");
// })

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});