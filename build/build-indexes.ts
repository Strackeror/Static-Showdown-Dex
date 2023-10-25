#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

import { ModdedDex, Dex, Learnset, Data as DexData, ModData } from "@pkmn/dex";
import { Generation, Generations } from "@pkmn/data";

const BASE_GEN = 9;

let data: ModData | undefined = JSON.parse(
  fs.readFileSync("./build/mod-data.json").toString()
);
if (Object.keys(data).length == 0) data = undefined;
let dex = new ModdedDex(`gen${BASE_GEN}`, data);

function nationalDexExists(d: DexData) {
  if (Generations.DEFAULT_EXISTS(d)) return true;
  if ("isNonstandard" in d) {
    return d.isNonstandard == "Past";
  }
  return false;
}

function getLatestLearnset(learnsetData: Learnset) {
  for (let i = BASE_GEN; i > 0; --i) {
    let genLearnset = { ...learnsetData.learnset };
    for (let moveId in genLearnset) {
      genLearnset[moveId] = genLearnset[moveId].filter(
        (m) => Number(m[0]) == i
      );
      if (genLearnset[moveId].length == 0) delete genLearnset[moveId];
    }
    if (Object.keys(genLearnset).length > 0) {
      return genLearnset;
    }
  }
  return {};
}

let generation = new Generation(dex, nationalDexExists);

const rootDir = path.resolve(__dirname, "..");
process.chdir(rootDir);

function toID(text: any): string {
  if (text?.id) text = text.id;
  if (typeof text !== "string" && typeof text !== "number") return "";
  return ("" + text).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const INDENT = 2;
function es3stringify(obj) {
  const buf = JSON.stringify(obj, undefined, INDENT);
  return buf.replace(/\"([A-Za-z][A-Za-z0-9]*)\"\:/g, (fullMatch, key) =>
    ["return", "new", "delete"].includes(key) ? fullMatch : `${key}:`
  );
}

const allSpecies = Object.fromEntries(
  [...generation.species]
    .sort((a, b) => a.num - b.num || a.name.localeCompare(b.name))
    .map((s) => [s.id, s] as const)
);
const allMoves = Object.fromEntries(
  [...generation.moves].map((m) => [m.id, m])
);
const allAbilities = Object.fromEntries(
  [...generation.abilities].map((a) => [a.id, a])
);
const allTypes = Object.fromEntries(
  [...generation.types].map((m) => [m.id, m])
);
const allItems = Object.fromEntries(
  [...generation.items].map((m) => [m.id, m])
);

/*********************************************************
 * Build pokedex.js
 *********************************************************/
async function buildDex() {
  let dex = {};
  process.stdout.write("Building `data/pokedex.js`... ");
  for (let species in allSpecies) {
    let entry = { ...allSpecies[species] };
    let dexEntry = {
      name: entry.name,
      num: entry.num,
      types: entry.types,
      abilities: entry.abilities,
      eggGroups: entry.eggGroups,

      evos: entry.evos,
      prevo: entry.prevo,
      evoItem: entry.evoItem,
      evoType: entry.evoType,
      evoLevel: entry.evoLevel,
      evoMove: entry.evoMove,
      evoCondition: entry.evoCondition,

      baseSpecies: entry.baseSpecies,
      forme: entry.forme,
      formes: entry.formes ?? allSpecies[toID(entry.baseSpecies)]?.formes,
      requiredItem: entry.requiredItem,
      cosmeticFormes: entry.cosmeticFormes,

      genderRatio: entry.genderRatio,
      weightkg: entry.weightkg,
      baseStats: entry.baseStats,
      learnset: [],
    };

    let learnsetData = { ...(await generation.learnsets.get(species)) };
    if (!learnsetData) continue;

    let latestLearnset = getLatestLearnset(learnsetData);
    for (let moveId in latestLearnset) {
      for (let entry of latestLearnset[moveId]) {
        switch (entry[1]) {
          case "L":
            dexEntry.learnset.push({
              move: moveId,
              how: "lvl",
              level: +entry.slice(2),
            });
            break;
          case "M":
            dexEntry.learnset.push({ move: moveId, how: "tm" });
            break;
          case "T":
            dexEntry.learnset.push({ move: moveId, how: "tutor" });
            break;
        }
      }
    }
    dexEntry.learnset.sort((a, b) => {
      const order = ["lvl", "tm", "tutor"];
      if (a.how != b.how) return order.indexOf(a.how) - order.indexOf(b.how);
      if (a.how == "lvl" && a.level != b.level) return a.level - b.level;
      return a.move.localeCompare(b.move);
    });
    dex[species] = dexEntry;
  }
  const buf = "exports.BattlePokedex = " + es3stringify(dex) + ";";
  fs.writeFileSync("data/pokedex.js", buf);
  console.log("pokedex DONE");
}
buildDex();

/*********************************************************
 * Build moves.js
 *********************************************************/

process.stdout.write(
  "Building `data/moves,items,abilities,typechart,learnsets.js`..."
);

{
  let moves = {};
  for (let moveId in allMoves) {
    let move = allMoves[moveId];
    moves[moveId] = {
      name: move.name,
      num: move.num,
      type: move.type,
      flags: move.flags,
			basePower: move.basePower,
      accuracy: move.accuracy,
      category: move.category,
      desc: move.desc,
      shortDesc: move.shortDesc,
      pp: move.pp,
    };
  }
  const buf = "exports.BattleMovedex = " + es3stringify(moves) + ";";
  fs.writeFileSync("data/moves.js", buf);
}

/*********************************************************
 * Build items.js
 *********************************************************/

{
  let items = {};
  for (let itemId in allItems) {
    let item = allItems[itemId];
    items[itemId] = {
      name: item.name,
      num: item.num,
			spritenum: item["spritenum"],
      desc: item.desc,
      shortDesc: item.shortDesc,
    };
  }
  const buf = "exports.BattleItems = " + es3stringify(items) + ";";
  fs.writeFileSync("data/items.js", buf);
}

/*********************************************************
 * Build abilities.js
 *********************************************************/

{
  let abilities = {};
  for (let abilityId in allAbilities) {
    let ability = allAbilities[abilityId];
    abilities[abilityId] = {
      name: ability.name,
      num: ability.num,
      desc: ability.desc,
      shortDesc: ability.shortDesc,
    };
  }
  const buf = "exports.BattleAbilities = " + es3stringify(abilities) + ";";
  fs.writeFileSync("data/abilities.js", buf);
}

/*********************************************************
 * Build typechart.js
 *********************************************************/

{
  let types = {};
  for (let typeId in allTypes) {
    let type = allTypes[typeId];
    types[typeId] = {
      name: type.name,
      category: type.category,
      effectiveness: type.effectiveness,
    };
  }
  const buf = "exports.BattleTypeChart = " + es3stringify(types) + ";";
  fs.writeFileSync("data/typechart.js", buf);
}
