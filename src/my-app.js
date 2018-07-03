import {
  PolymerElement,
  html,
} from '@polymer/polymer/polymer-element';
import './my-header/my-header';
import template from './my-app.html';

class MyApp extends PolymerElement {
  static get is() { return 'my-app'; }

  static get template() {
    return html([`${template}`]);
  }
}

customElements.define(MyApp.is, MyApp);
