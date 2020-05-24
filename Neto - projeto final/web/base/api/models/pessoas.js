var client = require('../../config/conexao.js');

module.exports = {
    listarPessoas,
    listarUmaPessoa,
    salvarPessoa,
    alterarPessoa,
    apagarPessoa
}

function listarPessoas (callback) {
    client.query('select * from pessoas order by pes_nome', callback);
}

function listarUmaPessoa(id, callback) {
    client.query('select * from pessoas where pes_codigo = ' + id, callback);
}


function salvarPessoa(dados, callback) {
    var msql = 'INSERT INTO pessoas SET ? ';
    dados.pes_dtcadastro = new Date();

	client.query(msql, dados, callback);
}

function alterarPessoa(dados, callback) {
    var msql = "UPDATE pessoas SET pes_nome = '" + dados.pes_nome + 
    "' , pes_email = '" + dados.pes_email + 
    "' , pes_endereco = '" + dados.pes_endereco + 
    "' , pes_cidade = '" + dados.pes_cidade +  
    "' , pes_telefone = '" + dados.pes_telefone + 
    "'  WHERE pes_codigo = '" + dados.pes_codigo + "'";
//    console.log('Estou alterando o cadastro.......');
//    console.log(msql);
    client.query(msql, callback);
}

function apagarPessoa(id, callback) {
    var mysql = "delete from pessoas where pes_codigo = " + id;
    client.query(mysql, callback);
}