let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videobtn = document.querySelector('.vid-btn');

windows.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');

}

    menu.addEventListener('click',()=>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    })  

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggler('active');
})  

formbtn.addEventListener('click',()=>{
    loginform.classList.add('active');
});

formclose.addEventListener('click',()=>{
    loginform.classList.remove('active');
});

videobtn.foreach(btn =>{
    btn.addeventlistener('click', ()=>{
       document.querySelector('.contols .active').classlist.remove('active');
       btn.classlist.add('active');
       let src = btn.getattribute('data-src');
       document.querySelector('#video-slider').src = src;
    });
});

var swiper = new swiper(".review-slider",{
    spacebetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableoninteraction: false,
    },
    breakpoints:{
        640:{
            slidesperview:1,
        },
        768:{
            slidesperview:2,
        },
        1024:{
            slidesperview:3,
        },
    },
});

var swiper = new swiper(".brand-slider",{
    spacebetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableoninteraction: false,
    },
    breakpoints:{
        450:{
            slidesperview:2,
        }
        768:{
            slidesperview:3,
        },
        991:{
            slidesperview:4,
        },
        1200:{
            slidesperview:5,
        },
    },
});














