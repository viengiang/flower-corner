import * as model from './model.js';
import headerMobileView from './views/headerMobileView.js';
import headerDesktopView from './views/headerDesktopView.js';
import topicsView from './views/topicsView.js';
import productsView from './views/productsView.js';

const controlHeader = function () {
  headerMobileView.render(model.state.menu);
  headerMobileView.addHandlerEvent();

  headerDesktopView.render(model.state.menu);
  headerDesktopView.addHandlerEvent();
};

const init = function () {
  controlHeader();
  topicsView.render(model.state.topics);
  productsView.render(model.state.products.sales);
};

init();
