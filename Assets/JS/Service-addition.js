$(document).ready(function () {
    var isMobile = window.matchMedia("only screen and (min-width: 992px)");

    if (isMobile.matches) {
        //Conditional script here
        var fixmeTop = $('#Fixed_Top').offset().top;
        var header = $('#header');
        var rows = $('#About_us_top');
        $(window).scroll(function () {
            var currentScroll = $(window).scrollTop();
            if (currentScroll >= fixmeTop) {
                $('#Fixed_Top').css({
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    zIndex: '11111'
                });
                $('#header').css({
                    display: 'none',
                });
                $('#About_us_top').css({
                    marginTop: '5.30rem'
                });
            } else {
                $('#Fixed_Top').css({
                    position: 'static',
                    top: '0',
                    boxShadow: 'none'
                });
                $('#header').css({
                    display: 'block',
                });
                $('#About_us_top').css({
                    marginTop: '0rem'
                });
            }
        });
    }
});