class NavView {
  _parentEl = document.querySelector('.header__menu');
  _submenuEl = this._parentEl.querySelector('.submenu');
  _data;

  _clear() {
    this._parentEl.innerHTML = '';
  }

  _generateSubmenu() {
    return;
  }

  _generateMenu() {
    console.log(this._data);
    return this._data
      .map(
        menu => `
      <li class="dropdown__item">
        <div class="dropdown__menu" data-name="${menu.name}">

          ${
            menu.submenu.length === 0
              ? `<a class="dropdown__description no-sub" href="/">${menu.description}</a>`
              : `
              <a class="dropdown__description" href="/">${menu.description}</a>
              <div class="dropdown__action action">
                <p class="action__icon expand">+</p>
                <p class="action__icon close active">-</p>
              </div>
              `
          }
        </div>
        <ul class="dropdown__submenu submenu"></ul>
      </li>
    `
      )
      .join('');
  }

  render(data) {
    this._data = data;
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMenu());
  }

  addHandlerClick() {
    this._parentEl.addEventListener('click', e => {
      if (!e.target.classList.contains('action__icon')) return;
      const actionEl = e.target.closest('.action');
      actionEl
        .querySelectorAll('.action__icon')
        .forEach(el => el.classList.toggle('active'));
    });
  }
}

export default new NavView();
