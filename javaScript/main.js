const scrollTopbarBlock = document.getElementById('scroll');
const scrollTopbarLinks = document.querySelectorAll('.a__ul-link') 
const scrollTopbarBtn = document.getElementById('login-btn');

let lastScrollPosition = 0;

// scrollTopbarLinks.forEach((el) => {
//   el.classList.add('position-start')
// });

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
    };
});

const firstElementLink = document.getElementById('first-link')
const secondElemetLink = document.getElementById('second-link')
const thirdElementLink = document.getElementById('third-link')

const blockAboutUs = document.getElementById('block-about-us');
const blockContact = document.getElementById('block-contact')

let blockAboutUsPosition = blockAboutUs.getBoundingClientRect();
let blockContactPosition = blockContact.getBoundingClientRect();

window.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;

  if(lastScrollPosition > 5 && lastScrollPosition < blockAboutUsPosition.y) {
    firstElementLink.classList.add('scroll-link-color')
    secondElemetLink.classList.remove('scroll-link-color')

  }else if (lastScrollPosition === 0 && lastScrollPosition < blockAboutUsPosition.y){
    firstElementLink.classList.remove('scroll-link-color')
    secondElemetLink.classList.remove('scroll-link-color')
    thirdElementLink.classList.remove('scroll-link-color')

  }else if (lastScrollPosition > blockAboutUsPosition.y && lastScrollPosition < blockContactPosition.y) {
    secondElemetLink.classList.add('scroll-link-color')
    firstElementLink.classList.remove('scroll-link-color')
    thirdElementLink.classList.remove('scroll-link-color')

  }else if (lastScrollPosition > blockContactPosition.y) {
    secondElemetLink.classList.remove('scroll-link-color')
    thirdElementLink.classList.add('scroll-link-color')
  }
});

const elementEmail = document.getElementById('email-copy');

elementEmail.addEventListener('click', () => {
  const elementEmailAlert = document.getElementById('email-alert');
  navigator.clipboard.writeText(elementEmail.innerHTML);
  elementEmailAlert.classList.add('span__alert-active')
    setTimeout (() => elementEmailAlert.classList.remove('span__alert-active'), 2000)
})

