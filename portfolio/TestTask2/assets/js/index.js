$('.slick_slader').slick();


// Скрытый текст Кнопка читать

$('.slick__text').readmore({
    maxHeight: 100,
    heightMargin: 50,
    moreLink: '<a href="#" class="slick__readmore">Читати...</a>',
    lessLink: '<a href="#" class="slick__readmore">Сховати</a>'
});

// Меню на мобильной версии
$(".mobil__nav__tach").click(function(){
    $(".mobil__nav__header__box").toggleClass("mobil__nav__bg__white")
    $(".mobil__nav__button").toggleClass("mobil__nav__close");
    $(".mobil__nav__button").toggleClass("mobil__nav__open");
    $(".mobil__menu").toggleClass("open")
});


//  Поворот меню при скроле

$(document).on("scroll", function(){
    let lengthScroll = $(document).scrollTop();
    console.log(lengthScroll)
    if (lengthScroll>200){
        $(".nav__bg").addClass("nav__bg__scroll")
    }else{
        $(".nav__bg").removeClass("nav__bg__scroll")
    }
})