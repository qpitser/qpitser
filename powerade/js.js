$(document).ready(function(){



    // .submit를 클릭했을때, popUp 이 보인다. 

    $('.submit').click(function(){

        $('.popUp').show();
        $('.popUp div').removeClass('on')
        $('.popUp div.map001').addClass('on')
    });


// map_txt의 li를 클릭했을때, popUp이나타나고 해당 div가 보인다.

$('.map_txt ul li').click(function(){

    var i= $(this).index()
    console.log(i);
    $('.popUp').show()
    $('.popUp div').removeClass('on')
    $('.popUp div.map00'+(i+2)).addClass('on')




})





    // .popUp span 을 클릭했을때, popUp 이 사라져라.

    $('.popUp span').click(function(){

        // $('.popUp').hide();
        $(this).parent('.popUp').hide()
    })
})