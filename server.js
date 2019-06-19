const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json());

//inicando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true });
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);

