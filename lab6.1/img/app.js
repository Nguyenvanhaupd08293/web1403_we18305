var arr_hinh = [
    "img/anh0.png",
    "img/anh1.jpg",
    "img/anh2.jpg",
    "img/anh3.png"
];
var arr_mota = ["Mô tả thời trang", "Khám phá du lịch", "Giải trí", "Bóng đá"];
var arr_trang = ["1/4", "2/4", "3/4", "4/4"];
var arr_dot = ["0", "1", "2", "3"];
var index = 0;

function prev() {
    index--;
    if (index == -1) {
        index = arr_hinh.length - 1;
    }
    document.getElementById("hinh").src = arr_hinh[index];
    document.getElementById("mota").innerHTML = arr_mota[index];
    document.getElementById("sotrang").innerHTML = arr_trang[index];
    doimau();
}

function next() {
    index++;
    if (index == arr_hinh.length) {
        index = 0;
    }
    document.getElementById("hinh").src = arr_hinh[index];
    document.getElementById("mota").innerHTML = arr_mota[index];
    document.getElementById("sotrang").innerHTML = arr_trang[index];
    doimau();
}

function chuyen(x) {
    document.getElementById("hinh").src = arr_hinh[x];
    document.getElementById("mota").innerHTML = arr_mota[x];
    document.getElementById("sotrang").innerHTML = arr_trang[x];
    doimau();
}

function doimau() {
    for (let i = 0; i > arr_hinh.length; i++) {
        if (document.getElementById("sotrang").innerHTML == arr_trang[i]) {
            document.getElementById(arr_dot[i]).style.color = "red";
        } else document.getElementById(arr_dot[i]).style.color = "rgb(237, 128, 128)";
    }
}