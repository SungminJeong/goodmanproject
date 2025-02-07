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
                    <p class="highlight">예술과 낭만이 가득한 도시</p><br>
                    <p>스페인의 보석, 바르셀로나는 가우디의 환상적인 건축물과 지중해의 아름다움을 간직한 도시입니다. 사그라다 파밀리아와 구엘 공원에서 예술적 감동을 느끼고, 고딕 지구에서 중세의 분위기를 만끽하세요. 라 람블라 거리를 거닐며 현지 문화를 체험하고, 바르셀로네타 해변에서 여유로운 시간을 보내는 것도 좋습니다. 미식가라면 타파스와 해산물 요리를 맛보는 것도 빼놓을 수 없죠! 역사, 예술, 맛있는 음식이 어우러진 바르셀로나에서 잊지 못할 여행을 즐겨보세요.</p>
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/yhZJ1G_hlvJmrLDN-afxu.jpg" class="intro_img"/>
            </section>
            
            <section class="intro1">
                <div class="intro_inside">
                    <h1>몬세랏 시체스</h1>
                    <p class="highlight">카탈루냐의 보석, 몬세랏과 시체스를 하루 만에! 🏞️⛪</p><br>
                    <div class="p_intro_inside">
                        <p>★★옵션1</p>
                        <p class="priceBtn">몬세랏 시체스 단체: 40 €</p>
                        <p>
                            웅장한 몬세랏 수도원과 몬세랏 산의 신비로운 풍경을 감상한 후,
                            지중해의 낭만이 가득한 시체스에서 여유로운 해변 산책을 즐겨보세요! 🌊✨</p>
                        <p>※티켓 불포함</p><br>
                        <p>★★옵션2</p>
                        <p class="priceBtn">몬세랏 시체스 단독 (2명 기준): 200 €</p>
                        <p>나만을 위한 맞춤형 몬세랏 & 시체스 단독 투어! ⛰️🌊
                            원하는 일정과 속도로 몬세랏의 신비로운 풍경과 수도원을 탐방하고,
                        지중해 감성 가득한 시체스에서 맞춤형 힐링 타임을 즐겨보세요! ✨</p>
                        <p>※티켓 불포함</p>
                    </div>   
                </div>
                <img id="mont" src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/_xtX3SoObZ8F1_19pDgyo.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>가우디 투어</h1>
                    <p class="highlight">카탈루냐의 보석, 몬세랏과 시체스를 하루 만에! 🏞️⛪</p><br>
                    <div class="p_intro_inside">
                        <p>★★옵션1</p>
                        <p class="priceBtn">가우디 반일 소수 투어: 33.5 €</p>
                        <p>
                            바쁜 일정 속 가우디의 핵심만 쏙! ⏳✨<br>
                            소규모 반일 투어로 사그라다 파밀리아, 카사 바트요 등 대표 명소를 빠르게 탐방하세요.</p>
                        <p>※구엘 구매대행, 성가족은 개별 고객님께서 구매</p>
                        <p>※대중교통비, 티켓, 식사 불포함</p><br>
                        <p>★★옵션2</p>
                        <p class="priceBtn">가우디 전일 소수 투어: 42.5 €</p>
                        <p>여유롭게 만나는 가우디의 걸작들! 🏛️✨
                        소규모 전일 투어로 사그라다 파밀리아부터 구엘 공원까지 깊이 있게 탐방하세요.
                        구엘 공원과 사그라다 파밀리아는 외관 설명 후, 개별 입장으로 만나봅니다.</p>
                        <p>※구엘 구매대행, 성가족은 개별 고객님께서 구매</p>
                        <p>※대중교통비, 티켓, 식사 불포함</p>
                    </div>   
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>가우디+시내 단독</h1>
                    <p class="highlight">가우디와 바르셀로나 시내를 편안하게 즐기는 단독 투어! 🏛️✨</p><br>
                    <div class="p_intro_inside">
                        <p>★★옵션1</p>
                        <p class="priceBtn">가우디+시내 전일 단독 (2인 기준): 182.5 €</p>
                        <p>
                        가우디와 바르셀로나 시내를 편안하게 즐기는 단독 투어! 🏛️✨
                        사그라다 파밀리아 & 구엘 공원 모두 동반 입장, 티켓도 가이드가 미리 준비해드립니다.
                        2인 기준 맞춤 진행! 유연하게 이동하며 여유로운 하루를 보내세요. 🚶‍♂️🎟️🍽️</p>
                        <p>※구엘 구매대행, 성가족은 개별 고객님께서 구매</p>
                        <p>※대중교통비, 티켓, 식사 불포함</p>
                    </div>   
                </div>
                <img src="https://productivity-popaivideo-prod-sgp.oss-ap-southeast-1.aliyuncs.com/prod/image_basic/9a579f71-7ccf-4916-95a0-363a6650cd7c/3639dc3b-484b-44d7-8180-4b638d235fab/genImage12a6496cc9144136abc1574bc9e19f1e.png?Expires=1738955332&OSSAccessKeyId=LTAI5tAWMueqYNgSXdFPvE6s&Signature=pK79P5nzL9eHvVhTHNRUGROpMY8%3D&x-oss-process=image%2Fauto-orient%2C1%2Fwatermark%2Cimage_5rC05Y2wLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzM0%2Cg_ne%2Cx_0%2Cy_0" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>지로나 + 피게레스</h1>
                    <p class="highlight">달리의 초현실 세계와 중세 도시 지로나를 하루 만에!🎨🏰</p><br>
                    <div class="p_intro_inside">
                        <p>피게레스에서 상상력을 자극하는 달리 미술관을 탐방하고,
                        지로나의 고풍스러운 거리에서 역사와 영화 속 명장면을 만나보세요! ✨</p>
                        <p>★★옵션1</p>
                        <p class="priceBtn">피게레스 달리 뮤지엄 + 지로나 워킹: 47,5 €</p>
                        <p>
                        가우디와 바르셀로나 시내를 편안하게 즐기는 단독 투어! 🏛️✨
                        사그라다 파밀리아 & 구엘 공원 모두 동반 입장, 티켓도 가이드가 미리 준비해드립니다.
                        2인 기준 맞춤 진행! 유연하게 이동하며 여유로운 하루를 보내세요. 🚶‍♂️🎟️🍽️</p>
                        <p>※바르셀로나에서 기차로 피게레스, 지로나 왕복교통편 불포함, 
                        별도로 가이드에게 지불 (45유로)</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/I45ftEHTD9K7QnXf1J4WX.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>지로나</h1>
                    <p class="highlight">고즈넉한 중세 도시 지로나를 소규모로 여유롭게 탐방! 🏰✨</p><br>
                    <div class="p_intro_inside">
                        <p>2인 기준 출발로 거의 단독처럼 즐기는 깊이 있는 워킹 투어.
                        지로나의 고풍스러운 거리에서 역사와 영화 속 명장면을 만나보세요! ✨</p>
                        <p>★★옵션1</p>
                        <p class="priceBtn">지로나 워킹 투어: 150 €</p>
                        <p class="priceBtn">지로나 워킹 투어(2인 출발시): 190 €</p>
                        <p>※바르셀로나에서 기차로 지로나 왕복교통편 불포함, 별도로 가이드에게 지불 (45유로)</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/cAegGeZMG0cauc23Eq_j7.jpg" class="intro_img"/>
            </section>
        </section>
    `


}

export default Barcelona;