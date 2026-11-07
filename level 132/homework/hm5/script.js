let products = []

let nameinput = document.getElementById("name")
let priceinput = document.getElementById("price")
let btn = document.getElementById("btn")
let container = document.getElementById("container")

btn.addEventListener("click", () =>{
    let save = {
        name: nameinput.value,
        price: priceinput.value
    }

    products.push(save)

    container.innerHTML =""

    products.forEach(product =>{
        container.innerHTML += `<div>${product.name} ${product.price}lari</div>`
    })

    nameinput.value = ""
    priceinput.value = ""
})

