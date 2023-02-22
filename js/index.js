
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
// aos js//
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});