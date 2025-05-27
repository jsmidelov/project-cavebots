class SpeechBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode:'open'});
        const template = document.createElement('template');
        // :root[thought] {
        //     border: 2px dashed var(--base-text-color);
        //     border-radius: 20px;
        // }
        template.style = /*css*/`
            .shouted{
                font-size: x-large;
                font-variant: small-caps;
            }
            .whispered{
                font-size: x-small;
            }
            
            span.keyword{
                color: var(--keyword-text-color);
            }
            span.concept{
                color: var(--concept-text-color);
            }
            span.character {
                font-decoration:
            }
            p {
                text-wrap: balance;
            }
            @import url('../../style/style.css');`
            
        template.innerHTML = /*html*/`
            <span id="character"></span>
            <p><slot></slot></p>`;
        shadow.append(template.content.cloneNode(true));
    }

    static get observedAttributes(){
        return ['character'];
    }

    attributeChangedCallback(property, oldValue, newValue){
        console.log(`attributeChangedCallback changing property ${property} from ${oldValue} to ${newValue}`);
        if( property === 'character'){
            this.shadowRoot.getElementById('character').innerHTML = newValue;
        }
    }
}
customElements.define('speech-box', SpeechBox);