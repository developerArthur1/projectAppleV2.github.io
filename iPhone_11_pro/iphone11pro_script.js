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


const popUpBlock = document.querySelector('.pop-up-block');
const popUpBlockLabel = document.querySelector('.pop-up-block__label');

const popUpBlockMobile = document.querySelector('.pop-up-block-mobile');
const popUpBlockLabelMobile = document.querySelector('.pop-up-block-mobile__label');

window.addEventListener("load", () => {
  setTimeout(() => {popUpBlock.classList.add("active5")}, 600);
  popUpChangeColor();
  function popUpChangeColor () {setTimeout(() => {popUpBlock.style.backgroundColor = '#f2f2f2'; popUpBlockLabel.style.color = '#333333'}, 2000)}

  setTimeout(() => {popUpBlockMobile.classList.add("activeMobile")}, 600);
  popUpChangeColorMobile();
  function popUpChangeColorMobile () {setTimeout(() => {popUpBlockMobile.style.backgroundColor = '#f2f2f2'; popUpBlockLabelMobile.style.color = '#333333'}, 2000)};

})











const modelIphone11pro = document.querySelector('.iphone11pro-options__model-pro');
const modelIphone11proMax = document.querySelector('.iphone11pro-options__model-pro-max');

const defaultImage = document.querySelector('.iphone11pro__default');
const iphone11ProAllColors = document.querySelector('.iphone11pro__all-colors');
const iphone11ProMaxAllColors = document.querySelector('.iphone11promax__all-colors');

const iphone11ProSpaceGrey = document.querySelector('.iphone11pro__space-grey');
const iphone11ProSilver = document.querySelector('.iphone11pro__silver');
const iphone11ProGreen = document.querySelector('.iphone11pro__green');
const iphone11ProGold = document.querySelector('.iphone11pro__gold');

const iphone11ProMaxSpaceGrey = document.querySelector('.iphone11promax__space-grey');
const iphone11ProMaxSilver = document.querySelector('.iphone11promax__silver');
const iphone11ProMaxGreen = document.querySelector('.iphone11promax__green');
const iphone11ProMaxGold = document.querySelector('.iphone11promax__gold');

let priceUnderLabelBuyIphone = document.querySelector('.iphone11pro-options__price');
let resultUnderOptions = document.querySelector('.iphone11pro-options__cart-price');

const labelPrice64gb = document.querySelector('.price64gb');
const labelPrice256gb = document.querySelector('.price256gb');
const labelPrice512gb = document.querySelector('.price512gb');

const colorSpaceGrey = document.querySelector('.colorSpaceGrey');
const colorSilver = document.querySelector('.colorSilver');
const colorGreen = document.querySelector('.colorGreen');
const colorGold = document.querySelector('.colorGold');

const memory64Block = document.querySelector('.memory64Block');
const memory256Block = document.querySelector('.memory256Block');
const memory512Block = document.querySelector('.memory512Block');

const blockColorUnavailable = document.querySelector('.block-color-unavailable');
const blockMemoryUnavailable = document.querySelector('.block-memory-unavailable');
const blockCartUnavailable = document.querySelector('.block-cart-unavailable');

modelIphone11pro.addEventListener('click', modelProActive);
modelIphone11proMax.addEventListener('click', modelProMaxActive);

colorSpaceGrey.addEventListener('click', changeColorSpaceGrey);
colorSilver.addEventListener('click', changeColorSilver);
colorGreen.addEventListener('click', changeColorGreen);
colorGold.addEventListener('click', changeColorGold);


memory64Block.addEventListener('click', changeMemory64);
memory256Block.addEventListener('click', changeMemory256);
memory512Block.addEventListener('click', changeMemory512);

function modelProActive() {
  blockColorUnavailable.style.backgroundColor = 'inherit';
  blockColorUnavailable.style.opacity = '1';
  blockColorUnavailable.style.width = 'inherit';

  modelIphone11proMax.classList.remove('modelActive');
  modelIphone11pro.classList.add('modelActive'); 
  
  if((colorSpaceGrey.classList.contains('modelActive')))
  {
    defaultImage.style.display = 'none';
    iphone11ProAllColors.style.display = 'none';
    iphone11ProMaxAllColors.style.display = 'none';

    iphone11ProAllColors.style.display = 'none'
    iphone11ProSpaceGrey.style.display = 'block';
    iphone11ProSilver.style.display = 'none';
    iphone11ProGreen.style.display = 'none';
    iphone11ProGold.style.display = 'none';

    iphone11ProMaxAllColors.style.display = 'none';
    iphone11ProMaxSpaceGrey.style.display = 'none';
    iphone11ProMaxSilver.style.display = 'none';
    iphone11ProMaxGreen.style.display = 'none';
    iphone11ProMaxGold.style.display = 'none';
  }
  else if ((colorSilver.classList.contains('modelActive')))
  {
    defaultImage.style.display = 'none';
    iphone11ProAllColors.style.display = 'none';
    iphone11ProMaxAllColors.style.display = 'none';

    iphone11ProAllColors.style.display = 'none'
    iphone11ProSpaceGrey.style.display = 'none';
    iphone11ProSilver.style.display = 'block';
    iphone11ProGreen.style.display = 'none';
    iphone11ProGold.style.display = 'none';

    iphone11ProMaxAllColors.style.display = 'none';
    iphone11ProMaxSpaceGrey.style.display = 'none';
    iphone11ProMaxSilver.style.display = 'none';
    iphone11ProMaxGreen.style.display = 'none';
    iphone11ProMaxGold.style.display = 'none';
  }
  else if ((colorGreen.classList.contains('modelActive')))
  {
    defaultImage.style.display = 'none';
    iphone11ProAllColors.style.display = 'none';
    iphone11ProMaxAllColors.style.display = 'none';

    iphone11ProAllColors.style.display = 'none'
    iphone11ProSpaceGrey.style.display = 'none';
    iphone11ProSilver.style.display = 'none';
    iphone11ProGreen.style.display = 'block';
    iphone11ProGold.style.display = 'none';

    iphone11ProMaxAllColors.style.display = 'none';
    iphone11ProMaxSpaceGrey.style.display = 'none';
    iphone11ProMaxSilver.style.display = 'none';
    iphone11ProMaxGreen.style.display = 'none';
    iphone11ProMaxGold.style.display = 'none';
  }
  else if ((colorGold.classList.contains('modelActive')))
  {
    defaultImage.style.display = 'none';
    iphone11ProAllColors.style.display = 'none';
    iphone11ProMaxAllColors.style.display = 'none';

    iphone11ProAllColors.style.display = 'none'
    iphone11ProSpaceGrey.style.display = 'none';
    iphone11ProSilver.style.display = 'none';
    iphone11ProGreen.style.display = 'none';
    iphone11ProGold.style.display = 'block';

    iphone11ProMaxAllColors.style.display = 'none';
    iphone11ProMaxSpaceGrey.style.display = 'none';
    iphone11ProMaxSilver.style.display = 'none';
    iphone11ProMaxGreen.style.display = 'none';
    iphone11ProMaxGold.style.display = 'none';
  }
  else
  {
    defaultImage.style.display = 'none';
    iphone11ProAllColors.style.display = 'block';
    iphone11ProMaxAllColors.style.display = 'none';
  }
  

if(memory64Block.classList.contains('modelActive'))
{
  priceUnderLabelBuyIphone.textContent = '89 990.00 руб';
  resultUnderOptions.textContent = '89 990.00 руб';
}
else if(memory256Block.classList.contains('modelActive'))
{
  priceUnderLabelBuyIphone.textContent = '103 990.00 руб';
  resultUnderOptions.textContent = '103 990.00 руб';
}
else if(memory512Block.classList.contains('modelActive'))
{
  priceUnderLabelBuyIphone.textContent = '121 990.00 руб';
  resultUnderOptions.textContent = '121 990.00 руб';
}
else
{
  priceUnderLabelBuyIphone.textContent = '89 990.00 руб';
  resultUnderOptions.textContent = '89 990.00 руб';
}

  labelPrice64gb.textContent = '89 990.00 руб';
  labelPrice256gb.textContent = '103 990.00 руб';
  labelPrice512gb.textContent = '121 990.00 руб';
}





  function modelProMaxActive() {
    modelIphone11pro.classList.remove('modelActive');
    modelIphone11proMax.classList.add('modelActive');

    blockColorUnavailable.style.backgroundColor = 'inherit';
    blockColorUnavailable.style.opacity = '1';
    

    if((colorSpaceGrey.classList.contains('modelActive')))
    {
      defaultImage.style.display = 'none';
      iphone11ProAllColors.style.display = 'none';
      iphone11ProMaxAllColors.style.display = 'none';

      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'block';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if ((colorSilver.classList.contains('modelActive')))
    {
      defaultImage.style.display = 'none';
      iphone11ProAllColors.style.display = 'none';
      iphone11ProMaxAllColors.style.display = 'none';

      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'block';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if ((colorGreen.classList.contains('modelActive')))
    {
      defaultImage.style.display = 'none';
      iphone11ProAllColors.style.display = 'none';
      iphone11ProMaxAllColors.style.display = 'none';

      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'block';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if ((colorGold.classList.contains('modelActive')))
    {
      defaultImage.style.display = 'none';
      iphone11ProAllColors.style.display = 'none';
      iphone11ProMaxAllColors.style.display = 'none';

      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'block';
    }
    else
    {
      defaultImage.style.display = 'none';
      iphone11ProMaxAllColors.style.display = 'block';
      iphone11ProAllColors.style.display = 'none';
    }



    if(memory64Block.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '99 990.00 руб';
      resultUnderOptions.textContent = '99 990.00 руб';
    }
    else if(memory256Block.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '113 990.00 руб';
      resultUnderOptions.textContent = '113 990.00 руб';
    }
    else if(memory512Block.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '131 990.00 руб';
      resultUnderOptions.textContent = '131 990.00 руб';
    }
    else
    {
      priceUnderLabelBuyIphone.textContent = '99 990.00 руб';
      resultUnderOptions.textContent = '99 990.00 руб';
    }

    labelPrice64gb.textContent = '99 990.00 руб';
    labelPrice256gb.textContent = '113 990.00 руб';
    labelPrice512gb.textContent = '131 990.00 руб';
  }




  function changeColorSpaceGrey() {
    if(blockColorUnavailable.style.opacity == '1')
    {
    colorSpaceGrey.classList.add('modelActive');
    colorSilver.classList.remove('modelActive');
    colorGreen.classList.remove('modelActive');
    colorGold.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1';

    if(modelIphone11pro.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'block';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'block';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
  }
  }

  function changeColorSilver() {
    if(blockColorUnavailable.style.opacity == '1')
    {
    colorSpaceGrey.classList.remove('modelActive');
    colorSilver.classList.add('modelActive');
    colorGreen.classList.remove('modelActive');
    colorGold.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'

    if(modelIphone11pro.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'block';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'block';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
  }
  }

  function changeColorGreen() {
    if(blockColorUnavailable.style.opacity == '1')
    {
    colorSpaceGrey.classList.remove('modelActive');
    colorSilver.classList.remove('modelActive');
    colorGreen.classList.add('modelActive');
    colorGold.classList.remove('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'

    if(modelIphone11pro.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'block';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'block';
      iphone11ProMaxGold.style.display = 'none';
    }
  }
  }

  function changeColorGold() {
    if(blockColorUnavailable.style.opacity == '1')
    {
    colorSpaceGrey.classList.remove('modelActive');
    colorSilver.classList.remove('modelActive');
    colorGreen.classList.remove('modelActive');
    colorGold.classList.add('modelActive');

    blockMemoryUnavailable.style.backgroundColor = 'inherit';
    blockMemoryUnavailable.style.opacity = '1'

    if(modelIphone11pro.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'block';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'none';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      iphone11ProAllColors.style.display = 'none'
      iphone11ProSpaceGrey.style.display = 'none';
      iphone11ProSilver.style.display = 'none';
      iphone11ProGreen.style.display = 'none';
      iphone11ProGold.style.display = 'none';

      iphone11ProMaxAllColors.style.display = 'none';
      iphone11ProMaxSpaceGrey.style.display = 'none';
      iphone11ProMaxSilver.style.display = 'none';
      iphone11ProMaxGreen.style.display = 'none';
      iphone11ProMaxGold.style.display = 'block';
    }
    }
  }


  function changeMemory64() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.add('modelActive');
      memory256Block.classList.remove('modelActive');
      memory512Block.classList.remove('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
    if(modelIphone11pro.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '89 990.00 руб';
      resultUnderOptions.textContent = '89 990.00 руб';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '99 990.00 руб';
      resultUnderOptions.textContent = '99 990.00 руб';
    }
  }
  }

  function changeMemory256() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.remove('modelActive');
      memory256Block.classList.add('modelActive');
      memory512Block.classList.remove('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
    if(modelIphone11pro.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '103 990.00 руб';
      resultUnderOptions.textContent = '103 990.00 руб';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '113 990.00 руб';
      resultUnderOptions.textContent = '113 990.00 руб';
    }
  }
  }

  function changeMemory512() 
  {
    if(blockMemoryUnavailable.style.opacity == '1')
    {
      memory64Block.classList.remove('modelActive');
      memory256Block.classList.remove('modelActive');
      memory512Block.classList.add('modelActive');

      blockCartUnavailable.style.opacity = '1';
      blockCartUnavailable.style.backgroundColor = 'inherit';
      
    if(modelIphone11pro.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '121 990.00 руб';
      resultUnderOptions.textContent = '121 990.00 руб';
    }
    else if(modelIphone11proMax.classList.contains('modelActive'))
    {
      priceUnderLabelBuyIphone.textContent = '131 990.00 руб';
      resultUnderOptions.textContent = '131 990.00 руб';
    }
  }
  }






/* Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile Mobile */




const modelIphone11proMobile = document.querySelector('.selectModelProMobile');
const modelIphone11proMaxMobile = document.querySelector('.selectModelProMaxMobile');

const defaultImageMobile = document.querySelector('.imgIphone11ProMaxAndPro_defaultMobile');
const iphone11ProAllColorsMobile = document.querySelector('.imgIphone11ProAllColorsMobile');
const iphone11ProMaxAllColorsMobile = document.querySelector('.imgIphone11ProMaxAllColorsMobile');

const iphone11ProSpaceGreyMobile = document.querySelector('.imgIphone11ProSpaceGreyMobile');
const iphone11ProSilverMobile = document.querySelector('.imgIphone11ProSilverMobile');
const iphone11ProGreenMobile = document.querySelector('.imgIphone11ProGreenMobile');
const iphone11ProGoldMobile = document.querySelector('.imgIphone11ProGoldMobile');

const iphone11ProMaxSpaceGreyMobile = document.querySelector('.imgIphone11ProMaxSpaceGreyMobile');
const iphone11ProMaxSilverMobile = document.querySelector('.imgIphone11ProMaxSilverMobile');
const iphone11ProMaxGreenMobile = document.querySelector('.imgIphone11ProMaxGreenMobile');
const iphone11ProMaxGoldMobile = document.querySelector('.imgIphone11ProMaxGoldMobile');

let priceUnderLabelBuyIphoneMobile = document.querySelector('.iphone11pro-mobile-options__price');
let resultUnderOptionsMobile = document.querySelector('.resultUnderOptionsMobile');

const labelPrice64gbMobile = document.querySelector('.price64gbMobile');
const labelPrice256gbMobile = document.querySelector('.price256gbMobile');
const labelPrice512gbMobile = document.querySelector('.price512gbMobile');

const colorSpaceGreyMobile = document.querySelector('.colorSpaceGreyMobile');
const colorSilverMobile = document.querySelector('.colorSilverMobile');
const colorGreenMobile = document.querySelector('.colorGreenMobile');
const colorGoldMobile = document.querySelector('.colorGoldMobile');

const memory64BlockMobile = document.querySelector('.memory64BlockMobile');
const memory256BlockMobile = document.querySelector('.memory256BlockMobile');
const memory512BlockMobile = document.querySelector('.memory512BlockMobile');

const blockColorUnavailableMobile = document.querySelector('.blockColorUnavailableMobile');
const blockMemoryUnavailableMobile = document.querySelector('.blockMemoryUnavailableMobile');
const blockCartUnavailableMobile = document.querySelector('.blockCartUnavailableMobile');

modelIphone11proMobile.addEventListener('click', modelProActiveMobile);
modelIphone11proMaxMobile.addEventListener('click', modelProMaxActiveMobile);

colorSpaceGreyMobile.addEventListener('click', changeColorSpaceGreyMobile);
colorSilverMobile.addEventListener('click', changeColorSilverMobile);
colorGreenMobile.addEventListener('click', changeColorGreenMobile);
colorGoldMobile.addEventListener('click', changeColorGoldMobile);


memory64BlockMobile.addEventListener('click', changeMemory64Mobile);
memory256BlockMobile.addEventListener('click', changeMemory256Mobile);
memory512BlockMobile.addEventListener('click', changeMemory512Mobile);

function modelProActiveMobile() {
  blockColorUnavailableMobile.style.backgroundColor = 'inherit';
  blockColorUnavailableMobile.style.opacity = '1';
  blockColorUnavailableMobile.style.width = 'inherit';

  modelIphone11proMaxMobile.classList.remove('modelActiveMobile');
  modelIphone11proMobile.classList.add('modelActiveMobile'); 
  
  if((colorSpaceGreyMobile.classList.contains('modelActiveMobile')))
  {
    defaultImageMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'none';
    iphone11ProMaxAllColorsMobile.style.display = 'none';

    iphone11ProAllColorsMobile.style.display = 'none'
    iphone11ProSpaceGreyMobile.style.display = 'block';
    iphone11ProSilverMobile.style.display = 'none';
    iphone11ProGreenMobile.style.display = 'none';
    iphone11ProGoldMobile.style.display = 'none';

    iphone11ProMaxAllColorsMobile.style.display = 'none';
    iphone11ProMaxSpaceGreyMobile.style.display = 'none';
    iphone11ProMaxSilverMobile.style.display = 'none';
    iphone11ProMaxGreenMobile.style.display = 'none';
    iphone11ProMaxGoldMobile.style.display = 'none';
  }
  else if ((colorSilverMobile.classList.contains('modelActiveMobile')))
  {
    defaultImageMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'none';
    iphone11ProMaxAllColorsMobile.style.display = 'none';

    iphone11ProAllColorsMobile.style.display = 'none'
    iphone11ProSpaceGreyMobile.style.display = 'none';
    iphone11ProSilverMobile.style.display = 'block';
    iphone11ProGreenMobile.style.display = 'none';
    iphone11ProGoldMobile.style.display = 'none';

    iphone11ProMaxAllColorsMobile.style.display = 'none';
    iphone11ProMaxSpaceGreyMobile.style.display = 'none';
    iphone11ProMaxSilverMobile.style.display = 'none';
    iphone11ProMaxGreenMobile.style.display = 'none';
    iphone11ProMaxGoldMobile.style.display = 'none';
  }
  else if ((colorGreenMobile.classList.contains('modelActiveMobile')))
  {
    defaultImageMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'none';
    iphone11ProMaxAllColorsMobile.style.display = 'none';

    iphone11ProAllColorsMobile.style.display = 'none';
    iphone11ProSpaceGreyMobile.style.display = 'none';
    iphone11ProSilverMobile.style.display = 'none';
    iphone11ProGreenMobile.style.display = 'block';
    iphone11ProGoldMobile.style.display = 'none';

    iphone11ProMaxAllColorsMobile.style.display = 'none';
    iphone11ProMaxSpaceGreyMobile.style.display = 'none';
    iphone11ProMaxSilverMobile.style.display = 'none';
    iphone11ProMaxGreenMobile.style.display = 'none';
    iphone11ProMaxGoldMobile.style.display = 'none';
  }
  else if ((colorGoldMobile.classList.contains('modelActiveMobile')))
  {
    defaultImageMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'none';
    iphone11ProMaxAllColorsMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'none'
    iphone11ProSpaceGreyMobile.style.display = 'none';
    iphone11ProSilverMobile.style.display = 'none';
    iphone11ProGreenMobile.style.display = 'none';
    iphone11ProGoldMobile.style.display = 'block';

    iphone11ProMaxAllColorsMobile.style.display = 'none';
    iphone11ProMaxSpaceGreyMobile.style.display = 'none';
    iphone11ProMaxSilverMobile.style.display = 'none';
    iphone11ProMaxGreenMobile.style.display = 'none';
    iphone11ProMaxGoldMobile.style.display = 'none';
  }
  else
  {
    defaultImageMobile.style.display = 'none';
    iphone11ProAllColorsMobile.style.display = 'block';
    iphone11ProMaxAllColorsMobile.style.display = 'none';
  }
  

if(memory64BlockMobile.classList.contains('modelActiveMobile'))
{
  priceUnderLabelBuyIphoneMobile.textContent = '89 990.00 руб';
  resultUnderOptionsMobile.textContent = '89 990.00 руб';
}
else if(memory256BlockMobile.classList.contains('modelActiveMobile'))
{
  priceUnderLabelBuyIphoneMobile.textContent = '103 990.00 руб';
  resultUnderOptionsMobile.textContent = '103 990.00 руб';
}
else if(memory512BlockMobile.classList.contains('modelActiveMobile'))
{
  priceUnderLabelBuyIphoneMobile.textContent = '121 990.00 руб';
  resultUnderOptionsMobile.textContent = '121 990.00 руб';
}
else
{
  priceUnderLabelBuyIphoneMobile.textContent = '89 990.00 руб';
  resultUnderOptionsMobile.textContent = '89 990.00 руб';
}

  labelPrice64gbMobile.textContent = '89 990.00 руб';
  labelPrice256gbMobile.textContent = '103 990.00 руб';
  labelPrice512gbMobile.textContent = '121 990.00 руб';
}





  function modelProMaxActiveMobile() {
    modelIphone11proMobile.classList.remove('modelActiveMobile');
    modelIphone11proMaxMobile.classList.add('modelActiveMobile');

    blockColorUnavailableMobile.style.backgroundColor = 'inherit';
    blockColorUnavailableMobile.style.opacity = '1';
    

    if((colorSpaceGreyMobile.classList.contains('modelActiveMobile')))
    {
      defaultImageMobile.style.display = 'none';
      iphone11ProAllColorsMobile.style.display = 'none';
      iphone11ProMaxAllColorsMobile.style.display = 'none';

      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'block';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if ((colorSilverMobile.classList.contains('modelActiveMobile')))
    {
      defaultImageMobile.style.display = 'none';
      iphone11ProAllColorsMobile.style.display = 'none';
      iphone11ProMaxAllColorsMobile.style.display = 'none';

      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'block';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if ((colorGreenMobile.classList.contains('modelActiveMobile')))
    {
      defaultImageMobile.style.display = 'none';
      iphone11ProAllColorsMobile.style.display = 'none';
      iphone11ProMaxAllColorsMobile.style.display = 'none';

      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'block';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if ((colorGoldMobile.classList.contains('modelActiveMobile')))
    {
      defaultImageMobile.style.display = 'none';
      iphone11ProAllColorsMobile.style.display = 'none';
      iphone11ProMaxAllColorsMobile.style.display = 'none';

      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'block';
    }
    else
    {
      defaultImageMobile.style.display = 'none';
      iphone11ProMaxAllColorsMobile.style.display = 'block';
      iphone11ProAllColorsMobile.style.display = 'none';
    }



    if(memory64BlockMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '99 990.00 руб';
      resultUnderOptionsMobile.textContent = '99 990.00 руб';
    }
    else if(memory256BlockMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '113 990.00 руб';
      resultUnderOptionsMobile.textContent = '113 990.00 руб';
    }
    else if(memory512BlockMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '131 990.00 руб';
      resultUnderOptionsMobile.textContent = '131 990.00 руб';
    }
    else
    {
      priceUnderLabelBuyIphoneMobile.textContent = '99 990.00 руб';
      resultUnderOptionsMobile.textContent = '99 990.00 руб';
    }

    labelPrice64gbMobile.textContent = '99 990.00 руб';
    labelPrice256gbMobile.textContent = '113 990.00 руб';
    labelPrice512gbMobile.textContent = '131 990.00 руб';
  }




  function changeColorSpaceGreyMobile() {
    if(blockColorUnavailableMobile.style.opacity == '1')
    {
    colorSpaceGreyMobile.classList.add('modelActiveMobile');
    colorSilverMobile.classList.remove('modelActiveMobile');
    colorGreenMobile.classList.remove('modelActiveMobile');
    colorGoldMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1';

    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'block';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'block';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
  }
  }

  function changeColorSilverMobile() {
    if(blockColorUnavailableMobile.style.opacity == '1')
    {
    colorSpaceGreyMobile.classList.remove('modelActiveMobile');
    colorSilverMobile.classList.add('modelActiveMobile');
    colorGreenMobile.classList.remove('modelActiveMobile');
    colorGoldMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'

    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'block';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'block';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
  }
  }

  function changeColorGreenMobile() {
    if(blockColorUnavailableMobile.style.opacity == '1')
    {
    colorSpaceGreyMobile.classList.remove('modelActiveMobile');
    colorSilverMobile.classList.remove('modelActiveMobile');
    colorGreenMobile.classList.add('modelActiveMobile');
    colorGoldMobile.classList.remove('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'

    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'block';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'block';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
  }
  }

  function changeColorGoldMobile() {
    if(blockColorUnavailableMobile.style.opacity == '1')
    {
    colorSpaceGreyMobile.classList.remove('modelActiveMobile');
    colorSilverMobile.classList.remove('modelActiveMobile');
    colorGreenMobile.classList.remove('modelActiveMobile');
    colorGoldMobile.classList.add('modelActiveMobile');

    blockMemoryUnavailableMobile.style.backgroundColor = 'inherit';
    blockMemoryUnavailableMobile.style.opacity = '1'

    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'block';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'none';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      iphone11ProAllColorsMobile.style.display = 'none'
      iphone11ProSpaceGreyMobile.style.display = 'none';
      iphone11ProSilverMobile.style.display = 'none';
      iphone11ProGreenMobile.style.display = 'none';
      iphone11ProGoldMobile.style.display = 'none';

      iphone11ProMaxAllColorsMobile.style.display = 'none';
      iphone11ProMaxSpaceGreyMobile.style.display = 'none';
      iphone11ProMaxSilverMobile.style.display = 'none';
      iphone11ProMaxGreenMobile.style.display = 'none';
      iphone11ProMaxGoldMobile.style.display = 'block';
    }
    }
  }


  function changeMemory64Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.add('modelActiveMobile');
      memory256BlockMobile.classList.remove('modelActiveMobile');
      memory512BlockMobile.classList.remove('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '89 990.00 руб';
      resultUnderOptionsMobile.textContent = '89 990.00 руб';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '99 990.00 руб';
      resultUnderOptionsMobile.textContent = '99 990.00 руб';
    }
  }
  }

  function changeMemory256Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.remove('modelActiveMobile');
      memory256BlockMobile.classList.add('modelActiveMobile');
      memory512BlockMobile.classList.remove('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '103 990.00 руб';
      resultUnderOptionsMobile.textContent = '103 990.00 руб';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '113 990.00 руб';
      resultUnderOptionsMobile.textContent = '113 990.00 руб';
    }
  }
  }

  function changeMemory512Mobile() 
  {
    if(blockMemoryUnavailableMobile.style.opacity == '1')
    {
      memory64BlockMobile.classList.remove('modelActiveMobile');
      memory256BlockMobile.classList.remove('modelActiveMobile');
      memory512BlockMobile.classList.add('modelActiveMobile');

      blockCartUnavailableMobile.style.opacity = '1';
      blockCartUnavailableMobile.style.backgroundColor = 'inherit';
      
    if(modelIphone11proMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '121 990.00 руб';
      resultUnderOptionsMobile.textContent = '121 990.00 руб';
    }
    else if(modelIphone11proMaxMobile.classList.contains('modelActiveMobile'))
    {
      priceUnderLabelBuyIphoneMobile.textContent = '131 990.00 руб';
      resultUnderOptionsMobile.textContent = '131 990.00 руб';
    }
  }
  }

  






  