function bookFunction(card){
let empty = document.getElementById("empty")
let card_value = document.getElementById(card).innerHTML
  localStorage.setItem("selectedCard", card_value); // store data
  window.location.href = "booknowpage.html"; // go to next page
}