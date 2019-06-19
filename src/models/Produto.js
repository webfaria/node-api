const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

ProdutoShema.plugin(mongoosePaginate);

mongoose.model('Produto', ProdutoShema);