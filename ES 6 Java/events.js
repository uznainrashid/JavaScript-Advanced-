// let button = document.querySelector(".btn")
// button.addEventListener("click", () =>
//     {
//     alert("i was clicked");
//     document.querySelector(".content").innerHTML = "<b> you were clicked </b> enjoy your clicked " 
// });

// button.addEventListener("contextmenu", ()=>{
//     alert("you were right clicked")
// }) 
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child was clicked");
})
document.querySelector(".childcontainer").addEventListener("mousemove",(e)=>{
    e.stopPropagation()
    alert("childcontainer was clicked");
})
document.querySelector(".container").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("container was clicked");
})
// let a = setInterval(() => {
//     document.querySelector(".childcontainer").style.background = getRandomColor()
    
// }, 1000);
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let b = setTimeout(() => {
    document.querySelector(".child").style.background = getRandomColor()
}, 5000);
clearTimeout(b)