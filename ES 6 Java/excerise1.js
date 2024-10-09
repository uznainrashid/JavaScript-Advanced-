async function delay(){
    return new Promise ((resolve,reject)=>{
        setInterval(() => {
            resolve()
            // resolve(wor)
            // resolve()
        }, 1000);
    })
}
(async function main(){
    let hello = await delay()
    console.log(hello,"hello");
    
})()