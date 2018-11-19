"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const database_1 = require("./database");
const hostname = 'localhost';
const port = 3000;
const server = express();
server.use(body_parser_1.json());
server.use(body_parser_1.raw());
server.use(body_parser_1.text());
server.use(body_parser_1.urlencoded({ extended: false }));
server.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.get('/api', function (req, res) {
    res.json({ "Json": "Data Json" });
});
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});
// initiate connection to db
const mysequelize = database_1.sequelize;
// server.use('/users', users);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map