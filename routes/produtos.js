const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    msg: 'Rota produtos GET',
  });
});

router.post('/', (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };
  res.status(201).send({
    msg: 'Rota de produtos POST',
    produtoCriado: produto,
  });
});

router.get('/:id_produto', (req, res, next) => {
  const id = req.params.id_produto;
  if (id === '2') {
    res.status(401).send();
  } else {
    res.status(200).send({
      msg: 'GET exclusivo produto',
      id,
    });
  }
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    msg: 'Rota de produtos DELETE',
  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
    msg: 'Rota de produtos PATCH',
  });
});

module.exports = router;
