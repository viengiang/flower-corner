import * as model from './model.js';
import headerMobileView from './views/headerMobileView.js';
import headerDesktopView from './views/headerDesktopView.js';

const init = function () {
  headerMobileView.render(model.state.menu);
  headerMobileView.addHanlerEvent();

  headerDesktopView.render(model.state.menu);
};

init();
