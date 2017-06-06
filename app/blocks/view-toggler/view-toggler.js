import $ from 'jquery';
import 'jquery-ui-bundle';

export default () => {
  const viewToggler = $('#viewToggler');
  const TAB_CLASS = '.view-toggler__tab';
  const TAB_ACTIVE_CLASS = 'view-toggler__tab_active';

  if (!viewToggler) {
    return;
  }

  viewToggler.tabs({
    active: 1,
    activate: (event, ui) => {
      const { newTab, oldTab } = ui;

      oldTab.find(TAB_CLASS).removeClass(TAB_ACTIVE_CLASS);
      newTab.find(TAB_CLASS).addClass(TAB_ACTIVE_CLASS);
    },
  });
};
