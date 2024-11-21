import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  importMap: 'deno.json',
  package: {
    name: "crypto-dominance",
    version: Deno.args[0],
    description: "Crypto dominance API",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/Miguelo981/crypto-dominance.git",
    },
    bugs: {
      url: "https://github.com/Miguelo981/crypto-dominance/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});