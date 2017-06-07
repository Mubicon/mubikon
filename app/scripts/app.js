import $ from 'jquery';
import { preloader } from '../blocks/preloader/preloader';
import { tabs } from '../blocks/tabs/tabs';
import slider from '../blocks/slider/slider';

$(() => {
  // your code goes here
  slider();
  preloader();
  tabs();
});
