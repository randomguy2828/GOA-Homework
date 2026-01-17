let inp = prompt("შეიყვანე რიცხვი");

let number = Number(inp);

if (number > 0) {
  alert("რიცხვი დადებითია.");
} 
else if (number < 0) {
  alert("რიცხვი უარყოფითია.");
} 
else if (number === 0) {
  alert("რიცხვი ნულის ტოლია.");
} 
else {
  alert("არ არის რიცხვი.");
}