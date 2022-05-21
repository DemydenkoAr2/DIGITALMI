const scrollTopbarBlock = document.getElementById('scroll');
const scrollTopbarLinks = document.querySelectorAll('.a__ul-link');

let lastScrollPosition = 0;
let screenWidth = 0;

window.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;
  screenWidth = document.documentElement.clientWidth;
  // console.log(screenWidth)
  event.preventDefault();
  if (lastScrollPosition > 1) {
    scrollTopbarBlock.classList.add('active-scroll')
    scrollTopbarBlock.classList.remove('background-header')

    scrollTopbarLinks.forEach((el) => {
      el.classList.add('active-scroll-links');
    });
  } else if (lastScrollPosition === 0 && screenWidth > 770) {
      scrollTopbarBlock.classList.add('background-header')
      scrollTopbarBlock.classList.remove('active-scroll')

      scrollTopbarLinks.forEach((el) => {
        el.classList.remove('active-scroll-links');
      });
    }else if (lastScrollPosition === 0) {
      scrollTopbarBlock.classList.add('background-header')
      scrollTopbarBlock.classList.remove('active-scroll')
    }
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
});

const btnNavHiden = document.getElementById('btn-nav-hiden');
const navBlock = document.getElementById('nav-container');

btnNavHiden.addEventListener('click', () => {
  navBlock.classList.toggle('nav-login-display');
  navBlock.classList.toggle('nav-login-hiden');
  navBlock.classList.toggle('top-active-bgcolor');
  scrollTopbarBlock.classList.toggle('top-active-bgcolor');
  
  scrollTopbarLinks.forEach((el) => {
    el.classList.add('active-scroll-links');
  });
});

(function () {
  const dash = document.querySelector('.button-dash');
  dash.addEventListener('click', () => {
    dash.classList.toggle('dash-active');
  });
}());

