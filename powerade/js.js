$(document).ready(function(){
    $('section').eq(2).mousemove(function(event){
        $('.view').css({
            left: event.pageX + 15 + 'px',
            top: event.pageY + 15 + 'px'
        });
    });
});
