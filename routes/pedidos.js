const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    msg: 'Rota pedidos GET',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    msg: 'Rota de pedidos POST',
  });
});

router.get('/:id_pedido', (req, res, next) => {
  const id = req.params.id_pedido;
  if (id === '2') {
    res.status(401).send();
  } else {
    res.status(200).send({
      msg: 'GET exclusivo pedido',
      id,
    });
  }
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
    msg: 'Rota de pedidos DELETE',
  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
    msg: 'Rota de pedidos PATCH',
  });
});

module.exports = router;
