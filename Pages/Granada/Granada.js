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
                        <p>2.그라나다 시내+알바이신</p>
                    </div>
                </div>
                <img src="https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/05NS2S4vVkNjOKUbu2MtH.png" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>알람브라</h1>
                    <p class="highlight">시간을 거슬러 떠나는 알함브라 궁전 여행</p><br>
                    <div class="p_intro_inside">
                        <p>------------------------------준비중 ------------------------------</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">알람브라 단체: 45 €</p>
                        스페인의 보석, 알람브라를 전문 가이드와 함께 깊이 있게 탐험하세요! 🏰✨ <br>
                        웅장한 이슬람 건축과 환상적인 정원을 거닐며, 천 년의 역사를 품은 아름다운 궁전을 생생하게 만나볼 수 있습니다. 
                        효율적이고 알찬 일정으로, 잊지 못할 문화 여행을 즐겨보세요! 🌿🎭
                        <p class="priceBtn">알람브라 단독: 125 €</p>
                        <p>전문 가이드와 함께하는 알함브라 궁전 프라이빗 투어! 🏰✨ 단독 진행으로 여유롭게 걸으며, 
                        알함브라의 숨겨진 이야기와 역사적 비밀까지 깊이 있게 경험할 수 있습니다. <br>
                        맞춤형 해설과 편안한 동선으로, 더욱 특별하고 잊지 못할 시간을 만들어 보세요! 🌿🎭</p>
                    </div>   
                </div>
                <img src="${data.img}" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>그라나다 시내+알바이신</h1>
                    <p class="highlight">역사와 낭만이 살아있는 그라나다 시내 투어</p><br>
                    <div class="p_intro_inside">
                        <p>전문 가이드와 함께하는 그라나다 시내 & 알바이신 프라이빗 투어! 🏰✨ 
                        알람브라를 배경으로 한 고풍스러운 구시가지와, 시간 속에 멈춘 듯한 알바이신의 매혹적인 골목길을 여유롭게 
                        탐험하세요. 맞춤형 해설과 감각적인 동선으로, 그라나다의 숨은 보석들을 깊이 있게 경험할 수 있는 특별한 
                        기회입니다! 🌿🌅</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">그라나다 시내+알바이신 단독: 100 €</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/8_-4J_n3WuG8_ae2QPokn.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>알람브라+시내+알바이신</h1>
                    <p class="highlight">그라나다의 정수, 알람브라∙시내∙알바이신 완벽 투어</p><br>
                    <div class="p_intro_inside">
                        <p>전문 가이드와 함께하는 알람브라 + 그라나다 시내 + 알바이신 프라이빗 투어! 🏰✨ 스페인의 보석, 알람브라의 
                        웅장한 역사부터 그라나다의 생동감 넘치는 거리, 그리고 알바이신의 매혹적인 전망까지 한 번에 즐길 수 있습니다. 
                        맞춤형 해설과 여유로운 일정으로, 그라나다의 진짜 매력을 깊이 있게 경험하세요! 🌿🌅</p>
                        <p>★★옵션</p>
                        <p class="priceBtn">알람브라+시내+알바이신 단독(2인): 265 €</p>
                        <p>※가이드 교통비도 고객 부담 및 교통비 식비 불포함</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/LaIHMQVDIhgxVnFlUVaiQ.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>사끄로몬떼 플라멩꼬 투어</h1>
                    <p class="highlight">집시 동굴에서 펼쳐지는 정열의 플라멩코, 사크로몬테 투어</p><br>
                    <div class="p_intro_inside">
                        <p>전통 동굴에서 펼쳐지는 정열적인 집시 플라멩코를 감상하고, 아름다운 그라나다 야경까지 한 번에 즐길 수 있는 
                        특별한 경험! 알람브라 궁전이 반짝이는 밤, 현지인들만 아는 숨은 명소에서 잊지 못할 감동을 만나보세요. 💃🔥🏰</p>
                        <p>★★옵션1</p>
                        <p>전통 동굴에서 펼쳐지는 정열적인 집시 플라멩코를 감상하고, 아름다운 그라나다 야경까지 한 번에 즐길 수 있는 
                        특별한 경험! 알람브라 궁전이 반짝이는 밤, 현지인들만 아는 숨은 명소에서 잊지 못할 감동을 만나보세요. 💃🔥🏰</p>
                        <p class="priceBtn">사끄로몬떼 플라멩꼬 단독 + 야경투어: 420 €</p>
                        <p>★★옵션2</p>
                        <p>그라나다의 전통적인 Cueva La Comino에서 펼쳐지는 생생한 시내 동굴 플라멩코 공연! 💃🔥 
                        정열적인 춤과 감미로운 기타 선율이 어우러지는 특별한 밤을 경험하세요. 가까운 거리에서 느끼는 
                        강렬한 리듬과 깊은 감성이 스페인의 진짜 플라멩코를 선사합니다! 🎶✨</p>
                        <p class="priceBtn">시내 동굴 플라멩꼬 티켓: 29 €</p>
                        <p>★★옵션3</p>
                        <p>그라나다의 신비로운 사크로몬테 동굴에서 펼쳐지는 정열적인 플라멩코 공연,  전통 집시 문화가 살아 숨 쉬는 
                        독특한 무대에서, 강렬한 기타 선율과 열정적인 춤사위를 가까이에서 경험하세요. 스페인의 진짜 플라멩코를 
                        느낄 수 있는 잊지 못할 밤이 될 것입니다! 💃🎶✨</p> 
                        <p class="priceBtn">사끄로몬떼 동굴 플라멩꼬 티켓 : 27 €</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/IuCTBRw7NH_X1-v7vJsdj.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>아랍 목욕탕</h1>
                    <p class="highlight">고대 무어인의 휴식, 그라나다 아랍 목욕탕 체험</p><br>
                    <div class="p_intro_inside">
                        <p>그라나다의 하맘 알 안달루스에서 1시간 30분 동안 전통 하맘의 아늑하고 편안한 분위기를 만끽해 보세요.
                        아랍의 정취를 느끼며 휴식 공간에서 진정한 힐링을 경험해 보세요.</p>
                        <p>★★옵션</p>
                        <p class="priceBtn"> 아랍 목욕탕: 85 €</p>
                        <p>※15분 마사지 포함</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/m8Ztg7hMsM-Le2_2ancu4.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>시에라 네바다</h1>
                    <p class="highlight">대자연 속으로! 시에라 네바다 환상 투어</p><br>
                    <div class="p_intro_inside">
                        <p>스페인의 장엄한 시에라 네바다에서 현지 산악 가이드와 함께하는 특별한 등산 투어! ⛰️🏔️ 안전하고 전문적인
                        안내와 함께 숨 막히는 절경, 신비로운 고산지대의 자연을 직접 체험하세요. 초보자부터 숙련된 등반가까지 
                        맞춤형 코스로 잊지 못할 모험을 선사합니다! 🚶‍♂️🌿</p>
                        <p>★★옵션</p>
                        <p class="priceBtn"> </p>
                        
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/4wrhqJTyRtIburV3E0NIl.jpg" class="intro_img"/>
            </section>

            <section class="intro1">
                <div class="intro_inside">
                    <h1>와이너리 투어</h1>
                    <p class="highlight">햇살 가득한 포도밭에서 즐기는 그라나다 와이너리 투어</p><br>
                    <div class="p_intro_inside">
                        <p>스페인 최고 해발의 와이너리, 시에라 네바다의 맑은 공기와 장엄한 풍경 속에서 최상급 와인을 맛보며, 
                        포도밭과 와인 양조 과정까지 깊이 있게 경험하세요. 
                        자연과 와인이 어우러진 이곳에서 잊지 못할 미식 여행을 떠나보세요! 🍇✨</p>
                        <p>★★옵션</p>
                        <p class="priceBtn"> 와이너리: 18 €</p>
                        <p>※토, 일 11시 영어, 와인 3종류 테이스팅
                        이벤트가 있는 경우, 진행 여부 확인 필요, 
                        와이너리까지 차량 이동 불포함</p>
                    </div>   
                </div>
                <img src="https://cdn.gamma.app/mwicoyhynnxyvr3/generated-images/sXq-tg9OaUVS6995wQqFS.jpg" class="intro_img"/>
            </section>
        </section>
    `


}

export default Granada;