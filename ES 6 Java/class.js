// let animal = {
//     eats : true 
// };
// let rabbit ={
//     jumps : true
// };
// rabbit.__proto__ =animal;
class animal {
    constructor(name){
        this.name = name ;
        console.log("Object is created...")
    }
    eats(){
        console.log("kha raha hain")
    }
    jumps(){
        console.log("kood raha hain")
    }
}
class lion extends animal {
    constructor(name){
        super(name)
        // this.name = name
        console.log("object is created and he is a lion..")
    }
    eats(){
        super.eats()
        console.log("kha raha ha roar")
    }

}
let a = new animal("Uznain")
console.log(a)
let l = new lion("Shera")
console.log(l)