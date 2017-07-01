export default () => {
  // eslint-disable-next-line no-unused-vars
  if ( $('.playlist-scroll').length>0 || $('.right-tracks__content').length>0 ) {

    function size() {
      var wH = $(window).height(),
          tracks = $(".playlist-scroll, .right-tracks__content"),
          offTop = tracks.offset().top;

      var maxheight = wH - offTop - 30;
      tracks.css("max-height", maxheight);
    }

    $(window).on("resize", function(){
      size();
    });

    $(document).ready(function(){
      size();
    });

  }
};
