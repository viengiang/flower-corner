import View from './View.js';
class HeaderDesktopView extends View {
  _parentEl = document.querySelector('.header-desktop');

  _generateSubmenuMarkup(menu) {
    return menu.submenu
      .map(
        sub => `
      <li class="submenu__item">
        <a href="/" class="submenu__description">${sub}</a>
      </li>
    `
      )
      .join('');
  }

  _generateMarkup() {
    return this._data
      .map(
        menu => `
      <li class="nav__item" data-name="${menu.name}">
        <a href="/" class="nav__description ${
          menu.submenu.length === 0 && 'no-sub'
        }">${menu.description}</a>
        <ul class="nav__submenu submenu">
          ${this._generateSubmenuMarkup(menu)}
        </ul>
      </li>
    `
      )
      .join('');
  }

  render(data) {
    this._data = data;
    this._parentEl
      .querySelector('.nav__list')
      .insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  addHandlerEvent() {
    this._addHandlerScroll(this._parentEl.querySelector('.header__top'));
  }
}

export default new HeaderDesktopView();
