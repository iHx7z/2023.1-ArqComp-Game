var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});




// --------------------------- ERRAD0 ------------------------

router.post("/Errado1", function (req, res) {
    usuarioController.errado1(req, res);
});

router.post("/Errado2", function (req, res) {
    usuarioController.errado2(req, res);
});

router.post("/Errado3", function (req, res) {
    usuarioController.errado3(req, res);
});

router.post("/Errado4", function (req, res) {
    usuarioController.errado4(req, res);
});

router.post("/Errado5", function (req, res) {
    usuarioController.errado5(req, res);
});

router.post("/Errado6", function (req, res) {
    usuarioController.errado6(req, res);
});


// ---------------------------- CERTO ----------------------------------

router.post("/Certo1", function (req, res) {
    usuarioController.certo1(req, res);
});

router.post("/Certo2", function (req, res) {
    usuarioController.certo2(req, res);
});

router.post("/Certo3", function (req, res) {
    usuarioController.certo3(req, res);
});

router.post("/Certo4", function (req, res) {
    usuarioController.certo4(req, res);
});

router.post("/Certo5", function (req, res) {
    usuarioController.certo5(req, res);
});

router.post("/Certo6", function (req, res) {
    usuarioController.certo6(req, res);
});


module.exports = router;