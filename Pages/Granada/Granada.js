import './Granada.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const Granada = () => {
    const data = tourArea[3];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="sevilla" class="inside-img">
            <p>Granada</p>
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
                <img src="${data.img}" class="intro_img"/>
                <div class="intro_inside">
                    <h1>${data.destination}</h1>
                    <p>${data.long_desc}</p>
                </div>
                <img/>
            </section>
        </section>
    `


}

export default Granada;