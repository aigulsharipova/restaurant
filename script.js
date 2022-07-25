const button = document.querySelector('#calcutale');
button.addEventListener('click', calculateAmount);

function calculateAmount(e) {
  e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people = document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;
if (bill === "" || people === "") {
  alert('Error')}

  //1 How many will pay 1 people
let amountPerPerson = bill/people;
let amountTip = (bill * tip) / people;
let totalSum = amountPerPerson + amountTip;
}