// 이미지 변경 함수
const img_url = [
    'image/img01.jpg',
    'image/img02.jpg',
    'image/img03.jpg',
    'image/img04.jpg',
    'image/img05.jpg',
    'image/img06.jpg',
];

const author = [
    'pascal Elpidio',
    'Jenningje Lutfi',
    'Nina Valentina'
]


$(function () {

    // 년/월/일
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    console.log(year, month, date);

    // html에 날짜 표시
    $('.year').html(year);
    $('.month').html(month);
    $('.date').html(date);
    

        function changeBg() {

            // 0 ~ 2 랜덤값 생성 (이미지 번호)
            let imgNum = Math.floor(Math.random() * 6)
            console.log(imgNum);

            // 이미지 변경
            $('body').css({
                background: `url(image/filter1.png),
                url(${img_url[imgNum]})`
            })
}


// setInterval(함수, 시간)
setInterval(changeBg, 5000);

});

// 응용과제: 이미지를 총 6장으로 추가 랜덤 수정