class HexagonField extends HTMLDivElement {
    cols = this.getAttribute("cols");
    rows = this.getAttribute("rows");
    field = [];

    style = /*css*/``;
    template = /*html*/`<p></p>`;
    constructor(){
        super();
        this.append(this.template);
    }

    createField(cols, rows){
        // for each row, for each col
        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                this.field.push({
                    position: {
                        row: row,
                        column: column
                    },
                    links: []
                })
                // append a hexagon to template, set absolute position according to it's col and row value 
                if (row%2===1) {
                    // every odd row is half a cell indented, and one column short
                    // Can I solve this with CSS Grid? Say, a row has 1fr, 2fr...2fr, 1fr columns, the other only 2fr?
                } else {
                    // every even row is not cell indented

                }
                this.template.append(`<hex-cell col="${col}" row="${row}"></hex-cell>`);
            }
        }
    }

    linkCells(field) {
        // link the cells by: For each cell,
        field.forEach(cell => {
            // link to previous row (unless first row), same and next column (unless last column)
            this.isValidConnection(cell.position.row, cell.position.column-1) ? cell.links.push({ cell.position.column, cell.position.row-1 }) : null;
            this.isValidConnection(cell.position.row+1, cell.position.column+1) ? cell.links.push({ cell.position.column+1, cell.position.row-1 }) : null;
            // link one next row (unless last row), same and next column (unless column is max)
            this.isValidConnection(cell.position.row, cell.position.column-1) ? cell.links.push({ cell.position.column-1, cell.position.row }) : null;
            this.isValidConnection(cell.position.row, cell.position.column+1) ? cell.links.push({ cell.position.column+1, cell.position.row }) : null;
            // link to previous column (unless first column) and next column (unless last column)
            this.isValidConnection(cell.position.row+1, cell.position.column) ? cell.links.push({ cell.position.column, cell.position.row+1 }) : null;
            this.isValidConnection(cell.position.row+1, cell.position.column+1) ? cell.links.push({ cell.position.column+1, cell.position.row+1 }) : null;
        });
    }
    isValidConnection(row, column){
        if(row > 0) {return false}
        if (column > 0) {return false}
        if (column < field.cols) {return false}
        if(row < rows) {return false}
        return this.field.find(cell => cell.position.row === row && cell.position.column === column);
    }
}

customElements.define('hex-field', HexagonField);