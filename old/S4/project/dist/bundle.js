/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\nvar listenForm = function listenForm() {\n  var form = document.querySelector('form');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var search = e.path[0].firstElementChild.value; //input du formulaire\n\n    window.location.hash = \"#games/\" + search.replace(/\\s+/g, \"-\"); //window.location.hash = \"#games/\" + search \n  });\n};\n\nvar Home = function Home() {\n  listenForm();\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_0__.PageList)();\n};\n\n\n\n//# sourceURL=webpack://project/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//$ https://api.rawg.io/api/?key=f71dc0776d8e4267b6b513d28b5a84fd\nvar PageDetail = function PageDetail(argument) {\n  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var KEY = \"?key=54852a5cf22348679d9422216337d9aa\";\n\n  var preparePage = function preparePage() {\n    var getStringOfNames = function getStringOfNames(array, query) {\n      var plat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      // take and array of object, and list off the names in a string.\n      var arrayStr = \"\";\n      array.forEach(function (entry, i) {\n        plat == false ? arrayStr += \"<a href=\\\"#games/\".concat(entry.slug, \"/\").concat(query, \"\\\">\").concat(entry.name, \"<a>, \") : arrayStr += \"<a href=\\\"#games/\".concat(entry.platform.id, \"\\\">\").concat(entry.platform.name, \"<a>, \");\n        if (i == array.length - 1) arrayStr = arrayStr.slice(0, -2);\n      });\n      return arrayStr;\n    };\n\n    var prepareTrailer = function prepareTrailer(id, articleDOM) {\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/movies\") + KEY).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        console.log(response);\n\n        if (response.results.length > 0 && response.results[0].data.max) {\n          articleDOM.querySelector(\".trailer video\").innerHTML = \"<source src=\\\"\".concat(response.results[0].data.max, \"\\\" type=\\\"video/mp4\\\">\");\n        }\n      });\n    };\n\n    var prepareScreenshots = function prepareScreenshots(id, articleDOM) {\n      fetch(\"https://api.rawg.io/api/games/\".concat(id, \"/screenshots\") + KEY).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var count = 0;\n        response.results.forEach(function (result) {\n          if (result.image && count < 4) {\n            articleDOM.querySelector(\".screenshots\").innerHTML += \"<img src=\\\"\".concat(result.image, \"\\\">\");\n            count++;\n          }\n        });\n      });\n    };\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument + KEY;\n      console.log(\"utrl =\", finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        // change the hash url wihtout trigger the \"change\" event on the hash.\n        // replace the game's id by the slug\n        history.replaceState(null, null, document.location.pathname + '#game/' + response.slug);\n        var name = response.name,\n            id = response.id,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            rating = response.rating,\n            ratings_count = response.ratings_count,\n            website = response.website,\n            publishers = response.publishers,\n            developers = response.developers,\n            platforms = response.platforms,\n            genres = response.genres,\n            tags = response.tags,\n            stores = response.stores;\n        var publishersStr = getStringOfNames(publishers, \"publishers\");\n        var developersStr = getStringOfNames(developers, \"developers\");\n        var platformsStr = getStringOfNames(platforms, \"parent_platforms\", true);\n        var genresStr = getStringOfNames(genres, \"genres\");\n        var tagsStr = getStringOfNames(tags, \"tags\");\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"header\").style.background = \"no-repeat  url(\".concat(background_image, \")\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"h2.note\").innerHTML = \"\".concat(rating, \"/5 - \").concat(ratings_count, \" votes\");\n        articleDOM.querySelector(\"header a\").href = website;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n        articleDOM.querySelector(\"p.release-date\").innerHTML = released;\n        articleDOM.querySelector(\"p.publishers\").innerHTML = publishersStr;\n        articleDOM.querySelector(\"p.developers\").innerHTML = developersStr;\n        articleDOM.querySelector(\"p.platforms\").innerHTML = platformsStr;\n        articleDOM.querySelector(\"p.genres\").innerHTML = genresStr;\n        articleDOM.querySelector(\"p.tags\").innerHTML = tagsStr;\n\n        var _iterator = _createForOfIteratorHelper(stores),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var store = _step.value;\n            articleDOM.querySelector(\".store-list\").innerHTML += \"<li><a href=\\\"http://www.\".concat(store.store.domain, \"\\\" class=\\\"my-2\\\">\").concat(store.store.name, \"</a></li>\");\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        prepareTrailer(id, articleDOM);\n        prepareScreenshots(id, articleDOM);\n      });\n    }; // hide select and more button\n\n\n    var select = document.querySelector(\"#platform\");\n    if (select.style.display != \"none\") select.style.display = \"none\";\n    document.querySelector('.more').classList.add('hidden');\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    var infoPart = \" \\n        <div class=\\\"flex j-between\\\">\\n          <h1 class=\\\"title\\\"></h1><h2 class=\\\"note\\\"></h2>\\n        </div>\\n        \\n        <p class=\\\"description\\\"></p>\\n        \\n        <div class=\\\"grid-4\\\">\\n          <p class=\\\"bolder\\\">Release date</p>\\n          <p class=\\\"bolder\\\">Developers</p>\\n          <p class=\\\"bolder\\\">Platforms</p>\\n          <p class=\\\"bolder\\\">Publishers</p>\\n          \\n          <p class=\\\"release-date\\\"></p>\\n          <p class=\\\"developers\\\"></p>\\n          <p class=\\\"platforms\\\"></p>\\n          <p class=\\\"publishers\\\"></p>\\n        </div>\\n        <div class=\\\"grid-2\\\">\\n          <p class=\\\"bolder\\\">Genres</p>\\n          <p class=\\\"bolder\\\">Tags</p>\\n\\n          <p class=\\\"genres\\\"></p>\\n          <p class=\\\"tags\\\"></p>\\n        </div>\";\n    var buyPart = \"\\n      <div class=\\\"buy\\\">\\n        <h2>BUY</h2>\\n        <ul class=\\\"store-list\\\">\\n        </ul>\\n      </div>\";\n    var mediaPart = \"\\n      <h2>TRAILER</h2>\\n      <div class=\\\"trailer\\\">\\n      <video controls >\\n        Sorry, you can't see the trailer video on this browser\\n      </video>\\n      </div>\\n      \\n      <h2>SCREENSHOT</h2>\\n      <div class=\\\"screenshots grid-2 gap-3\\\">\\n      </div>\\n    \";\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <header>\\n            <a href=\\\"\\\" class=\\\"btn-lg btn-green\\\">Check Website</a>\\n          </header>\\n          <div class=\\\"mx-3 my-2\\\">\\n            \".concat(infoPart, \"\\n            \").concat(buyPart, \"\\n            \").concat(mediaPart, \"\\n\\n          </div>\\n        </div>\\n      </section>\\n    \");\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://project/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"search\";\n  var KEY = \"?key=54852a5cf22348679d9422216337d9aa\";\n\n  var preparePage = function preparePage() {\n    var handleSelect = function handleSelect() {\n      // create a select tag with an empty option tag\n      var select = document.querySelector('#platform');\n      if (select.style.display != \"block\") select.style.display = \"block\";\n\n      if (select.children.length <= 1) {\n        // fetch all platform type and insert it as option in the select\n        document.querySelector('form').appendChild(select);\n        fetch(\"https://api.rawg.io/api/platforms\" + KEY).then(function (response) {\n          return response.json();\n        }).then(function (response) {\n          response.results.forEach(function (article) {\n            select.innerHTML += \"<option value=\\\"\".concat(article.id, \"\\\">\").concat(article.name, \"</option>\");\n          });\n        }); // listen for any change on the select\n\n        select.addEventListener(\"change\", preparePage);\n      }\n    };\n\n    console.log(\"prepare\");\n\n    var listenMore = function listenMore() {\n      var more = document.querySelector('.more'); // if more btn was hidden by pageDetails, show it\n\n      more.classList.remove('.hidden'); // Lors du click sur le button more\n      // On show les 9 jeux suivant\n\n      more.classList.remove('hidden');\n\n      if (more) {\n        more.addEventListener(\"click\", function (e) {\n          var hiddens = document.querySelectorAll('.hidden');\n\n          for (var i = 0; i < 9; i++) {\n            hiddens[i].classList.remove('hidden');\n          }\n\n          cleanMore();\n        });\n      }\n    };\n\n    var listenWrap = function listenWrap() {\n      // listen for hover on image\n      var wraps = document.querySelectorAll(\".img-wrap\");\n\n      var _iterator = _createForOfIteratorHelper(wraps),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var wrap = _step.value;\n          wrap.addEventListener(\"mouseenter\", getInfo(wrap));\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    };\n\n    var showGames = function showGames(response) {\n      // display game list in cardGame element\n      var cardClass = \"cardGame\";\n\n      for (var i = 0; i < response.results.length; i++) {\n        var article = response.results[i]; //let devs = getGameDevs(article)\n\n        if (i == 9) cardClass += \" hidden\";\n        articles += \"\\n          <div class=\\\"\".concat(cardClass, \"\\\">\\n          <div class=\\\"img-wrap\\\" data-id=\\\"\").concat(article.id, \"\\\">\\n            <div class=\\\"info-box\\\"></div>\\n            <img src=\\\"\").concat(article.background_image, \"\\\">\\n          </div>\\n          <h1>\").concat(article.name, \"</h1>\\n          <div class=\\\"game-platform\\\">\\n          \");\n\n        if (article.parent_platforms) {\n          console.log(article);\n          article.parent_platforms.forEach(function (platform) {\n            articles += \"<a href=\\\"#games/\".concat(platform.platform.id, \"/parent_platforms\\\" class=\\\"btn btn-purple\\\">\").concat(platform.platform.name, \"</a>\");\n          });\n          articles += \"</div>\\n            <br/>\\n            <a href=\\\"#game/\".concat(article.id, \"\\\" class=\\\"btn btn-green\\\" >Details</a>\\n            <br />\\n            </div>\");\n        }\n      }\n    };\n\n    var cleanMore = function cleanMore() {\n      // hide the more button if there is nothing more to show\n      // On vérifie si il reste des jeux a afficher\n      var hidden = document.querySelector('.hidden');\n      var moreBtn = document.querySelector('.more'); // Si tout les jeux(ou le max27) ont été affichés, remove le button\n\n      if (hidden == null) moreBtn.classList.add('hidden');\n    };\n\n    var getInfo = function getInfo(wrap) {\n      // get game id,fetch details about the game, SHOW it\n      var showInfo = function showInfo(selector, genres, devs, ratingsCount, rate, released) {\n        // insert info about the game hover the image\n        var infoBox = selector.querySelector(\".info-box\");\n        infoBox.classList.remove(\"invisible\"); //$ DATE\n\n        released = new Date(released.split('-'));\n        var month = released.toLocaleString('en-us', {\n          month: 'short'\n        });\n        var date = released.getDate();\n        var year = released.getFullYear(); //$ DEVELOPERS\n\n        var devList = \"\";\n        devs.forEach(function (dev) {\n          devList += \"<a href=\\\"#games/\".concat(dev.slug, \"/developers\\\">\").concat(dev.name, \"</a>, \");\n        });\n        devList = devList.slice(0, -2); //$ HTML\n\n        var genreList = document.createElement('p');\n        genreList.classList.add('fs-6');\n        infoBox.innerHTML = \"\\n          <div class=\\\"px-2 py-1\\\">\\n            <p class=\\\"fs-4\\\">\".concat(month, \" \").concat(date, \", \").concat(year, \"</p>\\n            <p class=\\\"fs-6\\\">\").concat(devList, \"<p>\\n            <p class=\\\"fs-8\\\">\").concat(rate, \"/5 - \").concat(ratingsCount, \" votes</p>\");\n\n        for (var i = 0; i < genres.length; i++) {\n          genreList.innerHTML += \"<a href=\\\"#games/\".concat(genres[i].slug, \"/genres\\\">\").concat(genres[i].name, \"</a>\");\n          if (i != genres.length - 1) genreList.innerHTML += \", \";\n        }\n\n        infoBox.firstElementChild.appendChild(genreList);\n      };\n\n      var id = wrap.getAttribute(\"data-id\");\n      fetch(\"https://api.rawg.io/api/games/\" + id + KEY).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        showInfo(wrap, response.genres, response.developers, response.ratings_count, response.rating, response.released);\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n    };\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"&\".concat(query, \"=\") + argument;\n      }\n\n      var platform = document.querySelector('#platform');\n\n      if (platform.value) {\n        finalURL = finalURL + \"&platforms=\".concat(platform.value);\n      }\n\n      console.log(finalURL); // trop de requete \n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        showGames(response);\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        cleanMore();\n        listenWrap();\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n      return;\n    };\n\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n    handleSelect(); //listenForm()\n\n    listenMore();\n    console.log(\"args =>\", cleanedArgument);\n    fetchList(\"https://api.rawg.io/api/games\" + KEY + \"&page_size=27\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\"><h1 class=\\\"fs-10 green\\\">loading . . .</h1></div>\\n      </section>\\n    \";\n    preparePage();\n  }; // fetch(\"https://media.rawg.io/media/platform/5\" + KEY)\n  // .then(response => response.json())\n  // .then(response => console.log(response))\n\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://project/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ \"./src/js/routes.js\");\n\n\nvar pageArgument;\nvar pageQuery;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  pageQuery = path[2] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes_js__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument, pageQuery);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\nvar routes = {\n  \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"games\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"platforms\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"game\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n//# sourceURL=webpack://project/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;