let products = []

let nameinput = document.getElementById("nameinput")
let priceinput = document.getElementById("priceinput")
let imageinput = document.getElementById("imageinput")
let descinput = document.getElementById("descinput")
let addbtn = document.getElementById("addbtn")
let container = document.getElementById("container")

let btnall = document.getElementById("btnall")
let btnclothes = document.getElementById("btnclothes")
let btntecnic = document.getElementById("btntecnic")
let btnhousethings = document.getElementById("btnhousethings")

function render(itemstorender){
    container.innerHTML = ""

    itemstorender.forEach(item =>{
        container.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p class="price">${item.price} GEL</p>
        <p>${item.desc}</p>
      </div>
    `
    })
}

addbtn.addEventListener("click", () =>{
    if (nameinput.value == "" || priceinput.value == "" || imageinput.value == "" || descinput.value == "") {
        alert("please fill all inputs")
        return
    }
    let descvalue = descinput.value.toLowerCase()
    if (descvalue != "tecnic" && descvalue != "housethings" && descvalue != "clothes") {
        alert("description must be tecnic housethings or clothes")
        return
    }

    let save ={
        name: nameinput.value,
        price: priceinput.value,
        image: imageinput.value,
        desc: descvalue
    }
    products.push(save)
    render(products)

    nameinput.value = ""
    priceinput.value = ""
    imageinput.value = ""
    descinput.value = ""
})

btnall.addEventListener("click", () =>{
    render(products)
})

btnclothes.addEventListener("click", () =>{
    let filtered = products.filter(item => item.desc == "clothes")
    render(filtered)
})

btntecnic.addEventListener("click", () =>{
    let filtered = products.filter(item => item.desc == "tecnic")
    render(filtered)
})

btnhousethings.addEventListener("click", () =>{
    let filtered = products.filter(item => item.desc == "housethings")
    render(filtered)
})