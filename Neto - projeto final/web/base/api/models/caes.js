var client = require('../../config/conexao.js');

module.exports = {
    listarCaes,
    listarUmCao,
    salvarCao,
    alterarCao,
    apagarCao
}

function listarCaes (callback) {
    client.query('select * from caes order by cao_nome', callback);
}

function listarUmCao(id, callback) {
    client.query('select * from caes where cao_codigo = ' + id, callback);
}


function salvarCao(dados, callback) {
    var msql = 'INSERT INTO caes SET ? ';
    dados.cao_dtcadastro = new Date();

	client.query(msql, dados, callback);
}

function alterarCao(dados, callback) {
    var msql = "UPDATE caes SET cao_nome = '" + dados.cao_nome + 
    "' , cao_sexo = '" + dados.cao_sexo + 
    "' , cao_raca = '" + dados.cao_raca + 
    "' , cao_idade = '" + dados.cao_idade + 
    "'  WHERE cao_codigo = '" + dados.cao_codigo + "'";
//    console.log('Estou alterando o cadastro.......');
//    console.log(msql);
    client.query(msql, callback);
}

function apagarCao(id, callback) {
    var mysql = "delete from caes where cao_codigo = " + id;
    client.query(mysql, callback);
}