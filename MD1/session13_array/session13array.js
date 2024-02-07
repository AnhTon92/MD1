// Mảng
/*
2 loại mảng:
+Mảng 1 chiều
+Mảng nhiều chiều
 */
//  Cú pháp khai báo:
//  Từ khóa khai báo biến_arrayName = [10, 20,  "30", null, true]

// let arrNumber = [10, 20, 30 ,40];
// // index         0   1   2   3   (length - 1)
// // length               4
// console.log(arrNumber);

// // cách khai báo 2:
// let arrList = new Array("red", "blue", "green");
// console.log(arrList);

// khái niệm CRUD: Create (thêm mới) - Read (đọc) - Update (Cập nhật) - Delete (xóa)
// let arrNumber = [10, 20, 30 ,40];
//  read one - đọc 1 phần tử
// console.log(arrNumber[2]);     // 30
// console.log(arrNumber[3]);     // 40
// console.log(arrNumber[4]);     // undifined

// read all - đọc tất cả phần tử

// for (let i= 0; i <= arrNumber.length - 1; i++) {
//     console.log(arrNumber[i]);
// }

// // for of
// for (const key of arrNumber) {
//     console.log(key);
// }

// Create
// thêm phần tử vào đầu mảng - unshift()
// let arrNumber = [10, 20, 30 ,40];
// console.log(arrNumber);
// arrNumber.unshift(50);
// console.log(arrNumber);

// thêm phần tử vào cuối mảng - push()
// let arrNumber = [10, 20, 30 ,40];
// console.log(arrNumber);
// arrNumber.push(50);
// console.log(arrNumber);

// thêm vào vị trí biết trước - splice(index, deleteCount, element)
// let arrNumber = [10, 20, 30 ,40];

// arrNumber.splice(1, 0, 70, 80, 90);
// console.log(arrNumber);

// U update
// Update 1 phần tử
// let arrNumber = [10, 20, 30 ,40];
// console.log(arrNumber);
// arrNumber[1] = 80;
// console.log(arrNumber);

// Update all
// let arrNumber = [10, 20, 30 ,40];
// let newArray = [];
// console.log(arrNumber);
// for (let i = 0; i < arrayNumber.length; i++) {
//     let updateItem = arrNumber[i] * 2;
//     newArray.push(updateItem);
//     }
//     console.log(newArray);
    //  D - Delete
// Xóa phần tử đầu mảng - shift()
// let arrNumber = [10, 20, 30 ,40];
// arrNumber.shift();

// Xóa phần tử cuối mảng - pop()
// let arrNumber = [10, 20, 30 ,40];
// console.log(arrNumber);
// arrNumber.pop();
// console.log(arrNumber);


// Xóa phần tử tại vị trí biết trước - splice(idex, deleteCount)
// let arrNumber = [10, 20, 30 ,40];
// console.log(arrNumber);
// arrNumber.splice(1,2);
// console.log(arrNumber);


