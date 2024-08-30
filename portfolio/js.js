$(document).ready(function () {
    // 페이지 로딩 시 해가 우측으로 이동하면서 사라짐
    $('.sun').addClass('move-right');

    // 해가 완전히 사라질 즈음에 별이 나타남
    setTimeout(function () {
        $('.star').addClass('move-left');
    }, 1000); // 별이 1초 후에 나타남

    // 별이 나타난 후 첫 번째 이미지 사라지고 두 번째 이미지 나타남
    setTimeout(function () {
        $('.light').fadeOut(2000);
        $('.dark').fadeIn(2000);
    }, 2000); // 2초 후 이미지 전환

    $('.main').css({ 'display': 'none' })



    $('.star').click(function () {
        $('.intro').css({ 'display': 'none' })
        $('.main').css({ 'display': 'flex' })

        // .profile 요소를 보여줌
        $('.profile').fadeIn();

        // 애니메이션이 이미 실행되었는지 확인 (중복 실행 방지)
        if (!$('.profile').hasClass('animated')) {
            $('.profile').addClass('animated');

            // canvas 애니메이션 실행
            $('.profile .canvas').each(function () {
                const imageContainer = $(this).siblings('.image-container');
                const imageSrc = "path_to_image.png"; // 이미지 경로

                const border = 20;
                const duration = 2500;

                const canvas = $(this)[0];
                const ctx = canvas.getContext('2d');
                const targetPercent = $(this).data('percent');
                const color = $(this).data('color');
                const posX = canvas.width / 2;
                const posY = canvas.height / 2;
                const onePercent = 360 / 100;
                const result = onePercent * targetPercent;
                const radius = (canvas.width / 2) - (border / 2);
                let percent = 0;
                ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';

                function arcMove() {
                    let degrees = 0;
                    let startTime = null;

                    function animate(timestamp) {
                        if (!startTime) startTime = timestamp;
                        let progress = (timestamp - startTime) / duration;
                        progress = Math.min(1, progress);
                        degrees = progress * result;

                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        percent = Math.floor(degrees / onePercent);

                        ctx.beginPath();
                        ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                        ctx.strokeStyle = '#000000';
                        ctx.lineWidth = border;
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.strokeStyle = color;
                        ctx.lineWidth = border;
                        ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                        ctx.stroke();

                        if (percent >= targetPercent) {
                            imageContainer.html(`<img src="${imageSrc}" alt="Image">`);
                        }

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    }
                    requestAnimationFrame(animate);
                }

                arcMove();
            });
        }



    })


    $('.category').on('click', function () {
        var i = $(this).index()

        $('.cube>div').removeClass('on')
        $('.cube>div').eq(i).addClass('on')
        // 다른 모든 카테고리에서 active 클래스 제거
        $('.category').removeClass('active');

        // 클릭된 카테고리에 active 클래스 추가
        $(this).addClass('active');
    });

    const $cube = $('.cube');
    const $menuItems = $('.menu li');

    // 초기 상태 설정
    let currentRotation = 0;

    $menuItems.on('click', function() {
        // 클릭된 카테고리 인덱스에 따라 회전 각도 계산
        const index = $(this).index();
        currentRotation = -90 * index;

        // 큐브 회전 적용
        $cube.css('transform', `rotateY(${currentRotation}deg)`);

        // 모든 메뉴 아이템에서 active 클래스 제거하고 클릭된 아이템에 추가
        $menuItems.removeClass('active');
        $(this).addClass('active');
    });


});