// შექმენი ობიექტი, სადაც ერთი მეთოდი იქნება ჩვეულებრივი function, ხოლო მეორე arrow function. ორივეში გამოიყენე this, ნახეთ რომელი იმუშავებს.

let robot = {
    model: "RX-78",
    first: function(){
        return "ჩემი სახელია " + this.model
    },
    second:()=>{
        return "ჩემი სახელია " + this.model
    }
}

console.log(robot.first()) 
console.log(robot.second()) 
