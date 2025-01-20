import './Home.css';
import data from '../../data';
//import { router } from '../../utils/router';

const { headerArea, tourArea } = data;

const template = () => `
    <section id="introduce">
        <article id="box">
            <p id="intro">${headerArea.introduce1}</p>
            <p id="intro2">${headerArea.introduce2}</p>
            <div id="intro_desc">
                <p>${headerArea.intro_desc}</p>
            </div>
        </article>
    </section>
    <section id="tourArea">
        <ul id="tourList">
            
        </ul>
    </section>
`;

const Home = () => {
    document.querySelector('main').innerHTML = template();
    const ul = document.querySelector('#tourList');
    for(let item of tourArea){
        const li = document.createElement('li');
        li.classList.add('list')
        li.innerHTML = `
        <a href="/${item.path}">
            <img src="${item.img}" class="image">
            <p class="destination">${item.destination}</p>
            <p class="shortDesc">${item.short_desc}</p>
        </a>
        `;
        ul.appendChild(li);
    }
}

export default Home;