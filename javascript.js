const numberLength = document.querySelector('.numberLength')
const unitFrom = document.querySelector('.unitFrom')
const unitTo = document.querySelector('.unitTo')
const resultP = document.querySelector('.result')
let result = ''


function convertLength(length, from, to) {
  length = Number(numberLength.value)
  from = unitFrom.value
  to = unitTo.value

  if (from === 'miles' && to === 'km') {
    result = ((length * 16) / 10) + ' km';
  } else if (from === 'km' && to === 'miles') {
    result = ((length / 16) * 10) + ' miles';
  } else if (from === 'km' && to === 'feet') {
    result = (length * 3281) + ' ft';
  } else if (from === 'miles' && to === 'feet') {
    result = (length * 5280) + ' ft';
  } else if (from === 'feet' && to === 'km') {
    result = (length / 3281) + ' km';
  } else if (from === 'feet' && to === 'miles') {
    result = (length / 5280) + ' miles';
  } else {
    resultP.innerHTML = 'Result = invalid units/length used'
    alert(`Invalid units/length \nPlease try again using valid units and length`);
    showResult();
  }
};


function showResult() {
  resultP.innerHTML = `Result = ${result}`
}