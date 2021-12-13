import * as model from './model.js';
import navView from './views/navView.js';

const init = function () {
  navView.render(model.state.menu);
  navView.addHandlerClickMenu();
  navView.addHandlerClickExpand();
  navView.addHandlerScroll();
};

init();
