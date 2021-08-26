const form = document.getElementById('form')
const bill = document.getElementById('bill')
const custom = document.getElementById('custom')
const people = document.getElementById('people')
const tipAmount = document.getElementById('tip-amount')
const total = document.getElementById('total')
let radioValue = ""

const showResult = (object) => {
  const {bill, tip, people} = object

  if(Object.values(object).every(e=>e > 0)){
    const tipTotal = (bill/100) * tip
    const tipEachPerson = tipTotal / people
    console.log(tipEachPerson);
    const totalEachPerson = (bill+tipTotal) / people
    console.log(totalEachPerson);
    tipAmount.textContent = `$${tipEachPerson.toPrecision(3)}`
    total.textContent = `$${totalEachPerson.toPrecision(3)}`
  }
}

form.addEventListener('input', (e)=> {
  form.reset.setAttribute("disabled", "true")

  const valuesToNumbers = {
    bill: "",
    tip: "",
    people: ""
  }

  //BILL
  if(bill.value !== ""){
    form.reset.removeAttribute("disabled")
    if(Number(bill.value) > 0){
      valuesToNumbers.bill = Number(bill.value)
    }
  }

  //RADIO
  if(e.target.type === "radio"){
    custom.value = ""
    form.reset.removeAttribute("disabled")
    radioValue = ""
    if(Number(form.tip.value) > 0){
      radioValue = Number(form.tip.value)
    }
  }
  if(e.target === custom){
    form.tip.forEach((ele)=> ele.checked = false)
    form.reset.removeAttribute("disabled")
    radioValue = ""
    if(Number(custom.value) > 0){
      radioValue = Number(custom.value)
    }
  }
  valuesToNumbers.tip = radioValue

  //PEOPLE
  if(people.value !== ""){
    form.reset.removeAttribute("disabled")
    if(Number(people.value) > 0){
      valuesToNumbers.people = Number(people.value)
    }
  }

  showResult(valuesToNumbers)
})

form.addEventListener('reset', ()=> {
  tipAmount.textContent = "$0.00"
  total.textContent = "$0.00"
})
