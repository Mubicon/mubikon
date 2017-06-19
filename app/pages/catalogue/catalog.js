export function myclose () {

  $(".filter-item").click(function(){

    if ($(this).hasClass("clicked")) {

      var href = $(this).data("href");
      $(this).attr("href", href).removeClass("clicked");

    } else {

      $(this).addClass("clicked").attr("data-href", $(this).attr("href") );
      $(this).attr("href", " href крестика ");

    }
  });

}
