// // a.Nhập 5 giá trị số nguyên cho mảng từ bàn phím
// let arr1 = prompt("Nhập các số nguyên cho mảng đầu tiên cách nhau bởi dấu ','");
// arr1 = arr1.split(",");
// let arr = [];
// for (let i = 0; i < arr.length; i++) {
//     arr[0].push(arr[i]);
// }

// // b.Hiển thị giá trị các phần tử của mảng
// console.log(arr);

// // c.In các phần tử có giá trị chẵn và tính tổng
// let totalsum = arr.reduce((sum, value) => {
//     return value % 2 == 0 ? sum + value : sum;
// }, 0)
// console.log(totalsum);

// // d.In các phần tử có chỉ số lẻ và tính tổng
// let totalsub = arr.reduce((sub, value) => {
//     return value % 2 !== 0 ? sub + value : sub;
// }, 0)
// console.log(totalsub);

// // e.In giá trị các phần tử trong mảng là số nguyên tố
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// console.log(arr.filter(isPrime));

// // f.In các phần tử có giá trị là max hoặc min
// function isMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// function isMin() {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(isMax(arr));
// console.log(isMin(arr));

// // g.Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp
// // xếp(có sử dụng hàm sort)
// console.log(arr.sort((a, b) => b - a));



// // h.Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá
// // trị như vậy

// let n = +prompt("Nhập vào 1 số nguyên bất kỳ");
// function checkExistCharacter(arr, char) {
//     let count = 0;
//     let check = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == char) {
//             check = true;
//             count++;
//         }
//     }
//     return (check) ? count : "không có số này";
// }
// console.log(checkExistCharacter(arr, n));


// // Khai báo mảng 2 chiều số nguyên arrInt
// let arrInt = new Array(3);
// // a.Nhập giá trị các phần tử của mảng từ bàn phím
// for (let i = 0; i < 3; i++) {
//     arrInt[i] = new Array(3);
//     for (let j = 0; j < 3; j++) {
//         arrInt[i][j] = prompt(`Nhập phần tử cho mảng`);
//     }
// }

// // b.In giá trị các phần tử của mảng
// console.log(arrInt);

// // c.In giá trị các phần tử nằm trên đường biên(Coi mảng 2 chiều là ma trận)
// console.log(arrInt[0]);
// console.log(arrInt[1][0]);
// console.log(arrInt[1][2]);
// console.log(arrInt[2]);

// // d.In giá trị các phần tử nằm trên đường chéo chính và phụ
// // e.Sắp xếp mảng tăng dần theo dòng(không và có sử dụng hàm sort)


// // Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
// let styles = ["Jazz", "Blues"];

// // a.Thêm phần tử “Rock - n - Roll” vào cuối mảng
// styles.push("Rock - n - Roll");
// console.log(styles);

// // b.Thay thế phần tử nằm chính giữa mảng bằng “Classics”
// // nếu mảng có tổng số phần tử là lẻ
// if (styles.length % 2 !== 0) {
//     styles[Math.floor(styles.length / 2)] = "Classics";
// }

// // c.Xóa phần tử đầu tiên của mảng và hiển thị mảng
// styles.shift();
// console.log(styles);

// // d.Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
// styles.unshift("Rap");
// styles.unshift("Reggae");
// console.log(styles);

// // 4. Khai báo mảng một chiều 
// // a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt
// // và lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá
// // trị không phải là số, một chuỗi trống hoặc nhấn “Cancel”
// let arrInt = [];
// while (true) {
//     let n = Number(prompt("Nhap mot so"));
//     if (n || n == 0) {
//         arrInt.push(n);
//     } else {
//         break
//     }
// }
// // b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min (không và có sử dụng hàm Math.max và Math.min)
// let sum = 0;
// let max = min = arrInt[0];
// for (const value of arrInt) {
//     if (value > max) {
//         max = value
//     }
//     if (value < min) {
//         min = value
//     }
//     sum += value
// }
// console.log(`Mang da nhap: ${arrInt}`);
// console.log(`Min: ${min}; Max: ${max}; Sum: ${sum}`);


// // 5. Khai báo và khởi tạo mảng 1 chiều số nguyên. Nhập vào 2 số nguyên a, b
// // Khởi tạo mảng gồm các phần tử của mảng số nguyên mà giá trị nằm giữa a và b

// let arrIteger = [];
// let a = +prompt("Nhap vao so a:");
// let b = +prompt("Nhap vao so b:");
// for (i = a; i <= b; i++) {
//     arrIteger.push(i);
// }
// console.log(`So nguyen  dau tien la ${a}`);
// console.log(`So nguyen  cuoi cung la ${b}`);
// console.log(arrIteger);


// // 1

// function inXinChao() {
//     console.log("Xin chao RA");
// }
// inXinChao()

// // 2
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(4));
// console.log(tinhBinhPhuong(8));
// console.log(tinhBinhPhuong(0));

// // 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ
// // thứ nhất tính từ năm 1 đến 100

// let nam = Number(prompt("Nhap nam"))

// if (nam % 100 === 0) {
//     console.log(`Nam ${nam} thuoc the ky ${nam / 100}`);
// } else {
//     console.log(`Nam ${nam} thuoc the ky ${Math.ceil(nam / 100)}`);
// }

// // 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// // tiên và thêm vào dấu “…” ở cuối chuỗi

// let chuoi = prompt("Nhap chuoi")

// function inChuoi(chuoi) {
//     if (chuoi.length < 15) {
//         console.log(chuoi);
//     } else {
//         // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
//         // VD: let chuoi = "mot chuoi rat la dai"
//         // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
//         // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
//         chuoi = chuoi.slice(0, 15)
//         console.log(chuoi + "...");
//     }
// }
// inChuoi(chuoi)

// // 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. 
// //Ví dụ:“rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// // xin chao cac ban => Xin Chao Cac Ban

// let chuoi = prompt("Nhap chuoi can chuan hoa")
// function chuanHoa(chuoi) {
//     let chuoiRong = ""
//     for (i = 0; i < chuoi.length; i++) {
//         if (i == 0) {
//             chuoiRong += chuoi[i].toUpperCase()
//         } else if (chuoi[i] == " " && chuoi[i + 1] != " ") {
//             chuoiRong += " "
//             chuoiRong += chuoi[++i].toUpperCase()
//             i++;
//         } else {
//             chuoiRong += chuoi[i].toLowerCase()
//         }
//     }
//     return chuoiRong
// }
// const value = chuanHoa(chuoi)
// console.log(value);

// // 6. Viết function trả ra giá trị lớn nhất trong một mảng số

// let arr = [3, 6, 9, 34, 67, 45]
// console.log(Math.max(...arr));