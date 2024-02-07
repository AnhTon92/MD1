const form = document.getElementById("main-form");
const idProduct = document.getElementById("id-product");
const nameProduct = document.getElementById("name-product");
const priceProduct = document.getElementById("price-product");
const categoryProduct = document.getElementById("category-product");
const btnSubmit = document.getElementById("btn-submit");
//update
let editIndex = -1;
let editExisting = false;

function renderProduct(){
    const ListProduct = JSON.parse(localStorage.getItem("list-product"));
    const bodyTable  = document.getElementById("body-table");
    bodyTable.innerHTML = "";
    for (let i = 0; i < ListProduct.length; i++){
        const tr = document.createElement("tr");
        const product = ListProduct[i];
        tr.innerHTML += `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>
        <button onclick = "editProduct(${i})>Edit</button>
        <button onclick = "deleteProduct(${i})">Delete</button>
        </td>`;
        bodyTable.appendChild(tr);
    }
    
}
renderProduct();
form.addEventListener("submit", (e) => {
    e.preventDefault();
//lấy value ô input
const idProduct = document.getElementById("id-product").value;
const nameProduct = document.getElementById("name-product").value;
const priceProduct = document.getElementById("price-product").value;
const categoryProduct = document.getElementById("category-product").value;

//Tạo đối tượng lưu trữ
const product = {
    id: idProduct,
    name: nameProduct,
    price: priceProduct,
    category: categoryProduct,
}
const getProductLocal = JSON.parse(localStorage.getItem("list-product")) || [];
// update
if(editExisting) {
//code 
getProductLocal[editIndex] = product // nốt
}else {
    getProductLocal.push(product)
}
getProductLocal.push(product);
//set dữ liệu lên local
localStorage.setItem("list-product", JSON.stringify(getProductLocal));
renderProduct();

});
function deleteProduct (index) {
// console.log(index);
// b1: lấy dữ liệu trên local
const getDataLocal = JSON.parse(localStorage.getItem("list-product"));
//b2: xóa
getDataLocal.splice(index,1);
//b3: set lại dữ liệu lên local
localStorage.setItem("list-product", JSON.stringify(getDataLocal));
renderProduct();
}

function editProduct(index) {
    const getDataLocal = JSON.parse(localStorage.getItem("list-product"));
    document.getElementById("id-product").value = getDataLocal[index].id;
    document.getElementById("name-product").value = getDataLocal[index].name;
    document.getElementById("price-product").value = getDataLocal[index].price;
    document.getElementById("category-product").value = getDataLocal[index].category;
    getDataLocal[index].category;
    editIndex = index;
    editExisting = true;
    btnSubmit.textContent = "update";
}