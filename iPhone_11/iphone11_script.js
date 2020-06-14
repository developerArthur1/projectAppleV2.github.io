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


window.addEventListener("load", function (){
  document.querySelector(".free_shipping").classList.add("active5");
})

window.addEventListener("load", function (){
  document.querySelector(".free_shippingMobile").classList.add("activeMobile");
})




const popUpBlock = document.querySelector('.free_shipping');
const popUpBlockLabel = document.querySelector('.label_in_freeShipping');

const popUpBlockMobile = document.querySelector('.free_shippingMobile');
const popUpBlockLabelMobile = document.querySelector('.label_in_freeShippingMobile');

window.addEventListener("load", () => {
  setTimeout(() => {popUpBlock.classList.add("active5")}, 600);
  popUpChangeColor();
  function popUpChangeColor () {setTimeout(() => {popUpBlock.style.backgroundColor = '#f2f2f2'; popUpBlockLabel.style.color = '#333333'}, 2000)}

  setTimeout(() => {popUpBlockMobile.classList.add("activeMobile")}, 600);
  popUpChangeColorMobile();
  function popUpChangeColorMobile () {setTimeout(() => {popUpBlockMobile.style.backgroundColor = '#f2f2f2'; popUpBlockLabelMobile.style.color = '#333333'}, 2000)};

})







const defaultImage = document.querySelector('.imgIphone11AllColors');
const iphone11White = document.querySelector('.imgIphone11White');
const iphone11Black = document.querySelector('.imgIphone11Black');
const iphone11Green = document.querySelector('.imgIphone11Green');
const iphone11Yellow = document.querySelector('.imgIphone11Yellow');
const iphone11Purple = document.querySelector('.imgIphone11Purple');
const iphone11Red = document.querySelector('.imgIphone11Red');


let priceUnderLabelBuyIphone = document.querySelector('.priceUnderLabelBuyIphone');
let resultUnderOptions = document.querySelector('.resultUnderOptions');

const labelPrice64gb = document.querySelector('.price64gb');
const labelPrice256gb = document.querySelector('.price256gb');

const colorWhite = document.querySelector('.colorWhite');
const colorBlack = document.querySelector('.colorBlack');
const colorGreen = document.querySelector('.colorGreen');
const colorYellow = document.querySelector('.colorYellow');
const colorPurple = document.querySelector('.colorPurple');
const colorRed = document.querySelector('.colorRed');

const memory64Block = document.querySelector('.memory64Block');
const memory128Block = document.querySelector('.memory128Block');
const memory256Block = document.querySelector('.memory256Block');

const blockMemoryUnavailable = document.querySelector('.blockMemoryUnavailable');
const blockCartUnavailable = document.querySelector('.blockCartUnavailable');


colorWhite.addEventListener('click', changeColorWhite);
colorBlack.addEventListener('click', changeColorBlack);
colorGreen.addEventListener('click', changeColorGreen);
colorYellow.addEventListener('click', changeColorYellow);
colorPurple.addEventListener('click', changeColorPurple);
colorRed.addEventListener('click', changeColorRed);


memory64Block.addEventListener('click', changeMemory64);
memory128Block.addEventListener('click', changeMemory128);
memory256Block.addEventListener('click', changeMemory256);






  function changeColorWhite() {

    defaultImage.style.display = 'none';
    iphone11White.style.display = 'block';
    iphone11Black.style.display = 'none';
    iphone11Green.style.display = 'none';
    iphone11Yellow.style.display = 'none';
    iphone11Purple.style.display = 'none';
    iphone11Red.style.display = 'none';


    colorWhite.classList.add('modelActive');
    colorBlack.classList.remove('modelActive');
    colorGreen.classList.remove('modelActive');
    colorYellow.classList.remove('modelActive');
    colorPurple.classList.remove('modelActive');
    colorRed.classList.remove('modelActive');
    

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1';
  }

  function changeColorBlack() {

      defaultImage.style.display = 'none';
      iphone11White.style.display = 'none';
      iphone11Black.style.display = 'block';
      iphone11Green.style.display = 'none';
      iphone11Yellow.style.display = 'none';
      iphone11Purple.style.display = 'none';
      iphone11Red.style.display = 'none';


      colorWhite.classList.remove('modelActive');
      colorBlack.classList.add('modelActive');
      colorGreen.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorPurple.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }



  function changeColorGreen() {

    defaultImage.style.display = 'none';
    iphone11White.style.display = 'none';
    iphone11Black.style.display = 'none';
    iphone11Green.style.display = 'block';
    iphone11Yellow.style.display = 'none'
    iphone11Purple.style.display = 'none';
    iphone11Red.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorGreen.classList.add('modelActive');
      colorYellow.classList.remove('modelActive');
      colorPurple.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }

  function changeColorYellow() {

    defaultImage.style.display = 'none';
    iphone11White.style.display = 'none';
    iphone11Black.style.display = 'none';
    iphone11Green.style.display = 'none';
    iphone11Yellow.style.display = 'block';
    iphone11Purple.style.display = 'none';
    iphone11Red.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorGreen.classList.remove('modelActive');
      colorYellow.classList.add('modelActive');
      colorPurple.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

      blockMemoryUnavailable.style.backgroundColor = 'inherit';
      blockMemoryUnavailable.style.opacity = '1';
  }


  function changeColorPurple() {

    defaultImage.style.display = 'none';
    iphone11White.style.display = 'none';
    iphone11Black.style.display = 'none';
    iphone11Green.style.display = 'none';
    iphone11Yellow.style.display = 'none'
    iphone11Purple.style.display = 'block';
    iphone11Red.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorGreen.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorPurple.classList.add('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }

  function changeColorRed() {

    defaultImage.style.display = 'none';
    iphone11White.style.display = 'none';
    iphone11Black.style.display = 'none';
    iphone11Green.style.display = 'none';
    iphone11Yellow.style.display = 'none'
    iphone11Purple.style.display = 'none';
    iphone11Red.style.display = 'block';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorGreen.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorPurple.classList.remove('modelActive');
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
      
      priceUnderLabelBuyIphone.textContent = '59 990.00 руб';
      resultUnderOptions.textContent = '59 990.00 руб';
    
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
      
      priceUnderLabelBuyIphone.textContent = '64 990.00 руб';
      resultUnderOptions.textContent = '64 990.00 руб';
    
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
      

      priceUnderLabelBuyIphone.textContent = '73 990.00 руб';
      resultUnderOptions.textContent = '73 990.00 руб';
    
  }
  }

























/* Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile */






const defaultImageMobile = document.querySelector('.imgIphone11AllColorsMobile');
const iphone11WhiteMobile = document.querySelector('.imgIphone11WhiteMobile');
const iphone11BlackMobile = document.querySelector('.imgIphone11BlackMobile');
const iphone11GreenMobile = document.querySelector('.imgIphone11GreenMobile');
const iphone11YellowMobile = document.querySelector('.imgIphone11YellowMobile');
const iphone11PurpleMobile = document.querySelector('.imgIphone11PurpleMobile');
const iphone11RedMobile = document.querySelector('.imgIphone11RedMobile');


let priceUnderLabelBuyIphoneMobile = document.querySelector('.priceUnderLabelBuyIphoneMobile');
let resultUnderOptionsMobile = document.querySelector('.resultUnderOptionsMobile');

const labelPrice64gbMobile = document.querySelector('.price64gbMobile');
const labelPrice256gbMobile = document.querySelector('.price256gbMobile');

const colorWhiteMobile = document.querySelector('.colorWhiteMobile');
const colorBlackMobile = document.querySelector('.colorBlackMobile');
const colorGreenMobile = document.querySelector('.colorGreenMobile');
const colorYellowMobile = document.querySelector('.colorYellowMobile');
const colorPurpleMobile = document.querySelector('.colorPurpleMobile');
const colorRedMobile = document.querySelector('.colorRedMobile');

const memory64BlockMobile = document.querySelector('.memory64BlockMobile');
const memory128BlockMobile = document.querySelector('.memory128BlockMobile');
const memory256BlockMobile = document.querySelector('.memory256BlockMobile');

const blockMemoryUnavailableMobile = document.querySelector('.blockMemoryUnavailableMobile');
const blockCartUnavailableMobile = document.querySelector('.blockCartUnavailableMobile');


colorWhiteMobile.addEventListener('click', changeColorWhiteMobile);
colorBlackMobile.addEventListener('click', changeColorBlackMobile);
colorGreenMobile.addEventListener('click', changeColorGreenMobile);
colorYellowMobile.addEventListener('click', changeColorYellowMobile);
colorPurpleMobile.addEventListener('click', changeColorPurpleMobile);
colorRedMobile.addEventListener('click', changeColorRedMobile);


memory64BlockMobile.addEventListener('click', changeMemory64Mobile);
memory128BlockMobile.addEventListener('click', changeMemory128Mobile);
memory256BlockMobile.addEventListener('click', changeMemory256Mobile);






  function changeColorWhiteMobile() {

    defaultImageMobile.style.display = 'none';
    iphone11WhiteMobile.style.display = 'block';
    iphone11BlackMobile.style.display = 'none';
    iphone11GreenMobile.style.display = 'none';
    iphone11YellowMobile.style.display = 'none';
    iphone11PurpleMobile.style.display = 'none';
    iphone11RedMobile.style.display = 'none';

    colorWhiteMobile.classList.add('modelActiveMobile');
    colorBlackMobile.classList.remove('modelActiveMobile');
    colorGreenMobile.classList.remove('modelActiveMobile');
    colorYellowMobile.classList.remove('modelActiveMobile');
    colorPurpleMobile.classList.remove('modelActiveMobile');
    colorRedMobile.classList.remove('modelActiveMobile');
    

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1';
  }

  function changeColorBlackMobile() {

      defaultImageMobile.style.display = 'none';
      iphone11WhiteMobile.style.display = 'none';
      iphone11BlackMobile.style.display = 'block';
      iphone11GreenMobile.style.display = 'none';
      iphone11YellowMobile.style.display = 'none';
      iphone11PurpleMobile.style.display = 'none';
      iphone11RedMobile.style.display = 'none';


      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.add('modelActiveMobile');
      colorGreenMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorPurpleMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }



  function changeColorGreenMobile() {

    defaultImageMobile.style.display = 'none';
    iphone11WhiteMobile.style.display = 'none';
    iphone11BlackMobile.style.display = 'none';
    iphone11GreenMobile.style.display = 'block';
    iphone11YellowMobile.style.display = 'none';
    iphone11PurpleMobile.style.display = 'none';
    iphone11RedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorGreenMobile.classList.add('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorPurpleMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }

  function changeColorYellowMobile() {

    defaultImageMobile.style.display = 'none';
    iphone11WhiteMobile.style.display = 'none';
    iphone11BlackMobile.style.display = 'none';
    iphone11GreenMobile.style.display = 'none';
    iphone11YellowMobile.style.display = 'block';
    iphone11PurpleMobile.style.display = 'none';
    iphone11RedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorGreenMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.add('modelActiveMobile');
      colorPurpleMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

      blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
      blockMemoryUnavailableMobile.style.opacity = '1';
  }


  function changeColorPurpleMobile() {

    defaultImageMobile.style.display = 'none';
    iphone11WhiteMobile.style.display = 'none';
    iphone11BlackMobile.style.display = 'none';
    iphone11GreenMobile.style.display = 'none';
    iphone11YellowMobile.style.display = 'none';
    iphone11PurpleMobile.style.display = 'block';
    iphone11RedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorGreenMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorPurpleMobile.classList.add('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }

  function changeColorRedMobile() {

    defaultImageMobile.style.display = 'none';
    iphone11WhiteMobile.style.display = 'none';
    iphone11BlackMobile.style.display = 'none';
    iphone11GreenMobile.style.display = 'none';
    iphone11YellowMobile.style.display = 'none';
    iphone11PurpleMobile.style.display = 'none';
    iphone11RedMobile.style.display = 'block';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorGreenMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorPurpleMobile.classList.remove('modelActiveMobile');
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


  






  