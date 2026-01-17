let num = prompt("შეიყვანე რიცხვი");
num = Number(num); 

if (num > 20) {
  if (num % 2 === 0) {
    alert("ლუწია" + (num * 2));
  } 
  else {
    alert("კენტია" + (num * 3));
  }
} 
else {
  if (num % 3 === 0) {
    alert("იყოფა" + (num / 3));
  } 
  else {
    alert(num);
  }
}