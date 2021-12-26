import '../sass/style.scss';
import { routes } from "./routes.js"
let pageArgument;
let pageQuery;
const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  pageQuery = path[2] || "";
  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument, pageQuery);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

