// function changeLanguage(language) {
//     if (language === 'en') {
//         document.getElementById('lang-en-collect').textContent = 'JUST PICK UP';
//         document.getElementById('lang-en-delivery').textContent = 'DELIVERY';
//         document.getElementById('lang-en-catering').textContent = 'CATERING';
//     } else if (language === 'th') {
//         document.getElementById('lang-en-collect').textContent = 'รับที่ร้าน/รถ';
//         document.getElementById('lang-en-delivery').textContent = 'เดลิเวอรี่';
//         document.getElementById('lang-en-catering').textContent = 'เมนูจัดเลี้ยง';
//     }
// }

let slideIndex = 1;
let slideInterval;

// function startSlideInterval() {
//     slideInterval = setInterval(function (){
//         plusSlides(1);
//     }, 3000);
// }

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    //กำหนดค่าเพื่อนำค่ามาใช้จาก input
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // startSlideInterval();

    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length) {slideIndex = 1};
    if(n < 1) {slideIndex = slides.length};

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //access img index0
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";

}

showSlides();