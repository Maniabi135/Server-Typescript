import * as express from 'express';
import { json, raw, text, urlencoded} from 'body-parser';

import { sequelize } from './database';

const hostname = 'localhost';
const port     = 3000;

const server = express();
server.use(json());
server.use(raw());
server.use(text());
server.use(urlencoded({extended: false}));

server.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
   
server.get('/api', function(req, res){
    res.json({"Json" : "Data Json"});
});
   
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

// initiate connection to db
const mysequelize = sequelize;
// server.use('/users', users);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
