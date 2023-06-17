var localModel = require("../models/localModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    localModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var numero = req.body.numeroServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está indefinida!");
    } else {
       
        localModel.entrar(numero, fkEmpresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("numero e/ou fkEmpresa inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e fkEmpresa!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var rua = req.body.ruaServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    var andar = req.body.andarServer;
    var complemento = req.body.complementoServer;
    var fkEmp = req.body.fkEmpresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (andar == undefined) {
        res.status(400).send("Seu nuandarmero está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!");
    } else if (fkEmp == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    } else {
       
        // Passe os valores como parâmetro e vá para o arquivo localModel.js
        localModel.cadastrar(nome, rua, cep, numero, andar, complemento, fkEmp)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function remover(req, res){

    var idEmpresa = req.body.idServer;
    var nome = req.body.nomeServer

    console.log(`Recuperando medidas em tempo real`);

    if (idEmpresa == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else {
       
        // Passe os valores como parâmetro e vá para o arquivo localModel.js
        localModel.remover(nome, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarEstufas(req, res){

        var idEmpresa = req.params.idEmpresa;
   
        console.log(`Recuperando medidas em tempo real`);
   
        localModel.buscarEstufas(idEmpresa).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    buscarEstufas,
    remover
}