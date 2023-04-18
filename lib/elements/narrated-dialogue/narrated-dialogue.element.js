class NarratedDialogue extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<style>
        p {
            background-color: hsl(0,0,0,.5);
            color: lightblue;
        }
        </style>
        <p><slot></slot></p>`;
    }
}
customElements.define('narrated-dialogue', NarratedDialogue);