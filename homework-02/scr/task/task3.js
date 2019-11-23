function task(word, time){
let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(word);
    }, time);
})
promise.then(result=>{
    console.log('Have '+result);
},
error=>{
    console.log('Err'+reject);
}
)
};
module.exports = {task};