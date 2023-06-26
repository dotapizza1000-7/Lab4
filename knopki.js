const cashRadio = document.getElementById('payment-cash');
const cardRadio = document.getElementById('payment-card');
const submitButton = document.querySelector('.form__submit');

cashRadio.addEventListener('change', function () {
  if (this.checked) {
    submitButton.classList.add('active');
  } else {
    submitButton.classList.remove('active');
  }
});

cardRadio.addEventListener('change', function () {
  if (this.checked) {
    submitButton.classList.add('active');
  } else {
    submitButton.classList.remove('active');
  }
});
