import $ from 'jquery';
import { preloader } from '../blocks/preloader/preloader';
import { tabs } from '../blocks/tabs/tabs';
import slider from '../blocks/slider/slider';
import playerwaves from '../blocks/player/player';
import filteraccordeon from '../blocks/filter-container/filter-accordeon';
import layout from '../blocks/layout/layout';
import accordion from '../blocks/accordion/accordion';
//import trackssize from '../blocks/right-content/tracks-size';

$(() => {
  // your code goes here
  slider();
  preloader();
  tabs();
  filteraccordeon();
  playerwaves();
  layout();
  accordion();
});
