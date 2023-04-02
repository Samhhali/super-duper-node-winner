const express = require('express');
const cluster = require('cluster');

console.log(cluster.isMaster);

if(cluster.isMaster){
    cluster.fork();
    cluster.fork();
}else {
    const app = express();
    function makeExpensiveCalculation(duration){
        const start = Date.now();
        while(Date.now() - start < duration){
            // do nothing
        }
    }
    app.get('/', (req, res) => {
        makeExpensiveCalculation(10000);
      res.send('Hi there');
    });
    
    app.listen(3000);
}