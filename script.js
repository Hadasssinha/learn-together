const dayEl = document.getElementById("dayCounter");
const hourEl = document.getElementById("hourCounter");
const minuteEl = document.getElementById("minuteCounter");
const secondEl = document.getElementById("secondCounter");

const launchDate = new Date(2019, 11, 25, 0, 0, 0).getTime();

setTime();

setInterval(() => {
    setTime();
}, 1000);

function setTime() {
  const now = new Date().getTime();
  const countdown = launchDate - now;

  dayEl.innerHTML = Math.floor(countdown / (1000 * 60 * 60 * 24)) + "dias ";
  hourEl.innerHTML =
    Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "h ";
  minuteEl.innerHTML =
    Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)) + "min ";
  secondEl.innerHTML = Math.floor((countdown % (1000 * 60)) / 1000) + "seg";
}
