var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas2/:carneid2", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real2/:carneid2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})