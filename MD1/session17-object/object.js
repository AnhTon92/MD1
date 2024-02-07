//  Object- đối tượng
// trong đối tượng gồm các cặp key - value
// cú pháp
//  let TeenObj = {key1: value1, key2:value2, ...keyN:valueN}

// let student = {
//     studentName: "Giang Rồng",
//     age: 18,
//     address: "Hà Nội",
//     gender: "Khác",
// };
// console.log(student);

// CRUD

// R - read one => tenObj.Key
// console.log(student.studentName); // lấy được giá trị Giang Rồng

// R - read all => forIn

// for (const key in student) {
//     console.log(key); // lấy ra tất cả key của Obj
//     console.log(student[key]); // lấy ra giá trị của Obj
// }

// C - create => teenObj.newKey =  newValue

// cách 1:

// student.phone = "031243125",

// Cách 2:
// let phone = "phone";
// let student = {
//     studentName: "Giang Rồng",
//     age: 18,
//     address: "Hà Nội",
//     gender: "Khác",
//     [phone]: "02332423", // dữ liệu động, có thể dễ sửa chữa hơn.
// };
// console.log(student);

// U - Update

// let student = {
//     studentName: "Giang Rồng",
//     age: 18,
//     address: "Hà Nội",
//     gender: "Khác",
//     [phone]: "02332423", // dữ liệu động, có thể dễ sửa chữa hơn.
// };
// console.log(student);

// student.address = "Dubai";

// D - delete

// let student = {
//     studentName: "Giang Rồng",
//     age: 18,
//     address: "Hà Nội",
//     gender: "Khác",
//     [phone]: "02332423", // dữ liệu động, có thể dễ sửa chữa hơn.
// };
// console.log(student);

// delete student.age;
// console.log(student);

// bài 1: Tạo đối tượng person bao gồm: tên, tuổi, địa chỉ, sđt => in tất cả thông tin
    // input: object person: name, age, address, phone
    // output: "Thông tin người dùng là:
    // tên: ... - age: ... - địa chỉ: ... - sđt: ...

    // let person = {
    //     name: "Tôn",
    //     age: 31,
    //     address: "Hà Nội",
    //     phone: "09314131224",
    // }
    // console.log(person);
// bài 2: Tạo đối tượng employee bao gồm: tên, lương (12000), chức vụ
    // input: object employee: name, salary, department
    // output: "Thông tin nhân viên là:
    // Tên NV: ... - Lương NV: 24000 VNĐ - Chức vụ: ...

// let employee = {
//     name: "Lê Hùng Sơn",
//     salary: "12000",
//     department: "Báo",
// }
// employee.salary = "24000";
// console.log(employee);
// console.log(`thông tin nhân viên là:`);
// for (const key in employee) {
//     console.table(employee[key]);
// } 
           
// bài 3: 

// Khởi tạo đối tượng
// let obj = {
//     name: "Anh Tôn",
//     age: 31,
//     address: "Hà Nội",
//   };
  
//   // Hàm xử lý input của người dùng
//   function handleInput(input) {
//     switch (input) {
//       case "C":
//         // Thêm phần tử mới
//         let keyC = prompt("Nhập key:");
//         let newValuealue = prompt("Nhập value:");
//         obj[keyC] = newValuealue;
//         console.table(obj);
//         break;
//       case "R":
//         // In ra toàn bộ phần tử
//         console.table(obj);
//         break;
//       case "U":
//         // Cập nhật giá trị
//         let keyU = prompt("Nhập key cần cập nhật:");
//         let flag = false;
//         for (const iterator in obj) {
//             if (keyU === iterator) {
//                 let updateValue = prompt("Nhập giá trị mới:");
//                 obj[keyU] = updateValue;
//                 console.table(obj);
//                 flag = true;
//             }
//         }
//         if (flag) {
//             console.table(obj);
                
//         }
//         else {
//             console.log("không tồn tại key này");
//         }
//          break;
//       case "D":
//         // Xóa phần tử
//         let keyD = prompt("Nhập key cần xóa:");
//         let Dflag = false;
//         for (const iterator in obj){
//         if (keyD === iterator) {
//             Dflag = true;
//           delete obj[keyD];
//           }
//         }
//         if (Dflag) {
//             console.table(obj);
//         } else {
//             console.log("không có key này");
//         }
//         break;
//       case "E":
//         // Thoát chương trình
//         console.log("Thoát chương trình!");
//         break;
//       default:
//         // Lỗi
//         console.log("Lỗi input!");
//         break;
//     }
//     return input;
//   }
//   let input = prompt("Nhập C/R/U/D/E:");
//    while(true){
//     if (input !== "E") {
//         handleInput(input);
//         break;
//     } else {
        
//         break;
        
//     }
    
//    }

// bài 2:

// let id = 1;
// class Course {
//     constructor(name, complete) {
//         this.id = id++;
//         this.name = name;
//         this.complete = complete;
//     }
// }
// let course1 = new Course("HTML", "false");
// let course2 = new Course("CSS", "false");
// let course3 = new Course("Basic Of Javascript", "false");
// let course4 = new Course("Node Package Manager (npm)", "false");
// let course5 = new Course("Git", "false");
// let list = [];
// list.push(course1);
// list.push(course2);
// list.push(course3);
// list.push(course4);
// list.push(course5);
// // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// let action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// // C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
// // Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// function find(index) {
//     let check = false;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].id == index) {
//             check = true;
//             return index;
//         }
//     }
//     if (check == false) {
//         console.log("Không tồn tại");
//         return -1;
//     }
// }
// while (true) {
//     if (action == "c") {
//         let newCourse = prompt("Nhập khóa học bạn muốn thêm");
//         let newStatus = prompt("Nhập trạng thái hoàn thành");
//         list.push(new Course(newCourse, newStatus));
//         console.log(list);
//     } else if (action == "r") {
//         // R – In ra toàn bộ các khóa học theo mẫu trên
//         console.log(list);
//     } else if (action == "u") {
//         // U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho
//         // người dùng nhập vào tên muốn update và trạng thái mới.Update xong in lại như trên
//         let indexUpdate = prompt("Nhập vị trí bạn muốn update khóa học");
//         let indexUp = find(Number(indexUpdate));
//         list[indexUp].name = prompt("Tên khóa học bạn muốn update");
//         list[indexUp].complete = prompt("Trạng thái bạn muốn update");
//         console.log(list);
//     } else if (action == "d") {
//         // D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
//         let indexDel = prompt("Nhập vị trí bạn muốn delete");
//         let indexD = find(Number(indexDel));
//         list.splice(indexD, 1);
//         console.log(list);
//     } else if (action == "e") {
//         // E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E
//         // thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
//         alert("Cảm ơn bạn đã đến với Rikkei Academy")
//         break;
//     }
//     else { }
//     action = prompt("Nhap vao hanh dong ban C/R/U/D va E de ket thuc").toLocaleLowerCase();
// }

//  bài 1:

let phone = [
{name :"Sony Xperia XZ",
brand : "sony",
price : "4428",
color : "white",
category : "phone",
},
{name :"oppo f3 plus",
brand : "oppo",
price : "5487",
color : "black",
category : "phone",
},
{name : "iphone 13pro max",
brand : "apple",
price : "21490",
color : "gray",
category : "phone",
},
{name :"samsung galaxy s8",
brand : "samsung",
price : "8490",
color : "blue",
category : "phone",
}
]
console.table(phone);
for (i = 0; i < phone.length; i++) {
    console.log(phone[i].name);
    console.log(phone[i].price);
}
// 1.21.2. Viết script in / đăng xuất sản phẩm với số của chúng, sau đó in / đăng
// xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhap
let input = Number(prompt("Please enter"));
console.log(`${phone[input].name}`);
console.log(`${phone[input].brand}`);
console.log(`${phone[input].price}`);
console.log(`${phone[input].color}`);
console.log(`${phone[input].category}`);

// 1.3. Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
let userInput = prompt('Enter your category');
for (i = 0; i < phone.length; i ++){
    if (userInput == phone[i].category){
        console.log(`${phone[i].name} `);
        console.log(`${phone[i].price}`);
        console.log(`${phone[i].category}`);
    }
}
//  1.4  Thêm nhà cung cấp vào từng sản phẩm
for (i = 0; i < phone.length; i ++){
    phone[i].provider = prompt('Enter your provider');
    console.table(phone);
}
let a = prompt('Enter your provider');
for (i = 0; i < phone.length; i ++){
    if (a == phone[i].provider){
        console.log(`${phone[i].name} `);
        console.log(`${phone[i].price}`);
        console.log(`${phone[i].category}`);
        console.log(`${phone[i].provider}`);
    }
}
  





    
