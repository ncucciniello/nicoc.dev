function swag() {
  // Type Effect
  let text = "";
  let count = 0;
  let maxspeed = 125;

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

  typeit(' - Available for hire');
  document.querySelector('.blink').removeAttribute('onmouseover');
}
