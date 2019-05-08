const express = require('express');
const router = express.Router();

router.get('/list', (req,res) => {
    res.render('task-list',{
        title : 'Task List',
        tasks : tasks
    });
});
router.get('/add', (req,res) => {
    res.render('add-task', {
        title : 'Add Task'
    });
});

// app.get('/tasks', (req,res) => {
//     res.json(tasks);
// });

// app.get('/randomtasks', (req,res) => {
//     res.send(tasks[Math.floor(Math.random()*tasks.length)]);
// });


module.exports = router;