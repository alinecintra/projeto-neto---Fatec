var controller = require('../controllers/pessoas.js');

app.get('/pessoas/menupessoas', controller.menu);

app.get('/pessoas/listar', controller.pessoasListar);

app.get('/pessoas/editar/:codigo', controller.pessoasBuscar);

app.get('/pessoas/novo', controller.pessoasNovo);

app.post('/pessoas/salvar', controller.pessoasSalvar);

app.get('/pessoas/delete/:codigo', controller.pessoasApagar);