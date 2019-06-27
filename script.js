/**
 * Config Popup
 */
var mouseX = 0;
var mouseY = 0;
var popupOpened = false;

document.addEventListener("mousemove", ev => {
  mouseX = ev.clientX;
  mouseY = ev.clientY;

  if (mouseY < 60 && !popupOpened) {
    popupOpened = true;

    const popup = document.getElementById("popup");
    popup.style["display"] = "inline-block";
    const popupDivBounding = document
      .getElementById("popupContainer")
      .getBoundingClientRect();
    const closePopup = document.getElementById("closePopup");

    const closePopupFn = () => {
      popup.style["display"] = "none";
    };

    popup.addEventListener("click", ev => {
      const x = ev.clientX;
      const y = ev.clientY;

      if (
        (x < popupDivBounding.left || x > popupDivBounding.right) ||
        (y < popupDivBounding.top || y > popupDivBounding.bottom)
      ) {
        closePopupFn();
      }
    });

    closePopup.addEventListener("click", ev => {
      closePopupFn();
    });
  }
});

/**
 * Config Counter
 */
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
