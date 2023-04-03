var dssv = [];

//   lấy json lên khi user load trang
var dataJson = localStorage.getItem("DSSV_LOCAL");
// convert NGƯỢC từ json về array
if (dataJson != null) {
    var dataArr = JSON.parse(dataJson);
    // convert array chứa object ko có method thành array chứa object có method tinhDTB()
    for (var i = 0; i < dataArr.length; i++) {
        var item = dataArr[i];
        var sv = new SinhVien(
            item.ma,
            item.ten,
            item.email,
            item.matKhau,
            item.toan,
            item.ly,
            item.hoa
        );
        dssv.push(sv);
    }
    // JSON.parse(dataJson) sẽ return về null hoặc array
    renderDSSV(dssv);
}

function themSinhVien() {
    //   Lấy thông tin từ form
    var sv = layThongTinTuFrom();
    dssv.push(sv);
    //   convert array dssv thành json
    var dataJson = JSON.stringify(dssv);
    // set get remove
    //   lưu json xuống
    localStorage.setItem("DSSV_LOCAL", dataJson);
    //   render lên layout
    renderDSSV(dssv);
}

function xoaSV(id) {
    //   tìm vị trí
    var viTri = -1;
    for (var i = 0; i < dssv.length; i++) {
        var sv = dssv[i];
        if (sv.ma == id) {
            viTri = i;
        }
    }
    dssv.splice(viTri, 1);
    renderDSSV(dssv);
}
function suaSV(id) {
    var viTri = dssv.findIndex(function (item) {
        console.log("hello");
        return item.ma == id;
    });
    // if (viTri == -1) return;
    if (viTri != -1) {
        // chặn user sửa mã sv
        document.getElementById("txtMaSV").disabled = true;
        document.getElementById("themSV").disabled = true;
        showThongTinLenForm(dssv[viTri]);
    }
}
function capNhatSinhVien() {
    // bỏ chặn user
    document.getElementById("txtMaSV").disabled = false;
    document.getElementById("themSV").disabled = false;

    //   Lấy thông tin từ form
    var sv = layThongTinTuFrom();
    var viTri = dssv.findIndex(function (item) {
        return item.ma == sv.ma;
    });
    if (viTri !== -1) {
        dssv[viTri] = sv;
        renderDSSV(dssv);
        resetForm();
    }
}
function resetForm() {
    document.getElementById("formQLSV").reset();
}

// splice(start,1)
