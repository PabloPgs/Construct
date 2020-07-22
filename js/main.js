// slider
$('.banner-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   nextArrow: '<i class="banner-slider__arrow banner-slider__arrow-next fas fa-chevron-right"></i>',
   prevArrow: '<i class="banner-slider__arrow banner-slider__arrow-prev fas fa-chevron-left"></i>',
   responsive: [{
      breakpoint: 800,
      settings: {
         arrows: false,
      }
   }]
})

// filter
const grid = $('.works__filter-items').isotope({
   itemSelector: '.works__filter-item',
   percentPosition: true,
   masonry: {
      columnWidth: 25,
      gutter: 10,
   }
})
setTimeout(() => {
   $('.filter__btn:first').trigger('click')
}, 1000)
$('.filter__btn').on('click', function () {

   $('.filter__btn').removeClass('filter__btn--active')
   $(this).addClass('filter__btn--active')

   filter = $(this).attr('data-filter')

   grid.isotope({
      filter: `${filter}`
   })
})

// burger 
$('.burger').on('click', () => {

   $('.main-nav').toggleClass('main-nav--active')

})