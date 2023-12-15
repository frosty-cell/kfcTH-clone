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

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    //กำหนดค่าเพื่อนำค่ามาใช้จาก input
    showSlides(slideIndex = n);
}

//boostrap default=5000
function startSlideInterval() {
    slideInterval = setInterval(function (){
        plusSlides(1);
    }, 5000);
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("slides");
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
startSlideInterval();

let slideshowContainer = document.querySelector('.slideshow')

slideshowContainer.addEventListener('mouseover', function () {
    stopSlideInterval();
});

slideshowContainer.addEventListener('mouseout', function () {
    startSlideInterval();
});