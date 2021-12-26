const isEmpty = (firstname, lastname, email) => {
  const firtnameEmpty = "Veuillez fournir un prénom "
  const lastnameEmpty = "Veuillez fournir un Nom "
  const emailEmpty = "Veuillez fournir un email "

  if(firstname.innerHTML == "") console.log(firtnameEmpty)
  if(lastname.innerHTML == "") console.log(lastnameEmpty)
  if(email.innerHTML == "") console.log(emailEmpty)
}
function randomNumber() {
  return Math.floor(Math.random() * 10).toString()
}
function mailValid(mail){
  const regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  return (regex.test(email) && email.length > 8 && email.length < 30)
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => { 
  isEmpty(firstname, lastname, email, lotoNumbers)
  if (mailValid(email.value)) alert("email invalide")
  const winningNumbers = Array.apply(null, Array(6)).map(randomNumber)
  winningNumbers.join('') == lotoNumbers.value ? alert("Vous avez gagné ") : alert("Vous avez perdu")
};


let btn = document.querySelector('input[type="button"]')
btn.addEventListener("click", ()=>{
  lotoNumbers = document.getElementById('lotoNumbers'),
   firstname = document.getElementById('firstname'),
    lastname = document.getElementById('lastname'),
     email = document.getElementById('email')
  checkLoto(firstname, lastname, email, lotoNumbers)
})