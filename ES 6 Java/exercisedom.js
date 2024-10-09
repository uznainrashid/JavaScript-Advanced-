// let box_color = document.querySelectorAll(".box")
// for (let  i= 0; i< box_color.length;  i++) {
//     const cur_box =box_color[i];
//     let rand_bg = "#" + Math.floor((Math.random()*1000)+1)
//     cur_box.style.backgroundColor = rand_bg
// }
console.log("js in RandomColor")
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach( e=> {
    console.log(e.style.backgroundColor = getRandomColor())
    console.log(e.style.color = getRandomColor())

 });
//  const boxes = document.querySelector('.container').children;

// function getRandomColor() {
//   const val1 = Math.ceil(0 + Math.random() * 255);
//   const val2 = Math.ceil(0 + Math.random() * 255);
//   const val3 = Math.ceil(0 + Math.random() * 255);
//   return `rgb(${val1}, ${val2}, ${val3})`;
// }

// Array.from(boxes).forEach((e) => {
//  e.style.backgroundColor = getRandomColor();
//   e.style.color = getRandomColor();
// });