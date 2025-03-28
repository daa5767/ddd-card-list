/**
 * Copyright 2025 daa5767
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.description = "";
    this.primary = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String },
      primary: {
        type: String,
        Reflect: true,
        DDDDataAttributes: "data-primary",
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
          max-width: 300px;
          text-align: center;
          --component-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
          );
        }

        .wrapper {
          display: flex; 
          flex-wrap: wrap;
          gap: 20px; 
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }

        .title-bar {
          padding: var(--ddd-spacing-2);
          color: var(--component-color, var(--ddd-theme-default-link));
          border: var(--ddd-border-sm);
          border-color: var(
            --component-border-color,
            var(--ddd-theme-default-link)
          );
          font-weight: bold;
        }
        .image-container img {
          width: 100%;
          height: auto;
          border-radius: var(--ddd-border-radius, 8px);

         
         .link {
          margin-top: var(--ddd-spacing-2);
         }
        .link a {
         color: var(--ddd-theme-primary);
         text-decoration: underline;
         font-size: var(--ddd-font-size-xs);
        };

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
        
      `,
    ];
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="image-container">
        <img src="${this.image}" alt="${this.title || "Card image"}" />
      </div>
      <div class="title-bar">${this.title}</div>
      <div class="description">
        <slot></slot>
      </div>
      ${this.link
        ? html`<div class="link">
            <a href="${this.link}" target="_blank" rel="noopener noreferrer">
              Explore >
            </a>
            <div></div>
          </div> `
        : ""}
    `;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(DddCard.tag, DddCard);
