export class Tracker {
#track;
#id
    constructor() {
        this.#track = new Map()
        this.#id = 1
    }

    addItem(item, qty, price) {
        if (typeof item !== "string" || item.trim() === "") {
            throw new Error("Enter a valid name");
        }
        if (typeof qty !== "number" || item <= 0) {
            throw new Error("Enter a valid qty must be a number and greater then zero");
        }
        if (typeof price !== "number" || price < 0) {
            throw new Error("Price must be a number and greater zero");
        }
        const total = qty * price;

        this.#track.set(this.#id, {
            item: item, 
            quantity: qty, 
            price: price, 
            total: total
        })
        this.id += 1
    }

    displayItems() {

    }
}