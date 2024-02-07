// bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
// nguyên tố hay không?
// let n = prompt("Nhập 1 số nguyên bất kỳ");
// function element(x) {
//     let check = false;
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             check = true;
//             break;
//         }
//     }
//     if (check == true) {
//         return `số ${x} không phải là số nguyên tố`;
//     } else {
//         return `số ${x} là số nguyên tố`;
//     }
// }
// console.log(element(n));


//  bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
// input: ["Black", "Pink", "Green", "Blue", "Yellow"]
// output: Yellow

// // Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
// input: black, pink, green, blue, yellow
// output: yellow

// Gợi ý: sử dụng .length để kiểm tra độ dài. black.length = 5
//  nhập chuỗi và biến chuỗi đó thành mảng phân tách các phần tử trong mảng đó bằng dấu ,
// let str = prompt("nhập vào 1 mảng bất kì cách nhau bởi dấu ','");
// str = str.split(",");
// // tạo function
// function checkLongeststr(x) {
//     // biến longestString = với phần tử ở vị trí đầu tiên của mảng x để so sánh
//     let longestString = x[0];
//     // vòng lặp i chạy nhỏ hơn độ dài của mảng x
//   for (let i = 1; i < x.length; i++) {
//     // nếu độ dài phần tử ở vị trí i của mảng x lớn hơn độ dài của biến longestString
//     if (x[i].length > longestString.length) {
//         // thì gán luôn longestString là phần tử ở vị trí i của mảng x
//       longestString = x[i];
//     }
//   }
// // Trả về chuỗi có độ dài lớn nhất
//   return longestString;
// }
//  console.log(checkLongeststr(str));

//  bài 6:  Xây dựng hàm, tính tổng các số chẵn trong mảng
// let n = prompt("nhập vào các số cách nhau bởi dấu ','");
// n = n.split(",");

// function sumEvenNumbers(numbers) {
// // Khởi tạo biến tổng bằng 0
//     let sum = 0;
// // Lặp qua các phần tử trong mảng
//     for (let i = 0; i < numbers.length; i++) {
// // Nếu phần tử là số chẵn thì cộng vào tổng
//       if (numbers[i] % 2 === 0) {
//         sum += Number(numbers[i]);
//       }
//     }
// // Trả về tổng
//     return sum;
//   }
// console.log(sumEvenNumbers(n));


// bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng

// let n = prompt("nhập vào các số cách nhau bởi dấu ','");
// n = n.split(",");

// cách 1:
// debugger;
// function secondLargestNumber(numbers){
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - 1 - i; j++) {
//         if (numbers[j] > numbers[j + 1]) {
//             let a = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = a;
//         }
//     }
//   }
//   return numbers[numbers.length-2];
// }
// console.log(secondLargestNumber(n));
// cách 2:
// function secondLargestNumber(numbers) {
// // Sắp xếp mảng theo thứ tự giảm dần
//     numbers.sort((a, b) => b - a);
//   // Phần tử thứ hai trong mảng là số lớn thứ hai
//     return numbers[1];
//   }
//   console.log(secondLargestNumber(n));

//  bài 8: Cho người dùng nhập vào các số, tính trung bình cộng của các số đó

// let n = prompt("nhập vào các số cách nhau bởi dấu ','");
// n = n.split(",");
// function TBC(numbers) {
//     return numbers.reduce((sum, number) => sum + Number(number) / numbers.length);
// }
// console.log(TBC(n));



// bài 1: Cho người dùng nhập vào số tuổi, 
// const Age = +prompt('hãy nhập vào số tuổi');

// function check(Age){
//     if(Age>=18){
//         return 'Oke';
//     } else{
//         return 'Stop';
//     }
// }
// console.log(check(Age));

//  bài 2: đổi độ F và độ C
// let Fahrenheit = prompt('hãy nhập vào nhiệt độ hiện tại bằng độ F');
// let Celsius = FahrenheitToCelsius(Fahrenheit) 

// function FahrenheitToCelsius(Fahrenheit) {
//     let Celsius = (Fahrenheit - 32) / 1.8;
//     return Celsius;
// }
// console.log(Celsius);



