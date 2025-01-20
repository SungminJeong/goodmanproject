import './Madrid.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const Madrid = () => {
    const data = tourArea[4];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="madrid" class="inside-img">
            <p>Madrid</p>
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
                    <h1>${data.tour1}</h1>
                    <p class="highlight">프라도 미술관에서 만나는 아름다운 그림이야기</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour1_desc1}</p>
                        <p>${data.tour1_desc2}</p>
                    </div>
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.tour2}</h1>
                    <p class="highlight">누가 마드리드에 볼 것이 없다고 했나요?</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour2_desc1}</p>
                        <p>${data.tour2_desc2}</p>
                    </div>
                </div>
                <img src="${data.tour2_img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.tour3}</h1>
                    <p class="highlight">당신의 톨레도 세고비아 투어에 특별한 추억을 더 합니다.</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour3_desc1}</p>
                        <p>${data.tour2_desc2}</p>
                    </div>
                </div>
                <img src="${data.tour3_img}" class="intro_img"/>
            </section>
        </section>
    `


}

export default Madrid;