async function sleep() {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(45)
        }, 2000);
    })
}
function sum(a,b,c){
    return a+b+c
}
// IIFE CONCEPT
(async function main() {
    console.log(a1)
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);
    // destrcuring concept?
    // let [x,y,...rest] = [8,9,10 ,22,224,44,44,44,44,4]
    // console.log(x,y,rest)
    let obj = {
        a:1,
        b:2,
        c:4
    }
    let {a,b} = obj;
    console.log(a,b);
    let arr = [1,4,6,]
    console.log( sum (arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    var a1 = 6;

})()
