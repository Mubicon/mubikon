import $ from 'jquery';
import { preloader } from '../blocks/preloader/preloader';
import { tabs } from '../blocks/tabs/tabs';
import slider from '../blocks/slider/slider';
import trackssize from '../blocks/right-content/tracks-size';

$(() => {
  // your code goes here
  slider();
  preloader();
  tabs();
  //trackssize();
});
