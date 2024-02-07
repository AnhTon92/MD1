// bài 1: input: myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
    // output: "Lion, Tiger, Wolf, Kangaroo"
    // let arrmyColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
    // let newArrMyColor = arrmyColor.join(",");
    // console.log(newArrMyColor);


// bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) 
    // giữa 2 số chẵn.
    // Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8.

    // let string = String(prompt("Nhập vào 1 chuỗi số"));
    // let arr = [];
    // for (i = 0; i < string.length; i++) {
    //     arr.push(string.charAt(i))
    //     if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0 && i != string.length-1) {
    //         arr.push("-");
    //     }
    // }
    // console.log(arr.join(""));


// bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các 
    // ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
    // Ví dụ: nếu bạn nhập vào chuỗi 'Keep Calm And Code On' 
    // kết quả của chương trình là 'kEEP cALM aND cODE oN'


    // Cach 1:
    // let str = String(prompt("Nhập 1 chuỗi bất kỳ"));
    // const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const low = "abcdefghijklmnopqrstuvwxyz";
    // let arr = [];
    // for (i = 0; i < str.length; i++) {
    //     // dau cach thi them vao luon
    //     if (str[i] == " ") {
    //         arr.push(" ");
    //         continue;
    //     }
    //     for (let j = 0; j < up.length; j++) {
    //         if (str[i] == up[j]) {
    //             arr.push(low[j]);
    //         } else if (str[i] == low[j]) {
    //             arr.push(up[j]);
    //         }
    //     }
    // }
    // console.log(arr.join(""));

// Cach 2:


// bài 1: tính tổng các phần tử trong mảng

// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// for (i = 0; i < arr.length; i++) {
//     arr[i] = +arr[i];
// }    
// console.log(arr);
// let sum = 0;

// for (let n of arr) {
//   if (!isNaN(n)) {
//     sum += n;
//   } else {
//     alert("Mảng chỉ chứa số nguyên. Vui lòng nhập lại mảng: ");
//     arr = prompt("Nhập mảng: ");
//     break;
//   }
// }

// console.log("Tổng các phần tử trong mảng là: " + sum);



// bài 2: tìm phần tử lớn nhất trong mảng

// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// for (i = 0; i < arr.length; i++) {
//     arr[i] = +arr[i];
// }
// console.log(arr);
// let vitri;
// let max = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//         vitri = i;
//     }
// }
// console.log(`Giá trị lớn nhất là ${max} tại vị trí thứ ${vitri + 1}`);

// bài 3: tìm phần tử nhỏ nhất trong mảng
// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// for (i = 0; i < arr.length; i++) {
//     arr[i] = +arr[i];
// }
// console.log(arr);
// let vitri;
// let min = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//         vitri = i;
//     }
// }
// console.log(`Giá trị nhỏ nhất là ${min} tại vị trí thứ ${vitri + 1}`);

// bài 4:Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn
// Input: [1, 2, 3, 4, 5];
// Output: true/false

// cách 1: không dùng hàm có sẵn
// let arr = [99, 13, 0, 9, 22];
// let x = +prompt("nhập số x để kiểm tra");

// let result = false;

// for (let element of arr) {
//   if (element === x) {
//     result = true;
//     break;
//   }
// }
// console.log(result);

// cách 2: dùng hàm có sẵn

// let arr = [99, 13, 0, 9, 22];
// let x = +prompt("nhập số x để kiểm tra");
// let result = arr.includes(x);
// console.log(result); 


// bài 5: Đảo ngược giá trị trong mảng
// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// console.log(arr.reverse());

//bài 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]

// cách 1:
// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// let result = [];
// for (let item of arr) {
//   if (item % 2 === 0) {
//     result.push(item);
//   }
// }
// console.log(result); 

// cách 2:
// let arr = prompt("Nhập vào 1 mảng số");
// arr = arr.split(",");
// const evenNumbers = arr.filter((n) => n % 2 === 0);
// console.log(evenNumbers);

//bài 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3

// let arr = [1, 2, 3, 2, 4, 2, 5];
// let x = prompt("Nhập giá trị cần tìm: ");

// let count = 0;

// for (let n of arr) {
//   if (n === x) {
//     count++;
//   }
// }

// console.log("Số lần xuất hiện của phần tử " + x + " trong mảng là: " + count);

// // bài 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]

// cach 1:
let n = +prompt("nhập độ dài của mảng")
let arr = [];
for (let i = 0; i < n; i++) {
    let num = +prompt(`Nhap phan tu thu ${i + 1}`);
    arr.push(num);
}
for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let a = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = a;
        }
    }
}
console.log(arr);
// thuật toán nổi bọt

// cach 2:
// let n = +prompt("nhập độ dài của mảng")
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let num = +prompt(`Nhap phan tu thu ${i + 1}`);
//     arr.push(num);
// }

//         // Sắp xếp mảng tăng dần sử dụng hàm có sẵn
//         let mangSapXep = arr.slice().sort(function(a, b) {
//             return a - b;
//         });

//         // In kết quả
//         console.log("Cách 2: Mảng sau khi sắp xếp tăng dần: " + mangSapXep);