import './Barcelona.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const Barcelona = () => {
    const data = tourArea[0];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="barcelona" class="inside-img">
            <p>${data.destination}</p>
        </div>
        <section class="intro-section">
            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.destination}</h1>
                    <p>${data.long_desc}</p>
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>
            
            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.destination}</h1>
                    <p>${data.long_desc}</p>
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>
        </section>
    `


}

export default Barcelona;