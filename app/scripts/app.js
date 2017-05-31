import $ from 'jquery';
import {preloader} from '../blocks/preloader/preloader.js'
import '../../node_modules/swiper/dist/js/swiper.jquery.min.js'

$(() => {
  // your code goes here
  var mySlider = new Swiper('.slider', {
    speed: 700,
    spaceBetween: 18,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    simulateTouch: false
  });

  preloader();
});
