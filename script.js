const button = document.querySelector('#calcutale');
button.addEventListener('click', calculateAmount);

function calculateAmount(e) {
  e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people = document.querySelector('#tip').value;
if (bill === "" || people === "") {
  alert('Error')}

}