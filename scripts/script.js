function swag() {
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

  console.log(document.documentElement.clientWidth);

  if ( document.documentElement.clientWidth <= 400 ) {
    typeit(' - Available for hire');
  } else typeit(' - Currently available for hire');

  document.querySelector('.blink').removeAttribute('onmouseover');
}
