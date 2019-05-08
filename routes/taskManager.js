const express = require('express');
const router = express.Router();
var tasks = require('../data/tasks');
router.get('/list', (req,res) => {
    res.render('tasks/list',{
        title : 'Task List',
        tasks : tasks
    });
});
router.get('/add', (req,res) => {
    res.render('tasks/add', {
        title : 'Add Task',
    });
});

// router.get('/details', (req,res) => {
//     res.render('tasks/details', {
//         title : 'task details'
//     })
// });
router.get('/details/:id', (req,res) => {
    console.log(req.params.id);
    const id = Number(req.params.id);
    let task = null;
    for(let i=0; i<tasks.length; i++) {
        if(id === tasks[i].id) {
            task = tasks[i];
            break;
        }
    }

    res.render('tasks/details', {
        
        title : 'Task details', 
        task : task
    });
});

// app.get('/tasks', (req,res) => {
//     res.json(tasks);
// });

// app.get('/randomtasks', (req,res) => {
//     res.send(tasks[Math.floor(Math.random()*tasks.length)]);
// });


module.exports = router;