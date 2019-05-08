
const express = require('express');
const path = require('path');
const app = express();
const taskRoutes = require('./routes/taskManager');
var tasks = require('./data/tasks');

// //With express framework
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname,'public/index.html'));
// });
app.set('view engine', 'ejs');

app.use('/tasks', taskRoutes);
//app.use(express.static(path.join(__dirname,'public')));

module.exports = app;