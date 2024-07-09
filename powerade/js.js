$(document).ready(function(){
    $('section').eq(2).mousemove(function(event){
        $('.view').css({
            left: event.pageX + -50 + 'px',
            top: event.pageY + -30 + 'px'
        }).show(); // 마우스를 움직일 때만 보이도록 설정
    });

    $('.view').mouseleave(function(){
        $(this).hide(); // 마우스가 섹션을 벗어나면 숨기기
    });

    $('.view').click(function(){

        $('section').eq(2).stop().animate()
    })
});
