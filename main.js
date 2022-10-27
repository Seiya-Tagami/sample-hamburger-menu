'use strict';

const hamburgerMenuButton = document.querySelector('.js-hamburger-menu-button');
const hamburgerMenuLine01 = document.querySelector('.js-hamburger-menu-line01');
const hamburgerMenuLine02 = document.querySelector('.js-hamburger-menu-line02');
const nav = document.querySelector('.js-header-nav');
hamburgerMenuButton.addEventListener('click', () => {
  hamburgerMenuLine01.classList.toggle('rotate-line01');
  hamburgerMenuLine02.classList.toggle('rotate-line02');
  nav.classList.toggle('block');
})

//querySelectorで取得、イベントリスナーを使って、クリックした時にtoggleでクラスをつけ外しするという流れです。