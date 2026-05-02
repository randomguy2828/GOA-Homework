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
        { name: "banana", price: 3, qty: 5 }
    ],
    
    addItem(product){
        this._items.push(product)
    },
    
    removeItem(index){
        this._items.splice(index, 1)
    },
    
    clear(){
        this._items = []
    },
    
    get totalPrice(){
        let total = 0
        for(let i = 0; i < this._items.length; i++){
            total += this._items[i].price * this._items[i].qty
        }
        return total
    }
}
