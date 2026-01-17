let daynumber = prompt("შეიყვანე რიცხვი (1-7):");
let dayname = "";

if (daynumber == 1) {
  dayname = "ორშაბათი";
} 
else if (daynumber == 2) {
  dayname = "სამშაბათი";
} 
else if (daynumber == 3) {
  dayname = "ოთხშაბათი";
} 
else if (daynumber == 4) {
  dayname = "ხუთშაბათი";
} 
else if (daynumber == 5) {
  dayname = "პარასკევი";
} 
else if (daynumber == 6) {
  dayname = "შაბათი";
} 
else if (daynumber == 7) {
  dayname = "კვირა";
} 
else {
  dayname = "არასწორი რიცხვი";
}

console.log(dayname);