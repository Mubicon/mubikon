export function faqaccordion () => {

  $('.accordion_item').click(function () {
    $(".accordion_item p").slideToggle("slow");
  });

}
