function tinhDiemTrungBinhIfElse() {
  let toan = parseFloat(prompt("Nhap diem Toan: "));
  let ly = parseFloat(prompt("Nhap diem Ly: "));
  let hoa = parseFloat(prompt("Nhap diem Hoa: "));
  let sinh = parseFloat(prompt("Nhap diem Sinh: "));

  if (
    toan < 0 ||
    toan > 10 ||
    isNaN(toan) ||
    ly < 0 ||
    ly > 10 ||
    isNaN(ly) ||
    hoa < 0 ||
    hoa > 10 ||
    isNaN(hoa) ||
    sinh < 0 ||
    sinh > 10 ||
    isNaN(sinh)
  ) {
    alert("Nhap sai diem!");
    return;
  }

  let diemTB = (toan + ly + hoa + sinh) / 4;

  let xepLoai;
  if (diemTB >= 9 && diemTB <= 10) {
    xepLoai = "Gioi";
  } else if (diemTB >= 7 && diemTB < 9) {
    xepLoai = "Kha";
  } else if (diemTB >= 5 && diemTB < 7) {
    xepLoai = "Trung binh";
  } else {
    xepLoai = "Yeu";
  }

  alert("Diem trung binh: " + diemTB.toFixed(2) + "\nXep loai: " + xepLoai);
}

function tinhDiemTrungBinhSwitch() {
  let toan = parseFloat(prompt("Nhap diem Toan: "));
  let ly = parseFloat(prompt("Nhap diem Ly: "));
  let hoa = parseFloat(prompt("Nhap diem Hoa: "));
  let sinh = parseFloat(prompt("Nhap diem Sinh: "));

  if (
    toan < 0 ||
    toan > 10 ||
    isNaN(toan) ||
    ly < 0 ||
    ly > 10 ||
    isNaN(ly) ||
    hoa < 0 ||
    hoa > 10 ||
    isNaN(hoa) ||
    sinh < 0 ||
    sinh > 10 ||
    isNaN(sinh)
  ) {
    alert("Nhap sai diem!");
    return;
  }

  let diemTB = (toan + ly + hoa + sinh) / 4;

  let xepLoai;
  switch (true) {
    case diemTB >= 9 && diemTB <= 10:
      xepLoai = "Gioi";
      break;
    case diemTB >= 7 && diemTB < 9:
      xepLoai = "Kha";
      break;
    case diemTB >= 5 && diemTB < 7:
      xepLoai = "Trung binh";
      break;
    default:
      xepLoai = "Yeu";
      break;
  }

  alert("Diem trung binh: " + diemTB.toFixed(2) + "\nXep loai: " + xepLoai);
}
