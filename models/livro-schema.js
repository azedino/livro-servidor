const banco = require('./conexao.js');
const LivroSchema = new banco.Schema({
  _id: {
    type: banco.Schema.Types.ObjectId,
    auto: true
  },
  titulo: {
    type: String,
    required: true,
  },
  autores: {
    type: [String],
    required: true,
  },
  codEditora: {
    type: Number,
    required: true,
  },
  resumo: {
    type: String,
    required: true,
  }
});

const Livro = banco.model('livros', LivroSchema);
module.exports = Livro;