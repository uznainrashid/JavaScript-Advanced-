// console.log("hello world")
// document.getElementById('1.5').style.backgroundColor = "yellow"
// let boxes = document.getElementsByClassName('box')
// boxes[3].style.backgroundColor = "blue" 
// // console.log(boxes)
// console.log(document.querySelectorAll('.box'))
// document.querySelectorAll('.box').forEach(e=>{
//    e.style.backgroundColor = "green"
// })
// let allcolor = document.querySelectorAll('.box')
// for ( let i = 0; i < allcolor.length; i++) {
//     if(i%2==0){

//         console.log('allcolor:', allcolor[i].style.backgroundColor = "green") 
//     }
// console.log('allcolor:', allcolor[i])
// }
// let allcolor = document.querySelectorAll(".box"); 
// for (var i = 0; i < allcolor.length; i++)  { 
//     console.log('allcolor', allcolor[i].style.backgroundColor = "black"); 
// }


//    
// console.log(document.getElementsByTagName("div"))
// e = document.getElementsByTagName("div")
// e[2].matches["#1.5"]

let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
    if (i % 2 == 0) {

        cur_box = box[i];
        const rand_bg = "#" + Math.floor((Math.random() * 10000) + 1);
        cur_box.style.backgroundColor = rand_bg;
    }
}