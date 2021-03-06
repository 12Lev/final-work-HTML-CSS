const buttonBurgerMenu = document.querySelector('.header__burger-menu');
const headerCloseMenu = document.querySelector('.header__close-menu');
const topMenu = document.querySelector('.top-menu');
const topMenuItems = document.querySelectorAll('.top-menu__item');
const orderBtn = document.querySelectorAll('.order-btn');
const formCloseBtn = document.querySelector('.popup__close-btn');
const popupContainer = document.querySelector('.popup-container');
const topButton = document.querySelector('.top-button');
const body = document.querySelector('body');
const worksBtn = document.querySelector('.works__btn');
const titlePageBtn = document.querySelector('.title-page__btn');
const skillsBtn = document.querySelector('.skills__btn');
const titlePageElements = document.querySelector('.title-page__elements');
const popupInformationEmail = document.querySelector('.popup__information--email');


//Блок ниже отвечает за работу кнопки, которая возвращает в начало страницы

window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    topButton.classList.add('top-button--active');
  }
  if (scrolled < coords) {
    topButton.classList.remove('top-button--active');
  }
});

topButton.onclick = function() {
  window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
  topButton.hidden = (pageYOffset < document.documentElement.clientHeight);
});

// Данный блок создан для функционирования меню

buttonBurgerMenu.addEventListener('click', function(){
  topMenu.classList.add('top-menu--block');
  setTimeout(function(){
    topMenu.classList.add('top-menu--active');
  },50);
  topMenu.classList.remove('top-menu--none');
  headerCloseMenu.classList.add('close--active');
  body.classList.add('no-scroll');

});

headerCloseMenu.addEventListener('click', function(){
  topMenu.classList.remove('top-menu--active');
  headerCloseMenu.classList.remove('close--active');
  body.classList.remove('no-scroll');
  setTimeout(function(){
    topMenu.classList.remove('top-menu--block');
  },500);
});

topMenu.addEventListener('click', function(e){
  const isLink = e.target.classList.contains('top-menu__link');

  if(isLink) {
    topMenu.classList.remove('top-menu--active');
    headerCloseMenu.classList.remove('close--active');
    body.classList.remove('no-scroll');
    setTimeout(function(){
      topMenu.classList.remove('top-menu--block');
    },500);
  }
});

// Данный блок выполняет появление формы для обратного звонка

orderBtn.forEach(function(button){
  button.addEventListener('click', function(e){
    e.preventDefault();
    popupContainer.classList.add('popup-container--block');
    setTimeout(function(){
      popupContainer.classList.add('popup-container--active');
    },50);
    body.classList.add('no-scroll');
  });
});

worksBtn.addEventListener('click', addPopupContainer);
titlePageBtn.addEventListener('click', addPopupContainer);
skillsBtn.addEventListener('click', addPopupContainer);

formCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  popupContainer.classList.remove('popup-container--active');
  setTimeout(function(){
    popupContainer.classList.remove('popup-container--block');
    popupInformationEmail.classList.remove('popup-container--block');
  },500);
  body.classList.remove('no-scroll');
});
  
popupContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('popup-container')){
    popupContainer.classList.remove('popup-container--active');
    setTimeout(function(){
      popupContainer.classList.remove('popup-container--block');
      popupInformationEmail.classList.remove('popup-container--block');
    },500);
    body.classList.remove('no-scroll');
  }
});

// Летающие элементы

setTimeout(function(){
  titlePageElements.classList.add('elements--active');
},0);

//Функция для появления модального окна при нажатии кнопки блока main

function addPopupContainer(e){
  e.preventDefault();
  popupContainer.classList.add('popup-container--block');
  popupInformationEmail.classList.add('popup-container--block');
  setTimeout(function(){
    popupContainer.classList.add('popup-container--active');
  },50);
  body.classList.add('no-scroll');
};

