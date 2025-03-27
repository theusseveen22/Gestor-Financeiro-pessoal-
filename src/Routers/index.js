const express = require('express');

const router = express.Router();

// rotas despesas
router.post('/adicionar-despesa');
router.put('/editar-despesa');   
router.delete('/deletar-despesa');

// rotas receita
router.post('/adicionar-receita');
router.put('/editar-receita');
router.delete('/deletar-receita');

// roda despesas e receitas 
router.get('/receitas-despesas');

module.exports = router;