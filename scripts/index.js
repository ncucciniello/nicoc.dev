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

// function showDiscripton() {
//   $itemContainer = document.querySelector('.item-container');
//   $itemContainer.classList.toggle('moved');
// }


//--------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

  $button = document.querySelectorAll('.item');
  for (i = 0; i< $button.length; i++) {
    $button[i].addEventListener('click', showDiscripton);
  }

  function showDiscripton() {
    $itemContainer = document.querySelector('.item-container');
    $itemContainer.classList.toggle('item-container-opened');
  }

  document.querySelector('#mart').addEventListener('click', () => {
    document.querySelector('.mart-disc').classList.toggle('hide');
    document.querySelector('.close-button').classList.toggle('hide')
  });

  document.querySelector('#yoda').addEventListener('click', () => {
    document.querySelector('.yoda-disc').classList.toggle('hide')
  });

  document.querySelector('#playlist').addEventListener('click', () => {
    document.querySelector('.playlist-disc').classList.toggle('hide')
  });

  document.querySelector('#space').addEventListener('click', () => {
    document.querySelector('.space-disc').classList.toggle('hide')
  });

});
