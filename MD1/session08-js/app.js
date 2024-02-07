// Các từ khóa khai báo biến: var, let, const
// Tính chất:
// +var: khai báo lại, gán lại được giá trị
// +let: không khai báo lại được, nhưng gắn lại được giá trị
// +const: viết tắt của constant hằng số là cách khai báo giá trị cố định không khai báo lại hay gán lại được 
// Ví dụ: < từ khóa khai báo biến> < Tên biến> = < Giá trị>
// var a =10
// khai báo lại 
// var a= HelloWorld
// console.log(a); 
// let letB="Đang sử dụng từ khóa let";
// khai báo lại
// let letB = "không khai báo lại được"
// letB = 500;
// console.log(letB);
// Scope (phạm vi hoạt động)
// +global scope: Toàn cục -> var, let, const
// +block scope: Cục bộ -> let, const
// +local scope(Function scope):
// +Hoisting-> chỉ xảy ra khi sử dụng từ khóa var 
// let x= +prompt('Nhập x=');
// let y= +prompt('Nhập y=');
// let z= x+y;
// console.log(typeof x);
// console.log(z);
