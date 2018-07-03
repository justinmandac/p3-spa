import {
  PolymerElement,
  html,
} from '@polymer/polymer/polymer-element';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-toolbar/app-toolbar';

import template from './my-header.html';

class MyHeader extends PolymerElement {
  static get is() { return 'my-header'; }

  static get properties() {
    return {
      title: {
        type: String,
        value: 'my-app',
      },
    };
  }

  static get template() {
    return html([`
      ${template}
    `]);
  }
}

customElements.define(MyHeader.is, MyHeader);