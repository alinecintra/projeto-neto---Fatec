var controller = require('../controllers/adocao.js');

app.get('/adocoes/novo', controller.novaAdocao);

app.get('/adocoes/listar', controller.adocoesListar);

app.post('/adocoes/salvar', controller.adocaoSalvar);

app.get('/adocoes/delete/:codigo', controller.adocaoApagar);
