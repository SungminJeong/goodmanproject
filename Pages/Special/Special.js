import './Special.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const Special = () => {
    const data = tourArea[2];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="special" class="inside-img">
            <p>Special</p>
        </div>
        <section class="intro-section">
            <section class="intro1">
                <div class="intro_inside">
                    <h1>현지인 차량 서비스</h1>
                    <p class="highlight">현지인 차량 서비스</p><br>
                    <div class="p_intro_inside">
                        <p>국제공항 픽업 및 샌딩 서비스를 통해 편안하고 안전한 여행을 경험해보세요. 
                        유럽 VIP, 일반 차량으로 프라이빗 현지 기사 , 현지 코디네이터의 대응 및 한국인 직원과도 현지에서 캐어해드립니다.
                        </p>
                        <p>★★옵션</p>
                        <p class="priceBtn">공항 픽업 및 샌딩 (세단 일반 차량 기준): 75€</p>
                        <p class="priceBtn">공항 픽업 및 샌딩 (밴 일반 차량 기준): 95€</p>
                        <p class="priceBtn">공항 픽업 및 샌딩 야간 할증(세단 일반 차량 기준): 85€</p>
                        <p class="priceBtn">공항 픽업 및 샌딩 야간 할증(밴 일반 차량 기준): 105€</p>
                        <p class="priceBtn">프리미엄 차량 신청시 10유로 추가</p>
                    </div>
                </div>
                <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/AL5G/M3DkkHw9nS.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>레이나소피아</h1>
                    <p class="highlight"> 파블로 피카소, 살바도르 달리와 같은 거장들의 훌륭한 소장품을 만나보세요.</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                    </div>
                </div>
                <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/N2Cd/5PELSQxK52.jpg" class="intro_img"/>
            </section>
            
            <section class="intro1">
                <div class="intro_inside">
                    <h1>스냅 사진</h1>
                    <p class="highlight">아름다운 마드리드거리에서 인생샷!</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">스냅사진 2인: 115€</p>
                    </div>
                </div>
                <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/N2Cd/5PELSQxK52.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>돈키호테 투어</h1>
                    <p class="highlight">톨레도+콘수에그라</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------ </p>
                        <p>★★옵션</p>
                        <p class="priceBtn">돈키호테 투어: 200€</p>
                    </div>
                </div>
                <img src="https://d2ur7st6jjikze.cloudfront.net/offer_courses/51300/109870_original_1548401514.jpg?1548401514" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>아빌라+세고비아 투어</h1>
                    <p class="highlight">아빌라+세고비아</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">아빌라+세고비아: 200€</p>
                    </div>
                </div>
                <img src="https://d2ur7st6jjikze.cloudfront.net/offer_courses/51300/109870_original_1548401514.jpg?1548401514" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>남부투어</h1>
                    <p class="highlight">남부투어</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">남부투어</p>
                    </div>
                </div>
                <img src="https://d2ur7st6jjikze.cloudfront.net/offer_courses/51300/109870_original_1548401514.jpg?1548401514" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>열기구 투어</h1>
                    <p class="highlight">열기구 투어</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">열기구 투어</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="intro_img"/>
            </section>

        </section>
    `
    

}

export default Special;