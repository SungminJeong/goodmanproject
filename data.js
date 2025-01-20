const data = {
    headerArea:{
        header_title:"HoneyMoon Resort",
        header_menu:[
            {destination: "Barcelona", href:"barcelona"},
            {destination:"Sevilla", href: "sevilla"},
            {destination:"Malaga",href:"malaga"},
            {destination:"Granada",href:"granada"},
            {destination:"Madrid",href:"madrid"}, 
            {destination:"North",href:"north"}
        ],
        introduce1: "Book Your Dream",
        introduce2: "Dreams come true",
        intro_desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a leo sit amet sem sagittis auctor nec a lorem. Proin non ipsum tempus, fringilla mi id, consequat erat. Sed varius tristique viverra. Proin dapibus euismod risus in mattis.",

    },
    tourArea:[
        {
            destination:"Barcelona",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/z268L-S30fSG2EE0k6bFX.jpg",
            short_desc:"바르셀로나로 떠나볼까요?",
            path: "barcelona",
            long_desc:"Barcelona is Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a leo sit amet sem sagittis auctor nec a lorem. Proin non ipsum tempus, fringilla mi id, consequat erat. Sed varius tristique viverra. Proin dapibus euismod risus in mattis."
        },
        {
            destination:"Sevilla",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/4oDCFdibORLKIdMY1Hs_U.jpg",
            short_desc:"세비야야로 떠나볼까요?",
            path: "sevilla"
        },
        {
            destination:"Malaga",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/2_aV1gTo-CToRS6ZiYSRk.jpg",
            short_desc:"말라가로 떠나볼까요?",
            path: "malaga"
        },
        {
            destination:"Granada",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/05NS2S4vVkNjOKUbu2MtH.png",
            short_desc:"그라나다로 떠나볼까요?",
            path: "granada",
        },
        {
            destination:"Madrid",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/PGC2Qph3B4q-QFiHjQ_6Q.jpg",
            short_desc:"마드리드드로 떠나볼까요?",
            path: "madrid",
            long_desc: `마드리드는 현대적 인프라를 갖춤과 동시에 역사적인 거리와 장소를 간직하고 있는 도시입니다. 마드리드의 거대한 왕궁이 그 중의 하나에요. 스페인 국립극장, 세계에서 가장 많은 명작을 보유하고 있다는 평을 받는 프라도 박물관, 스페인의 왕비인 소피아(Reina Sofía)의 이름을 따서 지은 국립 소피아 왕비 예술센터가 이에 포함된다.<br><br>
            <span class="city_intro">마드리드 투어 소개:</span><br>
            프라도 미술관 <br>
            마드리드 시내투어 <br>
            톨레도 세고비아투어 <br>
            `,
            tour1:"프라도미술관",
            tour1_desc1:`그림에는 정해진 것이 없습니다. 그 누구도 그림의 해설을 정확하게 해내지 못합니다.  저희의 프라도 미술관 투어는 누군가의 해석을 베껴서 설명하지 않고 함께 그림을 읽고 감상할 수 있도록 여행자 분들이 직접 그림을 읽으실 수 있도록 두시간 동안 도와드립니다.<br><br>`,
            tour1_desc2:`★★투어 코스 
                        만남장소/시간 : <br>
                        프라도 미술관 고야 동상 앞(개별이동) <br>
                        1.고야 동상 앞 미팅<br>
                        2.프라도 미술관 내부 투어 (2시간)<br>
                        3.플랑드르화 - 르네상스 - 바로크 - 낭만주의 - 인상파 순으로 진행됩니다.<br><br>
                        **예약가능일: 매일(일요일 제외)<br>
                        - 필요할 경우 편안한 투어를 위해 수신기를 사용합니다. 개인 이어폰을 지참하시어 투어에 참여해 주시기 바랍니다. <br>
                        - 투어 중 프라도 미술관에 가이드와 함께 입장합니다. <br>
                        - 프라도 미술관의 규정상 미술관 내 사진을 찍으실 수 없으며, 배낭 등 큰 가방은 맡기셔야 합니다. <br>
                        - 입장료는 현지 물가변동에 따라 변경될 수 있습니다. <br>
                        `,
            tour2:"마드리드 시내투어",
            tour2_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/TUqF/IliYGqlcXB.jpg",
            tour2_desc1:`
                        스페인의 중심, 스페인 500년의 역사 마드리드. 🇪🇸📜<br>
                        스페인 전체 역사를 한 눈에 이해할 수 있는 깊이 있는 투어를 함께합니다.<br>
                        마드리드 찐 가이드가 들려주는 진짜 마드리드 이야기! 📚🗣️<br>
                        마드리드의 시작부터 현재까지, 마드리드의 구석구석을 즐거운 이야기들과 함께합니다. ✨<br><br>`,
            tour2_desc2:`
            ★★투어 코스<br>
            ★시벨레스 광장<br>
            ★알칼라 문<br>
            ★솔 광장<br>
            ★마요르 광장<br>
            ★산 미겔 시장<br>
            ★마드리드 왕궁<br>
            `,
            tour3:"톨레도+세고비아",
            tour3_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/RBuf/SjU6riX2DD.jpg",
            tour3_desc1:`톨레도와 세고비아 명소와 빈티지한 골목들,
                        곳곳에 숨은 역사의 수수께끼, 로컬들의 숨은 곳까지!
                        두 도시의 속살을 드러내 안내합니다.
                        이국적이고 고풍스러우며 아직도 살아 숨 쉬는 듯고스란히
                        남은 역사의 흔적을 느껴보세요!<br><br>`,
            tour3_desc2:"",
        },
        {
            destination:"Norte de España",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/qGu_mSCfYCywog3WIe2Pb.jpg",
            short_desc:"북부로 떠나볼까요?",
            path: "north"
        },
    ]
};

export default data;