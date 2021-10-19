const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStop = document.querySelector('[data-action="stop"]');
const btnStart = document.querySelector('[data-action="start"]');
let intervalId = null;

btnStop.addEventListener("click", stopSwitcher);
btnStart.addEventListener("click", startSwitcher);

function changeColor() {
  let randomColors = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.background = colors[randomColors];
}

function startSwitcher() {
  btnStart.disabled = true;
  intervalId = setInterval(changeColor, 1000);
}
function stopSwitcher() {
  clearInterval(intervalId);
  btnStart.disabled = false;
}
