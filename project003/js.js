$(document).ready(function(){
    $('nav li').click(function(){
        var i = $(this).index()
        console.log(i)

        $('article').removeClass('on')
        $('article').eq(i).addClass('on')
})

    $(window).scroll(function(){
        var sc = $(window).scrollTop()

        for(var i2=0; i2<3; i2++) {
            $('.game').eq(i2).css({'transform' : 'translateZ('+(sc+-(i2*4000)+'px')})


            if (sc>=i2*2500 && sc<(i2+1)*2500){
                $('.game').removeClass('on')
                $('.game').eq(i2).addClass('on')

            }
        }


    })
    
    

})