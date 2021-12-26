const URL = "https://api.themoviedb.org/3/search/movie"
const APIKEY = "?api_key=6102183cc480c054c866c9ffd3a0f9db"
const LANG = "&lang=fr"

const searchMovie = (e) => {
	e.preventDefault()
	try{
		let research = document.querySelector('input[name="title"]').value
		research = "&query=" + research.replace(/ /g,"+")
		fetch(URL + APIKEY  + research + LANG )
			.then( response => response.json() )
			.then( response => processMovie(response) )
			.catch( error => console.error(error) )
	}
	catch {
		console.log("Une erreur est survenue.")
	}
}
const processMovie = (response) => {
	for(let i =0; i < response.results.length; i++){
		result = response.results[i]
		let id = result.id	
		let posterUrl = "https://image.tmdb.org/t/p/w500/" + result.poster_path
		let title = result.title
		let release = result.release_date
		let selector = document.querySelector('#movies')
		showMovie(selector, title, release, posterUrl, id, i)	
	}
	listenForPopUp()
	observe()
}
const showMovie = (selector, title, release, posterUrl, id, animation) => {	
	let div = animation%2 == 0 ?  `<div class="m-5 transition-1 hidden-right flex-center">` :	`<div class="m-5 transition-1 hidden-left flex-center">`
	selector.innerHTML += div + `
			<img src="${posterUrl}" height="250px" >
			<h2>${title}</h2>
			<p> sortie le ${release}</p>
			<button id="${id}" class="btn btn-success">Voir plus</button>
		</div>`
}
const listenForPopUp = () => {
	let buttons = document.querySelectorAll('#movies button')
	for (let button of buttons) {
		button.addEventListener('click', moviePopUp)
	}
}
const moviePopUp = (e) => {
	let id = "/" + e.path[0].id
	let wrap = e.path[0].parentElement
	searchMoreDetails(id)
}
const searchMoreDetails = (id) => {
	const detailsUrl = "https://api.themoviedb.org/3/movie/"
	fetch(detailsUrl + id + APIKEY + LANG )
		.then(response => response.json())
		.then(response => processDetails(response))
		.catch(error => console.error(error))
}
const processDetails = (response) => {
	// console.log(response)
	let title = response.title
	let overview = response.overview
	let release = response.release_date
	let posterUrl = "https://image.tmdb.org/t/p/w500/" + response.poster_path
	showPopUp(title,release,overview, posterUrl)
	listenForPopUp()
	
	let closeBtn = document.querySelector('.close-pop-up')
	closeBtn.addEventListener('click', ()=> document.querySelector('.pop-up').remove() )
}
const showPopUp = (title,release,overview, posterUrl) => {
	let popUp = document.querySelector('.pop-up')
	if(popUp) popUp.remove() //clean the ol popUp before to create one
  document.body.innerHTML += `
		<div class="pop-up bg-white border border-secondary">
			<i class="fas fa-times close-pop-up"></i>
			<div class="row">
				<img src="${posterUrl}" class="col-5">
				<div class="col-5 offset-1">
					<h2>${title}</h2>
					<p><strong>${release}</strong></p>
					<p>${overview}</p>
				</div>
			</div>
		</div>`
}

const observe = () => {
	let observer = new IntersectionObserver(function (entries) {
		for(let entry of entries) {
			//console.log(entry)
			if(entry.intersectionRatio > 0.5) {
				entry.target.classList.remove('hidden-left')
				entry.target.classList.remove('hidden-right')
			}
		}
	}, {
		threshold: [0.5]		
	})

	let movies = document.querySelectorAll('.m-5')
	for(let movie of movies){
		observer.observe(movie)
	}


}



let form = document.querySelector('form')
form.addEventListener('submit',searchMovie )

let observer = new IntersectionObserver((entries)=>{
	console.log(entries)
},{

})

let movies = document.querySelectorAll('.m-5')
console.log(movie)
for(let movie of movies){
	observer.observe(movie)
}
