import * as model from './model.js';
import headerMobileView from './views/headerMobileView.js';
import headerDesktopView from './views/headerDesktopView.js';
import sliderView from './views/sliderView.js';

const controlHeader = function () {
  headerMobileView.render(model.state.menu);
  headerMobileView.addHandlerEvent();

  headerDesktopView.render(model.state.menu);
  headerDesktopView.addHandlerEvent();
};

const init = function () {
  controlHeader();
  sliderView.render(model.state.swiperImages);
};

init();
