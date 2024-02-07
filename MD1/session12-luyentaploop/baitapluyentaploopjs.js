// bài 1: in tam giác vuông
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++){
//         if (i >= j) {

//             document.write("*");
//         } else {
//             document.write(" ");
//         }
//     }
//     document.writeln();
// }
// bài 2: in ra tam giác vuông ngược
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++){
//         if (i <= j) {

//             document.write("*");
//         } else {
//             document.write(" ");
//         }
//     }
//     document.writeln();
// }
// bài 3: tính tổng các số chẵn từ 1 đến 50
// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//     if(i%2 == 0)
//   sum += i;
// }

// console.log(sum);
//  bài 4: in ra các số từ 1 đến 100
// for(i=1;i<=100;i++){
//     console.log(i);
//     if(i==99){
//         console.log("Đã hoàn thành");
//         break;
        
//     }
// }

// bài 5: Hãy viết một chương trình in ra các số từ 1 đến 100. 
//  Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. 
//  Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// // bài 6: cho người dùng nhập giá trị bất kỳ, in ra lần lượt các giá trị 0 và 1
//     input: 7
//     output: 0 1 0 1 0 1 0
// let n = +prompt("nhập vào giá trị n để in ra")
// let i = 1;
// while (i <= n) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else {
//     console.log(1);
//   }
//   i++;
// }
// bài 7: Viết chương trình hỏi tuổi của người dùng và sau đó quyết định 
//  xem họ có đủ tuổi để xem nội dung 14+ không? 
//  (Người dùng sẽ nhập đến khi giá trị > 14 thì mới cho dừng chương trình)
// let age = 0;
// while (age <= 14) {
//   console.log("Bạn bao nhiêu tuổi?");
//   age = prompt("Nhập tuổi của bạn: ");
// }
// if (age > 14) {
//   console.log("Bạn đủ tuổi để xem nội dung 14+");
// } else {
//   console.log("Bạn chưa đủ tuổi để xem nội dung 14+");
// }

// bài 8: Viết 1 chương trình x là số ngẫu nhiên trong khoảng từ 0 đến 9. 
//  Cho người dùng nhập giá trị bất kỳ. Nếu giá trị đúng thì thông báo "bingoo" 
//  còn sai thì cho người dùng nhập lại đến khi tìm được số đúng
//  (Gợi ý: Dùng hàm có sẵn Math.floor + Math.random)
let x = Math.floor(Math.random() * 10);
while (true) {
console.log("Hãy nhập số từ 0 đến 9: ");
let y = Number(prompt());
if (y === x) {
console.log("Bingoo!");
break;
} else {
console.log("Sai rồi, hãy thử lại!");
}
}