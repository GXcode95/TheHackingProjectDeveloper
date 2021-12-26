const formCheck= (form) => {
  let inputs = form.querySelectorAll('input')
  let texts = form.querySelectorAll('input[type="text"]')
  let emails = form.querySelectorAll('input[type="email"]')
  let passwords = form.querySelectorAll('input[type="password"]')
  let radios = form.querySelectorAll('input[type="radio"]')
  
  let age = form.querySelector('input[type="number"]')
  const MAJEUR = 18
  const PASSWORD_LENGTH = 6
  const NAME_LENGTH = 3
  console.log( )

  try {
    //$ CHECK EMPTY
    for(let input of inputs) {
      if (input.value == "") throw `Tout les champs sont obligatoires${input.name}`
    }
    //$ CHECK MAILS 
    if (emails[0].value != emails[1].value) throw `Les emails ne correspondent pas`
    //$ CHECK AGE
    if (age.value < MAJEUR) throw `Vous devez être majeur pour vous inscrire`
    //$ CHECK PASSWORD
    if (passwords[0].value.length < PASSWORD_LENGTH) throw `Mot de passe trop court`
    if (passwords[1].value != passwords[0].value) throw `Les mot de passes ne correspondent pas`
    //$ CHECK CGU
    if (!radios[0].checked) throw `Valide les conditions Bitch !`
    //$ CHECK NAME
    if (texts[1].value.length < NAME_LENGTH) throw `Prénom trop court`

  } catch(e) {
    alert(e)
  }
}


let form = document.querySelector('form')
console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  formCheck(form)
})

