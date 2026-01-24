// შექმენით მანქანის ობიექტი. სადაც იქნება ბრენდი, მოგწონთ თუ არა (true/false) და გამოშვების წელი.
//  შემდეგ გაანახლეთ გამოშვების წელი და დაამატეთ მოდელი. წაშალეთ მოგწონთ თუ არა.

let car = {
    brand: "lamborghini",
    like: true,
    year: 2013
}

car["year"] = 2011
car["model"] = "lamborghini aventador"
delete car["like"]