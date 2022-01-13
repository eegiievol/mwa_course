const gamesData = require("../data/games.json");
const students = require("../data/skul.json");

getAll = function(req, res) {    
    console.log("Controller GetAll invoked");
    let offset = 0;
    let count = 3;

    console.log(req.query);
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    if(req.query && req.query.count) {
        count = parseInt(req.query.count);
    }

    console.log("offset: ", offset);
    console.log("count: ", count);
    console.log("offset + count: ", offset + count);

    const pageGames = gamesData.slice(0, offset + count);
    res.status(200).json(pageGames);
}

multiply = function(req,res){
    console.log("multiplying");
    const ans = parseInt(req.params.first) * parseInt(req.query.second);
    res.status(200).json({"ans": ans});
}

getOne = function(req, res) {
    console.log("Controller GetOne invoked");
    const gameId = req.params.gameId;
    const theGame = gamesData[gameId];
    res.status(200).json(theGame);
}

addOne = function(req, res) {
    console.log("Controller addOne invoked");
    console.log(req.body);
    res.status(200).json(req.body);
}

getAllStudents = function(req,res){
    res.status(200).json(students)
}

getOneStudent = function(req,res){
    res.status(200).json(students[req.params.id])
}

module.exports = {
    getAll,
    getOne,
    addOne,
    multiply,
    getAllStudents,
    getOneStudent
}
