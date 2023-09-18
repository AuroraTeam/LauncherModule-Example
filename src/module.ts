export class Module {
    static readonly #name = "ExampleModule";
    static readonly #version = "1.0.0";
    static readonly #description = "Example module";
    static readonly #author = "Example author";

    static getInfo() {
        return {
            name: this.#name,
            version: this.#version,
            description: this.#description,
            author: this.#author,
        };
    }

    // TODO Add app type
    init(app: any) {
        console.log("Example module initialized");
        console.log(app);
    }
}
