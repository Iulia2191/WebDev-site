const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const commentInput = document.querySelector('#comment')
const nameError = document.querySelector('.name-message-error')
const emailError = document.querySelector('.email-message-error')
const form = document.querySelector('form')
const formResult = document.querySelector('.form-result')
const button = document.querySelector('button')

nameInput.addEventListener('change', function (event) {
  const value = nameInput.value
  if (value.length < 3) {
    nameError.innerHTML = 'Numele trebuie sa contina minim 3 caractere.'
  } else {
    nameError.innerHTML = ''
  }
})

emailInput.addEventListener('change', function (event) {
  const value = emailInput.value
  if (value.includes('@')) {
    emailError.innerText = ''
  } else {
    emailError.innerHTML = 'Email-ul trebuie sa contina @'
  }
})

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const nameValue = nameInput.value
  const emailValue = emailInput.value
  const commentValue = commentInput.value
  const nameIsValid = nameValue.length >= 3
  const emailIsValid = emailValue.includes('@')
  if (nameIsValid && emailIsValid) {
    formResult.innerHTML = `<p>Ati introdus numele ${nameValue} cu email-ul ${emailValue} si mesajul ${commentValue}.</p>`
  } else {
    formResult.innerHTML = '<p>Formularul contine erori de completare</p>'
  }
})
