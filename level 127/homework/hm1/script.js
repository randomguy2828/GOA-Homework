// 1)ააწყვეთ მსგავსი დიზაინის todo app თავისი ფუნქციონალით და დიაზინით , აუცილებლად დაამატეთ აითემების ამოშლის ფუნქციონალიც

let input = document.getElementById("todoinput")
let addbtn = document.getElementById("addbtn")
let list = document.getElementById("todolist")

addbtn.addEventListener("click", function(){
    if(input.value === ""){
        return
    }
    
    let li = document.createElement("li")
    li.innerText = input.value
    
    let deletebtn = document.createElement("button")
    deletebtn.innerText = "Delete"
    deletebtn.className = "delbtn"
    
    deletebtn.addEventListener("click", function(){
        li.remove()
    })

    li.appendChild(deletebtn)
    list.appendChild(li)
    
    input.value = ""
})