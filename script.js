# LGMVIP-Task2
I have Created Simple Calculator Using HTML,CSS,JS
let expression = '';

function appendNumber(number) {
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  updateResult();
}

function updateResult() {
  document.getElementById('result').value = expression;
}
