let list = document.getElementById
("listUser")

fetch("https://gorest.co.in/public/v2/users")
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(showUser)
    
})

function showUser(val,idx) {
    list.innerHTML += `<button type="button" class="list-group-item list-group-item-action">${val.name}.</button>`
    
}