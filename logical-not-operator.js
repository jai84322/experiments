let hasPepsi = true 

if (!hasPepsi) {
    console.log("sorry, we are out of pepsi");
} else {
    console.log("okay we can eat here");
}


if (!(5>3) || !(2>5)) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}


let hasDegree = true
let isMinor = false
let hasExperience = true


if (hasDegree && !isMinor && hasExperience) {
    console.log("congo you got a job");
} else {
    let myMessage = "sorry, we can't do anything"
    if (!hasDegree) {
        myMessage += " you donot have the degree"
    }
    if (isMinor){
        myMessage += " you are minor "
    }
    if (!hasExperience) {
        myMessage += "you do not have required experience"
    }
    console.log(myMessage);
} 

let myBoolean = Boolean(2)
console.log(myBoolean);