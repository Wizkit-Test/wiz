const texts = ['Think...', 'Write...', 'Draw...', 'Design...'];
let word = 0;
let letterIndex = 0;
let currentText = '';
let letter = '';

(function type() {

  if (word == texts.length) {
    word = 0;
  }

  currentText = texts[word];
  letter = currentText.slice(0, ++letterIndex);
  document.querySelector('#typing').textContent = letter;

  if (letter.length == currentText.length) {
    word++;
    letterIndex = 0;
  }

  setTimeout(type, 300);
})();
