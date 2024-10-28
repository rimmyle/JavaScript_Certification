let price = 19.5;
let cid = [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
  ];

const cash = document.getElementById('cash')
const purchase = document.getElementById('purchase-btn')
const change = document.getElementById('change-due')


const enoughChange = () => {
  const total = 0
  cid.forEach((denomination) => {
    total += denomination[1]
  })
  return total >= (Number(cash.value) - price).toFixed(2)
}

function calculateChange() {
  let remaining = (Number(cash.value) - price).toFixed(2)
  let result = '';
  let total = 0
  cid.forEach((denomination) => {
    total += denomination[1]
  })
  
  if (total < remaining) {
      return 'INSUFFICIENT_FUNDS'
  }
  
  const convert = {
    'PENNY': .01,
    'NICKEL': .05,
    'DIME': .1,
    'QUARTER': .25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  }
  let allZero = true
  for (let i = cid.length - 1; i > -1; i--) {
    const denomination = convert[cid[i][0]]
    if (denomination <= remaining && cid[i][1] !== 0) {
      let amount = 0;
      while (convert[cid[i][0]] <= remaining && cid[i][1] !== 0) {
        cid[i][1] -= denomination
        remaining = (remaining - denomination).toFixed(2)
        amount += denomination
      }
      result += " " + cid[i][0] + ": $" + amount
    }
    if (cid[i][1] > 0) {
      allZero = false;
    }
  }
  if (remaining != 0.00) {
    return 'INSUFFICIENT_FUNDS'
  }
  if (allZero) {
    return 'CLOSED' + result
  }
  return 'OPEN' + result
}



purchase.addEventListener('click', () => {
  const amount = Number(cash.value)
  if (amount < price) {
    alert('Customer does not have enough money to purchase the item')
  } else if (amount === price) {
    change.textContent = 'No change due - customer paid with exact cash'
  } else {
    change.textContent = 'Status: ' + calculateChange()
  }
})
