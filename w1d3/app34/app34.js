require("dotenv").config();
const path = require("path");
const express = require("express");
const routes = require("./api/routes");

const app = express();

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", routes);

const server = app.listen(process.env.port, function() {
    console.log(process.env.MSG_SERVER_START + server.address().port);
});

