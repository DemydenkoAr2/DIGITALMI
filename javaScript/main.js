const scrollTopbarBlock = document.getElementById('scroll');
const scrollTopbarLinks = document.querySelectorAll('.a__ul-link') 
const scrollTopbarBtn = document.getElementById('login-btn');
let lastScrollPosition = 0;


scrollTopbarLinks.forEach((el) => {
  el.classList.add('position-start')
});

window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;

    if(lastScrollPosition > 0) {
        scrollTopbarBlock.classList.remove('background-header')
        scrollTopbarBlock.classList.add('active-scroll')
        scrollTopbarBtn.classList.add('active-scroll-btn')

        event.preventDefault();
        scrollTopbarLinks.forEach((el) => {
          el.classList.add('active-scroll-links');
          el.classList.remove('position-0-color')
          el.classList.remove('position-start')
        });
    }else {
        scrollTopbarBlock.classList.remove('active-scroll')
        scrollTopbarBlock.classList.add('background-header')
        scrollTopbarBtn.classList.remove('active-scroll-btn')

        event.preventDefault();
        scrollTopbarLinks.forEach((el) => {
          el.classList.remove("active-scroll-links");
          el.classList.add('position-0-color')
        });
    }
});



const blockAboutUs = document.getElementById('block-about-us');
console.log(blockAboutUs);

let blockAboutUsPosition = blockAboutUs.getBoundingClientRect();

console.log(blockAboutUsPosition)

// window.addEventListener('scroll', () => {
//   lastScrollPosition = window.scrollX;

//   if(lastScrollPosition > 0 ) {

//   }
// });

