const processVelibData = (datas) =>{
  let selector = document.querySelector('#velib')
  for(let data of datas) {
    let name = data.fields.name
    let eBikeNb = data.fields.ebike
    let classicBikeNb = data.fields.numbikesavailable - eBikeNb

    showVelibStation(selector,name, eBikeNb, classicBikeNb)
  }
}

const callToVelib = () => {
const URL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=10&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes"

fetch(URL)
  .then( (response) => response.json() )
  .then( (response) => processVelibData(response.records) )
  .catch( (error) => console.error('error:', error))


}
const showVelibStation = (selector, name, numberClassicalVelibs, numberElectricVelibs) => {
  selector.innerHTML += `
      <div>
          <h2>Station : ${name}</h2>
          <p>${numberClassicalVelibs} classical Velibs</p>
          <p>${numberElectricVelibs} electric Velibs</p>
      </div>
  `
}
//$ WEATHER API
const callWeather = () => {
  const APIKEY = "key=89dc637c12c34d5c9157c00f0da355a4"
  const PARAMETERS = '&lat=47.322047&lon=5.04148&lang=FR'
  const BASE_URL = `https://api.weatherbit.io/v2.0/current?`
  let url = BASE_URL + APIKEY + PARAMETERS 
  fetch(url)
    .then((response)=> response.json())
    .then((response)=> processWeather(response))
    .catch((error)=>console.error("error :",error))
}

const processWeather = (response) => {
  const selector = document.querySelector('#weather')
  let data = response.data[0]
  let city = data.city_name
  let temperature = data.temp
  let time = data.ob_time
  let icon = `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`
  let description = data.weather.description
  console.log(data)
  showWeather(selector, city, icon, description, temperature, time)
}
showWeather = (selector, city, icon, description, temperature, time) => {

  selector.innerHTML = `
  <h2>Station : ${city}</h2>
  <p>temperature : ${temperature} </p>
  <p>icon : <img src="${icon}"> </p>
  <p>description : ${description} </p>
  <p>time : ${time} </p>
  `
}


callWeather()



//callToVelib()


