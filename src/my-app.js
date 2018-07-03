import {
  PolymerElement,
  html,
} from '@polymer/polymer/polymer-element';
import './my-header/my-header';

class MyApp extends PolymerElement {
  static get is() { return 'my-app'; }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          margin: 0;
          padding: 0;
        }
      </style>
      <my-header title="My App"></my-header>
    `;
  }
}

customElements.define(MyApp.is, MyApp);
