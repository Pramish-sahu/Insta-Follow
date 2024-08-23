let add=document.querySelector("#a2")
let remove=document.querySelector("#a1")
let status1=document.querySelector("h2")
console.log(add)
console.log(status1)
add.addEventListener("click",()=>{
    status1.innerText="Friends"
    status1.style.color="green"
    add.innerText="Follow"

})
remove.addEventListener("click",()=>{
    status1.innerText="Stranger"
    status1.style.color="red"
    add.innerText="Add Friend"

})

