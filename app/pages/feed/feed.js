import Styler from 'jquery-form-styler';

export default () => {

  const myStyler = new Styler($(function() {

    $('select').styler();

  }));

}

