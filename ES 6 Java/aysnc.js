// async function getData(){
//     return new  Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 4000);
//     })
// }
async function getData(){
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
    // let data = await x.json()
    // let data = await x.text()
    // console.log(x)
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    let data = await x.json()
    // console.log (x)
    return data
}
async function main(){
console.log("loading scripting")
console.log("do something else")
console.log("Load Data ")
let data = await getData()

console.log(data)
console.log("this is over new task")
console.log("hello")
}
main()
// data.then ((v) => {
//     console.log("this is over new task")
//     console.log("hello")
// })
