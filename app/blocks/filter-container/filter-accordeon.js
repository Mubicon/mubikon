export default function () {
  // ##########################
  // Открытие фильтра
  // ##########################
  $("[data-accordion-target]").click(function (e) {
    var target = $(this).data('accordion-target');

    if ( $(this).hasClass('active') ) {

      e.preventDefault();
      $(this).removeClass('active').siblings().removeClass('active');
      $(target).removeClass('active');

    } else {

      $(this).addClass('active').siblings().removeClass('active');
      $(target).addClass('active').siblings().removeClass('active');

    }
  });

  // ##########################
  // Закрытие фильтра
  // ##########################
  $("[data-accordion-action]").click(function(){
    if ( $(this).data('accordion-action') === 'close' ) {
      $("[data-accordion-target], .feed-control__selectbox").removeClass('active');
      $(this).parents('.filter-container__accordion').removeClass('active');
    }
  });

  // ##########################
  // Закрытие выпадающего списка
  // ##########################
  $(".feed-control .filter-label").click(function(e){
    e.preventDefault();
    var value = $(this).text(),
        parent = $(this).parents('.filter-container__accordion').attr('id');
    $('[data-accordion-target="#' + parent + '"]').find('.selectbox__select').text(value);
    $('.filter-container__accordion-close:eq(0)')[0].click();
  });
}
