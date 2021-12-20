import View from './View.js';

class FeaturesView extends View {
  _parentEl = document.querySelector('.feartures__content');

  _generateMarkup() {
    return this._data.map(
      fearture => `
    <div class="features__item fearture">
      <div class="fearture__top">
        <img class="fearture__img" src="${fearture.img}" alt="${fearture.header}">
      </div>
      <div class="fearture__bot">
        <h3 class="fearture__header">${fearture.header}</h3>
        <p class="fearture__description">${fearture.description}</p>
      </div>
    </div>
    `
    );
  }
}

export default new FeaturesView();
