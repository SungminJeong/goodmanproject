import './Header.css';
import data from '../../data';

const { headerArea,tourArea } = data;

const template = () => `
    <section id="header_container">
        <h1><a href="/"><img src="https://new.honeymoonresort.co.kr/new_ver/img/new/hnt_logo.png" class="logo"/></a></h1>
        <div>
            <article id="hamburger">
                <img src="/icon/hamburger.png" alt="hamburger"/>
            </article>
            <nav id="modal-list">
                <ul id="modalUl">
                    
                </ul>
            </nav>
            <nav>
                <ul id="header_list"></ul>
            </nav>
        </div>
    </section>
`;

const Header = () => {
    const header = document.querySelector('header');
    header.innerHTML = `${template()}`

    const ul = document.querySelector('#header_list');

    const modalLi = document.querySelector('#modalUl');
    const headerMenu = headerArea.header_menu;
    for(let item of headerMenu){
        console.log(item)
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="/${item.href}" class="menu_link">${item.destination}</a>
        `;
        ul.appendChild(li);

        const modal_li = document.createElement('li');
        modal_li.innerHTML = `
        <a href="/${item.href}" class="modal_link">${item.destination}</a>
        `;
        modalLi.appendChild(modal_li);
    }

    document.querySelector('#hamburger').addEventListener('click', () => {
        console.log("hamburger");
        const headerToggle = document.querySelector('#modal-list')
        headerToggle.classList.toggle("show")
    })
}

export default Header;