
/*  Vòng lặp - Loop
Giúp lặp đi lặp lại 1 đoạn mã code nhiều lần
Có 2 câu điều kiện lặp là for và while
*/
/* Vòng lặp for
Cú pháp: for( Giá trị khởi tạo; Điều kiện; Bước nhảy) {
    statement
}
ví dụ
*/ 
// for ( let i = 0; i<10; i++) {
//     console.log("Hello World");
// }
// in ra màn hình số chạy từ 1 đến 5
// for (let i = 1; i<=5; i++) {
//     console.log(i);
// }
// // in ra màn hình các số 1,3,5
// for ( let i = 1; i <= 5; i = i + 2){
//     console.log(i);
// }
//  in các số từ 1 đến 10 đến số 9 thì thông báo hoàn thành
// for ( let i = 1; i <= 10; i++){
//     console.log(i);
//     if (i == 9){
//         alert("đã hoàn thành");
//     }

/* Vòng lặp while
thường được sử dụng để lặp đi lặp lại 1 hành động gì với số lần không xác định
    while (điều kiện) {
        // statement
    }
*/
/* vòng lặp do.. while
thực hiện khối lệnh do ít nhất 1 lần sau đó mới kiểm tra điều kiện. Nếu điều kiện đúng thì thực hiện lặp, nếu sai thì dừng luôn
cú pháp:
do {
    //statement
}  while (điều kiện)
*/
//  từ khóa dùng chung 3 vòng lặp
// continute: dừng vòng lặp tại đó và chuyển sang vòng lặp tiếp theo
// break: dừng vòng lặp tại đó
// debugger;

// let a = +prompt("nhập a");
// let b = +prompt("nhập b");
// for (let i = a; i <= b; i++) {
//     console.log(`bảng cửu chương ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("");
//   }


// let i;
// let count = 0;
// for (i = 2; i <= 100; i++) {
//     let checkNt = true;
//     for (let j = 2; j <= i - 2; j++) {
//         if (i % j === 0) {
//             checkNt = false;
//             break;
//         }
//     }
//     if (checkNt) {
//         count++;
//         console.log(i);
//     }
//     if (count === 20) {
//         break;
//     }
// }

// Bài 9: Tính giai thừa của 1 số nhập vào
// let n = +prompt("Nhập số n: ");
// let giaithua = 1;
// for (let i = 1; i <= n; i++) {
//   giaithua *= i;
// }
// console.log(n + "! = " + giaithua);

// Bài 8: kiểm tra số palindrome (là số khi đọc từ phải qua trái hay từ trái qua phải đều giống nhau)
// let n = prompt("Nhập số cần kiểm tra: ");
// let isPalindrome = true;
// for (let i = n.length - 1; i >= 0; i--) {
//   if (n[i] !== n[n.length - i - 1]) {
//     isPalindrome = false;
//     break;
//   }
// }
// if (isPalindrome) {
//   alert(n + " là số Palindrome");
// } else {
//   alert(n + " không phải là số Palindrome");
// }

// // Bài 7: tìm ước số chung nhỏ nhất
// let a = prompt("Nhập số a: ");
// let b = prompt("Nhập số b: ");
// // Khởi tạo biến kết quả (flag)
// let uCnn = 1;
// // Lặp từ 1 đến giá trị nhỏ nhất của a và b
// for (let i = 1; i <= Math.min(a, b); i++) {
//   // Nếu a và b chia hết cho i thì uCnn là i
//   if (a % i === 0 && b % i === 0) {
//     uCnn = i;
//   }
// }
// alert("Ước số chung nhỏ nhất của " + a + " và " + b + " là: " + uCnn);

// Bài 6: Viết chương trình yêu cầu người dùng nhập một số và đảo ngược các chữ số của số đó.
// let n = prompt("Nhập số cần đảo ngược: ");
// // Khởi tạo biến kết quả(flag)
// let daoNguoc = "";
// // Lặp từ cuối số đến đầu số
// for (let i = n.length - 1; i >= 0; i--) {
//   // Chèn chữ số vào phía sau số đảo ngược
//   daoNguoc += n[i];
// }

// // Hiển thị kết quả
// alert(daoNguoc);

// // Bài 5: in ra n số fibonaci đầu tiên (Dãy Fibonacci là dãy vô hạn các số tự nhiên bắt đầu bằng 1 và 1, sau đó các số tiếp theo sẽ bằng tổng của 2 số liền trước nó.)
//         // in ra n số fibonaci đầu tiên
//             //f0=0, f1=1 : 2 số fibonaci đầu tiên
//             //f2=f1+f0=1+0=1;
//             //=> f3=2, f4=3,f5=5,f6=8....
// // Nhập số n
// let n = prompt("Nhập số n: ");
// // Khởi tạo hai số đầu tiên trong dãy Fibonacci
// let a = 0;
// let b = 1;
// // Lặp n lần
// for (let i = 0; i < n; i++) {
//   // In ra số Fibonacci thứ i
//   console.log(a);

//  // Cập nhật hai số Fibonacci tiếp theo
//   let c = a + b;
//   a = b;
//   b = c;
// }

// Bài 4: Kiểm tra xem một số có phải là số Armstrong hay không. 
// Một số Armstrong là số mà tổng các lũy thừa của các chữ số bằng chính số đó.
// cách 1
// Nhập số cần kiểm tra
// let number = +prompt("nhập số bất kỳ: ");
// let 
// cách 2
// let numberInput = +prompt("nhập số bất kỳ: ");
// let strNumber = numberInput.toString();
// let sum = 0;
// for (let i = 0; i <= strNumber.length -1; i++) {
//     // console.log(strNumber[i]);
//     let convertNum = Number(strNumber[i]);
//     // Math.pow(x,y) = x^y
//     sum += Math.pow(convertNum,strNumber.length);
// }
// if (sum === numberInput) {
//     alert(`${numberInput} là số Armstrong`);
// } else {
//     alert(`${numberInput} không là số Armstrong`);
// }
// Bài 3: tìm ucln
// Nhập hai số



// bài 2
// Nhập số cần kiểm tra
// let n = prompt("Nhập số cần kiểm tra: ");
// // Khởi tạo biến kết quả
// let isPrime = true;
// // Lặp từ 2 đến căn bậc hai của n
// for (let i = 2; i <= Math.sqrt(n); i++) {
// // Nếu n chia hết cho i thì n không phải là số nguyên tố
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// // Hiển thị kết quả
// if (isPrime) {
//   alert(n + " là số nguyên tố");
// } else {
//   alert(n + " không phải là số nguyên tố");
// }
    

// // Bài 1
// // Nhập số cần tính tổng
// let n = prompt("Nhập số cần tính tổng: ");
// // Khởi tạo biến kết quả
// let sum = 0;
// // Lặp từ 1 đến n
// for (let i = 1; i <= n; i++) {
// // Cộng giá trị của i vào biến sum
//   sum += i;
// }
// // Hiển thị kết quả
// alert("Tổng các số từ 1 đến " + n + " là: " + sum);
