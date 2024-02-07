// bài 4:Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
//  Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
// let str = prompt("Nhập vào mảng bất kỳ cách nhau bởi dấu ','");
// str = str.split(",");
// let n = prompt("Nhập vào 1 ký tự bất kỳ");
// function findWord(arr, x) {
//     let count = 0;
//     let check = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (x == arr[i]) {
//             check = true;
//             count++;
//         }
//     }
//     if (check == false) {
//         count = -1;
//     }
//     return count;
// }
// console.log(findWord(str, n));

// bài 5: Cho mảng sau:
// let arr=[1,2,3,4,5,6,7,8,9,10]
// Viết hàm trả về tất cả các cặp số có tổng bằng 10

//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let ketQua = [];
//  function sumEqual10(arr) {
//      for (let i = 0; i < arr.length - 1; i++) {
//          for (let j = i + 1; j < arr.length; j++) {
//              if (arr[i] + arr[j] == 10) {
//                  ketQua.push([arr[i], arr[j]])
//              }
//          }
//      }
//      return ketQua;
//  }
//  console.log(sumEqual10(arr)); 

// bài 6: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

// function handleSubmit() {
// // lấy ra giá trị của ô input
//     let value = document.getElementById("input").value;
//     console.log(value);
// // tạo 1 mảng để chứa danh sách các ký tự và số lần xuất hiện của nó
//     let array = []; // mảng 2 chiều, ký tự sẽ đc lưu ở phần tử thứ 0 của mảng con
// // duyệt từng ký tự của chuỗi trong ô input và kiểm tra
//     for (let i = 0; i < value.length; i++) {
//         let index = checkExistCharacter(array, value.charAt(i));
//         if (index >= 0) { //nếu ký tự thứ i tồn tại trong mảng array
//             array[index][1] += 1; // thêm 1 giá trị vào phần tử thứ 1 trong mảng con
//         } else {
//             //chưa tồn tại thì thêm mới vào mảng array 1 phần tử có số lần xuất hiện là 1
//             array.push([value.charAt(i), 1]);
//         }
//     }
// // in ra kết quả
//     for (let i = 0; i < array.length; i++) {
//         console.log(`Ký tự ${array[i][0]} xuất hiện ${array[i][1]} lần`);
//     }
// }
// // kiểm tra tồn tại của 1 ký tự trong 1 mảng và trả về vị trí của phần tử 
// // nếu tồn tại, nếu không tồn tại thì trả về -1
// function checkExistCharacter(arr, char) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0] == char) {
//             return i;
//         }
//     }
// // chưa tồn tại
//     return -1;
// }

// bài 3: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// function checkNum(n) {
// function check() {
//     let kyTu = prompt("nhập vào kí tự kiểm tra");
//     let flag = false;
//     if(kyTu == isNaN)
//     flag = t
// }

// bài 1: Viết hàm random ra mã màu RGB ngẫu nhiên
// function random_bg_color() {
//     let x = Math.floor(Math.random() * 255);
//     let y = Math.floor(Math.random() * 255);
//     let z = Math.floor(Math.random() * 255);
//     let bgColor = "rgb(" + x + "," + y + "," + z + ")";
//   console.log(bgColor);
//   }
// random_bg_color();

// bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.

// function reverseString(a){
//         let str = prompt('hãy nhập chuỗi kí tự')
//         let newString = "";
//         for(let i = str.length - 1; i >= 0; i-- ){
//             newString += str[i];
//         } 
//         return newString;
//     } 
//     console.log(reverseString());