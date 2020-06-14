'use strict';

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




const defaultImage = document.querySelector('.imgIphoneXRAllColors');
const iphoneXRWhite = document.querySelector('.imgIphoneXRWhite');
const iphoneXRBlack = document.querySelector('.imgIphoneXRBlack');
const iphoneXRBlue = document.querySelector('.imgIphoneXRBlue');
const iphoneXRYellow = document.querySelector('.imgIphoneXRYellow');
const iphoneXRCoral = document.querySelector('.imgIphoneXRCoral');
const iphoneXRRed = document.querySelector('.imgIphoneXRRed');


let priceUnderLabelBuyIphone = document.querySelector('.priceUnderLabelBuyIphone');
let resultUnderOptions = document.querySelector('.resultUnderOptions');

const labelPrice64gb = document.querySelector('.price64gb');
const labelPrice128gb = document.querySelector('.price128gb');

const colorWhite = document.querySelector('.colorWhite');
const colorBlack = document.querySelector('.colorBlack');
const colorBlue = document.querySelector('.colorBlue');
const colorYellow = document.querySelector('.colorYellow');
const colorCoral = document.querySelector('.colorCoral');
const colorRed = document.querySelector('.colorRed');

const memory64Block = document.querySelector('.memory64Block');
const memory128Block = document.querySelector('.memory128Block');

const blockMemoryUnavailable = document.querySelector('.blockMemoryUnavailable');
const blockCartUnavailable = document.querySelector('.blockCartUnavailable');


colorWhite.addEventListener('click', changeColorWhite);
colorBlack.addEventListener('click', changeColorBlack);
colorBlue.addEventListener('click', changeColorBlue);
colorYellow.addEventListener('click', changeColorYellow);
colorCoral.addEventListener('click', changeColorCoral);
colorRed.addEventListener('click', changeColorRed);


memory64Block.addEventListener('click', changeMemory64);
memory128Block.addEventListener('click', changeMemory128);






  function changeColorWhite() {

    defaultImage.style.display = 'none';
    iphoneXRWhite.style.display = 'block';
    iphoneXRBlack.style.display = 'none';
    iphoneXRBlue.style.display = 'none';
    iphoneXRYellow.style.display = 'none';
    iphoneXRCoral.style.display = 'none';
    iphoneXRRed.style.display = 'none';


    colorWhite.classList.add('modelActive');
    colorBlack.classList.remove('modelActive');
    colorBlue.classList.remove('modelActive');
    colorYellow.classList.remove('modelActive');
    colorCoral.classList.remove('modelActive');
    colorRed.classList.remove('modelActive');
    

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1';
  }

  function changeColorBlack() {

      defaultImage.style.display = 'none';
      iphoneXRWhite.style.display = 'none';
      iphoneXRBlack.style.display = 'block';
      iphoneXRBlue.style.display = 'none';
      iphoneXRYellow.style.display = 'none';
      iphoneXRCoral.style.display = 'none';
      iphoneXRRed.style.display = 'none';


      colorWhite.classList.remove('modelActive');
      colorBlack.classList.add('modelActive');
      colorBlue.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorCoral.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }



  function changeColorBlue() {

    defaultImage.style.display = 'none';
    iphoneXRWhite.style.display = 'none';
    iphoneXRBlack.style.display = 'none';
    iphoneXRBlue.style.display = 'block';
    iphoneXRYellow.style.display = 'none'
    iphoneXRCoral.style.display = 'none';
    iphoneXRRed.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorBlue.classList.add('modelActive');
      colorYellow.classList.remove('modelActive');
      colorCoral.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }

  function changeColorYellow() {

    defaultImage.style.display = 'none';
    iphoneXRWhite.style.display = 'none';
    iphoneXRBlack.style.display = 'none';
    iphoneXRBlue.style.display = 'none';
    iphoneXRYellow.style.display = 'block';
    iphoneXRCoral.style.display = 'none';
    iphoneXRRed.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorBlue.classList.remove('modelActive');
      colorYellow.classList.add('modelActive');
      colorCoral.classList.remove('modelActive');
      colorRed.classList.remove('modelActive');

      blockMemoryUnavailable.style.backgroundColor = 'inherit';
      blockMemoryUnavailable.style.opacity = '1';
  }


  function changeColorCoral() {

    defaultImage.style.display = 'none';
    iphoneXRWhite.style.display = 'none';
    iphoneXRBlack.style.display = 'none';
    iphoneXRBlue.style.display = 'none';
    iphoneXRYellow.style.display = 'none'
    iphoneXRCoral.style.display = 'block';
    iphoneXRRed.style.display = 'none';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorBlue.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorCoral.classList.add('modelActive');
      colorRed.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'
  }

  function changeColorRed() {

    defaultImage.style.display = 'none';
    iphoneXRWhite.style.display = 'none';
    iphoneXRBlack.style.display = 'none';
    iphoneXRBlue.style.display = 'none';
    iphoneXRYellow.style.display = 'none'
    iphoneXRCoral.style.display = 'none';
    iphoneXRRed.style.display = 'block';

      colorWhite.classList.remove('modelActive');
      colorBlack.classList.remove('modelActive');
      colorBlue.classList.remove('modelActive');
      colorYellow.classList.remove('modelActive');
      colorCoral.classList.remove('modelActive');
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

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphone.textContent = '49 990.00 руб';
      resultUnderOptions.textContent = '49 990.00 руб';
    
  }
  }

  function changeMemory128() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.remove('modelActive');
      memory128Block.classList.add('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphone.textContent = '64 990.00 руб';
      resultUnderOptions.textContent = '64 990.00 руб';
    
  }
  }


























/* Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile */






const defaultImageMobile = document.querySelector('.imgIphoneXRAllColorsMobile');
const iphoneXRWhiteMobile = document.querySelector('.imgIphoneXRWhiteMobile');
const iphoneXRBlackMobile = document.querySelector('.imgIphoneXRBlackMobile');
const iphoneXRBlueMobile = document.querySelector('.imgIphoneXRBlueMobile');
const iphoneXRYellowMobile = document.querySelector('.imgIphoneXRYellowMobile');
const iphoneXRCoralMobile = document.querySelector('.imgIphoneXRCoralMobile');
const iphoneXRRedMobile = document.querySelector('.imgIphoneXRRedMobile');


let priceUnderLabelBuyIphoneMobile = document.querySelector('.priceUnderLabelBuyIphoneMobile');
let resultUnderOptionsMobile = document.querySelector('.resultUnderOptionsMobile');

const labelPrice64gbMobile = document.querySelector('.price64gbMobile');
const labelPrice128gbMobile = document.querySelector('.price128gbMobile');

const colorWhiteMobile = document.querySelector('.colorWhiteMobile');
const colorBlackMobile = document.querySelector('.colorBlackMobile');
const colorBlueMobile = document.querySelector('.colorBlueMobile');
const colorYellowMobile = document.querySelector('.colorYellowMobile');
const colorCoralMobile = document.querySelector('.colorCoralMobile');
const colorRedMobile = document.querySelector('.colorRedMobile');

const memory64BlockMobile = document.querySelector('.memory64BlockMobile');
const memory128BlockMobile = document.querySelector('.memory128BlockMobile');

const blockMemoryUnavailableMobile = document.querySelector('.blockMemoryUnavailableMobile');
const blockCartUnavailableMobile = document.querySelector('.blockCartUnavailableMobile');


colorWhiteMobile.addEventListener('click', changeColorWhiteMobile);
colorBlackMobile.addEventListener('click', changeColorBlackMobile);
colorBlueMobile.addEventListener('click', changeColorBlueMobile);
colorYellowMobile.addEventListener('click', changeColorYellowMobile);
colorCoralMobile.addEventListener('click', changeColorCoralMobile);
colorRedMobile.addEventListener('click', changeColorRedMobile);

memory64BlockMobile.addEventListener('click', changeMemory64Mobile);
memory128BlockMobile.addEventListener('click', changeMemory128Mobile);






  function changeColorWhiteMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneXRWhiteMobile.style.display = 'block';
    iphoneXRBlackMobile.style.display = 'none';
    iphoneXRBlueMobile.style.display = 'none';
    iphoneXRYellowMobile.style.display = 'none';
    iphoneXRCoralMobile.style.display = 'none';
    iphoneXRRedMobile.style.display = 'none';

    colorWhiteMobile.classList.add('modelActiveMobile');
    colorBlackMobile.classList.remove('modelActiveMobile');
    colorBlueMobile.classList.remove('modelActiveMobile');
    colorYellowMobile.classList.remove('modelActiveMobile');
    colorCoralMobile.classList.remove('modelActiveMobile');
    colorRedMobile.classList.remove('modelActiveMobile');
    

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1';
  }

  function changeColorBlackMobile() {

      defaultImageMobile.style.display = 'none';
      iphoneXRWhiteMobile.style.display = 'none';
      iphoneXRBlackMobile.style.display = 'block';
      iphoneXRBlueMobile.style.display = 'none';
      iphoneXRYellowMobile.style.display = 'none';
      iphoneXRCoralMobile.style.display = 'none';
      iphoneXRRedMobile.style.display = 'none';


      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.add('modelActiveMobile');
      colorCoralMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorCoralMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }



  function changeColorBlueMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneXRWhiteMobile.style.display = 'none';
    iphoneXRBlackMobile.style.display = 'none';
    iphoneXRBlueMobile.style.display = 'block';
    iphoneXRYellowMobile.style.display = 'none';
    iphoneXRCoralMobile.style.display = 'none';
    iphoneXRRedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorBlueMobile.classList.add('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorCoralMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }

  function changeColorYellowMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneXRWhiteMobile.style.display = 'none';
    iphoneXRBlackMobile.style.display = 'none';
    iphoneXRBlueMobile.style.display = 'none';
    iphoneXRYellowMobile.style.display = 'block';
    iphoneXRCoralMobile.style.display = 'none';
    iphoneXRRedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorBlueMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.add('modelActiveMobile');
      colorCoralMobile.classList.remove('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

      blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
      blockMemoryUnavailableMobile.style.opacity = '1';
  }


  function changeColorCoralMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneXRWhiteMobile.style.display = 'none';
    iphoneXRBlackMobile.style.display = 'none';
    iphoneXRBlueMobile.style.display = 'none';
    iphoneXRYellowMobile.style.display = 'none';
    iphoneXRCoralMobile.style.display = 'block';
    iphoneXRRedMobile.style.display = 'none';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorBlueMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorCoralMobile.classList.add('modelActiveMobile');
      colorRedMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'
  }

  function changeColorRedMobile() {

    defaultImageMobile.style.display = 'none';
    iphoneXRWhiteMobile.style.display = 'none';
    iphoneXRBlackMobile.style.display = 'none';
    iphoneXRBlueMobile.style.display = 'none';
    iphoneXRYellowMobile.style.display = 'none';
    iphoneXRCoralMobile.style.display = 'none';
    iphoneXRRedMobile.style.display = 'block';

      colorWhiteMobile.classList.remove('modelActiveMobile');
      colorBlackMobile.classList.remove('modelActiveMobile');
      colorBlueMobile.classList.remove('modelActiveMobile');
      colorYellowMobile.classList.remove('modelActiveMobile');
      colorCoralMobile.classList.remove('modelActiveMobile');
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

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
      priceUnderLabelBuyIphoneMobile.textContent = '64 990.00 руб';
      resultUnderOptionsMobile.textContent = '64 990.00 руб';
    
  }
  }




  






  