const { parentPort } = require('worker_threads');

function makeExpensiveCalculation(duration){
    const start = Date.now();
    while(Date.now() - start < duration){
        // do nothing
    }
}