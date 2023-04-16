#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

import { Dex, Learnset } from "@pkmn/dex";
import { Generations } from "@pkmn/data";


const BASE_GEN = 7
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
const allAbilities = Object.fromEntries([...generation.abilities].map(a => [a.id,a]))
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

  let buf =
    "// DO NOT EDIT - automatically built with build-tools/build-indexes\n\n";
  //
  // Learnset table
  //
  const learnsets = {};
  BattleTeambuilderTable.learnsets = learnsets;
  for (const id in allSpecies) {
    const learnset = await generation.learnsets.get(id);
    if (!learnset) continue;
    learnsets[id] = {};
    for (const moveid in learnset.learnset) {
      learnsets[id][moveid] = "9a";
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
	const buf = 'exports.BattleAliases = {};';
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
        let curGen = learnsetMoves[moveId].find(
          (m) => Number(m[0]) == BASE_GEN
        );
        if (curGen) {
          learnsetMoves[moveId] = ["9" + curGen.slice(1)];
        } else {
          delete learnsetMoves[moveId];
        }
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

