// B1: Lấy các selector tương ứng
const form = document.getElementById("main-form");
const input = document.getElementById("input-form");
const addPlayer = document.getElementById("add-player");
const deletePlayer = document.getElementById("delete-player");
const ul = document.getElementById("display-name")
let getLocal = JSON.parse(localStorage.getItem("player"));
form.addEventListener("submit", (e) =>{
    e.preventDefault();
//B1: lấy dữ liệu ô input
let inputValue = input.value;
//B2: tạo thẻ li
const li = document.createElement("li");
// B3: gán giá trị cho li
li.innerHTML = inputValue;
//B4: Gán li cho ul
ul.appendChild(li);
input.value = "";

// localStorage.setItem("player", inputValue);
// let arrPlayer = JSON.parse(localStorage.getItem("player"))  || [];
// let newLi = localStorage.setItem("player", inputValue);
// arrPlayer.push(newLi);

const listLi = document.getElementsByTagName("li");
let arrPlayer = [];
for (let i = 0; i < listLi.length; i++){
    arrPlayer.push(listLi[i].outerText);
}
localStorage.setItem("player", JSON.stringify(arrPlayer));
});
function displayPlayer() {
    let getLocal = JSON.parse(localStorage.getItem("player"));
    for (let i = 0; i < getLocal.length; i++){
        let newLi = document.createElement("li");
        newLi.innerHTML = getLocal[i];
        ul.appendChild(newLi);
    }
    }
    displayPlayer();


