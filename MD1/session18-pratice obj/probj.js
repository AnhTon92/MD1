// Quản lý danh bạ

let danhBa = [
    {
        ten: "Anh Tôn",
        soDienThoai: "123",
        email: "anhton@example",
    }
];
function hienThiDanhSach() {
    for (let i = 0; i < danhBa.length; i++) {
      console.log(`
        Tên: ${danhBa[i].ten},
        Số điện thoại: ${danhBa[i].soDienThoai},
        Email: ${danhBa[i].email}
      `);
    }
  }
  function themMoiNguoi() {
    let name = prompt("Nhập tên: ");
    let phone = prompt("Nhập số điện thoại: ");
    let e = prompt("Nhập email: ");
  
    let nguoiMoi = {
      ten: name,
      soDienThoai: phone,
      email: e,
    };
  
    danhBa.push(nguoiMoi);
  }
  function capNhatThongTin() {
    let ten = prompt("Nhập tên người cần cập nhật: ");
  
    let nguoiCanCapNhat = danhBa.find((nguoi) => nguoi.ten === ten);
    if (nguoiCanCapNhat === undefined) {
      console.log("Không tìm thấy người cần cập nhật.");
      return;
    }
  
    let luaChon = prompt("Chọn thông tin cần cập nhật: 1. Số điện thoại, 2. Email");
    if (luaChon === "1") {
      nguoiCanCapNhat.soDienThoai = prompt("Nhập số điện thoại mới: ");
    } else if (luaChon === "2") {
      nguoiCanCapNhat.email = prompt("Nhập email mới: ");
    }
  }
  function xoaNguoi() {
    let ten = prompt("Nhập tên người cần xóa: ");
  
    let nguoiCanXoa = danhBa.find((nguoi) => nguoi.ten === ten);
    if (nguoiCanXoa === undefined) {
      console.log("Không tìm thấy người cần xóa.");
      return;
    }
  
    danhBa.splice(danhBa.indexOf(nguoiCanXoa), 1);
  }
  function timKiemTheoTen() {
    let ten = prompt("Nhập tên cần tìm kiếm: ");
  
    let nguoiTimThay = danhBa.find((nguoi) => nguoi.ten === ten);
    if (nguoiTimThay === undefined) {
      console.log("Không tìm thấy người cần tìm kiếm.");
      return;
    }
  
    console.log(`
      Tên: ${nguoiTimThay.ten},
      Số điện thoại: ${nguoiTimThay.soDienThoai},
      Email: ${nguoiTimThay.email}
    `);
  }
 
  while (true) {
    let luaChon = prompt("Chọn chức năng: 1. Hiển thị danh sách, 2. Thêm mới, 3. Cập nhật, 4. Xóa, 5. Tìm kiếm, 6. Thoát");
    switch (luaChon) {
      case "1":
        hienThiDanhSach();
        break;
      case "2":
        themMoiNguoi();
        break;
      case "3":
        capNhatThongTin();
        break;
      case "4":
        xoaNguoi();
        break;
      case "5":
        timKiemTheoTen();
        break;
      case "6":
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
}            
