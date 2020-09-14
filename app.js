



// This  is the navigation's javascript
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // const body = document.getElementsByTagName('body');
    const bb = document.querySelector('body');



    const logoBurger = document.querySelector('.logo');
    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            // we use index and divide it by 7 to animate each menu item individually at different instances or delays

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index  / 7 + 0.3}s `;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');


        //deactivating body scroll
        // body.scrol



        burger.classList.toggle('burger-active');
        burger.classList.toggle('burger-line');
        logoBurger.classList.toggle('logo-burger');
        bb.classList.toggle('scroll-toggle');
        // document.body.style.overflow= 'hidden';

        // burger.addEventListener('click', () =>{
        //     document.body.style.overflow= 'scroll';
        // })
    });


};

//reveal the chefs on click

// const showChefs = () => {
//     const buttn = document.querySelector('.meet-chefs');
//     const conti = document.querySelector('.chefs');

//     buttn.addEventListener('click', () => {
//         conti.style.display = '';

//         conti.classList.toggle('show-chefs');
//     })


// };


//Vanilla javascript image carousel
let carousel = ()=>{
    const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter or image tracker
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return;

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";

        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";

        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

});

};

// stage carousel
window.addEventListener("DOMContentLoaded", function(e){
    let stage = document.querySelector(".stage");
    let fadeComplete = function(e){stage.appendChild(arr[0]);};
    let arr = stage.getElementsByTagName("img");
    for(let i=0; i<arr.length; i++){
        arr[i].addEventListener("animationend", fadeComplete, false);
    }
}, false);

// let sliderNav = document.querySelectorAll(".slider-nav");
// sliderNav[0].onclick = function(){
//     alert('helo')
// }
// sliderNav[1].onclick = function(){
    
// }



// AOS.init();
// // aos settings
// AOS.init({
//     // disable: true,
//     // throttleDelay: 999,
//     easing: 'ease-in-out',
//     mirror: true,

// });

//image gallery

// food menu
let menuShow = ()=>{
    let dinnerBtn= document.querySelector('.dinner-btn');
    let lunchBtn= document.querySelector('.lunch-btn');
    let breakfastBtn= document.querySelector('.breakfast-btn');
    let todaysSpecialBtn= document.querySelector('.todays-special-btn');

    let dinnerDiv = document.querySelector('.dinner');
    let lunchDiv = document.querySelector('.lunch');
    let breakfastDiv = document.querySelector('.breakfast');
    let todaysSpecial = document.querySelector('.todays-special');

        // todaysSpecial.classList.toggle('menu-active');
    todaysSpecial.classList.add('menu-active');
    todaysSpecialBtn.classList.add('btn-active');


    todaysSpecialBtn.addEventListener('click', ()=>{
        dinnerDiv.classList.remove('menu-active');
        lunchDiv.classList.remove('menu-active');
        breakfastDiv.classList.remove('menu-active');

        dinnerBtn.classList.remove('btn-active');
        lunchBtn.classList.remove('btn-active');
        breakfastBtn.classList.remove('btn-active');
        
        todaysSpecial.classList.add('menu-active');
        todaysSpecialBtn.classList.add('btn-active');


    });

    dinnerBtn.addEventListener('click', ()=>{
        lunchDiv.classList.remove('menu-active');
        breakfastDiv.classList.remove('menu-active');
        todaysSpecial.classList.remove('menu-active');

        lunchBtn.classList.remove('btn-active');
        breakfastBtn.classList.remove('btn-active');
        todaysSpecialBtn.classList.remove('btn-active');


        dinnerDiv.classList.toggle('menu-active');
        dinnerBtn.classList.toggle('btn-active');

        
    });
    lunchBtn.addEventListener('click', ()=>{
        dinnerDiv.classList.remove('menu-active');
        breakfastDiv.classList.remove('menu-active');
        todaysSpecial.classList.remove('menu-active');

        dinnerBtn.classList.remove('btn-active');
        breakfastBtn.classList.remove('btn-active');
        todaysSpecialBtn.classList.remove('btn-active');



        lunchDiv.classList.toggle('menu-active');
        lunchBtn.classList.toggle('btn-active');

    });
    breakfastBtn.addEventListener('click', ()=>{
        dinnerDiv.classList.remove('menu-active');
        lunchDiv.classList.remove('menu-active');
        todaysSpecial.classList.remove('menu-active');

        dinnerBtn.classList.remove('btn-active');
        lunchBtn.classList.remove('btn-active');
        todaysSpecialBtn.classList.remove('btn-active');

        breakfastDiv.classList.toggle('menu-active');
        breakfastBtn.classList.toggle('btn-active');

    });


};


function imageGallery(){
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.room-preview img');

    previews.forEach(preview =>{
        preview.addEventListener('click', function(){
            const smallSrc = this.src;
            //the power of replace
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove("room-active"));
            preview.classList.add("room-active")
        })
    })
};

//The functions executioner
const app = () => {
    carousel();

    imageGallery();
    menuShow();
    navSlide();

    // showChefs();
    //scr();
};
app();
