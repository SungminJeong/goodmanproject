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
                        <p class="priceBtn">${data.tour1_price1}</p>
                        <p class="priceBtn">${data.tour1_price2}</p>
                        
                    </div>
                </div>
                <img src="${data.tour1_img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.tour2}</h1>
                    <p class="highlight">조용히 빛나는 밤하늘과 함께, 마드리드의 숨결을 느껴보시요.</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour2_desc1}</p>
                        <p>${data.tour2_desc2}</p>
                        <p class="priceBtn">${data.tour2_price1}</p>
                        <p class="priceBtn">${data.tour2_price2}</p>
                    </div>
                </div>
                <img src="${data.tour2_img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.tour4}</h1>
                    <p class="highlight">프라도 미술관과 마드리드 시내를 한눈에!</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour4_desc1}</p>
                        <p>${data.tour4_desc2}</p>
                        <p class="priceBtn">${data.tour4_price1}</p>
                        <p class="priceBtn">${data.tour4_price2}</p>
                        <p class="priceBtn">${data.tour4_price3}</p>
                        <p>★★단독옵션</p>
                        <p>옵션1: 프라도 미술관과 마드리드 시내를 전문 가이드와 함께 단독으로 탐험하는 프라이빗 투어입니다. 
                        대기 시간 없이 원하는 작품과 명소를 우선적으로 즐길 수 있으며, 개인의 관심사에 맞춰 
                        일정이 유연하게 조정됩니다. 프라도의 명작들과 도시의 상징적인 장소를 둘러보며 잊지 못할 경험을 선사합니다.</p>
                        <p class="priceBtn">단독 프라도 2시간+시내 2시간(2-3인): 200 €</p>

                        <p>옵션2: 가족이나 친구들과 함께 단독으로 즐길 수 있는 프라도 미술관과 마드리드 시내 투어입니다. 
                        여유로운 이동과 깊이 있는 설명으로 구성되어 있으며, 프라도의 걸작과 도시의 
                        문화유산을 동시에 체험할 수 있습니다. 소그룹 여행에 이상적인 옵션으로, 
                        편안한 분위기에서 특별한 시간을 보낼 수 있습니다.</p>
                        <p class="priceBtn">단독 프라도 2시간+시내 2시간(4-6인) 350 €</p>

                        <p>옵션3: 프라도 미술관 관람과 마드리드 시내 투어를 포함한 프라이빗 투어로, 
                        현지 맛집 추천 및 식사 안내 서비스까지 제공됩니다. 
                        예술과 문화를 만끽한 후, 스페인 전통 음식을 맛보며 하루를 마무리할 수 있는 완벽한 코스입니다. 
                        여유롭게 도시를 즐기고 싶은 분들에게 이상적이며, 현지 전문가의 추천을 받을 수 있습니다.</p>
                        <p class="priceBtn">단독 프라도 2시간+시내 2시간+식사 안내(4-6인) 400 €</p>
                    </div>
                </div>
                <img src="${data.tour4_img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>${data.tour3}</h1>
                    <p class="highlight">당신의 톨레도 세고비아 투어에 특별한 추억을 더 합니다.</p><br>
                    <div class="p_intro_inside">
                        <p>${data.tour3_desc1}</p>
                        <p>${data.tour3_desc2}</p>
                        <p class="priceBtn">${data.tour3_price1}</p>
                        <p class="priceBtn">${data.tour3_price2}</p>
                    </div>
                </div>
                <img src="${data.tour3_img}" class="intro_img"/>
            </section>
        </section>
    `


}

export default Madrid;