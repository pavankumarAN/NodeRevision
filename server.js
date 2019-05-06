const http = require('http');
const express = require('express');
const PORT = 8001;
const app = express();

var tasks = ["NodeJS", "MongoDB", "Angular", "ReactJS"];
//Without express
// const server = http.createServer((req,res)=> {
//     console.log("Server started");
//     res.end('Server ends here');
// });

// server.listen(3001, ()=>{
//     console.log('Server is running in port 3301');
    
// });

//With express framework
app.get('/', (req,res) => {
    res.send('<h1>Hello Pavan</h1>');
});

app.get('/randomtasks', (req,res) => {
    res.send(tasks[Math.floor(Math.random()*tasks.length)]);
});

app.listen(PORT, () => {
    console.log("Server is running at "+PORT);
});