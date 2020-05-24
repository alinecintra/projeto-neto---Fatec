var caesModel = require('../models/caes');
var pessoasModel = require('../models/pessoas');
var adocoesModel = require('../models/adocao');

module.exports = {
    novaAdocao,
    adocoesListar,
    adocaoSalvar,
    adocaoApagar,
    
}

function novaAdocao (req, res) {
    var dados = [
        {
            ado_codigo: 0,
            pes_codigo: null,
            cao_codigo: null
        }
    ];

    caesModel.listarCaes(function (error, caes) {
        pessoasModel.listarPessoas(function (error, pessoas) {
            res.render('adocao/frm_adocoesEditar.ejs', {
                adocao: dados,
                caes: caes || [],
                pessoas: pessoas || []
            })
        });
    });
}

function adocoesListar (req, res) {
    adocoesModel.listarAdocoes(function (error, adocoes) {
        res.render('adocao/frm_adocoesListar.ejs', {
            title: 'Nova adoção',
            adocoes: adocoes || []
        })
    });
}

function adocaoSalvar (req, res) {
    adocoesModel.salvarAdocoes(req.body, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/adocoes/listar');
    })
}

function adocaoApagar(req, res) {
    var id = req.params.codigo;
    adocoesModel.apagarAdocao(id, function(err, result) {
        if (err) { throw err }
        res.redirect('/adocoes/listar');
    });
}


