export default function () {
  $(".filter-item, .feed-control__selectbox").click(function (e) {
    if ( $(this).hasClass('active') ) {
      e.preventDefault();
      $(this).removeClass('active').siblings().removeClass('active');
      $('.filter-container__accordion-close:eq(0)')[0].click();
    } else {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });

  $(".filter-container__accordion-close").click(function(){
    $(".filter-item, .feed-control__selectbox").removeClass('active');
  });

  $(".feed-control .filter-label").click(function(e){
    e.preventDefault();
    var value = $(this).text(),
        parent = $(this).parents('.filter-container__accordion').attr('id');
    $('[href="#' + parent + '"]').find('.selectbox__select').text(value);
    $('.filter-container__accordion-close:eq(0)')[0].click();
  });
}
