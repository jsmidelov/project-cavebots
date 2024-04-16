class ActionCard extends HTMLElement {
    cost = this.getAttribute("cost");
    range = this.getAttribute("range");
    
    image = this.getAttribute("image") ?? '404.jpg'; // file path
    
    title = this.getAttribute("title");
    description = this.getAttribute("description");
    
    style = /*css*/``;
    template = /*html*/`
    <div style="display: flex; flex-direction: column;">
        <div style="display: flex">
            <span>Cost: ${this.cost ?? 0}</span>
            <span>Range: ${this.range ?? 0}</span>
        </div>
        <img src="${this.image}"></img>
        <h2>${this.title ?? 'N/A'}</h2>
        <p>${this.description ?? 'Not available'}</p>
    </div>`;
    constructor(){
        super();
        this.innerHTML = this.template;
    }
}
customElements.define('action-card', ActionCard);