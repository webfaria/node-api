const express = require("express");
const mongoose = require('mongoose');

//iniciando o App
const app = express();

//inicando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//primeira rota
app.get('/',(req, res) => {
res.send("Hello Rocksetseat");

})

app.listen(3001); 

