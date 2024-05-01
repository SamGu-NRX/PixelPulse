import express from 'express';
import path from 'path';

const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.sendFile('./index.html', root));
});

app.listen(9000);