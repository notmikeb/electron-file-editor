'use strict';

const express = require('express');
var bodyParser = require('body-parser');
const Files = require('./Files')

const app = express();
app.use(bodyParser.json());

app.get('/files', function (req, res) {
    Files.list().then((files) => {
        res.send(files);
    });
});

app.get('/files/:name', function (req, res) {
    Files.getContent(req.params.name).then((content) => {
        res.send(content);
    });
});

app.delete('/files/:name', function (req, res) {
    Files.remove(req.params.name).then((content) => {
        res.send(content);
    });
});

app.post('/files/:name', function (req, res) {
    Files.save(req.params.name,req.body.content).then((content) => {
        res.send(content);
    });
});

Files.init().then(() => {
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
});
