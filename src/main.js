import Header from '../components/Header/Header';
import Home from '../Pages/Home/Home';
import './style.css'
import { router, navListeners } from "../utils/router";


document.querySelector('#app').innerHTML = `
  <header></header>
  <main></main>
  <footer></footer>
`

const init = () => {
  Header();
  //Home();
}

init();
router();
navListeners();
