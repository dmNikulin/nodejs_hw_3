const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const pathToJson = path.join(__dirname, 'counter.json');

const counterData = JSON.parse(fs.readFileSync(pathToJson, 'utf-8'));

app.get('/', function(req, res) {
    res.send(`<h1>Welcome to the HOME web page!</h1><a href="/about">To about page</a> <p>Просмотров:${counterData.home}</p>`);
    counterData.home += 1;
    fs.writeFileSync(path.join(__dirname, 'counter.json'), JSON.stringify(counterData, null, 2));
})


app.get('/about', function(req, res) {
    res.send(`<h1>About Page</h1><a href="/">To home</a><p>Просмотров:${counterData.about}</p>`)
    counterData.about += 1;
    fs.writeFileSync(path.join(__dirname, 'counter.json'), JSON.stringify(counterData, null, 2));
});

app.listen('3000');