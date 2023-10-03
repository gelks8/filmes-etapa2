const mongoose = require('mongoose');

const FilmeSchema = {
    nome: String,
    avaliacao: Number,
    foto: String
}

module.exports = mongoose.model('Filme', FilmeSchema);

