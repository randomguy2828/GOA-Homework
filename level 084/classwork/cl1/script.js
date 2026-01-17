let Name = "Giorgi";

let usName = Number(prompt("სახელი"));
let usAge = prompt("ასაკი");

if(usName === Name && usAge > 18) {
  console.log("we have same name and you are more than 18 yo");
} 
else if(usName !== Name && usAge > 18) {
  console.log("We do not have same names but you are more than 18 yo");
} 
else{
  console.log("vin jandaba xar");
}