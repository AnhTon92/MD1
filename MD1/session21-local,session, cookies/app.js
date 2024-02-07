/*
+local storage: lưu trữ dữ liệu không có ngày hết hạn
+
1. local storage
 thêm vào local storage - setItem(key, value)

 */
// đối với kiểu dữ liệu nguyên thủy
//  localStorage.setItem("Number", 100);
//  localStorage.setItem("String", "Cảm ơn")
// đối với kiểu dữ liệu tham chiếu - 
localStorage.setItem("array", JSON.stringify([10, 20, 30]));
let product = [
    { id: 1, name: "áo thun", price: "1000"},
    { id: 2, name: "quần bò", price: "2000"},
];
localStorage.setItem("product", JSON.stringify(product));

// 1.2 Lấy dữ liệu trên local - getItem(key)
//+ đối với kiểu dữ liệu nguyên thủy
let getNumber = localStorage.getItem("Number");
console.log("getNumber", getNumber);

//+ đối với kiểu dữ liệu tham chiếu
let getProduct = JSON.parse(localStorage.getItem("product")) ;
console.log(getProduct);

//1.3 Xóa dữ liệu trên local - removeItem(key)

localStorage.removeItem("array");
localStorage.removeItem("Number");

//1.4 xóa toàn bộ dữ liệu trên local - clear
// localStorage.clear();
// Lưu ý: local storage sẽ lưu dữ liệu không có ngày hết hạn

//2. Session storage ~ Tương tự như local storage nhưng sẽ hết hạn khi đóng trình duyệt 
/*
+sessionStorage.setItem(key,value)
+sesionStorage.getItem(key)
+sesionStorage.removeItem(key)
+sesionStorage.clear()
*/
sessionStorage.setItem("number", 9999);