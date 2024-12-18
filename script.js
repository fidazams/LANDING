const texts = [
    "Procrastination station!",
    "Turning coffee into code.",
    "Debugging is my cardio!",
    "Passion drives innovation.",
    "Building the future, one line at a time."
];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.getElementById("typing-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000); // Pause before next text
    } else {
      setTimeout(type, 100);
    }
  })();
  