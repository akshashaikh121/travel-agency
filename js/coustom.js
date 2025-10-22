let span = document.getElementsByClassName("span")

function select_location() {
  let loc = document.getElementById("location")

  loc.innerHTML = `
      <div class="d-flex align-items-center rounded-5 px-3 m-3 bg-white gap-2">
      <label for="locationSelect" class="fw-semibold text-black">Location:</label>
      <select id="locationSelect" class="form-select border-0 bg-transparent">
        <option value="">Select Destination</option>
        <option>India — Golden Triangle</option>
        <option>Thailand — Bangkok</option>
        <option>Japan — Tokyo</option>
        <option>France — Paris</option>
        <option>Italy — Rome</option>
        <option>Switzerland — Zurich</option>
        <option>UAE — Dubai</option>
      </select>
    </div>
    `
}
let peopleValue = 1; // store globally

function people_count() {
  const people = document.getElementById("people");

  people.innerHTML = `
    <div class="d-flex align-items-center text-black rounded-5 px-3 m-3 bg-white gap-3">
      <span id="value" class="fw-semibold text-black fs-5">${peopleValue}</span>
      <div class="d-flex flex-column">
        <button class="border-0 text-black bg-white w-25 rounded-5" onclick="incrementValue()">
          <i class="fa-solid text-black fa-angle-up"></i>
        </button>
        <button class="border-0 bg-white w-25 rounded-5" onclick="decrementValue()">
          <i class="fa-solid text-black fa-angle-down"></i>
        </button>
      </div>
    </div>
  `;
}

// Increment function
function incrementValue() {
  peopleValue++;
  document.getElementById("value").innerHTML = peopleValue;
}

// Decrement function
function decrementValue() {
  if (peopleValue > 1) {
    peopleValue--;
    document.getElementById("value").innerHTML = peopleValue;
  }
}
function date_set() {
  let date = document.getElementById("date")
  date.innerHTML = `
    <div class="d-flex align-items-center gap-2">
  <label for="travelDate" class="fw-semibold">Date:</label>
  <input type="date" id="travelDate" class="form-control border-0 bg-white rounded-3 px-2 py-1">
</div>`
}

// // swiper


let x = 0;
const step = 330;
const maxRight = -940;
const swiper = document.querySelector(".swiper div");



function swipe_left() {
  if (x < 0) {
    x += step;
    updateSwiper();
  }
}

function swipe_right() {
  if (x > maxRight) {
    x -= step;
    updateSwiper();
  }
}

function updateSwiper() {
  swiper.style.transform = `translateX(${x}px)`;
  swiper.style.transition = "transform 0.5s ease";
}


let a = 0;
const s = 315;
const right = -1200;

function update() {
  const swiperx = document.querySelector(".swiperx");
  swiperx.style.transform = `translateX(${a}px)`;
  swiperx.style.transition = "transform 0.5s ease";
}

function swipe_l() {
  if (a < 0) {
    a += s;
    update();
  }
}

function swipe_r() {
  if (a > right) {
    a -= s;
    update();
  }
}


let i = 0;
const plus = 315;
const r = -944;

function uptodate() {
  const swiperx = document.querySelector(".review-swiper div");
  swiperx.style.transform = `translateX(${i}px)`;
  swiperx.style.transition = "transform 0.5s ease";
}

function Left() {
  if (i < 0) {
    i += plus;
    uptodate();
  }
}

function Right() {
  if (i > r) {
    i -= plus;
    uptodate();
  }
}
function anime() {
  document.getElementById("anime").style = "transform:translateY(0px);"

}
function handleSubmit(event) {
  event.preventDefault(); // stop refresh

  const email = document.getElementById("email").value.trim();

  if (email === "") {
    alert("Please enter your email before subscribing ⚠️");
    return;
  }


  // If valid
  alert("Subscribed! You’ll get the latest updates 🎉");
}
