$('#formations').hover(function(){
    console.log("this is working");
    $('.formations').addClass("formationsHover");
    $('.formations').css({
        'height' :'auto',
        'transition':'1 s'
    });
});



$( document ).ready(function() {
    $('.inner-formations').mouseleave(function(){
        $('.formations').removeClass("formationsHover");
    })
});


