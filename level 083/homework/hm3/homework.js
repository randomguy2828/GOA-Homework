let myName = "Giorgi";

let userName = prompt("შეიყვანე შენი სახელი:");

if (userName.toLowerCase() === myName.toLowerCase()) {
  alert("გილოცავ");
} 
else {
  alert("შენი სახელი არის: " + userName);
}