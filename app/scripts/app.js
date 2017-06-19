import $ from 'jquery';
import { preloader } from '../blocks/preloader/preloader';
import { tabs } from '../blocks/tabs/tabs';
import { faqaccordion } from '../blocks/faq-accordion/faqaccordion';
import { myclose } from '../pages/catalogue/catalog';
import slider from '../blocks/slider/slider';
//import trackssize from '../blocks/right-content/tracks-size';

$(() => {
  // your code goes here
  slider();
  preloader();
  tabs();
  faqaccordion();
  myclose();
});
