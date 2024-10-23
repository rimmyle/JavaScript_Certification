const check = document.getElementById('check-btn')
const input = document.getElementById('user-input')
const clear = document.getElementById('clear-btn')
const results = document.getElementById('results-div')

check.addEventListener('click', () => {
  if (!input.value) {
    alert('Please provide a phone number')
  }
  checkNumber(input.value)
})

clear.addEventListener('click', () => {
  results.textContent = ''
})

const checkNumber = (number) => {
  const matchRegex = /^1? ?(\([0-9]{3}\)|[0-9]{3}) ?[ -]?[0-9]{3}[ -]?[0-9]{4}$/
  if (matchRegex.test(number)) {
    results.textContent = 'Valid US number: ' + number
  } else {
    results.textContent = 'Invalid US number: ' + number
  }
}
