// მოცემულია:

// [
//   { name: "apple", price: 2 },
//   { name: "banana", price: 5 },
//   { name: "orange", price: 3 }
// ]

// reduce-ით იპოვე ყველაზე ძვირიანი პროდუქტი (ობიექტი მთლიანად დააბრუნე).

let list = [
    { name: "apple", price: 2 },
    { name: "banana", price: 5 },
    { name: "orange", price: 3 }
]

let func = list.reduce((max, current) => {
    
    if(current.price > max.price){
        return current
    }
    else{
        return max
        }
})

console.log(func)