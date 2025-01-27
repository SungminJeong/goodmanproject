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
        <div id="granada" class="inside-img">
            <p>Granada</p>
        </div>
        <section class="intro-section">
            <section class="intro1">
                <div class="intro_inside">
                    <h1>그라나다</h1>
                    <p class="highlight">스페인 그라나다! 역사, 예술, 문화를 깊이 있게 경험할 수 있는 고품격 투어를 소개합니다.</p><br>
                    <div class="p_intro_inside">
                        <p>
그라나다는 스페인의 안달루시아 지방에 위치한 매혹적인 도시로, 풍부한 역사와 문화가 어우러진 여행지입니다. 이곳은 세계적으로 유명한 알함브라 궁전을 비롯해, 이슬람과 기독교, 유대교 문화가 공존하는 독특한 매력을 자랑합니다. 알바이신 지구의 좁은 골목길을 거닐며 중세의 정취를 느껴보고, 사크로몬테에서 플라멩코 공연을 즐겨보세요. 맛있는 타파스와 함께하는 현지 요리는 여행의 즐거움을 더해줍니다. 그라나다는 과거와 현재가 조화를 이루는 곳으로, 잊지 못할 경험을 선사할 것입니다.</p>
                        <p>★★투어상품</p>
                        <p>1.알함브라궁전</p>
                        <p>2.시내투어</p>
                    </div>
                </div>
                <img src="https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/05NS2S4vVkNjOKUbu2MtH.png" class="intro_img"/>
            </section>

            <section class="intro1">
                <img src="${data.img}" class="intro_img"/>
                <div class="intro_inside">
                    <h1>${data.destination}</h1>
                    <p>------------------------------준비중 ------------------------------</p>
                </div>
                <img/>
            </section>
        </section>
    `


}

export default Granada;