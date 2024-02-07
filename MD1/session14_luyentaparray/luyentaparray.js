// // Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// // gồm 10 phần tử.Chương trình thực hiện tính và hiển thị
// // xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let arr = prompt("Nhập vào 1 dãy gồm 10 số nguyên cách nhau bởi dấu ','");
// arr = arr.split(",");
// let count = 0;
// for (i = 0; i < arr.length; i++){
    
//     if (Number(arr[i]) >= 10) {
//         count++;
//     }
// }
// console.log(count);

// bài 2:
// // Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử
// // khác nhau.Chương trình hiển thị ra được phần tử có giá trị lớn nhất
// // trong mảng và vị trí của phần tử đó.

// let arr = prompt("Nhập vào 1 mảng số nguyên gồm 10 phần tử khác nhau");
// arr = arr.split(",");
// let vitri;
// let max = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if ( Number(max) < Number(arr[i])) {
//         max = arr[i];
//         vitri = i;
//     }
// }
// console.log(`Giá trị lớn nhất là ${max} tại vị trí thứ ${vitri + 1}`);


// bài 3
// // Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// // Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình
// // của các phần tử trong mảng.

// let arr = prompt("Nhap day so nguyen");
// arr = arr.split(",");
// let max = arr[0];
// let value = 0;
// for (i = 0; i < arr.length; i++){
//     value += arr[i];
//     if (Number(max) < Number(arr[i])) {
//         max = arr[i];
//     }
// }
// let tb = value / (arr.length + 1);
// console.log(arr);
// console.log(`Gia tri lon nhat la ${max}`);
// console.log(`Gia tri trung binh la ${tb}`);


// // Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên 
// // và đảo ngược các phần tử trong mảng đó.
// let number = +prompt("Nhập số lượng phần tử bạn muốn thêm:");
// let arr = [];
// for (i = 0; i < number; i++) {
//     let element = +prompt(`Nhập giá trị cho phần tử thứ ${i}:`);
//     arr.push(element);
// }
// //đảo ngc
// console.log(arr.reverse());


// bài 5
// // Viết chương trình đếm số nguyên âm trong một chuỗi.

// let str = ("Nhập một chuỗi");
// let count = 0;
// str = str.split(" ");
// for (let i = 0; i < str.length; i++){
//     if (str[i] < 0) {
//         count++;
//     }
// }
// console.log(count);


// bài 6
// // Viết chương trình khởi tạo nhập vào một mảng số nguyên
// // gồm 10 phần tử.Nhập phần tử số nguyên và tìm xem số đó
// // có nằm trong mảng số nguyên không ? Nếu có thuộc mảng số nguyên
// // thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".

// let arr = prompt("Nhập vào 1 dãy gồm 10 số cách nhau bởi dấu ','");
// arr = arr.split(',');
// let n = +prompt("Nhập vào một số bất kỳ");
// let flag = false;
// for (i = 0; i < arr.length; i++) {
//     if (n == Number(arr[i])) {
//         console.log("Number X is in the array");
//         flag = true;
//     }
// }
// if (flag == false) {
//     console.log("Number X is not in the array");
// }


// bài 7
// // Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// // Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không ?
// // Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.


// const a = 10;
// let arr = [];
// let arrdelete = [];
// for (let i = 0; i < a;i++){
//     let n = prompt(`Nhap phan tu th ${i + 1} cua mang 10 phan tu`);
//     arr.push(n);
// }
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let check = false;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === num) {
//         check = true;
//     } else {
//         arrdelete.push(arr[i]);
//     }
// }
// if (check) {
//     arr = arrdelete;
// } else {
//     alert(`Phan tu ${num} khong nam trong mang`);
// }
// console.log(arrdelete);


// bài 8
// // Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// // Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let num = +prompt(`Nhap phan tu thu ${i + 1}`);
//     arr.push(num);
// }
// for (let i = 0; i < arr.length - 1; i++) {
//     for (j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let a = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = a;
//         }
//     }
// }
// console.log(arr);

// bài 9: 
// // Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử,
// // gọi là mảng a và b.Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// // Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.

// let arrA = prompt("Nhap mang so nguyen A gom 10 phan tu");
// let arrB = prompt("Nhap mang so nguyen B gom 10 phan tu");
// arrA = arrA.split(",");
// arrB = arrB.split(",");
// let arrC = arrA.concat(arrB);
// console.log(Number(arrC));


// luyện tập 2 bài 1
// // Viết chương trình khởi tạo mảng 2 chiều,
// // gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
// for (let i = 0; i < arr.length; i++){
//     console.log(`row${i}`);
//     for (let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }


// bài 2
// // Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// // Ví dụ, nếu một mảng chứa các ký tự['c', 's', 'c', '2', '6', '1']
// // sau khi thực hiện đảo ngược sẽ là "162csc".

// let arr = ['A','n','h', ' ','T','ô','n'];
// console.log(arr.reverse().join(""));

// bài 3
// // Viết một chương trình khai báo một mảng ký tự.In ra số “ký tự số” trong mảng.

// let c = ["A", "1", "T", "1", "ô", "3"];
// let arr = [];
// for (let i = 0; i < c.length; i++) {
//     if (c[i] > 0 || c[i] <= 0) {
//         arr.push(c[i]);
//     }
// }
// console.log(arr);
// bài 4


// // Viết một chương trình nhập vào 2 chuỗi,
// // sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// let str1 = ("Ngô Đăng Anh Tôn");
// let str2 = ("ngô đăng anh tôn");
// str1 = str1.split(" ");
// str2 = str2.split(" ");
// check = false;
// if (str1.length == str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] == str2[i]) {
//             check = true;
//         }
//     }
//     if (check == true) {
//         console.log("2 chuỗi giống nhau");
//     } else {
//         console.log("2 chuỗi không giống nhau");
//     }
// } else {
//     console.log("2 chuỗi không giống nhau");
// }
// bài 5
// // Viết chương trình nhập vào một mảng ký tự,
// // tìm tất cả các ký tự trong mảng là(-) và thay thế các ký tự này bởi ký tự(_)

// let arr = prompt("Nhập 1 mảng ký tự cách nhau bởi dấu ','");
// arr = arr.split(",");
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == "-") {
//         arr[i] = "_";
//     }
// }
// console.log(arr);