import './Sevilla.css';
import data from '../../data';

const {tourArea} = data;

const template = () => `
<section class="container">
    
</section>
`;

const Sevilla = () => {
    const data = tourArea[1];
    document.querySelector('main').innerHTML = template();
    document.querySelector('.container').innerHTML = `
        <div id="sevilla" class="inside-img">
            <p>Sevilla</p>
        </div>
        <section class="intro-section">
            <section class="intro1">
                <div class="intro_inside">
                    <h1>세비야</h1>
                    <p class="highlight">낭만적인 세비야의 매력에 푹 빠져보세요!</p><br>
                    <div class="p_intro_inside">
                        <p>자체 발광인 너무나 아름답고 우아한 세비야 거리를 걷기만 해도 이국적인 내음이 물씬 나고, 아이스크림 하나 들고 트램이 지나가는 예쁜 거리에서 셀피를 남기고 싶은 도시입니다. 🍦🚋 아름답고 이국적인 드레스를 입고 나들이를 가도 너무나 잘 어울리는 이 도시를 그냥 지나치기엔 너무나 아쉬워요. 왜냐하면, 거리 곳곳의 아름다운 건물과 그 의미를 놓치기엔 너무 아깝거든요. 🌆👗</p>
                        <p>★★투어상품</p>
                        <p>1.세비야 시내투어(주간/야간)</p>
                        <p>2.세비야 시내 + 대성당</p>
                        <p>3.플라멩꼬</p>
                        <p>4.세비야 마차투어</p>
                    </div>
                </div>
                <img src="https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/4oDCFdibORLKIdMY1Hs_U.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>세비야 시내투어 + 대성당</h1>
                    <p class="highlight">세비야를 깊이 있는 즐거움으로 수 놓아드립니다.</p><br>
                    <div class="p_intro_inside">
                        <p>세비야를 사랑하는 진심이 담긴 찐 가이드와 함께 특별한 투어를 경험해보세요. 🌟 실제 많은 가이드들은 지역만 공부해서 전체 내용을 연결하지 못하는 경우가 대부분이지만, 굿맨가이드의 세비야 투어는 다릅니다. 세비야와 포르투갈에서 프라이빗 투어를 전문적으로 안내해온 가이드의 깊이 있는 해설을 통해, 이베리아 반도의 역사를 새롭게 이해할 수 있습니다. 🗺️</p>
                        <p>세비야 대성당은 15세기에 건축된 유럽에서 세 번째로 큰 성당입니다.<br> ⛪ 황금 제단과 다양한 예술 작품들이 여러분을 놀라게 할 것입니다. 특히, 12세기 말에 세워진 히랄다탑은 높이가 거의 100m에 이르며, 원래 아랍 모스크의 일부였다는 사실을 알고 계셨나요? 🕌 성당 안뜰에서 아랍 건축의 흔적을 찾아보세요.</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">시내 소수투어(대성당 외관설명): 27€</p>
                        <p class="priceBtn">시내 + 대성당 소수투어: 45€</p>
                        <p>※모객이 2인인 경우</p>
                        <p class="priceBtn">시내 소수투어(대성당 외관설명): 40,5 €</p>
                        <p class="priceBtn">시내 + 대성당 소수투어: 67,5€</p>
                        <p>★★단독옵션</p>
                        <p>세비야 시내를 전문 가이드와 함께 단독으로 탐험하는 프라이빗 투어입니다. 
                        대기 시간 없이 원하는 작품과 명소를 우선적으로 즐길 수 있으며, 개인의 관심사에 맞춰 
                        일정이 유연하게 조정됩니다. 도시의 상징적인 장소를 둘러보며 잊지 못할 경험을 선사합니다.</p>
                        <p class="priceBtn">시내+대성당 단독 (1-3인): 200 €</p>
                        <p class="priceBtn">시내+대성당 단독 (4-6): 150 €</p>

                        <p>대성당 입장료 
                        ※ 티켓은 가이드의 사전 예약을 통해 진행되며, 상세한 내용은 메시지를 통해 문의바랍니다.<br>
                        * 대성당(히랄다탑 포함) 입장료 - 할인 대상은 여권 및 증빙 원본 자료 및 확인증이 필요<br>
                        공식 홈피에서의 온라인 구매는 구매 수량과 상관없이 1유로 커미션을 받습니다. <br>
                        - 성인 : 12€(온라인)  13€(현장 구매)<br>
                        - 학생 : 6€(온라인)   7€(현장 구매)   (만 25세 이하, 학생증 지참)<br>
                        - 경로 : 6€ (온라인)  7€(현장 구매)   (만 65세 이상, 여권 지참)<br>
                        - 어린이 : 무료  (만 13세 이하, 여권 지참)</p>
                    </div>
                </div>
                <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/07/16/HuUk/Ltj1FUNZRR.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>플라멩꼬</h1>
                    <p class="highlight">전통 타블라오에서 만나는 생생한 감동</p><br>
                    <div class="p_intro_inside">
                        <p>세비야는 플라멩고의 열정과 혼이 살아 숨 쉬는 도시입니다. 화려한 의상, 정열적인 춤사위, 그리고 깊은 감정을 담은 음악이 어우러져 플라멩고 공연은 단순한 춤을 넘어 예술 그 자체로 관객의 마음을 사로잡습니다. 세비야의 전통적인 타블라오에서 열리는 플라멩고 공연은 지역의 문화와 역사를 체험할 수 있는 특별한 기회입니다. 이곳에서 스페인의 진정한 매력을 느껴보세요!<br>
                        </p>
                        <p>★★옵션</p>
                        <p class="priceBtn">라스 세타스 (음료1 + 공연): 34€</p>
                    </div>
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/hEBE_RBVZfh60kq71xz3Q.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>세비야 마차투어</h1>
                    <p class="highlight">중세시대 귀족이 되어 마차를 타고 세비야시내를 거닐어 보세요.</p><br>
                    <div class="p_intro_inside">
                        <p>세비야의 주요 명소들을 재미있고 로맨틱한 마차 투어로 둘러보세요. <br>
                        마리아 루이사 공원, 트리아나 지구, 과달키비르 강변 지역, 그리고 
                        우아한 호텔 알폰소 XIII와 같은 세비야의 상징적인 장소들을 방문할 수 있습니다.
                        </p>
                        <p>★★옵션</p>
                        <p class="priceBtn">마차투어(최대 4인 탑승): 75€</p>
                    </div>
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/CBmCZmHFYlAqd_gmTZX1C.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>1박 2일 세트투어 1</h1>
                    <p class="highlight">세비야 출발-론다, 샌딩 프리힐리아나 네르하 투어 그라나다 샌딩</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------<br>
                        </p>
                        <p>★★옵션</p>
                        <p class="priceBtn">1박2일 투어: 175€</p>
                    </div>
                </div>
                <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/10/20/omgA/qgfvTid5Av.jpg" class="intro_img"/>
            </section>
        </section>
    `
}

export default Sevilla;