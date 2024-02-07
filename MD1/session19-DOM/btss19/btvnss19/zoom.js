const text = document.getElementById("text");
const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

// Biến lưu kích thước font chữ hiện tại
let fontSize = 16;

// Hàm phóng to
function zoomIn() {
  fontSize += 2;
  text.style.fontSize = fontSize + "px";
  
}

// Hàm thu nhỏ
function zoomOut() {
  fontSize -= 2;
  text.style.fontSize = fontSize + "px";

}

// Gán sự kiện click cho các nút bấm
zoomInButton.addEventListener("click", zoomIn);
zoomOutButton.addEventListener("click", zoomOut);