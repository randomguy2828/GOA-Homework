// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სიიდან დააბრუნებს ყველაზე პატარა რიცხვს (Math.min-ის გარეშე)

let smallest = arr => {
    let min = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

