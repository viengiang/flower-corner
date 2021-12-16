class View {
  _data;

  render(data) {
    this._data = data;
    this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
  }

  _addHandlerScroll(target) {
    const navEl = this._parentEl.querySelector('.header__nav');
    console.log(navEl);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const handlerScroll = function (entries) {
      const [entry] = entries;

      console.log(entry);
      if (!entry.isIntersecting) navEl.classList.add('sticky');
      else navEl.classList.remove('sticky');
    };

    const observer = new IntersectionObserver(handlerScroll, options);

    observer.observe(target);
  }
}

export default View;
