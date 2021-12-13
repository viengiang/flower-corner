class NavView {
  _parentEl = document.querySelector('.header-mobile');
  _menuEl = this._parentEl.querySelector('.header__menu');
  _data;

  _generateMenu(menu) {
    return menu.submenu.length === 0
      ? `
          <a class="dropdown__description no-sub" href="/">${menu.description}</a>
        `
      : `
          <a class="dropdown__description" href="/">${menu.description}</a>
          <div class="dropdown__action action">
            <p class="action__icon expand">+</p>
            <p class="action__icon close active">-</p>
          </div>
        `;
  }

  _generateSubmenu(menu) {
    return menu.submenu
      .map(
        sub => `
      <li class="submenu__item">
        <a class="submenu__name" href="/">${sub}</a>
      </li>
      `
      )
      .join('');
  }

  _generateMarkup() {
    return this._data
      .map(
        menu => `
      <li class="dropdown__item" data-name="${menu.name}">
        <div class="dropdown__menu">
          ${this._generateMenu(menu)}
        </div>
        <ul class="dropdown__submenu submenu">
          ${this._generateSubmenu(menu)}
        </ul>
      </li>
      `
      )
      .join('');
  }

  render(data) {
    this._data = data;
    this._menuEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  addHandlerClickExpand() {
    this._menuEl.addEventListener('click', e => {
      const target = e.target;
      if (!target.classList.contains('action__icon')) return;
      const actionsEl = target.closest('.action');
      const dropdownMenus = this._parentEl.querySelectorAll('.dropdown__menu');
      const expandIcons = this._parentEl.querySelectorAll('.expand');
      const closeIcons = this._parentEl.querySelectorAll('.close');
      const submenusEl = this._parentEl.querySelectorAll('.dropdown__submenu');
      const dropdownMenu = target.closest('.dropdown__menu');
      const expandTargetEl = actionsEl.querySelector('.expand');
      const closeTargetEl = actionsEl.querySelector('.close');
      const submenuTarget = actionsEl
        .closest('.dropdown__item')
        .querySelector('.dropdown__submenu');

      if (target.classList.contains('expand')) {
        submenusEl.forEach(el => el.classList.remove('active'));
        expandIcons.forEach(el => el.classList.remove('active'));
        closeIcons.forEach(el => el.classList.add('active'));
        expandTargetEl.classList.add('active');
        closeTargetEl.classList.remove('active');
        submenuTarget.classList.add('active');
        dropdownMenus.forEach(
          el => (el.style.backgroundColor = 'var(--color-light--1)')
        );
        dropdownMenu.style.backgroundColor = 'var(--color-light--2)';
      }

      if (target.classList.contains('close')) {
        expandTargetEl.classList.remove('active');
        closeTargetEl.classList.add('active');
        submenuTarget.classList.remove('active');
        dropdownMenu.style.backgroundColor = 'var(--color-light--1)';
      }
    });
  }

  addHandlerClickMenu() {
    this._parentEl
      .querySelector('.header__btn.menu')
      .addEventListener('click', e => {
        const btnMenu = e.target.closest('.header__btn.menu');
        if (!btnMenu) return;
        this._menuEl.classList.toggle('active');
      });
  }

  addHandlerScroll() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0,
    };
    const handlerScroll = function (entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          this._parentEl.querySelector('.header__nav').style.position = 'fixed';
          this._parentEl.querySelector('.header__nav').style.top = 0;
        }
        if (entry.isIntersecting) {
          this._parentEl.querySelector('.header__nav').style.position = 'unset';
          this._parentEl.querySelector('.header__nav').style.top = 'unset';
        }
      });
    };

    const observer = new IntersectionObserver(
      handlerScroll.bind(this),
      options
    );

    observer.observe(this._parentEl.querySelector('.header__icons'));
  }
}

export default new NavView();
