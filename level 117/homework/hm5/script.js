// შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება სიჩქარე. რომლის მნიშვნელობაც იქნება თავიდან 10-ის ტოლი.
// თუ სიჩქარე 100-ზე მეტია, get-მა დააბრუნოს ტექსტი "Super Speed: [სიჩქარე]", სხვა შემთხვევაში უბრალოდ სიჩქარის რიცხვი.
// set-ში კი დაწერეთ პირობა, სადაც შეამოწმებთ, რომ ახალი შემოყვანილი სიჩქარე აუცილებლად არსებულ სიჩქარეზე მეტი იქნება.

let car = {
     _speed: 10,  

     get speeds(){
        if(this._speed > 100){
            return `Super Speed:` [this._speed]
        }
        else{
            return this._speed
        }
    },
    
    set speed(newSpeed){
        if(newSpeed > this._speed){
            this._speed = newSpeed
        }
        else{
            console.log("ახალი სიჩქარე უნდა იყოს არსებულზე მეტი")
        }
    }
}

console.log(car.speed)   
