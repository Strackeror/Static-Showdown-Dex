#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { BattleAbilities } from "../data/abilities";
import { BattleItems } from "../data/items";
import { BattleMovedex } from "../data/moves";
import { BattlePokedex } from "../data/pokedex";
import { BattleTypeChart } from "../data/typechart";
import { BattleLearnsets } from "../data/learnsets";

const Dex = {
	data: {
		Pokedex: BattlePokedex,
		Moves: BattleMovedex,
		Abilities: BattleAbilities,
		TypeChart: BattleTypeChart,
		Items: BattleItems,
		Learnsets: BattleLearnsets,
	}
}


const rootDir = path.resolve(__dirname, '..');
process.chdir(rootDir);

function toID(text: any): string{
  if (text?.id) text = text.id;
  if (typeof text !== 'string' && typeof text !== 'number') return '';
  return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/*********************************************************
 * Build search-index.js
 *********************************************************/

{
	process.stdout.write("Building `data/search-index.js`... ");

	let index: string[] = [];

	index = index.concat(Object.keys(Dex.data.Pokedex).map(x => x + ' pokemon'));
	index = index.concat(Object.keys(Dex.data.Moves).map(x => x + ' move'));
	index = index.concat(Object.keys(Dex.data.Items).map(x => x + ' item'));
	index = index.concat(Object.keys(Dex.data.Abilities).map(x => x + ' ability'));
	index = index.concat(Object.keys(Dex.data.TypeChart).map(x => toID(x) + ' type'));
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
	function generateAlias(id, name, type) {
		let i = name.lastIndexOf(' ');
		if (i < 0) i = name.lastIndexOf('-');
		if (name.endsWith('-Mega-X') || name.endsWith('-Mega-Y')) {
			index.push('mega' + toID(name.slice(0, -7) + name.slice(-1)) + ' ' + type + ' ' + id + ' 0');
			index.push('m' + toID(name.slice(0, -7) + name.slice(-1)) + ' ' + type + ' ' + id + ' 0');
			index.push('mega' + toID(name.slice(-1)) + ' ' + type + ' ' + id + ' ' + toID(name.slice(0, -7)).length);
			return;
		}
		if (name.endsWith('-Mega')) {
			index.push('mega' + toID(name.slice(0, -5)) + ' ' + type + ' ' + id + ' 0');
			index.push('m' + toID(name.slice(0, -5)) + ' ' + type + ' ' + id + ' 0');
			return;
		}
		if (name.endsWith('-Alola')) {
			index.push('alolan' + toID(name.slice(0, -6)) + ' ' + type + ' ' + id + ' 0');
			return;
		}
		let oldI = i;
		if (name === 'Alakazam') i = 5;
		if (name === 'Arctovish') i = 5;
		if (name === 'Arctozolt') i = 5;
		if (name === 'Articuno') i = 5;
		if (name === 'Breloom') i = 3;
		if (name === 'Bronzong') i = 4;
		if (name === 'Celebi') i = 4;
		if (name === 'Charizard') i = 5;
		if (name === 'Donphan') i = 3;
		if (name === 'Dracovish') i = 5;
		if (name === 'Dracozolt') i = 5;
		if (name === 'Dragapult') i = 5;
		if (name === 'Dusclops') i = 3;
		if (name === 'Electabuzz') i = 6;
		if (name === 'Exeggutor') i = 2;
		if (name === 'Garchomp') i = 3;
		if (name === 'Hariyama') i = 4;
		if (name === 'Magearna') i = 2;
		if (name === 'Magnezone') i = 5;
		if (name === 'Mamoswine') i = 4;
		if (name === 'Moltres') i = 3;
		if (name === 'Nidoking') i = 4;
		if (name === 'Nidoqueen') i = 4;
		if (name === 'Nidorina') i = 4;
		if (name === 'Nidorino') i = 4;
		if (name === 'Regice') i = 3;
		if (name === 'Regidrago') i = 4;
		if (name === 'Regieleki') i = 4;
		if (name === 'Regigigas') i = 4;
		if (name === 'Regirock') i = 4;
		if (name === 'Registeel') i = 4;
		if (name === 'Slowbro') i = 4;
		if (name === 'Slowking') i = 4;
		if (name === 'Starmie') i = 4;
		if (name === 'Tyranitar') i = 6;
		if (name === 'Zapdos') i = 3;

		if (name === 'Acupressure') i = 3;
		if (name === 'Aromatherapy') i = 5;
		if (name === 'Boomburst') i = 4;
		if (name === 'Crabhammer') i = 4;
		if (name === 'Discharge') i = 3;
		if (name === 'Earthquake') i = 5;
		if (name === 'Extrasensory') i = 5;
		if (name === 'Flamethrower') i = 5;
		if (name === 'Headbutt') i = 4;
		if (name === 'Moonblast') i = 4;
		if (name === 'Moonlight') i = 4;
		if (name === 'Overheat') i = 4;
		if (name === 'Outrage') i = 3;
		if (name === 'Octazooka') i = 4;
		if (name === 'Payback') i = 3;
		if (name === 'Psyshock') i = 3;
		if (name === 'Psywave') i = 3;
		if (name === 'Rototiller') i = 4;
		if (name === 'Rollout') i = 4;
		if (name === 'Safeguard') i = 4;
		if (name === 'Sandstorm') i = 4;
		if (name === 'Smokescreen') i = 5;
		if (name === 'Stockpile') i = 5;
		if (name === 'Steamroller') i = 5;
		if (name === 'Superpower') i = 5;
		if (name === 'Supersonic') i = 5;
		if (name === 'Synchronoise') i = 7;
		if (name === 'Tailwind') i = 4;
		if (name === 'Telekinesis') i = 4;
		if (name === 'Teleport') i = 4;
		if (name === 'Thunderbolt') i = 7;
		if (name === 'Twineedle') i = 3;
		if (name === 'Uproar') i = 2;
		if (name === 'Venoshock') i = 4;
		if (name === 'Whirlpool') i = 5;
		if (name === 'Whirlwind') i = 5;
		let acronym;
		if (oldI < 0 && i > 0) {
			acronym = toID(name.charAt(0) + name.slice(i));
		}
		if (i < 0) return;
		index.push('' + toID(name.slice(i)) + ' ' + type + ' ' + id + ' ' + toID(name.slice(0, i)).length);
		if (name.startsWith('Hidden Power ')) {
			acronym = 'hp' + toID(name.substr(13));
			index.push('' + acronym + ' ' + type + ' ' + id + ' 0');
		} else if (name === 'Hidden Power') {
			index.push('hp ' + type + ' ' + id + ' 0');
		} else if (name.includes(' ')) {
			acronym = toID(name.split(' ').map((x, i) => i !== 0 ? x : x.charAt(0)).join(''));
		} else if (name.includes('-') && name.charAt(1) !== '-') {
			acronym = toID(name.split('-').map((x, i) => i !== 0 ? x : x.charAt(0)).join(''));
		}
		if (acronym) {
			index.push('' + acronym + ' ' + type + ' ' + id + ' 0');
		}
		if (name === 'High Jump Kick') {
			index.push('hjkick ' + type + ' ' + id + ' 0');
		} else if (name === 'Wake-Up Slap') {
			index.push('wuslap ' + type + ' ' + id + ' 0');
			index.push('wupslap ' + type + ' ' + id + ' 0');
		} else if (name === 'Zen Headbutt') {
			index.push('zhbutt ' + type + ' ' + id + ' 0');
		} else if (name === 'Articuno') {
			index.push('cuno ' + type + ' ' + id + ' 4');
		}

		let i2 = name.lastIndexOf(' ', i - 1);
		if (i2 < 0) i2 = name.lastIndexOf('-', i - 1);
		if (name === 'Zen Headbutt') i2 = 8;
		if (i2 >= 0) {
			index.push('' + toID(name.slice(i2)) + ' ' + type + ' ' + id + ' ' + toID(name.slice(0, i2)).length);
		}
	}
	for (const id in Dex.data.Pokedex) {
		const name = Dex.data.Pokedex[id].name;
		generateAlias(id, name, 'pokemon');
	}
	for (const id in Dex.data.Moves) {
		const name = Dex.data.Moves[id].name;
		generateAlias(id, name, 'move');
	}
	for (const id in Dex.data.Items) {
		const name = Dex.data.Items[id].name;
		generateAlias(id, name, 'item');
	}
	for (const id in Dex.data.Abilities) {
		const name = Dex.data.Abilities[id].name;
		generateAlias(id, name, 'ability');
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
				name = Dex.data.Pokedex[id]?.name ?? "";
        break;
      case "move":
				name = Dex.data.Moves[id]?.name ?? "";
        break;
      case "item":
				name = Dex.data.Items[id]?.name ?? "";
        break;
      case "ability":
				name = Dex.data.Abilities[id]?.name ?? "";
        break;
      case "article":
        name = BattleArticleTitles[id] || "";
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
	for (const type in Dex.data.TypeChart) {
		BattleSearchCountIndex[type + ' move'] = Object.keys(Dex.data.Moves).filter(id => (Dex.data.Moves[id].type === type)).length;
	}

	for (const type in Dex.data.TypeChart) {
		BattleSearchCountIndex[type + ' pokemon'] = Object.keys(Dex.data.Pokedex).filter(id => (Dex.data.Pokedex[id].types.indexOf(type) >= 0)).length;
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

process.stdout.write("Building `data/teambuilder-tables.js`... ");

{
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

	let buf = '// DO NOT EDIT - automatically built with build-tools/build-indexes\n\n';
	//
	// Learnset table
	//

	const gen3HMs = new Set(['cut', 'fly', 'surf', 'strength', 'flash', 'rocksmash', 'waterfall', 'dive']);
	const gen4HMs = new Set(['cut', 'fly', 'surf', 'strength', 'rocksmash', 'waterfall', 'rockclimb']);

	const learnsets = {};
	BattleTeambuilderTable.learnsets = learnsets;
	for (const id in Dex.data.Learnsets) {
		const learnset = Dex.data.Learnsets[id].learnset;
		if (!learnset) continue;
		learnsets[id] = {};
		for (const moveid in learnset) {
			const gens = learnset[moveid].map(x => Number(x[0]));
			const minGen = Math.min(...gens);

			if (minGen <= 4 && (gen3HMs.has(moveid) || gen4HMs.has(moveid))) {
				let legalGens = '';
				let available = false;

				if (minGen === 3) {
					legalGens += '3';
					available = true;
				}
				if (available) available = !gen3HMs.has(moveid);

				if (available || gens.includes(4)) {
					legalGens += '4';
					available = true;
				}
				if (available) available = !gen4HMs.has(moveid);

				let minUpperGen = available ? 5 : Math.min(
					...gens.filter(gen => gen > 4)
				);
				legalGens += '0123456789'.slice(minUpperGen);
				learnsets[id][moveid] = legalGens;
			} else {
				learnsets[id][moveid] = '0123456789'.slice(minGen);
			}

			if (gens.indexOf(6) >= 0) learnsets[id][moveid] += 'p';
			if (gens.indexOf(7) >= 0 && learnset[moveid].some(x => x[0] === '7' && x !== '7V')) {
				learnsets[id][moveid] += 'q';
			}
			if (gens.indexOf(8) >= 0 && learnset[moveid].some(x => x[0] === '8' && x !== '8V')) {
				learnsets[id][moveid] += 'g';
			}
			if (gens.indexOf(9) >= 0 && learnset[moveid].some(x => x[0] === '9' && x !== '9V')) {
				learnsets[id][moveid] += 'a';
			}
		}
	}
	
	buf += `exports.BattleTeambuilderTable = JSON.parse('${JSON.stringify(BattleTeambuilderTable).replace(/['\\]/g, "\\$&")}');\n\n`;

	fs.writeFileSync('data/teambuilder-tables.js', buf);
}

console.log("DONE");

// /*********************************************************
//  * Build pokedex.js
//  *********************************************************/

// process.stdout.write("Building `data/pokedex.js`... ");

// {
// 	const Pokedex = requireNoCache('../data/pokemon-showdown/dist/data/pokedex.js').Pokedex;
// 	for (const id in Pokedex) {
// 		const entry = Pokedex[id];
// 		if (Dex.data.FormatsData[id]) {
// 			// console.log('formatsentry:' + id);
// 			const formatsEntry = Dex.data.FormatsData[id];
// 			if (formatsEntry.tier) entry.tier = formatsEntry.tier;
// 			if (formatsEntry.isNonstandard) entry.isNonstandard = formatsEntry.isNonstandard;
// 			if (formatsEntry.unreleasedHidden) entry.unreleasedHidden = formatsEntry.unreleasedHidden;
// 		}
// 	}
// 	const buf = 'exports.BattlePokedex = ' + es3stringify(Pokedex) + ';';
// 	fs.writeFileSync('data/pokedex.js', buf);
// 	fs.writeFileSync('data/pokedex.json', JSON.stringify(Pokedex));
// }

// console.log("DONE");

// /*********************************************************
//  * Build moves.js
//  *********************************************************/

// process.stdout.write("Building `data/moves,items,abilities,typechart,learnsets.js`...");

// {
// 	const Moves = requireNoCache('../data/pokemon-showdown/dist/data/moves.js').Moves;
// 	for (const id in Moves) {
// 		const move = Dex.moves.get(Moves[id].name);
// 		if (move.desc) Moves[id].desc = move.desc;
// 		if (move.shortDesc) Moves[id].shortDesc = move.shortDesc;
// 	}
// 	const buf = 'exports.BattleMovedex = ' + es3stringify(Moves) + ';';
// 	fs.writeFileSync('data/moves.js', buf);
// 	fs.writeFileSync('data/moves.json', JSON.stringify(Moves));
// }

// /*********************************************************
//  * Build items.js
//  *********************************************************/

// {
// 	const Items = requireNoCache('../data/pokemon-showdown/dist/data/items.js').Items;
// 	for (const id in Items) {
// 		const item = Dex.items.get(Items[id].name);
// 		if (item.desc) Items[id].desc = item.desc;
// 		if (item.shortDesc) Items[id].shortDesc = item.shortDesc;
// 	}
// 	const buf = 'exports.BattleItems = ' + es3stringify(Items) + ';';
// 	fs.writeFileSync('data/items.js', buf);
// }

// /*********************************************************
//  * Build abilities.js
//  *********************************************************/

// {
// 	const Abilities = requireNoCache('../data/pokemon-showdown/dist/data/abilities.js').Abilities;
// 	for (const id in Abilities) {
// 		const ability = Dex.abilities.get(Abilities[id].name);
// 		if (ability.desc) Abilities[id].desc = ability.desc;
// 		if (ability.shortDesc) Abilities[id].shortDesc = ability.shortDesc;
// 	}
// 	const buf = 'exports.BattleAbilities = ' + es3stringify(Abilities) + ';';
// 	fs.writeFileSync('data/abilities.js', buf);
// }

// /*********************************************************
//  * Build typechart.js
//  *********************************************************/

// {
// 	const TypeChart = requireNoCache('../data/pokemon-showdown/dist/data/typechart.js').TypeChart;
// 	const buf = 'exports.BattleTypeChart = ' + es3stringify(TypeChart) + ';';
// 	fs.writeFileSync('data/typechart.js', buf);
// }

// /*********************************************************
//  * Build aliases.js
//  *********************************************************/

// {
// 	const Aliases = requireNoCache('../data/pokemon-showdown/dist/data/aliases.js').Aliases;
// 	const buf = 'exports.BattleAliases = ' + es3stringify(Aliases) + ';';
// 	fs.writeFileSync('data/aliases.js', buf);
// }

// /*********************************************************
//  * Build formats-data.js
//  *********************************************************/

// {
// 	const FormatsData = requireNoCache('../data/pokemon-showdown/dist/data/formats-data.js').FormatsData;
// 	const buf = 'exports.BattleFormatsData = ' + es3stringify(FormatsData) + ';';
// 	fs.writeFileSync('data/formats-data.js', buf);
// }

// /*********************************************************
//  * Build formats.js
//  *********************************************************/

// {
// 	const Formats = requireNoCache('../data/pokemon-showdown/dist/config/formats.js').Formats;
// 	const buf = 'exports.Formats = ' + es3stringify(Formats) + ';';
// 	fs.writeFileSync('data/formats.js', buf);
// }

// /*********************************************************
//  * Build learnsets.js
//  *********************************************************/

// {
// 	const Learnsets = requireNoCache('../data/pokemon-showdown/dist/data/learnsets.js').Learnsets;
// 	const buf = 'exports.BattleLearnsets = ' + es3stringify(Learnsets) + ';';
// 	fs.writeFileSync('data/learnsets.js', buf);
// 	fs.writeFileSync('data/learnsets.json', JSON.stringify(Learnsets));
// }

// /*********************************************************
//  * Build text.js
//  *********************************************************/

// {
// 	const textData = Dex.loadTextData();
// 	const Text = textData.Default;

// 	function assignData(id, entry) {
// 		for (const key in entry) {
// 			if (['name', 'desc', 'shortDesc'].includes(key)) continue;
// 			const textEntry = Text[id] || (Text[id] = {});
// 			if (key.startsWith('gen')) {
// 				for (const modKey in entry[key]) {
// 					if (['desc', 'shortDesc'].includes(key)) continue;
// 					textEntry[modKey + 'Gen' + key.charAt(3)] = entry[key][modKey];
// 				}
// 			} else {
// 				textEntry[key] = entry[key];
// 			}
// 		}
// 	}

// 	for (const id in textData.Moves) assignData(id, textData.Moves[id]);
// 	for (const id in textData.Abilities) assignData(id, textData.Abilities[id]);
// 	for (const id in textData.Items) assignData(id, textData.Items[id]);

// 	const buf = 'exports.BattleText = ' + es3stringify(Text) + ';';
// 	fs.writeFileSync('data/text.js', buf);
// }

console.log("DONE");
