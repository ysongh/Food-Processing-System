const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require("./config/db");

connectDB();

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.get('/', (req, res) => res.send('Server Work'));

server.use('/api/task', require('./routes/task'));

const port = process.env.PORT || 1000;

server.listen(port, () => console.log('Port open on', port));