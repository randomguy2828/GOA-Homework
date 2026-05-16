// შექმენი ობიექტი robot, რომელსაც ექნება model და მეთოდი sayModel. გამოიყენე this, რომ მეთოდმა დააბრუნოს "ჩემი სახელია {model}"

let robot = {
    model: "random",
    saymodel(){
        return "ჩემი სახელია " + this.model
    }
}

console.log(robot.saymodel())
