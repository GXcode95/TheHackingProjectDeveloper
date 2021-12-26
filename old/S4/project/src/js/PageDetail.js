const PageDetail = (argument,query="") => {
  const KEY = "?key=998ad28669d44a599c5a780815edd09f"
  const preparePage = () => {

    const getStringOfNames = (array, query, plat=false) => { // take and array of object, and list off the names in a string.
      let arrayStr = ""
      array.forEach((entry, i) => {
        plat == false ? arrayStr += `<a href="#games/${entry.slug}/${query}">${entry.name}<a>, `  : arrayStr += `<a href="#games/${entry.platform.id}">${entry.platform.name}<a>, `
        if (i == array.length - 1 ) arrayStr = arrayStr.slice(0,-2)
      })
      return arrayStr
    }
    const prepareTrailer = (id, articleDOM) => {
      fetch(`https://api.rawg.io/api/games/${id}/movies` + KEY)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if(response.results.length > 0 && response.results[0].data.max) {

          articleDOM.querySelector(".trailer video").innerHTML = `<source src="${response.results[0].data.max}" type="video/mp4">`
        }
      }) 
    }
    const prepareScreenshots = (id, articleDOM) => {

      fetch(`https://api.rawg.io/api/games/${id}/screenshots` + KEY)
      .then(response => response.json())
      .then(response =>{
        let count = 0
        response.results.forEach(result => {
          if (result.image && count < 4) {
            articleDOM.querySelector(".screenshots").innerHTML += `<img src="${result.image}">`
            count++
          }
        })
        
      })
    }
    const fetchGame = (url, argument) => {
      let finalURL = url +  argument + KEY;
      console.log("utrl =", finalURL)
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          // change the hash url wihtout trigger the "change" event on the hash.
          // replace the game's id by the slug
          history.replaceState(null, null, document.location.pathname + '#game/' + response.slug)
          

          let { name, id, released, description, background_image, rating, ratings_count, website,
                publishers, developers, platforms, genres, tags, stores } = response;

          let publishersStr = getStringOfNames(publishers, "publishers")
          let developersStr = getStringOfNames(developers, "developers")
          let platformsStr = getStringOfNames(platforms, "parent_platforms", true)
          let genresStr = getStringOfNames(genres, "genres")
          let tagsStr = getStringOfNames(tags, "tags")

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("header").style.background = `no-repeat  url(${background_image})`
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("h2.note").innerHTML = `${rating}/5 - ${ratings_count} votes`
          articleDOM.querySelector("header a").href = website;
          
          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("p.release-date").innerHTML = released;
          articleDOM.querySelector("p.publishers").innerHTML = publishersStr;
          articleDOM.querySelector("p.developers").innerHTML = developersStr;
          articleDOM.querySelector("p.platforms").innerHTML = platformsStr;
          articleDOM.querySelector("p.genres").innerHTML = genresStr;
          articleDOM.querySelector("p.tags").innerHTML = tagsStr;

          for(let store of stores){
            articleDOM.querySelector(".store-list").innerHTML += `<li><a href="http://www.${store.store.domain}" class="my-2">${store.store.name}</a></li>`
          }

          prepareTrailer(id, articleDOM)
          prepareScreenshots(id, articleDOM)
        });
    };


    // hide select and more button
    let select = document.querySelector("#platform")
    if (select.style.display != "none") select.style.display = "none"
    document.querySelector('.more').classList.add('hidden')

    let cleanedArgument = argument.replace(/\s+/g, "-");
    
    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    let infoPart = ` 
        <div class="flex j-between">
          <h1 class="title"></h1><h2 class="note"></h2>
        </div>
        
        <p class="description"></p>
        
        <div class="grid-4">
          <p class="bolder">Release date</p>
          <p class="bolder">Developers</p>
          <p class="bolder">Platforms</p>
          <p class="bolder">Publishers</p>
          
          <p class="release-date"></p>
          <p class="developers"></p>
          <p class="platforms"></p>
          <p class="publishers"></p>
        </div>
        <div class="grid-2">
          <p class="bolder">Genres</p>
          <p class="bolder">Tags</p>

          <p class="genres"></p>
          <p class="tags"></p>
        </div>`
    let buyPart = `
      <div class="buy">
        <h2>BUY</h2>
        <ul class="store-list">
        </ul>
      </div>`

    let mediaPart = `
      <h2>TRAILER</h2>
      <div class="trailer">
      <video controls >
        Sorry, you can't see the trailer video on this browser
      </video>
      </div>
      
      <h2>SCREENSHOT</h2>
      <div class="screenshots grid-2 gap-3">
      </div>
    `

    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <header>
            <a href="" class="btn-lg btn-green">Check Website</a>
          </header>
          <div class="mx-3 my-2">
            ${infoPart}
            ${buyPart}
            ${mediaPart}

          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render()
};

export { PageDetail }