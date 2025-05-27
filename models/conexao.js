const banco = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

banco.connect('mongodb://localhost:27017/livraria')
  .then(() => {
    console.log('Conectado ao MongoDB!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

banco.Promise = global.Promise;

module.exports = banco;