import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const mySlider = new Swiper('.slider', {
    speed: 700,
    spaceBetween: 18,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    simulateTouch: false,
  });
};
