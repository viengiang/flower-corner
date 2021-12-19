import View from './View.js';

class TopicsView extends View {
  _parentEl = document.querySelector('.topics__content');

  _generateMarkup() {
    return this._data
      .map(
        topic => `
      <li class="topics_item topic">
        <a class="topic__img" href="/">
          <img src="${topic.img}" alt="${topic.name}">
        </a>
        <a class="topic__description" href="/">${topic.name}</a>
      </li>
      `
      )
      .join('');
  }
}

export default new TopicsView();
