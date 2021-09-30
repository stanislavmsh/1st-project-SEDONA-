// let navMain = document.querySelector('.nav')
// let navToggle = document.querySelector('.burger')

// navToggle.addEventListener('click', function() {
//     if (navMain.classList.contains('nav--closed')) {
//         navMain.classList.remove('nav--closed')
//         navMain.classList.add('nav--active')
//     } else {
//         navMain.classList.add('nav--closed')
//         navMain.classList.remove('nav--active')
//     }
//     if (navToggle.classList.contains('burger--closed')) {
//         navToggle.classList.remove('burger--closed')
//         navToggle.classList.add('burger--active')
//     } else {
//         navToggle.classList.add('burger--closed')
//         navToggle.classList.remove('burger--active')
//     }
//     })
















let navButton = document.querySelector('.nav__button')
let mainNav = document.querySelector('.nav__burger')

navButton.addEventListener('click', function() {
  if (mainNav.classList.contains('nav__burger--closed')) {
    mainNav.classList.remove('nav__burger--closed')
    mainNav.classList.add('nav__burger--opened')
  } else {
    mainNav.classList.remove('nav__burger--opened')
    mainNav.classList.add('nav__burger--closed')
  }
  if (navButton.classList.contains('nav__button--closed')) {
    navButton.classList.remove('nav__button--closed')
    navButton.classList.add('nav__button--opened')
  } else {
    navButton.classList.remove('nav__button--opened')
    navButton.classList.add('nav__button--closed')
  }

})






















