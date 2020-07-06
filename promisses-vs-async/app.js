function f001() {
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve('foo1 is done ')
        }, 1000);
    })
}



function f002() {
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve('foo2 is done ')
        }, 2000);
    })
}

function f003() {
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve('foo3 is done ')
        }, 3000);
    })
}



/* (async()=>{
    const result1 = await f001()
    console.log(result1);
    const result2 = await f002()  // will be done wenn result one is done 
    console.log(result2);
    const result3 = await f003()  // will be done wenn result 3 is done 
    console.log(result3);
    
})() */


const promis1 = f001()
const promis2 = f002()


Promise.all([promis1 , promis2]).then(results =>{ // will call together and wenn both af them are done than run f003
    console.log(results);
    f003().then(result3 =>{
        console.log(result3);
        
    })
})   