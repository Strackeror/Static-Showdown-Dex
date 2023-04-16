#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

import { Dex, Learnset } from "@pkmn/dex";
import { Generation, Generations } from "@pkmn/data";


const BASE_GEN = 6

let generation = new Generations(Dex).get(BASE_GEN)

const rootDir = path.resolve(__dirname, '..');
process.chdir(rootDir);

function toID(text: any): string{
  if (text?.id) text = text.id;
  if (typeof text !== 'string' && typeof text !== 'number') return '';
  return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

const INDENT = 2;
function es3stringify(obj) {
	const buf = JSON.stringify(obj, undefined, INDENT);
	return buf.replace(/\"([A-Za-z][A-Za-z0-9]*)\"\:/g, (fullMatch, key) => (
		['return', 'new', 'delete'].includes(key) ? fullMatch : `${key}:`
	));
}

const allSpecies = Object.fromEntries(
  [...generation.species]
    .sort((a, b) => a.num - b.num || a.name.localeCompare(b.name))
    .map((s) => [s.id, s] as const)
);
const allMoves = Object.fromEntries([...generation.moves].map(m => [m.id, m]));
const allAbilities = Object.fromEntries([...generation.abilities].map(a => [a.id,]))
const allTypes = Object.fromEntries([...generation.types].map(m => [m.id, m]));
const allItems = Object.fromEntries([...generation.items].map(m => [m.id, m]));

/*********************************************************
 * Build search-index.js
 *********************************************************/
{
	process.stdout.write("Building `data/search-index.js`... ");

	let index: string[] = [];

	index = index.concat(Object.keys(allSpecies).map(x => x + ' pokemon'));
	index = index.concat(Object.keys(allMoves).map(x => x + ' move'));
	index = index.concat(Object.keys(allItems).map(x => x + ' item'));
	index = index.concat(Object.keys(allAbilities).map(x => x + ' ability'));
	index = index.concat(Object.keys(allTypes).map(x => toID(x) + ' type'));
	index = index.concat(['physical', 'special', 'status'].map(x => toID(x) + ' category'));
	index = index.concat(['monster', 'water1', 'bug', 'flying', 'field', 'fairy', 'grass', 'humanlike', 'water3', 'mineral', 'amorphous', 'water2', 'ditto', 'dragon', 'undiscovered'].map(x => toID(x) + ' egggroup'));
	index = index.concat(['ou', 'uu', 'ru', 'nu', 'pu', 'lc', 'nfe', 'uber', 'uubl', 'rubl', 'nubl', 'publ', 'cap', 'caplc', 'capnfe'].map(x => toID(x) + ' tier'));

	let BattleArticleTitles = {};

	try {
		for (const file of fs.readdirSync('articles/')) {
			if (file.endsWith('.md')) {
				const id = file.slice(0, -3);
				const contents = '' + fs.readFileSync('articles/' + file);
				if (contents.startsWith('# ')) {
					const title = contents.slice(2, contents.indexOf('\n'));
					if (title !== id.charAt(0).toUpperCase() + id.slice(1)) {
						BattleArticleTitles[id] = title;
					}
				}
				index.push('' + id + ' article');
			}
		}
	} catch (e) {
		console.log('\n(WARNING: NO ARTICLES)');
	}
	index.push('pokemon article');
	index.push('moves article');

	// generate aliases
	function generateAlias(id: string, name: string, type: string) {
    let i = name.lastIndexOf(" ");
    if (i < 0) i = name.lastIndexOf("-");
    if (name.endsWith("-Mega-X") || name.endsWith("-Mega-Y")) {
      index.push(
        "mega" +
          toID(name.slice(0, -7) + name.slice(-1)) +
          " " +
          type +
          " " +
          id +
          " 0"
      );
      index.push(
        "m" +
          toID(name.slice(0, -7) + name.slice(-1)) +
          " " +
          type +
          " " +
          id +
          " 0"
      );
      index.push(
        "mega" +
          toID(name.slice(-1)) +
          " " +
          type +
          " " +
          id +
          " " +
          toID(name.slice(0, -7)).length
      );
      return;
    }
    if (name.endsWith("-Mega")) {
      index.push(
        "mega" + toID(name.slice(0, -5)) + " " + type + " " + id + " 0"
      );
      index.push("m" + toID(name.slice(0, -5)) + " " + type + " " + id + " 0");
      return;
    }
    if (name.endsWith("-Alola")) {
      index.push(
        "alolan" + toID(name.slice(0, -6)) + " " + type + " " + id + " 0"
      );
      return;
    }
    let oldI = i;
    if (name === "Alakazam") i = 5;
    if (name === "Arctovish") i = 5;
    if (name === "Arctozolt") i = 5;
    if (name === "Articuno") i = 5;
    if (name === "Breloom") i = 3;
    if (name === "Bronzong") i = 4;
    if (name === "Celebi") i = 4;
    if (name === "Charizard") i = 5;
    if (name === "Donphan") i = 3;
    if (name === "Dracovish") i = 5;
    if (name === "Dracozolt") i = 5;
    if (name === "Dragapult") i = 5;
    if (name === "Dusclops") i = 3;
    if (name === "Electabuzz") i = 6;
    if (name === "Exeggutor") i = 2;
    if (name === "Garchomp") i = 3;
    if (name === "Hariyama") i = 4;
    if (name === "Magearna") i = 2;
    if (name === "Magnezone") i = 5;
    if (name === "Mamoswine") i = 4;
    if (name === "Moltres") i = 3;
    if (name === "Nidoking") i = 4;
    if (name === "Nidoqueen") i = 4;
    if (name === "Nidorina") i = 4;
    if (name === "Nidorino") i = 4;
    if (name === "Regice") i = 3;
    if (name === "Regidrago") i = 4;
    if (name === "Regieleki") i = 4;
    if (name === "Regigigas") i = 4;
    if (name === "Regirock") i = 4;
    if (name === "Registeel") i = 4;
    if (name === "Slowbro") i = 4;
    if (name === "Slowking") i = 4;
    if (name === "Starmie") i = 4;
    if (name === "Tyranitar") i = 6;
    if (name === "Zapdos") i = 3;

    if (name === "Acupressure") i = 3;
    if (name === "Aromatherapy") i = 5;
    if (name === "Boomburst") i = 4;
    if (name === "Crabhammer") i = 4;
    if (name === "Discharge") i = 3;
    if (name === "Earthquake") i = 5;
    if (name === "Extrasensory") i = 5;
    if (name === "Flamethrower") i = 5;
    if (name === "Headbutt") i = 4;
    if (name === "Moonblast") i = 4;
    if (name === "Moonlight") i = 4;
    if (name === "Overheat") i = 4;
    if (name === "Outrage") i = 3;
    if (name === "Octazooka") i = 4;
    if (name === "Payback") i = 3;
    if (name === "Psyshock") i = 3;
    if (name === "Psywave") i = 3;
    if (name === "Rototiller") i = 4;
    if (name === "Rollout") i = 4;
    if (name === "Safeguard") i = 4;
    if (name === "Sandstorm") i = 4;
    if (name === "Smokescreen") i = 5;
    if (name === "Stockpile") i = 5;
    if (name === "Steamroller") i = 5;
    if (name === "Superpower") i = 5;
    if (name === "Supersonic") i = 5;
    if (name === "Synchronoise") i = 7;
    if (name === "Tailwind") i = 4;
    if (name === "Telekinesis") i = 4;
    if (name === "Teleport") i = 4;
    if (name === "Thunderbolt") i = 7;
    if (name === "Twineedle") i = 3;
    if (name === "Uproar") i = 2;
    if (name === "Venoshock") i = 4;
    if (name === "Whirlpool") i = 5;
    if (name === "Whirlwind") i = 5;
    let acronym;
    if (oldI < 0 && i > 0) {
      acronym = toID(name.charAt(0) + name.slice(i));
    }
    if (i < 0) return;
    index.push(
      "" +
        toID(name.slice(i)) +
        " " +
        type +
        " " +
        id +
        " " +
        toID(name.slice(0, i)).length
    );
    if (name.startsWith("Hidden Power ")) {
      acronym = "hp" + toID(name.substr(13));
      index.push("" + acronym + " " + type + " " + id + " 0");
    } else if (name === "Hidden Power") {
      index.push("hp " + type + " " + id + " 0");
    } else if (name.includes(" ")) {
      acronym = toID(
        name
          .split(" ")
          .map((x, i) => (i !== 0 ? x : x.charAt(0)))
          .join("")
      );
    } else if (name.includes("-") && name.charAt(1) !== "-") {
      acronym = toID(
        name
          .split("-")
          .map((x, i) => (i !== 0 ? x : x.charAt(0)))
          .join("")
      );
    }
    if (acronym) {
      index.push("" + acronym + " " + type + " " + id + " 0");
    }
    if (name === "High Jump Kick") {
      index.push("hjkick " + type + " " + id + " 0");
    } else if (name === "Wake-Up Slap") {
      index.push("wuslap " + type + " " + id + " 0");
      index.push("wupslap " + type + " " + id + " 0");
    } else if (name === "Zen Headbutt") {
      index.push("zhbutt " + type + " " + id + " 0");
    } else if (name === "Articuno") {
      index.push("cuno " + type + " " + id + " 4");
    }

    let i2 = name.lastIndexOf(" ", i - 1);
    if (i2 < 0) i2 = name.lastIndexOf("-", i - 1);
    if (name === "Zen Headbutt") i2 = 8;
    if (i2 >= 0) {
      index.push(
        "" +
          toID(name.slice(i2)) +
          " " +
          type +
          " " +
          id +
          " " +
          toID(name.slice(0, i2)).length
      );
    }
  }
	for (const specie of generation.species) {
		let name = specie.name;
		let id = toID(specie.name);
		generateAlias(id, name, 'pokemon');
	}

	for (const move of generation.moves) {
		let name = move.name;
		let id = toID(move.name);
		generateAlias(id, name, 'move');
	}

	for (const ability of generation.abilities) {
		let name = ability.name;
		let id = toID(ability.name);
		generateAlias(id, name, 'ability');
	}
	
	for (const item of generation.items) {
		let name = item.name;
		let id = toID(item.name);
		generateAlias(id, name, 'item');
	}

	index.sort();

	// manually rearrange
	index[index.indexOf('grass type')] = 'grass egggroup';
	index[index.indexOf('grass egggroup')] = 'grass type';

	index[index.indexOf('fairy type')] = 'fairy egggroup';
	index[index.indexOf('fairy egggroup')] = 'fairy type';

	index[index.indexOf('flying type')] = 'flying egggroup';
	index[index.indexOf('flying egggroup')] = 'flying type';

	index[index.indexOf('dragon type')] = 'dragon egggroup';
	index[index.indexOf('dragon egggroup')] = 'dragon type';

	index[index.indexOf('bug type')] = 'bug egggroup';
	index[index.indexOf('bug egggroup')] = 'bug type';

	index[index.indexOf('psychic type')] = 'psychic move';
	index[index.indexOf('psychic move')] = 'psychic type';

	index[index.indexOf('ditto pokemon')] = 'ditto egggroup';
	index[index.indexOf('ditto egggroup')] = 'ditto pokemon';


	let BattleSearchIndex = index.map(x => {
		let split: any[] = x.split(' ');
		if (split.length > 3) {
			split[3] = Number(split[3]);
			split[2] = index.indexOf(split[2] + ' ' + split[1]);
		}
		return split;
	});

	let BattleSearchIndexOffset = BattleSearchIndex.map((entry, i) => {
		const id = entry[0];
		let name = '';
		switch (entry[1]) {
      case "pokemon":
				name = generation.species.get(id)?.name ?? "";
        break;
      case "move":
				name = generation.moves.get(id)?.name ?? "";
        break;
      case "item":
				name = generation.items.get(id)?.name ?? "";
        break;
      case "ability":
				name = generation.abilities.get(id)?.name ?? "";
        break;
      case "article":
        name = BattleArticleTitles[id] ?? "";
        break;
    }
    let res = "";
		let nonAlnum = 0;
		for (let i = 0, j = 0; i < id.length; i++, j++) {
			while (!/[a-zA-Z0-9]/.test(name[j])) {
				j++;
				nonAlnum++;
			}
			res += nonAlnum;
		}
		if (nonAlnum) return res;
		return '';
	});

	let BattleSearchCountIndex = {};
	for (const type of generation.types) {
		BattleSearchCountIndex[type + " move"] = [...generation.moves]
      .map((m) => m.id)
      .filter((id) => allMoves[id].type === type.name).length;
	}
	for (const type of generation.types) {
		BattleSearchCountIndex[type + " pokemon"] = [...generation.species]
      .map((p) => p.id)
      .filter(
        (id) => allSpecies[id].types.indexOf(type.name) >= 0
      ).length;
	}

	let buf = '// DO NOT EDIT - automatically built with build-tools/build-indexes\n\n';

	buf += 'exports.BattleSearchIndex = ' + JSON.stringify(BattleSearchIndex, null, 2) + ';\n\n';

	buf += 'exports.BattleSearchIndexOffset = ' + JSON.stringify(BattleSearchIndexOffset, null, 2) + ';\n\n';

	buf += 'exports.BattleSearchCountIndex = ' + JSON.stringify(BattleSearchCountIndex, null, 2) + ';\n\n';

	buf += 'exports.BattleArticleTitles = ' + JSON.stringify(BattleArticleTitles, null, 2) + ';\n\n';

	fs.writeFileSync('data/search-index.js', buf);
}

console.log("DONE");

/*********************************************************
 * Build teambuilder-tables.js
 *********************************************************/


async function teambuilderTables() {
  const BattleTeambuilderTable = {
    tiers: [],
    items: [],
    overrideTier: {},
    zuBans: {},
    monotypeBans: {},
    formatSlices: {},
    learnsets: {},
  };

  for (let i = 8; i > 0; --i) {
    BattleTeambuilderTable[`gen${i}`] = {
      overrideTier: {},
      tiers: [],
      items: [],
      formatSlices: {},
      zuBans: {},
      monotypeBans: {},
      overrideSpeciesData: {},
      overrideMoveData: {},
      overrideAbilityData: {},
      overrideItemDesc: {},
      overrideTypeChart: {},
      removeType: {},
    };
  }

  let buf =
    "// DO NOT EDIT - automatically built with build-tools/build-indexes\n\n";
  //
  // Learnset table
  //

  const gen3HMs = new Set([
    "cut",
    "fly",
    "surf",
    "strength",
    "flash",
    "rocksmash",
    "waterfall",
    "dive",
  ]);
  const gen4HMs = new Set([
    "cut",
    "fly",
    "surf",
    "strength",
    "rocksmash",
    "waterfall",
    "rockclimb",
  ]);

  const learnsets = {};
  BattleTeambuilderTable.learnsets = learnsets;
  for (const id in allSpecies) {
    const learnset = await generation.learnsets.get(id);
    if (!learnset) continue;
    learnsets[id] = {};
    for (const moveid in learnset.learnset) {
      const gens = learnset.learnset[moveid].map((x) => Number(x[0]));
      const minGen = Math.min(...gens);

      if (minGen <= 4 && (gen3HMs.has(moveid) || gen4HMs.has(moveid))) {
        let legalGens = "";
        let available = false;

        if (minGen === 3) {
          legalGens += "3";
          available = true;
        }
        if (available) available = !gen3HMs.has(moveid);

        if (available || gens.includes(4)) {
          legalGens += "4";
          available = true;
        }
        if (available) available = !gen4HMs.has(moveid);

        let minUpperGen = available
          ? 5
          : Math.min(...gens.filter((gen) => gen > 4));
        legalGens += "0123456789".slice(minUpperGen);
        learnsets[id][moveid] = legalGens;
      } else {
        learnsets[id][moveid] = "0123456789".slice(minGen);
      }

      if (gens.indexOf(6) >= 0) learnsets[id][moveid] += "p";
      if (
        gens.indexOf(7) >= 0 &&
        learnset.learnset[moveid].some((x) => x[0] === "7" && x !== "7V")
      ) {
        learnsets[id][moveid] += "q";
      }
      if (
        gens.indexOf(8) >= 0 &&
        learnset.learnset[moveid].some((x) => x[0] === "8" && x !== "8V")
      ) {
        learnsets[id][moveid] += "g";
      }
      if (
        gens.indexOf(9) >= 0 &&
        learnset.learnset[moveid].some((x) => x[0] === "9" && x !== "9V")
      ) {
        learnsets[id][moveid] += "a";
      }
    }
  }

  buf += `exports.BattleTeambuilderTable = ${es3stringify(
    BattleTeambuilderTable
  )};\n\n`;

  fs.writeFileSync("data/teambuilder-tables.js", buf);
}
teambuilderTables().then(() => console.log("teambuilder-table.js done"));

/*********************************************************
 * Build pokedex.js
 *********************************************************/

process.stdout.write("Building `data/pokedex.js`... ");

{
	let dex = {};
	for (const id in allSpecies) {
		let entry = {...allSpecies[id]}
		delete entry.exists;
		delete entry.dex;
		dex[id] = entry;
	}
	const buf = 'exports.BattlePokedex = ' + es3stringify(dex) + ';';
	fs.writeFileSync('data/pokedex.js', buf);
	fs.writeFileSync('data/pokedex.json', JSON.stringify(dex));
}

console.log("DONE");

/*********************************************************
 * Build moves.js
 *********************************************************/

process.stdout.write("Building `data/moves,items,abilities,typechart,learnsets.js`...");

{
	const buf = 'exports.BattleMovedex = ' + es3stringify(allMoves) + ';';
	fs.writeFileSync('data/moves.js', buf);
	fs.writeFileSync('data/moves.json', JSON.stringify(allMoves));
}

/*********************************************************
 * Build items.js
 *********************************************************/

{
	const buf = 'exports.BattleItems = ' + es3stringify(allItems) + ';';
	fs.writeFileSync('data/items.js', buf);
}

/*********************************************************
 * Build abilities.js
 *********************************************************/

{
	const buf = 'exports.BattleAbilities = ' + es3stringify(allAbilities) + ';';
	fs.writeFileSync('data/abilities.js', buf);
}

/*********************************************************
 * Build typechart.js
 *********************************************************/

{
	const buf = 'exports.BattleTypeChart = ' + es3stringify(allTypes) + ';';
	fs.writeFileSync('data/typechart.js', buf);
}

/*********************************************************
 * Build aliases.js
 *********************************************************/

{
	const Aliases = Dex.data.Aliases;
	const buf = 'exports.BattleAliases = ' + es3stringify(Aliases) + ';';
	fs.writeFileSync('data/aliases.js', buf);
}

/*********************************************************
 * Build learnsets.js
 *********************************************************/

async function buildLearnsets() {
	const Learnsets: {[id: string]: Learnset} = {};
	for (let species in allSpecies) {
		let learnset = {...await generation.learnsets.get(species)}
		if (learnset.learnset) {
      let learnsetMoves = { ...learnset.learnset };
      for (let moveId in learnsetMoves) {
        learnsetMoves[moveId] = learnsetMoves[moveId].filter(
          (l) => Number(l[0]) <= BASE_GEN
        );
				if (learnsetMoves[moveId].length == 0) delete learnsetMoves[moveId];
      }
      learnset.learnset = learnsetMoves;
    }
		Learnsets[species] = learnset
	}
	const buf = 'exports.BattleLearnsets = ' + es3stringify(Learnsets) + ';';
	fs.writeFileSync('data/learnsets.js', buf);
	fs.writeFileSync('data/learnsets.json', JSON.stringify(Learnsets));
	console.log("learnsets DONE");
}
buildLearnsets()

