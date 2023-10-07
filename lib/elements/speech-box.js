class SpeechBox extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode:'open'});
        const template = document.createElement('template');
        // This style import isn't needed - the global style is imported by default -
        // but it's here to illustrate how styling would be imported from another .ccs file.
        // Just note the import is part of the template and gets imported for every instance
        template.innerHTML = `
        <style>
            @import url('../../style/style.css');
        </style>
        <div>
            <span id="character"></span>
            <p><slot></slot></p>
        </div>`;
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