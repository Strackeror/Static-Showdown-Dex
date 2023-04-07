import { execSync } from "child_process";
import { argv } from "process";

let dest = argv[2];

execSync(`mkdir -p ./${dest}`);
execSync(`rm -rf ./${dest}/*`)
for (let folder of [
  "data",
  "js",
  "theme",
  "images",
  "showdown",
  "index.html",
  "favicon.ico",
]) {
  execSync(`cp -rf ${folder} ./${dest}/`);
}
