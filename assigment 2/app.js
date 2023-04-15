var arr_hinh = [
    "img/banner-1.jpg",
    "img/a0.jpg",
    "img/a3.jpg"
];
var arr_pic = [
    "img/banner-2.jpg",
    "img/a0.jpg",
    "img/a3.jpg"
];

var index = 0;

function prev() {
    index--;
    if (index == -1) {
        index = arr_hinh.length - 1;
    }
    document.getElementById("hinh").src = arr_hinh[index];
};

function next() {
    index++;
    if (index == arr_hinh.length) {
        index = 0;
    }
    document.getElementById("hinh").src = arr_hinh[index];
};

function lui() {
    index--;
    if (index == -1) {
        index = arr_pic.length - 1;
    }
    document.getElementById("pic").src = arr_pic[index];
};

function tien() {
    index++;
    if (index == arr_pic.length) {
        index = 0;
    }
    document.getElementById("pic").src = arr_pic[index];
};
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let j;
    let slides = document.getElementsByClassName("slider");
    let dots = document.getElementsByClassName("dot");
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}
var pic = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    pic++;
    if (pic > x.length) { pic = 1 }
    x[pic - 1].style.display = "block";
    setTimeout(carousel, 7000);
}
var pic1 = 0;
carousel1();

function carousel1() {
    var j;
    var x = document.getElementsByClassName("Slides");
    for (j = 0; j < x.length; j++) {
        x[j].style.display = "none";
    }
    pic1++;
    if (pic1 > x.length) { pic1 = 1 }
    x[pic1 - 1].style.display = "block";
    setTimeout(carousel1, 7000);
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("nav");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function login() {
    // Lấy giá trị nhập từ form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra giá trị nhập vào
    if (username == "" || password == "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu");
    } else if (username == "admin" && password == "123456") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
}

function addBorder(element) {
    element.style.border = "3px solid red";
}