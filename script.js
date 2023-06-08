let count = 150;
let count1 = 60;
let count2 = 26.67;

let heightel = document.getElementById('height-el');
let weightel = document.getElementById('weight-el');
let bmiel = document.getElementById('bmi-el');

function plus() {
  count = count + 1;
  heightel.innerHTML = count + 'cms';
  h = count / 100;
  h1 = h * h;
  bmi = count1 / h1;
  round = bmi.toFixed(2);
  bmiel.innerHTML = 'BMI:' + ' ' + round;
}

function minus() {
  count = count - 1;
  heightel.innerHTML = count + 'cms';
  h = count / 100;
  h1 = h * h;
  bmi = count1 / h1;
  round = bmi.toFixed(2);
  bmiel.innerHTML = 'BMI:' + ' ' + round;
}

function plus1() {
  count1 = count1 + 1;
  weightel.innerHTML = count1 + 'kgs';
  h = count / 100;
  h1 = h * h;
  bmi = count1 / h1;
  round = bmi.toFixed(2);
  bmiel.innerHTML = 'BMI:' + ' ' + round;
}

function minus1() {
  count1 = count1 - 1;
  weightel.innerHTML = count1 + 'kgs';
  h = count / 100;
  h1 = h * h;
  bmi = count1 / h1;
  round = bmi.toFixed(2);
  bmiel.innerHTML = 'BMI:' + ' ' + round;
}
