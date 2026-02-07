// შექმენით ობიექტი სადაც შეინახავთ ნებისმიერი ტიპის ინფორმაციას. მომხმარებელს შემოატანინეთ key.
//  თუ ეს key არის ობიექტში მაშინ კონსოლში გამოაჩინეთ შესაბამისი მნიშვნელობა. სხვა შემთხვევაში შემოატანინე value და ობიექტში დაამატეთ.

let myData = {
  name: "Giorgi",
  age: 17,
  city: "Tbilisi"
};

let userKey = prompt()

if(userKey in myData){
  console.log(myData[userKey])
} 
else{
  let userValue = prompt("შეიყვანეთ value:")
  myData[userKey] = userValue
  console.log(userKey, "=", userValue)
}

console.log(myData)