// შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი

function check(num){
    if(num % 2 === 0){
        return "ლუწი"
    }
    else{
        return "კენტი"
    }
}
num = 10

console.log(check(num))