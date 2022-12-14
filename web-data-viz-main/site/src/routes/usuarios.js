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

router.post("/inserirQuiz", function (req, res) {
    usuarioController.inserir_quiz(req, res);
});

router.get("/exibirResultado", function (req, res) {
    usuarioController.exibir_resultado(req, res);
});

router.post("/inserirQuiz2", function (req, res) {
    usuarioController.inserir_quiz2(req, res);
});

module.exports = router;