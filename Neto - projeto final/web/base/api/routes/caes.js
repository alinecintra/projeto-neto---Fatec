var controller = require('../controllers/caes.js');

app.get('/caes/menucaes', controller.menu);

app.get('/caes/listar', controller.caesListar);

app.get('/caes/editar/:codigo', controller.caesBuscar);

app.get('/caes/novo', controller.caesNovo);

app.post('/caes/salvar', controller.caesSalvar);

app.get('/caes/delete/:codigo', controller.caesApagar);
