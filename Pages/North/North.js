import './North.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const North = () => {
    const data = tourArea[5];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="north" class="inside-img">
            <p>North</p>
        </div>
        <section class="intro-section">
            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.destination}</h1>
                    <p>------------------------------준비중 ------------------------------</p>
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>
        </section>
    `


}

export default North;