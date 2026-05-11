import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const clientDir = join(process.cwd(), "build", "client");
const indexHtml = join(clientDir, "index.html");

await writeFile(join(clientDir, ".nojekyll"), "");
await writeFile(join(clientDir, "CNAME"), "sklivestock.net\n");
await copyFile(indexHtml, join(clientDir, "404.html"));
