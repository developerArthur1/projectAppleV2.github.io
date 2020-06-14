"use strict";

function openMenu() {
  document.querySelector('.submenu').classList.toggle('submenu__active');
  if(document.querySelector('.subsubmenu__first').classList.contains('subsubmenu__active'))
  {
    document.querySelector('.subsubmenu__first').classList.remove('subsubmenu__active');
  }

  if(document.querySelector('.subsubmenu__second').classList.contains('subsubmenu__active'))
  {
    document.querySelector('.subsubmenu__second').classList.remove('subsubmenu__active');
  }

  if(document.querySelector('.subsubmenu__third').classList.contains('subsubmenu__active'))
  {
    document.querySelector('.subsubmenu__third').classList.remove('subsubmenu__active');
  }
}

function subsubmenu1() {
  document.querySelector('.subsubmenu__first').classList.toggle('subsubmenu__active');
}

function subsubmenu2() {
  document.querySelector('.subsubmenu__second').classList.toggle('subsubmenu__active');
}

function subsubmenu3() {
  document.querySelector('.subsubmenu__third').classList.toggle('subsubmenu__active');
}


$(document).ready(function() {
	$('.footer-mobile__accordeon .footer-mobile__item').on('click', my_func);
});
function my_func(){
    $('.footer-mobile__accordeon .footer-mobile__column').not($(this).next());
    $(this).next().toggleClass("active");
}



