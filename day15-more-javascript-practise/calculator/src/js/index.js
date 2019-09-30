// PLUS

let result = 0;

const handlePlusClick = () => {
  const textNumber = document.querySelector('#text-number');
  const number = parseInt(textNumber.value, 10);
  result += number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
};

// CLEAR FIELDS

const clearFields = () => {
    const textReset = document.querySelector('#text-result');
    textReset.innerHTML = 0;
    console.log('it works')

    const numberReset = document.querySelector('#text-number');
    numberReset.value = 0;
};

document.addEventListener('DOMContentLoaded', () => {
    const btnPlus = document.querySelector('#btn-plus');
    btnPlus.addEventListener('click', handlePlusClick);

    const btnClear = document.querySelector('#btn-clear');
    btnClear.addEventListener('click', clearFields);
});
