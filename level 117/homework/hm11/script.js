// ექმენით Factory ფუნქცია createRobot(name), სადაც იქნება _battery და თავიდან იქნება 100-ის ტოლი.
// ფუნქციამ უნდა დააბრუნოს ობიექტი, რომელსაც ექნება get battery (დააბრუნებს:  "Battery: [battery]%") და მეთოდი work().
// work() მეთოდის ყოველ გამოძახებაზე ბატარეას უნდა დააკლდეს 15%. თუ ბატარეა 15-ზე ნაკლებია, მეთოდმა უნდა დაბეჭდოს "დაიტენე!"

function createRobot(name){
    let robot = {
        name: name,
        _battery: 100,

        get battery(){
            return "Battery: " + this._battery + "%"
        },
        
        work:function(){
            if(this._battery >= 15){
                this._battery = this._battery - 15
                console.log(this.name, this._battery + "%")
            }
            else{
                console.log("დაიტენე!")
            }
        }
    }
    return robot
}

let goat = createRobot("optimusprime")

console.log(goat.battery)
goat.work()
goat.work()
goat.work()
goat.work()
goat.work()
goat.work()
goat.work()