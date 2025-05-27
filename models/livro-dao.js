const Livro = require('./livro-schema.js');

const obterLivros = async () => { 
  return await Livro.find()
};

const incluir = async (livro) => {
  await Livro.create(livro);
};

const excluir = async (codigo) => {
  Livro.deleteOne({ _id: codigo });
}

module.exports = {
  obterLivros,
  incluir,
  excluir
};
