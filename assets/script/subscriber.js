// Subscriber.js
import { User } from './user.js';

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    getPages() { return this.#pages; }
    getGroups() { return this.#groups; }
    getCanMonetize() { return this.#canMonetize; }
    getInfo() {
    const baseInfo = super.getInfo();
        return `
        ${baseInfo}
        <p><strong>Pages:</strong> ${this.#pages.join(', ')}</p>
        <p><strong>Groups:</strong> ${this.#groups.join(', ')}</p>
        <p><strong>Monetize:</strong> ${this.#canMonetize ? 'Yes' : 'No'}</p>
        `;
    }
}

export { Subscriber };