
const express = require('express');
const path = require('path');
const app = express();

var tasks = require('./data/tasks');


//With express framework
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/tasks', (req,res) => {
    res.json(tasks);
});

app.get('/randomtasks', (req,res) => {
    res.send(tasks[Math.floor(Math.random()*tasks.length)]);
});

module.exports = app;