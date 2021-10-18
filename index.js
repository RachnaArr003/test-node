const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const rooms = {};


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/login', (req, res) => {
  res.render('login')
})


io.on("connection", socket => {
 
        console.log("connected")
});


server.listen(5000, () => console.log('server is running on port 8000'));