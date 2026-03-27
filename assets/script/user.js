'use strict';

 // user.js
class User {
    #id;
    #name;
    #userName;
    #email;
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    getId() { return this.#id; }
    getName() { return this.#name; }
    getUserName() { return this.#userName; }
    getEmail() { return this.#email; }
    getInfo() {
        return `
        <p><strong>Full Name:</strong> ${this.#name}</p>
        <p><strong>Username:</strong> ${this.#userName}</p>
        <p><strong>Email:</strong> ${this.#email}</p>
        `;
    }
}

export { User };
