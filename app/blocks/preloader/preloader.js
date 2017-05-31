export function preloader () {
  var preloaderEl = $(".preloader");

  // Freeze page content scrolling
  function freeze() {
    if($("html").css("position") != "fixed") {
      var top = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
      if(window.innerWidth > $("html").width()) {
        $("html").css("overflow-y", "scroll");
      }
      $("html").css({"width": "100%", "height": "100%", "position": "fixed", "top": -top});
    }
  }

  // Unfreeze page content scrolling
  function unfreeze() {
    if($("html").css("position") == "fixed") {
      $("html").css("position", "static");
      $("html, body").scrollTop(-parseInt($("html").css("top")));
      $("html").css({"position": "", "width": "", "height": "", "top": "", "overflow-y": ""});
    }
  }

  // Show Preloader
  function preloaderShow() {
    freeze();
    preloaderEl.show(0, function(){
      $(this).addClass("active");
    });
  }

  // Hide Preloader
  function preloaderHide() {
    preloaderEl.removeClass("active");
    setTimeout(function(){
      preloaderEl.hide();
      unfreeze();
    }, 400);
  }

  // Preloader Work
  $("a[href]").click(function(e){
    e.preventDefault();
    preloaderShow();
    setTimeout(function(){
      preloaderHide();
    }, 2250);
  });
}
