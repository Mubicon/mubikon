export function faqaccordion () {

  $('.accordion_item').click(function () {
    $(this).find("p").slideToggle("slow");
  });

}
