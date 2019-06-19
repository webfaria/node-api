const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

module.exports = {
    async index(req, res){
        const produtos = await Produto.find();
        return res.json(produtos);
    },

    async show(req, res){
        const produto = await Produto.findById(req.params.id);
        return res.json(produto);
    },

    async store(req, res){
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },

    async update(req, res){
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new:true });
        return res.json(produto);
    },

    async delete(req, res){
        const produto = await Produto.findByIdAndRemove(req.params.id);
        return res.send();
    }
};