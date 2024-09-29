import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: 'ko',
    resources: {
        ko: {
            translation: {
                start: "검사 시작!",
                name: "MBTI 테스트",
                intro: "당신의 MBTI는 무엇인가요?\n간단한 테스트를 통해 알아보세요!",
                q1: "당신은 파티에서",
                q1A: "낯선 사람들도 포함 많은 사람들과 어울림",
                q1B: "소수의 아는사람들과 어울림",
                q2: "당신은 더",
                q2A: "이상적인 것보다 현실적",
                q2B: "현실적인 것보다 이상적",
                q3: "더 싫은 것",
                q3A: "사색하는 일을 하는 것",
                q3B: "동일한 일 반복하는 것",
                q4: "감동 받는 부분",
                q4A: "원칙",
                q4B: "감정",
                q5: "더 매료 되는 부분",
                q5A: "설득력 있는 것",
                q5B: "감동적인 것",
                q6: "선호하는 일 방식",
                q6A: "마감일 맞추어 업무 진행",
                q6B: "목표기한 없이 업무 진행",
                q7: "일반적으로 선택하는 방법",
                q7A: "주의 깊게 선택",
                q7B: "다소 충동적으로 선택",
                q8: "파티에서 당신은",
                q8A: "에너지가 증가한 채로 늦게 집 가기",
                q8B: "에너지가 감소한 채로 일찍 집 가기",
                q9: "더 매료되는 사람 유형",
                q9A: "합리적인 사람",
                q9B: "상상력이 풍부한 사람",
                q10: "더 관심 있는 주제",
                q10A: "현실적인 것",
                q10B: "가능성 있는 것",
                q11: "다른 사람 판단 할 때, 더 영향 받는 부분",
                q11A: "상황보다 법",
                q11B: "법 보다 상황",
                q12: "다른 사람 다가갈 때, 당신의 성향",
                q12A: "객관적인 편",
                q12B: "개인적인 편 (감성적)",
                q13: "당신은 더",
                q13A: "시간을 엄수하는 편",
                q13B: "여유롭게 하는 편",
                q14: "다음 중 어떤 것이 더 거슬리는 지",
                q14A: "미완성 된 상태",
                q14B: "완성된 상태",
                q15: "친구 또는 직장동료 사이에서",
                q15A: "소식을 즉각적으로 전달받는 편",
                q15B: "소식에 뒤쳐져 있는 편",
                q16: "보통적인 일을 할 때 당신은 더",
                q16A: "평소처럼 하는 편",
                q16B: "자신만의 방식으로 하는 편",
                q17: "작가의 작성 방식은",
                q17A: "뜻을 분명히 표현하고 의미하는 것",
                q17B: "비유를 사용하여 더 표현하는 것",
                q18: "어떤 것에 더 끌리는지",
                q18A: "사고의 일관성",
                q18B: "조화로운 인간관계",
                q19: "어떤 것을 결정하는 게 더 편한지",
                q19A: "논리적인 판단",
                q19B: "가치 판단",
                q20: "어떤 상태를 원하는지",
                q20A: "결정되고 확정된 상태",
                q20B: "미결정되고 불확실한 상태",
                q21: "당신은 더",
                q21A: "진지하고 결단력 있게 행동하는 편",
                q21B: "느긋하게 행동하는 편",
                q22: "전화할 때 당신은",
                q22A: "대부분 말이 다 된다고 의심하지 않는 편",
                q22B: "말할 것을 연습하는 편",
                q23: "사실을 설명할 때",
                q23A: "사실 그대로 설명",
                q23B: "원칙을 예를 들어 설명하는 편",
                q24: "공상가에 대한 생각은",
                q24A: "다소 귀찮은 편",
                q24B: "매혹적인 편",
                q25: "당신은 더 자주",
                q25A: "냉정한 사람",
                q25B: "따뜻한 마음을 가진 사람",
                q26: "어느 것이 나쁜 것",
                q26A: "부당한 것",
                q26B: "무자비한 것",
                q27: "대개 사건들을 어떻게 처리",
                q27A: "주의 깊은 선택과 결정",
                q27B: "무작위로 우연히 처리",
                q28: "더 나은 느낌",
                q28A: "구매한 것에 대해",
                q28B: "구매할 수 있는 옵션에 대해",
                q29: "함께있을 때",
                q29A: "대화를 시작하는 편",
                q29B: "다가오길 기다리는 편",
                q30: "상식적인 질문 횟수",
                q30A: "좀 처럼 질문하지 않는 것",
                q30B: "자주 질문하는 것",
                q31: "어린이에게 부족한 특징",
                q31A: "자기자신의 자기개발",
                q31B: "충분히 상상력을 발휘",
                q32: "결정을 내릴 때 당신은 어떤 것이 더 편한 지",
                q32A: "기준",
                q32B: "감정",
                q33: "당신은 더",
                q33A: "단호한 편",
                q33B: "온화한 편",
                q34: "어떤 능력이 더 존경",
                q34A: "조직하고 체계적으로 일하는 능력",
                q34B: "적응하고 어떻게든 일을 처리하는 능력",
                q35: "어떤 가치가 더 중요한지",
                q35A: "한계나 경계가 없는 것을 의미",
                q35B: "개방적인 것",
                q36: "새롭고 루틴이 아닌 상호작용",
                q36A: "자극적이고 에너지를 공급",
                q36B: "에너지를 소모하고 체력 저하",
                q37: "당신은 더 자주",
                q37A: "실용적인 유형",
                q37B: "공상적인 유형",
                q38: "당신은 더 자주",
                q38A: "다른 사람들이 어떻게 유용한지를 보는 편",
                q38B: "다른 사람들이 어떻게 보이는지를 보는 편",
                q39: "어떤 것이 더 만족스러운지",
                q39A: "문제를 철저히 논의하는 것 ", 
                q39B: "문제에 한가지 결론을 내리는 것",
                q40: "어떤 것이 당신을 더 지배하는 지",
                q40A: "머리",
                q40B: "마음",
                q41: "어떤 종류의 작업이 더 편안한 지",
                q41A: "계약된 작업",
                q41B: "일시적인 기반으로 하는 작업",
                q42: "무엇을 주로 찾는지",
                q42A: "체계적인 것",
                q42B: "우연한 것",
                q43: "더 선호 하는지",
                q43A: "짧은 연락을 하는 많은 친구",
                q43B: "길게 연락하는 적은 수의 친구",
                q44: "어떤 것을 더 중요시 하는지",
                q44A: "사실",
                q44B: "원칙",
                q45: " 어떤 것에 더 관심 있는 지",
                q45A: "생산과 유통",
                q45B: "디자인과 연구",
                q46: "더 칭찬으로 들리는 말인지",
                q46A: "논리적인 사람",
                q46B: "감성적인 사람",
                q47: "스스로 무엇을 더 중요하게 여기는지",
                q47A: "변함 없는 편",
                q47B: "헌신적인 편",
                q48: "다음 중 어떤 진술을 더 선호",
                q48A: "최종적이고 변경할 수 없는 진술",
                q48B: "임시이며 예비적인 진술",
                q49: "어떤 상태에서 더 편안한 지",
                q49A: "결정을 한 후",
                q49B: "결정을 내리기 전",
                q50: "어떤 성향이 더 강한 지",
                q50A: "쉽게 그리고 길게 낯선 사람들과 말하는 편",
                q50B: "낯선 사람들과 이야기할 말이 별로 없는 편",
                q51: "당신은 더 많이 믿는 편이 어디에 기반하는 지",
                q51A: "경험",
                q51B: "직감",
                q52: "당신은 더",
                q52A: "실용적",
                q52B: "독창적",
                q53: "어떤 사람이 더 칭찬을 받을 만한 지",
                q53A: "분명한 이유를 가진 사람",
                q53B: "강한 감정을 가진 사람",
                q54: "당신은 더",
                q54A: "공정한 마음가짐을 가진 편",
                q54B: "공감적인 마음가짐을 가진 편",
                q55: "주로 다음 중 어떤 것이 더 선호",
                q55A: "모든 것이 잘 정리",
                q55B: "일어나게 두는 것",
                q56: "관계에서 대부분의 일은 어떻게 진행되어야 하는지",
                q56A: "재협상 가능해야 하는 편",
                q56B: "무작위로 우연히 환경에 따라",
                q57: "전화벨이 울릴 때 당신은 어떻게 행동",
                q57A: "가장 먼저 전화를 받으려고 서둘러야 하는 편",
                q57B: "다른 누군가가 받기를 기대하는 편",
                q58: "어떤 것을 가장 소중히 여기는지",
                q58A: "강한 현실감",
                q58B: "생동감 넘치는 상상력",
                q59: "당신은 어떤 것에 더 매료",
                q59A: "기본적인 원리",
                q59B: "은유적인 면",
                q60: "어느 것이 더 큰 오류",
                q60A: "너무 감정적",
                q60B: "너무 객관적",
                q61: "당신의 성향은 어떤지",
                q61A: "강심장인편",
                q61B: "마음이 연약한 편",
                q62: "어떤 상황이 더 당신을 끄는 지",
                q62A: "체계적이고 일정이 잡힌 상황",
                q62B: "체계 없고 일정이 없는 상황",
                q63: "어떤 성격의 사람이 더 가까운지",
                q63A: "규칙적이고 변덕 없는 편",
                q63B: "변덕스러우면서 규칙을 따르지 않는 편",
                q64: "어떤 성향을 가지고 있는지",
                q64A: "다가가기 쉬운 편",
                q64B: "속마음을 드러내지 않는 편",
                q65: "더 선호하는 작문 법",
                q65A: "더 구체적인 것",
                q65B: "더 비유적인 것",
                q66: "더 어려운 것은 무엇인지",
                q66A: "다른 사람들과 공감하는 것",
                q66B: "다른 사람들을 활용하는 것",
                q67: "자신에게 바라는 능력",
                q67A: "명쾌한 이성의 능력",
                q67B: "강인한 동정심",
                q68: "어느 것이 더 큰 결점인지",
                q68A: "편견 없이 대하는 것",
                q68B: "비판적인 것",
                q69: "어떤 상황을 더 선호하는지",
                q69A: "계획된 상황",
                q69B: "계획되지 않은 상황",
                q70: "어떤 성향을 가지고 있는지",
                q70A: "신중한 편",
                q70B: "즉흥적인 편",
                entj: "지도자형. 비전을 가지고 사람들을 활력적으로 이끌어가는 사람들.",
                enfj: "언변능숙형. 타인의 성장을 도모하고 협동하는 사람들.",
                esfj: "친선도모형. 친절과 현실감을 바탕으로 타인에게 봉사하는 사람들.",
                estj: "사업가형. 사무적, 실용적, 현실적으로 일을 많이 하는 사람들.",
                entp: "발명가형. 풍부한 상상력을 가지고 새로운 것을 도전하는 사람들.",
                enfp: "스파크형. 열정적으로 새로운 관계를 만드는 사람들.",
                esfp: "사교적인 유형. 분위기를 고조시키는 우호적 사람들.",
                estp: "수완 좋은 활동가형. 친구, 운동, 음식 등 다양한 활동을 선호하는 사람들.",
                intp: "아이디어 뱅크형. 비평적인 관점을 가지고 있는 뛰어난 전략가들.",
                infp: "잔다르크형. 이상적인 세상을 만들어가는 사람들.",
                isfp: "성인군자형. 따뜻한 감성을 갖고 있는 겸손한 사람들.",
                istp: "백과사전형. 논리적이고 뛰어난 상향 적응력을 가지고 있는 사람들.",
                intj: "과학자형. 전체적인 부분을 조합하여 비젼을 제시하는 사람들.",
                infj: "예언자형. 사람과 관련된 뛰어난 통찰력을 가지고 있는 사람들.",
                isfj: "임금 뒤편의 권력형. 성실하고 온화하며 협조를 잘하는 사람들.",
                istj: "세상의 소금형. 한 번 시작한 일은 끝까지 해내는 사람들.",
                toMenu: "다시 테스트하기"
            }
        },
        vn: {
            translation: {
                start: "Bắt đầu!",
                name: "Kiểm tra MBTI",
                intro: "MBTI của bạn là gì?\nHãy làm một bài kiểm tra đơn giản để tìm hiểu!",
                q1: "Trong bữa tiệc, bạn sẽ ",
                q1A: "Giao tiếp với nhiều người, kể cả người lạ",
                q1B: "Giao tiêp với vài người mà bạn quen biết",
                q2: "Xu hướng nào trong bạn mạnh hơn?",
                q2A: "Thực tế",
                q2B: "Mơ mộng",
                q3: "Tình huống nào khiến bạn cảm thấy tệ hơn?",
                q3A: "Mơ mộng hão huyền",
                q3B: "Làm một việc nhàm chán",
                q4: "Bạn thấy ấn tượng bởi",
                q4A: "Nguyên tắc",
                q4B: "Cảm xúc",
                q5: "Bạn có xu hướng nghiêng về",
                q5A: "Lý trí",
                q5B: "Tình cảm",
                q6: "Bạn thích làm việc hơn khi",
                q6A: "Theo thời hạn",
                q6B: "Làm khi nào cũng được",
                q7: "Bạn có xu hướng lựa chọn ",
                q7A: "Làm một cách cẩn thận",
                q7B: "Làm một cách sôi nổi",
                q8: "Tại các buổi gặp mặt, bạn sẽ",
                q8A: "Về trễ, càng về sau càng nhiều năng lượng",
                q8B: "Về càng sớm càng tốt",
                q9: "Tuýp người nào sẽ thu hút bạn hơn?",
                q9A: "Người nhạy cảm",
                q9B: "Người giàu trí tưởng tượng",
                q10: "Bạn quan tâm nhiều hơn đến",
                q10A: "Những việc thực tế xảy ra",
                q10B: "Những việc có thể xảy ra",
                q11: "Khi đánh giá người khác, bạn bị ảnh hưởng nhiều hơn bởi",
                q11A: "Dựa theo qui định, luật lệ",
                q11B: "Hoàn cảnh",
                q12: "Khi tiếp cận người khác, bạn có xu hướng ",
                q12A: "Khách quan",
                q12B: "Chủ quan",
                q13: "Bạn có xu hướng",
                q13A: "Đúng giờ",
                q13B: "Nhàn nhã",
                q14: "Bạn cảm thấy lo lắng khi",
                q14A: "Việc chưa hoàn thành",
                q14B: "Việc đã hoàn thành",
                q15: "Trong nhóm xã hội của mình, bạn thường",
                q15A: "Nắm bắt thông tin của mọi người",
                q15B: "Thường biết thông tin sau",
                q16: "Khi làm việc, bạn thường",
                q16A: "Làm cách mọi người thường làm",
                q16B: "Làm theo cách của riêng mình",
                q17: "Nhà văn nên viết ",
                q17A: "Nói thẳng điều định nói",
                q17B: "Dùng nhiều câu chuyện để mình họa cho điều họ định nói",
                q18: "Điều nào hấp dẫn bạn hơn",
                q18A: "Sự nhất quán về tư duy, suy nghĩ",
                q18B: "Sự hòa hợp trong các mối quan hệ con người",
                q19: "Bạn cảm thấy thoải mái hơn khi đưa ra nhận xét",
                q19A: "Một cách logic",
                q19B: "Một cách có ý nghĩa, giá trị",
                q20: "Bạn thích những điều",
                q20A: "Được định trước",
                q20B: "Chưa được quyết định",
                q21: "Bạn là một người ",
                q21A: "Nghiêm túc và quyết đoán",
                q21B: "Thoải mái, dễ chịu",
                q22: "Khi có điện thoại gọi đến",
                q22A: "Hiếm khi băn khoăn với điều định nói",
                q22B: "Chuẩn bị trước những điều định nói",
                q23: "Các sự việc, sự kiện ",
                q23A: "Bản thân nó giải thích cho chính nó",
                q23B: "Nó là bằng chứng giải quyết các quy tắc, quy luận",
                q24: "Những người có tầm nhìn xa ",
                q24A: "Thường gây khó chịu",
                q24B: "Khá thú vị",
                q25: "Bạn có là người ",
                q25A: "Có cái đầu lạnh",
                q25B: "Có trái tim ấm",
                q26: "Điều tệ hơn là ",
                q26A: "Không công bằng",
                q26B: "Tàn nhẫn",
                q27: "Bạn thường để một việc xảy ra ",
                q27A: "Theo sự lựa chọn và cân nhắc kĩ lưỡng",
                q27B: "Diễn ra ngẫu nhiên, tự nhiên",
                q28: "Bạn cảm thấy thoải mái hơn khi",
                q28A: "Đã mua một thức gì đó",
                q28B: "Có khả năng mà lựa chọn để mua",
                q29: "Trong công ty, bạn là ",
                q29A: "Khởi xướng các câu chuyện",
                q29B: "Đợi người khác khởi xướng để nói chuyện",
                q30: "Những việc xảy ra, bạn sẽ ",
                q30A: "Tin tưởng và không nghi ngờ",
                q30B: "Xem xét tính đúng đắn của vấn đề",
                q31: "Trẻ em thường không làm ",
                q31A: "Tự mình phát huy hết năng lực, tự giúp mình",
                q31B: "Thoải mãn hết trí tưởng tượng",
                q32: "Khi đưa ra quyết định, bạn có cảm thấy thoải mái hơn với",
                q32A: "Các tiêu chuẩn, quy định",
                q32B: "Cảm xúc, cảm nhận",
                q33: "Bạn là người ",
                q33A: "Chắc chắn hơn là dịu dàng",
                q33B: "Dịu dàng hơn là chắc chắn",
                q34: "Bạn ngưỡng mộ hơn ",
                q34A: "Khả năng tổ chức mà làm việc có phương pháp",
                q34B: "Khả năng thích ứng trước mọi tình huống",
                q35: "Bạn đặt giá trị nhiều hơn ở",
                q35A: "Sự chắc chắn",
                q35B: "Sự cởi mở",
                q36: "Tương tác với người lạ sẽ làm cho bạn ",
                q36A: "Thấy kích thích và hào hứng",
                q36B: "Thấy kích thích và hào hứng",
                q37: "Bạn là người ",
                q37A: "Người thực tế",
                q37B: "Người có khả năng tưởng tượng phong phú",
                q38: "Bạn giống cái nào hơn?",
                q38A: "Có thể làm được việc gì hữu ích",
                q38B: "Xem người khác sẽ nghĩ và cảm nhận như thế nào",
                q39: "Điều gì bạn thích thú hơn?",
                q39A: "Thảo luận một vân đề kĩ lưỡng, triệt để", 
                q39B: "Đạt được thỏa thuận, sự nhất trí về vấn đề",
                q40: "Bạn đưa ra quyết định dựa vào",
                q40A: "Cái đầu",
                q40B: "Trái tim",
                q41: "Bạn thích làm việc khi",
                q41A: "Được giao trọn gói, làm xong hết rồi bàn giao",
                q41B: "Công việc làm hàng ngày, theo lịch",
                q42: "Bạn có xu hướng tìm kiếm ",
                q42A: "Theo trật tự, thứ tự",
                q42B: "Ngẫu nhiên",
                q43: "Bạn thích có",
                q43A: "Nhiều bạn bè với mức độ tiếp xúc ngắn gọn",
                q43B: "Một vài bạn thân với mức độ tiếp xúc sâu",
                q44: "Điều gì có giá trị hơn?",
                q44A: "Sự kiện, thông tin",
                q44B: "Nguyên lí, nguyên tắc",
                q45: " Bạn cảm thấy hứng thú hơn khi",
                q45A: "Sản xuất và phân phối",
                q45B: "Thiết kế, nghiên cứu",
                q46: "Lời khen nào hay hơn",
                q46A: "Một người có logic rất tốt.",
                q46B: "Một người rất tình cảm, tinh tế.",
                q47: "Bạn có đánh giá cao bản thân mình không",
                q47A: "Kiên định, vững vàng",
                q47B: "Toàn tâm, cống hiến",
                q48: "Bạn thích cái nào hơn",
                q48A: "Một tuyên bố cuối cùng, không thay đổi",
                q48B: "Một tuyên bố dự kiến, ban đầu",
                q49: "Bạn cảm thấy thoải mái khi",
                q49A: "Sau khi đưa ra quyết định",
                q49B: "Trước khi đưa ra quyết định",
                q50: "Bạn có thấy mình",
                q50A: "Dễ dàng bắt chuyện với người lạ",
                q50B: "Có ít điều để nói với người lạ",
                q51: "Bạn có xu hướng tin tưởng vào",
                q51A: "Kinh nghiệm của mình",
                q51B: "Linh cảm của mình",
                q52: "Bạn cho mình là người như thế nào?",
                q52A: "Là người thực tế hơn là khéo léo, mưu trí",
                q52B: "Là người khéo léo, mưu trí hơn là thực tế",
                q53: "Người nào bạn cảm thấy đáng trân trọng hơn",
                q53A: "Một người giàu lý trí",
                q53B: "Một người giàu cảm xúc",
                q54: "Bạn có xu hướng trở thành",
                q54A: "Công bằng, vô tư",
                q54B: "Thông cảm, đồng cảm",
                q55: "Bạn nghĩ điều tốt hơn là",
                q55A: "Được chuẩn bị trước",
                q55B: "Diễn ra tự nhiên",
                q56: "Trong một mối quan hệ, điều tốt nhất là",
                q56A: "Trong một mối quan hệ, điều tốt nhất là",
                q56B: "Nên để mọi việc diễn ra ngẫu nhiên theo điều kiện hoàn cảnh",
                q57: "Khi có một cuộc gọi",
                q57A: "Là người đầu tiên nhấc máy để nghe",
                q57B: "Hi vọng có người khác sẽ nhấc máy",
                q58: "Bạn nghĩ mình là người",
                q58A: "Cảm nhận tốt các yếu tố thực tế",
                q58B: "Trí tưởng tượng phong phú, rực rỡ",
                q59: "Bạn bị thu hút nhiều hơn bởi",
                q59A: "Các nguyên tắc, nguyên lý cơ bản",
                q59B: "Trí tưởng tượng phong phú, rực rỡ",
                q60: "Việc nào không tốt hơn ",
                q60A: "Quá nồng nhiệt, thiết tha",
                q60B: "Quá khách quan",
                q61: "Bạn là người",
                q61A: "Thiết thực, ít bị chi phối bởi tình cảm",
                q61B: "Từ tâm, đa cảm",
                q62: "Tình huống nào hấp dẫn bạn hơn",
                q62A: "Tình huống rõ ràng, có kế hoạch",
                q62B: "Tình huống không xác định, không có kế hoạch",
                q63: "Bạn là người ",
                q63A: "Theo thói quen",
                q63B: "Hay thay đổi",
                q64: "Bạn có xu hướng",
                q64A: "Là người dễ tiếp cận",
                q64B: "Ở mức độ nào đó là người kín đáo",
                q65: "Khi viết văn, bạn thường ",
                q65A: "Viết theo hướng văn chương hơn",
                q65B: "Viết theo số liệu, dữ liệu hơn",
                q66: "Điều gì khó hơn với bạn",
                q66A: "Hiểu và chia sẻ với người khác",
                q66B: "Sử dụng người khác",
                q67: "Bạn mong muốn bản thân có nhiều hơn",
                q67A: "Lí trí suy xét rõ ràng",
                q67B: "Tình thương, lòng trắc ẩn sâu sắc",
                q68: "Điều gì thấy tệ hơn",
                q68A: "Hành động bừa bãi, không cân nhắc",
                q68B: "Hành động chỉ trích, phê phán",
                q69: "Bạn thích gì hơn",
                q69A: "Sự kiện có kế hoạch trước",
                q69B: "Sự kiện không có kế hoạch trước",
                q70: "Bạn có xu hướng",
                q70A: "Chủ ý hơn là tự phát",
                q70B: "Tự phát hơn là chủ ý",
                entj: "Kiểu lãnh đạo. Những người có năng lượng dẫn dắt mọi người bằng tầm nhìn.",
                enfj: "Kiểu người cho đi. Những người thúc đẩy sự phát triển của người khác và hợp tác.",
                esfj: "Kiểu người quan tâm. Những người phục vụ người khác bằng lòng tốt và sự thực tế.",
                estj: "Kiểu người thực thi. Những người làm nhiều công việc mang tính văn thư, thiết thực và thực tế.",
                entp: "Kiểu người có tầm nhìn. Những người thử những điều mới với trí tưởng tượng phong phú.",
                enfp: "Kiểu người truyền cảm hứng. Những người đam mê tạo ra các mối quan hệ mới.",
                esfp: "Kiểu người biểu diễn. Những người thân thiện làm tâm trạng tươi sáng hơn.",
                estp: "Kiểu người thực tế. Những người thích các hoạt động khác nhau như bạn bè, tập thể dục, ăn uống, v.v.",
                intp: "Kiểu người tư tưởng. Các nhà chiến lược xuất sắc với quan điểm phê phán.",
                infp: "Kiểu người hòa giải. Những người tạo ra một thế giới lý tưởng.",
                isfp: "Kiểu người nghệ sĩ. Những người khiêm tốn với sự nhạy cảm ấm áp.",
                istp: "Kiểu người chế tạo. Những người có tư duy logic và có khả năng thích ứng thăng tiến tuyệt vời.",
                intj: "Kiểu nhà khoa học. Những người tập hợp tất cả các phần lại với nhau và trình bày một tầm nhìn.",
                infj: "Kiểu người ủng hộ. Những người có cái nhìn sâu sắc về con người.",
                isfj: "Kiểu người bảo vệ, ",
                istj: "Kiểu người trách nhiệm. Những người hoàn thành một cái gì đó họ bắt đầu.",
                toMenu: "Kiểm tra lại"
            }
        }
    }
});

export default i18n;