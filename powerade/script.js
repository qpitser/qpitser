$(document).ready(function(){
    $('section').eq(2).mousemove(function(event){
        $('.view').css({
            left: event.pageX + 15 + 'px',
            top: event.pageY + 15 + 'px'
        }).show(); // 마우스를 움직일 때만 보이도록 설정
    });

    $('section').eq(2).mouseleave(function(){
        $('.view').hide(); // 마우스가 섹션을 벗어나면 숨기기
    });
});
