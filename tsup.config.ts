import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/module.ts"],
    clean: true,
    minify: true,
    target: "node16",
});
