import express from 'express';
import path from 'path';
import fs from 'fs'

const app = express()

var __dirname = fs.__dirname

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html').toString());
});

app.listen(9000);