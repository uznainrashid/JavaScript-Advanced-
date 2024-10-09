let arr = [2, 3 , 4 ,5,9]
// const newArr = []
// for (let index  = 0; index   < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
const newArr = arr.map( (e, i, a) => {
    return e**2
    

})

console.log(newArr) 
const greaterthanSeven = (e) => {
    if(e < 7 )
    {
        return true
    }
    return false

}
console.log(arr.filter(greaterthanSeven))

let arr2 = [ 1,2,3,4,5,6,7]
const red = (a , b) => {
    return a * b
}
console.log(arr2.reduce(red))
