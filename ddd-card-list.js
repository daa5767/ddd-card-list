/**
 * Copyright 2025 daa5767
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";
    this.accent = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      primary: {
        type: String,
        reflect: true,
        attribute: "ddd-primary",
      },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          border: 1px solid var(--ddd-border-color, #ccc);
          border-radius: var(--ddd-border-radius, 8px);
          padding: var(--ddd-spacing-3);
          text-align: center;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .title-bar {
          padding: var(--ddd-spacing-2);
          font-weight: bold;
        }
        div ::slotted(*) {
          display: inline-block;
        }
        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        .ddd-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px;
          border: 1px solid var(--ddd-theme-primary);
          border-radius: 10px;
          background-color: var(--ddd-theme-accent);
        }
        button {
          background-color: --ddd-theme-default-beaverBlue; /* Penn State blue */
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <h3><span>${this.t.title}</span> ${this.title}</h3>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);
