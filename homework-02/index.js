const my_number = -1;
var myNumber = 0;
var number = 3;
const {sumT1, plT2} = require('./scr/app');
const {task} = require('./scr/task/task3');
const boot = async()=>{
    await console.log(sumT1(my_number+myNumber+number));
    await task('OK', 3000);
    await console.log(plT2('Земля', 4));
}

boot();