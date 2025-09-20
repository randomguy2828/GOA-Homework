let monthnum = parseInt(prompt("შეიყვანე თვე (1-12):"));
let monthname = "";
let season = "";

if (monthnum === 1) {
  monthname = "იანვარი";
  season = "ზამთარი";
} 
else if (monthnum === 2) {
  monthname = "თებერვალი";
  season = "ზამთარი";
} 
else if (monthnum === 3) {
  monthname = "მარტი";
  season = "გაზაფხული";
} 
else if (monthnum === 4) {
  monthname = "აპრილი";
  season = "გაზაფხული";
} 
else if (monthnum === 5) {
  monthname = "მაისი";
  season = "გაზაფხული";
} 
else if (monthnum === 6) {
  monthname = "ივნისი";
  season = "ზაფხული";
} 
else if (monthnum === 7) {
  monthname = "ივლისი";
  season = "ზაფხული";
} 
else if (monthnum === 8) {
  monthname = "აგვისტო";
  season = "ზაფხული";
} 
else if (monthnum === 9) {
  monthname = "სექტემბერი";
  season = "შემოდგომა";
} 
else if (monthnum === 10) {
  monthname = "ოქტომბერი";
  season = "შემოდგომა";
} 
else if (monthnum === 11) {
  monthname = "ნოემბერი";
  season = "შემოდგომა";
} 
else if (monthnum === 12) {
  monthname = "დეკემბერი";
  season = "ზამთარი";
} 
else {
  alert("შეიყვანე სწორი რიცხვი 1-დან 12-მდე!");
}

if (monthname !== "") {
  alert("თვეა " + monthname + ", სეზონია " + season);
}