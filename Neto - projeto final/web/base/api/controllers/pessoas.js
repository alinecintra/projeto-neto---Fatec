var moment = require('moment');
var pessoas = require('../models/pessoas.js');

module.exports = {

    menu,
    pessoasListar,
    pessoasBuscar,
    pessoasNovo,
    pessoasSalvar,
    pessoasApagar

}

function menu(req, res) {
    res.render('pessoas/frm_menupessoas.ejs', { title: 'Pessoas' });
}

function pessoasListar(req, res) {
     pessoas.listarPessoas(function (err, result) {


        if (result) {
            for (var i = 0; i < result.length; i++) {
                result[i].pes_dtcadastro = moment(result[i].pes_dtcadastro).format('DD/MM/YYYY');
            }
        }
        

        if (err) {
            throw err;
        }
        res.render('pessoas/frm_pessoasListar.ejs',
            {
                title: 'Pessoas',
                pessoas: result
            });
    });
};

function pessoasBuscar(req, res) {
    var id = req.params.codigo;
    pessoas.listarUmaPessoa(id, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render('pessoas/frm_pessoasEditar.ejs',
            {
                pessoa: result
            });


    });
}

function pessoasNovo(req, res) {
    var dados = [
        {
            pes_codigo: "",
            pes_nome: "",
            pes_email: "",
            pes_endereco: "",
            pes_cidade: "",
            pes_telefone: "",
        }
    ];

    res.render('pessoas/frm_pessoasEditar.ejs',
    {
        pessoa: dados
    });
}

function pessoasSalvar(req, res) {
    var dados = req.body;
    console.log("Salvando Cadastro...");
    console.log(req.body);
    if (dados.pes_codigo == "") {
        dados.pes_codigo = null;
        console.log("Inserindo dados...");
        pessoas.salvarPessoa(dados, function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/pessoas/listar');
        })
    } else {
        console.log("Alterando dados...");
        pessoas.alterarPessoa(dados, function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/pessoas/listar');
        })
    }
}

function pessoasApagar(req, res) {
    var id = req.params.codigo;
    pessoas.apagarPessoa(id, function(err, result) {
        if (err) { throw err }
        res.redirect('/pessoas/listar');
    });
}
