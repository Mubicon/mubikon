import $ from 'jquery';
import { preloader } from '../blocks/preloader/preloader';
import { tabs } from '../blocks/tabs/tabs';
import slider from '../blocks/slider/slider';
import filteraccordeon from '../blocks/filter-container/filter-accordeon';
//import trackssize from '../blocks/right-content/tracks-size';

$(() => {
  // your code goes here
  slider();
  preloader();
  tabs();
  filteraccordeon();
});
