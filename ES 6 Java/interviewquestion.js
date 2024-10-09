// you are create a school house with the function and and the house are four house name are grifinderr(length are less than 6),tipo house(length less than 8) ghazi houses (length less than 12) and the kips house (length equal to or greater than) 
let students = ["uznainrashidiqbal","ali","mohsin","saad","aliraza","mohsinalishakir",
    "huzaifa","faizanali","sho","usmanahmed","sir imran",]
    let houses = []
    for (const student of students) {
        if(student.length < 6){
            houses.push("grifinderhouse")
        }
        else if(student.length < 8){
            houses.push("tipohouse")

        } 
        else if(student.length < 12){
            houses.push("ghazihouse")

        }
        else{
            houses.push("kipshouse")
        }
    }
    console.log(houses)

