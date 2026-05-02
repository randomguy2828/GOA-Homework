// 2)გაქვს weather(მოიძიე როგორ გადავიყვანოთ F to C )

// მოთხოვნები:

// _celsius private

// setter ცელსიუსზე

// getter fahrenheit
// დააბრუნოს გადაყვანილი მნიშვნელობა

let weather = {
    _celsius: 31,

    set celsius(value) {
        if(typeof value === "number"){
            this._celsius = value
        }
        else{
            console.log("არასწორი მნიშვნელობა")
        }
    },
    
    get fahrenheit(){
        return this._celsius * 9/5 + 32
    }
}

console.log(weather._celsius)
console.log(weather.fahrenheit)

