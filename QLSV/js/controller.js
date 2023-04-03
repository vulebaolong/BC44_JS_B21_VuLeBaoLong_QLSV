function layThongTinTuForm() {
  // lấy thông tin từ form
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = document.getElementById("txtTenSV").value;
  var loaiSV = document.getElementById("loaiSV").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemVan = document.getElementById("txtDiemVan").value * 1;
  //   tạo object
  return {
    maSV: maSV,
    tenSV: tenSV,
    loaiSV: loaiSV,
    diemToan: diemToan,
    dienVan: diemVan,
    tinhDTB: function () {
      var dtb = (this.diemToan + this.dienVan) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb >= 5) {
        return "Đậu";
      } else {
        return "Rớt";
      }
    },
  };
}

function showThongTinLenForm(sv) {
  //   show thông tin lên form
  document.getElementById("spanTenSV").innerText = sv.tenSV;
  document.getElementById("spanMaSV").innerText = sv.maSV;
  document.getElementById("spanLoaiSV").innerText = sv.loaiSV;
  document.getElementById("spanDTB").innerText = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerText = sv.xepLoai();
}
