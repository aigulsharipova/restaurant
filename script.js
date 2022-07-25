const button = document.querySelector('#calcutale');
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
  e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people = document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;

if (bill === "" || people === "") {
  alert('Error')};

let amountPerPerson = bill / people;
let tipPerPerson = (bill * tip) / people;
let totalSum = amountPerPerson + amountTip;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector('#dividedBill').textContent = amountPerPerson;
document.querySelector('#ddividedTip').textContent = tipPerPerson;
document.querySelector('#billAndTip').textContent = totalSum ;
}