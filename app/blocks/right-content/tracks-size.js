export default () => {
  // eslint-disable-next-line no-unused-vars
  function size() {
    var wH = $(window).height(),
      tracks = $(".right-tracks__content"),
      offTop = tracks.offset().top;

    var maxheight = wH - offTop - 30;
    tracks.css("max-height", maxheight);
  }

  $(window).on("resize", function () {
    size();
  });

  $(document).ready(function () {
    size();
  });
};
