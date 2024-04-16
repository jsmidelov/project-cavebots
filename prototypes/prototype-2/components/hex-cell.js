class Hexagon extends HTMLDivElement {
    id = 0;
    contents = [];
    position = {
        column: 0,
        row: 0
    };
    links = [
        // {
        //     column: null,
        //     row: null,
        // }
    ];
    
    style = /*css*/``;
    template = /*html*/`
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 0,33 0,67 50,100 100,67 100,33" />
    </svg>`;
    constructor(){
        super();
        this.innerHTML = this.template;
    }
}

customElements.define('hex-cell', Hexagon);