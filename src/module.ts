export class Module {
    static readonly #name = "ExampleModule";
    static readonly #version = "1.0.0";
    static readonly #description = "Example module";
    static readonly #author = "Example author";
    // static readonly #dependencies = {
    //     "example-module": "^1.0.0",
    // };

    static getInfo() {
        return {
            name: this.#name,
            version: this.#version,
            description: this.#description,
            author: this.#author,
        };
    }

    init() {
        console.log("Example module initialized");
    }
}
