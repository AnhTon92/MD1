const buttonRandom = document.querySelector(".button-random");

buttonRandom.addEventListener("click", function () {
  const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
