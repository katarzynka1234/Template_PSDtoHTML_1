$(document).ready(function(){


    // *** SCROLL MAGIC plugin ***//
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#icons-box'
    })
    .setClassToggle('#icon', 'animated')
    .setClassToggle('#icon', 'fadeInUp')
    .addTo(controller);


    // ** NEWS UPDATES SECTION //
    // - opreation with button Show more news and Hide more news" ***//
    var btnShowNews = $('#show-more');
    var btnHideNews = $('#hide-more');
    var moreNews = $('.more-updates');

    btnHideNews.css('display', 'none');

    //Show more news //
    btnShowNews.on('click', function() {
        moreNews.css('display', 'block');
        btnShowNews.css('display', 'none');
        btnHideNews.css('display', 'inline');
    });

    // Hide more news //
    btnHideNews.on('click', function() {
        moreNews.css('display', 'none');
        btnShowNews.css('display', 'inline');
        btnHideNews.css('display', 'none');
    });




    // scroll effect - don't work :( //
    // $('.services').on('scroll', function(){
    //      $('#services-icons-box').addClass('animated fadeInUp')
    // });
})
