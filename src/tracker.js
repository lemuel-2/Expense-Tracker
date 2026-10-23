export class Tracker {
#track;
#id
    constructor() {
        this.#track = new Map()
        this.#id = 1
    }

    /**
     * add item to the Map object
     * @param {String} item 
     * @param {Number} qty 
     * @param {Number} price 
     */
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

    /**
     * display all the item
     */
    displayItems() {
        this.#track.forEach((key, value) => {
            console.log(`id ${key}, ${value}`)
        })
    }

    updateItem(id, qty, price) {
        const found = this.#track.has(id)
        if (!found) return `no item ${id} found`
        this.#track.get(id).price = price;
        this.#track.get(id).quantity = qty;
    }

    deleteItem(id) {
        const found = this.#track.has(id)
        if (!found) return `no item ${id} found`
        this.#track.delete(id) 
        return "delete successful"
    }

    deleteAllItem() {
        this.#track.clear();
    }
}