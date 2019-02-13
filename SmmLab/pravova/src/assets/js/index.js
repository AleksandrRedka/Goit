
$(document).ready(function () {
  $('.slick').slick()

  // Скрытый текст Кнопка читать

  $('.slick__text').readmore({
    maxHeight: 97,
    heightMargin: 50,
    moreLink: '<a href="#" class="slick__readmore">Читати...</a>',
    lessLink: '<a href="#" class="slick__readmore">Сховати</a>'
  })

  // Скрытый текст на странице О нас on mobil version

  $('.about__us__text').readmore({
    maxHeight: 620,
    heightMargin: 50,
    moreLink: '<a href="#" class="about__us__readmore">Читати...</a>',
    lessLink: '<a href="#" class="about__us__readmore">Сховати</a>'
  })

  // открытие и закрытие Меню на мобильной версии
  $('.mobil__nav__tach').click(function () {
    $('.mobil__nav__header__box').toggleClass('mobil__nav__bg__white')
    $('.mobil__nav__button').toggleClass('mobil__nav__close')
    $('.mobil__nav__button').toggleClass('mobil__nav__open')
    $('.mobil__menu').toggleClass('open')
  })

  //  Поворот  заднего  фона меню при скроле, а также появдение белого фона на HEADER

  $(document).on('scroll', function () {
    let lengthScroll = $(document).scrollTop()
    if (lengthScroll > 200) {
      $('.nav__bg').addClass('nav__bg__scroll')
      $('.nav__tablet').addClass('nav__tablet__white__bg')
      $('.mobil__nav__header__box').addClass('white__bg')
      $('.nav__tablet').addClass('white__bg')
    } else {
      $('.nav__bg').removeClass('nav__bg__scroll')
      $('.mobil__nav__header__box').removeClass('white__bg')
      $('.nav__tablet').removeClass('white__bg')
    }
  })

  // Акардеон на мобильной версии вкладки Послуги
  $('.item__header__tach').click(function () {
    let elementClick = $(this).parent()
    //  открытие елемента
    elementClick
      .toggleClass('item__header__open')
      .next()
      .slideToggle()
    // автоматическое закрытие элементов на которые не был произведен клик
    $('.item__header__tach')
      .parent()
      .not(elementClick)
      .removeClass('item__header__open')
      .next()
      .slideUp()
  })

  // Активность  Pagination на странице Блог
  $('.pagination__page__link').click(function () {
    $(this).addClass('page__active')
    $('.pagination__page__link')
      .not(this)
      .removeClass('page__active')
  })
  // Добавление знака "[...]" для текста статьи блога

  let linkArticle = document.querySelectorAll('.blog__article__text');
  

  for(let item of linkArticle){
    let andLink = document.createElement('a');

    let itemLink=item.previousElementSibling.getAttribute('href');
    
    andLink.innerHTML='[…]'
    andLink.classList.add('blog__article__link')
    andLink.setAttribute('href',`${itemLink}`)
    item.appendChild(andLink)
  }

})
