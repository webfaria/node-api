const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();

//inicando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true });
requireDir('./src/models');

const Produto = mongoose.model('Produto');

//primeira rota
app.get('/',(req, res) => {
    Produto.create({
        titulo: 'React Native',
        descricao: 'Build native apps with React',
        url: 'www.github.com/webfaria'
    });

    res.send("Hello Rocksetseat");
})

app.listen(3001); 

