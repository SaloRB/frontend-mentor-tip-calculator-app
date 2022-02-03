let tipValue = 5

const billElement = document.getElementById('bill')
const customTipElement = document.getElementById('custom')
const peopleElement = document.getElementById('people')
const amountElement = document.getElementById('amount')
const totalElement = document.getElementById('total')
const resetButtonElement = document.getElementById('reset')

const tipElements = document.querySelectorAll('input[name="tip"]')
const tipLabelElements = document.querySelectorAll('.tiplabel')
const fiveElement = document.getElementById('five')
const tenElement = document.getElementById('ten')
const fifteenElement = document.getElementById('fifteen')
const twentyfiveElement = document.getElementById('twentyfive')
const fiftyElement = document.getElementById('fifty')

fiveElement.checked = true

billElement.addEventListener('input', calculate)
customTipElement.addEventListener('input', calculate)
peopleElement.addEventListener('input', calculate)
resetButtonElement.addEventListener('click', reset)

tipLabelElements.forEach((tipLabelElement) => {
  tipLabelElement.addEventListener('click', (e) => {
    e.target.parentNode.firstElementChild.checked = true
    tipValue = e.target.parentNode.firstElementChild.value
    calculate()
  })
})

function reset() {
  billElement.value = ''
  fiveElement.checked = true
  customTipElement.value = ''
  peopleElement.value = ''
  amountElement.innerHTML = '0.00'
  totalElement.innerHTML = '0.00'
  resetButtonElement.disabled = true
}

function calculate() {
  if (billElement.value > 0 && peopleElement.value > 0) {
    resetButtonElement.disabled = false
    if (customTipElement.value > 0) {
      tipValue = customTipElement.value
    }
    const billValue = parseFloat(billElement.value)
    const peopleValue = parseFloat(peopleElement.value)

    const amountValue = ((billValue * (tipValue / 100)) / peopleValue).toFixed(
      2
    )
    const totalValue = (
      (billValue + billValue * (tipValue / 100)) /
      peopleValue
    ).toFixed(2)

    amountElement.innerHTML = amountValue
    totalElement.innerHTML = totalValue
  }
}
