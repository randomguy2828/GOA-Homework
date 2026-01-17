let temp = prompt("ტემპერატურა:");

if (temp < 0) {
  alert("ცივა და თბილად ჩაიცვი");
} 
else if (temp >= 0 && temp <= 25) {
  alert("ნორმალური ამინდია");
} 
else {
  alert("ცხელა");
}