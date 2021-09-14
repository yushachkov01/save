const saveButton = document.querySelector('.saveButton')
const message = document.querySelector('.message')

const arr = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr, arr2]
console.log(arr3);
saveButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const prepareInputData = [...document.forms[0].elements].map(input => [input.name, input.value]);
  const dataToSend = Object.fromEntries(prepareInputData)
  console.log(dataToSend);
  const res = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(dataToSend),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log('--------------------------------------->');  
  const result = await res.status;
  console.log(result);
  if(result == 200){
    message.innerText = 'Успех!'

    // creaae card
  }
  if(result == 500){
    message.innerText = 'Осечка!'
  }
})