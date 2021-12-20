import { MAX_RATE_STARS } from '../config.js';
import View from './View.js';

class ProductsView extends View {
  _parentEl;

  _formatPrice(price) {
    return `${new Intl.NumberFormat('vi-VN').format(price)}VND`;
  }

  _generatePrice(item) {
    return item.isSale
      ? `
      <span class="product__normal-price onsale">${this._formatPrice(
        item.price
      )}</span>
      <span class="product__sale-price">${this._formatPrice(
        item.salePrice
      )}</span>
        `
      : `<span class="product__normal-price">${this._formatPrice(
          item.price
        )}</span>
        `;
  }

  _generateSaleIcon(item) {
    return item.isSale
      ? `<div class="product__discount">${item.saleRate} GIẢM</div>`
      : '';
  }

  _generateRateStar(rate) {
    const starEl = `<i class="fa fa-star rate__star"></i>`;
    const starActiveEl = `<i class="fa fa-star rate__star active"></i>`;
    if (!rate) return starEl.repeat(MAX_RATE_STARS);
    if (rate)
      return `${starActiveEl.repeat(rate)}${starEl.repeat(
        MAX_RATE_STARS - rate
      )}`;
  }

  _generateProduct() {
    return this._data.items
      .map(
        item => `
    <div class="products__item product">
      <a class="product__top" href="/">
        <div class="product__img">
          <img src="${item.img}" alt="${item.name}">
        </div>
        ${this._generateSaleIcon(item)}
      </a>
      <div class="product__bot">
        <a class="product__name" href="/">${item.name}</a>
        <div class="product__rate rate">
          ${this._generateRateStar(item.rate)}
        </div>
        <div class="product__price">
          ${this._generatePrice(item)} 
        </div>
        <div class="product__action">
          <a class="product__btn" href="/">ĐẶT HÀNG</a>
        </div>
      </div>
    </div>
    `
      )
      .join('');
  }

  _generateMarkup() {
    return `
      <div class="products__title">${this._data.title}</div>
      <div class="products__content">
        ${this._generateProduct()}
      </div>
    `;
  }

  render(data) {
    this._data = data;
    this._parentEl = document.querySelector(this._data.className);
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }
}

export default new ProductsView();
