// 3)შექმენი ობიექტი სადაც არის _items → მასივი ობიექტების:
// { name: "apple", price: 5, qty: 2 } ... სხვა ობიექტების სხვადასვხ მნშვნელობებით

// მეთოდები:

// addItem(product)
// removeItem(index)
// clear()

// getter:

// დააბრუნოს ყველა პროდუქტის ფასი --> totalPrice

let cart = {
    _items: [
        { name: "apple", price: 5, qty: 2 },
        { name: "banana", price: 3, qty: 5 },
        { name: "orange", price: 4, qty: 1 }
    ],
    
    addItem(product){
        this._items.push(product)
    },
}
// meti vegar gavagrdzele