
// nav bar js//
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 90) {
      $('.nav-bar').addClass("sticky");
    } else {
      $('.nav-bar').removeClass("sticky");
    }
  })
});
// mobile Nav//
const open=document.querySelector('.o-btn');
const close=document.querySelector('.close-btn');
const menu=document.querySelector('.nav-cont');
open.addEventListener('click',()=>{
  menu.classList.add('show')
});
close.addEventListener('click',()=>{
  menu.classList.remove('show');
});

// type Js // 
var typed = new Typed('.type', {
  strings: ['Designer .', 'professional coder .',],
  typeSpeed: 15,
  backSpeed: 15,
  smartBackspace: true,
  loop: true,

});

// slider js
$('.slick').slick({
  prevArrow: '<i class="fa-solid fa-arrow-left-long left"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right right"></i>',
});