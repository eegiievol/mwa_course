const fs = require("fs")
const http = require("http")

let indexFileBuffer;
let statusCode = 200;

const handleAllRequests = function (req, res) {
    switch (req.method) {
        case "GET":
            switch (req.url) {
                case "/":
                    res.setHeader("Content-Type", "text/html");
                    fs.readFile(__dirname + "\\index.html", function (err, buffer) {
                        if (err) {
                            indexFileBuffer = "File not Found";
                            statusCode = 404;
                        } else {
                            indexFileBuffer = buffer;
                            statusCode = 200;
                        }
                    });
                    res.writeHead(statusCode);
                    res.end(indexFileBuffer);
                    break;

                case "/page1":
                    res.setHeader("Content-Type", "text/html");
                    fs.readFile(__dirname + "\\page1.html", function (err, buffer) {
                        if (err) {
                            indexFileBuffer = "File not Found";
                            statusCode = 404;
                        } else {
                            indexFileBuffer = buffer;
                            statusCode = 200;
                        }
                    });
                    res.writeHead(statusCode);
                    res.end(indexFileBuffer);
                    break;

                case "/page2":
                    res.setHeader("Content-Type", "text/html")
                    fs.readFile(__dirname + "\\page2.html", function (err, buffer) {
                        if (err) {
                            indexFileBuffer = "File not found"
                            statusCode = 404
                        }
                        else {
                            indexFileBuffer = buffer
                            statusCode = 200
                        }
                    })
                    res.writeHead(statusCode);
                    res.end(indexFileBuffer);
                    break;
            }
            break;

        case "POST":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(statusCode);
            res.end("{'message': 'Hello World!'}");
            break;


    }
}

const server = http.createServer(handleAllRequests)

server.listen(3434, "localhost", function () {
    console.log("server is listening on 3434")
})
