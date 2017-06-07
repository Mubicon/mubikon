/* eslint-disable */
export function tabs () {

  $(document).on("click", "[data-tab-target]", function(e){
    e.preventDefault();

    $(this).addClass("active").siblings().removeClass("active");

    var targetTab = $(this).data("tab-target"),
        tab = $(document).find("[data-tab='" + targetTab + "']"),
        tabGroup = tab.data("tab-group");

    $(document).find("[data-tab-group='" + tabGroup + "']").hide();

    tab.show();
  });

}
