const express = require("express");

const router = express.Router();

const gamesController = require("../controllers/games.controller");

router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne)
    ;

router.route("/games/:gameId")
    .get(gamesController.getOne)
    ;

router.route("/multiply/:first")
    .get(gamesController.multiply)

router.route("/students")
    .get(gamesController.getAllStudents)
    ;

router.route("/students/:id")
    .get(gamesController.getOneStudent)
    ;

module.exports = router;
