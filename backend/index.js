const express = require('express');
const bodyParser = require('body-parser');
const cropAdvisor = require('./api/cropAdvisor');

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const port  = process.env.PORT || 5000

// const connectToMongo=require("./db");

// connectToMongo();

// const port=5000;
// app.get("/",(req,res)=>{
  //     res.send("hello world");
  // });
  
  mongoose.connect(process.env.MONGOMY, { useNewUrlParser: true });
  
  //available Routes
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/feed", require("./routes/feeds"));
  app.use('/api/cropAdvisor', cropAdvisor);

// app.listen(process.env.port,()=>{
//     console.log("connected to server");
// })

//chatsystem
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

//chatsystem end here

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});