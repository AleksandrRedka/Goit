'use strict'

const sum = new Promise(function(resolve,reject){
    let count=0;
    let arr=[];
    while(count<1000000){
        let random = Math.floor(Math.random()*100);
        arr.push(random)
        count++
    }
    let result = arr.reduce((acc,el)=>acc+el,0);
    if(result%2===0){
        resolve(result)
    }else{
        reject('Result wrong')
    }
})

sum.then(data=>console.log(data)).catch(err=>console.log('err'))