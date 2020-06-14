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



const popUpBlock = document.querySelector('.free_shipping');
const popUpBlockLabel = document.querySelector('.label_in_freeShipping');

const popUpBlockMobile = document.querySelector('.free_shippingMobile');
const popUpBlockLabelMobile = document.querySelector('.label_in_freeShippingMobile');

window.addEventListener("load", () => {
  setTimeout(() => {popUpBlock.classList.add("active5")}, 600);
  popUpChangeColor();
  function popUpChangeColor () {setTimeout(() => {popUpBlock.style.backgroundColor = '#f2f2f2'; popUpBlockLabel.style.color = '#333333'}, 2500)}

  setTimeout(() => {popUpBlockMobile.classList.add("activeMobile")}, 600);
  popUpChangeColorMobile();
  function popUpChangeColorMobile () {setTimeout(() => {popUpBlockMobile.style.backgroundColor = '#f2f2f2'; popUpBlockLabelMobile.style.color = '#333333'}, 2000)};

})



$(document).ready(function() {
	$('.footer-mobile__accordeon .footer-mobile__item').on('click', my_func);
});
function my_func(){
    $('.footer-mobile__accordeon .footer-mobile__column').not($(this).next());
    $(this).next().toggleClass("active");
}








const defaultImage = document.querySelector('.imgIphoneSEAllColors');
const iphoneSEWhite = document.querySelector('.imgIphoneSEWhite');
const iphoneSEBlack = document.querySelector('.imgIphoneSEBlack');
const iphoneSERed = document.querySelector('.imgIphoneSERed');

let priceUnderLabelBuyIphone = document.querySelector('.priceUnderLabelBuyIphone');
let resultUnderOptions = document.querySelector('.resultUnderOptions');

const labelPrice64gb = document.querySelector('.price64gb');
const labelPrice256gb = document.querySelector('.price256gb');

const colorWhite = document.querySelector('.colorWhite');
const colorBlack = document.querySelector('.colorBlack');
const colorRed = document.querySelector('.colorRed');

const memory64Block = document.querySelector('.memory64Block');
const memory128Block = document.querySelector('.memory128Block');
const memory256Block = document.querySelector('.memory256Block');

const blockMemoryUnavailable = document.querySelector('.blockMemoryUnavailable');
const blockCartUnavailable = document.querySelector('.blockCartUnavailable');


colorWhite.addEventListener('click', changeColorWhite);
colorBlack.addEventListener('click', changeColorBlack);
colorRed.addEventListener('click', changeColorRed);


memory64Block.addEventListener('click', changeMemory64);
memory128Block.addEventListener('click', changeMemory128);
memory256Block.addEventListener('click', changeMemory256);






  function changeColorWhite() {

    defaultImage.style.display = 'none';
    iphoneSEWhite.style.display = 'block';
    iphoneSEBlack.style.display = 'none';
    iphoneSERed.style.display = 'none';

    colorWhite.classList.add('modelActive');
    colorBlack.classList.remove('modelActive');
    colorRed.classList.remove('modelActive');
    
    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1';
  }

  function changeColorBlack() {

      defaultImage.style.display = 'none';
      iphoneSEWhite.style.display = 'none';
      iphoneSEBlack.style.display = 'block';
      iphoneSERed.style.display = 'none';


      colorWhite.classList.remove('modelActive');
      colorBlack.classList.add('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }




  function changeColorRed() {

    defaultImage.style.display = 'none';
    iphoneSEWhite.style.display = 'none';
    iphoneSEBlack.style.display = 'none';
    iphoneSERed.style.display = 'block';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorRed.classList.add('modelActive');

      blockMemoryUnavailable.style.backgroundColor = 'inherit';
      blockMemoryUnavailable.style.opacity = '1';
  }



  function changeMemory64() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.add('modelActive');
      memory128Block.classList.remove('modelActive');
      memory256Block.classList.remove('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphone.textContent = '39 990.00 руб';
      resultUnderOptions.textContent = '39 990.00 руб';
    
  }
  }

  function changeMemory128() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.remove('modelActive');
      memory128Block.classList.add('modelActive');
      memory256Block.classList.remove('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphone.textContent = '44 990.00 руб';
      resultUnderOptions.textContent = '44 990.00 руб';
    
  }
  }


  function changeMemory256() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.remove('modelActive');
      memory128Block.classList.remove('modelActive');
      memory256Block.classList.add('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      

      priceUnderLabelBuyIphone.textContent = '53 990.00 руб';
      resultUnderOptions.textContent = '53 990.00 руб';
    
  }
  }

























/* Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile */






const defaultImageMobile = document.querySelector('.imgIphoneSEAllColorsMobile');
const iphoneSEWhiteMobile = document.querySelector('.imgIphoneSEWhiteMobile');
const iphoneSEBlackMobile = document.querySelector('.imgIphoneSEBlackMobile');
const iphoneSERedMobile = document.querySelector('.imgIphoneSERedMobile');


let priceUnderLabelBuyIphoneMobile = document.querySelector('.priceUnderLabelBuyIphoneMobile');
let resultUnderOptionsMobile = document.querySelector('.resultUnderOptionsMobile');

const labelPrice64gbMobile = document.querySelector('.price64gbMobile');
const labelPrice256gbMobile = document.querySelector('.price256gbMobile');

const colorWhiteMobile = document.querySelector('.colorWhiteMobile');
const colorBlackMobile = document.querySelector('.colorBlackMobile');
const colorRedMobile = document.querySelector('.colorRedMobile');

const memory64BlockMobile = document.querySelector('.memory64BlockMobile');
const memory128BlockMobile = document.querySelector('.memory128BlockMobile');
const memory256BlockMobile = document.querySelector('.memory256BlockMobile');

const blockMemoryUnavailableMobile = document.querySelector('.blockMemoryUnavailableMobile');
const blockCartUnavailableMobile = document.querySelector('.blockCartUnavailableMobile');


colorWhiteMobile.addEventListener('click', changeColorWhiteMobile);
colorBlackMobile.addEventListener('click', changeColorBlackMobile);
colorRedMobile.addEventListener('click', changeColorRedMobile);


memory64BlockMobile.addEventListener('click', changeMemory64Mobile);
memory128BlockMobile.addEventListener('click', changeMemory128Mobile);
memory256BlockMobile.addEventListener('click', changeMemory256Mobile);






  function changeColorWhiteMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneSEWhiteMobile.style.display = 'block';
    iphoneSEBlackMobile.style.display = 'none';
    iphoneSERedMobile.style.display = 'none';

    colorWhiteMobile.classList.add('modelActiveMobile');
    colorBlackMobile.classList.remove('modelActiveMobile');
    colorRedMobile.classList.remove('modelActiveMobile');
    

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1';
  }

  function changeColorBlackMobile() {

      defaultImageMobile.style.display = 'none';
      iphoneSEWhiteMobile.style.display = 'none';
      iphoneSEBlackMobile.style.display = 'block';
      iphoneSERedMobile.style.display = 'none';


      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.add('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }





  function changeColorRedMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneSEWhiteMobile.style.display = 'none';
    iphoneSEBlackMobile.style.display = 'none';
    iphoneSERedMobile.style.display = 'block';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.add('modelActiveMobile');

      blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
      blockMemoryUnavailableMobile.style.opacity = '1';
  }



  function changeMemory64Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.add('modelActiveMobile');
      memory128BlockMobile.classList.remove('modelActiveMobile');
      memory256BlockMobile.classList.remove('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphoneMobile.textContent = '59 990.00 руб';
      resultUnderOptionsMobile.textContent = '59 990.00 руб';
    
  }
  }

  function changeMemory128Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.remove('modelActiveMobile');
      memory128BlockMobile.classList.add('modelActiveMobile');
      memory256BlockMobile.classList.remove('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphoneMobile.textContent = '64 990.00 руб';
      resultUnderOptionsMobile.textContent = '64 990.00 руб';
    
  }
  }


  function changeMemory256Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.remove('modelActiveMobile');
      memory128BlockMobile.classList.remove('modelActiveMobile');
      memory256BlockMobile.classList.add('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      

      priceUnderLabelBuyIphoneMobile.textContent = '73 990.00 руб';
      resultUnderOptionsMobile.textContent = '73 990.00 руб';
    
  }
  }


  






  