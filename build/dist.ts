import { execSync } from "child_process";

execSync("rm -rf dist/*");
execSync("mkdir -p dist");
for (let folder of [
  "data",
  "js",
  "theme",
  "images",
  "showdown",
  "index.html",
  "favicon.ico",
]) {
  execSync(`cp -rf ${folder} dist/`);
}
