const form = document.getElementById('form')
const bill = document.getElementById('bill')
const custom = document.getElementById('custom')
const people = document.getElementById('people')

const showResult = (object) => {
  console.table(object);
}

form.addEventListener('input', (e)=> {
  const valuesToNumbers = {
    bill: "",
    tip: "",
    people: ""
  }

  form.reset.removeAttribute("disabled")

  //BILL
  if(bill.value && Number(bill.value) > 0){
    valuesToNumbers.bill = Number(bill.value)
  }

  //RADIO
  if(e.target.type === "radio"){
    custom.value = ""
  }
  if(form.tip.value && Number(form.tip.value) > 0){
    valuesToNumbers.tip = Number(form.tip.value)
  }
  if(custom.value && Number(custom.value) > 0){
    form.tip.forEach((ele)=> ele.checked = false)
    valuesToNumbers.tip = Number(custom.value)
  }

  //PEOPLE
  if(people.value && Number(people.value) > 0){
    valuesToNumbers.people = Number(people.value)
  }

  showResult(valuesToNumbers)
})

form.addEventListener('click', (e)=> {
  if(e.target === form.reset) form.reset.setAttribute("disabled", "true")
})
