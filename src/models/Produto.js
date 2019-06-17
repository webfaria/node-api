const mongoose = require('mongoose');

const ProdutoShema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    criadoEm: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Produto', ProdutoShema);