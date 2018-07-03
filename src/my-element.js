import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';

class MyElement extends PolymerElement {
  static get is() {
    return 'my-element';
  }

  static get properties() {
    return {
      greeting: {
        type: String,
        value: 'Hello',
      },
    };
  }

  static get template() {
    return html `
      <div>[[greeting]] World!</div>
    `;
  }
}

window.customElements.define('my-element', MyElement);
