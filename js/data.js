exports.BattleStatNames = {
  hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
}

exports.BattlePokedex.get = (id) => exports.BattlePokedex[toID(id)]
exports.BattleTypeChart.get = (id) => exports.BattleTypechart[toID(id)]

exports.Species = {
  get(id) {
    return this[toID(id)];
  },
  bulbasaur: {
    id: "bulbasaur",
    baseStats: {
      hp: 45,
      atk: 50,
      def: 50,
      spe: 45,
      spa: 65,
      spd: 65,
    },
    num: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    weightkg: 6.9,
    eggGroups: ["Monster", "Grass"],
    canHatch: true,
    bst: 320,
    weighthg: 69,
    genderRatio: {
      M: 0.5,
      F: 0.5,
    },
    abilities: {
      0: "Harvest",
      1: "Overgrow",
    },
    evos: ["Ivysaur"],
    learnset: [
      {
        move: "absorb",
        how: "lvl",
        level: 2,
      },
      {
        move: "surf",
        how: "tm",
      }
    ],
  },
  ivysaur: {
    baseStats: {
      hp: 60,
      atk: 70,
      def: 75,
      spe: 60,
      spa: 85,
      spd: 85,
    },
    weightkg: 6.9,
    evoLevel: 17,
    num: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    eggGroups: ["Monster", "Grass"],
    id: "ivysaur",
    fullname: "pokemon: Ivysaur",
    bst: 435,
    weighthg: 69,
    genderRatio: {
      M: 0.5,
      F: 0.5,
    },
    abilities: {
      0: "Harvest",
      1: "Overgrow",
    },
    evos: ["Venusaur"],
    nfe: true,
    prevo: "Bulbasaur",
  },
  venusaur: {
    id: "venusaur",
    baseStats: {
      hp: 100,
      atk: 100,
      def: 85,
      spe: 65,
      spa: 100,
      spd: 100,
    },
    evoLevel: 36,
    num: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    weightkg: 100,
    eggGroups: ["Monster", "Grass"],
    bst: 550,
    weighthg: 1000,
    genderRatio: {
      M: 0.5,
      F: 0.5,
    },
    abilities: {
      0: "Harvest",
      1: "Solar Rush",
    },
    nfe: false,
    formeOrder: ["Venusaur", "Venusaur-Mega"],
    formes: ["Venusaur", "Venusaur-Mega"],
    prevo: "Ivysaur",
  },
  venusaurmega: {
    baseStats: {
      hp: 100,
      atk: 120,
      def: 123,
      spe: 60,
      spa: 124,
      spd: 123,
    },
    id:"venusaurmega",
    num: 3,
    name: "Venusaur-Mega",
    baseSpecies: "Venusaur",
    forme: "Mega",
    types: ["Grass", "Poison"],
    weightkg: 155.5,
    eggGroups: ["Monster", "Grass"],
    requiredItem: "Venusaurite",
    bst: 650,
    weighthg: 1555,
    genderRatio: {
      M: 0.875,
      F: 0.125,
    },
    abilities: {
      0: "Thick Fat",
      1: "Grassy Guard",
    },
  },
};
