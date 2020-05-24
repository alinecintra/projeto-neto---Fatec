var client = require('../../config/conexao.js');

module.exports = {
    listarAdocoes,
    salvarAdocoes,
    apagarAdocao
};

function listarAdocoes (callback) {
    client.query('select a.ado_codigo, a.pes_codigo, b.pes_nome, a.cao_codigo, c.cao_nome from adocoes a inner join pessoas b on a.pes_codigo = b.pes_codigo inner join caes c on c.cao_codigo = a.cao_codigo', callback);
}

function salvarAdocoes (adocao, callback) {
    client.query("insert into adocoes (ado_codigo, pes_codigo, cao_codigo) values (" + adocao.ado_codigo + ", " + adocao.pes_codigo + ", " + adocao.cao_codigo + ")", callback);
}


function apagarAdocao(id, callback) {
    var mysql = "delete from adocoes where ado_codigo = " + id;
    client.query(mysql, callback);
}