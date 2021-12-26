//* Pour commencer, tu devras créer une classe recipe en ES5. Elle contiendra :
//* Un titre
//* Des étapes, dans un array nommé steps
//* Une méthode cook, créée par un prototype.
//* Voici l'array que nous utiliserons pour la recette (attribut steps de notre class recipe :


const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]

function Recipe (title, steps) {
  let recipe = {}
  recipe.title = title
  recipe.steps = steps
  recipe.cook = recipeMethods.cook

  return recipe
}

let recipeMethods = {
  cook() {
    let oneStringer = ""
    for(let i = 0; i < this.steps.length; i++) {
      let step = this.steps[i]

      if(step.length == 4) {
        let wet = `- For ${step[0]} ${step[1]} of ${step[2]} to the bowl\n`
        let dry = `- Add ${step[0]} ${step[1]} of ${step[2]} to the bowl\n`

        step[3] == 'dry' ? oneStringer += dry : oneStringer += wet 
      } else if( step.length == 2) {
        oneStringer += `Then heat ${step[0]} minutes to the foven at ${step[1]}.\nHave a good Meal ! :)`
      } else (
        oneStringer += step + '\n'
      )      
    }
    
    // If u want to see it in the nav
    let h1 = document.querySelector('h1')
    h1.innerHTML = oneStringer
  }

}

function addIngredientToForm() {
  let btn = document.querySelector('.add-btn')
  btn.addEventListener("click", (e)=> {
    e.preventDefault()
    let ingredientDiv = document.querySelector('.ingredient')
    let newIngredient = ingredientDiv.cloneNode(true) 
    let wrap = document.querySelector('#ingredientWrap')
    wrap.appendChild(newIngredient)
  }, false)
}

function checkRecipe(form) {
  let inputs = form.querySelectorAll('input')
  let title = form.querySelector('input[name="title"]')
  let ingredients = form.querySelectorAll('#ingredientWrap>div')
  let texts = form.querySelectorAll('input[type="text"]')
  let temperature = form.querySelector('input[name="temperature"]')
  let minutes = form.querySelector('input[name="time"]')

  try {
    // CHECK EMPTY
    for(let input of inputs) 
      if (input.value == "") throw `Tout les champs sont obligatoires${input.name}`
    // CHECK INSTRUCTION
    for(let text of texts)
      if (text.value.length < 5) throw `Le champs ${texts.name} doit avoir au moins 5 caractères`

    // All ok so create the recipe
    createRecipe(title.value, ingredients, [temperature.value, minutes.value])
  }
  catch(e) {
    alert(e)
  }

}
function createRecipe(title, ingredients, heat) {
  let steps = []
  for(let ingredient of ingredients) {
    let name = ingredient.querySelector('input[name="ingredient"]').value
    let quantity = ingredient.querySelector('input[name="quantity"]').value
    let unity = ingredient.querySelector('select[name="unity"]').value
    let type;
    ['ml','cl','l'].includes(unity) ? type = 'wet' : type ='dry'
    steps.push([name,quantity,unity])
    console.log(steps)
  }
  steps.push(heat)
  const newIngredients = Recipe(title, steps)
  newIngredients.cook()

}

function listenForRecipe() {
  let form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkRecipe(form)
  })
}
listenForRecipe()
addIngredientToForm()

const cookies = Recipe("LES MEILLEURS COOKIES VÉGANS AU CHOCOLAT", steps)

