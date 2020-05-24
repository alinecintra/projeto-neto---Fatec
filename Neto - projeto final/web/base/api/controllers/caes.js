var moment = require('moment');
var caes = require('../models/caes.js');

module.exports = {

    menu,
    caesListar,
    caesBuscar,
    caesNovo,
    caesSalvar,
    caesApagar

}

function menu(req, res) {
    res.render('caes/frm_menucaes.ejs', { title: 'Cães' });
}

function caesListar(req, res) {
    caes.listarCaes(function (err, result) {

        if (result) {
            for (var i = 0; i < result.length; i++) {
                result[i].cao_dtcadastro = moment(result[i].cao_dtcadastro).format('DD/MM/YYYY');
            }
        }

        if (err) {
            throw err;
        }
        res.render('caes/frm_caesListar.ejs',
            {
                title: 'Caes',
                caes: result
            });
    });
};

function caesBuscar(req, res) {
    var id = req.params.codigo;
    caes.listarUmCao(id, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render('caes/frm_caesEditar.ejs',
            {
                cao: result
            });


    });
}

function caesNovo(req, res) {
    var dados = [
        {
            cao_codigo: "",
            cao_nome: "",
            cao_sexo: "",
            cao_raca: "",
            cao_idade: ""
        }
    ];

    res.render('caes/frm_caesEditar.ejs',
        {
            cao: dados
        });
}

function caesSalvar(req, res) {
    var dados = req.body;
    console.log("Salvando Cadastro...");
    console.log(req.body);
    if (dados.cao_codigo == "") {
        dados.cao_codigo = null;
        console.log("Inserindo dados...");
        caes.salvarCao(dados, function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/caes/listar');
        })
    } else {
        console.log("Alterando dados...");
        caes.alterarCao(dados, function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/caes/listar');
        })
    }
}

function caesApagar(req, res) {
    var id = req.params.codigo;
    caes.apagarCao(id, function (err, result) {
        if (err) { throw err }
        res.redirect('/caes/listar');
    });
}
