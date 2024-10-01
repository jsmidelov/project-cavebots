class SpeechPortrait extends HTMLDivElement {
    constructor(){
        super();
        this.style = /*css*/`
        
            @import url('../../style/style.css');`;
        this.innerHTML = /*html*/`
            <div style="background-color: red; position: absolute; top: 0; left: 0; bottom: 0; right: var(--portrait-right)"></div>`;
    }
}
customElements.define('speech-portrait', SpeechPortrait);

/* 
Design Notes:
The "speech portrait" displays the actively speaking non-player character.
On mobile, it takes up the full screen, while on desktop it takes up the left-hand side.

A different(?) component handles the character speech portrait, which is displayed when the player has dialogue options
On mobile, it also takes the full screen, while on desktop it takes the right-hand side.

One of the problems I'm looking into it how to update the component with which character is speaking, and in which tone.
It would have to know which dialog box is "active", but it can't know this without a speech box navigational system.
*/