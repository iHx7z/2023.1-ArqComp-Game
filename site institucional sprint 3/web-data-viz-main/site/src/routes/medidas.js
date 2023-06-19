var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})
// ----------------------------------- DASH 2 ----------------------------
router.get("/ultimas/:id2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/tempo-real/:id2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

// --------------------------------- DASH 3 -------------------------------

router.get("/ultimas/:id3", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/tempo-real/:id3", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
})

// ------------------------------- DASH 4 ---------------------------------

router.get("/ultimas/:id4", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/tempo-real/:id2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal4(req, res);
})

// ---------------------------- DASH 5 ------------------------------------

router.get("/ultimas/:id5", function (req, res) {
    medidaController.buscarUltimasMedidas5(req, res);
});

router.get("/tempo-real/:id5", function (req, res) {
    medidaController.buscarMedidasEmTempoReal5(req, res);
})

// ----------------------------------------- DASH 6 -----------------------

router.get("/ultimas/:id6", function (req, res) {
    medidaController.buscarUltimasMedidas6(req, res);
});

router.get("/tempo-real/:id6", function (req, res) {
    medidaController.buscarMedidasEmTempoReal6(req, res);
})


module.exports = router;
