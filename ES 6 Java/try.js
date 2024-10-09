let a = prompt("Enter s first number ")
let b = prompt("Enter s second number ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is a error  ")

}
let sum = parseInt(a) + parseInt(b)
function main(){
 let x =1;
    try {
        
        console.log("The sum is :", sum*x)
        return true
    } catch (error) {
        console.log("error a agya bhai")
        return false
    }
     finally{ 
        // the finally function tab bi run hoga jab ap return kr rahy hogy 
        console.log("file are being closed anf the dbms are being closed")
     }
}
let c =  main()