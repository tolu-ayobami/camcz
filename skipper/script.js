let nav = document.querySelector(".nav")

let bars = document.querySelector(".bars")


let times = document.querySelector(".times")


bars.onclick = function (){
   nav.classList.add("na")
}


times.onclick = function (){
   nav.classList.remove("na")
}
