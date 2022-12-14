// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.32.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  compilerOptions: {
    lib: ["es2022"],
  },
  package: {
    // package.json properties
    name: "@think-it-labs/typed-error",
    version: Deno.args[0],
    description:
      "A better JavaScript Error for for Node.js, Deno and the browser.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/think-it-labs/typed-error.git",
    },
    engines: {
      node: ">=16.9",
    },
    bugs: {
      url: "https://github.com/think-it-labs/typed-error/issues",
    },
  },
});

// post build steps
// Deno.copyFileSync("LICENSE", "npm/LICENSE");
// Deno.copyFileSync("README.md", "npm/README.md");
