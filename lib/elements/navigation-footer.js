// While sadly using string interpolation for template and styling,
// this neatly encapsulates everything and can be consumed
class NavigationFooter extends HTMLElement {
    previous = this.getAttribute("previous");
    next = this.getAttribute("next");
    
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        const footer = document.createElement('footer');
        footer.innerHTML += this.previous ? `<a href="./${this.previous}.html">Previous</a>` : '<span>Previous</span>';
        footer.innerHTML += this.next ? `<a href="./${this.next}.html">Next</a>` : '<span>Next</span>';
        
        this.shadowRoot.innerHTML = `<style>
        footer {
            width: 100%;
            display: flex;
        }
        footer > a, footer > span {
            display: block;
            padding: 10px;
            margin: auto;
        }
        footer > a:hover, footer > span:hover {
            background-color: var(--base-textbox-color);
        }
        </style>`;
        this.shadowRoot.innerHTML += footer.outerHTML;
    }
  }
  customElements.define("navigation-footer", NavigationFooter);
  