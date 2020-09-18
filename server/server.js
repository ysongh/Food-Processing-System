const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require("./config/db");

connectDB();

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use(cors());

server.get('/', (req, res) => res.send('Server Work'));

server.use('/api/user', require('./routes/user'));
server.use('/api/task', require('./routes/task'));
server.use('/api/gln', require('./routes/gln'));

const port = process.env.PORT || 1000;

server.listen(port, () => console.log('Port open on', port));