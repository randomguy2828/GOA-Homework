let corPass = "Random28"; 
let usPass = prompt("პაროლი");

if (usPass === corPass) {
  let name = prompt("შეიყვანე სახელი");
  let surname = prompt("შეიყვანე გვარი");
  let age = prompt("შეიყვანე ასაკი");

  let mySur = "პავლიაშვილი";

  if (surname === mySur) {
    console.log("გაიარეთ რეგისტრაცია");
  } 
  else {
    console.log("რეგისტრაციის დროს რაღაც ხარვეზი მოხდა");
  }
} 
else {
  console.log("არასწორია პაროლი");
}