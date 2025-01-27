const data = {
    headerArea:{
        header_title:"HoneyMoon Resort",
        header_menu:[
            {destination: "Barcelona", href:"barcelona"},
            {destination:"Sevilla", href: "sevilla"},
            {destination:"Malaga",href:"malaga"},
            {destination:"Granada",href:"granada"},
            {destination:"Madrid",href:"madrid"}, 
            {destination:"North",href:"north"},
            {destination:"Special",href:"special"}
        ],
        introduce1: "Book Your Dream",
        introduce2: "Dreams come true",
        intro_desc:`꿈같은 신혼여행, 스페인으로 떠나보세요!
                    뜨거운 태양 아래 펼쳐진 지중해의 낭만, 역사와 문화가 살아 숨 쉬는 거리, 그리고 세계적으로 유명한 미식의 천국. 스페인은 모든 신혼부부의 꿈을 현실로 만들어 줄 완벽한 여행지입니다.
                    이제, 둘만의 특별한 순간을 스페인에서 만들어 보세요.
지금 바로 신혼여행 상담을 신청하시고, 평생 잊지 못할 로맨스를 시작하세요!

스페인으로의 신혼여행, 그 특별한 여정을 함께 설계해드립니다.`,

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
            1. 프라도 미술관 <br>
            2. 마드리드 야경투어 <br>
            3. 프라도+시내투어 <br>
            4. 톨레도 세고비아투어 <br>
            5. 왕궁
            `,
            tour1:"프라도미술관",
            tour1_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/N2Cd/5PELSQxK52.jpg",
            tour1_desc1:`그림에는 정해진 것이 없습니다. 그 누구도 그림의 해설을 정확하게 해내지 못합니다.  저희의 프라도 미술관 투어는 누군가의 해석을 베껴서 설명하지 않고 함께 그림을 읽고 감상할 수 있도록 여행자 분들이 직접 그림을 읽으실 수 있도록 도와드립니다.<br><br>`,
            tour1_desc2:`
                        **예약가능일: 매일(일요일 제외)<br>
                        - 편안한 투어를 위해 수신기를 사용합니다. 개인 이어폰을 지참하시어 투어에 참여해 주시기 바랍니다. <br>
                        - 투어 중 프라도 미술관에 가이드와 함께 입장합니다. <br>
                        - 프라도 미술관의 규정상 미술관 내 사진을 찍으실 수 없으며, 배낭 등 큰 가방은 맡기셔야 합니다. <br><br>
                        ★★옵션
                        `,
            tour1_price1:"★프라도 2시간: 20 €",
            tour1_price2:"★프라도 3시간: 21 €",
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            tour2:"마드리드 야경투어",
            tour2_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/11KW/K8tGdeYmkb.jpg",
            tour2_desc1:`
                        스페인의 중심, 스페인 500년의 역사 마드리드. 🇪🇸📜<br>
                        스페인 전체 역사를 한 눈에 이해할 수 있는 깊이 있는 투어를 함께합니다.<br>
                        마드리드 찐 가이드가 들려주는 진짜 마드리드 이야기! 📚🗣️<br>
                        마드리드의 시작부터 현재까지, 마드리드의 구석구석을 즐거운 이야기들과 함께합니다. ✨<br><br>`,
            tour2_desc2:`
            ★★옵션<br>
            `,
            tour2_price1:"★야경(1시간30분): 18 €",
            tour2_price2:"★야경+타파스안내(저녁식사장소 안내, 타파스비용 불포함): 20 €",

            //////////////////////////////////////////////////////////////////////////////////
            tour3:"톨레도+세고비아",
            tour3_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/RBuf/SjU6riX2DD.jpg",
            tour3_desc1:`톨레도와 세고비아 명소와 빈티지한 골목들,
                        곳곳에 숨은 역사의 수수께끼, 로컬들의 숨은 곳까지!
                        두 도시의 속살을 드러내 안내합니다.
                        이국적이고 고풍스러우며 아직도 살아 숨 쉬는 듯고스란히
                        남은 역사의 흔적을 느껴보세요!<br><br>`,
            tour3_desc2:"★★옵션<br>",
            tour3_price1:"★톨레도+세고비아 단체(5인모객기준): 87 €",
            tour3_price2:"★톨레도+세고비아 2인 출발 : 200 €",
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            tour4:"프라도+시내투어",
            tour4_img:"https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/06/24/TUqF/IliYGqlcXB.jpg",
            tour4_desc1:`프라도 미술관에서 세계적인 걸작을 감상하고, 마드리드의 주요 관광지를 탐험하는 종합 투어입니다. 
                        두시간이 짧게 느껴지는 분을 위해 세시간 미술관에서 예술 작품을 감상하고, 
                        푸에르타 델 솔, 마요르 광장 등 마드리드의 활기찬 도시 풍경을 탐험합니다. 
                        스페인의 예술과 현대적 매력을 동시에 느낄 수 있는 완벽한 일정입니다.`,
            tour4_desc2:`
            ★★옵션<br>
            `,
            tour4_price1:"★프라도 2시간+시내 2시간: 37,50 €",
            tour4_price2:"★프라도 3시간+시내 2시간: 39,50 €",
            tour4_price3:"★5유로 추가시 식사장소안내"

        },
        {
            destination:"Norte de España",
            img:"https://cdn.gamma.app/w3rw6z4iovtz56c/generated-images/qGu_mSCfYCywog3WIe2Pb.jpg",
            short_desc:"북부로 떠나볼까요?",
            path: "north"
        },
        {
            destination:"Special",
            img:"https://images.unsplash.com/photo-1631152282084-b8f1b380ccab?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            short_desc:"북부로 떠나볼까요?",
            path: "special"
        },
    ]
};

export default data;