const express = require('express');
const router = express.Router();
const Livro = require('../models/livro-dao.js');

router.get("/", async (req, res) => {
  try {
    const livros = await Livro.obterLivros();
    res.status(200).json(livros);
  } catch (erro) {
    res.status(500).json({ mensagem: "Falha ao obter os livros.", erro: erro.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const livro = req.body;
    await Livro.incluir(livro);
    res.status(201).json({ mensagem: "Livro incluído com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Falha ao incluir o livro.", erro: erro.message });
  }
});

router.delete("/:codigo", async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await Livro.excluir(codigo);
    res.status(200).json({ mensagem: "Livro excluído com sucesso!" });
  } catch (erro) {
    res.status(500).json({ mensagem: "Falha ao excluir o livro.", erro: erro.message });
  }
});

module.exports = router;