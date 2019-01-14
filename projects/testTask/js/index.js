
$(document).ready(function(){
    // Accordion
   $(".accordion-body").not(":first").hide();

   $(".accordion-header").click(function(){
       let findArticle = $(this).next(".accordion-body")
       let findWrapper = $(this).closest(".accordion");

       if (findArticle.is(":visible")){
           findArticle.slideUp();
       }
       else{
           findWrapper.find('.accordion-body').slideUp();
           findArticle.slideDown();
       }
   });

//    POP-UP
$('.container-pop-up').hide(0);
$('.pop-up-bg').hide(0);

$('.js-main-button').click(function(){
  $('.pop-up-bg').show(0);
  $('.container-pop-up').fadeIn(300);
  $('.js-main-button').hide(0);
});
$('.close').click(function() {
  $('.pop-up-bg').hide(0);
  $('.container-pop-up').hide(0);
  $('.js-main-button').show(0);
});

});

