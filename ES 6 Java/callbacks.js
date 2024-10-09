// console.log("hey uznain")
// const loadScripts = (src, callback)=>{
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("uznain is here");
//     document.head.append(sc)
// }
// const callback = (arg)=>{
//     console.log(arg)
// }
// loadScripts("src=https://{{cdn}}/prismjs@v1.x/components/prism-core.min.js" , callback)
// PROMISES 
// let prom1 = new Promise( (resolve, reject) =>{
// setTimeout(() => {
//     console.log("yes i am a uznain")
//     resolve("ok you are uznain")
// }, 10000);
// })
// prom1.then((a)=>{
//     console.log(a)
// })
// const promise1 = Promise.resolve(6)
// const Promise2 = 7;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 3000 , 'foo');
// })
// Promise.all([promise1,Promise2,promise3]).then((values)=>{
//     console.log(values)
// })

 let  prom2 = new Promise((resolve, reject) => {
    let a = Math.random() 
if (a < 0.5) {
    reject("no random number was not supporting you")
} else {
        setTimeout(() => {
            console.log("yes i am a uznain")
            resolve("uznain")
        }, 3000);    
    }    
})    

let  prom3 = new Promise((resolve, reject) => {
    let a = Math.random()
if (a < 0.5) {
    reject("no random number was not supporting you")
} else {
        setTimeout(() => {
            console.log(" i am  uznain")
            resolve("uznain 22")
        }, 4000);    
    }    
})    
let p4 = Promise.all([prom2,prom3]).then((a)=>{
    console.log(a)    
}).catch( err =>{
console.log(err)    
})
let p5= Promise.allSettled([prom2,prom3]).then((a)=>{
    console.log(a)    
}).catch( err =>{
console.log(err)    
})
let p3 = Promise.any([prom2,prom3]).then((a)=>{
    console.log(a)
}).catch( err =>{
console.log(err)    
})

