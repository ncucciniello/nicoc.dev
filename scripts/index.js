// Function to write out message when blinking cursor is hovered.
function hireMe() {
  let text = "";
  let count = 0;
  let maxspeed = 250;

  function typeit(effect) {
    text = effect;
    type();
  }

  function character(start, end, text) {
    return text.substring(start, end);
  }

  function type() {
    let random = Math.floor(Math.random() * maxspeed);
    setTimeout(type, random);
    document.querySelector('.name').append(character(count, count+1, text));
    count++;
  }

  if ( document.documentElement.clientWidth <= 400 ) {
    typeit(' - Hire me');
  } else typeit(' - Currently available for hire');

  document.querySelector('.blink').removeAttribute('onmouseover');
}


// JavaScript for original single page site design with hideable project descriptions

//--------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {

//   items = document.querySelectorAll('.item');
//   for (i = 0; i< items.length; i++) {
//     // if ((document.querySelector('.item-container').left) < '500') {
//       items[i].addEventListener('click', showDiscripton);
//     // }
//   }

//   function showDiscripton() {
//     itemsContainer = document.querySelector('.item-container');
//     itemsContainer.classList.add('item-container-opened');
//     console.log(document.querySelector('.item-container').style.marginLeft);
//   }

//   //--------------------------------------------------------------------------------
//   document.querySelector('#project-name').addEventListener('click', () => {

//     function descriptionBackToDefult() {
//       document.querySelector('#project-name').innerHTML = 'Projects';
//       document.querySelector('.description').innerHTML = '';
//     }

//     function removeSelected() {
//       for (i = 0; i< items.length; i++) {
//         items[i].style.boxShadow = '';
//       }
//     }

//     backToNorm = setTimeout(descriptionBackToDefult, 1400);

//     backToNorm;
//     removeSelected();
//     document.querySelector('.item-container').classList.remove('item-container-opened');
//   });
//   //--------------------------------------------------------------------------------

//   document.querySelector('#mart').addEventListener('click', () => {
//     // document.querySelector('#mart').style.boxShadow = '0 0 .5rem rgba(255,255,255,1)';
//     document.querySelector('#project-name').innerHTML = 'Mart';
//     document.querySelector('.description').innerHTML = `MART description goes here`;
//     clearTimeout(backToNorm);
//   });

//   document.querySelector('#yoda').addEventListener('click', () => {
//     // document.querySelector('#yoda').style.boxShadow = '0 0 .5rem rgba(255,255,255,1)';
//     document.querySelector('#project-name').innerHTML = 'Yodafy';
//     document.querySelector('.description').innerHTML = `YODAFY description goes here.`;
//     clearTimeout(backToNorm);
//   });

//   document.querySelector('#playlist').addEventListener('click', () => {
//     // document.querySelector('#playlist').style.boxShadow = '0 0 .5rem rgba(255,255,255,1)';
//     document.querySelector('#project-name').innerHTML = 'Playlist';
//     document.querySelector('.description').innerHTML = `Playlist description goes here.`;
//     clearTimeout(backToNorm);
//   });

//   document.querySelector('#space').addEventListener('click', () => {
//     // document.querySelector('#space').style.boxShadow = '0 0 .5rem rgba(255,255,255,1)';
//     document.querySelector('#project-name').innerHTML = 'Space';
//     document.querySelector('.description').innerHTML = `Space description goes here.`;
//     clearTimeout(backToNorm);
//   });

// });
