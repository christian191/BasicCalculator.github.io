const display = document.getElementById('display');

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = math.evaluate(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Allow Enter key to calculate
display.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  }
});
