const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");
let inputString = input.value;

checkBtn.addEventListener("click", (e) => {
    let inputString = input.value;
    e.preventDefault()
    if (inputString === "") {
      alert("Please input a value");
    } else {
      let formatted = inputString.toLowerCase().replace(/[^a-z0-9]/g, "")
      let reversed = formatted.split('').reverse().join('')
      if (reversed === formatted) {
        result.innerText = `${inputString} is a palindrome`
      } else {
        result.innerText = `${inputString} is not a palindrome`
      }
    }
})
