const express = require('express');
const app = express();
app.use(express.static('./')); //have the server serve files from the public folder
const server = require('http').Server(app);

server.listen(3000);
console.log("Listening on port 3000");
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root:'./'});
})