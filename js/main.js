document.addEventListener("DOMContentLoaded", () => {
  const cardForm = document.getElementById('form')
  const errorMsg = document.getElementById('errormsg')
  const cardHolder = document.getElementById('card-holder')
  const cardNumber = document.getElementById('card-number')
  const expDateMonth = document.getElementById('exp-date')
  const expDateYear = document.getElementById('exp-date-y')
  const cvc = document.getElementById('cvc')
  const cardNumDisplay = document.getElementById('h2')
  const cardHolderDisplay = document.getElementById('p')
  const expDisplay = document.getElementById('p2')
  const cvcDisplay = document.getElementById('p3')
  
  cardNumber.addEventListener('input', (e) => {
    cardNumDisplay.textContent = e.target.value || '0000 0000 0000 0000'
  })
  cardHolder.addEventListener('input', (e) => {
    cardHolderDisplay.textContent = e.target.value || 'Jane Appleseed'
  })
  cvc.addEventListener('input', (e) => {
    cvcDisplay.textContent = e.target.value || '000'
  })
  
  expDateMonth.addEventListener("input", updateExp)
  expDateYear.addEventListener("input", updateExp)
  
  function updateExp() {
    const month = expDateMonth.value
    const year = expDateYear.value
    
    const year2 = year.slice(-2)
    expDisplay.textContent = `${month}/${year2}`
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((msg) => {
      msg.style.display = 'none';
        msg.remove();
    });
    
    const cardNumberInput = cardNumber.value.replace(/\D/g, '');
    
    if (!cardNumberInput || cardNumberInput.length !== 16) {
      displayErrorMessage(cardNumber, "Number can't be empty and must be 16 characters long");
      return;
    } else {
      displayErrorMessage(cardNumber, '')
    }
    
    const expVal = expDateYear.value;
    const expVal2 = expDateMonth.value;
    if (expVal2.length !== 2 || expVal.length > 4) {
      displayErrorMessage(expDateMonth, "Date must be in MM/YYYY format");
      return;
    }
    
      const cardCVCValue = cvc.value.replace(/\D/g, '');
      if (!cardCVCValue || cardCVCValue.length !== 3) {
        console.log('heee')
        displayErrorMessage(cvc, 'CVC must be 3 digits.');
        return;
     }
     
     
    alert('succcess')
    cardForm.reset();
    function displayErrorMessage(inputField, message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    inputField.parentNode.appendChild(errorMessage);
}
  })
  
})