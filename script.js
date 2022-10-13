let call = document.getElementById("count-el")
let sav= document.getElementById("save-El")
//console.log(sav)
let count= 0
function increment(){
    count += 1
    call.innerText = count 
}
function save(){
    let x = count + " - "
    sav.innerHTML += x
    call.innerText = 0
}