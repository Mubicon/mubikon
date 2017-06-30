export default () => {
  const { $ } = window;

  $(document)
    .on('click', '.accordion__item', function (e) { // eslint-disable-line func-names
      e.preventDefault();

      const el = $(this);

      el
        .find('.accordion__content')
        .slideToggle();

      el
        .siblings('.accordion__item')
        .find('.accordion__content')
        .slideUp();
    });
};
