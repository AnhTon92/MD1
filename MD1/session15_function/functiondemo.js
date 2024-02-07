// Function - hàm
//1.  Hàm là tập hợp nhiều câu lệnh thực hiện một tác vụ cụ thể
//2. có 2 loại hàm:  hàm có sẵn và hàm tự định nghĩa
//Hàm có sẵn: push(), pop()..


// 2. Cú pháp:
/*
    function funcName(){
        //statements
    }
*/
// 3.Tính chất:
/*
    + Hàm không thực thi khi định nghĩa
    + Hàm chỉ thực thi khi được gọi
*/

// function sum() {
//     console.log("Hello");
// }
// sum(); //Gọi hàm

//  4. Tham số và đối số

// function greeting(param1, param2) {
//     //tham số
//     console.log(param1, param2);
// }
// greeting(10,20); //đối số

/*
Trong dối số:
    + Kiểu dữ liệu tham trị: là kiểu dữ liệu nguyên thủy được truyền vào (Number, string..)
    + Kiểu dữ liệu tham chiếu: là kiểu dữ liệu phức tạp hay còn gọi là non - primitive (Array, Object)

Từ khóa return: 
+ khi gặp từ khóa return hàm sẽ dừng lại ngay
+ Được sử dụng để trả về kết quả sau khi thực thi hết các câu lệnh
*/

// 5. Các loại hàm
// Function Expression - Biểu thức hàm
// let sum = function () {
//     console.log("Biểu thức hàm");
// }

// Arrow function
// let sum = () => {
//     console.log("Arrow Function");
// }
// Arrow();
// Dùng để tái sử dụng được nhiều lần


// Three Dots (...): Array và Object và Function
// khi mà sử dụng với Array và Object: Spread Operator
// khi sử dụng với function gọi là Rest Parameter
