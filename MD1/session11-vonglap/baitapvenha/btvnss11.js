// bài 11: 5 số nguyên tìm số lớn nhất và sắp xếp theo giảm dần
// let num = [prompt("Nhập số thứ nhất: "), prompt("Nhập số thứ hai: "), prompt("Nhập số thứ ba: "), prompt("Nhập số thứ tư: "), prompt("Nhập số thứ năm: ")];

// let max = num[0];

// for (let i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i];
//     }
// }

// console.log(`Số nguyên lớn nhất là:  ${max}`);

// num.sort((a, b) => b - a);

// console.log(`Chuỗi số được sắp xếp theo thứ tự giảm dần là: ${num}`);


// bài 9: tính tổng 30 số đầu tiên chia hết cho 5
// let count=0;
// let sum=0;
// for(i=1;count<30;i++){
//     if(i%5==0){
//         console.log(i);
//         sum=sum+i;
//         count++;
//     }
// }
// console.log(sum);


// bài 10: viết chương trình nhập câu bất kì và đảo ngược
// let str = prompt("Nhập một câu: ");

// let daonguoc = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     daonguoc += str[i];
// }

// console.log(`Câu đảo ngược:  ${daonguoc}`);


// bài 14:
//  cách 1:
// let a = +prompt("nhập số nguyên dương N:");
// let b = 1;
// let c = a;

// for (let i = 1; i <= a; i++) {
//     for (let d = b; d <= c; d++) {
//         document.write(d);
//     }
//     document.write("<br>");
//     c++;
// }
// cách 2:
let numberInput = +prompt("Nhập số nguyên dương N:");
if (numberInput < 0 || numberInput > 100) {
    alert("không hợp lệ. Nhập lại giá trị");
} else {
    for (let i = 1; i <= numberInput; i++) {
        let row = "";
        for (let j = i; j < i + numberInput; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}