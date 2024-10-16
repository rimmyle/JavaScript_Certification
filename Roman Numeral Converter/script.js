const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById('number')
const output = document.getElementById('output')

const romanObj = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
}

function convertToRoman(value) {
  let result = ''
  Object.keys(romanObj).reverse().forEach((number) => {
    while(value >= number) {
      result += romanObj[number]
      value -= number
    }
  })
  return result
}


convertBtn.addEventListener('click', () => {
  if (isNaN(parseInt(number.value))) {
    output.textContent = 'Please enter a valid number'
  } else if (parseInt(number.value) < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1'
  } else if (parseInt(number.value) >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999'
  } else {
    output.textContent = convertToRoman(parseInt(number.value))
  }
})