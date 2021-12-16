import View from './View.js';

class SliderView extends View {
  _parentEl = document.querySelector('.swiper-wrapper');

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(
        (img, i) => `
      <div class="slider__slide swiper-slide">
        <img class="slider__image swiper-image" src="${img}" alt="Slider image ${
          i + 1
        }">
      </div>
    `
      )
      .join('');
  }
}

export default new SliderView();
