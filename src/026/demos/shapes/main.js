const Rectangle = class {
    #created;
    height;
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.#created = new Date();
        Rectangle.#count++;
    }

    static #count = 0;

    static get count() {
        return Rectangle.#count;
    }
}

const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 10;
    const h = 5;
    const box = new Rectangle(h, w);
    shapes.push(box);
    console.log('box created:', box);
    console.log(`There are ${Rectangle.count} boxes so far.`);
})