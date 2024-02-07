const text = document.querySelector("h1");
const button = document.querySelector("#changeText");

button.addEventListener("click", function() {
  text.textContent = text.textContent === "Giang Sơn dễ đổi" ? "Tự Tiệp khó rời" : "Giang Sơn dễ đổi";
});
