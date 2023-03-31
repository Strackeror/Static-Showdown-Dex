#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { BattleAbilities } from "../dist/data/abilities";
import { BattleItems } from "../dist/data/items";
import { BattleMovedex } from "../dist/data/moves";
import { BattlePokedex } from "../dist/data/pokedex";
import { BattleTypeChart } from "../dist/data/typechart";

const Dex = {
	data: {
		Pokedex: BattlePokedex,
		Moves: BattleMovedex,
		Abilities: BattleAbilities,
		TypeChart: BattleTypeChart,
		Items: BattleItems
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

	fs.writeFileSync('dist/data/search-index.js', buf);
}

console.log("DONE");

// /*********************************************************
//  * Build teambuilder-tables.js
//  *********************************************************/

// process.stdout.write("Building `data/teambuilder-tables.js`... ");

// {
// 	const BattleTeambuilderTable = {};

// 	let buf = '// DO NOT EDIT - automatically built with build-tools/build-indexes\n\n';
// 	const GENS = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// 	const DOUBLES = GENS.filter(x => x > 2).map(num => -num);
// 	const VGC = GENS.filter(x => x > 3).map(num => -num - 0.5);
// 	const NFE = GENS.map(num => num + 0.3);
// 	const STADIUM = [2.04, 1.04];
// 	const NATDEX = [9.1, 8.1];
// 	const OTHER = [9.2, 8.6, 8.4, 8.2, 8.1, -8.4, -8.6, 7.1];

// 	// process.stdout.write("\n  ");
// 	for (const genIdent of [...GENS, ...DOUBLES, ...VGC, ...NFE, ...STADIUM, ...OTHER, ...NATDEX]) {
// 		const isLetsGo = (genIdent === 7.1);
// 		const isBDSP = (genIdent === 8.6 || genIdent === -8.6);
// 		const isMetBattle = ('' + genIdent).endsWith('.2');
// 		const isNFE = ('' + genIdent).endsWith('.3');
// 		const isDLC1 = (genIdent === 8.4 || genIdent === -8.4);
// 		const isNatDex = ('' + genIdent).endsWith('.1') && genIdent > 8;
// 		const isStadium = ('' + genIdent).endsWith('.04');
// 		const isDoubles = (genIdent < 0);
// 		const isVGC = ('' + genIdent).endsWith('.5');
// 		const genNum = Math.floor(isDoubles ? -genIdent : genIdent);
// 		const gen = (() => {
// 			let genStr = 'gen' + genNum;
// 			if (isDLC1) genStr += 'dlc1';
// 			if (isLetsGo) genStr += 'letsgo';
// 			if (isBDSP) genStr += 'bdsp';
// 			if (isStadium) genStr += 'stadium' + (genNum > 1 ? genNum : '');
// 			return genStr;
// 		})();
// 		// process.stdout.write("" + gen + (isDoubles ? " doubles" : "") + "... ");
// 		const pokemon = Object.keys(Dex.data.Pokedex);
// 		pokemon.sort();
// 		const tierTable = {};
// 		const overrideTier = {};
// 		const zuBans = {};
// 		const monotypeBans = {};
// 		const nonstandardMoves = [];
// 		for (const id of pokemon) {
// 			const species = Dex.mod(gen).species.get(id);
// 			const baseSpecies = Dex.mod(gen).species.get(species.baseSpecies);
// 			if (species.gen > genNum) continue;
// 			const tier = (() => {
// 				if (isMetBattle) {
// 					let tier = species.tier;
// 					if (species.isNonstandard) {
// 						if (species.isNonstandard === 'Past') {
// 							tier = Dex.mod('gen7').species.get(species.name).tier;
// 						} else {
// 							tier = 'OU';
// 						}
// 					}
// 					if (species.isNonstandard === 'Gigantamax') tier = '(Uber)';
// 					if (species.tier === 'CAP LC') tier = 'LC';
// 					if (species.tier === 'CAP NFE') tier = 'NFE';
// 					if (species.tier === 'CAP') tier = 'OU';
// 					const format = Dex.formats.get(gen + 'metronomebattle');
// 					let bst = 0;
// 					for (const stat of Object.values(species.baseStats)) {
// 						bst += stat;
// 					}
// 					if (bst > 625) tier = 'Illegal';
// 					if (Dex.formats.getRuleTable(format).isBannedSpecies(species)) tier = 'Illegal';
// 					if (species.types.includes('Steel')) tier = 'Illegal';
// 					return tier;
// 				}
// 				if (isNFE) {
// 					let tier = species.tier;
// 					if (!species.nfe) tier = 'Illegal';
// 					const format = Dex.formats.get(gen + 'nfe');
// 					const banlist = Dex.formats.getRuleTable(format);
// 					if (banlist.isBannedSpecies(species)) {
// 						tier = 'Uber';
// 					}
// 					return tier;
// 				}
// 				if (isLetsGo) {
// 					let validNum = (baseSpecies.num <= 151 && species.num >= 1) || [808, 809].includes(baseSpecies.num);
// 					if (!validNum) return 'Illegal';
// 					if (species.forme && !['Alola', 'Mega', 'Mega-X', 'Mega-Y', 'Starter'].includes(species.forme)) return 'Illegal';
// 					if (species.name === 'Pikachu-Alola') return 'Illegal';
// 					return species.tier;
// 				}
// 				if (isVGC) {
// 					if (species.isNonstandard && species.isNonstandard !== 'Gigantamax') return 'Illegal';
// 					if (baseSpecies.tags.includes('Mythical')) return 'Mythical';
// 					if (baseSpecies.tags.includes('Restricted Legendary')) return 'Restricted Legendary';
// 					if (species.tier === 'NFE') return 'NFE';
// 					if (species.tier === 'LC') return 'LC';
// 					return 'Regular';
// 				}
// 				if (species.tier === 'CAP' || species.tier === 'CAP NFE' || species.tier === 'CAP LC') {
// 					return species.tier;
// 				}
// 				if (isDoubles && genNum > 4) {
// 					return species.doublesTier;
// 				}
// 				if (isNatDex) {
// 					return species.natDexTier;
// 				}
// 				return species.tier;
// 			})();
// 			overrideTier[species.id] = tier;
// 			if (species.forme) {
// 				if (
// 					[
// 						'Aegislash', 'Castform', 'Cherrim', 'Cramorant', 'Eiscue', 'Meloetta', 'Mimikyu', 'Minior', 'Morpeko', 'Wishiwashi',
// 					].includes(species.baseSpecies) || species.forme.includes('Totem') || species.forme.includes('Zen')
// 				) {
// 					continue;
// 				}
// 			}

// 			if (!tierTable[tier]) tierTable[tier] = [];
// 			tierTable[tier].push(id);

// 			if (
// 				tier !== 'LC' &&
// 				(
// 					(gen === 'gen8' && ['ferroseed', 'sandshrewalola'].includes(id)) ||
// 					(gen === 'gen7' && id === 'ferroseed') ||
// 					(gen === 'gen6' && ['ferroseed', 'pawniard', 'vullaby'].includes(id)) ||
// 					(gen === 'gen5' && ['bronzor', 'dwebble', 'ferroseed', 'natu', 'riolu', 'tentacool'].includes(id)) ||
// 					(gen === 'gen4' && ['clamperl', 'diglett', 'gligar', 'hippopotas', 'snover', 'wynaut'].includes(id))
// 				)
// 			) {
// 				if (!tierTable['LC']) tierTable['LC'] = [];
// 				tierTable['LC'].push(id);
// 			}
// 			if (genNum >= 5) {
// 				const zu = Dex.formats.get(gen + 'zu');
// 				if (zu.exists && Dex.formats.getRuleTable(zu).isBannedSpecies(species) &&
// 					["(PU)", "NFE", "LC"].includes(species.tier)) {
// 					zuBans[species.id] = 1;
// 				}
// 				const mono = Dex.formats.get(gen + (isNatDex ? 'nationaldex' : '') + 'monotype');
// 				if (Dex.formats.getRuleTable(mono).isBannedSpecies(species)) {
// 					monotypeBans[species.id] = 1;
// 				}
// 			}
// 		}

// 		nonstandardMoves.push(...Object.keys(Dex.data.Moves).filter(id => {
// 			const move = Dex.mod('gen8dlc1').moves.get(id);
// 			const bMove = Dex.mod('gen8').moves.get(id);
// 			return bMove.isNonstandard !== move.isNonstandard;
// 		}));

// 		const tiers = [];
// 		const items = [];
// 		const formatSlices = {};

// 		if (isNatDex) {
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'] = {};
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'].tiers = tiers;
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'].overrideTier = overrideTier;
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'].items = items;
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'].monotypeBans = monotypeBans;
// 			BattleTeambuilderTable['gen' + genNum + 'natdex'].formatSlices = formatSlices;
// 		} else if (isMetBattle) {
// 			BattleTeambuilderTable[gen + 'metronome'] = {};
// 			BattleTeambuilderTable[gen + 'metronome'].tiers = tiers;
// 			BattleTeambuilderTable[gen + 'metronome'].items = items;
// 			BattleTeambuilderTable[gen + 'metronome'].formatSlices = formatSlices;
// 		} else if (isNFE) {
// 			BattleTeambuilderTable[gen + 'nfe'] = {};
// 			BattleTeambuilderTable[gen + 'nfe'].tiers = tiers;
// 			BattleTeambuilderTable[gen + 'nfe'].overrideTier = overrideTier;
// 			BattleTeambuilderTable[gen + 'nfe'].formatSlices = formatSlices;
// 		} else if (isLetsGo) {
// 			BattleTeambuilderTable['gen7letsgo'] = {};
// 			BattleTeambuilderTable['gen7letsgo'].learnsets = {};
// 			BattleTeambuilderTable['gen7letsgo'].tiers = tiers;
// 			BattleTeambuilderTable['gen7letsgo'].overrideTier = overrideTier;
// 			BattleTeambuilderTable['gen7letsgo'].formatSlices = formatSlices;
// 		} else if (isBDSP && !isDoubles) {
// 			BattleTeambuilderTable['gen8bdsp'] = {};
// 			BattleTeambuilderTable['gen8bdsp'].learnsets = {};
// 			BattleTeambuilderTable['gen8bdsp'].tiers = tiers;
// 			BattleTeambuilderTable['gen8bdsp'].items = items;
// 			BattleTeambuilderTable['gen8bdsp'].overrideTier = overrideTier;
// 			BattleTeambuilderTable['gen8bdsp'].monotypeBans = monotypeBans;
// 			BattleTeambuilderTable['gen8bdsp'].formatSlices = formatSlices;
// 		} else if (isVGC) {
// 			BattleTeambuilderTable[gen + 'vgc'] = {};
// 			BattleTeambuilderTable[gen + 'vgc'].tiers = tiers;
// 			BattleTeambuilderTable[gen + 'vgc'].formatSlices = formatSlices;
// 		} else if (isDoubles) {
// 			BattleTeambuilderTable[gen + 'doubles'] = {};
// 			BattleTeambuilderTable[gen + 'doubles'].tiers = tiers;
// 			BattleTeambuilderTable[gen + 'doubles'].overrideTier = overrideTier;
// 			BattleTeambuilderTable[gen + 'doubles'].formatSlices = formatSlices;
// 		} else if (gen === 'gen9') {
// 			BattleTeambuilderTable.tiers = tiers;
// 			BattleTeambuilderTable.items = items;
// 			BattleTeambuilderTable.overrideTier = overrideTier;
// 			BattleTeambuilderTable.zuBans = zuBans;
// 			BattleTeambuilderTable.monotypeBans = monotypeBans;
// 			BattleTeambuilderTable.formatSlices = formatSlices;
// 		} else {
// 			BattleTeambuilderTable[gen] = {};
// 			BattleTeambuilderTable[gen].overrideTier = overrideTier;
// 			BattleTeambuilderTable[gen].tiers = tiers;
// 			BattleTeambuilderTable[gen].items = items;
// 			BattleTeambuilderTable[gen].formatSlices = formatSlices;
// 			if (genNum >= 5) {
// 				BattleTeambuilderTable[gen].zuBans = zuBans;
// 				BattleTeambuilderTable[gen].monotypeBans = monotypeBans;
// 			}
// 			if (isDLC1) {
// 				BattleTeambuilderTable[gen].nonstandardMoves = nonstandardMoves;
// 				BattleTeambuilderTable[gen].learnsets = {};
// 			}
// 		}

// 		const tierOrder = (() => {
// 			if (isVGC) {
// 				return ["Mythical", "Restricted Legendary", "Regular", "NFE", "LC"];
// 			}
// 			if (isDoubles && genNum > 4) {
// 				return ["DUber", "(DUber)", "DOU", "DBL", "(DOU)", "DUU", "(DUU)", "New", "NFE", "LC"];
// 			}
// 			if (gen === 'gen4') {
// 				return ["CAP", "CAP NFE", "CAP LC", "AG", "Uber", "OU", "(OU)", "UUBL", "UU", "NUBL", "NU", "NFE", "LC"];
// 			}
// 			return ["CAP", "CAP NFE", "CAP LC", "AG", "Uber", "(Uber)", "OU", "(OU)", "UUBL", "UU", "RUBL", "RU", "NUBL", "NU", "PUBL", "PU", "(PU)", "New", "NFE", "LC", "Unreleased"];
// 		})();

// 		for (const tier of tierOrder) {
// 			if (tier in {OU:1, AG:1, Uber:1, UU:1, RU:1, NU:1, PU:1, "(PU)":1, NFE:1, LC:1, DOU:1, DUU:1, "(DUU)":1, New:1, Legal:1, Regular:1, "Restricted Legendary":1, "CAP LC":1}) {
// 				let usedTier = tier;
// 				if (usedTier === "(PU)") usedTier = "ZU";
// 				if (usedTier === "(DUU)") usedTier = "DNU";
// 				formatSlices[usedTier] = tiers.length;
// 			}
// 			if (!tierTable[tier]) continue;
// 			if (tier === "(PU)") {
// 				tiers.push(['header', "Below PU"]);
// 			} else if (tier === "(DUU)") {
// 				tiers.push(['header', "Below DUU"]);
// 			} else if (tier.charAt(0) === '(') {
// 				tiers.push(['header', tier.slice(1, -1) + " by technicality"]);
// 			} else if (tier === "NFE") {
// 				tiers.push(['header', "NFEs not in a higher tier"]);
// 			} else {
// 				tiers.push(['header', tier]);
// 			}
// 			tiers.push(...tierTable[tier]);
// 		}
// 		if (!isDoubles) {
// 			if (!formatSlices['OU']) formatSlices['OU'] = formatSlices['New'];
// 			if (!formatSlices['UU']) formatSlices['UU'] = formatSlices['New'];
// 			if (!formatSlices['RU']) formatSlices['RU'] = formatSlices['New'];
// 		} else {
// 			if (!formatSlices['DOU']) formatSlices['DOU'] = formatSlices['New'];
// 			if (!formatSlices['DUU']) formatSlices['DUU'] = formatSlices['New'];
// 		}

// 		const itemList = Object.keys(Dex.data.Items);
// 		itemList.sort();

// 		const greatItems = [['header', "Popular items"]];
// 		const goodItems = [['header', "Items"]];
// 		const specificItems = [['header', "Pok&eacute;mon-specific items"]];
// 		const poorItems = [['header', "Usually useless items"]];
// 		const badItems = [['header', "Useless items"]];
// 		const unreleasedItems = [];
// 		if (genNum === 6) unreleasedItems.push(['header', "Unreleased"]);
// 		for (const id of itemList) {
// 			const item = Dex.mod(gen).items.get(id);
// 			if (item.gen > genNum) {
// 				continue;
// 			}
// 			if (item.isNonstandard && !isMetBattle) {
// 				if (isNatDex) {
// 					if (item.isNonstandard !== "Past") continue;
// 					if (!item.itemUser && !item.zMove) continue;
// 				} else if (genNum !== 2) {
// 					continue;
// 				}
// 			}
// 			if (isMetBattle) {
// 				const banlist = Dex.formats.getRuleTable(Dex.formats.get(gen + 'metronomebattle'));
// 				if (banlist.isBanned('item:' + item.id)) continue;
// 			}
// 			switch (id) {
// 			case 'leftovers':
// 			case 'lifeorb':
// 			case 'choiceband':
// 			case 'choicescarf':
// 			case 'choicespecs':
// 			case 'eviolite':
// 			case 'assaultvest':
// 			case 'focussash':
// 			case 'powerherb':
// 			case 'rockyhelmet':
// 			case 'heavydutyboots':
// 			case 'expertbelt':
// 			case 'salacberry':
// 				greatItems.push(id);
// 				break;
// 			case 'mentalherb':
// 				if (genNum > 4) greatItems.push(id);
// 				else poorItems.push(id);
// 				break;
// 			case 'lumberry':
// 				if (genNum === 2 || genNum > 6) goodItems.push(id);
// 				else greatItems.push(id);
// 				break;
// 			case 'sitrusberry':
// 				if (genNum > 6) goodItems.push(id);
// 				else if (genNum > 3 && genNum < 7) greatItems.push(id);
// 				else poorItems.push(id);
// 				break;
// 			case 'aguavberry':
// 			case 'figyberry':
// 			case 'iapapaberry':
// 			case 'magoberry':
// 			case 'wikiberry':
// 				if (genNum >= 7) greatItems.push(id);
// 				else poorItems.push(id);
// 				break;
// 			case 'berryjuice':
// 				if (genNum === 2) poorItems.push(id);
// 				else goodItems.push(id);
// 				break;
// 			case 'dragonfang':
// 				if (genNum === 2) badItems.push(id);
// 				else goodItems.push(id);
// 				break;
// 			case 'dragonscale':
// 				if (genNum === 2) goodItems.push(id);
// 				else badItems.push(id);
// 				break;
// 			case 'mail':
// 				if (genNum >= 6) unreleasedItems.push(id);
// 				else goodItems.push(id);
// 				break;
// 			// Legendaries
// 			case 'adamantorb':
// 			case 'griseousorb':
// 			case 'lustrousorb':
// 			case 'blueorb':
// 			case 'redorb':
// 			case 'souldew':
// 			// Other
// 			// fallsthrough
// 			case 'stick':
// 			case 'thickclub':
// 			case 'lightball':
// 			case 'luckypunch':
// 			case 'quickpowder':
// 			case 'metalpowder':
// 			case 'deepseascale':
// 			case 'deepseatooth':
// 				specificItems.push(id);
// 				break;
// 			// Fling-only
// 			case 'rarebone':
// 			case 'belueberry':
// 			case 'blukberry':
// 			case 'cornnberry':
// 			case 'durinberry':
// 			case 'hondewberry':
// 			case 'magostberry':
// 			case 'nanabberry':
// 			case 'nomelberry':
// 			case 'pamtreberry':
// 			case 'pinapberry':
// 			case 'pomegberry':
// 			case 'qualotberry':
// 			case 'rabutaberry':
// 			case 'razzberry':
// 			case 'spelonberry':
// 			case 'tamatoberry':
// 			case 'watmelberry':
// 			case 'wepearberry':
// 			case 'energypowder':
// 			case 'electirizer':
// 			case 'oldamber':
// 			case 'dawnstone':
// 			case 'dubiousdisc':
// 			case 'duskstone':
// 			case 'firestone':
// 			case 'icestone':
// 			case 'leafstone':
// 			case 'magmarizer':
// 			case 'moonstone':
// 			case 'ovalstone':
// 			case 'prismscale':
// 			case 'protector':
// 			case 'reapercloth':
// 			case 'sachet':
// 			case 'shinystone':
// 			case 'sunstone':
// 			case 'thunderstone':
// 			case 'upgrade':
// 			case 'waterstone':
// 			case 'whippeddream':
// 			case 'bottlecap':
// 			case 'goldbottlecap':
// 			case 'galaricacuff':
// 			case 'chippedpot':
// 			case 'crackedpot':
// 			case 'galaricawreath':
// 				badItems.push(id);
// 				break;
// 			// outclassed items
// 			case 'aspearberry':
// 			case 'bindingband':
// 			case 'cheriberry':
// 			case 'destinyknot':
// 			case 'enigmaberry':
// 			case 'floatstone':
// 			case 'ironball':
// 			case 'jabocaberry':
// 			case 'oranberry':
// 			case 'machobrace':
// 			case 'pechaberry':
// 			case 'persimberry':
// 			case 'poweranklet':
// 			case 'powerband':
// 			case 'powerbelt':
// 			case 'powerbracer':
// 			case 'powerlens':
// 			case 'powerweight':
// 			case 'rawstberry':
// 			case 'ringtarget':
// 			case 'rowapberry':
// 			case 'bigroot':
// 			case 'focusband':
// 			// gen 2
// 			case 'psncureberry':
// 			case 'przcureberry':
// 			case 'burntberry':
// 			case 'bitterberry':
// 			case 'iceberry':
// 			case 'berry':
// 				poorItems.push(id);
// 				break;
// 			default:
// 				if (
// 					item.name.endsWith(" Ball") || item.name.endsWith(" Fossil") || item.name.startsWith("Fossilized ") ||
// 					item.name.endsWith(" Sweet") || item.name.endsWith(" Apple")
// 				) {
// 					badItems.push(id);
// 				} else if (item.name.startsWith("TR")) {
// 					badItems.push(id);
// 				} else if (item.name.endsWith(" Gem") && item.name !== "Normal Gem") {
// 					if (genNum >= 6) {
// 						unreleasedItems.push(id);
// 					} else if (item.name === "Flying Gem") {
// 						greatItems.push(id);
// 					} else {
// 						goodItems.push(id);
// 					}
// 				} else if (item.name.endsWith(" Drive")) {
// 					specificItems.push(id);
// 				} else if (item.name.endsWith(" Memory")) {
// 					specificItems.push(id);
// 				} else if (item.name.startsWith("Rusted")) {
// 					specificItems.push(id);
// 				} else if (item.itemUser) {
// 					specificItems.push(id);
// 				} else if (item.megaStone) {
// 					specificItems.push(id);
// 				} else {
// 					goodItems.push(id);
// 				}
// 			}
// 		}
// 		items.push(...greatItems);
// 		items.push(...goodItems);
// 		items.push(...specificItems);
// 		items.push(...poorItems);
// 		items.push(...badItems);
// 		items.push(...unreleasedItems);
// 	}

// 	//
// 	// Learnset table
// 	//

// 	const gen3HMs = new Set(['cut', 'fly', 'surf', 'strength', 'flash', 'rocksmash', 'waterfall', 'dive']);
// 	const gen4HMs = new Set(['cut', 'fly', 'surf', 'strength', 'rocksmash', 'waterfall', 'rockclimb']);

// 	const learnsets = {};
// 	BattleTeambuilderTable.learnsets = learnsets;
// 	for (const id in Dex.data.Learnsets) {
// 		const learnset = Dex.data.Learnsets[id].learnset;
// 		if (!learnset) continue;
// 		learnsets[id] = {};
// 		for (const moveid in learnset) {
// 			const gens = learnset[moveid].map(x => Number(x[0]));
// 			const minGen = Math.min(...gens);

// 			if (minGen <= 4 && (gen3HMs.has(moveid) || gen4HMs.has(moveid))) {
// 				let legalGens = '';
// 				let available = false;

// 				if (minGen === 3) {
// 					legalGens += '3';
// 					available = true;
// 				}
// 				if (available) available = !gen3HMs.has(moveid);

// 				if (available || gens.includes(4)) {
// 					legalGens += '4';
// 					available = true;
// 				}
// 				if (available) available = !gen4HMs.has(moveid);

// 				let minUpperGen = available ? 5 : Math.min(
// 					...gens.filter(gen => gen > 4)
// 				);
// 				legalGens += '0123456789'.slice(minUpperGen);
// 				learnsets[id][moveid] = legalGens;
// 			} else {
// 				learnsets[id][moveid] = '0123456789'.slice(minGen);
// 			}

// 			if (gens.indexOf(6) >= 0) learnsets[id][moveid] += 'p';
// 			if (gens.indexOf(7) >= 0 && learnset[moveid].some(x => x[0] === '7' && x !== '7V')) {
// 				learnsets[id][moveid] += 'q';
// 			}
// 			if (gens.indexOf(8) >= 0 && learnset[moveid].some(x => x[0] === '8' && x !== '8V')) {
// 				learnsets[id][moveid] += 'g';
// 			}
// 			if (gens.indexOf(9) >= 0 && learnset[moveid].some(x => x[0] === '9' && x !== '9V')) {
// 				learnsets[id][moveid] += 'a';
// 			}
// 		}
// 	}
// 	const G2Learnsets = Dex.mod('gen2').data.Learnsets;
// 	for (const id in G2Learnsets) {
// 		const learnset = G2Learnsets[id].learnset;
// 		for (const moveid in learnset) {
// 			const gens = learnset[moveid].map(x => Number(x[0]));
// 			const minGen = Math.min(...gens);
// 			if (!learnsets[id]) {
// 				throw new Error(`${id} has a Gen 2 learnset but not a modern learnset`);
// 			}
// 			if (!learnsets[id][moveid]) learnsets[id][moveid] = '';
// 			if (minGen === 2) learnsets[id][moveid] = '2' + learnsets[id][moveid];
// 			if (minGen === 1) learnsets[id][moveid] = '12' + learnsets[id][moveid];
// 		}
// 	}
// 	const LGLearnsets = Dex.mod('gen7letsgo').data.Learnsets;
// 	for (const id in LGLearnsets) {
// 		const species = Dex.mod('gen7letsgo').species.get(id);
// 		const baseSpecies = Dex.mod('gen7letsgo').species.get(species.baseSpecies);
// 		const validNum = (baseSpecies.num <= 151 && baseSpecies.num >= 1) || [808, 809].includes(baseSpecies.num);
// 		if (!validNum) continue;
// 		if (species.forme && !['Alola', 'Mega', 'Mega-X', 'Mega-Y', 'Starter'].includes(species.forme)) continue;
// 		const learnset = LGLearnsets[id].learnset;
// 		BattleTeambuilderTable['gen7letsgo'].learnsets[id] = {};
// 		for (const moveid in learnset) {
// 			BattleTeambuilderTable['gen7letsgo'].learnsets[id][moveid] = '7';
// 		}
// 	}
// 	const BDSPLearnsets = Dex.mod('gen8bdsp').data.Learnsets;
// 	for (const id in BDSPLearnsets) {
// 		const species = Dex.mod('gen8bdsp').species.get(id);
// 		if (species.isNonstandard && !['Unobtainable', 'CAP'].includes(species.isNonstandard)) continue;
// 		const learnset = BDSPLearnsets[id].learnset;
// 		BattleTeambuilderTable['gen8bdsp'].learnsets[id] = {};
// 		for (const moveid in learnset) {
// 			BattleTeambuilderTable['gen8bdsp'].learnsets[id][moveid] = '8g';
// 		}
// 	}
// 	const DLC1Learnsets = Dex.mod('gen8dlc1').data.Learnsets;
// 	for (const id in DLC1Learnsets) {
// 		const learnset = DLC1Learnsets[id].learnset;
// 		if (!learnset) continue;
// 		BattleTeambuilderTable['gen8dlc1'].learnsets[id] = {};
// 		for (const moveid in learnset) {
// 			const gens = learnset[moveid].map(x => Number(x[0]));
// 			const minGen = Math.min(...gens);

// 			if (minGen <= 4 && (gen3HMs.has(moveid) || gen4HMs.has(moveid))) {
// 				let legalGens = '';
// 				let available = false;

// 				if (minGen === 3) {
// 					legalGens += '3';
// 					available = true;
// 				}
// 				if (available) available = !gen3HMs.has(moveid);

// 				if (available || gens.includes(4)) {
// 					legalGens += '4';
// 					available = true;
// 				}
// 				if (available) available = !gen4HMs.has(moveid);

// 				let minUpperGen = available ? 5 : Math.min(
// 					...gens.filter(gen => gen > 4)
// 				);
// 				legalGens += '012345678'.slice(minUpperGen);
// 				BattleTeambuilderTable['gen8dlc1'].learnsets[id][moveid] = legalGens;
// 			} else {
// 				BattleTeambuilderTable['gen8dlc1'].learnsets[id][moveid] = '012345678'.slice(minGen);
// 			}

// 			if (gens.indexOf(6) >= 0) BattleTeambuilderTable['gen8dlc1'].learnsets[id][moveid] += 'p';
// 			if (gens.indexOf(7) >= 0 && learnset[moveid].some(x => x[0] === '7' && x !== '7V')) {
// 				BattleTeambuilderTable['gen8dlc1'].learnsets[id][moveid] += 'q';
// 			}
// 			if (gens.indexOf(8) >= 0 && learnset[moveid].some(x => x[0] === '8' && x !== '8V')) {
// 				BattleTeambuilderTable['gen8dlc1'].learnsets[id][moveid] += 'g';
// 			}
// 		}
// 	}

// 	// Client relevant data that should be overriden by past gens and mods
// 	const overrideSpeciesKeys = ['abilities', 'baseStats', 'cosmeticFormes', 'isNonstandard', 'requiredItems', 'types', 'unreleasedHidden'];
// 	const overrideMoveKeys = ['accuracy', 'basePower', 'category', 'desc', 'flags', 'isNonstandard', 'noSketch', 'pp', 'priority', 'shortDesc', 'target', 'type'];
// 	const overrideAbilityKeys = ['desc', 'isNonstandard', 'rating', 'shortDesc'];

// 	//
// 	// Past gen table
// 	//

// 	for (const genNum of [8, 7, 6, 5, 4, 3, 2, 1]) {
// 		const gen = 'gen' + genNum;
// 		const nextGen = 'gen' + (genNum + 1);
// 		const genDex = Dex.mod(gen);
// 		const genData = genDex.data;
// 		const nextGenDex = Dex.mod(nextGen);
// 		const nextGenData = nextGenDex.data;

// 		const overrideSpeciesData = {};
// 		BattleTeambuilderTable[gen].overrideSpeciesData = overrideSpeciesData;
// 		for (const id in genData.Pokedex) {
// 			const curEntry = genDex.species.get(id);
// 			const nextEntry = nextGenDex.species.get(id);
// 			for (const key of overrideSpeciesKeys) {
// 				if (JSON.stringify(curEntry[key]) !== JSON.stringify(nextEntry[key])) {
// 					if (!overrideSpeciesData[id]) overrideSpeciesData[id] = {};
// 					overrideSpeciesData[id][key] = curEntry[key];
// 				}
// 			}
// 		}

// 		const overrideMoveData = {};
// 		BattleTeambuilderTable[gen].overrideMoveData = overrideMoveData;
// 		for (const id in genData.Moves) {
// 			const curEntry = genDex.moves.get(id);
// 			const nextEntry = nextGenDex.moves.get(id);
// 			for (const key of overrideMoveKeys) {
// 				if (key === 'category' && genNum <= 3) continue;
// 				if (JSON.stringify(curEntry[key]) !== JSON.stringify(nextEntry[key])) {
// 					if (!overrideMoveData[id]) overrideMoveData[id] = {};
// 					overrideMoveData[id][key] = curEntry[key];
// 				}
// 			}
// 		}

// 		const overrideAbilityData = {};
// 		BattleTeambuilderTable[gen].overrideAbilityData = overrideAbilityData;
// 		for (const id in genData.Abilities) {
// 			const curEntry = genDex.abilities.get(id);
// 			const nextEntry = nextGenDex.abilities.get(id);
// 			for (const key of overrideAbilityKeys) {
// 				if (JSON.stringify(curEntry[key]) !== JSON.stringify(nextEntry[key])) {
// 					if (!overrideAbilityData[id]) overrideAbilityData[id] = {};
// 					overrideAbilityData[id][key] = curEntry[key];
// 				}
// 			}
// 		}

// 		const overrideItemDesc = {};
// 		BattleTeambuilderTable[gen].overrideItemDesc = overrideItemDesc;
// 		for (const id in genData.Items) {
// 			const curEntry = genDex.items.get(id);
// 			const nextEntry = nextGenDex.items.get(id);
// 			if ((curEntry.shortDesc || curEntry.desc) !== (nextEntry.shortDesc || nextEntry.desc)) {
// 				overrideItemDesc[id] = (curEntry.shortDesc || curEntry.desc);
// 			}
// 		}

// 		const overrideTypeChart = {};
// 		BattleTeambuilderTable[gen].overrideTypeChart = overrideTypeChart;
// 		const removeType = {};
// 		BattleTeambuilderTable[gen].removeType = removeType;
// 		for (const id in nextGenData.TypeChart) {
// 			const curEntry = genData.TypeChart[id];
// 			const nextEntry = nextGenData.TypeChart[id];
// 			if (curEntry.isNonstandard) {
// 				removeType[id] = true;
// 				continue;
// 			}
// 			if (JSON.stringify(nextEntry) !== JSON.stringify(curEntry)) {
// 				overrideTypeChart[id] = curEntry;
// 			}
// 		}
// 	}

// 	//
// 	// Mods
// 	//

// 	for (const mod of ['gen7letsgo', 'gen8bdsp']) {
// 		const modDex = Dex.mod(mod);
// 		const modData = modDex.data;
// 		const parentDex = Dex.forGen(modDex.gen);

// 		const overrideSpeciesData = {};
// 		BattleTeambuilderTable[mod].overrideSpeciesData = overrideSpeciesData;
// 		for (const id in modData.Pokedex) {
// 			const modEntry = modDex.species.get(id);
// 			const parentEntry = parentDex.species.get(id);
// 			for (const key of overrideSpeciesKeys) {
// 				if (JSON.stringify(modEntry[key]) !== JSON.stringify(parentEntry[key])) {
// 					if (!overrideSpeciesData[id]) overrideSpeciesData[id] = {};
// 					overrideSpeciesData[id][key] = modEntry[key];
// 				}
// 			}
// 		}

// 		const overrideMoveData = {};
// 		BattleTeambuilderTable[mod].overrideMoveData = overrideMoveData;
// 		for (const id in modData.Moves) {
// 			const modEntry = modDex.moves.get(id);
// 			const parentEntry = parentDex.moves.get(id);
// 			for (const key of overrideMoveKeys) {
// 				if (key === 'category' && modDex.gen <= 3) continue;
// 				if (JSON.stringify(modEntry[key]) !== JSON.stringify(parentEntry[key])) {
// 					if (!overrideMoveData[id]) overrideMoveData[id] = {};
// 					overrideMoveData[id][key] = modEntry[key];
// 				}
// 			}
// 		}

// 		const overrideAbilityData = {};
// 		BattleTeambuilderTable[mod].overrideAbilityData = overrideAbilityData;
// 		for (const id in modData.Abilities) {
// 			const modEntry = modDex.abilities.get(id);
// 			const parentEntry = parentDex.abilities.get(id);
// 			for (const key of overrideAbilityKeys) {
// 				if (JSON.stringify(modEntry[key]) !== JSON.stringify(parentEntry[key])) {
// 					if (!overrideAbilityData[id]) overrideAbilityData[id] = {};
// 					overrideAbilityData[id][key] = modEntry[key];
// 				}
// 			}
// 		}
// 	}

// 	buf += `exports.BattleTeambuilderTable = JSON.parse('${JSON.stringify(BattleTeambuilderTable).replace(/['\\]/g, "\\$&")}');\n\n`;

// 	fs.writeFileSync('data/teambuilder-tables.js', buf);
// }

// console.log("DONE");

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
