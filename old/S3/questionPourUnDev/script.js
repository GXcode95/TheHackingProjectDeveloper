const TOKEN = "&token=2bc5d0412aab03e69e9dfe15cbca26691ddef2320f3bb545faadb1e20136fe28"
const URL = "https://opentdb.com/api.php?amount="
const QUERY = "&category=18"

async function getQuestion(nbQuestion,query){
  let response = await fetch(URL + nbQuestion + TOKEN + query)
  response = await response.json()
  console.log(response)
  return response.results
}

cleanBoard = () => {
  document.querySelector("h1").innerHTML = ""
  document.querySelector("#start-section").innerHTML = ""
}
async function launchGame (e) {
  e.preventDefault();
  let nbQuestion = e.target[0].value
  let questions = await getQuestion(nbQuestion,QUERY)
  console.log(questions)
  cleanBoard();
  play(questions);
}
play = (questions) => {
  console.log(questions)

  while (questions.length > 0) {
    let question = questions.splice(0,1)
    let text = question[0].question
    let correct_anwser = question[0].correct_anwser
    let incorrect_answers = question[0].incorrect_anwser
    let type = question[0].type
    console.log(question[0])
    
  }
}


let form = document.querySelector('form')
form.addEventListener('submit', launchGame)

  
