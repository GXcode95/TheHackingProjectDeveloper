const PageList = (argument = "", query = "search") => {
  const KEY = "?key=998ad28669d44a599c5a780815edd09f"

  const preparePage = () => {
    const handleSelect = () => { 
      // create a select tag with an empty option tag
      let select = document.querySelector('#platform')
      if (select.style.display != "block") select.style.display = "block"
      if( select.children.length <= 1) {
        // fetch all platform type and insert it as option in the select
        document.querySelector('form').appendChild(select)
        fetch("https://api.rawg.io/api/platforms" + KEY)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach(article =>{
    
            
            select.innerHTML += `<option value="${article.id}">${article.name}</option>` 
          })
        })
    
        // listen for any change on the select
        select.addEventListener("change", preparePage)
      }
    }

    console.log("prepare")

    const listenMore =() => {
      let more = document.querySelector('.more')
      // if more btn was hidden by pageDetails, show it
      more.classList.remove('.hidden')

      // Lors du click sur le button more
      // On show les 9 jeux suivant
      more.classList.remove('hidden')
      if(more) {
        more.addEventListener("click", (e) => {
         let hiddens = document.querySelectorAll('.hidden')
         for(let i = 0; i < 9; i++) {
          hiddens[i].classList.remove('hidden')
        }
        cleanMore()
        
        })
      }
    }

    const listenWrap = () => { // listen for hover on image
      let wraps = document.querySelectorAll(".img-wrap")
      for(let wrap of wraps) {
        wrap.addEventListener("mouseenter", getInfo(wrap))
      }
    }
    const showGames = (response) => { // display game list in cardGame element
      
      let cardClass = "cardGame" 
      for(let i =0; i < response.results.length; i++) {
        let article = response.results[i]
        //let devs = getGameDevs(article)
        if(i == 9) cardClass += " hidden"
        articles += `
          <div class="${cardClass}">
          <div class="img-wrap" data-id="${article.id}">
            <div class="info-box"></div>
            <img src="${article.background_image}">
          </div>
          <h1>${article.name}</h1>
          <div class="game-platform">
          `;
        if(article.parent_platforms) {
          console.log(article)
          article.parent_platforms.forEach(platform => {
            articles += `<a href="#games/${platform.platform.id}/parent_platforms" class="btn btn-purple">${platform.platform.name}</a>`
          })
          articles += `</div>
            <br/>
            <a href="#game/${article.id}" class="btn btn-green" >Details</a>
            <br />
            </div>`
        }
      }
    }

    const cleanMore = () => { // hide the more button if there is nothing more to show
      // On vérifie si il reste des jeux a afficher
      let hidden = document.querySelector('.hidden')
      let moreBtn = document.querySelector('.more')
      // Si tout les jeux(ou le max27) ont été affichés, remove le button
      if(hidden == null) moreBtn.classList.add('hidden')
    }

    const getInfo = (wrap) => { // get game id,fetch details about the game, SHOW it
      const showInfo = (selector, genres, devs, ratingsCount, rate, released) => { // insert info about the game hover the image
        let infoBox = selector.querySelector(".info-box")
        infoBox.classList.remove("invisible")
      //$ DATE
          released = new Date(released.split('-'))
          let month = released.toLocaleString('en-us', { month: 'short' })
          let date = released.getDate()
          let year = released.getFullYear()
          
      //$ DEVELOPERS
          let devList = ""
          devs.forEach(dev => {
            devList += `<a href="#games/${dev.slug}/developers">${dev.name}</a>, `
          })
          devList = devList.slice(0,-2)
          
      //$ HTML
        let genreList = document.createElement('p')
        genreList.classList.add('fs-6')
        infoBox.innerHTML = `
          <div class="px-2 py-1">
            <p class="fs-4">${month} ${date}, ${year}</p>
            <p class="fs-6">${devList}<p>
            <p class="fs-8">${rate}/5 - ${ratingsCount} votes</p>`

        for(let i = 0; i < genres.length; i++) {
          genreList.innerHTML += `<a href="#games/${genres[i].slug}/genres">${genres[i].name}</a>` 
          if(i != genres.length - 1) genreList.innerHTML += `, `
        }
        infoBox.firstElementChild.appendChild(genreList)
      }

      let id = wrap.getAttribute("data-id")
      fetch("https://api.rawg.io/api/games/" + id + KEY)
        .then(response => response.json())
        .then(response => {
          showInfo(wrap, response.genres, response.developers, response.ratings_count, response.rating, response.released)
        })
        .catch(e => console.error(e))

    }

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + `&${query}=` + argument;
      }
      
      let platform = document.querySelector('#platform')
      if (platform.value) {
        finalURL = finalURL + `&platforms=${platform.value}`
      }
      console.log(finalURL)
      // trop de requete 

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          showGames(response)
          document.querySelector(".page-list .articles").innerHTML = articles;
          cleanMore()
          listenWrap()

        })
        .catch(e => console.error(e))
        return
    };

  
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    handleSelect()
    //listenForm()
    listenMore()
    console.log("args =>", cleanedArgument)
    fetchList("https://api.rawg.io/api/games" + KEY + "&page_size=27", cleanedArgument );
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles"><h1 class="fs-10 green">loading . . .</h1></div>
      </section>
    `;
    preparePage();
  };


  // fetch("https://media.rawg.io/media/platform/5?key=998ad28669d44a599c5a780815edd09f" + KEY)
  // .then(response => response.json())
  // .then(response => console.log(response))

  
  render();
};

export { PageList }
