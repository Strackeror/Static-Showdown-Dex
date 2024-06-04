import pokedex from "../data/pokedex.json";

let formes = {};
for (let id in pokedex) {
  let species = pokedex[id];
  if (species.formes == undefined) continue;

  let baseSpecies = species.formes[0];
  if (baseSpecies in formes) continue;

  formes[baseSpecies] = species.formes;
}

console.log(JSON.stringify(formes, undefined, 2));
