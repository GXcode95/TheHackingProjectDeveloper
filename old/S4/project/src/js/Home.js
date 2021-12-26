import { PageList } from "./PageList"

const listenForm = () => { 
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let search = e.path[0].firstElementChild.value //input du formulaire
    window.location.hash = "#games/" + search.replace(/\s+/g, "-") 
    //window.location.hash = "#games/" + search 
  })
}  

const Home = () => {
  listenForm()
  PageList()
}
export { Home }