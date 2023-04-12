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