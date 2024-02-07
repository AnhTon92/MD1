/*
Câu điều kiện:
+Giúp thay đổi luồng chạy của chương trình
+Quyết định thực thi và thực hiện khi nào
Câu điều kiện if else
Câu điều kiện if .. else if .. else
VD:
*/
// if (5 > 6) {
//     console.log("câu dk if");
// } else if (6 > 2) {
//     console.log("câu điều kiện else if");
// } else {
//     console.log("câu điều kiện else");
// }
// if (6 > 15) { 
//     // ĐK đúng
//     console.log("thực hiện code ở if");
// } else {
//     // ĐK Sai
//     console.log("thực hiện code ở else");
// }
// let time = +prompt("Nhập thời gian hiện tại");
// if (time < 0 || time > 24 ) {
//     console.log("Bạn nhập sai");
// } else if (time > 0 && time < 14) {
//     console.log("Vẫn còn sớm mà!!");
// } else {
//     console.log("Muộn rồi! Về lấy vợ thôi!");
// }
// let Age = +prompt("nhập số tuổi");
// if (Age >= 56 ||  Age >= 3 && Age <= 7 ) {
//     console.log("Free");
// } else if (Age >= 8 && Age <= 16) {
//     console.log("giá vé là 7k");
// } else if (Age >= 17 && Age <= 35 ) {
//     console.log("giá vé là 10k");
// } else if (Age => 36 && Age <= 55) {
//     console.log("Giá vé là 5k");
// } else {
//     console.log("Không hợp lệ");
// }
/*
+ Câu điều kiện switch case 
tương tự như if else nhưng có ý nghĩa riêng dùng trong một vài trường hợp nhát định

ví dụ:
So sánh if else và switch case
+ if else: sẽ được sử dụng để kiểm tra trong 1 miền giá trị
+ switch case: sử dụng để kiểm tra từng trường hợp
*/
// switch (2) {
//     case 1:
//         console.log("Đây là 1 ");
//     case 2:
//         console.log("Đây là 2");
//     break;
//     // khi thực hiện xong sẽ dừng chương trình   
//     case 3:
//         console.log("đây là case 3");        
// }
// Nhập tháng
// let month = parseInt(prompt("Nhập tháng: "));

// Kiểm tra số ngày trong tháng
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     document.write("Tháng " + month + " có 31 ngày");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     document.write("Tháng " + month + " có 30 ngày");
//     break;
//   default:
//     document.write("Tháng " + month + " không hợp lệ");
// }

// let year = prompt("Nhập năm: ");
// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log("Năm" + year + "là năm nhuận");
// } else if (year % 400 === 0) {
//   console.log("Năm" + year +  "là năm nhuận");
// } else {
//   console.log("Năm" + year + "không phải là năm nhuận");
// }
// let weight = +prompt("Hãy nhập cân nặng của bạn (kg)");
// let height = +prompt("Hãy nhập chiều cao của bạn (m)");
// let bmi = weight / (Math.pow(height, 2));
// if (bmi < 18.5) {
//     document.write('Bạn đang quá gầy');
// }
// else if (bmi < 25) {
//     document.write(`Bạn đang có cơ thể bình thường ${bmi}`);
// }
// else if (bmi < 30) {
//     document.write(`Bạn đang trong giai đoạn tiền béo phì${bmi}`);
// }
// else if (bmi < 35) {
//     document.write(`Bạn đang bị béo phì cấp độ I${bmi}`);
// }
// else if (bmi < 40) {
//     document.write(`Bạn đang bị béo phì cấp độ II${bmi}`);
// }
// else {
//     document.write(`Bạn đang bị béo phì cấp độ III${bmi}`);
// }
// let date = +prompt("Nhap vao ngay sinh");
// let month = +prompt("Nhap vao thang sinh");
// switch (month) {
//     case 1:
//         if (date < 20) {
//             document.write("Cung Ma Ket");
//         } else {
//             document.write("Cung Bao Binh");
//         }
//         break;
//     case 2:
//         if (date < 19) {
//             document.write("Cung Bao Binh");
//         } else {
//             document.write("Cung Song Ngu");
//         }
//         break;
//     case 3:
//         if (date < 21) {
//             document.write("Cung Song Ngu");
//         } else {
//             document.write("Cung Bach Duong");
//         }
//         break;
//     case 4:
//         if (date < 20) {
//             document.write("Cung Bach Duong");
//         } else {
//             document.write("Cung Kim Nguu");
//         }
//         break;
//     case 5:
//         if (date < 21) {
//             document.write("Cung Kim Nguu");
//         } else {
//             document.write("Cung Song Tu");
//         }
//         break;
//     case 6:
//         if (date < 22) {
//             document.write("Cung Song Tu");
//         } else {
//             document.write("Cung Cu Giai");
//         }
//         break;
//     case 7:
//         if (date < 23) {
//             document.write("Cung Cu Giai");
//         } else {
//             document.write("Cung Su Tu");
//         }
//         break;
//     case 8:
//         if (date < 23) {
//             document.write("Cung Su Tu");
//         } else {
//             document.write("Cung Xu Nu");
//         }
//         break;
//     case 9:
//         if (date < 23) {
//             document.write("Cung Xu Nu");
//         } else {
//             document.write("Cung Thien Binh");
//         }
//         break;
//     case 10:
//         if (date < 24) {
//             document.write("Cung Thien Binh");
//         } else {
//             document.write("Cung Ho Cap");
//         }
//         break;
//     case 11:
//         if (date < 22) {
//             document.write("Cung Ho Cap");
//         } else {
//             document.write("Cung Nhan Ma");
//         }
//         break;
//     case 12:
//         if (date < 22) {
//             document.write("Cung Nhan Ma");
//         } else {
//             document.write("Cung Ma Ket");
//         }
//         break;
   
// }
// let diemToan = parseInt(prompt('Nhập số điểm Toán'));
// let diemVatLy = parseInt(prompt('Nhập số điểm Vật Lý'));
// let diemHoaHoc = parseInt(prompt('Nhập số điểm Hóa'));
// let diemVan = parseInt(prompt('Nhập số điểm Văn'));
// let diemSu = parseInt(prompt('Nhập số điểm Sử'));
// let diemDia = parseInt(prompt('Nhập số điểm Địa'));
// let tong = (diemVatLy + diemHoaHoc + diemToan + diemVan + diemSu + diemDia);
// let diemTrungBinh = tong / 6;
// document.writeln(`điểm tổng môn là: ${tong}`);
// document.writeln(`điểm trung bình sáu môn là: ${diemTrungBinh}`);
// let message = (diemTrungBinh >= 7.9) ? ("bạn là học sinh loại GIỎI") : (diemTrungBinh >= 6.5) ? ("bạn là học sinh loại KHÁ") : (diemTrungBinh >= 5.0) ? ("bạn là học sinh loại TRUNG BÌNH") : ("bạn là học sinh loại YẾU");
// document.writeln(message);  
// let a = +prompt("Moi ban nhap vao so a");
// let b = +prompt("Moi ban nhap vao so b");
// let calculator = prompt("Nhap vao cac phep tinh + , -, * ,/");
// let rs;
//  switch (calculator) {
//     case "+":
//     rs = a + b;
//     break;
//     case "-":
//     rs = a - b;
//     break;
//     case "*":
//     rs = a * b;
//     break;
//     case "/": {
//         if (b != 0) {
//         rs = a / b
//         } else {
//         alert("Khong thuc hien duoc phep tinh");
//         }
//         } break;
//         } alert(`ket qua cua phep tinh tren: a ${calculator} b = ${rs}`);   
// let color = prompt("Nhap 1 mau bat ki");
// if (color == "green" || color == "red" || color == "yellow") {
//     console.log(color);
// } else {
//     alert("Mau khong hop le");
// }
// let a = +prompt('Nhập số a :');
// let b = +prompt('Nhập số b :');
// let c = +prompt('Nhập số c :');
// let delta = b * b - 4 * a * c;
//     if (delta < 0) {
//         document.write('Phương trình vô nghiệm');
//     }
//     else if (delta == 0) {
//         let x = (-b) / (2 * a);
//         document.write('Nghiệm của phương trình là x1 = x2 =' + x);
//     }
//     else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         document.write('Phương trình có 2 nghiệm phân biệt là' + '<br>');
//         document.write('X1=' + x1 + '<br>');
//         document.write('X2=' + x2);
//     }
// Nhập vào 3 cạnh của tam giác
let a = +prompt("Nhập cạnh a: ");
let b = +prompt("Nhập cạnh b: ");
let c = +prompt("Nhập cạnh c: ");
// xác định có phải tam giác không
if (a + b < c || a + c < b || b + c < a) {
  console.log("Không phải tam giác");
} else {
    // đặt biến type loại chuỗi để in ra kết quả
  let type = "";
  switch (true) {
    // xác định điều kiện tam giác cân
    case (a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a):
      type = "Tam giác cân";
      break;
    //   điều kiện tam giác vuông
    case (a * a + b * b === c * c) || (b * b + c * c === a * a) || (c * c + a * a === b * b):
      type = "Tam giác vuông";
      break;
    //   điều kiện tam giác tù
    case (a*a > b*b+c*c) || (b*b > a*a+c*c) || (c*c > a*a+b*b):
        type = "tam giác tù" 
    default:
        // còn lại là tam giác nhọn
      type = "Tam giác nhọn";
  }
//   in ra kết quả
  console.log("Loại tam giác: " + type);
}
