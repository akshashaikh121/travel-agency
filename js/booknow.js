function bookFunction(card){
let empty = document.getElementById("empty")
let card_value = document.getElementById(card).innerHTML
  localStorage.setItem("selectedCard", card_value); // store data
  window.location.href = "booknowpage.html"; // go to next page
}
function moreItem(){
  let items = document.getElementById("more-item")
  items.classList.remove("d-none")
  document.getElementById("btn1").classList.add("d-none")
    document.getElementById("btn2").classList.remove("d-none")
}
function lessItem(){
    document.getElementById("btn1").classList.remove("d-none")
  document.getElementById("btn2").classList.add("d-none")
    let items = document.getElementById("more-item")
  items.classList.add("d-none")



}