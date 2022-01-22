//prompt() :: an old way of sending msg and get input value (outdated)
            // it pauses JS until value input
            // cannot apply any css, might be blocked by the browsers.
     
const age = prompt("How old are you?"); 
console.log(typeof age);// By default prompt value = String 

//parseInt():: Cast String to Number 
console.log(parseInt(age));

const age2 = parseInt(prompt("How old are you?"));
console.log(age2);

// conditional: if~ else~ else if~

// isNaN : checks whether the value is number or not
console.log(isNaN(age)); // false : is number, true: is not a number

if(isNaN(age) || age < 0){
    console.log("please write a real positive number")
}
else if(age < 18){
    console.log("You are too young");
}
else if(age >= 18 && age <= 50){
    console.log("You can drink")
}
else if(age > 50 && age <= 80){
    console.log("You should exercise");
}
else if(age > 80){
    console.log("You can do whatever you want!");
}







