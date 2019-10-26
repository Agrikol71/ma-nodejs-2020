let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('result');
    }, 5000);
})
promise.then(result=>{
    console.log('Have '+result);
},
error=>{
    console.log('Err'+reject);
}
);