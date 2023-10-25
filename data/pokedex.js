exports.BattlePokedex = {
  bulbasaur: {
    name: "Bulbasaur",
    num: 1,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Ivysaur"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.9,
    baseStats: {
      hp: 45,
      atk: 49,
      def: 49,
      spa: 65,
      spd: 65,
      spe: 45
    }
  },
  ivysaur: {
    name: "Ivysaur",
    num: 2,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Venusaur"
    ],
    prevo: "Bulbasaur",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 13,
    baseStats: {
      hp: 60,
      atk: 62,
      def: 63,
      spa: 80,
      spd: 80,
      spe: 60
    }
  },
  venusaur: {
    name: "Venusaur",
    num: 3,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Ivysaur",
    evoLevel: 32,
    formes: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 100,
    baseStats: {
      hp: 80,
      atk: 82,
      def: 83,
      spa: 100,
      spd: 100,
      spe: 80
    }
  },
  venusaurgmax: {
    name: "Venusaur-Gmax",
    num: 3,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    baseSpecies: "Venusaur",
    forme: "Gmax",
    formes: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 80,
      atk: 82,
      def: 83,
      spa: 100,
      spd: 100,
      spe: 80
    }
  },
  venusaurmega: {
    name: "Venusaur-Mega",
    num: 3,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Thick Fat"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    baseSpecies: "Venusaur",
    forme: "Mega",
    formes: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    requiredItem: "Venusaurite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 155.5,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 123,
      spa: 122,
      spd: 120,
      spe: 80
    }
  },
  charmander: {
    name: "Charmander",
    num: 4,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Charmeleon"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 8.5,
    baseStats: {
      hp: 39,
      atk: 52,
      def: 43,
      spa: 60,
      spd: 50,
      spe: 65
    }
  },
  charmeleon: {
    name: "Charmeleon",
    num: 5,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Charizard"
    ],
    prevo: "Charmander",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 19,
    baseStats: {
      hp: 58,
      atk: 64,
      def: 58,
      spa: 80,
      spd: 65,
      spe: 80
    }
  },
  charizard: {
    name: "Charizard",
    num: 6,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Charmeleon",
    evoLevel: 36,
    formes: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 90.5,
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    }
  },
  charizardgmax: {
    name: "Charizard-Gmax",
    num: 6,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Charizard",
    forme: "Gmax",
    formes: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    }
  },
  charizardmegax: {
    name: "Charizard-Mega-X",
    num: 6,
    types: [
      "Fire",
      "Dragon"
    ],
    abilities: {
      "0": "Tough Claws"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Charizard",
    forme: "Mega-X",
    formes: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    requiredItem: "Charizardite X",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 110.5,
    baseStats: {
      hp: 78,
      atk: 130,
      def: 111,
      spa: 130,
      spd: 85,
      spe: 100
    }
  },
  charizardmegay: {
    name: "Charizard-Mega-Y",
    num: 6,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Drought"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Charizard",
    forme: "Mega-Y",
    formes: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    requiredItem: "Charizardite Y",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 100.5,
    baseStats: {
      hp: 78,
      atk: 104,
      def: 78,
      spa: 159,
      spd: 115,
      spe: 100
    }
  },
  squirtle: {
    name: "Squirtle",
    num: 7,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Wartortle"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9,
    baseStats: {
      hp: 44,
      atk: 48,
      def: 65,
      spa: 50,
      spd: 64,
      spe: 43
    }
  },
  wartortle: {
    name: "Wartortle",
    num: 8,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Blastoise"
    ],
    prevo: "Squirtle",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 22.5,
    baseStats: {
      hp: 59,
      atk: 63,
      def: 80,
      spa: 65,
      spd: 80,
      spe: 58
    }
  },
  blastoise: {
    name: "Blastoise",
    num: 9,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Wartortle",
    evoLevel: 36,
    formes: [
      "Blastoise",
      "Blastoise-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 85.5,
    baseStats: {
      hp: 79,
      atk: 83,
      def: 100,
      spa: 85,
      spd: 105,
      spe: 78
    }
  },
  blastoisegmax: {
    name: "Blastoise-Gmax",
    num: 9,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Blastoise",
    forme: "Gmax",
    formes: [
      "Blastoise",
      "Blastoise-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 79,
      atk: 83,
      def: 100,
      spa: 85,
      spd: 105,
      spe: 78
    }
  },
  blastoisemega: {
    name: "Blastoise-Mega",
    num: 9,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Mega Launcher"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Blastoise",
    forme: "Mega",
    formes: [
      "Blastoise",
      "Blastoise-Mega"
    ],
    requiredItem: "Blastoisinite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 101.1,
    baseStats: {
      hp: 79,
      atk: 103,
      def: 120,
      spa: 135,
      spd: 115,
      spe: 78
    }
  },
  caterpie: {
    name: "Caterpie",
    num: 10,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Metapod"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.9,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 35,
      spa: 20,
      spd: 20,
      spe: 45
    }
  },
  metapod: {
    name: "Metapod",
    num: 11,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Butterfree"
    ],
    prevo: "Caterpie",
    evoLevel: 7,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.9,
    baseStats: {
      hp: 50,
      atk: 20,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 30
    }
  },
  butterfree: {
    name: "Butterfree",
    num: 12,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Compound Eyes",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Metapod",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 50,
      spa: 90,
      spd: 80,
      spe: 70
    }
  },
  butterfreegmax: {
    name: "Butterfree-Gmax",
    num: 12,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Compound Eyes",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Butterfree",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 50,
      spa: 90,
      spd: 80,
      spe: 70
    }
  },
  weedle: {
    name: "Weedle",
    num: 13,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Kakuna"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.2,
    baseStats: {
      hp: 40,
      atk: 35,
      def: 30,
      spa: 20,
      spd: 20,
      spe: 50
    }
  },
  kakuna: {
    name: "Kakuna",
    num: 14,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Shed Skin"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Beedrill"
    ],
    prevo: "Weedle",
    evoLevel: 7,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10,
    baseStats: {
      hp: 45,
      atk: 25,
      def: 50,
      spa: 25,
      spd: 25,
      spe: 35
    }
  },
  beedrill: {
    name: "Beedrill",
    num: 15,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Swarm",
      H: "Sniper"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Kakuna",
    evoLevel: 10,
    formes: [
      "Beedrill",
      "Beedrill-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.5,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 40,
      spa: 45,
      spd: 80,
      spe: 75
    }
  },
  beedrillmega: {
    name: "Beedrill-Mega",
    num: 15,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Adaptability"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Beedrill",
    forme: "Mega",
    formes: [
      "Beedrill",
      "Beedrill-Mega"
    ],
    requiredItem: "Beedrillite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.5,
    baseStats: {
      hp: 65,
      atk: 150,
      def: 40,
      spa: 15,
      spd: 80,
      spe: 145
    }
  },
  pidgey: {
    name: "Pidgey",
    num: 16,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Pidgeotto"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.8,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 35,
      spd: 35,
      spe: 56
    }
  },
  pidgeotto: {
    name: "Pidgeotto",
    num: 17,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Pidgeot"
    ],
    prevo: "Pidgey",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 63,
      atk: 60,
      def: 55,
      spa: 50,
      spd: 50,
      spe: 71
    }
  },
  pidgeot: {
    name: "Pidgeot",
    num: 18,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Pidgeotto",
    evoLevel: 36,
    formes: [
      "Pidgeot",
      "Pidgeot-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39.5,
    baseStats: {
      hp: 83,
      atk: 80,
      def: 75,
      spa: 70,
      spd: 70,
      spe: 101
    }
  },
  pidgeotmega: {
    name: "Pidgeot-Mega",
    num: 18,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "No Guard"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Pidgeot",
    forme: "Mega",
    formes: [
      "Pidgeot",
      "Pidgeot-Mega"
    ],
    requiredItem: "Pidgeotite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50.5,
    baseStats: {
      hp: 83,
      atk: 80,
      def: 80,
      spa: 135,
      spd: 80,
      spe: 121
    }
  },
  rattata: {
    name: "Rattata",
    num: 19,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Guts",
      H: "Hustle"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Raticate"
    ],
    formes: [
      "Rattata",
      "Rattata-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 30,
      atk: 56,
      def: 35,
      spa: 25,
      spd: 35,
      spe: 72
    }
  },
  rattataalola: {
    name: "Rattata-Alola",
    num: 19,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Gluttony",
      "1": "Hustle",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Raticate-Alola"
    ],
    baseSpecies: "Rattata",
    forme: "Alola",
    formes: [
      "Rattata",
      "Rattata-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.8,
    baseStats: {
      hp: 30,
      atk: 56,
      def: 35,
      spa: 25,
      spd: 35,
      spe: 72
    }
  },
  raticate: {
    name: "Raticate",
    num: 20,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Guts",
      H: "Hustle"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rattata",
    evoLevel: 20,
    formes: [
      "Raticate",
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18.5,
    baseStats: {
      hp: 55,
      atk: 81,
      def: 60,
      spa: 50,
      spd: 70,
      spe: 97
    }
  },
  raticatealola: {
    name: "Raticate-Alola",
    num: 20,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Gluttony",
      "1": "Hustle",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rattata-Alola",
    evoLevel: 20,
    evoCondition: "at night",
    baseSpecies: "Raticate",
    forme: "Alola",
    formes: [
      "Raticate",
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25.5,
    baseStats: {
      hp: 75,
      atk: 71,
      def: 70,
      spa: 40,
      spd: 80,
      spe: 77
    }
  },
  raticatealolatotem: {
    name: "Raticate-Alola-Totem",
    num: 20,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Raticate",
    forme: "Alola-Totem",
    formes: [
      "Raticate",
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 105,
    baseStats: {
      hp: 75,
      atk: 71,
      def: 70,
      spa: 40,
      spd: 80,
      spe: 77
    }
  },
  spearow: {
    name: "Spearow",
    num: 21,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      H: "Sniper"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Fearow"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 40,
      atk: 60,
      def: 30,
      spa: 31,
      spd: 31,
      spe: 70
    }
  },
  fearow: {
    name: "Fearow",
    num: 22,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      H: "Sniper"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Spearow",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 65,
      spa: 61,
      spd: 61,
      spe: 100
    }
  },
  ekans: {
    name: "Ekans",
    num: 23,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Shed Skin",
      H: "Unnerve"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    evos: [
      "Arbok"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.9,
    baseStats: {
      hp: 35,
      atk: 60,
      def: 44,
      spa: 40,
      spd: 54,
      spe: 55
    }
  },
  arbok: {
    name: "Arbok",
    num: 24,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Shed Skin",
      H: "Unnerve"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    prevo: "Ekans",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 65,
    baseStats: {
      hp: 60,
      atk: 95,
      def: 69,
      spa: 65,
      spd: 79,
      spe: 80
    }
  },
  pikachu: {
    name: "Pikachu",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    evos: [
      "Raichu",
      "Raichu-Alola"
    ],
    prevo: "Pichu",
    evoType: "levelFriendship",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachualola: {
    name: "Pikachu-Alola",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Alola",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachubelle: {
    name: "Pikachu-Belle",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Belle",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachucosplay: {
    name: "Pikachu-Cosplay",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Cosplay",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachugmax: {
    name: "Pikachu-Gmax",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    baseSpecies: "Pikachu",
    forme: "Gmax",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachuhoenn: {
    name: "Pikachu-Hoenn",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Hoenn",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachukalos: {
    name: "Pikachu-Kalos",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Kalos",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachulibre: {
    name: "Pikachu-Libre",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Libre",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachuoriginal: {
    name: "Pikachu-Original",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Original",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachupartner: {
    name: "Pikachu-Partner",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Partner",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachuphd: {
    name: "Pikachu-PhD",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "PhD",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachupopstar: {
    name: "Pikachu-Pop-Star",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Pop-Star",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachurockstar: {
    name: "Pikachu-Rock-Star",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Rock-Star",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachusinnoh: {
    name: "Pikachu-Sinnoh",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Sinnoh",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachuunova: {
    name: "Pikachu-Unova",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "Unova",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  pikachuworld: {
    name: "Pikachu-World",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pikachu",
    forme: "World",
    formes: [
      "Pikachu",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Cosplay"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  raichu: {
    name: "Raichu",
    num: 26,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Pikachu",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    formes: [
      "Raichu",
      "Raichu-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 55,
      spa: 90,
      spd: 80,
      spe: 110
    }
  },
  raichualola: {
    name: "Raichu-Alola",
    num: 26,
    types: [
      "Electric",
      "Psychic"
    ],
    abilities: {
      "0": "Surge Surfer"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Pikachu",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    baseSpecies: "Raichu",
    forme: "Alola",
    formes: [
      "Raichu",
      "Raichu-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 50,
      spa: 95,
      spd: 85,
      spe: 110
    }
  },
  sandshrew: {
    name: "Sandshrew",
    num: 27,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Sand Rush"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Sandslash"
    ],
    formes: [
      "Sandshrew",
      "Sandshrew-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 85,
      spa: 20,
      spd: 30,
      spe: 40
    }
  },
  sandshrewalola: {
    name: "Sandshrew-Alola",
    num: 27,
    types: [
      "Ice",
      "Steel"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Slush Rush"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Sandslash-Alola"
    ],
    baseSpecies: "Sandshrew",
    forme: "Alola",
    formes: [
      "Sandshrew",
      "Sandshrew-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 90,
      spa: 10,
      spd: 35,
      spe: 40
    }
  },
  sandslash: {
    name: "Sandslash",
    num: 28,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Sand Rush"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sandshrew",
    evoLevel: 22,
    formes: [
      "Sandslash",
      "Sandslash-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.5,
    baseStats: {
      hp: 75,
      atk: 100,
      def: 110,
      spa: 45,
      spd: 55,
      spe: 65
    }
  },
  sandslashalola: {
    name: "Sandslash-Alola",
    num: 28,
    types: [
      "Ice",
      "Steel"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Slush Rush"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sandshrew-Alola",
    evoItem: "Ice Stone",
    evoType: "useItem",
    baseSpecies: "Sandslash",
    forme: "Alola",
    formes: [
      "Sandslash",
      "Sandslash-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 75,
      atk: 100,
      def: 120,
      spa: 25,
      spd: 65,
      spe: 65
    }
  },
  nidoranf: {
    name: "Nidoran-F",
    num: 29,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Nidorina"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 7,
    baseStats: {
      hp: 55,
      atk: 47,
      def: 52,
      spa: 40,
      spd: 40,
      spe: 41
    }
  },
  nidorina: {
    name: "Nidorina",
    num: 30,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Nidoqueen"
    ],
    prevo: "Nidoran-F",
    evoLevel: 16,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 20,
    baseStats: {
      hp: 70,
      atk: 62,
      def: 67,
      spa: 55,
      spd: 55,
      spe: 56
    }
  },
  nidoqueen: {
    name: "Nidoqueen",
    num: 31,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Sheer Force"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Nidorina",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 60,
    baseStats: {
      hp: 90,
      atk: 92,
      def: 87,
      spa: 75,
      spd: 85,
      spe: 76
    }
  },
  nidoranm: {
    name: "Nidoran-M",
    num: 32,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Nidorino"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 9,
    baseStats: {
      hp: 46,
      atk: 57,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 50
    }
  },
  nidorino: {
    name: "Nidorino",
    num: 33,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Nidoking"
    ],
    prevo: "Nidoran-M",
    evoLevel: 16,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 19.5,
    baseStats: {
      hp: 61,
      atk: 72,
      def: 57,
      spa: 55,
      spd: 55,
      spe: 65
    }
  },
  nidoking: {
    name: "Nidoking",
    num: 34,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Nidorino",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 62,
    baseStats: {
      hp: 81,
      atk: 102,
      def: 77,
      spa: 85,
      spd: 75,
      spe: 85
    }
  },
  clefairy: {
    name: "Clefairy",
    num: 35,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Friend Guard"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Clefable"
    ],
    prevo: "Cleffa",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 7.5,
    baseStats: {
      hp: 70,
      atk: 45,
      def: 48,
      spa: 60,
      spd: 65,
      spe: 35
    }
  },
  clefable: {
    name: "Clefable",
    num: 36,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Unaware"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Clefairy",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 40,
    baseStats: {
      hp: 95,
      atk: 70,
      def: 73,
      spa: 95,
      spd: 90,
      spe: 60
    }
  },
  vulpix: {
    name: "Vulpix",
    num: 37,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Drought"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Ninetales"
    ],
    formes: [
      "Vulpix",
      "Vulpix-Alola"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 9.9,
    baseStats: {
      hp: 38,
      atk: 41,
      def: 40,
      spa: 50,
      spd: 65,
      spe: 65
    }
  },
  vulpixalola: {
    name: "Vulpix-Alola",
    num: 37,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Snow Warning"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Ninetales-Alola"
    ],
    baseSpecies: "Vulpix",
    forme: "Alola",
    formes: [
      "Vulpix",
      "Vulpix-Alola"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 9.9,
    baseStats: {
      hp: 38,
      atk: 41,
      def: 40,
      spa: 50,
      spd: 65,
      spe: 65
    }
  },
  ninetales: {
    name: "Ninetales",
    num: 38,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Drought"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vulpix",
    evoItem: "Fire Stone",
    evoType: "useItem",
    formes: [
      "Ninetales",
      "Ninetales-Alola"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 19.9,
    baseStats: {
      hp: 73,
      atk: 76,
      def: 75,
      spa: 81,
      spd: 100,
      spe: 100
    }
  },
  ninetalesalola: {
    name: "Ninetales-Alola",
    num: 38,
    types: [
      "Ice",
      "Fairy"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Snow Warning"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vulpix-Alola",
    evoItem: "Ice Stone",
    evoType: "useItem",
    baseSpecies: "Ninetales",
    forme: "Alola",
    formes: [
      "Ninetales",
      "Ninetales-Alola"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 19.9,
    baseStats: {
      hp: 73,
      atk: 67,
      def: 75,
      spa: 81,
      spd: 100,
      spe: 109
    }
  },
  jigglypuff: {
    name: "Jigglypuff",
    num: 39,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Friend Guard"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Wigglytuff"
    ],
    prevo: "Igglybuff",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5.5,
    baseStats: {
      hp: 115,
      atk: 45,
      def: 20,
      spa: 45,
      spd: 25,
      spe: 20
    }
  },
  wigglytuff: {
    name: "Wigglytuff",
    num: 40,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Frisk"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Jigglypuff",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 12,
    baseStats: {
      hp: 140,
      atk: 70,
      def: 45,
      spa: 85,
      spd: 50,
      spe: 45
    }
  },
  zubat: {
    name: "Zubat",
    num: 41,
    types: [
      "Poison",
      "Flying"
    ],
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Golbat"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.5,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 30,
      spd: 40,
      spe: 55
    }
  },
  golbat: {
    name: "Golbat",
    num: 42,
    types: [
      "Poison",
      "Flying"
    ],
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Crobat"
    ],
    prevo: "Zubat",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 70,
      spa: 65,
      spd: 75,
      spe: 90
    }
  },
  oddish: {
    name: "Oddish",
    num: 43,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Run Away"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Gloom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.4,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 55,
      spa: 75,
      spd: 65,
      spe: 30
    }
  },
  gloom: {
    name: "Gloom",
    num: 44,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Stench"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Vileplume",
      "Bellossom"
    ],
    prevo: "Oddish",
    evoLevel: 21,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.6,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 70,
      spa: 85,
      spd: 75,
      spe: 40
    }
  },
  vileplume: {
    name: "Vileplume",
    num: 45,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Effect Spore"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Gloom",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18.6,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 85,
      spa: 110,
      spd: 90,
      spe: 50
    }
  },
  paras: {
    name: "Paras",
    num: 46,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Effect Spore",
      "1": "Dry Skin",
      H: "Damp"
    },
    eggGroups: [
      "Bug",
      "Grass"
    ],
    evos: [
      "Parasect"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.4,
    baseStats: {
      hp: 35,
      atk: 70,
      def: 55,
      spa: 45,
      spd: 55,
      spe: 25
    }
  },
  parasect: {
    name: "Parasect",
    num: 47,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Effect Spore",
      "1": "Dry Skin",
      H: "Damp"
    },
    eggGroups: [
      "Bug",
      "Grass"
    ],
    prevo: "Paras",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.5,
    baseStats: {
      hp: 60,
      atk: 95,
      def: 80,
      spa: 60,
      spd: 80,
      spe: 30
    }
  },
  venonat: {
    name: "Venonat",
    num: 48,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Compound Eyes",
      "1": "Tinted Lens",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Venomoth"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 50,
      spa: 40,
      spd: 55,
      spe: 45
    }
  },
  venomoth: {
    name: "Venomoth",
    num: 49,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Tinted Lens",
      H: "Wonder Skin"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Venonat",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.5,
    baseStats: {
      hp: 70,
      atk: 65,
      def: 60,
      spa: 90,
      spd: 75,
      spe: 90
    }
  },
  diglett: {
    name: "Diglett",
    num: 50,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      "1": "Arena Trap",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dugtrio"
    ],
    formes: [
      "Diglett",
      "Diglett-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.8,
    baseStats: {
      hp: 10,
      atk: 55,
      def: 25,
      spa: 35,
      spd: 45,
      spe: 95
    }
  },
  diglettalola: {
    name: "Diglett-Alola",
    num: 50,
    types: [
      "Ground",
      "Steel"
    ],
    abilities: {
      "0": "Sand Veil",
      "1": "Tangling Hair",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dugtrio-Alola"
    ],
    baseSpecies: "Diglett",
    forme: "Alola",
    formes: [
      "Diglett",
      "Diglett-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 10,
      atk: 55,
      def: 30,
      spa: 35,
      spd: 45,
      spe: 90
    }
  },
  dugtrio: {
    name: "Dugtrio",
    num: 51,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      "1": "Arena Trap",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Diglett",
    evoLevel: 26,
    formes: [
      "Dugtrio",
      "Dugtrio-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.3,
    baseStats: {
      hp: 35,
      atk: 100,
      def: 50,
      spa: 50,
      spd: 70,
      spe: 120
    }
  },
  dugtrioalola: {
    name: "Dugtrio-Alola",
    num: 51,
    types: [
      "Ground",
      "Steel"
    ],
    abilities: {
      "0": "Sand Veil",
      "1": "Tangling Hair",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Diglett-Alola",
    evoLevel: 26,
    baseSpecies: "Dugtrio",
    forme: "Alola",
    formes: [
      "Dugtrio",
      "Dugtrio-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 66.6,
    baseStats: {
      hp: 35,
      atk: 100,
      def: 60,
      spa: 50,
      spd: 70,
      spe: 110
    }
  },
  meowth: {
    name: "Meowth",
    num: 52,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Technician",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Persian"
    ],
    formes: [
      "Meowth",
      "Meowth-Alola",
      "Meowth-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 40,
      spd: 40,
      spe: 90
    }
  },
  meowthalola: {
    name: "Meowth-Alola",
    num: 52,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Technician",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Persian-Alola"
    ],
    baseSpecies: "Meowth",
    forme: "Alola",
    formes: [
      "Meowth",
      "Meowth-Alola",
      "Meowth-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 40,
      atk: 35,
      def: 35,
      spa: 50,
      spd: 40,
      spe: 90
    }
  },
  meowthgalar: {
    name: "Meowth-Galar",
    num: 52,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Tough Claws",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Perrserker"
    ],
    baseSpecies: "Meowth",
    forme: "Galar",
    formes: [
      "Meowth",
      "Meowth-Alola",
      "Meowth-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.5,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 55,
      spa: 40,
      spd: 40,
      spe: 40
    }
  },
  meowthgmax: {
    name: "Meowth-Gmax",
    num: 52,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Technician",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Meowth",
    forme: "Gmax",
    formes: [
      "Meowth",
      "Meowth-Alola",
      "Meowth-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 40,
      spd: 40,
      spe: 90
    }
  },
  persian: {
    name: "Persian",
    num: 53,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Limber",
      "1": "Technician",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Meowth",
    evoLevel: 28,
    formes: [
      "Persian",
      "Persian-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 65,
      atk: 70,
      def: 60,
      spa: 65,
      spd: 65,
      spe: 115
    }
  },
  persianalola: {
    name: "Persian-Alola",
    num: 53,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Technician",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Meowth-Alola",
    evoType: "levelFriendship",
    baseSpecies: "Persian",
    forme: "Alola",
    formes: [
      "Persian",
      "Persian-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 60,
      spa: 75,
      spd: 65,
      spe: 115
    }
  },
  psyduck: {
    name: "Psyduck",
    num: 54,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Damp",
      "1": "Cloud Nine",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Golduck"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.6,
    baseStats: {
      hp: 50,
      atk: 52,
      def: 48,
      spa: 65,
      spd: 50,
      spe: 55
    }
  },
  golduck: {
    name: "Golduck",
    num: 55,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Damp",
      "1": "Cloud Nine",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Psyduck",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 76.6,
    baseStats: {
      hp: 80,
      atk: 82,
      def: 78,
      spa: 95,
      spd: 80,
      spe: 85
    }
  },
  mankey: {
    name: "Mankey",
    num: 56,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Anger Point",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Primeape"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 40,
      atk: 80,
      def: 35,
      spa: 35,
      spd: 45,
      spe: 70
    }
  },
  primeape: {
    name: "Primeape",
    num: 57,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Anger Point",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Annihilape"
    ],
    prevo: "Mankey",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 65,
      atk: 105,
      def: 60,
      spa: 60,
      spd: 70,
      spe: 95
    }
  },
  growlithe: {
    name: "Growlithe",
    num: 58,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Justified"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Arcanine"
    ],
    formes: [
      "Growlithe",
      "Growlithe-Hisui"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 19,
    baseStats: {
      hp: 55,
      atk: 70,
      def: 45,
      spa: 70,
      spd: 50,
      spe: 60
    }
  },
  growlithehisui: {
    name: "Growlithe-Hisui",
    num: 58,
    types: [
      "Fire",
      "Rock"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Rock Head"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Arcanine-Hisui"
    ],
    baseSpecies: "Growlithe",
    forme: "Hisui",
    formes: [
      "Growlithe",
      "Growlithe-Hisui"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 22.7,
    baseStats: {
      hp: 60,
      atk: 75,
      def: 45,
      spa: 65,
      spd: 50,
      spe: 55
    }
  },
  arcanine: {
    name: "Arcanine",
    num: 59,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Justified"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Growlithe",
    evoItem: "Fire Stone",
    evoType: "useItem",
    formes: [
      "Arcanine",
      "Arcanine-Hisui"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 155,
    baseStats: {
      hp: 90,
      atk: 110,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 95
    }
  },
  arcaninehisui: {
    name: "Arcanine-Hisui",
    num: 59,
    types: [
      "Fire",
      "Rock"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Rock Head"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Growlithe-Hisui",
    evoItem: "Fire Stone",
    evoType: "useItem",
    baseSpecies: "Arcanine",
    forme: "Hisui",
    formes: [
      "Arcanine",
      "Arcanine-Hisui"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 168,
    baseStats: {
      hp: 95,
      atk: 115,
      def: 80,
      spa: 95,
      spd: 80,
      spe: 90
    }
  },
  poliwag: {
    name: "Poliwag",
    num: 60,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Poliwhirl"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.4,
    baseStats: {
      hp: 40,
      atk: 50,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 90
    }
  },
  poliwhirl: {
    name: "Poliwhirl",
    num: 61,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Poliwrath",
      "Politoed"
    ],
    prevo: "Poliwag",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 65,
      spa: 50,
      spd: 50,
      spe: 90
    }
  },
  poliwrath: {
    name: "Poliwrath",
    num: 62,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Poliwhirl",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 54,
    baseStats: {
      hp: 90,
      atk: 95,
      def: 95,
      spa: 70,
      spd: 90,
      spe: 70
    }
  },
  abra: {
    name: "Abra",
    num: 63,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Kadabra"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 19.5,
    baseStats: {
      hp: 25,
      atk: 20,
      def: 15,
      spa: 105,
      spd: 55,
      spe: 90
    }
  },
  kadabra: {
    name: "Kadabra",
    num: 64,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Alakazam"
    ],
    prevo: "Abra",
    evoLevel: 16,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 56.5,
    baseStats: {
      hp: 40,
      atk: 35,
      def: 30,
      spa: 120,
      spd: 70,
      spe: 105
    }
  },
  alakazam: {
    name: "Alakazam",
    num: 65,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Kadabra",
    evoType: "trade",
    formes: [
      "Alakazam",
      "Alakazam-Mega"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 48,
    baseStats: {
      hp: 55,
      atk: 50,
      def: 45,
      spa: 135,
      spd: 95,
      spe: 120
    }
  },
  alakazammega: {
    name: "Alakazam-Mega",
    num: 65,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Trace"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Alakazam",
    forme: "Mega",
    formes: [
      "Alakazam",
      "Alakazam-Mega"
    ],
    requiredItem: "Alakazite",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 48,
    baseStats: {
      hp: 55,
      atk: 50,
      def: 65,
      spa: 175,
      spd: 105,
      spe: 150
    }
  },
  machop: {
    name: "Machop",
    num: 66,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Machoke"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 19.5,
    baseStats: {
      hp: 70,
      atk: 80,
      def: 50,
      spa: 35,
      spd: 35,
      spe: 35
    }
  },
  machoke: {
    name: "Machoke",
    num: 67,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Machamp"
    ],
    prevo: "Machop",
    evoLevel: 28,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 70.5,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 70,
      spa: 50,
      spd: 60,
      spe: 45
    }
  },
  machamp: {
    name: "Machamp",
    num: 68,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Machoke",
    evoType: "trade",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 130,
    baseStats: {
      hp: 90,
      atk: 130,
      def: 80,
      spa: 65,
      spd: 85,
      spe: 55
    }
  },
  machampgmax: {
    name: "Machamp-Gmax",
    num: 68,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Machamp",
    forme: "Gmax",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 0,
    baseStats: {
      hp: 90,
      atk: 130,
      def: 80,
      spa: 65,
      spd: 85,
      spe: 55
    }
  },
  bellsprout: {
    name: "Bellsprout",
    num: 69,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Weepinbell"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 35,
      spa: 70,
      spd: 30,
      spe: 40
    }
  },
  weepinbell: {
    name: "Weepinbell",
    num: 70,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Victreebel"
    ],
    prevo: "Bellsprout",
    evoLevel: 21,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.4,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 50,
      spa: 85,
      spd: 45,
      spe: 55
    }
  },
  victreebel: {
    name: "Victreebel",
    num: 71,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Weepinbell",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 80,
      atk: 105,
      def: 65,
      spa: 100,
      spd: 70,
      spe: 70
    }
  },
  tentacool: {
    name: "Tentacool",
    num: 72,
    types: [
      "Water",
      "Poison"
    ],
    abilities: {
      "0": "Clear Body",
      "1": "Liquid Ooze",
      H: "Rain Dish"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Tentacruel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 45.5,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 35,
      spa: 50,
      spd: 100,
      spe: 70
    }
  },
  tentacruel: {
    name: "Tentacruel",
    num: 73,
    types: [
      "Water",
      "Poison"
    ],
    abilities: {
      "0": "Clear Body",
      "1": "Liquid Ooze",
      H: "Rain Dish"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Tentacool",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 65,
      spa: 80,
      spd: 120,
      spe: 100
    }
  },
  geodude: {
    name: "Geodude",
    num: 74,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Graveler"
    ],
    formes: [
      "Geodude",
      "Geodude-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20,
    baseStats: {
      hp: 40,
      atk: 80,
      def: 100,
      spa: 30,
      spd: 30,
      spe: 20
    }
  },
  geodudealola: {
    name: "Geodude-Alola",
    num: 74,
    types: [
      "Rock",
      "Electric"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Graveler-Alola"
    ],
    baseSpecies: "Geodude",
    forme: "Alola",
    formes: [
      "Geodude",
      "Geodude-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.3,
    baseStats: {
      hp: 40,
      atk: 80,
      def: 100,
      spa: 30,
      spd: 30,
      spe: 20
    }
  },
  graveler: {
    name: "Graveler",
    num: 75,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Golem"
    ],
    prevo: "Geodude",
    evoLevel: 25,
    formes: [
      "Graveler",
      "Graveler-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 105,
    baseStats: {
      hp: 55,
      atk: 95,
      def: 115,
      spa: 45,
      spd: 45,
      spe: 35
    }
  },
  graveleralola: {
    name: "Graveler-Alola",
    num: 75,
    types: [
      "Rock",
      "Electric"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Golem-Alola"
    ],
    prevo: "Geodude-Alola",
    evoLevel: 25,
    baseSpecies: "Graveler",
    forme: "Alola",
    formes: [
      "Graveler",
      "Graveler-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110,
    baseStats: {
      hp: 55,
      atk: 95,
      def: 115,
      spa: 45,
      spd: 45,
      spe: 35
    }
  },
  golem: {
    name: "Golem",
    num: 76,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Graveler",
    evoType: "trade",
    formes: [
      "Golem",
      "Golem-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 300,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 130,
      spa: 55,
      spd: 65,
      spe: 45
    }
  },
  golemalola: {
    name: "Golem-Alola",
    num: 76,
    types: [
      "Rock",
      "Electric"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Graveler-Alola",
    evoType: "trade",
    baseSpecies: "Golem",
    forme: "Alola",
    formes: [
      "Golem",
      "Golem-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 316,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 130,
      spa: 55,
      spd: 65,
      spe: 45
    }
  },
  ponyta: {
    name: "Ponyta",
    num: 77,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Flash Fire",
      H: "Flame Body"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Rapidash"
    ],
    formes: [
      "Ponyta",
      "Ponyta-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 50,
      atk: 85,
      def: 55,
      spa: 65,
      spd: 65,
      spe: 90
    }
  },
  ponytagalar: {
    name: "Ponyta-Galar",
    num: 77,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Pastel Veil",
      H: "Anticipation"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Rapidash-Galar"
    ],
    baseSpecies: "Ponyta",
    forme: "Galar",
    formes: [
      "Ponyta",
      "Ponyta-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24,
    baseStats: {
      hp: 50,
      atk: 85,
      def: 55,
      spa: 65,
      spd: 65,
      spe: 90
    }
  },
  rapidash: {
    name: "Rapidash",
    num: 78,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Flash Fire",
      H: "Flame Body"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Ponyta",
    evoLevel: 40,
    formes: [
      "Rapidash",
      "Rapidash-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 95,
    baseStats: {
      hp: 65,
      atk: 100,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 105
    }
  },
  rapidashgalar: {
    name: "Rapidash-Galar",
    num: 78,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Pastel Veil",
      H: "Anticipation"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Ponyta-Galar",
    evoLevel: 40,
    baseSpecies: "Rapidash",
    forme: "Galar",
    formes: [
      "Rapidash",
      "Rapidash-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80,
    baseStats: {
      hp: 65,
      atk: 100,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 105
    }
  },
  slowpoke: {
    name: "Slowpoke",
    num: 79,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Slowbro",
      "Slowking"
    ],
    formes: [
      "Slowpoke",
      "Slowpoke-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36,
    baseStats: {
      hp: 90,
      atk: 65,
      def: 65,
      spa: 40,
      spd: 40,
      spe: 15
    }
  },
  slowpokegalar: {
    name: "Slowpoke-Galar",
    num: 79,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Gluttony",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Slowbro-Galar",
      "Slowking-Galar"
    ],
    baseSpecies: "Slowpoke",
    forme: "Galar",
    formes: [
      "Slowpoke",
      "Slowpoke-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36,
    baseStats: {
      hp: 90,
      atk: 65,
      def: 65,
      spa: 40,
      spd: 40,
      spe: 15
    }
  },
  slowbro: {
    name: "Slowbro",
    num: 80,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke",
    evoLevel: 37,
    formes: [
      "Slowbro",
      "Slowbro-Mega",
      "Slowbro-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 78.5,
    baseStats: {
      hp: 95,
      atk: 75,
      def: 110,
      spa: 100,
      spd: 80,
      spe: 30
    }
  },
  slowbrogalar: {
    name: "Slowbro-Galar",
    num: 80,
    types: [
      "Poison",
      "Psychic"
    ],
    abilities: {
      "0": "Quick Draw",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke-Galar",
    evoItem: "Galarica Cuff",
    evoType: "useItem",
    baseSpecies: "Slowbro",
    forme: "Galar",
    formes: [
      "Slowbro",
      "Slowbro-Mega",
      "Slowbro-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 70.5,
    baseStats: {
      hp: 95,
      atk: 100,
      def: 95,
      spa: 100,
      spd: 70,
      spe: 30
    }
  },
  slowbromega: {
    name: "Slowbro-Mega",
    num: 80,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Slowbro",
    forme: "Mega",
    formes: [
      "Slowbro",
      "Slowbro-Mega",
      "Slowbro-Galar"
    ],
    requiredItem: "Slowbronite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 95,
      atk: 75,
      def: 180,
      spa: 130,
      spd: 80,
      spe: 30
    }
  },
  magnemite: {
    name: "Magnemite",
    num: 81,
    types: [
      "Electric",
      "Steel"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Magneton"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 6,
    baseStats: {
      hp: 25,
      atk: 35,
      def: 70,
      spa: 95,
      spd: 55,
      spe: 45
    }
  },
  magneton: {
    name: "Magneton",
    num: 82,
    types: [
      "Electric",
      "Steel"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Magnezone"
    ],
    prevo: "Magnemite",
    evoLevel: 30,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60,
    baseStats: {
      hp: 50,
      atk: 60,
      def: 95,
      spa: 120,
      spd: 70,
      spe: 70
    }
  },
  farfetchd: {
    name: "Farfetch’d",
    num: 83,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Inner Focus",
      H: "Defiant"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    formes: [
      "Farfetch’d",
      "Farfetch’d-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 52,
      atk: 90,
      def: 55,
      spa: 58,
      spd: 62,
      spe: 60
    }
  },
  farfetchdgalar: {
    name: "Farfetch’d-Galar",
    num: 83,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Steadfast",
      H: "Scrappy"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    evos: [
      "Sirfetch’d"
    ],
    baseSpecies: "Farfetch’d",
    forme: "Galar",
    formes: [
      "Farfetch’d",
      "Farfetch’d-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42,
    baseStats: {
      hp: 52,
      atk: 95,
      def: 55,
      spa: 58,
      spd: 62,
      spe: 55
    }
  },
  doduo: {
    name: "Doduo",
    num: 84,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Early Bird",
      H: "Tangled Feet"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Dodrio"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39.2,
    baseStats: {
      hp: 35,
      atk: 85,
      def: 45,
      spa: 35,
      spd: 35,
      spe: 75
    }
  },
  dodrio: {
    name: "Dodrio",
    num: 85,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Early Bird",
      H: "Tangled Feet"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Doduo",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 85.2,
    baseStats: {
      hp: 60,
      atk: 110,
      def: 70,
      spa: 60,
      spd: 60,
      spe: 110
    }
  },
  seel: {
    name: "Seel",
    num: 86,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Hydration",
      H: "Ice Body"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Dewgong"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 90,
    baseStats: {
      hp: 65,
      atk: 45,
      def: 55,
      spa: 45,
      spd: 70,
      spe: 45
    }
  },
  dewgong: {
    name: "Dewgong",
    num: 87,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Hydration",
      H: "Ice Body"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Seel",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 90,
      atk: 70,
      def: 80,
      spa: 70,
      spd: 95,
      spe: 70
    }
  },
  grimer: {
    name: "Grimer",
    num: 88,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Poison Touch"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Muk"
    ],
    formes: [
      "Grimer",
      "Grimer-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 25
    }
  },
  grimeralola: {
    name: "Grimer-Alola",
    num: 88,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Poison Touch",
      "1": "Gluttony",
      H: "Power of Alchemy"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Muk-Alola"
    ],
    baseSpecies: "Grimer",
    forme: "Alola",
    formes: [
      "Grimer",
      "Grimer-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 25
    }
  },
  muk: {
    name: "Muk",
    num: 89,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Poison Touch"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Grimer",
    evoLevel: 38,
    formes: [
      "Muk",
      "Muk-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 105,
      atk: 105,
      def: 75,
      spa: 65,
      spd: 100,
      spe: 50
    }
  },
  mukalola: {
    name: "Muk-Alola",
    num: 89,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Poison Touch",
      "1": "Gluttony",
      H: "Power of Alchemy"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Grimer-Alola",
    evoLevel: 38,
    baseSpecies: "Muk",
    forme: "Alola",
    formes: [
      "Muk",
      "Muk-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 52,
    baseStats: {
      hp: 105,
      atk: 105,
      def: 75,
      spa: 65,
      spd: 100,
      spe: 50
    }
  },
  shellder: {
    name: "Shellder",
    num: 90,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Skill Link",
      H: "Overcoat"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Cloyster"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 30,
      atk: 65,
      def: 100,
      spa: 45,
      spd: 25,
      spe: 40
    }
  },
  cloyster: {
    name: "Cloyster",
    num: 91,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Skill Link",
      H: "Overcoat"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Shellder",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 132.5,
    baseStats: {
      hp: 50,
      atk: 95,
      def: 180,
      spa: 85,
      spd: 45,
      spe: 70
    }
  },
  gastly: {
    name: "Gastly",
    num: 92,
    types: [
      "Ghost",
      "Poison"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Haunter"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.1,
    baseStats: {
      hp: 30,
      atk: 35,
      def: 30,
      spa: 100,
      spd: 35,
      spe: 80
    }
  },
  haunter: {
    name: "Haunter",
    num: 93,
    types: [
      "Ghost",
      "Poison"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gengar"
    ],
    prevo: "Gastly",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.1,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 45,
      spa: 115,
      spd: 55,
      spe: 95
    }
  },
  gengar: {
    name: "Gengar",
    num: 94,
    types: [
      "Ghost",
      "Poison"
    ],
    abilities: {
      "0": "Cursed Body"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Haunter",
    evoType: "trade",
    formes: [
      "Gengar",
      "Gengar-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.5,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 75,
      spe: 110
    }
  },
  gengargmax: {
    name: "Gengar-Gmax",
    num: 94,
    types: [
      "Ghost",
      "Poison"
    ],
    abilities: {
      "0": "Cursed Body"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Gengar",
    forme: "Gmax",
    formes: [
      "Gengar",
      "Gengar-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 75,
      spe: 110
    }
  },
  gengarmega: {
    name: "Gengar-Mega",
    num: 94,
    types: [
      "Ghost",
      "Poison"
    ],
    abilities: {
      "0": "Shadow Tag"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Gengar",
    forme: "Mega",
    formes: [
      "Gengar",
      "Gengar-Mega"
    ],
    requiredItem: "Gengarite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.5,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 80,
      spa: 170,
      spd: 95,
      spe: 130
    }
  },
  onix: {
    name: "Onix",
    num: 95,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Steelix"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 210,
    baseStats: {
      hp: 35,
      atk: 45,
      def: 160,
      spa: 30,
      spd: 45,
      spe: 70
    }
  },
  drowzee: {
    name: "Drowzee",
    num: 96,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Forewarn",
      H: "Inner Focus"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Hypno"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.4,
    baseStats: {
      hp: 60,
      atk: 48,
      def: 45,
      spa: 43,
      spd: 90,
      spe: 42
    }
  },
  hypno: {
    name: "Hypno",
    num: 97,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Forewarn",
      H: "Inner Focus"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Drowzee",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75.6,
    baseStats: {
      hp: 85,
      atk: 73,
      def: 70,
      spa: 73,
      spd: 115,
      spe: 67
    }
  },
  krabby: {
    name: "Krabby",
    num: 98,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Kingler"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 30,
      atk: 105,
      def: 90,
      spa: 25,
      spd: 25,
      spe: 50
    }
  },
  kingler: {
    name: "Kingler",
    num: 99,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Krabby",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60,
    baseStats: {
      hp: 55,
      atk: 130,
      def: 115,
      spa: 50,
      spd: 50,
      spe: 75
    }
  },
  kinglergmax: {
    name: "Kingler-Gmax",
    num: 99,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    eggGroups: [
      "Water 3"
    ],
    baseSpecies: "Kingler",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 55,
      atk: 130,
      def: 115,
      spa: 50,
      spd: 50,
      spe: 75
    }
  },
  voltorb: {
    name: "Voltorb",
    num: 100,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Electrode"
    ],
    formes: [
      "Voltorb",
      "Voltorb-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 10.4,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 50,
      spa: 55,
      spd: 55,
      spe: 100
    }
  },
  voltorbhisui: {
    name: "Voltorb-Hisui",
    num: 100,
    types: [
      "Electric",
      "Grass"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Electrode-Hisui"
    ],
    baseSpecies: "Voltorb",
    forme: "Hisui",
    formes: [
      "Voltorb",
      "Voltorb-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 13,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 50,
      spa: 55,
      spd: 55,
      spe: 100
    }
  },
  electrode: {
    name: "Electrode",
    num: 101,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Voltorb",
    evoLevel: 30,
    formes: [
      "Electrode",
      "Electrode-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 66.6,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 150
    }
  },
  electrodehisui: {
    name: "Electrode-Hisui",
    num: 101,
    types: [
      "Electric",
      "Grass"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Voltorb-Hisui",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    baseSpecies: "Electrode",
    forme: "Hisui",
    formes: [
      "Electrode",
      "Electrode-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 71,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 150
    }
  },
  exeggcute: {
    name: "Exeggcute",
    num: 102,
    types: [
      "Grass",
      "Psychic"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 60,
      atk: 40,
      def: 80,
      spa: 60,
      spd: 45,
      spe: 40
    }
  },
  exeggutor: {
    name: "Exeggutor",
    num: 103,
    types: [
      "Grass",
      "Psychic"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Exeggcute",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    formes: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 85,
      spa: 125,
      spd: 75,
      spe: 55
    }
  },
  exeggutoralola: {
    name: "Exeggutor-Alola",
    num: 103,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Frisk",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Exeggcute",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    baseSpecies: "Exeggutor",
    forme: "Alola",
    formes: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 415.6,
    baseStats: {
      hp: 95,
      atk: 105,
      def: 85,
      spa: 125,
      spd: 75,
      spe: 45
    }
  },
  cubone: {
    name: "Cubone",
    num: 104,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Lightning Rod",
      H: "Battle Armor"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Marowak",
      "Marowak-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 95,
      spa: 40,
      spd: 50,
      spe: 35
    }
  },
  marowak: {
    name: "Marowak",
    num: 105,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Lightning Rod",
      H: "Battle Armor"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cubone",
    evoLevel: 28,
    formes: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 45,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    }
  },
  marowakalola: {
    name: "Marowak-Alola",
    num: 105,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Cursed Body",
      "1": "Lightning Rod",
      H: "Rock Head"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cubone",
    evoLevel: 28,
    evoCondition: "at night",
    baseSpecies: "Marowak",
    forme: "Alola",
    formes: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    }
  },
  marowakalolatotem: {
    name: "Marowak-Alola-Totem",
    num: 105,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Rock Head"
    },
    eggGroups: [
      "Monster"
    ],
    baseSpecies: "Marowak",
    forme: "Alola-Totem",
    formes: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 98,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    }
  },
  hitmonlee: {
    name: "Hitmonlee",
    num: 106,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Limber",
      "1": "Reckless",
      H: "Unburden"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 20,
    evoCondition: "with an Atk stat > its Def stat",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 49.8,
    baseStats: {
      hp: 50,
      atk: 120,
      def: 53,
      spa: 35,
      spd: 110,
      spe: 87
    }
  },
  hitmonchan: {
    name: "Hitmonchan",
    num: 107,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Iron Fist",
      H: "Inner Focus"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 20,
    evoCondition: "with an Atk stat < its Def stat",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 50.2,
    baseStats: {
      hp: 50,
      atk: 105,
      def: 79,
      spa: 35,
      spd: 110,
      spe: 76
    }
  },
  lickitung: {
    name: "Lickitung",
    num: 108,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Oblivious",
      H: "Cloud Nine"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Lickilicky"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 65.5,
    baseStats: {
      hp: 90,
      atk: 55,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 30
    }
  },
  koffing: {
    name: "Koffing",
    num: 109,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Stench"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Weezing",
      "Weezing-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 40,
      atk: 65,
      def: 95,
      spa: 60,
      spd: 45,
      spe: 35
    }
  },
  weezing: {
    name: "Weezing",
    num: 110,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Stench"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Koffing",
    evoLevel: 35,
    formes: [
      "Weezing",
      "Weezing-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 120,
      spa: 85,
      spd: 70,
      spe: 60
    }
  },
  weezinggalar: {
    name: "Weezing-Galar",
    num: 110,
    types: [
      "Poison",
      "Fairy"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Misty Surge"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Koffing",
    evoLevel: 35,
    baseSpecies: "Weezing",
    forme: "Galar",
    formes: [
      "Weezing",
      "Weezing-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 120,
      spa: 85,
      spd: 70,
      spe: 60
    }
  },
  rhyhorn: {
    name: "Rhyhorn",
    num: 111,
    types: [
      "Ground",
      "Rock"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Rock Head",
      H: "Reckless"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Rhydon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 115,
    baseStats: {
      hp: 80,
      atk: 85,
      def: 95,
      spa: 30,
      spd: 30,
      spe: 25
    }
  },
  rhydon: {
    name: "Rhydon",
    num: 112,
    types: [
      "Ground",
      "Rock"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Rock Head",
      H: "Reckless"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Rhyperior"
    ],
    prevo: "Rhyhorn",
    evoLevel: 42,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 105,
      atk: 130,
      def: 120,
      spa: 45,
      spd: 45,
      spe: 40
    }
  },
  chansey: {
    name: "Chansey",
    num: 113,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Healer"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Blissey"
    ],
    prevo: "Happiny",
    evoItem: "Oval Stone",
    evoType: "levelHold",
    evoCondition: "during the day",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 34.6,
    baseStats: {
      hp: 250,
      atk: 5,
      def: 5,
      spa: 35,
      spd: 105,
      spe: 50
    }
  },
  tangela: {
    name: "Tangela",
    num: 114,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Regenerator"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Tangrowth"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35,
    baseStats: {
      hp: 65,
      atk: 55,
      def: 115,
      spa: 100,
      spd: 40,
      spe: 60
    }
  },
  kangaskhan: {
    name: "Kangaskhan",
    num: 115,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Early Bird",
      "1": "Scrappy",
      H: "Inner Focus"
    },
    eggGroups: [
      "Monster"
    ],
    formes: [
      "Kangaskhan",
      "Kangaskhan-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 80,
    baseStats: {
      hp: 105,
      atk: 95,
      def: 80,
      spa: 40,
      spd: 80,
      spe: 90
    }
  },
  kangaskhanmega: {
    name: "Kangaskhan-Mega",
    num: 115,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Parental Bond"
    },
    eggGroups: [
      "Monster"
    ],
    baseSpecies: "Kangaskhan",
    forme: "Mega",
    formes: [
      "Kangaskhan",
      "Kangaskhan-Mega"
    ],
    requiredItem: "Kangaskhanite",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 100,
    baseStats: {
      hp: 105,
      atk: 125,
      def: 100,
      spa: 60,
      spd: 100,
      spe: 100
    }
  },
  horsea: {
    name: "Horsea",
    num: 116,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Sniper",
      H: "Damp"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Seadra"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 30,
      atk: 40,
      def: 70,
      spa: 70,
      spd: 25,
      spe: 60
    }
  },
  seadra: {
    name: "Seadra",
    num: 117,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Sniper",
      H: "Damp"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Kingdra"
    ],
    prevo: "Horsea",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 55,
      atk: 65,
      def: 95,
      spa: 95,
      spd: 45,
      spe: 85
    }
  },
  goldeen: {
    name: "Goldeen",
    num: 118,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Water Veil",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Seaking"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 45,
      atk: 67,
      def: 60,
      spa: 35,
      spd: 50,
      spe: 63
    }
  },
  seaking: {
    name: "Seaking",
    num: 119,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Water Veil",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Goldeen",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 80,
      atk: 92,
      def: 65,
      spa: 65,
      spd: 80,
      spe: 68
    }
  },
  staryu: {
    name: "Staryu",
    num: 120,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Natural Cure",
      H: "Analytic"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Starmie"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 34.5,
    baseStats: {
      hp: 30,
      atk: 45,
      def: 55,
      spa: 70,
      spd: 55,
      spe: 85
    }
  },
  starmie: {
    name: "Starmie",
    num: 121,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Natural Cure",
      H: "Analytic"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Staryu",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 80,
    baseStats: {
      hp: 60,
      atk: 75,
      def: 85,
      spa: 100,
      spd: 85,
      spe: 115
    }
  },
  mrmime: {
    name: "Mr. Mime",
    num: 122,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Filter",
      H: "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Mime Jr.",
    evoType: "levelMove",
    evoMove: "Mimic",
    formes: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 54.5,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 65,
      spa: 100,
      spd: 120,
      spe: 90
    }
  },
  mrmimegalar: {
    name: "Mr. Mime-Galar",
    num: 122,
    types: [
      "Ice",
      "Psychic"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Screen Cleaner",
      H: "Ice Body"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Mr. Rime"
    ],
    prevo: "Mime Jr.",
    evoType: "levelMove",
    evoMove: "Mimic",
    baseSpecies: "Mr. Mime",
    forme: "Galar",
    formes: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56.8,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 100
    }
  },
  scyther: {
    name: "Scyther",
    num: 123,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Technician",
      H: "Steadfast"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Scizor",
      "Kleavor"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 55,
      spd: 80,
      spe: 105
    }
  },
  jynx: {
    name: "Jynx",
    num: 124,
    types: [
      "Ice",
      "Psychic"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Forewarn",
      H: "Dry Skin"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Smoochum",
    evoLevel: 30,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 40.6,
    baseStats: {
      hp: 65,
      atk: 50,
      def: 35,
      spa: 115,
      spd: 95,
      spe: 95
    }
  },
  electabuzz: {
    name: "Electabuzz",
    num: 125,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Electivire"
    ],
    prevo: "Elekid",
    evoLevel: 30,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 30,
    baseStats: {
      hp: 65,
      atk: 83,
      def: 57,
      spa: 95,
      spd: 85,
      spe: 105
    }
  },
  magmar: {
    name: "Magmar",
    num: 126,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Magmortar"
    ],
    prevo: "Magby",
    evoLevel: 30,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 44.5,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 57,
      spa: 100,
      spd: 85,
      spe: 93
    }
  },
  pinsir: {
    name: "Pinsir",
    num: 127,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Mold Breaker",
      H: "Moxie"
    },
    eggGroups: [
      "Bug"
    ],
    formes: [
      "Pinsir",
      "Pinsir-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 65,
      atk: 125,
      def: 100,
      spa: 55,
      spd: 70,
      spe: 85
    }
  },
  pinsirmega: {
    name: "Pinsir-Mega",
    num: 127,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Aerilate"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Pinsir",
    forme: "Mega",
    formes: [
      "Pinsir",
      "Pinsir-Mega"
    ],
    requiredItem: "Pinsirite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 59,
    baseStats: {
      hp: 65,
      atk: 155,
      def: 120,
      spa: 65,
      spd: 90,
      spe: 105
    }
  },
  tauros: {
    name: "Tauros",
    num: 128,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Sheer Force"
    },
    eggGroups: [
      "Field"
    ],
    formes: [
      "Tauros",
      "Tauros-Paldea-Combat",
      "Tauros-Paldea-Blaze",
      "Tauros-Paldea-Aqua"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 88.4,
    baseStats: {
      hp: 75,
      atk: 100,
      def: 95,
      spa: 40,
      spd: 70,
      spe: 110
    }
  },
  taurospaldeaaqua: {
    name: "Tauros-Paldea-Aqua",
    num: 128,
    types: [
      "Fighting",
      "Water"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Tauros",
    forme: "Paldea-Aqua",
    formes: [
      "Tauros",
      "Tauros-Paldea-Combat",
      "Tauros-Paldea-Blaze",
      "Tauros-Paldea-Aqua"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 110,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    }
  },
  taurospaldeablaze: {
    name: "Tauros-Paldea-Blaze",
    num: 128,
    types: [
      "Fighting",
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Tauros",
    forme: "Paldea-Blaze",
    formes: [
      "Tauros",
      "Tauros-Paldea-Combat",
      "Tauros-Paldea-Blaze",
      "Tauros-Paldea-Aqua"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 85,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    }
  },
  taurospaldeacombat: {
    name: "Tauros-Paldea-Combat",
    num: 128,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Tauros",
    forme: "Paldea-Combat",
    formes: [
      "Tauros",
      "Tauros-Paldea-Combat",
      "Tauros-Paldea-Blaze",
      "Tauros-Paldea-Aqua"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 115,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    }
  },
  magikarp: {
    name: "Magikarp",
    num: 129,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Rattled"
    },
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    evos: [
      "Gyarados"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10,
    baseStats: {
      hp: 20,
      atk: 10,
      def: 55,
      spa: 15,
      spd: 20,
      spe: 80
    }
  },
  gyarados: {
    name: "Gyarados",
    num: 130,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      H: "Moxie"
    },
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    prevo: "Magikarp",
    evoLevel: 20,
    formes: [
      "Gyarados",
      "Gyarados-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 235,
    baseStats: {
      hp: 95,
      atk: 125,
      def: 79,
      spa: 60,
      spd: 100,
      spe: 81
    }
  },
  gyaradosmega: {
    name: "Gyarados-Mega",
    num: 130,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Mold Breaker"
    },
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    baseSpecies: "Gyarados",
    forme: "Mega",
    formes: [
      "Gyarados",
      "Gyarados-Mega"
    ],
    requiredItem: "Gyaradosite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 305,
    baseStats: {
      hp: 95,
      atk: 155,
      def: 109,
      spa: 70,
      spd: 130,
      spe: 81
    }
  },
  lapras: {
    name: "Lapras",
    num: 131,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Shell Armor",
      H: "Hydration"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 220,
    baseStats: {
      hp: 130,
      atk: 85,
      def: 80,
      spa: 85,
      spd: 95,
      spe: 60
    }
  },
  laprasgmax: {
    name: "Lapras-Gmax",
    num: 131,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Shell Armor",
      H: "Hydration"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Lapras",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 130,
      atk: 85,
      def: 80,
      spa: 85,
      spd: 95,
      spe: 60
    }
  },
  ditto: {
    name: "Ditto",
    num: 132,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Limber",
      H: "Imposter"
    },
    eggGroups: [
      "Ditto"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 4,
    baseStats: {
      hp: 48,
      atk: 48,
      def: 48,
      spa: 48,
      spd: 48,
      spe: 48
    }
  },
  eevee: {
    name: "Eevee",
    num: 133,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Adaptability",
      H: "Anticipation"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Espeon",
      "Umbreon",
      "Leafeon",
      "Glaceon",
      "Sylveon"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.5,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 55
    }
  },
  eeveegmax: {
    name: "Eevee-Gmax",
    num: 133,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Adaptability",
      H: "Anticipation"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Eevee",
    forme: "Gmax",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 55
    }
  },
  vaporeon: {
    name: "Vaporeon",
    num: 134,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Absorb",
      H: "Hydration"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 29,
    baseStats: {
      hp: 130,
      atk: 65,
      def: 60,
      spa: 110,
      spd: 95,
      spe: 65
    }
  },
  jolteon: {
    name: "Jolteon",
    num: 135,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Volt Absorb",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 24.5,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spa: 110,
      spd: 95,
      spe: 130
    }
  },
  flareon: {
    name: "Flareon",
    num: 136,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Fire Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 130,
      def: 60,
      spa: 95,
      spd: 110,
      spe: 65
    }
  },
  porygon: {
    name: "Porygon",
    num: 137,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Trace",
      "1": "Download",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Porygon2"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 36.5,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 70,
      spa: 85,
      spd: 75,
      spe: 40
    }
  },
  omanyte: {
    name: "Omanyte",
    num: 138,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Omastar"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 7.5,
    baseStats: {
      hp: 35,
      atk: 40,
      def: 100,
      spa: 90,
      spd: 55,
      spe: 35
    }
  },
  omastar: {
    name: "Omastar",
    num: 139,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Omanyte",
    evoLevel: 40,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 35,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 125,
      spa: 115,
      spd: 70,
      spe: 55
    }
  },
  kabuto: {
    name: "Kabuto",
    num: 140,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Battle Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Kabutops"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 11.5,
    baseStats: {
      hp: 30,
      atk: 80,
      def: 90,
      spa: 55,
      spd: 45,
      spe: 55
    }
  },
  kabutops: {
    name: "Kabutops",
    num: 141,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Battle Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Kabuto",
    evoLevel: 40,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 40.5,
    baseStats: {
      hp: 60,
      atk: 115,
      def: 105,
      spa: 65,
      spd: 70,
      spe: 80
    }
  },
  aerodactyl: {
    name: "Aerodactyl",
    num: 142,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Pressure",
      H: "Unnerve"
    },
    eggGroups: [
      "Flying"
    ],
    formes: [
      "Aerodactyl",
      "Aerodactyl-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 59,
    baseStats: {
      hp: 80,
      atk: 105,
      def: 65,
      spa: 60,
      spd: 75,
      spe: 130
    }
  },
  aerodactylmega: {
    name: "Aerodactyl-Mega",
    num: 142,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Tough Claws"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Aerodactyl",
    forme: "Mega",
    formes: [
      "Aerodactyl",
      "Aerodactyl-Mega"
    ],
    requiredItem: "Aerodactylite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 79,
    baseStats: {
      hp: 80,
      atk: 135,
      def: 85,
      spa: 70,
      spd: 95,
      spe: 150
    }
  },
  snorlax: {
    name: "Snorlax",
    num: 143,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Immunity",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Munchlax",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 460,
    baseStats: {
      hp: 160,
      atk: 110,
      def: 65,
      spa: 65,
      spd: 110,
      spe: 30
    }
  },
  snorlaxgmax: {
    name: "Snorlax-Gmax",
    num: 143,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Immunity",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    eggGroups: [
      "Monster"
    ],
    baseSpecies: "Snorlax",
    forme: "Gmax",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 160,
      atk: 110,
      def: 65,
      spa: 65,
      spd: 110,
      spe: 30
    }
  },
  articuno: {
    name: "Articuno",
    num: 144,
    types: [
      "Ice",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Snow Cloak"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Articuno",
      "Articuno-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 55.4,
    baseStats: {
      hp: 90,
      atk: 85,
      def: 100,
      spa: 95,
      spd: 125,
      spe: 85
    }
  },
  articunogalar: {
    name: "Articuno-Galar",
    num: 144,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Competitive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Articuno",
    forme: "Galar",
    formes: [
      "Articuno",
      "Articuno-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 50.9,
    baseStats: {
      hp: 90,
      atk: 85,
      def: 85,
      spa: 125,
      spd: 100,
      spe: 95
    }
  },
  zapdos: {
    name: "Zapdos",
    num: 145,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Static"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Zapdos",
      "Zapdos-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 52.6,
    baseStats: {
      hp: 90,
      atk: 90,
      def: 85,
      spa: 125,
      spd: 90,
      spe: 100
    }
  },
  zapdosgalar: {
    name: "Zapdos-Galar",
    num: 145,
    types: [
      "Fighting",
      "Flying"
    ],
    abilities: {
      "0": "Defiant"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zapdos",
    forme: "Galar",
    formes: [
      "Zapdos",
      "Zapdos-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 58.2,
    baseStats: {
      hp: 90,
      atk: 125,
      def: 90,
      spa: 85,
      spd: 90,
      spe: 100
    }
  },
  moltres: {
    name: "Moltres",
    num: 146,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Flame Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Moltres",
      "Moltres-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 90,
      spa: 125,
      spd: 85,
      spe: 90
    }
  },
  moltresgalar: {
    name: "Moltres-Galar",
    num: 146,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Berserk"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Moltres",
    forme: "Galar",
    formes: [
      "Moltres",
      "Moltres-Galar"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 66,
    baseStats: {
      hp: 90,
      atk: 85,
      def: 90,
      spa: 100,
      spd: 125,
      spe: 90
    }
  },
  dratini: {
    name: "Dratini",
    num: 147,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Marvel Scale"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Dragonair"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.3,
    baseStats: {
      hp: 41,
      atk: 64,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 50
    }
  },
  dragonair: {
    name: "Dragonair",
    num: 148,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Marvel Scale"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Dragonite"
    ],
    prevo: "Dratini",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16.5,
    baseStats: {
      hp: 61,
      atk: 84,
      def: 65,
      spa: 70,
      spd: 70,
      spe: 70
    }
  },
  dragonite: {
    name: "Dragonite",
    num: 149,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Inner Focus",
      H: "Multiscale"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Dragonair",
    evoLevel: 55,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 210,
    baseStats: {
      hp: 91,
      atk: 134,
      def: 95,
      spa: 100,
      spd: 100,
      spe: 80
    }
  },
  mewtwo: {
    name: "Mewtwo",
    num: 150,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Pressure",
      H: "Unnerve"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Mewtwo",
      "Mewtwo-Mega-X",
      "Mewtwo-Mega-Y"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 122,
    baseStats: {
      hp: 106,
      atk: 110,
      def: 90,
      spa: 154,
      spd: 90,
      spe: 130
    }
  },
  mewtwomegax: {
    name: "Mewtwo-Mega-X",
    num: 150,
    types: [
      "Psychic",
      "Fighting"
    ],
    abilities: {
      "0": "Steadfast"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Mewtwo",
    forme: "Mega-X",
    formes: [
      "Mewtwo",
      "Mewtwo-Mega-X",
      "Mewtwo-Mega-Y"
    ],
    requiredItem: "Mewtwonite X",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 127,
    baseStats: {
      hp: 106,
      atk: 190,
      def: 100,
      spa: 154,
      spd: 100,
      spe: 130
    }
  },
  mewtwomegay: {
    name: "Mewtwo-Mega-Y",
    num: 150,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Insomnia"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Mewtwo",
    forme: "Mega-Y",
    formes: [
      "Mewtwo",
      "Mewtwo-Mega-X",
      "Mewtwo-Mega-Y"
    ],
    requiredItem: "Mewtwonite Y",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 33,
    baseStats: {
      hp: 106,
      atk: 150,
      def: 70,
      spa: 194,
      spd: 120,
      spe: 140
    }
  },
  mew: {
    name: "Mew",
    num: 151,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 4,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  chikorita: {
    name: "Chikorita",
    num: 152,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Bayleef"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.4,
    baseStats: {
      hp: 45,
      atk: 49,
      def: 65,
      spa: 49,
      spd: 65,
      spe: 45
    }
  },
  bayleef: {
    name: "Bayleef",
    num: 153,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Meganium"
    ],
    prevo: "Chikorita",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 15.8,
    baseStats: {
      hp: 60,
      atk: 62,
      def: 80,
      spa: 63,
      spd: 80,
      spe: 60
    }
  },
  meganium: {
    name: "Meganium",
    num: 154,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Bayleef",
    evoLevel: 32,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 100.5,
    baseStats: {
      hp: 80,
      atk: 82,
      def: 100,
      spa: 83,
      spd: 100,
      spe: 80
    }
  },
  cyndaquil: {
    name: "Cyndaquil",
    num: 155,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Quilava"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 7.9,
    baseStats: {
      hp: 39,
      atk: 52,
      def: 43,
      spa: 60,
      spd: 50,
      spe: 65
    }
  },
  quilava: {
    name: "Quilava",
    num: 156,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Typhlosion",
      "Typhlosion-Hisui"
    ],
    prevo: "Cyndaquil",
    evoLevel: 14,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 19,
    baseStats: {
      hp: 58,
      atk: 64,
      def: 58,
      spa: 80,
      spd: 65,
      spe: 80
    }
  },
  typhlosion: {
    name: "Typhlosion",
    num: 157,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Quilava",
    evoLevel: 36,
    formes: [
      "Typhlosion",
      "Typhlosion-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 79.5,
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    }
  },
  typhlosionhisui: {
    name: "Typhlosion-Hisui",
    num: 157,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Blaze",
      H: "Frisk"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Quilava",
    evoLevel: 36,
    baseSpecies: "Typhlosion",
    forme: "Hisui",
    formes: [
      "Typhlosion",
      "Typhlosion-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 69.8,
    baseStats: {
      hp: 73,
      atk: 84,
      def: 78,
      spa: 119,
      spd: 85,
      spe: 95
    }
  },
  totodile: {
    name: "Totodile",
    num: 158,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Croconaw"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9.5,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 64,
      spa: 44,
      spd: 48,
      spe: 43
    }
  },
  croconaw: {
    name: "Croconaw",
    num: 159,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Feraligatr"
    ],
    prevo: "Totodile",
    evoLevel: 18,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 80,
      spa: 59,
      spd: 63,
      spe: 58
    }
  },
  feraligatr: {
    name: "Feraligatr",
    num: 160,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Croconaw",
    evoLevel: 30,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 88.8,
    baseStats: {
      hp: 85,
      atk: 105,
      def: 100,
      spa: 79,
      spd: 83,
      spe: 78
    }
  },
  sentret: {
    name: "Sentret",
    num: 161,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Frisk"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Furret"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 35,
      atk: 46,
      def: 34,
      spa: 35,
      spd: 45,
      spe: 20
    }
  },
  furret: {
    name: "Furret",
    num: 162,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Frisk"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sentret",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 85,
      atk: 76,
      def: 64,
      spa: 45,
      spd: 55,
      spe: 90
    }
  },
  hoothoot: {
    name: "Hoothoot",
    num: 163,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Keen Eye",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Noctowl"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21.2,
    baseStats: {
      hp: 60,
      atk: 30,
      def: 30,
      spa: 36,
      spd: 56,
      spe: 50
    }
  },
  noctowl: {
    name: "Noctowl",
    num: 164,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Keen Eye",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Hoothoot",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.8,
    baseStats: {
      hp: 100,
      atk: 50,
      def: 50,
      spa: 86,
      spd: 96,
      spe: 70
    }
  },
  ledyba: {
    name: "Ledyba",
    num: 165,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Early Bird",
      H: "Rattled"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Ledian"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.8,
    baseStats: {
      hp: 40,
      atk: 20,
      def: 30,
      spa: 40,
      spd: 80,
      spe: 55
    }
  },
  ledian: {
    name: "Ledian",
    num: 166,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Early Bird",
      H: "Iron Fist"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Ledyba",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35.6,
    baseStats: {
      hp: 55,
      atk: 35,
      def: 50,
      spa: 55,
      spd: 110,
      spe: 85
    }
  },
  spinarak: {
    name: "Spinarak",
    num: 167,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Insomnia",
      H: "Sniper"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Ariados"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 40,
      atk: 60,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 30
    }
  },
  ariados: {
    name: "Ariados",
    num: 168,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Insomnia",
      H: "Sniper"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Spinarak",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.5,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 40
    }
  },
  crobat: {
    name: "Crobat",
    num: 169,
    types: [
      "Poison",
      "Flying"
    ],
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Golbat",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75,
    baseStats: {
      hp: 85,
      atk: 90,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 130
    }
  },
  chinchou: {
    name: "Chinchou",
    num: 170,
    types: [
      "Water",
      "Electric"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Illuminate",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Lanturn"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 75,
      atk: 38,
      def: 38,
      spa: 56,
      spd: 56,
      spe: 67
    }
  },
  lanturn: {
    name: "Lanturn",
    num: 171,
    types: [
      "Water",
      "Electric"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Illuminate",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Chinchou",
    evoLevel: 27,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22.5,
    baseStats: {
      hp: 125,
      atk: 58,
      def: 58,
      spa: 76,
      spd: 76,
      spe: 67
    }
  },
  pichu: {
    name: "Pichu",
    num: 172,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Pikachu"
    ],
    formes: [
      "Pichu",
      "Pichu-Spiky-eared"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 20,
      atk: 40,
      def: 15,
      spa: 35,
      spd: 35,
      spe: 60
    }
  },
  pichuspikyeared: {
    name: "Pichu-Spiky-eared",
    num: 172,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Pichu",
    forme: "Spiky-eared",
    formes: [
      "Pichu",
      "Pichu-Spiky-eared"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 20,
      atk: 40,
      def: 15,
      spa: 35,
      spd: 35,
      spe: 60
    }
  },
  cleffa: {
    name: "Cleffa",
    num: 173,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Friend Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Clefairy"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3,
    baseStats: {
      hp: 50,
      atk: 25,
      def: 28,
      spa: 45,
      spd: 55,
      spe: 15
    }
  },
  igglybuff: {
    name: "Igglybuff",
    num: 174,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Friend Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Jigglypuff"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 1,
    baseStats: {
      hp: 90,
      atk: 30,
      def: 15,
      spa: 40,
      spd: 20,
      spe: 15
    }
  },
  togepi: {
    name: "Togepi",
    num: 175,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Togetic"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 1.5,
    baseStats: {
      hp: 35,
      atk: 20,
      def: 65,
      spa: 40,
      spd: 65,
      spe: 20
    }
  },
  togetic: {
    name: "Togetic",
    num: 176,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    evos: [
      "Togekiss"
    ],
    prevo: "Togepi",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 3.2,
    baseStats: {
      hp: 55,
      atk: 40,
      def: 85,
      spa: 80,
      spd: 105,
      spe: 40
    }
  },
  natu: {
    name: "Natu",
    num: 177,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Early Bird",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Xatu"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 40,
      atk: 50,
      def: 45,
      spa: 70,
      spd: 45,
      spe: 70
    }
  },
  xatu: {
    name: "Xatu",
    num: 178,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Early Bird",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Natu",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 65,
      atk: 75,
      def: 70,
      spa: 95,
      spd: 70,
      spe: 95
    }
  },
  mareep: {
    name: "Mareep",
    num: 179,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Flaaffy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.8,
    baseStats: {
      hp: 55,
      atk: 40,
      def: 40,
      spa: 65,
      spd: 45,
      spe: 35
    }
  },
  flaaffy: {
    name: "Flaaffy",
    num: 180,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Ampharos"
    ],
    prevo: "Mareep",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13.3,
    baseStats: {
      hp: 70,
      atk: 55,
      def: 55,
      spa: 80,
      spd: 60,
      spe: 45
    }
  },
  ampharos: {
    name: "Ampharos",
    num: 181,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Flaaffy",
    evoLevel: 30,
    formes: [
      "Ampharos",
      "Ampharos-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61.5,
    baseStats: {
      hp: 90,
      atk: 75,
      def: 85,
      spa: 115,
      spd: 90,
      spe: 55
    }
  },
  ampharosmega: {
    name: "Ampharos-Mega",
    num: 181,
    types: [
      "Electric",
      "Dragon"
    ],
    abilities: {
      "0": "Mold Breaker"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    baseSpecies: "Ampharos",
    forme: "Mega",
    formes: [
      "Ampharos",
      "Ampharos-Mega"
    ],
    requiredItem: "Ampharosite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61.5,
    baseStats: {
      hp: 90,
      atk: 95,
      def: 105,
      spa: 165,
      spd: 110,
      spe: 45
    }
  },
  bellossom: {
    name: "Bellossom",
    num: 182,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      H: "Healer"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Gloom",
    evoItem: "Sun Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.8,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 95,
      spa: 90,
      spd: 100,
      spe: 50
    }
  },
  marill: {
    name: "Marill",
    num: 183,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    evos: [
      "Azumarill"
    ],
    prevo: "Azurill",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 70,
      atk: 20,
      def: 50,
      spa: 20,
      spd: 50,
      spe: 40
    }
  },
  azumarill: {
    name: "Azumarill",
    num: 184,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    prevo: "Marill",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 100,
      atk: 50,
      def: 80,
      spa: 60,
      spd: 80,
      spe: 50
    }
  },
  sudowoodo: {
    name: "Sudowoodo",
    num: 185,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Rattled"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Bonsly",
    evoType: "levelMove",
    evoMove: "Mimic",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 70,
      atk: 100,
      def: 115,
      spa: 30,
      spd: 65,
      spe: 30
    }
  },
  politoed: {
    name: "Politoed",
    num: 186,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Drizzle"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Poliwhirl",
    evoItem: "King's Rock",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.9,
    baseStats: {
      hp: 90,
      atk: 75,
      def: 75,
      spa: 90,
      spd: 100,
      spe: 70
    }
  },
  hoppip: {
    name: "Hoppip",
    num: 187,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Skiploom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.5,
    baseStats: {
      hp: 35,
      atk: 35,
      def: 40,
      spa: 35,
      spd: 55,
      spe: 50
    }
  },
  skiploom: {
    name: "Skiploom",
    num: 188,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Jumpluff"
    ],
    prevo: "Hoppip",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 55,
      atk: 45,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 80
    }
  },
  jumpluff: {
    name: "Jumpluff",
    num: 189,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Skiploom",
    evoLevel: 27,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 75,
      atk: 55,
      def: 70,
      spa: 55,
      spd: 95,
      spe: 110
    }
  },
  aipom: {
    name: "Aipom",
    num: 190,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Pickup",
      H: "Skill Link"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Ambipom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 55,
      atk: 70,
      def: 55,
      spa: 40,
      spd: 55,
      spe: 85
    }
  },
  sunkern: {
    name: "Sunkern",
    num: 191,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Early Bird"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Sunflora"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.8,
    baseStats: {
      hp: 30,
      atk: 30,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 30
    }
  },
  sunflora: {
    name: "Sunflora",
    num: 192,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Early Bird"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Sunkern",
    evoItem: "Sun Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 55,
      spa: 105,
      spd: 85,
      spe: 30
    }
  },
  yanma: {
    name: "Yanma",
    num: 193,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Compound Eyes",
      H: "Frisk"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Yanmega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 45,
      spa: 75,
      spd: 45,
      spe: 95
    }
  },
  wooper: {
    name: "Wooper",
    num: 194,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Damp",
      "1": "Water Absorb",
      H: "Unaware"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Quagsire"
    ],
    formes: [
      "Wooper",
      "Wooper-Paldea"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 55,
      atk: 45,
      def: 45,
      spa: 25,
      spd: 25,
      spe: 15
    }
  },
  wooperpaldea: {
    name: "Wooper-Paldea",
    num: 194,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Water Absorb",
      H: "Unaware"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Clodsire"
    ],
    baseSpecies: "Wooper",
    forme: "Paldea",
    formes: [
      "Wooper",
      "Wooper-Paldea"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 55,
      atk: 45,
      def: 45,
      spa: 25,
      spd: 25,
      spe: 15
    }
  },
  quagsire: {
    name: "Quagsire",
    num: 195,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Damp",
      "1": "Water Absorb",
      H: "Unaware"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Wooper",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75,
    baseStats: {
      hp: 95,
      atk: 85,
      def: 85,
      spa: 65,
      spd: 65,
      spe: 35
    }
  },
  espeon: {
    name: "Espeon",
    num: 196,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoType: "levelFriendship",
    evoCondition: "during the day",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 26.5,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 95,
      spe: 110
    }
  },
  umbreon: {
    name: "Umbreon",
    num: 197,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Synchronize",
      H: "Inner Focus"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoType: "levelFriendship",
    evoCondition: "at night",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 27,
    baseStats: {
      hp: 95,
      atk: 65,
      def: 110,
      spa: 60,
      spd: 130,
      spe: 65
    }
  },
  murkrow: {
    name: "Murkrow",
    num: 198,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Super Luck",
      H: "Prankster"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Honchkrow"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.1,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 42,
      spa: 85,
      spd: 42,
      spe: 91
    }
  },
  slowking: {
    name: "Slowking",
    num: 199,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke",
    evoItem: "King's Rock",
    evoType: "trade",
    formes: [
      "Slowking",
      "Slowking-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 95,
      atk: 75,
      def: 80,
      spa: 100,
      spd: 110,
      spe: 30
    }
  },
  slowkinggalar: {
    name: "Slowking-Galar",
    num: 199,
    types: [
      "Poison",
      "Psychic"
    ],
    abilities: {
      "0": "Curious Medicine",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke-Galar",
    evoItem: "Galarica Wreath",
    evoType: "useItem",
    baseSpecies: "Slowking",
    forme: "Galar",
    formes: [
      "Slowking",
      "Slowking-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 95,
      atk: 65,
      def: 80,
      spa: 110,
      spd: 110,
      spe: 30
    }
  },
  misdreavus: {
    name: "Misdreavus",
    num: 200,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Mismagius"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 85,
      spd: 85,
      spe: 85
    }
  },
  unown: {
    name: "Unown",
    num: 201,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    cosmeticFormes: [
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Exclamation",
      "Question"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5,
    baseStats: {
      hp: 48,
      atk: 72,
      def: 48,
      spa: 72,
      spd: 48,
      spe: 48
    }
  },
  wobbuffet: {
    name: "Wobbuffet",
    num: 202,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Shadow Tag",
      H: "Telepathy"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Wynaut",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 190,
      atk: 33,
      def: 58,
      spa: 33,
      spd: 58,
      spe: 33
    }
  },
  girafarig: {
    name: "Girafarig",
    num: 203,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Early Bird",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Farigiraf"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 41.5,
    baseStats: {
      hp: 70,
      atk: 80,
      def: 65,
      spa: 90,
      spd: 65,
      spe: 85
    }
  },
  pineco: {
    name: "Pineco",
    num: 204,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Sturdy",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Forretress"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.2,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 90,
      spa: 35,
      spd: 35,
      spe: 15
    }
  },
  forretress: {
    name: "Forretress",
    num: 205,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Sturdy",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Pineco",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 125.8,
    baseStats: {
      hp: 75,
      atk: 90,
      def: 140,
      spa: 60,
      spd: 60,
      spe: 40
    }
  },
  dunsparce: {
    name: "Dunsparce",
    num: 206,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Run Away",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dudunsparce",
      "Dudunsparce-Three-Segment"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14,
    baseStats: {
      hp: 100,
      atk: 70,
      def: 70,
      spa: 65,
      spd: 65,
      spe: 45
    }
  },
  gligar: {
    name: "Gligar",
    num: 207,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Sand Veil",
      H: "Immunity"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Gliscor"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 64.8,
    baseStats: {
      hp: 65,
      atk: 75,
      def: 105,
      spa: 35,
      spd: 65,
      spe: 85
    }
  },
  steelix: {
    name: "Steelix",
    num: 208,
    types: [
      "Steel",
      "Ground"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sheer Force"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Onix",
    evoItem: "Metal Coat",
    evoType: "trade",
    formes: [
      "Steelix",
      "Steelix-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 400,
    baseStats: {
      hp: 75,
      atk: 85,
      def: 200,
      spa: 55,
      spd: 65,
      spe: 30
    }
  },
  steelixmega: {
    name: "Steelix-Mega",
    num: 208,
    types: [
      "Steel",
      "Ground"
    ],
    abilities: {
      "0": "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Steelix",
    forme: "Mega",
    formes: [
      "Steelix",
      "Steelix-Mega"
    ],
    requiredItem: "Steelixite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 740,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 230,
      spa: 55,
      spd: 95,
      spe: 30
    }
  },
  snubbull: {
    name: "Snubbull",
    num: 209,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Run Away",
      H: "Rattled"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    evos: [
      "Granbull"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 7.8,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 50,
      spa: 40,
      spd: 40,
      spe: 30
    }
  },
  granbull: {
    name: "Granbull",
    num: 210,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Quick Feet",
      H: "Rattled"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Snubbull",
    evoLevel: 23,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 48.7,
    baseStats: {
      hp: 90,
      atk: 120,
      def: 75,
      spa: 60,
      spd: 60,
      spe: 45
    }
  },
  qwilfish: {
    name: "Qwilfish",
    num: 211,
    types: [
      "Water",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swift Swim",
      H: "Intimidate"
    },
    eggGroups: [
      "Water 2"
    ],
    formes: [
      "Qwilfish",
      "Qwilfish-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.9,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 85,
      spa: 55,
      spd: 55,
      spe: 85
    }
  },
  qwilfishhisui: {
    name: "Qwilfish-Hisui",
    num: 211,
    types: [
      "Dark",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swift Swim",
      H: "Intimidate"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Overqwil"
    ],
    baseSpecies: "Qwilfish",
    forme: "Hisui",
    formes: [
      "Qwilfish",
      "Qwilfish-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.9,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 85,
      spa: 55,
      spd: 55,
      spe: 85
    }
  },
  scizor: {
    name: "Scizor",
    num: 212,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Technician",
      H: "Light Metal"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Scyther",
    evoItem: "Metal Coat",
    evoType: "trade",
    formes: [
      "Scizor",
      "Scizor-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 118,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 100,
      spa: 55,
      spd: 80,
      spe: 65
    }
  },
  scizormega: {
    name: "Scizor-Mega",
    num: 212,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Technician"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Scizor",
    forme: "Mega",
    formes: [
      "Scizor",
      "Scizor-Mega"
    ],
    requiredItem: "Scizorite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 125,
    baseStats: {
      hp: 70,
      atk: 150,
      def: 140,
      spa: 65,
      spd: 100,
      spe: 75
    }
  },
  shuckle: {
    name: "Shuckle",
    num: 213,
    types: [
      "Bug",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Gluttony",
      H: "Contrary"
    },
    eggGroups: [
      "Bug"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.5,
    baseStats: {
      hp: 20,
      atk: 10,
      def: 230,
      spa: 10,
      spd: 230,
      spe: 5
    }
  },
  heracross: {
    name: "Heracross",
    num: 214,
    types: [
      "Bug",
      "Fighting"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Guts",
      H: "Moxie"
    },
    eggGroups: [
      "Bug"
    ],
    formes: [
      "Heracross",
      "Heracross-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 54,
    baseStats: {
      hp: 80,
      atk: 125,
      def: 75,
      spa: 40,
      spd: 95,
      spe: 85
    }
  },
  heracrossmega: {
    name: "Heracross-Mega",
    num: 214,
    types: [
      "Bug",
      "Fighting"
    ],
    abilities: {
      "0": "Skill Link"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Heracross",
    forme: "Mega",
    formes: [
      "Heracross",
      "Heracross-Mega"
    ],
    requiredItem: "Heracronite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 62.5,
    baseStats: {
      hp: 80,
      atk: 185,
      def: 115,
      spa: 40,
      spd: 105,
      spe: 75
    }
  },
  sneasel: {
    name: "Sneasel",
    num: 215,
    types: [
      "Dark",
      "Ice"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Keen Eye",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Weavile"
    ],
    formes: [
      "Sneasel",
      "Sneasel-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 55,
      atk: 95,
      def: 55,
      spa: 35,
      spd: 75,
      spe: 115
    }
  },
  sneaselhisui: {
    name: "Sneasel-Hisui",
    num: 215,
    types: [
      "Fighting",
      "Poison"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Keen Eye",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Sneasler"
    ],
    baseSpecies: "Sneasel",
    forme: "Hisui",
    formes: [
      "Sneasel",
      "Sneasel-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 55,
      atk: 95,
      def: 55,
      spa: 35,
      spd: 75,
      spe: 115
    }
  },
  teddiursa: {
    name: "Teddiursa",
    num: 216,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Quick Feet",
      H: "Honey Gather"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Ursaring"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.8,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 40
    }
  },
  ursaring: {
    name: "Ursaring",
    num: 217,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Guts",
      "1": "Quick Feet",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Ursaluna"
    ],
    prevo: "Teddiursa",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 125.8,
    baseStats: {
      hp: 90,
      atk: 130,
      def: 75,
      spa: 75,
      spd: 75,
      spe: 55
    }
  },
  slugma: {
    name: "Slugma",
    num: 218,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Magma Armor",
      "1": "Flame Body",
      H: "Weak Armor"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Magcargo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 40,
      spa: 70,
      spd: 40,
      spe: 20
    }
  },
  magcargo: {
    name: "Magcargo",
    num: 219,
    types: [
      "Fire",
      "Rock"
    ],
    abilities: {
      "0": "Magma Armor",
      "1": "Flame Body",
      H: "Weak Armor"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Slugma",
    evoLevel: 38,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 120,
      spa: 90,
      spd: 80,
      spe: 30
    }
  },
  swinub: {
    name: "Swinub",
    num: 220,
    types: [
      "Ice",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Piloswine"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 40,
      spa: 30,
      spd: 30,
      spe: 50
    }
  },
  piloswine: {
    name: "Piloswine",
    num: 221,
    types: [
      "Ice",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mamoswine"
    ],
    prevo: "Swinub",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55.8,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 80,
      spa: 60,
      spd: 60,
      spe: 50
    }
  },
  corsola: {
    name: "Corsola",
    num: 222,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Natural Cure",
      H: "Regenerator"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    formes: [
      "Corsola",
      "Corsola-Galar"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5,
    baseStats: {
      hp: 65,
      atk: 55,
      def: 95,
      spa: 65,
      spd: 95,
      spe: 35
    }
  },
  corsolagalar: {
    name: "Corsola-Galar",
    num: 222,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Cursola"
    ],
    baseSpecies: "Corsola",
    forme: "Galar",
    formes: [
      "Corsola",
      "Corsola-Galar"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 0.5,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 100,
      spa: 65,
      spd: 100,
      spe: 30
    }
  },
  remoraid: {
    name: "Remoraid",
    num: 223,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Sniper",
      H: "Moody"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    evos: [
      "Octillery"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 35,
      atk: 65,
      def: 35,
      spa: 65,
      spd: 35,
      spe: 65
    }
  },
  octillery: {
    name: "Octillery",
    num: 224,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Suction Cups",
      "1": "Sniper",
      H: "Moody"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    prevo: "Remoraid",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 75,
      atk: 105,
      def: 75,
      spa: 105,
      spd: 75,
      spe: 45
    }
  },
  delibird: {
    name: "Delibird",
    num: 225,
    types: [
      "Ice",
      "Flying"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Hustle",
      H: "Insomnia"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 45,
      atk: 55,
      def: 45,
      spa: 65,
      spd: 45,
      spe: 75
    }
  },
  mantine: {
    name: "Mantine",
    num: 226,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Water Absorb",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Mantyke",
    evoType: "levelExtra",
    evoCondition: "with a Remoraid in party",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 220,
    baseStats: {
      hp: 85,
      atk: 40,
      def: 70,
      spa: 80,
      spd: 140,
      spe: 70
    }
  },
  skarmory: {
    name: "Skarmory",
    num: 227,
    types: [
      "Steel",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Sturdy",
      H: "Weak Armor"
    },
    eggGroups: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50.5,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 140,
      spa: 40,
      spd: 70,
      spe: 70
    }
  },
  houndour: {
    name: "Houndour",
    num: 228,
    types: [
      "Dark",
      "Fire"
    ],
    abilities: {
      "0": "Early Bird",
      "1": "Flash Fire",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Houndoom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.8,
    baseStats: {
      hp: 45,
      atk: 60,
      def: 30,
      spa: 80,
      spd: 50,
      spe: 65
    }
  },
  houndoom: {
    name: "Houndoom",
    num: 229,
    types: [
      "Dark",
      "Fire"
    ],
    abilities: {
      "0": "Early Bird",
      "1": "Flash Fire",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Houndour",
    evoLevel: 24,
    formes: [
      "Houndoom",
      "Houndoom-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35,
    baseStats: {
      hp: 75,
      atk: 90,
      def: 50,
      spa: 110,
      spd: 80,
      spe: 95
    }
  },
  houndoommega: {
    name: "Houndoom-Mega",
    num: 229,
    types: [
      "Dark",
      "Fire"
    ],
    abilities: {
      "0": "Solar Power"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Houndoom",
    forme: "Mega",
    formes: [
      "Houndoom",
      "Houndoom-Mega"
    ],
    requiredItem: "Houndoominite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 49.5,
    baseStats: {
      hp: 75,
      atk: 90,
      def: 90,
      spa: 140,
      spd: 90,
      spe: 115
    }
  },
  kingdra: {
    name: "Kingdra",
    num: 230,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Sniper",
      H: "Damp"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Seadra",
    evoItem: "Dragon Scale",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 152,
    baseStats: {
      hp: 75,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 85
    }
  },
  phanpy: {
    name: "Phanpy",
    num: 231,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Pickup",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Donphan"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.5,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 60,
      spa: 40,
      spd: 40,
      spe: 40
    }
  },
  donphan: {
    name: "Donphan",
    num: 232,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sturdy",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Phanpy",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 90,
      atk: 120,
      def: 120,
      spa: 60,
      spd: 60,
      spe: 50
    }
  },
  porygon2: {
    name: "Porygon2",
    num: 233,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Trace",
      "1": "Download",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Porygon-Z"
    ],
    prevo: "Porygon",
    evoItem: "Up-Grade",
    evoType: "trade",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 32.5,
    baseStats: {
      hp: 85,
      atk: 80,
      def: 90,
      spa: 105,
      spd: 95,
      spe: 60
    }
  },
  stantler: {
    name: "Stantler",
    num: 234,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Frisk",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Wyrdeer"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 71.2,
    baseStats: {
      hp: 73,
      atk: 95,
      def: 62,
      spa: 85,
      spd: 65,
      spe: 85
    }
  },
  smeargle: {
    name: "Smeargle",
    num: 235,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Technician",
      H: "Moody"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58,
    baseStats: {
      hp: 55,
      atk: 20,
      def: 35,
      spa: 20,
      spd: 45,
      spe: 75
    }
  },
  tyrogue: {
    name: "Tyrogue",
    num: 236,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "Steadfast",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Hitmonlee",
      "Hitmonchan",
      "Hitmontop"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 21,
    baseStats: {
      hp: 35,
      atk: 35,
      def: 35,
      spa: 35,
      spd: 35,
      spe: 35
    }
  },
  hitmontop: {
    name: "Hitmontop",
    num: 237,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Technician",
      H: "Steadfast"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 20,
    evoCondition: "with an Atk stat equal to its Def stat",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 48,
    baseStats: {
      hp: 50,
      atk: 95,
      def: 95,
      spa: 35,
      spd: 110,
      spe: 70
    }
  },
  smoochum: {
    name: "Smoochum",
    num: 238,
    types: [
      "Ice",
      "Psychic"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Forewarn",
      H: "Hydration"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Jynx"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 15,
      spa: 85,
      spd: 65,
      spe: 65
    }
  },
  elekid: {
    name: "Elekid",
    num: 239,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Electabuzz"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 23.5,
    baseStats: {
      hp: 45,
      atk: 63,
      def: 37,
      spa: 65,
      spd: 55,
      spe: 95
    }
  },
  magby: {
    name: "Magby",
    num: 240,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Magmar"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 21.4,
    baseStats: {
      hp: 45,
      atk: 75,
      def: 37,
      spa: 70,
      spd: 55,
      spe: 83
    }
  },
  miltank: {
    name: "Miltank",
    num: 241,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Scrappy",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 75.5,
    baseStats: {
      hp: 95,
      atk: 80,
      def: 105,
      spa: 40,
      spd: 70,
      spe: 100
    }
  },
  blissey: {
    name: "Blissey",
    num: 242,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Healer"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Chansey",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 46.8,
    baseStats: {
      hp: 255,
      atk: 10,
      def: 10,
      spa: 75,
      spd: 135,
      spe: 55
    }
  },
  raikou: {
    name: "Raikou",
    num: 243,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 178,
    baseStats: {
      hp: 90,
      atk: 85,
      def: 75,
      spa: 115,
      spd: 100,
      spe: 115
    }
  },
  entei: {
    name: "Entei",
    num: 244,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 198,
    baseStats: {
      hp: 115,
      atk: 115,
      def: 85,
      spa: 90,
      spd: 75,
      spe: 100
    }
  },
  suicune: {
    name: "Suicune",
    num: 245,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 187,
    baseStats: {
      hp: 100,
      atk: 75,
      def: 115,
      spa: 90,
      spd: 115,
      spe: 85
    }
  },
  larvitar: {
    name: "Larvitar",
    num: 246,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Guts",
      H: "Sand Veil"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Pupitar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 72,
    baseStats: {
      hp: 50,
      atk: 64,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 41
    }
  },
  pupitar: {
    name: "Pupitar",
    num: 247,
    types: [
      "Rock",
      "Ground"
    ],
    abilities: {
      "0": "Shed Skin"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Tyranitar"
    ],
    prevo: "Larvitar",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 152,
    baseStats: {
      hp: 70,
      atk: 84,
      def: 70,
      spa: 65,
      spd: 70,
      spe: 51
    }
  },
  tyranitar: {
    name: "Tyranitar",
    num: 248,
    types: [
      "Rock",
      "Dark"
    ],
    abilities: {
      "0": "Sand Stream",
      H: "Unnerve"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Pupitar",
    evoLevel: 55,
    formes: [
      "Tyranitar",
      "Tyranitar-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 202,
    baseStats: {
      hp: 100,
      atk: 134,
      def: 110,
      spa: 95,
      spd: 100,
      spe: 61
    }
  },
  tyranitarmega: {
    name: "Tyranitar-Mega",
    num: 248,
    types: [
      "Rock",
      "Dark"
    ],
    abilities: {
      "0": "Sand Stream"
    },
    eggGroups: [
      "Monster"
    ],
    baseSpecies: "Tyranitar",
    forme: "Mega",
    formes: [
      "Tyranitar",
      "Tyranitar-Mega"
    ],
    requiredItem: "Tyranitarite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 255,
    baseStats: {
      hp: 100,
      atk: 164,
      def: 150,
      spa: 95,
      spd: 120,
      spe: 71
    }
  },
  lugia: {
    name: "Lugia",
    num: 249,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Multiscale"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 216,
    baseStats: {
      hp: 106,
      atk: 90,
      def: 130,
      spa: 90,
      spd: 154,
      spe: 110
    }
  },
  hooh: {
    name: "Ho-Oh",
    num: 250,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Regenerator"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 199,
    baseStats: {
      hp: 106,
      atk: 130,
      def: 90,
      spa: 110,
      spd: 154,
      spe: 90
    }
  },
  celebi: {
    name: "Celebi",
    num: 251,
    types: [
      "Psychic",
      "Grass"
    ],
    abilities: {
      "0": "Natural Cure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  treecko: {
    name: "Treecko",
    num: 252,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Grovyle"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 5,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 65,
      spd: 55,
      spe: 70
    }
  },
  grovyle: {
    name: "Grovyle",
    num: 253,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Sceptile"
    ],
    prevo: "Treecko",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 21.6,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 45,
      spa: 85,
      spd: 65,
      spe: 95
    }
  },
  sceptile: {
    name: "Sceptile",
    num: 254,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Grovyle",
    evoLevel: 36,
    formes: [
      "Sceptile",
      "Sceptile-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 52.2,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 105,
      spd: 85,
      spe: 120
    }
  },
  sceptilemega: {
    name: "Sceptile-Mega",
    num: 254,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Lightning Rod"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Sceptile",
    forme: "Mega",
    formes: [
      "Sceptile",
      "Sceptile-Mega"
    ],
    requiredItem: "Sceptilite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 55.2,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 75,
      spa: 145,
      spd: 85,
      spe: 145
    }
  },
  torchic: {
    name: "Torchic",
    num: 255,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Combusken"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 2.5,
    baseStats: {
      hp: 45,
      atk: 60,
      def: 40,
      spa: 70,
      spd: 50,
      spe: 45
    }
  },
  combusken: {
    name: "Combusken",
    num: 256,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Blaziken"
    ],
    prevo: "Torchic",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 19.5,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 60,
      spa: 85,
      spd: 60,
      spe: 55
    }
  },
  blaziken: {
    name: "Blaziken",
    num: 257,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Combusken",
    evoLevel: 36,
    formes: [
      "Blaziken",
      "Blaziken-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 52,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 70,
      spa: 110,
      spd: 70,
      spe: 80
    }
  },
  blazikenmega: {
    name: "Blaziken-Mega",
    num: 257,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Blaziken",
    forme: "Mega",
    formes: [
      "Blaziken",
      "Blaziken-Mega"
    ],
    requiredItem: "Blazikenite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 52,
    baseStats: {
      hp: 80,
      atk: 160,
      def: 80,
      spa: 130,
      spd: 80,
      spe: 100
    }
  },
  mudkip: {
    name: "Mudkip",
    num: 258,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Marshtomp"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 7.6,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 40
    }
  },
  marshtomp: {
    name: "Marshtomp",
    num: 259,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Swampert"
    ],
    prevo: "Mudkip",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 28,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 50
    }
  },
  swampert: {
    name: "Swampert",
    num: 260,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Marshtomp",
    evoLevel: 36,
    formes: [
      "Swampert",
      "Swampert-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 81.9,
    baseStats: {
      hp: 100,
      atk: 110,
      def: 90,
      spa: 85,
      spd: 90,
      spe: 60
    }
  },
  swampertmega: {
    name: "Swampert-Mega",
    num: 260,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Swift Swim"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Swampert",
    forme: "Mega",
    formes: [
      "Swampert",
      "Swampert-Mega"
    ],
    requiredItem: "Swampertite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 102,
    baseStats: {
      hp: 100,
      atk: 150,
      def: 110,
      spa: 95,
      spd: 110,
      spe: 70
    }
  },
  poochyena: {
    name: "Poochyena",
    num: 261,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Quick Feet",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mightyena"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13.6,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 35,
      spa: 30,
      spd: 30,
      spe: 35
    }
  },
  mightyena: {
    name: "Mightyena",
    num: 262,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Quick Feet",
      H: "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Poochyena",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 60,
      spe: 70
    }
  },
  zigzagoon: {
    name: "Zigzagoon",
    num: 263,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Linoone"
    ],
    formes: [
      "Zigzagoon",
      "Zigzagoon-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 38,
      atk: 30,
      def: 41,
      spa: 30,
      spd: 41,
      spe: 60
    }
  },
  zigzagoongalar: {
    name: "Zigzagoon-Galar",
    num: 263,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Linoone-Galar"
    ],
    baseSpecies: "Zigzagoon",
    forme: "Galar",
    formes: [
      "Zigzagoon",
      "Zigzagoon-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 38,
      atk: 30,
      def: 41,
      spa: 30,
      spd: 41,
      spe: 60
    }
  },
  linoone: {
    name: "Linoone",
    num: 264,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Zigzagoon",
    evoLevel: 20,
    formes: [
      "Linoone",
      "Linoone-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 78,
      atk: 70,
      def: 61,
      spa: 50,
      spd: 61,
      spe: 100
    }
  },
  linoonegalar: {
    name: "Linoone-Galar",
    num: 264,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Obstagoon"
    ],
    prevo: "Zigzagoon-Galar",
    evoLevel: 20,
    baseSpecies: "Linoone",
    forme: "Galar",
    formes: [
      "Linoone",
      "Linoone-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 78,
      atk: 70,
      def: 61,
      spa: 50,
      spd: 61,
      spe: 100
    }
  },
  wurmple: {
    name: "Wurmple",
    num: 265,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Silcoon",
      "Cascoon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.6,
    baseStats: {
      hp: 45,
      atk: 45,
      def: 35,
      spa: 20,
      spd: 30,
      spe: 20
    }
  },
  silcoon: {
    name: "Silcoon",
    num: 266,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Beautifly"
    ],
    prevo: "Wurmple",
    evoLevel: 7,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10,
    baseStats: {
      hp: 50,
      atk: 35,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 15
    }
  },
  beautifly: {
    name: "Beautifly",
    num: 267,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Swarm",
      H: "Rivalry"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Silcoon",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.4,
    baseStats: {
      hp: 60,
      atk: 70,
      def: 50,
      spa: 100,
      spd: 50,
      spe: 65
    }
  },
  cascoon: {
    name: "Cascoon",
    num: 268,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Dustox"
    ],
    prevo: "Wurmple",
    evoLevel: 7,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 50,
      atk: 35,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 15
    }
  },
  dustox: {
    name: "Dustox",
    num: 269,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Compound Eyes"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Cascoon",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.6,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 70,
      spa: 50,
      spd: 90,
      spe: 65
    }
  },
  lotad: {
    name: "Lotad",
    num: 270,
    types: [
      "Water",
      "Grass"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    evos: [
      "Lombre"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.6,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 30,
      spa: 40,
      spd: 50,
      spe: 30
    }
  },
  lombre: {
    name: "Lombre",
    num: 271,
    types: [
      "Water",
      "Grass"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    evos: [
      "Ludicolo"
    ],
    prevo: "Lotad",
    evoLevel: 14,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 50,
      spa: 60,
      spd: 70,
      spe: 50
    }
  },
  ludicolo: {
    name: "Ludicolo",
    num: 272,
    types: [
      "Water",
      "Grass"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    prevo: "Lombre",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 70,
      spa: 90,
      spd: 100,
      spe: 70
    }
  },
  seedot: {
    name: "Seedot",
    num: 273,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Early Bird",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Nuzleaf"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 50,
      spa: 30,
      spd: 30,
      spe: 30
    }
  },
  nuzleaf: {
    name: "Nuzleaf",
    num: 274,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Early Bird",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Shiftry"
    ],
    prevo: "Seedot",
    evoLevel: 14,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 60
    }
  },
  shiftry: {
    name: "Shiftry",
    num: 275,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Wind Rider",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Nuzleaf",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 59.6,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 60,
      spa: 90,
      spd: 60,
      spe: 80
    }
  },
  taillow: {
    name: "Taillow",
    num: 276,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Guts",
      H: "Scrappy"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Swellow"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.3,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 85
    }
  },
  swellow: {
    name: "Swellow",
    num: 277,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Guts",
      H: "Scrappy"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Taillow",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.8,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 60,
      spa: 75,
      spd: 50,
      spe: 125
    }
  },
  wingull: {
    name: "Wingull",
    num: 278,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Hydration",
      H: "Rain Dish"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    evos: [
      "Pelipper"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 30,
      spa: 55,
      spd: 30,
      spe: 85
    }
  },
  pelipper: {
    name: "Pelipper",
    num: 279,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Drizzle",
      H: "Rain Dish"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    prevo: "Wingull",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 100,
      spa: 95,
      spd: 70,
      spe: 65
    }
  },
  ralts: {
    name: "Ralts",
    num: 280,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    evos: [
      "Kirlia"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.6,
    baseStats: {
      hp: 28,
      atk: 25,
      def: 25,
      spa: 45,
      spd: 35,
      spe: 40
    }
  },
  kirlia: {
    name: "Kirlia",
    num: 281,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    evos: [
      "Gardevoir",
      "Gallade"
    ],
    prevo: "Ralts",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.2,
    baseStats: {
      hp: 38,
      atk: 35,
      def: 35,
      spa: 65,
      spd: 55,
      spe: 50
    }
  },
  gardevoir: {
    name: "Gardevoir",
    num: 282,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    prevo: "Kirlia",
    evoLevel: 30,
    formes: [
      "Gardevoir",
      "Gardevoir-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 48.4,
    baseStats: {
      hp: 68,
      atk: 65,
      def: 65,
      spa: 125,
      spd: 115,
      spe: 80
    }
  },
  gardevoirmega: {
    name: "Gardevoir-Mega",
    num: 282,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Pixilate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Gardevoir",
    forme: "Mega",
    formes: [
      "Gardevoir",
      "Gardevoir-Mega"
    ],
    requiredItem: "Gardevoirite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 48.4,
    baseStats: {
      hp: 68,
      atk: 85,
      def: 65,
      spa: 165,
      spd: 135,
      spe: 100
    }
  },
  surskit: {
    name: "Surskit",
    num: 283,
    types: [
      "Bug",
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Rain Dish"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    evos: [
      "Masquerain"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.7,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 32,
      spa: 50,
      spd: 52,
      spe: 65
    }
  },
  masquerain: {
    name: "Masquerain",
    num: 284,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      H: "Unnerve"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    prevo: "Surskit",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.6,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 62,
      spa: 100,
      spd: 82,
      spe: 80
    }
  },
  shroomish: {
    name: "Shroomish",
    num: 285,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Effect Spore",
      "1": "Poison Heal",
      H: "Quick Feet"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Breloom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.5,
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 35
    }
  },
  breloom: {
    name: "Breloom",
    num: 286,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Effect Spore",
      "1": "Poison Heal",
      H: "Technician"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Shroomish",
    evoLevel: 23,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39.2,
    baseStats: {
      hp: 60,
      atk: 130,
      def: 80,
      spa: 60,
      spd: 60,
      spe: 70
    }
  },
  slakoth: {
    name: "Slakoth",
    num: 287,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Truant"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Vigoroth"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 35,
      spd: 35,
      spe: 30
    }
  },
  vigoroth: {
    name: "Vigoroth",
    num: 288,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Vital Spirit"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Slaking"
    ],
    prevo: "Slakoth",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 46.5,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 55,
      spd: 55,
      spe: 90
    }
  },
  slaking: {
    name: "Slaking",
    num: 289,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Truant"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vigoroth",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 130.5,
    baseStats: {
      hp: 150,
      atk: 160,
      def: 100,
      spa: 95,
      spd: 65,
      spe: 100
    }
  },
  nincada: {
    name: "Nincada",
    num: 290,
    types: [
      "Bug",
      "Ground"
    ],
    abilities: {
      "0": "Compound Eyes",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Ninjask",
      "Shedinja"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.5,
    baseStats: {
      hp: 31,
      atk: 45,
      def: 90,
      spa: 30,
      spd: 30,
      spe: 40
    }
  },
  ninjask: {
    name: "Ninjask",
    num: 291,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Speed Boost",
      H: "Infiltrator"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Nincada",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 61,
      atk: 90,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 160
    }
  },
  shedinja: {
    name: "Shedinja",
    num: 292,
    types: [
      "Bug",
      "Ghost"
    ],
    abilities: {
      "0": "Wonder Guard"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Nincada",
    evoLevel: 20,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.2,
    baseStats: {
      hp: 1,
      atk: 90,
      def: 45,
      spa: 30,
      spd: 30,
      spe: 40
    }
  },
  whismur: {
    name: "Whismur",
    num: 293,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Soundproof",
      H: "Rattled"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Loudred"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16.3,
    baseStats: {
      hp: 64,
      atk: 51,
      def: 23,
      spa: 51,
      spd: 23,
      spe: 28
    }
  },
  loudred: {
    name: "Loudred",
    num: 294,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Soundproof",
      H: "Scrappy"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Exploud"
    ],
    prevo: "Whismur",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.5,
    baseStats: {
      hp: 84,
      atk: 71,
      def: 43,
      spa: 71,
      spd: 43,
      spe: 48
    }
  },
  exploud: {
    name: "Exploud",
    num: 295,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Soundproof",
      H: "Scrappy"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Loudred",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 84,
    baseStats: {
      hp: 104,
      atk: 91,
      def: 63,
      spa: 91,
      spd: 73,
      spe: 68
    }
  },
  makuhita: {
    name: "Makuhita",
    num: 296,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Guts",
      H: "Sheer Force"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Hariyama"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 86.4,
    baseStats: {
      hp: 72,
      atk: 60,
      def: 30,
      spa: 20,
      spd: 30,
      spe: 25
    }
  },
  hariyama: {
    name: "Hariyama",
    num: 297,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Guts",
      H: "Sheer Force"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Makuhita",
    evoLevel: 24,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 253.8,
    baseStats: {
      hp: 144,
      atk: 120,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 50
    }
  },
  azurill: {
    name: "Azurill",
    num: 298,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Marill"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 2,
    baseStats: {
      hp: 50,
      atk: 20,
      def: 40,
      spa: 20,
      spd: 40,
      spe: 20
    }
  },
  nosepass: {
    name: "Nosepass",
    num: 299,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Magnet Pull",
      H: "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Probopass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 97,
    baseStats: {
      hp: 30,
      atk: 45,
      def: 135,
      spa: 45,
      spd: 90,
      spe: 30
    }
  },
  skitty: {
    name: "Skitty",
    num: 300,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Normalize",
      H: "Wonder Skin"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    evos: [
      "Delcatty"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 11,
    baseStats: {
      hp: 50,
      atk: 45,
      def: 45,
      spa: 35,
      spd: 35,
      spe: 50
    }
  },
  delcatty: {
    name: "Delcatty",
    num: 301,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Normalize",
      H: "Wonder Skin"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Skitty",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 32.6,
    baseStats: {
      hp: 70,
      atk: 65,
      def: 65,
      spa: 55,
      spd: 55,
      spe: 90
    }
  },
  sableye: {
    name: "Sableye",
    num: 302,
    types: [
      "Dark",
      "Ghost"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Stall",
      H: "Prankster"
    },
    eggGroups: [
      "Human-Like"
    ],
    formes: [
      "Sableye",
      "Sableye-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 75,
      spa: 65,
      spd: 65,
      spe: 50
    }
  },
  sableyemega: {
    name: "Sableye-Mega",
    num: 302,
    types: [
      "Dark",
      "Ghost"
    ],
    abilities: {
      "0": "Magic Bounce"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Sableye",
    forme: "Mega",
    formes: [
      "Sableye",
      "Sableye-Mega"
    ],
    requiredItem: "Sablenite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 161,
    baseStats: {
      hp: 50,
      atk: 85,
      def: 125,
      spa: 85,
      spd: 115,
      spe: 20
    }
  },
  mawile: {
    name: "Mawile",
    num: 303,
    types: [
      "Steel",
      "Fairy"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Intimidate",
      H: "Sheer Force"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    formes: [
      "Mawile",
      "Mawile-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 50,
      atk: 85,
      def: 85,
      spa: 55,
      spd: 55,
      spe: 50
    }
  },
  mawilemega: {
    name: "Mawile-Mega",
    num: 303,
    types: [
      "Steel",
      "Fairy"
    ],
    abilities: {
      "0": "Huge Power"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    baseSpecies: "Mawile",
    forme: "Mega",
    formes: [
      "Mawile",
      "Mawile-Mega"
    ],
    requiredItem: "Mawilite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23.5,
    baseStats: {
      hp: 50,
      atk: 105,
      def: 125,
      spa: 55,
      spd: 95,
      spe: 50
    }
  },
  aron: {
    name: "Aron",
    num: 304,
    types: [
      "Steel",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Lairon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 100,
      spa: 40,
      spd: 40,
      spe: 30
    }
  },
  lairon: {
    name: "Lairon",
    num: 305,
    types: [
      "Steel",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Aggron"
    ],
    prevo: "Aron",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 140,
      spa: 50,
      spd: 50,
      spe: 40
    }
  },
  aggron: {
    name: "Aggron",
    num: 306,
    types: [
      "Steel",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Lairon",
    evoLevel: 42,
    formes: [
      "Aggron",
      "Aggron-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 360,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 180,
      spa: 60,
      spd: 60,
      spe: 50
    }
  },
  aggronmega: {
    name: "Aggron-Mega",
    num: 306,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Filter"
    },
    eggGroups: [
      "Monster"
    ],
    baseSpecies: "Aggron",
    forme: "Mega",
    formes: [
      "Aggron",
      "Aggron-Mega"
    ],
    requiredItem: "Aggronite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 395,
    baseStats: {
      hp: 70,
      atk: 140,
      def: 230,
      spa: 60,
      spd: 80,
      spe: 50
    }
  },
  meditite: {
    name: "Meditite",
    num: 307,
    types: [
      "Fighting",
      "Psychic"
    ],
    abilities: {
      "0": "Pure Power",
      H: "Telepathy"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Medicham"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.2,
    baseStats: {
      hp: 30,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 55,
      spe: 60
    }
  },
  medicham: {
    name: "Medicham",
    num: 308,
    types: [
      "Fighting",
      "Psychic"
    ],
    abilities: {
      "0": "Pure Power",
      H: "Telepathy"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Meditite",
    evoLevel: 37,
    formes: [
      "Medicham",
      "Medicham-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.5,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 80
    }
  },
  medichammega: {
    name: "Medicham-Mega",
    num: 308,
    types: [
      "Fighting",
      "Psychic"
    ],
    abilities: {
      "0": "Pure Power"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Medicham",
    forme: "Mega",
    formes: [
      "Medicham",
      "Medicham-Mega"
    ],
    requiredItem: "Medichamite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.5,
    baseStats: {
      hp: 60,
      atk: 100,
      def: 85,
      spa: 80,
      spd: 85,
      spe: 100
    }
  },
  electrike: {
    name: "Electrike",
    num: 309,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      "1": "Lightning Rod",
      H: "Minus"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Manectric"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.2,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 65,
      spd: 40,
      spe: 65
    }
  },
  manectric: {
    name: "Manectric",
    num: 310,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      "1": "Lightning Rod",
      H: "Minus"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Electrike",
    evoLevel: 26,
    formes: [
      "Manectric",
      "Manectric-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.2,
    baseStats: {
      hp: 70,
      atk: 75,
      def: 60,
      spa: 105,
      spd: 60,
      spe: 105
    }
  },
  manectricmega: {
    name: "Manectric-Mega",
    num: 310,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Manectric",
    forme: "Mega",
    formes: [
      "Manectric",
      "Manectric-Mega"
    ],
    requiredItem: "Manectite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 44,
    baseStats: {
      hp: 70,
      atk: 75,
      def: 80,
      spa: 135,
      spd: 80,
      spe: 135
    }
  },
  plusle: {
    name: "Plusle",
    num: 311,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Plus",
      H: "Lightning Rod"
    },
    eggGroups: [
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 40,
      spa: 85,
      spd: 75,
      spe: 95
    }
  },
  minun: {
    name: "Minun",
    num: 312,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Minus",
      H: "Volt Absorb"
    },
    eggGroups: [
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 60,
      atk: 40,
      def: 50,
      spa: 75,
      spd: 85,
      spe: 95
    }
  },
  volbeat: {
    name: "Volbeat",
    num: 313,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Swarm",
      H: "Prankster"
    },
    eggGroups: [
      "Bug",
      "Human-Like"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 17.7,
    baseStats: {
      hp: 65,
      atk: 73,
      def: 75,
      spa: 47,
      spd: 85,
      spe: 85
    }
  },
  illumise: {
    name: "Illumise",
    num: 314,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Tinted Lens",
      H: "Prankster"
    },
    eggGroups: [
      "Bug",
      "Human-Like"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 17.7,
    baseStats: {
      hp: 65,
      atk: 47,
      def: 75,
      spa: 73,
      spd: 85,
      spe: 85
    }
  },
  roselia: {
    name: "Roselia",
    num: 315,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Roserade"
    ],
    prevo: "Budew",
    evoType: "levelFriendship",
    evoCondition: "during the day",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 50,
      atk: 60,
      def: 45,
      spa: 100,
      spd: 80,
      spe: 65
    }
  },
  gulpin: {
    name: "Gulpin",
    num: 316,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Liquid Ooze",
      "1": "Sticky Hold",
      H: "Gluttony"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Swalot"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.3,
    baseStats: {
      hp: 70,
      atk: 43,
      def: 53,
      spa: 43,
      spd: 53,
      spe: 40
    }
  },
  swalot: {
    name: "Swalot",
    num: 317,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Liquid Ooze",
      "1": "Sticky Hold",
      H: "Gluttony"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Gulpin",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80,
    baseStats: {
      hp: 100,
      atk: 73,
      def: 83,
      spa: 73,
      spd: 83,
      spe: 55
    }
  },
  carvanha: {
    name: "Carvanha",
    num: 318,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Rough Skin",
      H: "Speed Boost"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Sharpedo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.8,
    baseStats: {
      hp: 45,
      atk: 90,
      def: 20,
      spa: 65,
      spd: 20,
      spe: 65
    }
  },
  sharpedo: {
    name: "Sharpedo",
    num: 319,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Rough Skin",
      H: "Speed Boost"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Carvanha",
    evoLevel: 30,
    formes: [
      "Sharpedo",
      "Sharpedo-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 88.8,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 40,
      spa: 95,
      spd: 40,
      spe: 95
    }
  },
  sharpedomega: {
    name: "Sharpedo-Mega",
    num: 319,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Strong Jaw"
    },
    eggGroups: [
      "Water 2"
    ],
    baseSpecies: "Sharpedo",
    forme: "Mega",
    formes: [
      "Sharpedo",
      "Sharpedo-Mega"
    ],
    requiredItem: "Sharpedonite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 130.3,
    baseStats: {
      hp: 70,
      atk: 140,
      def: 70,
      spa: 110,
      spd: 65,
      spe: 105
    }
  },
  wailmer: {
    name: "Wailmer",
    num: 320,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Veil",
      "1": "Oblivious",
      H: "Pressure"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    evos: [
      "Wailord"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 130,
    baseStats: {
      hp: 130,
      atk: 70,
      def: 35,
      spa: 70,
      spd: 35,
      spe: 60
    }
  },
  wailord: {
    name: "Wailord",
    num: 321,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Veil",
      "1": "Oblivious",
      H: "Pressure"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    prevo: "Wailmer",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 398,
    baseStats: {
      hp: 170,
      atk: 90,
      def: 45,
      spa: 90,
      spd: 45,
      spe: 60
    }
  },
  numel: {
    name: "Numel",
    num: 322,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Simple",
      H: "Own Tempo"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Camerupt"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 40,
      spa: 65,
      spd: 45,
      spe: 35
    }
  },
  camerupt: {
    name: "Camerupt",
    num: 323,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Magma Armor",
      "1": "Solid Rock",
      H: "Anger Point"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Numel",
    evoLevel: 33,
    formes: [
      "Camerupt",
      "Camerupt-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 220,
    baseStats: {
      hp: 70,
      atk: 100,
      def: 70,
      spa: 105,
      spd: 75,
      spe: 40
    }
  },
  cameruptmega: {
    name: "Camerupt-Mega",
    num: 323,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Sheer Force"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Camerupt",
    forme: "Mega",
    formes: [
      "Camerupt",
      "Camerupt-Mega"
    ],
    requiredItem: "Cameruptite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 320.5,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 100,
      spa: 145,
      spd: 105,
      spe: 20
    }
  },
  torkoal: {
    name: "Torkoal",
    num: 324,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "White Smoke",
      "1": "Drought",
      H: "Shell Armor"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80.4,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 140,
      spa: 85,
      spd: 70,
      spe: 20
    }
  },
  spoink: {
    name: "Spoink",
    num: 325,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Gluttony"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Grumpig"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30.6,
    baseStats: {
      hp: 60,
      atk: 25,
      def: 35,
      spa: 70,
      spd: 80,
      spe: 60
    }
  },
  grumpig: {
    name: "Grumpig",
    num: 326,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Gluttony"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Spoink",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 71.5,
    baseStats: {
      hp: 80,
      atk: 45,
      def: 65,
      spa: 90,
      spd: 110,
      spe: 80
    }
  },
  spinda: {
    name: "Spinda",
    num: 327,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Tangled Feet",
      H: "Contrary"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 60
    }
  },
  trapinch: {
    name: "Trapinch",
    num: 328,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Arena Trap",
      H: "Sheer Force"
    },
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    evos: [
      "Vibrava"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 45,
      atk: 100,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 10
    }
  },
  vibrava: {
    name: "Vibrava",
    num: 329,
    types: [
      "Ground",
      "Dragon"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    evos: [
      "Flygon"
    ],
    prevo: "Trapinch",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.3,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 70
    }
  },
  flygon: {
    name: "Flygon",
    num: 330,
    types: [
      "Ground",
      "Dragon"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    prevo: "Vibrava",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 82,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 100
    }
  },
  cacnea: {
    name: "Cacnea",
    num: 331,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Water Absorb"
    },
    eggGroups: [
      "Grass",
      "Human-Like"
    ],
    evos: [
      "Cacturne"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 51.3,
    baseStats: {
      hp: 50,
      atk: 85,
      def: 40,
      spa: 85,
      spd: 40,
      spe: 35
    }
  },
  cacturne: {
    name: "Cacturne",
    num: 332,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Water Absorb"
    },
    eggGroups: [
      "Grass",
      "Human-Like"
    ],
    prevo: "Cacnea",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 77.4,
    baseStats: {
      hp: 70,
      atk: 115,
      def: 60,
      spa: 115,
      spd: 60,
      spe: 55
    }
  },
  swablu: {
    name: "Swablu",
    num: 333,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Natural Cure",
      H: "Cloud Nine"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    evos: [
      "Altaria"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.2,
    baseStats: {
      hp: 45,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 75,
      spe: 50
    }
  },
  altaria: {
    name: "Altaria",
    num: 334,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Natural Cure",
      H: "Cloud Nine"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    prevo: "Swablu",
    evoLevel: 35,
    formes: [
      "Altaria",
      "Altaria-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.6,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 90,
      spa: 70,
      spd: 105,
      spe: 80
    }
  },
  altariamega: {
    name: "Altaria-Mega",
    num: 334,
    types: [
      "Dragon",
      "Fairy"
    ],
    abilities: {
      "0": "Pixilate"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    baseSpecies: "Altaria",
    forme: "Mega",
    formes: [
      "Altaria",
      "Altaria-Mega"
    ],
    requiredItem: "Altarianite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.6,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 110,
      spa: 110,
      spd: 105,
      spe: 80
    }
  },
  zangoose: {
    name: "Zangoose",
    num: 335,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Immunity",
      H: "Toxic Boost"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.3,
    baseStats: {
      hp: 73,
      atk: 115,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 90
    }
  },
  seviper: {
    name: "Seviper",
    num: 336,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Infiltrator"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 52.5,
    baseStats: {
      hp: 73,
      atk: 100,
      def: 60,
      spa: 100,
      spd: 60,
      spe: 65
    }
  },
  lunatone: {
    name: "Lunatone",
    num: 337,
    types: [
      "Rock",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 168,
    baseStats: {
      hp: 90,
      atk: 55,
      def: 65,
      spa: 95,
      spd: 85,
      spe: 70
    }
  },
  solrock: {
    name: "Solrock",
    num: 338,
    types: [
      "Rock",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 154,
    baseStats: {
      hp: 90,
      atk: 95,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 70
    }
  },
  barboach: {
    name: "Barboach",
    num: 339,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Anticipation",
      H: "Hydration"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Whiscash"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.9,
    baseStats: {
      hp: 50,
      atk: 48,
      def: 43,
      spa: 46,
      spd: 41,
      spe: 60
    }
  },
  whiscash: {
    name: "Whiscash",
    num: 340,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Anticipation",
      H: "Hydration"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Barboach",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23.6,
    baseStats: {
      hp: 110,
      atk: 78,
      def: 73,
      spa: 76,
      spd: 71,
      spe: 60
    }
  },
  corphish: {
    name: "Corphish",
    num: 341,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Crawdaunt"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 43,
      atk: 80,
      def: 65,
      spa: 50,
      spd: 35,
      spe: 35
    }
  },
  crawdaunt: {
    name: "Crawdaunt",
    num: 342,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Corphish",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.8,
    baseStats: {
      hp: 63,
      atk: 120,
      def: 85,
      spa: 90,
      spd: 55,
      spe: 55
    }
  },
  baltoy: {
    name: "Baltoy",
    num: 343,
    types: [
      "Ground",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Claydol"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 21.5,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 70,
      spe: 55
    }
  },
  claydol: {
    name: "Claydol",
    num: 344,
    types: [
      "Ground",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Baltoy",
    evoLevel: 36,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 108,
    baseStats: {
      hp: 60,
      atk: 70,
      def: 105,
      spa: 70,
      spd: 120,
      spe: 75
    }
  },
  lileep: {
    name: "Lileep",
    num: 345,
    types: [
      "Rock",
      "Grass"
    ],
    abilities: {
      "0": "Suction Cups",
      H: "Storm Drain"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Cradily"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 23.8,
    baseStats: {
      hp: 66,
      atk: 41,
      def: 77,
      spa: 61,
      spd: 87,
      spe: 23
    }
  },
  cradily: {
    name: "Cradily",
    num: 346,
    types: [
      "Rock",
      "Grass"
    ],
    abilities: {
      "0": "Suction Cups",
      H: "Storm Drain"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Lileep",
    evoLevel: 40,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 60.4,
    baseStats: {
      hp: 86,
      atk: 81,
      def: 97,
      spa: 81,
      spd: 107,
      spe: 43
    }
  },
  anorith: {
    name: "Anorith",
    num: 347,
    types: [
      "Rock",
      "Bug"
    ],
    abilities: {
      "0": "Battle Armor",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Armaldo"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12.5,
    baseStats: {
      hp: 45,
      atk: 95,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    }
  },
  armaldo: {
    name: "Armaldo",
    num: 348,
    types: [
      "Rock",
      "Bug"
    ],
    abilities: {
      "0": "Battle Armor",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Anorith",
    evoLevel: 40,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 68.2,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 100,
      spa: 70,
      spd: 80,
      spe: 45
    }
  },
  feebas: {
    name: "Feebas",
    num: 349,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Oblivious",
      H: "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Milotic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.4,
    baseStats: {
      hp: 20,
      atk: 15,
      def: 20,
      spa: 10,
      spd: 55,
      spe: 80
    }
  },
  milotic: {
    name: "Milotic",
    num: 350,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Marvel Scale",
      "1": "Competitive",
      H: "Cute Charm"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Feebas",
    evoItem: "Prism Scale",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 162,
    baseStats: {
      hp: 95,
      atk: 60,
      def: 79,
      spa: 100,
      spd: 125,
      spe: 81
    }
  },
  castform: {
    name: "Castform",
    num: 351,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Forecast"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    formes: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.8,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    }
  },
  castformrainy: {
    name: "Castform-Rainy",
    num: 351,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Forecast"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    baseSpecies: "Castform",
    forme: "Rainy",
    formes: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.8,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    }
  },
  castformsnowy: {
    name: "Castform-Snowy",
    num: 351,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Forecast"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    baseSpecies: "Castform",
    forme: "Snowy",
    formes: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.8,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    }
  },
  castformsunny: {
    name: "Castform-Sunny",
    num: 351,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Forecast"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    baseSpecies: "Castform",
    forme: "Sunny",
    formes: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.8,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    }
  },
  kecleon: {
    name: "Kecleon",
    num: 352,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Color Change",
      H: "Protean"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 120,
      spe: 40
    }
  },
  shuppet: {
    name: "Shuppet",
    num: 353,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Frisk",
      H: "Cursed Body"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Banette"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.3,
    baseStats: {
      hp: 44,
      atk: 75,
      def: 35,
      spa: 63,
      spd: 33,
      spe: 45
    }
  },
  banette: {
    name: "Banette",
    num: 354,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Frisk",
      H: "Cursed Body"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Shuppet",
    evoLevel: 37,
    formes: [
      "Banette",
      "Banette-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.5,
    baseStats: {
      hp: 64,
      atk: 115,
      def: 65,
      spa: 83,
      spd: 63,
      spe: 65
    }
  },
  banettemega: {
    name: "Banette-Mega",
    num: 354,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Prankster"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Banette",
    forme: "Mega",
    formes: [
      "Banette",
      "Banette-Mega"
    ],
    requiredItem: "Banettite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 64,
      atk: 165,
      def: 75,
      spa: 93,
      spd: 83,
      spe: 75
    }
  },
  duskull: {
    name: "Duskull",
    num: 355,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Levitate",
      H: "Frisk"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Dusclops"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 20,
      atk: 40,
      def: 90,
      spa: 30,
      spd: 90,
      spe: 25
    }
  },
  dusclops: {
    name: "Dusclops",
    num: 356,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Pressure",
      H: "Frisk"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Dusknoir"
    ],
    prevo: "Duskull",
    evoLevel: 37,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30.6,
    baseStats: {
      hp: 40,
      atk: 70,
      def: 130,
      spa: 60,
      spd: 130,
      spe: 25
    }
  },
  tropius: {
    name: "Tropius",
    num: 357,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 100,
    baseStats: {
      hp: 99,
      atk: 68,
      def: 83,
      spa: 72,
      spd: 87,
      spe: 51
    }
  },
  chimecho: {
    name: "Chimecho",
    num: 358,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Chingling",
    evoType: "levelFriendship",
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 75,
      atk: 50,
      def: 80,
      spa: 95,
      spd: 90,
      spe: 65
    }
  },
  absol: {
    name: "Absol",
    num: 359,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Pressure",
      "1": "Super Luck",
      H: "Justified"
    },
    eggGroups: [
      "Field"
    ],
    formes: [
      "Absol",
      "Absol-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47,
    baseStats: {
      hp: 65,
      atk: 130,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 75
    }
  },
  absolmega: {
    name: "Absol-Mega",
    num: 359,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Magic Bounce"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Absol",
    forme: "Mega",
    formes: [
      "Absol",
      "Absol-Mega"
    ],
    requiredItem: "Absolite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 49,
    baseStats: {
      hp: 65,
      atk: 150,
      def: 60,
      spa: 115,
      spd: 60,
      spe: 115
    }
  },
  wynaut: {
    name: "Wynaut",
    num: 360,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Shadow Tag",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Wobbuffet"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14,
    baseStats: {
      hp: 95,
      atk: 23,
      def: 48,
      spa: 23,
      spd: 48,
      spe: 23
    }
  },
  snorunt: {
    name: "Snorunt",
    num: 361,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Ice Body",
      H: "Moody"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    evos: [
      "Glalie",
      "Froslass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16.8,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 50
    }
  },
  glalie: {
    name: "Glalie",
    num: 362,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Ice Body",
      H: "Moody"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    prevo: "Snorunt",
    evoLevel: 42,
    formes: [
      "Glalie",
      "Glalie-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 256.5,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 80
    }
  },
  glaliemega: {
    name: "Glalie-Mega",
    num: 362,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Refrigerate"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    baseSpecies: "Glalie",
    forme: "Mega",
    formes: [
      "Glalie",
      "Glalie-Mega"
    ],
    requiredItem: "Glalitite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 350.2,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 80,
      spa: 120,
      spd: 80,
      spe: 100
    }
  },
  spheal: {
    name: "Spheal",
    num: 363,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Sealeo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39.5,
    baseStats: {
      hp: 70,
      atk: 40,
      def: 50,
      spa: 55,
      spd: 50,
      spe: 25
    }
  },
  sealeo: {
    name: "Sealeo",
    num: 364,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Walrein"
    ],
    prevo: "Spheal",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 87.6,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 45
    }
  },
  walrein: {
    name: "Walrein",
    num: 365,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Sealeo",
    evoLevel: 44,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 150.6,
    baseStats: {
      hp: 110,
      atk: 80,
      def: 90,
      spa: 95,
      spd: 90,
      spe: 65
    }
  },
  clamperl: {
    name: "Clamperl",
    num: 366,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Shell Armor",
      H: "Rattled"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Huntail",
      "Gorebyss"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 52.5,
    baseStats: {
      hp: 35,
      atk: 64,
      def: 85,
      spa: 74,
      spd: 55,
      spe: 32
    }
  },
  huntail: {
    name: "Huntail",
    num: 367,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Clamperl",
    evoItem: "Deep Sea Tooth",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 55,
      atk: 104,
      def: 105,
      spa: 94,
      spd: 75,
      spe: 52
    }
  },
  gorebyss: {
    name: "Gorebyss",
    num: 368,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Hydration"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Clamperl",
    evoItem: "Deep Sea Scale",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22.6,
    baseStats: {
      hp: 55,
      atk: 84,
      def: 105,
      spa: 114,
      spd: 75,
      spe: 52
    }
  },
  relicanth: {
    name: "Relicanth",
    num: 369,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Rock Head",
      H: "Sturdy"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 23.4,
    baseStats: {
      hp: 100,
      atk: 90,
      def: 130,
      spa: 45,
      spd: 65,
      spe: 55
    }
  },
  luvdisc: {
    name: "Luvdisc",
    num: 370,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Hydration"
    },
    eggGroups: [
      "Water 2"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 8.7,
    baseStats: {
      hp: 43,
      atk: 30,
      def: 55,
      spa: 40,
      spd: 65,
      spe: 97
    }
  },
  bagon: {
    name: "Bagon",
    num: 371,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rock Head",
      H: "Sheer Force"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Shelgon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42.1,
    baseStats: {
      hp: 45,
      atk: 75,
      def: 60,
      spa: 40,
      spd: 30,
      spe: 50
    }
  },
  shelgon: {
    name: "Shelgon",
    num: 372,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rock Head",
      H: "Overcoat"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Salamence"
    ],
    prevo: "Bagon",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110.5,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 100,
      spa: 60,
      spd: 50,
      spe: 50
    }
  },
  salamence: {
    name: "Salamence",
    num: 373,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      H: "Moxie"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Shelgon",
    evoLevel: 50,
    formes: [
      "Salamence",
      "Salamence-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 102.6,
    baseStats: {
      hp: 95,
      atk: 135,
      def: 80,
      spa: 110,
      spd: 80,
      spe: 100
    }
  },
  salamencemega: {
    name: "Salamence-Mega",
    num: 373,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Aerilate"
    },
    eggGroups: [
      "Dragon"
    ],
    baseSpecies: "Salamence",
    forme: "Mega",
    formes: [
      "Salamence",
      "Salamence-Mega"
    ],
    requiredItem: "Salamencite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 112.6,
    baseStats: {
      hp: 95,
      atk: 145,
      def: 130,
      spa: 120,
      spd: 90,
      spe: 120
    }
  },
  beldum: {
    name: "Beldum",
    num: 374,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Metang"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 95.2,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 80,
      spa: 35,
      spd: 60,
      spe: 30
    }
  },
  metang: {
    name: "Metang",
    num: 375,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Metagross"
    ],
    prevo: "Beldum",
    evoLevel: 20,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 202.5,
    baseStats: {
      hp: 60,
      atk: 75,
      def: 100,
      spa: 55,
      spd: 80,
      spe: 50
    }
  },
  metagross: {
    name: "Metagross",
    num: 376,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Metang",
    evoLevel: 45,
    formes: [
      "Metagross",
      "Metagross-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 550,
    baseStats: {
      hp: 80,
      atk: 135,
      def: 130,
      spa: 95,
      spd: 90,
      spe: 70
    }
  },
  metagrossmega: {
    name: "Metagross-Mega",
    num: 376,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Tough Claws"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Metagross",
    forme: "Mega",
    formes: [
      "Metagross",
      "Metagross-Mega"
    ],
    requiredItem: "Metagrossite",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 942.9,
    baseStats: {
      hp: 80,
      atk: 145,
      def: 150,
      spa: 105,
      spd: 110,
      spe: 110
    }
  },
  regirock: {
    name: "Regirock",
    num: 377,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Sturdy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 230,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 200,
      spa: 50,
      spd: 100,
      spe: 50
    }
  },
  regice: {
    name: "Regice",
    num: 378,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Ice Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 175,
    baseStats: {
      hp: 80,
      atk: 50,
      def: 100,
      spa: 100,
      spd: 200,
      spe: 50
    }
  },
  registeel: {
    name: "Registeel",
    num: 379,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 205,
    baseStats: {
      hp: 80,
      atk: 75,
      def: 150,
      spa: 75,
      spd: 150,
      spe: 50
    }
  },
  latias: {
    name: "Latias",
    num: 380,
    types: [
      "Dragon",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Latias",
      "Latias-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 40,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 90,
      spa: 110,
      spd: 130,
      spe: 110
    }
  },
  latiasmega: {
    name: "Latias-Mega",
    num: 380,
    types: [
      "Dragon",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Latias",
    forme: "Mega",
    formes: [
      "Latias",
      "Latias-Mega"
    ],
    requiredItem: "Latiasite",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 52,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 120,
      spa: 140,
      spd: 150,
      spe: 110
    }
  },
  latios: {
    name: "Latios",
    num: 381,
    types: [
      "Dragon",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Latios",
      "Latios-Mega"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 60,
    baseStats: {
      hp: 80,
      atk: 90,
      def: 80,
      spa: 130,
      spd: 110,
      spe: 110
    }
  },
  latiosmega: {
    name: "Latios-Mega",
    num: 381,
    types: [
      "Dragon",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Latios",
    forme: "Mega",
    formes: [
      "Latios",
      "Latios-Mega"
    ],
    requiredItem: "Latiosite",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 70,
    baseStats: {
      hp: 80,
      atk: 130,
      def: 100,
      spa: 160,
      spd: 120,
      spe: 110
    }
  },
  kyogre: {
    name: "Kyogre",
    num: 382,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Drizzle"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Kyogre",
      "Kyogre-Primal"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 352,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 90,
      spa: 150,
      spd: 140,
      spe: 90
    }
  },
  kyogreprimal: {
    name: "Kyogre-Primal",
    num: 382,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Primordial Sea"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Kyogre",
    forme: "Primal",
    formes: [
      "Kyogre",
      "Kyogre-Primal"
    ],
    requiredItem: "Blue Orb",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 430,
    baseStats: {
      hp: 100,
      atk: 150,
      def: 90,
      spa: 180,
      spd: 160,
      spe: 90
    }
  },
  groudon: {
    name: "Groudon",
    num: 383,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Drought"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Groudon",
      "Groudon-Primal"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 950,
    baseStats: {
      hp: 100,
      atk: 150,
      def: 140,
      spa: 100,
      spd: 90,
      spe: 90
    }
  },
  groudonprimal: {
    name: "Groudon-Primal",
    num: 383,
    types: [
      "Ground",
      "Fire"
    ],
    abilities: {
      "0": "Desolate Land"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Groudon",
    forme: "Primal",
    formes: [
      "Groudon",
      "Groudon-Primal"
    ],
    requiredItem: "Red Orb",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 999.7,
    baseStats: {
      hp: 100,
      atk: 180,
      def: 160,
      spa: 150,
      spd: 90,
      spe: 90
    }
  },
  rayquaza: {
    name: "Rayquaza",
    num: 384,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Air Lock"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Rayquaza",
      "Rayquaza-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 206.5,
    baseStats: {
      hp: 105,
      atk: 150,
      def: 90,
      spa: 150,
      spd: 90,
      spe: 95
    }
  },
  rayquazamega: {
    name: "Rayquaza-Mega",
    num: 384,
    types: [
      "Dragon",
      "Flying"
    ],
    abilities: {
      "0": "Delta Stream"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Rayquaza",
    forme: "Mega",
    formes: [
      "Rayquaza",
      "Rayquaza-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 392,
    baseStats: {
      hp: 105,
      atk: 180,
      def: 100,
      spa: 180,
      spd: 100,
      spe: 115
    }
  },
  jirachi: {
    name: "Jirachi",
    num: 385,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Serene Grace"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.1,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  deoxys: {
    name: "Deoxys",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60.8,
    baseStats: {
      hp: 50,
      atk: 150,
      def: 50,
      spa: 150,
      spd: 50,
      spe: 150
    }
  },
  deoxysattack: {
    name: "Deoxys-Attack",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Deoxys",
    forme: "Attack",
    formes: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60.8,
    baseStats: {
      hp: 50,
      atk: 180,
      def: 20,
      spa: 180,
      spd: 20,
      spe: 150
    }
  },
  deoxysdefense: {
    name: "Deoxys-Defense",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Deoxys",
    forme: "Defense",
    formes: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60.8,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 160,
      spa: 70,
      spd: 160,
      spe: 90
    }
  },
  deoxysspeed: {
    name: "Deoxys-Speed",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Deoxys",
    forme: "Speed",
    formes: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60.8,
    baseStats: {
      hp: 50,
      atk: 95,
      def: 90,
      spa: 95,
      spd: 90,
      spe: 180
    }
  },
  turtwig: {
    name: "Turtwig",
    num: 387,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Grotle"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 10.2,
    baseStats: {
      hp: 55,
      atk: 68,
      def: 64,
      spa: 45,
      spd: 55,
      spe: 31
    }
  },
  grotle: {
    name: "Grotle",
    num: 388,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Torterra"
    ],
    prevo: "Turtwig",
    evoLevel: 18,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 97,
    baseStats: {
      hp: 75,
      atk: 89,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 36
    }
  },
  torterra: {
    name: "Torterra",
    num: 389,
    types: [
      "Grass",
      "Ground"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Grotle",
    evoLevel: 32,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 310,
    baseStats: {
      hp: 95,
      atk: 109,
      def: 105,
      spa: 75,
      spd: 85,
      spe: 56
    }
  },
  chimchar: {
    name: "Chimchar",
    num: 390,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Monferno"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.2,
    baseStats: {
      hp: 44,
      atk: 58,
      def: 44,
      spa: 58,
      spd: 44,
      spe: 61
    }
  },
  monferno: {
    name: "Monferno",
    num: 391,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Infernape"
    ],
    prevo: "Chimchar",
    evoLevel: 14,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 22,
    baseStats: {
      hp: 64,
      atk: 78,
      def: 52,
      spa: 78,
      spd: 52,
      spe: 81
    }
  },
  infernape: {
    name: "Infernape",
    num: 392,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Monferno",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 55,
    baseStats: {
      hp: 76,
      atk: 104,
      def: 71,
      spa: 104,
      spd: 71,
      spe: 108
    }
  },
  piplup: {
    name: "Piplup",
    num: 393,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Prinplup"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 5.2,
    baseStats: {
      hp: 53,
      atk: 51,
      def: 53,
      spa: 61,
      spd: 56,
      spe: 40
    }
  },
  prinplup: {
    name: "Prinplup",
    num: 394,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Empoleon"
    ],
    prevo: "Piplup",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 23,
    baseStats: {
      hp: 64,
      atk: 66,
      def: 68,
      spa: 81,
      spd: 76,
      spe: 50
    }
  },
  empoleon: {
    name: "Empoleon",
    num: 395,
    types: [
      "Water",
      "Steel"
    ],
    abilities: {
      "0": "Torrent",
      H: "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Prinplup",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 84.5,
    baseStats: {
      hp: 84,
      atk: 86,
      def: 88,
      spa: 111,
      spd: 101,
      spe: 60
    }
  },
  starly: {
    name: "Starly",
    num: 396,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      H: "Reckless"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Staravia"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 60
    }
  },
  staravia: {
    name: "Staravia",
    num: 397,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      H: "Reckless"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Staraptor"
    ],
    prevo: "Starly",
    evoLevel: 14,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 55,
      atk: 75,
      def: 50,
      spa: 40,
      spd: 40,
      spe: 80
    }
  },
  staraptor: {
    name: "Staraptor",
    num: 398,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      H: "Reckless"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Staravia",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.9,
    baseStats: {
      hp: 85,
      atk: 120,
      def: 70,
      spa: 50,
      spd: 60,
      spe: 100
    }
  },
  bidoof: {
    name: "Bidoof",
    num: 399,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Simple",
      "1": "Unaware",
      H: "Moody"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Bibarel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20,
    baseStats: {
      hp: 59,
      atk: 45,
      def: 40,
      spa: 35,
      spd: 40,
      spe: 31
    }
  },
  bibarel: {
    name: "Bibarel",
    num: 400,
    types: [
      "Normal",
      "Water"
    ],
    abilities: {
      "0": "Simple",
      "1": "Unaware",
      H: "Moody"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Bidoof",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.5,
    baseStats: {
      hp: 79,
      atk: 85,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 71
    }
  },
  kricketot: {
    name: "Kricketot",
    num: 401,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Run Away"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Kricketune"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.2,
    baseStats: {
      hp: 37,
      atk: 25,
      def: 41,
      spa: 25,
      spd: 41,
      spe: 25
    }
  },
  kricketune: {
    name: "Kricketune",
    num: 402,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Swarm",
      H: "Technician"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Kricketot",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25.5,
    baseStats: {
      hp: 77,
      atk: 85,
      def: 51,
      spa: 55,
      spd: 51,
      spe: 65
    }
  },
  shinx: {
    name: "Shinx",
    num: 403,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Luxio"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 34,
      spa: 40,
      spd: 34,
      spe: 45
    }
  },
  luxio: {
    name: "Luxio",
    num: 404,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Luxray"
    ],
    prevo: "Shinx",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30.5,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 49,
      spa: 60,
      spd: 49,
      spe: 60
    }
  },
  luxray: {
    name: "Luxray",
    num: 405,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Luxio",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 79,
      spa: 95,
      spd: 79,
      spe: 70
    }
  },
  budew: {
    name: "Budew",
    num: 406,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Roselia"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.2,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 35,
      spa: 50,
      spd: 70,
      spe: 55
    }
  },
  roserade: {
    name: "Roserade",
    num: 407,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Technician"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Roselia",
    evoItem: "Shiny Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 60,
      atk: 70,
      def: 65,
      spa: 125,
      spd: 105,
      spe: 90
    }
  },
  cranidos: {
    name: "Cranidos",
    num: 408,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Mold Breaker",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Rampardos"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 31.5,
    baseStats: {
      hp: 67,
      atk: 125,
      def: 40,
      spa: 30,
      spd: 30,
      spe: 58
    }
  },
  rampardos: {
    name: "Rampardos",
    num: 409,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Mold Breaker",
      H: "Sheer Force"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cranidos",
    evoLevel: 30,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 102.5,
    baseStats: {
      hp: 97,
      atk: 165,
      def: 60,
      spa: 65,
      spd: 50,
      spe: 58
    }
  },
  shieldon: {
    name: "Shieldon",
    num: 410,
    types: [
      "Rock",
      "Steel"
    ],
    abilities: {
      "0": "Sturdy",
      H: "Soundproof"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Bastiodon"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 57,
    baseStats: {
      hp: 30,
      atk: 42,
      def: 118,
      spa: 42,
      spd: 88,
      spe: 30
    }
  },
  bastiodon: {
    name: "Bastiodon",
    num: 411,
    types: [
      "Rock",
      "Steel"
    ],
    abilities: {
      "0": "Sturdy",
      H: "Soundproof"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Shieldon",
    evoLevel: 30,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 149.5,
    baseStats: {
      hp: 60,
      atk: 52,
      def: 168,
      spa: 47,
      spd: 138,
      spe: 30
    }
  },
  burmy: {
    name: "Burmy",
    num: 412,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash",
      "Mothim"
    ],
    cosmeticFormes: [
      "Sandy",
      "Trash"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.4,
    baseStats: {
      hp: 40,
      atk: 29,
      def: 45,
      spa: 29,
      spd: 45,
      spe: 36
    }
  },
  wormadam: {
    name: "Wormadam",
    num: 413,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: 20,
    formes: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6.5,
    baseStats: {
      hp: 60,
      atk: 59,
      def: 85,
      spa: 79,
      spd: 105,
      spe: 36
    }
  },
  wormadamsandy: {
    name: "Wormadam-Sandy",
    num: 413,
    types: [
      "Bug",
      "Ground"
    ],
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: 20,
    baseSpecies: "Wormadam",
    forme: "Sandy",
    formes: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6.5,
    baseStats: {
      hp: 60,
      atk: 79,
      def: 105,
      spa: 59,
      spd: 85,
      spe: 36
    }
  },
  wormadamtrash: {
    name: "Wormadam-Trash",
    num: 413,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: 20,
    baseSpecies: "Wormadam",
    forme: "Trash",
    formes: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6.5,
    baseStats: {
      hp: 60,
      atk: 69,
      def: 95,
      spa: 69,
      spd: 95,
      spe: 36
    }
  },
  mothim: {
    name: "Mothim",
    num: 414,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Swarm",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: 20,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 23.3,
    baseStats: {
      hp: 70,
      atk: 94,
      def: 50,
      spa: 94,
      spd: 50,
      spe: 66
    }
  },
  combee: {
    name: "Combee",
    num: 415,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Honey Gather",
      H: "Hustle"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Vespiquen"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 5.5,
    baseStats: {
      hp: 30,
      atk: 30,
      def: 42,
      spa: 30,
      spd: 42,
      spe: 70
    }
  },
  vespiquen: {
    name: "Vespiquen",
    num: 416,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Pressure",
      H: "Unnerve"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Combee",
    evoLevel: 21,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 38.5,
    baseStats: {
      hp: 70,
      atk: 80,
      def: 102,
      spa: 80,
      spd: 102,
      spe: 40
    }
  },
  pachirisu: {
    name: "Pachirisu",
    num: 417,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Pickup",
      H: "Volt Absorb"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.9,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 70,
      spa: 45,
      spd: 90,
      spe: 95
    }
  },
  buizel: {
    name: "Buizel",
    num: 418,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Floatzel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.5,
    baseStats: {
      hp: 55,
      atk: 65,
      def: 35,
      spa: 60,
      spd: 30,
      spe: 85
    }
  },
  floatzel: {
    name: "Floatzel",
    num: 419,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Buizel",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.5,
    baseStats: {
      hp: 85,
      atk: 105,
      def: 55,
      spa: 85,
      spd: 50,
      spe: 115
    }
  },
  cherubi: {
    name: "Cherubi",
    num: 420,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Cherrim"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.3,
    baseStats: {
      hp: 45,
      atk: 35,
      def: 45,
      spa: 62,
      spd: 53,
      spe: 35
    }
  },
  cherrim: {
    name: "Cherrim",
    num: 421,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Flower Gift"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Cherubi",
    evoLevel: 25,
    formes: [
      "Cherrim",
      "Cherrim-Sunshine"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.3,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 70,
      spa: 87,
      spd: 78,
      spe: 85
    }
  },
  cherrimsunshine: {
    name: "Cherrim-Sunshine",
    num: 421,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Flower Gift"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    baseSpecies: "Cherrim",
    forme: "Sunshine",
    formes: [
      "Cherrim",
      "Cherrim-Sunshine"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.3,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 70,
      spa: 87,
      spd: 78,
      spe: 85
    }
  },
  shellos: {
    name: "Shellos",
    num: 422,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      H: "Sand Force"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    evos: [
      "Gastrodon"
    ],
    cosmeticFormes: [
      "East"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.3,
    baseStats: {
      hp: 76,
      atk: 48,
      def: 48,
      spa: 57,
      spd: 62,
      spe: 34
    }
  },
  gastrodon: {
    name: "Gastrodon",
    num: 423,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      H: "Sand Force"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    prevo: "Shellos",
    evoLevel: 30,
    cosmeticFormes: [
      "East"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.9,
    baseStats: {
      hp: 111,
      atk: 83,
      def: 68,
      spa: 92,
      spd: 82,
      spe: 39
    }
  },
  ambipom: {
    name: "Ambipom",
    num: 424,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Technician",
      "1": "Pickup",
      H: "Skill Link"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Aipom",
    evoType: "levelMove",
    evoMove: "Double Hit",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.3,
    baseStats: {
      hp: 75,
      atk: 100,
      def: 66,
      spa: 60,
      spd: 66,
      spe: 115
    }
  },
  drifloon: {
    name: "Drifloon",
    num: 425,
    types: [
      "Ghost",
      "Flying"
    ],
    abilities: {
      "0": "Aftermath",
      "1": "Unburden",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Drifblim"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.2,
    baseStats: {
      hp: 90,
      atk: 50,
      def: 34,
      spa: 60,
      spd: 44,
      spe: 70
    }
  },
  drifblim: {
    name: "Drifblim",
    num: 426,
    types: [
      "Ghost",
      "Flying"
    ],
    abilities: {
      "0": "Aftermath",
      "1": "Unburden",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Drifloon",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 150,
      atk: 80,
      def: 44,
      spa: 90,
      spd: 54,
      spe: 80
    }
  },
  buneary: {
    name: "Buneary",
    num: 427,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Klutz",
      H: "Limber"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Lopunny"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.5,
    baseStats: {
      hp: 55,
      atk: 66,
      def: 44,
      spa: 44,
      spd: 56,
      spe: 85
    }
  },
  lopunny: {
    name: "Lopunny",
    num: 428,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Klutz",
      H: "Limber"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Buneary",
    evoType: "levelFriendship",
    formes: [
      "Lopunny",
      "Lopunny-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.3,
    baseStats: {
      hp: 65,
      atk: 76,
      def: 84,
      spa: 54,
      spd: 96,
      spe: 105
    }
  },
  lopunnymega: {
    name: "Lopunny-Mega",
    num: 428,
    types: [
      "Normal",
      "Fighting"
    ],
    abilities: {
      "0": "Scrappy"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    baseSpecies: "Lopunny",
    forme: "Mega",
    formes: [
      "Lopunny",
      "Lopunny-Mega"
    ],
    requiredItem: "Lopunnite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.3,
    baseStats: {
      hp: 65,
      atk: 136,
      def: 94,
      spa: 54,
      spd: 96,
      spe: 135
    }
  },
  mismagius: {
    name: "Mismagius",
    num: 429,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Misdreavus",
    evoItem: "Dusk Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.4,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 105,
      spd: 105,
      spe: 105
    }
  },
  honchkrow: {
    name: "Honchkrow",
    num: 430,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Insomnia",
      "1": "Super Luck",
      H: "Moxie"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Murkrow",
    evoItem: "Dusk Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27.3,
    baseStats: {
      hp: 100,
      atk: 125,
      def: 52,
      spa: 105,
      spd: 52,
      spe: 71
    }
  },
  glameow: {
    name: "Glameow",
    num: 431,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Limber",
      "1": "Own Tempo",
      H: "Keen Eye"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Purugly"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3.9,
    baseStats: {
      hp: 49,
      atk: 55,
      def: 42,
      spa: 42,
      spd: 37,
      spe: 85
    }
  },
  purugly: {
    name: "Purugly",
    num: 432,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Glameow",
    evoLevel: 38,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 43.8,
    baseStats: {
      hp: 71,
      atk: 82,
      def: 64,
      spa: 64,
      spd: 59,
      spe: 112
    }
  },
  chingling: {
    name: "Chingling",
    num: 433,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Chimecho"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.6,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 50,
      spa: 65,
      spd: 50,
      spe: 45
    }
  },
  stunky: {
    name: "Stunky",
    num: 434,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Stench",
      "1": "Aftermath",
      H: "Keen Eye"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Skuntank"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.2,
    baseStats: {
      hp: 63,
      atk: 63,
      def: 47,
      spa: 41,
      spd: 41,
      spe: 74
    }
  },
  skuntank: {
    name: "Skuntank",
    num: 435,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Stench",
      "1": "Aftermath",
      H: "Keen Eye"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Stunky",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 103,
      atk: 93,
      def: 67,
      spa: 71,
      spd: 61,
      spe: 84
    }
  },
  bronzor: {
    name: "Bronzor",
    num: 436,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Heatproof",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Bronzong"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60.5,
    baseStats: {
      hp: 57,
      atk: 24,
      def: 86,
      spa: 24,
      spd: 86,
      spe: 23
    }
  },
  bronzong: {
    name: "Bronzong",
    num: 437,
    types: [
      "Steel",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Heatproof",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Bronzor",
    evoLevel: 33,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 187,
    baseStats: {
      hp: 67,
      atk: 89,
      def: 116,
      spa: 79,
      spd: 116,
      spe: 33
    }
  },
  bonsly: {
    name: "Bonsly",
    num: 438,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Rattled"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Sudowoodo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 50,
      atk: 80,
      def: 95,
      spa: 10,
      spd: 45,
      spe: 10
    }
  },
  mimejr: {
    name: "Mime Jr.",
    num: 439,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Soundproof",
      "1": "Filter",
      H: "Technician"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 20,
      atk: 25,
      def: 45,
      spa: 70,
      spd: 90,
      spe: 60
    }
  },
  happiny: {
    name: "Happiny",
    num: 440,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Friend Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Chansey"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 24.4,
    baseStats: {
      hp: 100,
      atk: 5,
      def: 5,
      spa: 15,
      spd: 65,
      spe: 30
    }
  },
  chatot: {
    name: "Chatot",
    num: 441,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.9,
    baseStats: {
      hp: 76,
      atk: 65,
      def: 45,
      spa: 92,
      spd: 42,
      spe: 91
    }
  },
  spiritomb: {
    name: "Spiritomb",
    num: 442,
    types: [
      "Ghost",
      "Dark"
    ],
    abilities: {
      "0": "Pressure",
      H: "Infiltrator"
    },
    eggGroups: [
      "Amorphous"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 108,
    baseStats: {
      hp: 50,
      atk: 92,
      def: 108,
      spa: 92,
      spd: 108,
      spe: 35
    }
  },
  gible: {
    name: "Gible",
    num: 443,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Gabite"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.5,
    baseStats: {
      hp: 58,
      atk: 70,
      def: 45,
      spa: 40,
      spd: 45,
      spe: 42
    }
  },
  gabite: {
    name: "Gabite",
    num: 444,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Garchomp"
    ],
    prevo: "Gible",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56,
    baseStats: {
      hp: 68,
      atk: 90,
      def: 65,
      spa: 50,
      spd: 55,
      spe: 82
    }
  },
  garchomp: {
    name: "Garchomp",
    num: 445,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Gabite",
    evoLevel: 48,
    formes: [
      "Garchomp",
      "Garchomp-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 95,
    baseStats: {
      hp: 108,
      atk: 130,
      def: 95,
      spa: 80,
      spd: 85,
      spe: 102
    }
  },
  garchompmega: {
    name: "Garchomp-Mega",
    num: 445,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Sand Force"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Garchomp",
    forme: "Mega",
    formes: [
      "Garchomp",
      "Garchomp-Mega"
    ],
    requiredItem: "Garchompite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 95,
    baseStats: {
      hp: 108,
      atk: 170,
      def: 115,
      spa: 120,
      spd: 95,
      spe: 92
    }
  },
  munchlax: {
    name: "Munchlax",
    num: 446,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Snorlax"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 105,
    baseStats: {
      hp: 135,
      atk: 85,
      def: 40,
      spa: 40,
      spd: 85,
      spe: 5
    }
  },
  riolu: {
    name: "Riolu",
    num: 447,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Steadfast",
      "1": "Inner Focus",
      H: "Prankster"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Lucario"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 20.2,
    baseStats: {
      hp: 40,
      atk: 70,
      def: 40,
      spa: 35,
      spd: 40,
      spe: 60
    }
  },
  lucario: {
    name: "Lucario",
    num: 448,
    types: [
      "Fighting",
      "Steel"
    ],
    abilities: {
      "0": "Steadfast",
      "1": "Inner Focus",
      H: "Justified"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Riolu",
    evoType: "levelFriendship",
    evoCondition: "during the day",
    formes: [
      "Lucario",
      "Lucario-Mega"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 54,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 70,
      spa: 115,
      spd: 70,
      spe: 90
    }
  },
  lucariomega: {
    name: "Lucario-Mega",
    num: 448,
    types: [
      "Fighting",
      "Steel"
    ],
    abilities: {
      "0": "Adaptability"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    baseSpecies: "Lucario",
    forme: "Mega",
    formes: [
      "Lucario",
      "Lucario-Mega"
    ],
    requiredItem: "Lucarionite",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 57.5,
    baseStats: {
      hp: 70,
      atk: 145,
      def: 88,
      spa: 140,
      spd: 70,
      spe: 112
    }
  },
  hippopotas: {
    name: "Hippopotas",
    num: 449,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Stream",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Hippowdon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 49.5,
    baseStats: {
      hp: 68,
      atk: 72,
      def: 78,
      spa: 38,
      spd: 42,
      spe: 32
    }
  },
  hippowdon: {
    name: "Hippowdon",
    num: 450,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Stream",
      H: "Sand Force"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Hippopotas",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 300,
    baseStats: {
      hp: 108,
      atk: 112,
      def: 118,
      spa: 68,
      spd: 72,
      spe: 47
    }
  },
  skorupi: {
    name: "Skorupi",
    num: 451,
    types: [
      "Poison",
      "Bug"
    ],
    abilities: {
      "0": "Battle Armor",
      "1": "Sniper",
      H: "Keen Eye"
    },
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    evos: [
      "Drapion"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 40,
      atk: 50,
      def: 90,
      spa: 30,
      spd: 55,
      spe: 65
    }
  },
  drapion: {
    name: "Drapion",
    num: 452,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Battle Armor",
      "1": "Sniper",
      H: "Keen Eye"
    },
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    prevo: "Skorupi",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61.5,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 110,
      spa: 60,
      spd: 75,
      spe: 95
    }
  },
  croagunk: {
    name: "Croagunk",
    num: 453,
    types: [
      "Poison",
      "Fighting"
    ],
    abilities: {
      "0": "Anticipation",
      "1": "Dry Skin",
      H: "Poison Touch"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Toxicroak"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23,
    baseStats: {
      hp: 48,
      atk: 61,
      def: 40,
      spa: 61,
      spd: 40,
      spe: 50
    }
  },
  toxicroak: {
    name: "Toxicroak",
    num: 454,
    types: [
      "Poison",
      "Fighting"
    ],
    abilities: {
      "0": "Anticipation",
      "1": "Dry Skin",
      H: "Poison Touch"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Croagunk",
    evoLevel: 37,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 44.4,
    baseStats: {
      hp: 83,
      atk: 106,
      def: 65,
      spa: 86,
      spd: 65,
      spe: 85
    }
  },
  carnivine: {
    name: "Carnivine",
    num: 455,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 74,
      atk: 100,
      def: 72,
      spa: 90,
      spd: 72,
      spe: 46
    }
  },
  finneon: {
    name: "Finneon",
    num: 456,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Storm Drain",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Lumineon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7,
    baseStats: {
      hp: 49,
      atk: 49,
      def: 56,
      spa: 49,
      spd: 61,
      spe: 66
    }
  },
  lumineon: {
    name: "Lumineon",
    num: 457,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Storm Drain",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Finneon",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24,
    baseStats: {
      hp: 69,
      atk: 69,
      def: 76,
      spa: 69,
      spd: 86,
      spe: 91
    }
  },
  mantyke: {
    name: "Mantyke",
    num: 458,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Water Absorb",
      H: "Water Veil"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Mantine"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 65,
    baseStats: {
      hp: 45,
      atk: 20,
      def: 50,
      spa: 60,
      spd: 120,
      spe: 50
    }
  },
  snover: {
    name: "Snover",
    num: 459,
    types: [
      "Grass",
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning",
      H: "Soundproof"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Abomasnow"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50.5,
    baseStats: {
      hp: 60,
      atk: 62,
      def: 50,
      spa: 62,
      spd: 60,
      spe: 40
    }
  },
  abomasnow: {
    name: "Abomasnow",
    num: 460,
    types: [
      "Grass",
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning",
      H: "Soundproof"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Snover",
    evoLevel: 40,
    formes: [
      "Abomasnow",
      "Abomasnow-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 135.5,
    baseStats: {
      hp: 90,
      atk: 92,
      def: 75,
      spa: 92,
      spd: 85,
      spe: 60
    }
  },
  abomasnowmega: {
    name: "Abomasnow-Mega",
    num: 460,
    types: [
      "Grass",
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    baseSpecies: "Abomasnow",
    forme: "Mega",
    formes: [
      "Abomasnow",
      "Abomasnow-Mega"
    ],
    requiredItem: "Abomasite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 185,
    baseStats: {
      hp: 90,
      atk: 132,
      def: 105,
      spa: 132,
      spd: 105,
      spe: 30
    }
  },
  weavile: {
    name: "Weavile",
    num: 461,
    types: [
      "Dark",
      "Ice"
    ],
    abilities: {
      "0": "Pressure",
      H: "Pickpocket"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sneasel",
    evoItem: "Razor Claw",
    evoType: "levelHold",
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 65,
      spa: 45,
      spd: 85,
      spe: 125
    }
  },
  magnezone: {
    name: "Magnezone",
    num: 462,
    types: [
      "Electric",
      "Steel"
    ],
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Magneton",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 180,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 115,
      spa: 130,
      spd: 90,
      spe: 60
    }
  },
  lickilicky: {
    name: "Lickilicky",
    num: 463,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Oblivious",
      H: "Cloud Nine"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Lickitung",
    evoType: "levelMove",
    evoMove: "Rollout",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 140,
    baseStats: {
      hp: 110,
      atk: 85,
      def: 95,
      spa: 80,
      spd: 95,
      spe: 50
    }
  },
  rhyperior: {
    name: "Rhyperior",
    num: 464,
    types: [
      "Ground",
      "Rock"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Solid Rock",
      H: "Reckless"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Rhydon",
    evoItem: "Protector",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 282.8,
    baseStats: {
      hp: 115,
      atk: 140,
      def: 130,
      spa: 55,
      spd: 55,
      spe: 40
    }
  },
  tangrowth: {
    name: "Tangrowth",
    num: 465,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Regenerator"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Tangela",
    evoType: "levelMove",
    evoMove: "Ancient Power",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 128.6,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 125,
      spa: 110,
      spd: 50,
      spe: 50
    }
  },
  electivire: {
    name: "Electivire",
    num: 466,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Motor Drive",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Electabuzz",
    evoItem: "Electirizer",
    evoType: "trade",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 138.6,
    baseStats: {
      hp: 75,
      atk: 123,
      def: 67,
      spa: 95,
      spd: 85,
      spe: 95
    }
  },
  magmortar: {
    name: "Magmortar",
    num: 467,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Magmar",
    evoItem: "Magmarizer",
    evoType: "trade",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 68,
    baseStats: {
      hp: 75,
      atk: 95,
      def: 67,
      spa: 125,
      spd: 95,
      spe: 83
    }
  },
  togekiss: {
    name: "Togekiss",
    num: 468,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    prevo: "Togetic",
    evoItem: "Shiny Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 38,
    baseStats: {
      hp: 85,
      atk: 50,
      def: 95,
      spa: 120,
      spd: 115,
      spe: 80
    }
  },
  yanmega: {
    name: "Yanmega",
    num: 469,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Tinted Lens",
      H: "Frisk"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Yanma",
    evoType: "levelMove",
    evoMove: "Ancient Power",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 51.5,
    baseStats: {
      hp: 86,
      atk: 76,
      def: 86,
      spa: 116,
      spd: 56,
      spe: 95
    }
  },
  leafeon: {
    name: "Leafeon",
    num: 470,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25.5,
    baseStats: {
      hp: 65,
      atk: 110,
      def: 130,
      spa: 60,
      spd: 65,
      spe: 95
    }
  },
  glaceon: {
    name: "Glaceon",
    num: 471,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Ice Body"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Ice Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25.9,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 110,
      spa: 130,
      spd: 95,
      spe: 65
    }
  },
  gliscor: {
    name: "Gliscor",
    num: 472,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Sand Veil",
      H: "Poison Heal"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Gligar",
    evoItem: "Razor Fang",
    evoType: "levelHold",
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42.5,
    baseStats: {
      hp: 75,
      atk: 95,
      def: 125,
      spa: 45,
      spd: 75,
      spe: 95
    }
  },
  mamoswine: {
    name: "Mamoswine",
    num: 473,
    types: [
      "Ice",
      "Ground"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Piloswine",
    evoType: "levelMove",
    evoMove: "Ancient Power",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 291,
    baseStats: {
      hp: 110,
      atk: 130,
      def: 80,
      spa: 70,
      spd: 60,
      spe: 80
    }
  },
  porygonz: {
    name: "Porygon-Z",
    num: 474,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Download",
      H: "Analytic"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Porygon2",
    evoItem: "Dubious Disc",
    evoType: "trade",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 34,
    baseStats: {
      hp: 85,
      atk: 80,
      def: 70,
      spa: 135,
      spd: 75,
      spe: 90
    }
  },
  gallade: {
    name: "Gallade",
    num: 475,
    types: [
      "Psychic",
      "Fighting"
    ],
    abilities: {
      "0": "Steadfast",
      "1": "Sharpness",
      H: "Justified"
    },
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    prevo: "Kirlia",
    evoItem: "Dawn Stone",
    evoType: "useItem",
    formes: [
      "Gallade",
      "Gallade-Mega"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 52,
    baseStats: {
      hp: 68,
      atk: 125,
      def: 65,
      spa: 65,
      spd: 115,
      spe: 80
    }
  },
  gallademega: {
    name: "Gallade-Mega",
    num: 475,
    types: [
      "Psychic",
      "Fighting"
    ],
    abilities: {
      "0": "Inner Focus"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Gallade",
    forme: "Mega",
    formes: [
      "Gallade",
      "Gallade-Mega"
    ],
    requiredItem: "Galladite",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 56.4,
    baseStats: {
      hp: 68,
      atk: 165,
      def: 95,
      spa: 65,
      spd: 115,
      spe: 110
    }
  },
  probopass: {
    name: "Probopass",
    num: 476,
    types: [
      "Rock",
      "Steel"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Magnet Pull",
      H: "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Nosepass",
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 340,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 145,
      spa: 75,
      spd: 150,
      spe: 40
    }
  },
  dusknoir: {
    name: "Dusknoir",
    num: 477,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Pressure",
      H: "Frisk"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Dusclops",
    evoItem: "Reaper Cloth",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 106.6,
    baseStats: {
      hp: 45,
      atk: 100,
      def: 135,
      spa: 65,
      spd: 135,
      spe: 45
    }
  },
  froslass: {
    name: "Froslass",
    num: 478,
    types: [
      "Ice",
      "Ghost"
    ],
    abilities: {
      "0": "Snow Cloak",
      H: "Cursed Body"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    prevo: "Snorunt",
    evoItem: "Dawn Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 26.6,
    baseStats: {
      hp: 70,
      atk: 80,
      def: 70,
      spa: 80,
      spd: 70,
      spe: 110
    }
  },
  rotom: {
    name: "Rotom",
    num: 479,
    types: [
      "Electric",
      "Ghost"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 77,
      spa: 95,
      spd: 77,
      spe: 91
    }
  },
  rotomfan: {
    name: "Rotom-Fan",
    num: 479,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Rotom",
    forme: "Fan",
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    }
  },
  rotomfrost: {
    name: "Rotom-Frost",
    num: 479,
    types: [
      "Electric",
      "Ice"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Rotom",
    forme: "Frost",
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    }
  },
  rotomheat: {
    name: "Rotom-Heat",
    num: 479,
    types: [
      "Electric",
      "Fire"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Rotom",
    forme: "Heat",
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    }
  },
  rotommow: {
    name: "Rotom-Mow",
    num: 479,
    types: [
      "Electric",
      "Grass"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Rotom",
    forme: "Mow",
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    }
  },
  rotomwash: {
    name: "Rotom-Wash",
    num: 479,
    types: [
      "Electric",
      "Water"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Rotom",
    forme: "Wash",
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    }
  },
  uxie: {
    name: "Uxie",
    num: 480,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 130,
      spa: 75,
      spd: 130,
      spe: 95
    }
  },
  mesprit: {
    name: "Mesprit",
    num: 481,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 80,
      atk: 105,
      def: 105,
      spa: 105,
      spd: 105,
      spe: 80
    }
  },
  azelf: {
    name: "Azelf",
    num: 482,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 70,
      spa: 125,
      spd: 70,
      spe: 115
    }
  },
  dialga: {
    name: "Dialga",
    num: 483,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Dialga",
      "Dialga-Origin"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 683,
    baseStats: {
      hp: 100,
      atk: 120,
      def: 120,
      spa: 150,
      spd: 100,
      spe: 90
    }
  },
  dialgaorigin: {
    name: "Dialga-Origin",
    num: 483,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Dialga",
    forme: "Origin",
    formes: [
      "Dialga",
      "Dialga-Origin"
    ],
    requiredItem: "Adamant Crystal",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 850,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 120,
      spa: 150,
      spd: 120,
      spe: 90
    }
  },
  palkia: {
    name: "Palkia",
    num: 484,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Palkia",
      "Palkia-Origin"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 336,
    baseStats: {
      hp: 90,
      atk: 120,
      def: 100,
      spa: 150,
      spd: 120,
      spe: 100
    }
  },
  palkiaorigin: {
    name: "Palkia-Origin",
    num: 484,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Palkia",
    forme: "Origin",
    formes: [
      "Palkia",
      "Palkia-Origin"
    ],
    requiredItem: "Lustrous Globe",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 660,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 100,
      spa: 150,
      spd: 120,
      spe: 120
    }
  },
  heatran: {
    name: "Heatran",
    num: 485,
    types: [
      "Fire",
      "Steel"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Flame Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 430,
    baseStats: {
      hp: 91,
      atk: 90,
      def: 106,
      spa: 130,
      spd: 106,
      spe: 77
    }
  },
  regigigas: {
    name: "Regigigas",
    num: 486,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Slow Start"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 420,
    baseStats: {
      hp: 110,
      atk: 160,
      def: 110,
      spa: 80,
      spd: 110,
      spe: 100
    }
  },
  giratina: {
    name: "Giratina",
    num: 487,
    types: [
      "Ghost",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Giratina",
      "Giratina-Origin"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 750,
    baseStats: {
      hp: 150,
      atk: 100,
      def: 120,
      spa: 100,
      spd: 120,
      spe: 90
    }
  },
  giratinaorigin: {
    name: "Giratina-Origin",
    num: 487,
    types: [
      "Ghost",
      "Dragon"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Giratina",
    forme: "Origin",
    formes: [
      "Giratina",
      "Giratina-Origin"
    ],
    requiredItem: "Griseous Core",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 650,
    baseStats: {
      hp: 150,
      atk: 120,
      def: 100,
      spa: 120,
      spd: 100,
      spe: 90
    }
  },
  cresselia: {
    name: "Cresselia",
    num: 488,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 85.6,
    baseStats: {
      hp: 120,
      atk: 70,
      def: 110,
      spa: 75,
      spd: 120,
      spe: 85
    }
  },
  phione: {
    name: "Phione",
    num: 489,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hydration"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 3.1,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 80
    }
  },
  manaphy: {
    name: "Manaphy",
    num: 490,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hydration"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.4,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  darkrai: {
    name: "Darkrai",
    num: 491,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Bad Dreams"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 50.5,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 90,
      spa: 135,
      spd: 90,
      spe: 125
    }
  },
  shaymin: {
    name: "Shaymin",
    num: 492,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Natural Cure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Shaymin",
      "Shaymin-Sky"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 2.1,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  shayminsky: {
    name: "Shaymin-Sky",
    num: 492,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Serene Grace"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Shaymin",
    forme: "Sky",
    formes: [
      "Shaymin",
      "Shaymin-Sky"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5.2,
    baseStats: {
      hp: 100,
      atk: 103,
      def: 75,
      spa: 120,
      spd: 75,
      spe: 127
    }
  },
  arceus: {
    name: "Arceus",
    num: 493,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusbug: {
    name: "Arceus-Bug",
    num: 493,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Bug",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusdark: {
    name: "Arceus-Dark",
    num: 493,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Dark",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusdragon: {
    name: "Arceus-Dragon",
    num: 493,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Dragon",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceuselectric: {
    name: "Arceus-Electric",
    num: 493,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Electric",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusfairy: {
    name: "Arceus-Fairy",
    num: 493,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Fairy",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusfighting: {
    name: "Arceus-Fighting",
    num: 493,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Fighting",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusfire: {
    name: "Arceus-Fire",
    num: 493,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Fire",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusflying: {
    name: "Arceus-Flying",
    num: 493,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Flying",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusghost: {
    name: "Arceus-Ghost",
    num: 493,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Ghost",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusgrass: {
    name: "Arceus-Grass",
    num: 493,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Grass",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusground: {
    name: "Arceus-Ground",
    num: 493,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Ground",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusice: {
    name: "Arceus-Ice",
    num: 493,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Ice",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceuspoison: {
    name: "Arceus-Poison",
    num: 493,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Poison",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceuspsychic: {
    name: "Arceus-Psychic",
    num: 493,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Psychic",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceusrock: {
    name: "Arceus-Rock",
    num: 493,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Rock",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceussteel: {
    name: "Arceus-Steel",
    num: 493,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Steel",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  arceuswater: {
    name: "Arceus-Water",
    num: 493,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Multitype"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Arceus",
    forme: "Water",
    formes: [
      "Arceus",
      "Arceus-Fighting",
      "Arceus-Flying",
      "Arceus-Poison",
      "Arceus-Ground",
      "Arceus-Rock",
      "Arceus-Bug",
      "Arceus-Ghost",
      "Arceus-Steel",
      "Arceus-Fire",
      "Arceus-Water",
      "Arceus-Grass",
      "Arceus-Electric",
      "Arceus-Psychic",
      "Arceus-Ice",
      "Arceus-Dragon",
      "Arceus-Dark",
      "Arceus-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spa: 120,
      spd: 120,
      spe: 120
    }
  },
  victini: {
    name: "Victini",
    num: 494,
    types: [
      "Psychic",
      "Fire"
    ],
    abilities: {
      "0": "Victory Star"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 4,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    }
  },
  snivy: {
    name: "Snivy",
    num: 495,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Servine"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 8.1,
    baseStats: {
      hp: 45,
      atk: 45,
      def: 55,
      spa: 45,
      spd: 55,
      spe: 63
    }
  },
  servine: {
    name: "Servine",
    num: 496,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Serperior"
    ],
    prevo: "Snivy",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 16,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 83
    }
  },
  serperior: {
    name: "Serperior",
    num: 497,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Servine",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 63,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 95,
      spa: 75,
      spd: 95,
      spe: 113
    }
  },
  tepig: {
    name: "Tepig",
    num: 498,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pignite"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9.9,
    baseStats: {
      hp: 65,
      atk: 63,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 45
    }
  },
  pignite: {
    name: "Pignite",
    num: 499,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Emboar"
    ],
    prevo: "Tepig",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 55.5,
    baseStats: {
      hp: 90,
      atk: 93,
      def: 55,
      spa: 70,
      spd: 55,
      spe: 55
    }
  },
  emboar: {
    name: "Emboar",
    num: 500,
    types: [
      "Fire",
      "Fighting"
    ],
    abilities: {
      "0": "Blaze",
      H: "Reckless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pignite",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 150,
    baseStats: {
      hp: 110,
      atk: 123,
      def: 65,
      spa: 100,
      spd: 65,
      spe: 65
    }
  },
  oshawott: {
    name: "Oshawott",
    num: 501,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dewott"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 5.9,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 45,
      spa: 63,
      spd: 45,
      spe: 45
    }
  },
  dewott: {
    name: "Dewott",
    num: 502,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Samurott",
      "Samurott-Hisui"
    ],
    prevo: "Oshawott",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 24.5,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 60,
      spa: 83,
      spd: 60,
      spe: 60
    }
  },
  samurott: {
    name: "Samurott",
    num: 503,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Dewott",
    evoLevel: 36,
    formes: [
      "Samurott",
      "Samurott-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 94.6,
    baseStats: {
      hp: 95,
      atk: 100,
      def: 85,
      spa: 108,
      spd: 70,
      spe: 70
    }
  },
  samurotthisui: {
    name: "Samurott-Hisui",
    num: 503,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sharpness"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Dewott",
    evoLevel: 36,
    baseSpecies: "Samurott",
    forme: "Hisui",
    formes: [
      "Samurott",
      "Samurott-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 58.2,
    baseStats: {
      hp: 90,
      atk: 108,
      def: 80,
      spa: 100,
      spd: 65,
      spe: 85
    }
  },
  patrat: {
    name: "Patrat",
    num: 504,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Analytic"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Watchog"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.6,
    baseStats: {
      hp: 45,
      atk: 55,
      def: 39,
      spa: 35,
      spd: 39,
      spe: 42
    }
  },
  watchog: {
    name: "Watchog",
    num: 505,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Keen Eye",
      H: "Analytic"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Patrat",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 69,
      spa: 60,
      spd: 69,
      spe: 77
    }
  },
  lillipup: {
    name: "Lillipup",
    num: 506,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Pickup",
      H: "Run Away"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Herdier"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.1,
    baseStats: {
      hp: 45,
      atk: 60,
      def: 45,
      spa: 25,
      spd: 45,
      spe: 55
    }
  },
  herdier: {
    name: "Herdier",
    num: 507,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Sand Rush",
      H: "Scrappy"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Stoutland"
    ],
    prevo: "Lillipup",
    evoLevel: 16,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.7,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 65,
      spa: 35,
      spd: 65,
      spe: 60
    }
  },
  stoutland: {
    name: "Stoutland",
    num: 508,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Sand Rush",
      H: "Scrappy"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Herdier",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61,
    baseStats: {
      hp: 85,
      atk: 110,
      def: 90,
      spa: 45,
      spd: 90,
      spe: 80
    }
  },
  purrloin: {
    name: "Purrloin",
    num: 509,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Liepard"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.1,
    baseStats: {
      hp: 41,
      atk: 50,
      def: 37,
      spa: 50,
      spd: 37,
      spe: 66
    }
  },
  liepard: {
    name: "Liepard",
    num: 510,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Purrloin",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37.5,
    baseStats: {
      hp: 64,
      atk: 88,
      def: 50,
      spa: 88,
      spd: 50,
      spe: 106
    }
  },
  pansage: {
    name: "Pansage",
    num: 511,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Overgrow"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Simisage"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 10.5,
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    }
  },
  simisage: {
    name: "Simisage",
    num: 512,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Overgrow"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pansage",
    evoItem: "Leaf Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 30.5,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    }
  },
  pansear: {
    name: "Pansear",
    num: 513,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Blaze"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Simisear"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 11,
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    }
  },
  simisear: {
    name: "Simisear",
    num: 514,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Blaze"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pansear",
    evoItem: "Fire Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    }
  },
  panpour: {
    name: "Panpour",
    num: 515,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Torrent"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Simipour"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 13.5,
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    }
  },
  simipour: {
    name: "Simipour",
    num: 516,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Gluttony",
      H: "Torrent"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Panpour",
    evoItem: "Water Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 29,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    }
  },
  munna: {
    name: "Munna",
    num: 517,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Forewarn",
      "1": "Synchronize",
      H: "Telepathy"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Musharna"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23.3,
    baseStats: {
      hp: 76,
      atk: 25,
      def: 45,
      spa: 67,
      spd: 55,
      spe: 24
    }
  },
  musharna: {
    name: "Musharna",
    num: 518,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Forewarn",
      "1": "Synchronize",
      H: "Telepathy"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Munna",
    evoItem: "Moon Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60.5,
    baseStats: {
      hp: 116,
      atk: 55,
      def: 85,
      spa: 107,
      spd: 95,
      spe: 29
    }
  },
  pidove: {
    name: "Pidove",
    num: 519,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Tranquill"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.1,
    baseStats: {
      hp: 50,
      atk: 55,
      def: 50,
      spa: 36,
      spd: 30,
      spe: 43
    }
  },
  tranquill: {
    name: "Tranquill",
    num: 520,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Unfezant"
    ],
    prevo: "Pidove",
    evoLevel: 21,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 62,
      atk: 77,
      def: 62,
      spa: 50,
      spd: 42,
      spe: 65
    }
  },
  unfezant: {
    name: "Unfezant",
    num: 521,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Tranquill",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29,
    baseStats: {
      hp: 80,
      atk: 115,
      def: 80,
      spa: 65,
      spd: 55,
      spe: 93
    }
  },
  blitzle: {
    name: "Blitzle",
    num: 522,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Motor Drive",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Zebstrika"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.8,
    baseStats: {
      hp: 45,
      atk: 60,
      def: 32,
      spa: 50,
      spd: 32,
      spe: 76
    }
  },
  zebstrika: {
    name: "Zebstrika",
    num: 523,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Motor Drive",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Blitzle",
    evoLevel: 27,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 75,
      atk: 100,
      def: 63,
      spa: 80,
      spd: 63,
      spe: 116
    }
  },
  roggenrola: {
    name: "Roggenrola",
    num: 524,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Weak Armor",
      H: "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Boldore"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 55,
      atk: 75,
      def: 85,
      spa: 25,
      spd: 25,
      spe: 15
    }
  },
  boldore: {
    name: "Boldore",
    num: 525,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Weak Armor",
      H: "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Gigalith"
    ],
    prevo: "Roggenrola",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 102,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 105,
      spa: 50,
      spd: 40,
      spe: 20
    }
  },
  gigalith: {
    name: "Gigalith",
    num: 526,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Sand Stream",
      H: "Sand Force"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Boldore",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 260,
    baseStats: {
      hp: 85,
      atk: 135,
      def: 130,
      spa: 60,
      spd: 80,
      spe: 25
    }
  },
  woobat: {
    name: "Woobat",
    num: 527,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Klutz",
      H: "Simple"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    evos: [
      "Swoobat"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.1,
    baseStats: {
      hp: 65,
      atk: 45,
      def: 43,
      spa: 55,
      spd: 43,
      spe: 72
    }
  },
  swoobat: {
    name: "Swoobat",
    num: 528,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Klutz",
      H: "Simple"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    prevo: "Woobat",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 67,
      atk: 57,
      def: 55,
      spa: 77,
      spd: 55,
      spe: 114
    }
  },
  drilbur: {
    name: "Drilbur",
    num: 529,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Rush",
      "1": "Sand Force",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Excadrill"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 40,
      spa: 30,
      spd: 45,
      spe: 68
    }
  },
  excadrill: {
    name: "Excadrill",
    num: 530,
    types: [
      "Ground",
      "Steel"
    ],
    abilities: {
      "0": "Sand Rush",
      "1": "Sand Force",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Drilbur",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.4,
    baseStats: {
      hp: 110,
      atk: 135,
      def: 60,
      spa: 50,
      spd: 65,
      spe: 88
    }
  },
  audino: {
    name: "Audino",
    num: 531,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Healer",
      "1": "Regenerator",
      H: "Klutz"
    },
    eggGroups: [
      "Fairy"
    ],
    formes: [
      "Audino",
      "Audino-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31,
    baseStats: {
      hp: 103,
      atk: 60,
      def: 86,
      spa: 60,
      spd: 86,
      spe: 50
    }
  },
  audinomega: {
    name: "Audino-Mega",
    num: 531,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Healer"
    },
    eggGroups: [
      "Fairy"
    ],
    baseSpecies: "Audino",
    forme: "Mega",
    formes: [
      "Audino",
      "Audino-Mega"
    ],
    requiredItem: "Audinite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 103,
      atk: 60,
      def: 126,
      spa: 80,
      spd: 126,
      spe: 50
    }
  },
  timburr: {
    name: "Timburr",
    num: 532,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Gurdurr"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 12.5,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 55,
      spa: 25,
      spd: 35,
      spe: 35
    }
  },
  gurdurr: {
    name: "Gurdurr",
    num: 533,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Conkeldurr"
    ],
    prevo: "Timburr",
    evoLevel: 25,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 40,
    baseStats: {
      hp: 85,
      atk: 105,
      def: 85,
      spa: 40,
      spd: 50,
      spe: 40
    }
  },
  conkeldurr: {
    name: "Conkeldurr",
    num: 534,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Gurdurr",
    evoType: "trade",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 87,
    baseStats: {
      hp: 105,
      atk: 140,
      def: 95,
      spa: 55,
      spd: 65,
      spe: 45
    }
  },
  tympole: {
    name: "Tympole",
    num: 535,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Hydration",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Palpitoad"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.5,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 40,
      spa: 50,
      spd: 40,
      spe: 64
    }
  },
  palpitoad: {
    name: "Palpitoad",
    num: 536,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Hydration",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Seismitoad"
    ],
    prevo: "Tympole",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 75,
      atk: 65,
      def: 55,
      spa: 65,
      spd: 55,
      spe: 69
    }
  },
  seismitoad: {
    name: "Seismitoad",
    num: 537,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Poison Touch",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Palpitoad",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 62,
    baseStats: {
      hp: 105,
      atk: 95,
      def: 75,
      spa: 85,
      spd: 75,
      spe: 74
    }
  },
  throh: {
    name: "Throh",
    num: 538,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Guts",
      "1": "Inner Focus",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Human-Like"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 55.5,
    baseStats: {
      hp: 120,
      atk: 100,
      def: 85,
      spa: 30,
      spd: 85,
      spe: 45
    }
  },
  sawk: {
    name: "Sawk",
    num: 539,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Inner Focus",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Human-Like"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 51,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 75,
      spa: 30,
      spd: 75,
      spe: 85
    }
  },
  sewaddle: {
    name: "Sewaddle",
    num: 540,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Swadloon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 45,
      atk: 53,
      def: 70,
      spa: 40,
      spd: 60,
      spe: 42
    }
  },
  swadloon: {
    name: "Swadloon",
    num: 541,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Leavanny"
    ],
    prevo: "Sewaddle",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.3,
    baseStats: {
      hp: 55,
      atk: 63,
      def: 90,
      spa: 50,
      spd: 80,
      spe: 42
    }
  },
  leavanny: {
    name: "Leavanny",
    num: 542,
    types: [
      "Bug",
      "Grass"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Swadloon",
    evoType: "levelFriendship",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.5,
    baseStats: {
      hp: 75,
      atk: 103,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 92
    }
  },
  venipede: {
    name: "Venipede",
    num: 543,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Whirlipede"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.3,
    baseStats: {
      hp: 30,
      atk: 45,
      def: 59,
      spa: 30,
      spd: 39,
      spe: 57
    }
  },
  whirlipede: {
    name: "Whirlipede",
    num: 544,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Scolipede"
    ],
    prevo: "Venipede",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58.5,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 99,
      spa: 40,
      spd: 79,
      spe: 47
    }
  },
  scolipede: {
    name: "Scolipede",
    num: 545,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Whirlipede",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 200.5,
    baseStats: {
      hp: 60,
      atk: 100,
      def: 89,
      spa: 55,
      spd: 69,
      spe: 112
    }
  },
  cottonee: {
    name: "Cottonee",
    num: 546,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Infiltrator",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Whimsicott"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.6,
    baseStats: {
      hp: 40,
      atk: 27,
      def: 60,
      spa: 37,
      spd: 50,
      spe: 66
    }
  },
  whimsicott: {
    name: "Whimsicott",
    num: 547,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Infiltrator",
      H: "Chlorophyll"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Cottonee",
    evoItem: "Sun Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.6,
    baseStats: {
      hp: 60,
      atk: 67,
      def: 85,
      spa: 77,
      spd: 75,
      spe: 116
    }
  },
  petilil: {
    name: "Petilil",
    num: 548,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Own Tempo",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Lilligant",
      "Lilligant-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6.6,
    baseStats: {
      hp: 45,
      atk: 35,
      def: 50,
      spa: 70,
      spd: 50,
      spe: 30
    }
  },
  lilligant: {
    name: "Lilligant",
    num: 549,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Own Tempo",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Petilil",
    evoItem: "Sun Stone",
    evoType: "useItem",
    formes: [
      "Lilligant",
      "Lilligant-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 16.3,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 75,
      spe: 90
    }
  },
  lilliganthisui: {
    name: "Lilligant-Hisui",
    num: 549,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Hustle",
      H: "Leaf Guard"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Petilil",
    evoItem: "Sun Stone",
    evoType: "useItem",
    baseSpecies: "Lilligant",
    forme: "Hisui",
    formes: [
      "Lilligant",
      "Lilligant-Hisui"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 19.2,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 75,
      spa: 50,
      spd: 75,
      spe: 105
    }
  },
  basculin: {
    name: "Basculin",
    num: 550,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Water 2"
    ],
    formes: [
      "Basculin",
      "Basculin-Blue-Striped",
      "Basculin-White-Striped"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 92,
      def: 65,
      spa: 80,
      spd: 55,
      spe: 98
    }
  },
  basculinbluestriped: {
    name: "Basculin-Blue-Striped",
    num: 550,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Rock Head",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Water 2"
    ],
    baseSpecies: "Basculin",
    forme: "Blue-Striped",
    formes: [
      "Basculin",
      "Basculin-Blue-Striped",
      "Basculin-White-Striped"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 92,
      def: 65,
      spa: 80,
      spd: 55,
      spe: 98
    }
  },
  basculinwhitestriped: {
    name: "Basculin-White-Striped",
    num: 550,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Rattled",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Basculegion",
      "Basculegion-F"
    ],
    baseSpecies: "Basculin",
    forme: "White-Striped",
    formes: [
      "Basculin",
      "Basculin-Blue-Striped",
      "Basculin-White-Striped"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 92,
      def: 65,
      spa: 80,
      spd: 55,
      spe: 98
    }
  },
  sandile: {
    name: "Sandile",
    num: 551,
    types: [
      "Ground",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Krokorok"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.2,
    baseStats: {
      hp: 50,
      atk: 72,
      def: 35,
      spa: 35,
      spd: 35,
      spe: 65
    }
  },
  krokorok: {
    name: "Krokorok",
    num: 552,
    types: [
      "Ground",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Krookodile"
    ],
    prevo: "Sandile",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.4,
    baseStats: {
      hp: 60,
      atk: 82,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 74
    }
  },
  krookodile: {
    name: "Krookodile",
    num: 553,
    types: [
      "Ground",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Krokorok",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 96.3,
    baseStats: {
      hp: 95,
      atk: 117,
      def: 80,
      spa: 65,
      spd: 70,
      spe: 92
    }
  },
  darumaka: {
    name: "Darumaka",
    num: 554,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Hustle",
      H: "Inner Focus"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Darmanitan"
    ],
    formes: [
      "Darumaka",
      "Darumaka-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37.5,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 45,
      spa: 15,
      spd: 45,
      spe: 50
    }
  },
  darumakagalar: {
    name: "Darumaka-Galar",
    num: 554,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Hustle",
      H: "Inner Focus"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Darmanitan-Galar"
    ],
    baseSpecies: "Darumaka",
    forme: "Galar",
    formes: [
      "Darumaka",
      "Darumaka-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 45,
      spa: 15,
      spd: 45,
      spe: 50
    }
  },
  darmanitan: {
    name: "Darmanitan",
    num: 555,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Sheer Force",
      H: "Zen Mode"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Darumaka",
    evoLevel: 35,
    formes: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.9,
    baseStats: {
      hp: 105,
      atk: 140,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 95
    }
  },
  darmanitangalar: {
    name: "Darmanitan-Galar",
    num: 555,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Gorilla Tactics",
      H: "Zen Mode"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Darumaka-Galar",
    evoItem: "Ice Stone",
    evoType: "useItem",
    baseSpecies: "Darmanitan",
    forme: "Galar",
    formes: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 105,
      atk: 140,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 95
    }
  },
  darmanitangalarzen: {
    name: "Darmanitan-Galar-Zen",
    num: 555,
    types: [
      "Ice",
      "Fire"
    ],
    abilities: {
      "0": "Zen Mode"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Darmanitan",
    forme: "Galar-Zen",
    formes: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 105,
      atk: 160,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 135
    }
  },
  darmanitanzen: {
    name: "Darmanitan-Zen",
    num: 555,
    types: [
      "Fire",
      "Psychic"
    ],
    abilities: {
      "0": "Zen Mode"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Darmanitan",
    forme: "Zen",
    formes: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.9,
    baseStats: {
      hp: 105,
      atk: 30,
      def: 105,
      spa: 140,
      spd: 105,
      spe: 55
    }
  },
  maractus: {
    name: "Maractus",
    num: 556,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Chlorophyll",
      H: "Storm Drain"
    },
    eggGroups: [
      "Grass"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 86,
      def: 67,
      spa: 106,
      spd: 67,
      spe: 60
    }
  },
  dwebble: {
    name: "Dwebble",
    num: 557,
    types: [
      "Bug",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Bug",
      "Mineral"
    ],
    evos: [
      "Crustle"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 85,
      spa: 35,
      spd: 35,
      spe: 55
    }
  },
  crustle: {
    name: "Crustle",
    num: 558,
    types: [
      "Bug",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    eggGroups: [
      "Bug",
      "Mineral"
    ],
    prevo: "Dwebble",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 200,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 125,
      spa: 65,
      spd: 75,
      spe: 45
    }
  },
  scraggy: {
    name: "Scraggy",
    num: 559,
    types: [
      "Dark",
      "Fighting"
    ],
    abilities: {
      "0": "Shed Skin",
      "1": "Moxie",
      H: "Intimidate"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    evos: [
      "Scrafty"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.8,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 70,
      spa: 35,
      spd: 70,
      spe: 48
    }
  },
  scrafty: {
    name: "Scrafty",
    num: 560,
    types: [
      "Dark",
      "Fighting"
    ],
    abilities: {
      "0": "Shed Skin",
      "1": "Moxie",
      H: "Intimidate"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    prevo: "Scraggy",
    evoLevel: 39,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 115,
      spa: 45,
      spd: 115,
      spe: 58
    }
  },
  sigilyph: {
    name: "Sigilyph",
    num: 561,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Wonder Skin",
      "1": "Magic Guard",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14,
    baseStats: {
      hp: 72,
      atk: 58,
      def: 80,
      spa: 103,
      spd: 80,
      spe: 97
    }
  },
  yamask: {
    name: "Yamask",
    num: 562,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Mummy"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    evos: [
      "Cofagrigus"
    ],
    formes: [
      "Yamask",
      "Yamask-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 38,
      atk: 30,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 30
    }
  },
  yamaskgalar: {
    name: "Yamask-Galar",
    num: 562,
    types: [
      "Ground",
      "Ghost"
    ],
    abilities: {
      "0": "Wandering Spirit"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    evos: [
      "Runerigus"
    ],
    baseSpecies: "Yamask",
    forme: "Galar",
    formes: [
      "Yamask",
      "Yamask-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 38,
      atk: 55,
      def: 85,
      spa: 30,
      spd: 65,
      spe: 30
    }
  },
  cofagrigus: {
    name: "Cofagrigus",
    num: 563,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Mummy"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    prevo: "Yamask",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 76.5,
    baseStats: {
      hp: 58,
      atk: 50,
      def: 145,
      spa: 95,
      spd: 105,
      spe: 30
    }
  },
  tirtouga: {
    name: "Tirtouga",
    num: 564,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Solid Rock",
      "1": "Sturdy",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Carracosta"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 16.5,
    baseStats: {
      hp: 54,
      atk: 78,
      def: 103,
      spa: 53,
      spd: 45,
      spe: 22
    }
  },
  carracosta: {
    name: "Carracosta",
    num: 565,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Solid Rock",
      "1": "Sturdy",
      H: "Swift Swim"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Tirtouga",
    evoLevel: 37,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 81,
    baseStats: {
      hp: 74,
      atk: 108,
      def: 133,
      spa: 83,
      spd: 65,
      spe: 32
    }
  },
  archen: {
    name: "Archen",
    num: 566,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Defeatist"
    },
    eggGroups: [
      "Flying",
      "Water 3"
    ],
    evos: [
      "Archeops"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9.5,
    baseStats: {
      hp: 55,
      atk: 112,
      def: 45,
      spa: 74,
      spd: 45,
      spe: 70
    }
  },
  archeops: {
    name: "Archeops",
    num: 567,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Defeatist"
    },
    eggGroups: [
      "Flying",
      "Water 3"
    ],
    prevo: "Archen",
    evoLevel: 37,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 32,
    baseStats: {
      hp: 75,
      atk: 140,
      def: 65,
      spa: 112,
      spd: 65,
      spe: 110
    }
  },
  trubbish: {
    name: "Trubbish",
    num: 568,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Garbodor"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 62,
      spa: 40,
      spd: 62,
      spe: 65
    }
  },
  garbodor: {
    name: "Garbodor",
    num: 569,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Stench",
      "1": "Weak Armor",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Trubbish",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 107.3,
    baseStats: {
      hp: 80,
      atk: 95,
      def: 82,
      spa: 60,
      spd: 82,
      spe: 75
    }
  },
  garbodorgmax: {
    name: "Garbodor-Gmax",
    num: 569,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Stench",
      "1": "Weak Armor",
      H: "Aftermath"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Garbodor",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 80,
      atk: 95,
      def: 82,
      spa: 60,
      spd: 82,
      spe: 75
    }
  },
  zorua: {
    name: "Zorua",
    num: 570,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Illusion"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Zoroark"
    ],
    formes: [
      "Zorua",
      "Zorua-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12.5,
    baseStats: {
      hp: 40,
      atk: 65,
      def: 40,
      spa: 80,
      spd: 40,
      spe: 65
    }
  },
  zoruahisui: {
    name: "Zorua-Hisui",
    num: 570,
    types: [
      "Normal",
      "Ghost"
    ],
    abilities: {
      "0": "Illusion"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Zoroark-Hisui"
    ],
    baseSpecies: "Zorua",
    forme: "Hisui",
    formes: [
      "Zorua",
      "Zorua-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12.5,
    baseStats: {
      hp: 35,
      atk: 60,
      def: 40,
      spa: 85,
      spd: 40,
      spe: 70
    }
  },
  zoroark: {
    name: "Zoroark",
    num: 571,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Illusion"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Zorua",
    evoLevel: 30,
    formes: [
      "Zoroark",
      "Zoroark-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 81.1,
    baseStats: {
      hp: 60,
      atk: 105,
      def: 60,
      spa: 120,
      spd: 60,
      spe: 105
    }
  },
  zoroarkhisui: {
    name: "Zoroark-Hisui",
    num: 571,
    types: [
      "Normal",
      "Ghost"
    ],
    abilities: {
      "0": "Illusion"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Zorua-Hisui",
    evoLevel: 30,
    baseSpecies: "Zoroark",
    forme: "Hisui",
    formes: [
      "Zoroark",
      "Zoroark-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 73,
    baseStats: {
      hp: 55,
      atk: 100,
      def: 60,
      spa: 125,
      spd: 60,
      spe: 110
    }
  },
  minccino: {
    name: "Minccino",
    num: 572,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Technician",
      H: "Skill Link"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Cinccino"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5.8,
    baseStats: {
      hp: 55,
      atk: 50,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 75
    }
  },
  cinccino: {
    name: "Cinccino",
    num: 573,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cute Charm",
      "1": "Technician",
      H: "Skill Link"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Minccino",
    evoItem: "Shiny Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 7.5,
    baseStats: {
      hp: 75,
      atk: 95,
      def: 60,
      spa: 65,
      spd: 60,
      spe: 115
    }
  },
  gothita: {
    name: "Gothita",
    num: 574,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Gothorita"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5.8,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 50,
      spa: 55,
      spd: 65,
      spe: 45
    }
  },
  gothorita: {
    name: "Gothorita",
    num: 575,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Gothitelle"
    ],
    prevo: "Gothita",
    evoLevel: 32,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 18,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 70,
      spa: 75,
      spd: 85,
      spe: 55
    }
  },
  gothitelle: {
    name: "Gothitelle",
    num: 576,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Gothorita",
    evoLevel: 41,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 44,
    baseStats: {
      hp: 70,
      atk: 55,
      def: 95,
      spa: 95,
      spd: 110,
      spe: 65
    }
  },
  solosis: {
    name: "Solosis",
    num: 577,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Duosion"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 40,
      spa: 105,
      spd: 50,
      spe: 20
    }
  },
  duosion: {
    name: "Duosion",
    num: 578,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Reuniclus"
    ],
    prevo: "Solosis",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 65,
      atk: 40,
      def: 50,
      spa: 125,
      spd: 60,
      spe: 30
    }
  },
  reuniclus: {
    name: "Reuniclus",
    num: 579,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Duosion",
    evoLevel: 41,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.1,
    baseStats: {
      hp: 110,
      atk: 65,
      def: 75,
      spa: 125,
      spd: 85,
      spe: 30
    }
  },
  ducklett: {
    name: "Ducklett",
    num: 580,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Big Pecks",
      H: "Hydration"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    evos: [
      "Swanna"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.5,
    baseStats: {
      hp: 62,
      atk: 44,
      def: 50,
      spa: 44,
      spd: 50,
      spe: 55
    }
  },
  swanna: {
    name: "Swanna",
    num: 581,
    types: [
      "Water",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Big Pecks",
      H: "Hydration"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    prevo: "Ducklett",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.2,
    baseStats: {
      hp: 75,
      atk: 87,
      def: 63,
      spa: 87,
      spd: 63,
      spe: 98
    }
  },
  vanillite: {
    name: "Vanillite",
    num: 582,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Ice Body",
      "1": "Snow Cloak",
      H: "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Vanillish"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.7,
    baseStats: {
      hp: 36,
      atk: 50,
      def: 50,
      spa: 65,
      spd: 60,
      spe: 44
    }
  },
  vanillish: {
    name: "Vanillish",
    num: 583,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Ice Body",
      "1": "Snow Cloak",
      H: "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Vanilluxe"
    ],
    prevo: "Vanillite",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 41,
    baseStats: {
      hp: 51,
      atk: 65,
      def: 65,
      spa: 80,
      spd: 75,
      spe: 59
    }
  },
  vanilluxe: {
    name: "Vanilluxe",
    num: 584,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Ice Body",
      "1": "Snow Warning",
      H: "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Vanillish",
    evoLevel: 47,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 57.5,
    baseStats: {
      hp: 71,
      atk: 95,
      def: 85,
      spa: 110,
      spd: 95,
      spe: 79
    }
  },
  deerling: {
    name: "Deerling",
    num: 585,
    types: [
      "Normal",
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Sap Sipper",
      H: "Serene Grace"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Sawsbuck"
    ],
    cosmeticFormes: [
      "Summer",
      "Autumn",
      "Winter"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.5,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    }
  },
  sawsbuck: {
    name: "Sawsbuck",
    num: 586,
    types: [
      "Normal",
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Sap Sipper",
      H: "Serene Grace"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Deerling",
    evoLevel: 34,
    cosmeticFormes: [
      "Summer",
      "Autumn",
      "Winter"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.5,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 95
    }
  },
  emolga: {
    name: "Emolga",
    num: 587,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Static",
      H: "Motor Drive"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 55,
      atk: 75,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 103
    }
  },
  karrablast: {
    name: "Karrablast",
    num: 588,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Shed Skin",
      H: "No Guard"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Escavalier"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.9,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 45,
      spa: 40,
      spd: 45,
      spe: 60
    }
  },
  escavalier: {
    name: "Escavalier",
    num: 589,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Shell Armor",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Karrablast",
    evoType: "trade",
    evoCondition: "with a Shelmet",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 70,
      atk: 135,
      def: 105,
      spa: 60,
      spd: 105,
      spe: 20
    }
  },
  foongus: {
    name: "Foongus",
    num: 590,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Effect Spore",
      H: "Regenerator"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Amoonguss"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 69,
      atk: 55,
      def: 45,
      spa: 55,
      spd: 55,
      spe: 15
    }
  },
  amoonguss: {
    name: "Amoonguss",
    num: 591,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Effect Spore",
      H: "Regenerator"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Foongus",
    evoLevel: 39,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 114,
      atk: 85,
      def: 70,
      spa: 85,
      spd: 80,
      spe: 30
    }
  },
  frillish: {
    name: "Frillish",
    num: 592,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Cursed Body",
      H: "Damp"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Jellicent"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 55,
      atk: 40,
      def: 50,
      spa: 65,
      spd: 85,
      spe: 40
    }
  },
  jellicent: {
    name: "Jellicent",
    num: 593,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Cursed Body",
      H: "Damp"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Frillish",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 135,
    baseStats: {
      hp: 100,
      atk: 60,
      def: 70,
      spa: 85,
      spd: 105,
      spe: 60
    }
  },
  alomomola: {
    name: "Alomomola",
    num: 594,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Healer",
      "1": "Hydration",
      H: "Regenerator"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.6,
    baseStats: {
      hp: 165,
      atk: 75,
      def: 80,
      spa: 40,
      spd: 45,
      spe: 65
    }
  },
  joltik: {
    name: "Joltik",
    num: 595,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Compound Eyes",
      "1": "Unnerve",
      H: "Swarm"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Galvantula"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.6,
    baseStats: {
      hp: 50,
      atk: 47,
      def: 50,
      spa: 57,
      spd: 50,
      spe: 65
    }
  },
  galvantula: {
    name: "Galvantula",
    num: 596,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Compound Eyes",
      "1": "Unnerve",
      H: "Swarm"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Joltik",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.3,
    baseStats: {
      hp: 70,
      atk: 77,
      def: 60,
      spa: 97,
      spd: 60,
      spe: 108
    }
  },
  ferroseed: {
    name: "Ferroseed",
    num: 597,
    types: [
      "Grass",
      "Steel"
    ],
    abilities: {
      "0": "Iron Barbs"
    },
    eggGroups: [
      "Grass",
      "Mineral"
    ],
    evos: [
      "Ferrothorn"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18.8,
    baseStats: {
      hp: 44,
      atk: 50,
      def: 91,
      spa: 24,
      spd: 86,
      spe: 10
    }
  },
  ferrothorn: {
    name: "Ferrothorn",
    num: 598,
    types: [
      "Grass",
      "Steel"
    ],
    abilities: {
      "0": "Iron Barbs",
      H: "Anticipation"
    },
    eggGroups: [
      "Grass",
      "Mineral"
    ],
    prevo: "Ferroseed",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110,
    baseStats: {
      hp: 74,
      atk: 94,
      def: 131,
      spa: 54,
      spd: 116,
      spe: 20
    }
  },
  klink: {
    name: "Klink",
    num: 599,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Klang"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 21,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 70,
      spa: 45,
      spd: 60,
      spe: 30
    }
  },
  klang: {
    name: "Klang",
    num: 600,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Klinklang"
    ],
    prevo: "Klink",
    evoLevel: 38,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 51,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 95,
      spa: 70,
      spd: 85,
      spe: 50
    }
  },
  klinklang: {
    name: "Klinklang",
    num: 601,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Klang",
    evoLevel: 49,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 81,
    baseStats: {
      hp: 60,
      atk: 100,
      def: 115,
      spa: 70,
      spd: 85,
      spe: 90
    }
  },
  tynamo: {
    name: "Tynamo",
    num: 602,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Eelektrik"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.3,
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 45,
      spd: 40,
      spe: 60
    }
  },
  eelektrik: {
    name: "Eelektrik",
    num: 603,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Eelektross"
    ],
    prevo: "Tynamo",
    evoLevel: 39,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22,
    baseStats: {
      hp: 65,
      atk: 85,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 40
    }
  },
  eelektross: {
    name: "Eelektross",
    num: 604,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Eelektrik",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80.5,
    baseStats: {
      hp: 85,
      atk: 115,
      def: 80,
      spa: 105,
      spd: 80,
      spe: 50
    }
  },
  elgyem: {
    name: "Elgyem",
    num: 605,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Telepathy",
      "1": "Synchronize",
      H: "Analytic"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Beheeyem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 55,
      spa: 85,
      spd: 55,
      spe: 30
    }
  },
  beheeyem: {
    name: "Beheeyem",
    num: 606,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Telepathy",
      "1": "Synchronize",
      H: "Analytic"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Elgyem",
    evoLevel: 42,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34.5,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 75,
      spa: 125,
      spd: 95,
      spe: 40
    }
  },
  litwick: {
    name: "Litwick",
    num: 607,
    types: [
      "Ghost",
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Lampent"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.1,
    baseStats: {
      hp: 50,
      atk: 30,
      def: 55,
      spa: 65,
      spd: 55,
      spe: 20
    }
  },
  lampent: {
    name: "Lampent",
    num: 608,
    types: [
      "Ghost",
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Chandelure"
    ],
    prevo: "Litwick",
    evoLevel: 41,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spa: 95,
      spd: 60,
      spe: 55
    }
  },
  chandelure: {
    name: "Chandelure",
    num: 609,
    types: [
      "Ghost",
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Lampent",
    evoItem: "Dusk Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34.3,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 90,
      spa: 145,
      spd: 90,
      spe: 80
    }
  },
  axew: {
    name: "Axew",
    num: 610,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Fraxure"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 46,
      atk: 87,
      def: 60,
      spa: 30,
      spd: 40,
      spe: 57
    }
  },
  fraxure: {
    name: "Fraxure",
    num: 611,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Haxorus"
    ],
    prevo: "Axew",
    evoLevel: 38,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36,
    baseStats: {
      hp: 66,
      atk: 117,
      def: 70,
      spa: 40,
      spd: 50,
      spe: 67
    }
  },
  haxorus: {
    name: "Haxorus",
    num: 612,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Fraxure",
    evoLevel: 48,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 105.5,
    baseStats: {
      hp: 76,
      atk: 147,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 97
    }
  },
  cubchoo: {
    name: "Cubchoo",
    num: 613,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Beartic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 55,
      atk: 70,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 40
    }
  },
  beartic: {
    name: "Beartic",
    num: 614,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      H: "Swift Swim"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Cubchoo",
    evoLevel: 37,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 260,
    baseStats: {
      hp: 95,
      atk: 130,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 50
    }
  },
  cryogonal: {
    name: "Cryogonal",
    num: 615,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 148,
    baseStats: {
      hp: 80,
      atk: 50,
      def: 50,
      spa: 95,
      spd: 135,
      spe: 105
    }
  },
  shelmet: {
    name: "Shelmet",
    num: 616,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Hydration",
      "1": "Shell Armor",
      H: "Overcoat"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Accelgor"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.7,
    baseStats: {
      hp: 50,
      atk: 40,
      def: 85,
      spa: 40,
      spd: 65,
      spe: 25
    }
  },
  accelgor: {
    name: "Accelgor",
    num: 617,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Hydration",
      "1": "Sticky Hold",
      H: "Unburden"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Shelmet",
    evoType: "trade",
    evoCondition: "with a Karrablast",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25.3,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 40,
      spa: 100,
      spd: 60,
      spe: 145
    }
  },
  stunfisk: {
    name: "Stunfisk",
    num: 618,
    types: [
      "Ground",
      "Electric"
    ],
    abilities: {
      "0": "Static",
      "1": "Limber",
      H: "Sand Veil"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    formes: [
      "Stunfisk",
      "Stunfisk-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 109,
      atk: 66,
      def: 84,
      spa: 81,
      spd: 99,
      spe: 32
    }
  },
  stunfiskgalar: {
    name: "Stunfisk-Galar",
    num: 618,
    types: [
      "Ground",
      "Steel"
    ],
    abilities: {
      "0": "Mimicry"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    baseSpecies: "Stunfisk",
    forme: "Galar",
    formes: [
      "Stunfisk",
      "Stunfisk-Galar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.5,
    baseStats: {
      hp: 109,
      atk: 81,
      def: 99,
      spa: 66,
      spd: 84,
      spe: 32
    }
  },
  mienfoo: {
    name: "Mienfoo",
    num: 619,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Regenerator",
      H: "Reckless"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Mienshao"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20,
    baseStats: {
      hp: 45,
      atk: 85,
      def: 50,
      spa: 55,
      spd: 50,
      spe: 65
    }
  },
  mienshao: {
    name: "Mienshao",
    num: 620,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Regenerator",
      H: "Reckless"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Mienfoo",
    evoLevel: 50,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35.5,
    baseStats: {
      hp: 65,
      atk: 125,
      def: 60,
      spa: 95,
      spd: 60,
      spe: 105
    }
  },
  druddigon: {
    name: "Druddigon",
    num: 621,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Rough Skin",
      "1": "Sheer Force",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 139,
    baseStats: {
      hp: 77,
      atk: 120,
      def: 90,
      spa: 60,
      spd: 90,
      spe: 48
    }
  },
  golett: {
    name: "Golett",
    num: 622,
    types: [
      "Ground",
      "Ghost"
    ],
    abilities: {
      "0": "Iron Fist",
      "1": "Klutz",
      H: "No Guard"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Golurk"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 92,
    baseStats: {
      hp: 59,
      atk: 74,
      def: 50,
      spa: 35,
      spd: 50,
      spe: 35
    }
  },
  golurk: {
    name: "Golurk",
    num: 623,
    types: [
      "Ground",
      "Ghost"
    ],
    abilities: {
      "0": "Iron Fist",
      "1": "Klutz",
      H: "No Guard"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Golett",
    evoLevel: 43,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 330,
    baseStats: {
      hp: 89,
      atk: 124,
      def: 80,
      spa: 55,
      spd: 80,
      spe: 55
    }
  },
  pawniard: {
    name: "Pawniard",
    num: 624,
    types: [
      "Dark",
      "Steel"
    ],
    abilities: {
      "0": "Defiant",
      "1": "Inner Focus",
      H: "Pressure"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Bisharp"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.2,
    baseStats: {
      hp: 45,
      atk: 85,
      def: 70,
      spa: 40,
      spd: 40,
      spe: 60
    }
  },
  bisharp: {
    name: "Bisharp",
    num: 625,
    types: [
      "Dark",
      "Steel"
    ],
    abilities: {
      "0": "Defiant",
      "1": "Inner Focus",
      H: "Pressure"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Kingambit"
    ],
    prevo: "Pawniard",
    evoLevel: 52,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 70,
    baseStats: {
      hp: 65,
      atk: 125,
      def: 100,
      spa: 60,
      spd: 70,
      spe: 70
    }
  },
  bouffalant: {
    name: "Bouffalant",
    num: 626,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Sap Sipper",
      H: "Soundproof"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 94.6,
    baseStats: {
      hp: 95,
      atk: 110,
      def: 95,
      spa: 40,
      spd: 95,
      spe: 55
    }
  },
  rufflet: {
    name: "Rufflet",
    num: 627,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Sheer Force",
      H: "Hustle"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Braviary",
      "Braviary-Hisui"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 10.5,
    baseStats: {
      hp: 70,
      atk: 83,
      def: 50,
      spa: 37,
      spd: 50,
      spe: 60
    }
  },
  braviary: {
    name: "Braviary",
    num: 628,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Sheer Force",
      H: "Defiant"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Rufflet",
    evoLevel: 54,
    formes: [
      "Braviary",
      "Braviary-Hisui"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 41,
    baseStats: {
      hp: 100,
      atk: 123,
      def: 75,
      spa: 57,
      spd: 75,
      spe: 80
    }
  },
  braviaryhisui: {
    name: "Braviary-Hisui",
    num: 628,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Sheer Force",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Rufflet",
    evoLevel: 54,
    baseSpecies: "Braviary",
    forme: "Hisui",
    formes: [
      "Braviary",
      "Braviary-Hisui"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 43.4,
    baseStats: {
      hp: 110,
      atk: 83,
      def: 70,
      spa: 112,
      spd: 70,
      spe: 65
    }
  },
  vullaby: {
    name: "Vullaby",
    num: 629,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Overcoat",
      H: "Weak Armor"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Mandibuzz"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 9,
    baseStats: {
      hp: 70,
      atk: 55,
      def: 75,
      spa: 45,
      spd: 65,
      spe: 60
    }
  },
  mandibuzz: {
    name: "Mandibuzz",
    num: 630,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Overcoat",
      H: "Weak Armor"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Vullaby",
    evoLevel: 54,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.5,
    baseStats: {
      hp: 110,
      atk: 65,
      def: 105,
      spa: 55,
      spd: 95,
      spe: 80
    }
  },
  heatmor: {
    name: "Heatmor",
    num: 631,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Gluttony",
      "1": "Flash Fire",
      H: "White Smoke"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58,
    baseStats: {
      hp: 85,
      atk: 97,
      def: 66,
      spa: 105,
      spd: 66,
      spe: 65
    }
  },
  durant: {
    name: "Durant",
    num: 632,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Hustle",
      H: "Truant"
    },
    eggGroups: [
      "Bug"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 58,
      atk: 109,
      def: 112,
      spa: 48,
      spd: 48,
      spe: 109
    }
  },
  deino: {
    name: "Deino",
    num: 633,
    types: [
      "Dark",
      "Dragon"
    ],
    abilities: {
      "0": "Hustle"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Zweilous"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.3,
    baseStats: {
      hp: 52,
      atk: 65,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 38
    }
  },
  zweilous: {
    name: "Zweilous",
    num: 634,
    types: [
      "Dark",
      "Dragon"
    ],
    abilities: {
      "0": "Hustle"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Hydreigon"
    ],
    prevo: "Deino",
    evoLevel: 50,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50,
    baseStats: {
      hp: 72,
      atk: 85,
      def: 70,
      spa: 65,
      spd: 70,
      spe: 58
    }
  },
  hydreigon: {
    name: "Hydreigon",
    num: 635,
    types: [
      "Dark",
      "Dragon"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Zweilous",
    evoLevel: 64,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 160,
    baseStats: {
      hp: 92,
      atk: 105,
      def: 90,
      spa: 125,
      spd: 90,
      spe: 98
    }
  },
  larvesta: {
    name: "Larvesta",
    num: 636,
    types: [
      "Bug",
      "Fire"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Swarm"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Volcarona"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.8,
    baseStats: {
      hp: 55,
      atk: 85,
      def: 55,
      spa: 50,
      spd: 55,
      spe: 60
    }
  },
  volcarona: {
    name: "Volcarona",
    num: 637,
    types: [
      "Bug",
      "Fire"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Swarm"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Larvesta",
    evoLevel: 59,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 46,
    baseStats: {
      hp: 85,
      atk: 60,
      def: 65,
      spa: 135,
      spd: 105,
      spe: 100
    }
  },
  cobalion: {
    name: "Cobalion",
    num: 638,
    types: [
      "Steel",
      "Fighting"
    ],
    abilities: {
      "0": "Justified"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 250,
    baseStats: {
      hp: 91,
      atk: 90,
      def: 129,
      spa: 90,
      spd: 72,
      spe: 108
    }
  },
  terrakion: {
    name: "Terrakion",
    num: 639,
    types: [
      "Rock",
      "Fighting"
    ],
    abilities: {
      "0": "Justified"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 260,
    baseStats: {
      hp: 91,
      atk: 129,
      def: 90,
      spa: 72,
      spd: 90,
      spe: 108
    }
  },
  virizion: {
    name: "Virizion",
    num: 640,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Justified"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 200,
    baseStats: {
      hp: 91,
      atk: 90,
      def: 72,
      spa: 90,
      spd: 129,
      spe: 108
    }
  },
  tornadus: {
    name: "Tornadus",
    num: 641,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Prankster",
      H: "Defiant"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Tornadus",
      "Tornadus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 63,
    baseStats: {
      hp: 79,
      atk: 115,
      def: 70,
      spa: 125,
      spd: 80,
      spe: 111
    }
  },
  tornadustherian: {
    name: "Tornadus-Therian",
    num: 641,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Regenerator"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Tornadus",
    forme: "Therian",
    formes: [
      "Tornadus",
      "Tornadus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 63,
    baseStats: {
      hp: 79,
      atk: 100,
      def: 80,
      spa: 110,
      spd: 90,
      spe: 121
    }
  },
  thundurus: {
    name: "Thundurus",
    num: 642,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Prankster",
      H: "Defiant"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Thundurus",
      "Thundurus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 61,
    baseStats: {
      hp: 79,
      atk: 115,
      def: 70,
      spa: 125,
      spd: 80,
      spe: 111
    }
  },
  thundurustherian: {
    name: "Thundurus-Therian",
    num: 642,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Volt Absorb"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Thundurus",
    forme: "Therian",
    formes: [
      "Thundurus",
      "Thundurus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 61,
    baseStats: {
      hp: 79,
      atk: 105,
      def: 70,
      spa: 145,
      spd: 80,
      spe: 101
    }
  },
  reshiram: {
    name: "Reshiram",
    num: 643,
    types: [
      "Dragon",
      "Fire"
    ],
    abilities: {
      "0": "Turboblaze"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 330,
    baseStats: {
      hp: 100,
      atk: 120,
      def: 100,
      spa: 150,
      spd: 120,
      spe: 90
    }
  },
  zekrom: {
    name: "Zekrom",
    num: 644,
    types: [
      "Dragon",
      "Electric"
    ],
    abilities: {
      "0": "Teravolt"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 345,
    baseStats: {
      hp: 100,
      atk: 150,
      def: 120,
      spa: 120,
      spd: 100,
      spe: 90
    }
  },
  landorus: {
    name: "Landorus",
    num: 645,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Sand Force",
      H: "Sheer Force"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Landorus",
      "Landorus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 68,
    baseStats: {
      hp: 89,
      atk: 125,
      def: 90,
      spa: 115,
      spd: 80,
      spe: 101
    }
  },
  landorustherian: {
    name: "Landorus-Therian",
    num: 645,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Landorus",
    forme: "Therian",
    formes: [
      "Landorus",
      "Landorus-Therian"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 68,
    baseStats: {
      hp: 89,
      atk: 145,
      def: 90,
      spa: 105,
      spd: 80,
      spe: 91
    }
  },
  kyurem: {
    name: "Kyurem",
    num: 646,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Kyurem",
      "Kyurem-White",
      "Kyurem-Black"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 325,
    baseStats: {
      hp: 125,
      atk: 130,
      def: 90,
      spa: 130,
      spd: 90,
      spe: 95
    }
  },
  kyuremblack: {
    name: "Kyurem-Black",
    num: 646,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Teravolt"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Kyurem",
    forme: "Black",
    formes: [
      "Kyurem",
      "Kyurem-White",
      "Kyurem-Black"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 325,
    baseStats: {
      hp: 125,
      atk: 170,
      def: 100,
      spa: 120,
      spd: 90,
      spe: 95
    }
  },
  kyuremwhite: {
    name: "Kyurem-White",
    num: 646,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Turboblaze"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Kyurem",
    forme: "White",
    formes: [
      "Kyurem",
      "Kyurem-White",
      "Kyurem-Black"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 325,
    baseStats: {
      hp: 125,
      atk: 120,
      def: 90,
      spa: 170,
      spd: 100,
      spe: 95
    }
  },
  keldeo: {
    name: "Keldeo",
    num: 647,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Justified"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Keldeo",
      "Keldeo-Resolute"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 48.5,
    baseStats: {
      hp: 91,
      atk: 72,
      def: 90,
      spa: 129,
      spd: 90,
      spe: 108
    }
  },
  keldeoresolute: {
    name: "Keldeo-Resolute",
    num: 647,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Justified"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Keldeo",
    forme: "Resolute",
    formes: [
      "Keldeo",
      "Keldeo-Resolute"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 48.5,
    baseStats: {
      hp: 91,
      atk: 72,
      def: 90,
      spa: 129,
      spd: 90,
      spe: 108
    }
  },
  meloetta: {
    name: "Meloetta",
    num: 648,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Serene Grace"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Meloetta",
      "Meloetta-Pirouette"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 6.5,
    baseStats: {
      hp: 100,
      atk: 77,
      def: 77,
      spa: 128,
      spd: 128,
      spe: 90
    }
  },
  meloettapirouette: {
    name: "Meloetta-Pirouette",
    num: 648,
    types: [
      "Normal",
      "Fighting"
    ],
    abilities: {
      "0": "Serene Grace"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Meloetta",
    forme: "Pirouette",
    formes: [
      "Meloetta",
      "Meloetta-Pirouette"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 6.5,
    baseStats: {
      hp: 100,
      atk: 128,
      def: 90,
      spa: 77,
      spd: 77,
      spe: 128
    }
  },
  genesect: {
    name: "Genesect",
    num: 649,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Download"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    }
  },
  genesectburn: {
    name: "Genesect-Burn",
    num: 649,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Download"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Genesect",
    forme: "Burn",
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    requiredItem: "Burn Drive",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    }
  },
  genesectchill: {
    name: "Genesect-Chill",
    num: 649,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Download"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Genesect",
    forme: "Chill",
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    requiredItem: "Chill Drive",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    }
  },
  genesectdouse: {
    name: "Genesect-Douse",
    num: 649,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Download"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Genesect",
    forme: "Douse",
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    requiredItem: "Douse Drive",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    }
  },
  genesectshock: {
    name: "Genesect-Shock",
    num: 649,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Download"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Genesect",
    forme: "Shock",
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    requiredItem: "Shock Drive",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    }
  },
  chespin: {
    name: "Chespin",
    num: 650,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Bulletproof"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Quilladin"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9,
    baseStats: {
      hp: 56,
      atk: 61,
      def: 65,
      spa: 48,
      spd: 45,
      spe: 38
    }
  },
  quilladin: {
    name: "Quilladin",
    num: 651,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Bulletproof"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Chesnaught"
    ],
    prevo: "Chespin",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 29,
    baseStats: {
      hp: 61,
      atk: 78,
      def: 95,
      spa: 56,
      spd: 58,
      spe: 57
    }
  },
  chesnaught: {
    name: "Chesnaught",
    num: 652,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Bulletproof"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Quilladin",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 90,
    baseStats: {
      hp: 88,
      atk: 107,
      def: 122,
      spa: 74,
      spd: 75,
      spe: 64
    }
  },
  fennekin: {
    name: "Fennekin",
    num: 653,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Magician"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Braixen"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9.4,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 62,
      spd: 60,
      spe: 60
    }
  },
  braixen: {
    name: "Braixen",
    num: 654,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Magician"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Delphox"
    ],
    prevo: "Fennekin",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 14.5,
    baseStats: {
      hp: 59,
      atk: 59,
      def: 58,
      spa: 90,
      spd: 70,
      spe: 73
    }
  },
  delphox: {
    name: "Delphox",
    num: 655,
    types: [
      "Fire",
      "Psychic"
    ],
    abilities: {
      "0": "Blaze",
      H: "Magician"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Braixen",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 39,
    baseStats: {
      hp: 75,
      atk: 69,
      def: 72,
      spa: 114,
      spd: 100,
      spe: 104
    }
  },
  froakie: {
    name: "Froakie",
    num: 656,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Protean"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Frogadier"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 7,
    baseStats: {
      hp: 41,
      atk: 56,
      def: 40,
      spa: 62,
      spd: 44,
      spe: 71
    }
  },
  frogadier: {
    name: "Frogadier",
    num: 657,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Protean"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Greninja"
    ],
    prevo: "Froakie",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 10.9,
    baseStats: {
      hp: 54,
      atk: 63,
      def: 52,
      spa: 83,
      spd: 56,
      spe: 97
    }
  },
  greninja: {
    name: "Greninja",
    num: 658,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Torrent",
      H: "Protean",
      S: "Battle Bond"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Frogadier",
    evoLevel: 36,
    formes: [
      "Greninja",
      "Greninja-Bond",
      "Greninja-Ash"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 40,
    baseStats: {
      hp: 72,
      atk: 95,
      def: 67,
      spa: 103,
      spd: 71,
      spe: 122
    }
  },
  greninjaash: {
    name: "Greninja-Ash",
    num: 658,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Battle Bond"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Greninja",
    forme: "Ash",
    formes: [
      "Greninja",
      "Greninja-Bond",
      "Greninja-Ash"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 40,
    baseStats: {
      hp: 72,
      atk: 145,
      def: 67,
      spa: 153,
      spd: 71,
      spe: 132
    }
  },
  greninjabond: {
    name: "Greninja-Bond",
    num: 658,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Battle Bond"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Greninja",
    forme: "Bond",
    formes: [
      "Greninja",
      "Greninja-Bond",
      "Greninja-Ash"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 40,
    baseStats: {
      hp: 72,
      atk: 95,
      def: 67,
      spa: 103,
      spd: 71,
      spe: 122
    }
  },
  bunnelby: {
    name: "Bunnelby",
    num: 659,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Cheek Pouch",
      H: "Huge Power"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Diggersby"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 38,
      atk: 36,
      def: 38,
      spa: 32,
      spd: 36,
      spe: 57
    }
  },
  diggersby: {
    name: "Diggersby",
    num: 660,
    types: [
      "Normal",
      "Ground"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Cheek Pouch",
      H: "Huge Power"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Bunnelby",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42.4,
    baseStats: {
      hp: 85,
      atk: 56,
      def: 77,
      spa: 50,
      spd: 77,
      spe: 78
    }
  },
  fletchling: {
    name: "Fletchling",
    num: 661,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Big Pecks",
      H: "Gale Wings"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Fletchinder"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.7,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 43,
      spa: 40,
      spd: 38,
      spe: 62
    }
  },
  fletchinder: {
    name: "Fletchinder",
    num: 662,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Gale Wings"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Talonflame"
    ],
    prevo: "Fletchling",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 62,
      atk: 73,
      def: 55,
      spa: 56,
      spd: 52,
      spe: 84
    }
  },
  talonflame: {
    name: "Talonflame",
    num: 663,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Flame Body",
      H: "Gale Wings"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Fletchinder",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.5,
    baseStats: {
      hp: 78,
      atk: 81,
      def: 71,
      spa: 74,
      spd: 69,
      spe: 126
    }
  },
  scatterbug: {
    name: "Scatterbug",
    num: 664,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Spewpa"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 38,
      atk: 35,
      def: 40,
      spa: 27,
      spd: 25,
      spe: 35
    }
  },
  spewpa: {
    name: "Spewpa",
    num: 665,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Friend Guard"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Vivillon",
      "Vivillon-Fancy"
    ],
    prevo: "Scatterbug",
    evoLevel: 9,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.4,
    baseStats: {
      hp: 45,
      atk: 22,
      def: 60,
      spa: 27,
      spd: 30,
      spe: 29
    }
  },
  vivillon: {
    name: "Vivillon",
    num: 666,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Spewpa",
    evoLevel: 12,
    formes: [
      "Vivillon",
      "Vivillon-Fancy",
      "Vivillon-Pokeball"
    ],
    cosmeticFormes: [
      "Archipelago",
      "Continental",
      "Elegant",
      "Garden",
      "High Plains",
      "Icy Snow",
      "Jungle",
      "Marine",
      "Modern",
      "Monsoon",
      "Ocean",
      "Polar",
      "River",
      "Sandstorm",
      "Savanna",
      "Sun",
      "Tundra"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 80,
      atk: 52,
      def: 50,
      spa: 90,
      spd: 50,
      spe: 89
    }
  },
  vivillonfancy: {
    name: "Vivillon-Fancy",
    num: 666,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Spewpa",
    evoLevel: 12,
    baseSpecies: "Vivillon",
    forme: "Fancy",
    formes: [
      "Vivillon",
      "Vivillon-Fancy",
      "Vivillon-Pokeball"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 80,
      atk: 52,
      def: 50,
      spa: 90,
      spd: 50,
      spe: 89
    }
  },
  vivillonpokeball: {
    name: "Vivillon-Pokeball",
    num: 666,
    types: [
      "Bug",
      "Flying"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Vivillon",
    forme: "Pokeball",
    formes: [
      "Vivillon",
      "Vivillon-Fancy",
      "Vivillon-Pokeball"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 80,
      atk: 52,
      def: 50,
      spa: 90,
      spd: 50,
      spe: 89
    }
  },
  litleo: {
    name: "Litleo",
    num: 667,
    types: [
      "Fire",
      "Normal"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Unnerve",
      H: "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pyroar"
    ],
    genderRatio: {
      M: 0.125,
      F: 0.875
    },
    weightkg: 13.5,
    baseStats: {
      hp: 62,
      atk: 50,
      def: 58,
      spa: 73,
      spd: 54,
      spe: 72
    }
  },
  pyroar: {
    name: "Pyroar",
    num: 668,
    types: [
      "Fire",
      "Normal"
    ],
    abilities: {
      "0": "Rivalry",
      "1": "Unnerve",
      H: "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Litleo",
    evoLevel: 35,
    genderRatio: {
      M: 0.125,
      F: 0.875
    },
    weightkg: 81.5,
    baseStats: {
      hp: 86,
      atk: 68,
      def: 72,
      spa: 109,
      spd: 66,
      spe: 106
    }
  },
  flabebe: {
    name: "Flabébé",
    num: 669,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Floette"
    ],
    cosmeticFormes: [
      "Blue",
      "Orange",
      "White",
      "Yellow"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.1,
    baseStats: {
      hp: 44,
      atk: 38,
      def: 39,
      spa: 61,
      spd: 79,
      spe: 42
    }
  },
  floette: {
    name: "Floette",
    num: 670,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Florges"
    ],
    prevo: "Flabébé",
    evoLevel: 19,
    formes: [
      "Floette",
      "Floette-Eternal"
    ],
    cosmeticFormes: [
      "Blue",
      "Orange",
      "White",
      "Yellow"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.9,
    baseStats: {
      hp: 54,
      atk: 45,
      def: 47,
      spa: 75,
      spd: 98,
      spe: 52
    }
  },
  floetteeternal: {
    name: "Floette-Eternal",
    num: 670,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Flower Veil"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Floette",
    forme: "Eternal",
    formes: [
      "Floette",
      "Floette-Eternal"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.9,
    baseStats: {
      hp: 74,
      atk: 65,
      def: 67,
      spa: 125,
      spd: 128,
      spe: 92
    }
  },
  florges: {
    name: "Florges",
    num: 671,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Floette",
    evoItem: "Shiny Stone",
    evoType: "useItem",
    cosmeticFormes: [
      "Blue",
      "Orange",
      "White",
      "Yellow"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 10,
    baseStats: {
      hp: 78,
      atk: 65,
      def: 68,
      spa: 112,
      spd: 154,
      spe: 75
    }
  },
  skiddo: {
    name: "Skiddo",
    num: 672,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Sap Sipper",
      H: "Grass Pelt"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Gogoat"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31,
    baseStats: {
      hp: 66,
      atk: 65,
      def: 48,
      spa: 62,
      spd: 57,
      spe: 52
    }
  },
  gogoat: {
    name: "Gogoat",
    num: 673,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Sap Sipper",
      H: "Grass Pelt"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Skiddo",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 91,
    baseStats: {
      hp: 123,
      atk: 100,
      def: 62,
      spa: 97,
      spd: 81,
      spe: 68
    }
  },
  pancham: {
    name: "Pancham",
    num: 674,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      H: "Scrappy"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Pangoro"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 67,
      atk: 82,
      def: 62,
      spa: 46,
      spd: 48,
      spe: 43
    }
  },
  pangoro: {
    name: "Pangoro",
    num: 675,
    types: [
      "Fighting",
      "Dark"
    ],
    abilities: {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      H: "Scrappy"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Pancham",
    evoLevel: 32,
    evoCondition: "with a Dark-type in the party",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 136,
    baseStats: {
      hp: 95,
      atk: 124,
      def: 78,
      spa: 69,
      spd: 71,
      spe: 58
    }
  },
  furfrou: {
    name: "Furfrou",
    num: 676,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat"
    },
    eggGroups: [
      "Field"
    ],
    cosmeticFormes: [
      "Dandy",
      "Debutante",
      "Diamond",
      "Heart",
      "Kabuki",
      "La Reine",
      "Matron",
      "Pharaoh",
      "Star"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 60,
      spa: 65,
      spd: 90,
      spe: 102
    }
  },
  espurr: {
    name: "Espurr",
    num: 677,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Own Tempo"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Meowstic",
      "Meowstic-F"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 62,
      atk: 48,
      def: 54,
      spa: 63,
      spd: 60,
      spe: 68
    }
  },
  meowstic: {
    name: "Meowstic",
    num: 678,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Espurr",
    evoLevel: 25,
    formes: [
      "Meowstic",
      "Meowstic-F"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 8.5,
    baseStats: {
      hp: 74,
      atk: 48,
      def: 76,
      spa: 83,
      spd: 81,
      spe: 104
    }
  },
  meowsticf: {
    name: "Meowstic-F",
    num: 678,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Competitive"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Espurr",
    evoLevel: 25,
    baseSpecies: "Meowstic",
    forme: "F",
    formes: [
      "Meowstic",
      "Meowstic-F"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 8.5,
    baseStats: {
      hp: 74,
      atk: 48,
      def: 76,
      spa: 83,
      spd: 81,
      spe: 104
    }
  },
  honedge: {
    name: "Honedge",
    num: 679,
    types: [
      "Steel",
      "Ghost"
    ],
    abilities: {
      "0": "No Guard"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Doublade"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 45,
      atk: 80,
      def: 100,
      spa: 35,
      spd: 37,
      spe: 28
    }
  },
  doublade: {
    name: "Doublade",
    num: 680,
    types: [
      "Steel",
      "Ghost"
    ],
    abilities: {
      "0": "No Guard"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Aegislash"
    ],
    prevo: "Honedge",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.5,
    baseStats: {
      hp: 59,
      atk: 110,
      def: 150,
      spa: 45,
      spd: 49,
      spe: 35
    }
  },
  aegislash: {
    name: "Aegislash",
    num: 681,
    types: [
      "Steel",
      "Ghost"
    ],
    abilities: {
      "0": "Stance Change"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Doublade",
    evoItem: "Dusk Stone",
    evoType: "useItem",
    formes: [
      "Aegislash",
      "Aegislash-Blade"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 53,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 140,
      spa: 50,
      spd: 140,
      spe: 60
    }
  },
  aegislashblade: {
    name: "Aegislash-Blade",
    num: 681,
    types: [
      "Steel",
      "Ghost"
    ],
    abilities: {
      "0": "Stance Change"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Aegislash",
    forme: "Blade",
    formes: [
      "Aegislash",
      "Aegislash-Blade"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 53,
    baseStats: {
      hp: 60,
      atk: 140,
      def: 50,
      spa: 140,
      spd: 50,
      spe: 60
    }
  },
  spritzee: {
    name: "Spritzee",
    num: 682,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Healer",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Aromatisse"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.5,
    baseStats: {
      hp: 78,
      atk: 52,
      def: 60,
      spa: 63,
      spd: 65,
      spe: 23
    }
  },
  aromatisse: {
    name: "Aromatisse",
    num: 683,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Healer",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Spritzee",
    evoItem: "Sachet",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 101,
      atk: 72,
      def: 72,
      spa: 99,
      spd: 89,
      spe: 29
    }
  },
  swirlix: {
    name: "Swirlix",
    num: 684,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil",
      H: "Unburden"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Slurpuff"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 62,
      atk: 48,
      def: 66,
      spa: 59,
      spd: 57,
      spe: 49
    }
  },
  slurpuff: {
    name: "Slurpuff",
    num: 685,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil",
      H: "Unburden"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Swirlix",
    evoItem: "Whipped Dream",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 82,
      atk: 80,
      def: 86,
      spa: 85,
      spd: 75,
      spe: 72
    }
  },
  inkay: {
    name: "Inkay",
    num: 686,
    types: [
      "Dark",
      "Psychic"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Suction Cups",
      H: "Infiltrator"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    evos: [
      "Malamar"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 53,
      atk: 54,
      def: 53,
      spa: 37,
      spd: 46,
      spe: 45
    }
  },
  malamar: {
    name: "Malamar",
    num: 687,
    types: [
      "Dark",
      "Psychic"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Suction Cups",
      H: "Infiltrator"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    prevo: "Inkay",
    evoLevel: 30,
    evoCondition: "with the console turned upside-down",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47,
    baseStats: {
      hp: 86,
      atk: 92,
      def: 88,
      spa: 68,
      spd: 75,
      spe: 73
    }
  },
  binacle: {
    name: "Binacle",
    num: 688,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Sniper",
      H: "Pickpocket"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Barbaracle"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31,
    baseStats: {
      hp: 42,
      atk: 52,
      def: 67,
      spa: 39,
      spd: 56,
      spe: 50
    }
  },
  barbaracle: {
    name: "Barbaracle",
    num: 689,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Sniper",
      H: "Pickpocket"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Binacle",
    evoLevel: 39,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 96,
    baseStats: {
      hp: 72,
      atk: 105,
      def: 115,
      spa: 54,
      spd: 86,
      spe: 68
    }
  },
  skrelp: {
    name: "Skrelp",
    num: 690,
    types: [
      "Poison",
      "Water"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Poison Touch",
      H: "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Dragalge"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.3,
    baseStats: {
      hp: 50,
      atk: 60,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 30
    }
  },
  dragalge: {
    name: "Dragalge",
    num: 691,
    types: [
      "Poison",
      "Dragon"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Poison Touch",
      H: "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Skrelp",
    evoLevel: 48,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 81.5,
    baseStats: {
      hp: 65,
      atk: 75,
      def: 90,
      spa: 97,
      spd: 123,
      spe: 44
    }
  },
  clauncher: {
    name: "Clauncher",
    num: 692,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Mega Launcher"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    evos: [
      "Clawitzer"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.3,
    baseStats: {
      hp: 50,
      atk: 53,
      def: 62,
      spa: 58,
      spd: 63,
      spe: 44
    }
  },
  clawitzer: {
    name: "Clawitzer",
    num: 693,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Mega Launcher"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Clauncher",
    evoLevel: 37,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35.3,
    baseStats: {
      hp: 71,
      atk: 73,
      def: 88,
      spa: 120,
      spd: 89,
      spe: 59
    }
  },
  helioptile: {
    name: "Helioptile",
    num: 694,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Dry Skin",
      "1": "Sand Veil",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Heliolisk"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 44,
      atk: 38,
      def: 33,
      spa: 61,
      spd: 43,
      spe: 70
    }
  },
  heliolisk: {
    name: "Heliolisk",
    num: 695,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Dry Skin",
      "1": "Sand Veil",
      H: "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Helioptile",
    evoItem: "Sun Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21,
    baseStats: {
      hp: 62,
      atk: 55,
      def: 52,
      spa: 109,
      spd: 94,
      spe: 109
    }
  },
  tyrunt: {
    name: "Tyrunt",
    num: 696,
    types: [
      "Rock",
      "Dragon"
    ],
    abilities: {
      "0": "Strong Jaw",
      H: "Sturdy"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Tyrantrum"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 26,
    baseStats: {
      hp: 58,
      atk: 89,
      def: 77,
      spa: 45,
      spd: 45,
      spe: 48
    }
  },
  tyrantrum: {
    name: "Tyrantrum",
    num: 697,
    types: [
      "Rock",
      "Dragon"
    ],
    abilities: {
      "0": "Strong Jaw",
      H: "Rock Head"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Tyrunt",
    evoLevel: 39,
    evoCondition: "during the day",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 270,
    baseStats: {
      hp: 82,
      atk: 121,
      def: 119,
      spa: 69,
      spd: 59,
      spe: 71
    }
  },
  amaura: {
    name: "Amaura",
    num: 698,
    types: [
      "Rock",
      "Ice"
    ],
    abilities: {
      "0": "Refrigerate",
      H: "Snow Warning"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Aurorus"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25.2,
    baseStats: {
      hp: 77,
      atk: 59,
      def: 50,
      spa: 67,
      spd: 63,
      spe: 46
    }
  },
  aurorus: {
    name: "Aurorus",
    num: 699,
    types: [
      "Rock",
      "Ice"
    ],
    abilities: {
      "0": "Refrigerate",
      H: "Snow Warning"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Amaura",
    evoLevel: 39,
    evoCondition: "at night",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 225,
    baseStats: {
      hp: 123,
      atk: 77,
      def: 72,
      spa: 99,
      spd: 92,
      spe: 58
    }
  },
  sylveon: {
    name: "Sylveon",
    num: 700,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Cute Charm",
      H: "Pixilate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoType: "levelExtra",
    evoCondition: "with a Fairy-type move and two levels of Affection",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 23.5,
    baseStats: {
      hp: 95,
      atk: 65,
      def: 65,
      spa: 110,
      spd: 130,
      spe: 60
    }
  },
  hawlucha: {
    name: "Hawlucha",
    num: 701,
    types: [
      "Fighting",
      "Flying"
    ],
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Flying",
      "Human-Like"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21.5,
    baseStats: {
      hp: 78,
      atk: 92,
      def: 75,
      spa: 74,
      spd: 63,
      spe: 118
    }
  },
  dedenne: {
    name: "Dedenne",
    num: 702,
    types: [
      "Electric",
      "Fairy"
    ],
    abilities: {
      "0": "Cheek Pouch",
      "1": "Pickup",
      H: "Plus"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.2,
    baseStats: {
      hp: 67,
      atk: 58,
      def: 57,
      spa: 81,
      spd: 67,
      spe: 101
    }
  },
  carbink: {
    name: "Carbink",
    num: 703,
    types: [
      "Rock",
      "Fairy"
    ],
    abilities: {
      "0": "Clear Body",
      H: "Sturdy"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5.7,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 150,
      spa: 50,
      spd: 150,
      spe: 50
    }
  },
  goomy: {
    name: "Goomy",
    num: 704,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Sliggoo",
      "Sliggoo-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.8,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 35,
      spa: 55,
      spd: 75,
      spe: 40
    }
  },
  sliggoo: {
    name: "Sliggoo",
    num: 705,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Goodra"
    ],
    prevo: "Goomy",
    evoLevel: 40,
    formes: [
      "Sliggoo",
      "Sliggoo-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 68,
      atk: 75,
      def: 53,
      spa: 83,
      spd: 113,
      spe: 60
    }
  },
  sliggoohisui: {
    name: "Sliggoo-Hisui",
    num: 705,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Shell Armor",
      H: "Gooey"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Goodra-Hisui"
    ],
    prevo: "Goomy",
    evoLevel: 40,
    baseSpecies: "Sliggoo",
    forme: "Hisui",
    formes: [
      "Sliggoo",
      "Sliggoo-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 68.5,
    baseStats: {
      hp: 58,
      atk: 75,
      def: 83,
      spa: 83,
      spd: 113,
      spe: 40
    }
  },
  goodra: {
    name: "Goodra",
    num: 706,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Sliggoo",
    evoLevel: 50,
    formes: [
      "Goodra",
      "Goodra-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 150.5,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 70,
      spa: 110,
      spd: 150,
      spe: 80
    }
  },
  goodrahisui: {
    name: "Goodra-Hisui",
    num: 706,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Shell Armor",
      H: "Gooey"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Sliggoo-Hisui",
    evoLevel: 50,
    baseSpecies: "Goodra",
    forme: "Hisui",
    formes: [
      "Goodra",
      "Goodra-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 334.1,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 100,
      spa: 110,
      spd: 150,
      spe: 60
    }
  },
  klefki: {
    name: "Klefki",
    num: 707,
    types: [
      "Steel",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      H: "Magician"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 57,
      atk: 80,
      def: 91,
      spa: 80,
      spd: 87,
      spe: 75
    }
  },
  phantump: {
    name: "Phantump",
    num: 708,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Frisk",
      H: "Harvest"
    },
    eggGroups: [
      "Grass",
      "Amorphous"
    ],
    evos: [
      "Trevenant"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7,
    baseStats: {
      hp: 43,
      atk: 70,
      def: 48,
      spa: 50,
      spd: 60,
      spe: 38
    }
  },
  trevenant: {
    name: "Trevenant",
    num: 709,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Natural Cure",
      "1": "Frisk",
      H: "Harvest"
    },
    eggGroups: [
      "Grass",
      "Amorphous"
    ],
    prevo: "Phantump",
    evoType: "trade",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 71,
    baseStats: {
      hp: 85,
      atk: 110,
      def: 76,
      spa: 65,
      spd: 82,
      spe: 56
    }
  },
  pumpkaboo: {
    name: "Pumpkaboo",
    num: 710,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gourgeist"
    ],
    formes: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 49,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 51
    }
  },
  pumpkaboolarge: {
    name: "Pumpkaboo-Large",
    num: 710,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gourgeist-Large"
    ],
    baseSpecies: "Pumpkaboo",
    forme: "Large",
    formes: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.5,
    baseStats: {
      hp: 54,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 46
    }
  },
  pumpkaboosmall: {
    name: "Pumpkaboo-Small",
    num: 710,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gourgeist-Small"
    ],
    baseSpecies: "Pumpkaboo",
    forme: "Small",
    formes: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 44,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 56
    }
  },
  pumpkaboosuper: {
    name: "Pumpkaboo-Super",
    num: 710,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gourgeist-Super"
    ],
    baseSpecies: "Pumpkaboo",
    forme: "Super",
    formes: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 59,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 41
    }
  },
  gourgeist: {
    name: "Gourgeist",
    num: 711,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo",
    evoType: "trade",
    formes: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.5,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 84
    }
  },
  gourgeistlarge: {
    name: "Gourgeist-Large",
    num: 711,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo-Large",
    evoType: "trade",
    baseSpecies: "Gourgeist",
    forme: "Large",
    formes: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14,
    baseStats: {
      hp: 75,
      atk: 95,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 69
    }
  },
  gourgeistsmall: {
    name: "Gourgeist-Small",
    num: 711,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo-Small",
    evoType: "trade",
    baseSpecies: "Gourgeist",
    forme: "Small",
    formes: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 55,
      atk: 85,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 99
    }
  },
  gourgeistsuper: {
    name: "Gourgeist-Super",
    num: 711,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo-Super",
    evoType: "trade",
    baseSpecies: "Gourgeist",
    forme: "Super",
    formes: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 85,
      atk: 100,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 54
    }
  },
  bergmite: {
    name: "Bergmite",
    num: 712,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Ice Body",
      H: "Sturdy"
    },
    eggGroups: [
      "Monster",
      "Mineral"
    ],
    evos: [
      "Avalugg",
      "Avalugg-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 99.5,
    baseStats: {
      hp: 55,
      atk: 69,
      def: 85,
      spa: 32,
      spd: 35,
      spe: 28
    }
  },
  avalugg: {
    name: "Avalugg",
    num: 713,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Ice Body",
      H: "Sturdy"
    },
    eggGroups: [
      "Monster",
      "Mineral"
    ],
    prevo: "Bergmite",
    evoLevel: 37,
    formes: [
      "Avalugg",
      "Avalugg-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 505,
    baseStats: {
      hp: 95,
      atk: 117,
      def: 184,
      spa: 44,
      spd: 46,
      spe: 28
    }
  },
  avalugghisui: {
    name: "Avalugg-Hisui",
    num: 713,
    types: [
      "Ice",
      "Rock"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Ice Body",
      H: "Sturdy"
    },
    eggGroups: [
      "Monster",
      "Mineral"
    ],
    prevo: "Bergmite",
    evoLevel: 37,
    baseSpecies: "Avalugg",
    forme: "Hisui",
    formes: [
      "Avalugg",
      "Avalugg-Hisui"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 262.4,
    baseStats: {
      hp: 95,
      atk: 127,
      def: 184,
      spa: 34,
      spd: 36,
      spe: 38
    }
  },
  noibat: {
    name: "Noibat",
    num: 714,
    types: [
      "Flying",
      "Dragon"
    ],
    abilities: {
      "0": "Frisk",
      "1": "Infiltrator",
      H: "Telepathy"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    evos: [
      "Noivern"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 40,
      atk: 30,
      def: 35,
      spa: 45,
      spd: 40,
      spe: 55
    }
  },
  noivern: {
    name: "Noivern",
    num: 715,
    types: [
      "Flying",
      "Dragon"
    ],
    abilities: {
      "0": "Frisk",
      "1": "Infiltrator",
      H: "Telepathy"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    prevo: "Noibat",
    evoLevel: 48,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 85,
    baseStats: {
      hp: 85,
      atk: 70,
      def: 80,
      spa: 97,
      spd: 80,
      spe: 123
    }
  },
  xerneas: {
    name: "Xerneas",
    num: 716,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Fairy Aura"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 215,
    baseStats: {
      hp: 126,
      atk: 131,
      def: 95,
      spa: 131,
      spd: 98,
      spe: 99
    }
  },
  yveltal: {
    name: "Yveltal",
    num: 717,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Dark Aura"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 203,
    baseStats: {
      hp: 126,
      atk: 131,
      def: 95,
      spa: 131,
      spd: 98,
      spe: 99
    }
  },
  zygarde: {
    name: "Zygarde",
    num: 718,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Aura Break",
      S: "Power Construct"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Zygarde",
      "Zygarde-10%",
      "Zygarde-10%",
      "Zygarde",
      "Zygarde-Complete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 305,
    baseStats: {
      hp: 108,
      atk: 100,
      def: 121,
      spa: 81,
      spd: 95,
      spe: 95
    }
  },
  zygarde10: {
    name: "Zygarde-10%",
    num: 718,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Aura Break",
      S: "Power Construct"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zygarde",
    forme: "10%",
    formes: [
      "Zygarde",
      "Zygarde-10%",
      "Zygarde-10%",
      "Zygarde",
      "Zygarde-Complete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 33.5,
    baseStats: {
      hp: 54,
      atk: 100,
      def: 71,
      spa: 61,
      spd: 85,
      spe: 115
    }
  },
  zygardecomplete: {
    name: "Zygarde-Complete",
    num: 718,
    types: [
      "Dragon",
      "Ground"
    ],
    abilities: {
      "0": "Power Construct"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zygarde",
    forme: "Complete",
    formes: [
      "Zygarde",
      "Zygarde-10%",
      "Zygarde-10%",
      "Zygarde",
      "Zygarde-Complete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 610,
    baseStats: {
      hp: 216,
      atk: 100,
      def: 121,
      spa: 91,
      spd: 95,
      spe: 85
    }
  },
  diancie: {
    name: "Diancie",
    num: 719,
    types: [
      "Rock",
      "Fairy"
    ],
    abilities: {
      "0": "Clear Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Diancie",
      "Diancie-Mega"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 8.8,
    baseStats: {
      hp: 50,
      atk: 100,
      def: 150,
      spa: 100,
      spd: 150,
      spe: 50
    }
  },
  dianciemega: {
    name: "Diancie-Mega",
    num: 719,
    types: [
      "Rock",
      "Fairy"
    ],
    abilities: {
      "0": "Magic Bounce"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Diancie",
    forme: "Mega",
    formes: [
      "Diancie",
      "Diancie-Mega"
    ],
    requiredItem: "Diancite",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 27.8,
    baseStats: {
      hp: 50,
      atk: 160,
      def: 110,
      spa: 160,
      spd: 110,
      spe: 110
    }
  },
  hoopa: {
    name: "Hoopa",
    num: 720,
    types: [
      "Psychic",
      "Ghost"
    ],
    abilities: {
      "0": "Magician"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Hoopa",
      "Hoopa-Unbound"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 9,
    baseStats: {
      hp: 80,
      atk: 110,
      def: 60,
      spa: 150,
      spd: 130,
      spe: 70
    }
  },
  hoopaunbound: {
    name: "Hoopa-Unbound",
    num: 720,
    types: [
      "Psychic",
      "Dark"
    ],
    abilities: {
      "0": "Magician"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Hoopa",
    forme: "Unbound",
    formes: [
      "Hoopa",
      "Hoopa-Unbound"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 490,
    baseStats: {
      hp: 80,
      atk: 160,
      def: 60,
      spa: 170,
      spd: 130,
      spe: 80
    }
  },
  volcanion: {
    name: "Volcanion",
    num: 721,
    types: [
      "Fire",
      "Water"
    ],
    abilities: {
      "0": "Water Absorb"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 195,
    baseStats: {
      hp: 80,
      atk: 110,
      def: 120,
      spa: 130,
      spd: 90,
      spe: 70
    }
  },
  rowlet: {
    name: "Rowlet",
    num: 722,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Dartrix"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 1.5,
    baseStats: {
      hp: 68,
      atk: 55,
      def: 55,
      spa: 50,
      spd: 50,
      spe: 42
    }
  },
  dartrix: {
    name: "Dartrix",
    num: 723,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Decidueye",
      "Decidueye-Hisui"
    ],
    prevo: "Rowlet",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 16,
    baseStats: {
      hp: 78,
      atk: 75,
      def: 75,
      spa: 70,
      spd: 70,
      spe: 52
    }
  },
  decidueye: {
    name: "Decidueye",
    num: 724,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Dartrix",
    evoLevel: 34,
    formes: [
      "Decidueye",
      "Decidueye-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 36.6,
    baseStats: {
      hp: 78,
      atk: 107,
      def: 75,
      spa: 100,
      spd: 100,
      spe: 70
    }
  },
  decidueyehisui: {
    name: "Decidueye-Hisui",
    num: 724,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Scrappy"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Dartrix",
    evoLevel: 36,
    baseSpecies: "Decidueye",
    forme: "Hisui",
    formes: [
      "Decidueye",
      "Decidueye-Hisui"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 37,
    baseStats: {
      hp: 88,
      atk: 112,
      def: 80,
      spa: 95,
      spd: 95,
      spe: 60
    }
  },
  litten: {
    name: "Litten",
    num: 725,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Torracat"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 4.3,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 70
    }
  },
  torracat: {
    name: "Torracat",
    num: 726,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Incineroar"
    ],
    prevo: "Litten",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 85,
      def: 50,
      spa: 80,
      spd: 50,
      spe: 90
    }
  },
  incineroar: {
    name: "Incineroar",
    num: 727,
    types: [
      "Fire",
      "Dark"
    ],
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Torracat",
    evoLevel: 34,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 83,
    baseStats: {
      hp: 95,
      atk: 115,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 60
    }
  },
  popplio: {
    name: "Popplio",
    num: 728,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Brionne"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 7.5,
    baseStats: {
      hp: 50,
      atk: 54,
      def: 54,
      spa: 66,
      spd: 56,
      spe: 40
    }
  },
  brionne: {
    name: "Brionne",
    num: 729,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Primarina"
    ],
    prevo: "Popplio",
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 17.5,
    baseStats: {
      hp: 60,
      atk: 69,
      def: 69,
      spa: 91,
      spd: 81,
      spe: 50
    }
  },
  primarina: {
    name: "Primarina",
    num: 730,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Brionne",
    evoLevel: 34,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 44,
    baseStats: {
      hp: 80,
      atk: 74,
      def: 74,
      spa: 126,
      spd: 116,
      spe: 60
    }
  },
  pikipek: {
    name: "Pikipek",
    num: 731,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Pickup"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Trumbeak"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.2,
    baseStats: {
      hp: 35,
      atk: 75,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 65
    }
  },
  trumbeak: {
    name: "Trumbeak",
    num: 732,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Pickup"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Toucannon"
    ],
    prevo: "Pikipek",
    evoLevel: 14,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.8,
    baseStats: {
      hp: 55,
      atk: 85,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    }
  },
  toucannon: {
    name: "Toucannon",
    num: 733,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Sheer Force"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Trumbeak",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 26,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 75,
      spa: 75,
      spd: 75,
      spe: 60
    }
  },
  yungoos: {
    name: "Yungoos",
    num: 734,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Stakeout",
      "1": "Strong Jaw",
      H: "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Gumshoos"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 48,
      atk: 70,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 45
    }
  },
  gumshoos: {
    name: "Gumshoos",
    num: 735,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Stakeout",
      "1": "Strong Jaw",
      H: "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Yungoos",
    evoLevel: 20,
    evoCondition: "during the day",
    formes: [
      "Gumshoos",
      "Gumshoos-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.2,
    baseStats: {
      hp: 88,
      atk: 110,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 45
    }
  },
  gumshoostotem: {
    name: "Gumshoos-Totem",
    num: 735,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Gumshoos",
    forme: "Totem",
    formes: [
      "Gumshoos",
      "Gumshoos-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60,
    baseStats: {
      hp: 88,
      atk: 110,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 45
    }
  },
  grubbin: {
    name: "Grubbin",
    num: 736,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Swarm"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Charjabug"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.4,
    baseStats: {
      hp: 47,
      atk: 62,
      def: 45,
      spa: 55,
      spd: 45,
      spe: 46
    }
  },
  charjabug: {
    name: "Charjabug",
    num: 737,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Battery"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Vikavolt"
    ],
    prevo: "Grubbin",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 57,
      atk: 82,
      def: 95,
      spa: 55,
      spd: 75,
      spe: 36
    }
  },
  vikavolt: {
    name: "Vikavolt",
    num: 738,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Charjabug",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    formes: [
      "Vikavolt",
      "Vikavolt-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 45,
    baseStats: {
      hp: 77,
      atk: 70,
      def: 90,
      spa: 145,
      spd: 75,
      spe: 43
    }
  },
  vikavolttotem: {
    name: "Vikavolt-Totem",
    num: 738,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Vikavolt",
    forme: "Totem",
    formes: [
      "Vikavolt",
      "Vikavolt-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 147.5,
    baseStats: {
      hp: 77,
      atk: 70,
      def: 90,
      spa: 145,
      spd: 75,
      spe: 43
    }
  },
  crabrawler: {
    name: "Crabrawler",
    num: 739,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Iron Fist",
      H: "Anger Point"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Crabominable"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7,
    baseStats: {
      hp: 47,
      atk: 82,
      def: 57,
      spa: 42,
      spd: 47,
      spe: 63
    }
  },
  crabominable: {
    name: "Crabominable",
    num: 740,
    types: [
      "Fighting",
      "Ice"
    ],
    abilities: {
      "0": "Hyper Cutter",
      "1": "Iron Fist",
      H: "Anger Point"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Crabrawler",
    evoItem: "Ice Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 180,
    baseStats: {
      hp: 97,
      atk: 132,
      def: 77,
      spa: 62,
      spd: 67,
      spe: 43
    }
  },
  oricorio: {
    name: "Oricorio",
    num: 741,
    types: [
      "Fire",
      "Flying"
    ],
    abilities: {
      "0": "Dancer"
    },
    eggGroups: [
      "Flying"
    ],
    formes: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3.4,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    }
  },
  oricoriopau: {
    name: "Oricorio-Pa'u",
    num: 741,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Dancer"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Oricorio",
    forme: "Pa'u",
    formes: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3.4,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    }
  },
  oricoriopompom: {
    name: "Oricorio-Pom-Pom",
    num: 741,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Dancer"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Oricorio",
    forme: "Pom-Pom",
    formes: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3.4,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    }
  },
  oricoriosensu: {
    name: "Oricorio-Sensu",
    num: 741,
    types: [
      "Ghost",
      "Flying"
    ],
    abilities: {
      "0": "Dancer"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Oricorio",
    forme: "Sensu",
    formes: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 3.4,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    }
  },
  cutiefly: {
    name: "Cutiefly",
    num: 742,
    types: [
      "Bug",
      "Fairy"
    ],
    abilities: {
      "0": "Honey Gather",
      "1": "Shield Dust",
      H: "Sweet Veil"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    evos: [
      "Ribombee"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.2,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 55,
      spd: 40,
      spe: 84
    }
  },
  ribombee: {
    name: "Ribombee",
    num: 743,
    types: [
      "Bug",
      "Fairy"
    ],
    abilities: {
      "0": "Honey Gather",
      "1": "Shield Dust",
      H: "Sweet Veil"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    prevo: "Cutiefly",
    evoLevel: 25,
    formes: [
      "Ribombee",
      "Ribombee-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.5,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 60,
      spa: 95,
      spd: 70,
      spe: 124
    }
  },
  ribombeetotem: {
    name: "Ribombee-Totem",
    num: 743,
    types: [
      "Bug",
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    baseSpecies: "Ribombee",
    forme: "Totem",
    formes: [
      "Ribombee",
      "Ribombee-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 60,
      atk: 55,
      def: 60,
      spa: 95,
      spd: 70,
      spe: 124
    }
  },
  rockruff: {
    name: "Rockruff",
    num: 744,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Vital Spirit",
      H: "Steadfast",
      S: "Own Tempo"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    formes: [
      "Rockruff",
      "Rockruff"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.2,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 40,
      spa: 30,
      spd: 40,
      spe: 60
    }
  },
  lycanroc: {
    name: "Lycanroc",
    num: 745,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Sand Rush",
      H: "Steadfast"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoLevel: 25,
    evoCondition: "during the day",
    formes: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 75,
      atk: 115,
      def: 65,
      spa: 55,
      spd: 65,
      spe: 112
    }
  },
  lycanrocdusk: {
    name: "Lycanroc-Dusk",
    num: 745,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Tough Claws"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoLevel: 25,
    evoCondition: "from a special Rockruff",
    baseSpecies: "Lycanroc",
    forme: "Dusk",
    formes: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 75,
      atk: 117,
      def: 65,
      spa: 55,
      spd: 65,
      spe: 110
    }
  },
  lycanrocmidnight: {
    name: "Lycanroc-Midnight",
    num: 745,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Vital Spirit",
      H: "No Guard"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoLevel: 25,
    evoCondition: "at night",
    baseSpecies: "Lycanroc",
    forme: "Midnight",
    formes: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 85,
      atk: 115,
      def: 75,
      spa: 55,
      spd: 75,
      spe: 82
    }
  },
  wishiwashi: {
    name: "Wishiwashi",
    num: 746,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Schooling"
    },
    eggGroups: [
      "Water 2"
    ],
    formes: [
      "Wishiwashi",
      "Wishiwashi-School"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.3,
    baseStats: {
      hp: 45,
      atk: 20,
      def: 20,
      spa: 25,
      spd: 25,
      spe: 40
    }
  },
  wishiwashischool: {
    name: "Wishiwashi-School",
    num: 746,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Schooling"
    },
    eggGroups: [
      "Water 2"
    ],
    baseSpecies: "Wishiwashi",
    forme: "School",
    formes: [
      "Wishiwashi",
      "Wishiwashi-School"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 78.6,
    baseStats: {
      hp: 45,
      atk: 140,
      def: 130,
      spa: 140,
      spd: 135,
      spe: 30
    }
  },
  mareanie: {
    name: "Mareanie",
    num: 747,
    types: [
      "Poison",
      "Water"
    ],
    abilities: {
      "0": "Merciless",
      "1": "Limber",
      H: "Regenerator"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Toxapex"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 50,
      atk: 53,
      def: 62,
      spa: 43,
      spd: 52,
      spe: 45
    }
  },
  toxapex: {
    name: "Toxapex",
    num: 748,
    types: [
      "Poison",
      "Water"
    ],
    abilities: {
      "0": "Merciless",
      "1": "Limber",
      H: "Regenerator"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Mareanie",
    evoLevel: 38,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 50,
      atk: 63,
      def: 152,
      spa: 53,
      spd: 142,
      spe: 35
    }
  },
  mudbray: {
    name: "Mudbray",
    num: 749,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Stamina",
      H: "Inner Focus"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mudsdale"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110,
    baseStats: {
      hp: 70,
      atk: 100,
      def: 70,
      spa: 45,
      spd: 55,
      spe: 45
    }
  },
  mudsdale: {
    name: "Mudsdale",
    num: 750,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Stamina",
      H: "Inner Focus"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Mudbray",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 920,
    baseStats: {
      hp: 100,
      atk: 125,
      def: 100,
      spa: 55,
      spd: 85,
      spe: 35
    }
  },
  dewpider: {
    name: "Dewpider",
    num: 751,
    types: [
      "Water",
      "Bug"
    ],
    abilities: {
      "0": "Water Bubble",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    evos: [
      "Araquanid"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 38,
      atk: 40,
      def: 52,
      spa: 40,
      spd: 72,
      spe: 27
    }
  },
  araquanid: {
    name: "Araquanid",
    num: 752,
    types: [
      "Water",
      "Bug"
    ],
    abilities: {
      "0": "Water Bubble",
      H: "Water Absorb"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    prevo: "Dewpider",
    evoLevel: 22,
    formes: [
      "Araquanid",
      "Araquanid-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 82,
    baseStats: {
      hp: 68,
      atk: 70,
      def: 92,
      spa: 50,
      spd: 132,
      spe: 42
    }
  },
  araquanidtotem: {
    name: "Araquanid-Totem",
    num: 752,
    types: [
      "Water",
      "Bug"
    ],
    abilities: {
      "0": "Water Bubble"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    baseSpecies: "Araquanid",
    forme: "Totem",
    formes: [
      "Araquanid",
      "Araquanid-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 217.5,
    baseStats: {
      hp: 68,
      atk: 70,
      def: 92,
      spa: 50,
      spd: 132,
      spe: 42
    }
  },
  fomantis: {
    name: "Fomantis",
    num: 753,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      H: "Contrary"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Lurantis"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 40,
      atk: 55,
      def: 35,
      spa: 50,
      spd: 35,
      spe: 35
    }
  },
  lurantis: {
    name: "Lurantis",
    num: 754,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      H: "Contrary"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Fomantis",
    evoLevel: 34,
    evoCondition: "during the day",
    formes: [
      "Lurantis",
      "Lurantis-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18.5,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 45
    }
  },
  lurantistotem: {
    name: "Lurantis-Totem",
    num: 754,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard"
    },
    eggGroups: [
      "Grass"
    ],
    baseSpecies: "Lurantis",
    forme: "Totem",
    formes: [
      "Lurantis",
      "Lurantis-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 45
    }
  },
  morelull: {
    name: "Morelull",
    num: 755,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Effect Spore",
      H: "Rain Dish"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Shiinotic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 40,
      atk: 35,
      def: 55,
      spa: 65,
      spd: 75,
      spe: 15
    }
  },
  shiinotic: {
    name: "Shiinotic",
    num: 756,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Illuminate",
      "1": "Effect Spore",
      H: "Rain Dish"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Morelull",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 80,
      spa: 90,
      spd: 100,
      spe: 30
    }
  },
  salandit: {
    name: "Salandit",
    num: 757,
    types: [
      "Poison",
      "Fire"
    ],
    abilities: {
      "0": "Corrosion",
      H: "Oblivious"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Salazzle"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 4.8,
    baseStats: {
      hp: 48,
      atk: 44,
      def: 40,
      spa: 71,
      spd: 40,
      spe: 77
    }
  },
  salazzle: {
    name: "Salazzle",
    num: 758,
    types: [
      "Poison",
      "Fire"
    ],
    abilities: {
      "0": "Corrosion",
      H: "Oblivious"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Salandit",
    evoLevel: 33,
    formes: [
      "Salazzle",
      "Salazzle-Totem"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 22.2,
    baseStats: {
      hp: 68,
      atk: 64,
      def: 60,
      spa: 111,
      spd: 60,
      spe: 117
    }
  },
  salazzletotem: {
    name: "Salazzle-Totem",
    num: 758,
    types: [
      "Poison",
      "Fire"
    ],
    abilities: {
      "0": "Corrosion"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    baseSpecies: "Salazzle",
    forme: "Totem",
    formes: [
      "Salazzle",
      "Salazzle-Totem"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 81,
    baseStats: {
      hp: 68,
      atk: 64,
      def: 60,
      spa: 111,
      spd: 60,
      spe: 117
    }
  },
  stufful: {
    name: "Stufful",
    num: 759,
    types: [
      "Normal",
      "Fighting"
    ],
    abilities: {
      "0": "Fluffy",
      "1": "Klutz",
      H: "Cute Charm"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Bewear"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.8,
    baseStats: {
      hp: 70,
      atk: 75,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 50
    }
  },
  bewear: {
    name: "Bewear",
    num: 760,
    types: [
      "Normal",
      "Fighting"
    ],
    abilities: {
      "0": "Fluffy",
      "1": "Klutz",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Stufful",
    evoLevel: 27,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 135,
    baseStats: {
      hp: 120,
      atk: 125,
      def: 80,
      spa: 55,
      spd: 60,
      spe: 60
    }
  },
  bounsweet: {
    name: "Bounsweet",
    num: 761,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      "1": "Oblivious",
      H: "Sweet Veil"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Steenee"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 3.2,
    baseStats: {
      hp: 42,
      atk: 30,
      def: 38,
      spa: 30,
      spd: 38,
      spe: 32
    }
  },
  steenee: {
    name: "Steenee",
    num: 762,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      "1": "Oblivious",
      H: "Sweet Veil"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Tsareena"
    ],
    prevo: "Bounsweet",
    evoLevel: 18,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 8.2,
    baseStats: {
      hp: 52,
      atk: 40,
      def: 48,
      spa: 40,
      spd: 48,
      spe: 62
    }
  },
  tsareena: {
    name: "Tsareena",
    num: 763,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard",
      "1": "Queenly Majesty",
      H: "Sweet Veil"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Steenee",
    evoType: "levelMove",
    evoMove: "Stomp",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 21.4,
    baseStats: {
      hp: 72,
      atk: 120,
      def: 98,
      spa: 50,
      spd: 98,
      spe: 72
    }
  },
  comfey: {
    name: "Comfey",
    num: 764,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Flower Veil",
      "1": "Triage",
      H: "Natural Cure"
    },
    eggGroups: [
      "Grass"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 0.3,
    baseStats: {
      hp: 51,
      atk: 52,
      def: 90,
      spa: 82,
      spd: 110,
      spe: 100
    }
  },
  oranguru: {
    name: "Oranguru",
    num: 765,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Telepathy",
      H: "Symbiosis"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 76,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 80,
      spa: 90,
      spd: 110,
      spe: 60
    }
  },
  passimian: {
    name: "Passimian",
    num: 766,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Receiver",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 82.8,
    baseStats: {
      hp: 100,
      atk: 120,
      def: 90,
      spa: 40,
      spd: 60,
      spe: 80
    }
  },
  wimpod: {
    name: "Wimpod",
    num: 767,
    types: [
      "Bug",
      "Water"
    ],
    abilities: {
      "0": "Wimp Out"
    },
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    evos: [
      "Golisopod"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 25,
      atk: 35,
      def: 40,
      spa: 20,
      spd: 30,
      spe: 80
    }
  },
  golisopod: {
    name: "Golisopod",
    num: 768,
    types: [
      "Bug",
      "Water"
    ],
    abilities: {
      "0": "Emergency Exit"
    },
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    prevo: "Wimpod",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 108,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 140,
      spa: 60,
      spd: 90,
      spe: 40
    }
  },
  sandygast: {
    name: "Sandygast",
    num: 769,
    types: [
      "Ghost",
      "Ground"
    ],
    abilities: {
      "0": "Water Compaction",
      H: "Sand Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Palossand"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 70,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 80,
      spa: 70,
      spd: 45,
      spe: 15
    }
  },
  palossand: {
    name: "Palossand",
    num: 770,
    types: [
      "Ghost",
      "Ground"
    ],
    abilities: {
      "0": "Water Compaction",
      H: "Sand Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Sandygast",
    evoLevel: 42,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 250,
    baseStats: {
      hp: 85,
      atk: 75,
      def: 110,
      spa: 100,
      spd: 75,
      spe: 35
    }
  },
  pyukumuku: {
    name: "Pyukumuku",
    num: 771,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Innards Out",
      H: "Unaware"
    },
    eggGroups: [
      "Water 1"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.2,
    baseStats: {
      hp: 55,
      atk: 60,
      def: 130,
      spa: 30,
      spd: 130,
      spe: 5
    }
  },
  typenull: {
    name: "Type: Null",
    num: 772,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Battle Armor"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Silvally"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 120.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 59
    }
  },
  silvally: {
    name: "Silvally",
    num: 773,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Type: Null",
    evoType: "levelFriendship",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallybug: {
    name: "Silvally-Bug",
    num: 773,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Bug",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Bug Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallydark: {
    name: "Silvally-Dark",
    num: 773,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Dark",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Dark Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallydragon: {
    name: "Silvally-Dragon",
    num: 773,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Dragon",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Dragon Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyelectric: {
    name: "Silvally-Electric",
    num: 773,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Electric",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Electric Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyfairy: {
    name: "Silvally-Fairy",
    num: 773,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Fairy",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Fairy Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyfighting: {
    name: "Silvally-Fighting",
    num: 773,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Fighting",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Fighting Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyfire: {
    name: "Silvally-Fire",
    num: 773,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Fire",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Fire Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyflying: {
    name: "Silvally-Flying",
    num: 773,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Flying",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Flying Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyghost: {
    name: "Silvally-Ghost",
    num: 773,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Ghost",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Ghost Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallygrass: {
    name: "Silvally-Grass",
    num: 773,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Grass",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Grass Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyground: {
    name: "Silvally-Ground",
    num: 773,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Ground",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Ground Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyice: {
    name: "Silvally-Ice",
    num: 773,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Ice",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Ice Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallypoison: {
    name: "Silvally-Poison",
    num: 773,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Poison",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Poison Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallypsychic: {
    name: "Silvally-Psychic",
    num: 773,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Psychic",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Psychic Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallyrock: {
    name: "Silvally-Rock",
    num: 773,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Rock",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Rock Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallysteel: {
    name: "Silvally-Steel",
    num: 773,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Steel",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Steel Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  silvallywater: {
    name: "Silvally-Water",
    num: 773,
    types: [
      "Water"
    ],
    abilities: {
      "0": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Silvally",
    forme: "Water",
    formes: [
      "Silvally",
      "Silvally-Fighting",
      "Silvally-Flying",
      "Silvally-Poison",
      "Silvally-Ground",
      "Silvally-Rock",
      "Silvally-Bug",
      "Silvally-Ghost",
      "Silvally-Steel",
      "Silvally-Fire",
      "Silvally-Water",
      "Silvally-Grass",
      "Silvally-Electric",
      "Silvally-Psychic",
      "Silvally-Ice",
      "Silvally-Dragon",
      "Silvally-Dark",
      "Silvally-Fairy"
    ],
    requiredItem: "Water Memory",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    }
  },
  minior: {
    name: "Minior",
    num: 774,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Shields Down"
    },
    eggGroups: [
      "Mineral"
    ],
    formes: [
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior"
    ],
    cosmeticFormes: [
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Indigo",
      "Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 100,
      def: 60,
      spa: 100,
      spd: 60,
      spe: 120
    }
  },
  miniormeteor: {
    name: "Minior-Meteor",
    num: 774,
    types: [
      "Rock",
      "Flying"
    ],
    abilities: {
      "0": "Shields Down"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Meteor",
    formes: [
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 40,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 100,
      spa: 60,
      spd: 100,
      spe: 60
    }
  },
  komala: {
    name: "Komala",
    num: 775,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Comatose"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.9,
    baseStats: {
      hp: 65,
      atk: 115,
      def: 65,
      spa: 75,
      spd: 95,
      spe: 65
    }
  },
  turtonator: {
    name: "Turtonator",
    num: 776,
    types: [
      "Fire",
      "Dragon"
    ],
    abilities: {
      "0": "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 212,
    baseStats: {
      hp: 60,
      atk: 78,
      def: 135,
      spa: 91,
      spd: 85,
      spe: 36
    }
  },
  togedemaru: {
    name: "Togedemaru",
    num: 777,
    types: [
      "Electric",
      "Steel"
    ],
    abilities: {
      "0": "Iron Barbs",
      "1": "Lightning Rod",
      H: "Sturdy"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    formes: [
      "Togedemaru",
      "Togedemaru-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.3,
    baseStats: {
      hp: 65,
      atk: 98,
      def: 63,
      spa: 40,
      spd: 73,
      spe: 96
    }
  },
  togedemarutotem: {
    name: "Togedemaru-Totem",
    num: 777,
    types: [
      "Electric",
      "Steel"
    ],
    abilities: {
      "0": "Sturdy"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    baseSpecies: "Togedemaru",
    forme: "Totem",
    formes: [
      "Togedemaru",
      "Togedemaru-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 65,
      atk: 98,
      def: 63,
      spa: 40,
      spd: 73,
      spe: 96
    }
  },
  mimikyu: {
    name: "Mimikyu",
    num: 778,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Disguise"
    },
    eggGroups: [
      "Amorphous"
    ],
    formes: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.7,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    }
  },
  mimikyubusted: {
    name: "Mimikyu-Busted",
    num: 778,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Disguise"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Mimikyu",
    forme: "Busted",
    formes: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.7,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    }
  },
  mimikyubustedtotem: {
    name: "Mimikyu-Busted-Totem",
    num: 778,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Disguise"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Mimikyu",
    forme: "Busted-Totem",
    formes: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.8,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    }
  },
  mimikyutotem: {
    name: "Mimikyu-Totem",
    num: 778,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Disguise"
    },
    eggGroups: [
      "Amorphous"
    ],
    baseSpecies: "Mimikyu",
    forme: "Totem",
    formes: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.8,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    }
  },
  bruxish: {
    name: "Bruxish",
    num: 779,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Dazzling",
      "1": "Strong Jaw",
      H: "Wonder Skin"
    },
    eggGroups: [
      "Water 2"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19,
    baseStats: {
      hp: 68,
      atk: 105,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 92
    }
  },
  drampa: {
    name: "Drampa",
    num: 780,
    types: [
      "Normal",
      "Dragon"
    ],
    abilities: {
      "0": "Berserk",
      "1": "Sap Sipper",
      H: "Cloud Nine"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 185,
    baseStats: {
      hp: 78,
      atk: 60,
      def: 85,
      spa: 135,
      spd: 91,
      spe: 36
    }
  },
  dhelmise: {
    name: "Dhelmise",
    num: 781,
    types: [
      "Ghost",
      "Grass"
    ],
    abilities: {
      "0": "Steelworker"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 210,
    baseStats: {
      hp: 70,
      atk: 131,
      def: 100,
      spa: 86,
      spd: 90,
      spe: 40
    }
  },
  jangmoo: {
    name: "Jangmo-o",
    num: 782,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Hakamo-o"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.7,
    baseStats: {
      hp: 45,
      atk: 55,
      def: 65,
      spa: 45,
      spd: 45,
      spe: 45
    }
  },
  hakamoo: {
    name: "Hakamo-o",
    num: 783,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Kommo-o"
    ],
    prevo: "Jangmo-o",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47,
    baseStats: {
      hp: 55,
      atk: 75,
      def: 90,
      spa: 65,
      spd: 70,
      spe: 65
    }
  },
  kommoo: {
    name: "Kommo-o",
    num: 784,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Hakamo-o",
    evoLevel: 45,
    formes: [
      "Kommo-o",
      "Kommo-o-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 78.2,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 125,
      spa: 100,
      spd: 105,
      spe: 85
    }
  },
  kommoototem: {
    name: "Kommo-o-Totem",
    num: 784,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Overcoat"
    },
    eggGroups: [
      "Dragon"
    ],
    baseSpecies: "Kommo-o",
    forme: "Totem",
    formes: [
      "Kommo-o",
      "Kommo-o-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 207.5,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 125,
      spa: 100,
      spd: 105,
      spe: 85
    }
  },
  tapukoko: {
    name: "Tapu Koko",
    num: 785,
    types: [
      "Electric",
      "Fairy"
    ],
    abilities: {
      "0": "Electric Surge",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 20.5,
    baseStats: {
      hp: 70,
      atk: 115,
      def: 85,
      spa: 95,
      spd: 75,
      spe: 130
    }
  },
  tapulele: {
    name: "Tapu Lele",
    num: 786,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Psychic Surge",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 18.6,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 75,
      spa: 130,
      spd: 115,
      spe: 95
    }
  },
  tapubulu: {
    name: "Tapu Bulu",
    num: 787,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Grassy Surge",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 45.5,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 115,
      spa: 85,
      spd: 95,
      spe: 75
    }
  },
  tapufini: {
    name: "Tapu Fini",
    num: 788,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Misty Surge",
      H: "Telepathy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 21.2,
    baseStats: {
      hp: 70,
      atk: 75,
      def: 115,
      spa: 95,
      spd: 130,
      spe: 85
    }
  },
  cosmog: {
    name: "Cosmog",
    num: 789,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Unaware"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Cosmoem"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.1,
    baseStats: {
      hp: 43,
      atk: 29,
      def: 31,
      spa: 29,
      spd: 31,
      spe: 37
    }
  },
  cosmoem: {
    name: "Cosmoem",
    num: 790,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Sturdy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Solgaleo",
      "Lunala"
    ],
    prevo: "Cosmog",
    evoLevel: 43,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 999.9,
    baseStats: {
      hp: 43,
      atk: 29,
      def: 131,
      spa: 29,
      spd: 131,
      spe: 37
    }
  },
  solgaleo: {
    name: "Solgaleo",
    num: 791,
    types: [
      "Psychic",
      "Steel"
    ],
    abilities: {
      "0": "Full Metal Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Cosmoem",
    evoLevel: 53,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 230,
    baseStats: {
      hp: 137,
      atk: 137,
      def: 107,
      spa: 113,
      spd: 89,
      spe: 97
    }
  },
  lunala: {
    name: "Lunala",
    num: 792,
    types: [
      "Psychic",
      "Ghost"
    ],
    abilities: {
      "0": "Shadow Shield"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Cosmoem",
    evoLevel: 53,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 120,
    baseStats: {
      hp: 137,
      atk: 113,
      def: 89,
      spa: 137,
      spd: 107,
      spe: 97
    }
  },
  nihilego: {
    name: "Nihilego",
    num: 793,
    types: [
      "Rock",
      "Poison"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 55.5,
    baseStats: {
      hp: 109,
      atk: 53,
      def: 47,
      spa: 127,
      spd: 131,
      spe: 103
    }
  },
  buzzwole: {
    name: "Buzzwole",
    num: 794,
    types: [
      "Bug",
      "Fighting"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 333.6,
    baseStats: {
      hp: 107,
      atk: 139,
      def: 139,
      spa: 53,
      spd: 53,
      spe: 79
    }
  },
  pheromosa: {
    name: "Pheromosa",
    num: 795,
    types: [
      "Bug",
      "Fighting"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 25,
    baseStats: {
      hp: 71,
      atk: 137,
      def: 37,
      spa: 137,
      spd: 37,
      spe: 151
    }
  },
  xurkitree: {
    name: "Xurkitree",
    num: 796,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100,
    baseStats: {
      hp: 83,
      atk: 89,
      def: 71,
      spa: 173,
      spd: 71,
      spe: 83
    }
  },
  celesteela: {
    name: "Celesteela",
    num: 797,
    types: [
      "Steel",
      "Flying"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 999.9,
    baseStats: {
      hp: 97,
      atk: 101,
      def: 103,
      spa: 107,
      spd: 101,
      spe: 61
    }
  },
  kartana: {
    name: "Kartana",
    num: 798,
    types: [
      "Grass",
      "Steel"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.1,
    baseStats: {
      hp: 59,
      atk: 181,
      def: 131,
      spa: 59,
      spd: 31,
      spe: 109
    }
  },
  guzzlord: {
    name: "Guzzlord",
    num: 799,
    types: [
      "Dark",
      "Dragon"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 888,
    baseStats: {
      hp: 223,
      atk: 101,
      def: 53,
      spa: 97,
      spd: 53,
      spe: 43
    }
  },
  necrozma: {
    name: "Necrozma",
    num: 800,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Prism Armor"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 230,
    baseStats: {
      hp: 97,
      atk: 107,
      def: 101,
      spa: 127,
      spd: 89,
      spe: 79
    }
  },
  necrozmadawnwings: {
    name: "Necrozma-Dawn-Wings",
    num: 800,
    types: [
      "Psychic",
      "Ghost"
    ],
    abilities: {
      "0": "Prism Armor"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Necrozma",
    forme: "Dawn-Wings",
    formes: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 350,
    baseStats: {
      hp: 97,
      atk: 113,
      def: 109,
      spa: 157,
      spd: 127,
      spe: 77
    }
  },
  necrozmaduskmane: {
    name: "Necrozma-Dusk-Mane",
    num: 800,
    types: [
      "Psychic",
      "Steel"
    ],
    abilities: {
      "0": "Prism Armor"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Necrozma",
    forme: "Dusk-Mane",
    formes: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 460,
    baseStats: {
      hp: 97,
      atk: 157,
      def: 127,
      spa: 113,
      spd: 109,
      spe: 77
    }
  },
  necrozmaultra: {
    name: "Necrozma-Ultra",
    num: 800,
    types: [
      "Psychic",
      "Dragon"
    ],
    abilities: {
      "0": "Neuroforce"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Necrozma",
    forme: "Ultra",
    formes: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    requiredItem: "Ultranecrozium Z",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 230,
    baseStats: {
      hp: 97,
      atk: 167,
      def: 97,
      spa: 167,
      spd: 97,
      spe: 129
    }
  },
  magearna: {
    name: "Magearna",
    num: 801,
    types: [
      "Steel",
      "Fairy"
    ],
    abilities: {
      "0": "Soul-Heart"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Magearna",
      "Magearna-Original"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 80.5,
    baseStats: {
      hp: 80,
      atk: 95,
      def: 115,
      spa: 130,
      spd: 115,
      spe: 65
    }
  },
  magearnaoriginal: {
    name: "Magearna-Original",
    num: 801,
    types: [
      "Steel",
      "Fairy"
    ],
    abilities: {
      "0": "Soul-Heart"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Magearna",
    forme: "Original",
    formes: [
      "Magearna",
      "Magearna-Original"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 80.5,
    baseStats: {
      hp: 80,
      atk: 95,
      def: 115,
      spa: 130,
      spd: 115,
      spe: 65
    }
  },
  marshadow: {
    name: "Marshadow",
    num: 802,
    types: [
      "Fighting",
      "Ghost"
    ],
    abilities: {
      "0": "Technician"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 22.2,
    baseStats: {
      hp: 90,
      atk: 125,
      def: 80,
      spa: 90,
      spd: 90,
      spe: 125
    }
  },
  poipole: {
    name: "Poipole",
    num: 803,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Naganadel"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.8,
    baseStats: {
      hp: 67,
      atk: 73,
      def: 67,
      spa: 73,
      spd: 67,
      spe: 73
    }
  },
  naganadel: {
    name: "Naganadel",
    num: 804,
    types: [
      "Poison",
      "Dragon"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Poipole",
    evoType: "levelMove",
    evoMove: "Dragon Pulse",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 150,
    baseStats: {
      hp: 73,
      atk: 73,
      def: 73,
      spa: 127,
      spd: 73,
      spe: 121
    }
  },
  stakataka: {
    name: "Stakataka",
    num: 805,
    types: [
      "Rock",
      "Steel"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 820,
    baseStats: {
      hp: 61,
      atk: 131,
      def: 211,
      spa: 53,
      spd: 101,
      spe: 13
    }
  },
  blacephalon: {
    name: "Blacephalon",
    num: 806,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Beast Boost"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 13,
    baseStats: {
      hp: 53,
      atk: 127,
      def: 53,
      spa: 151,
      spd: 79,
      spe: 107
    }
  },
  zeraora: {
    name: "Zeraora",
    num: 807,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Volt Absorb"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 44.5,
    baseStats: {
      hp: 88,
      atk: 112,
      def: 75,
      spa: 102,
      spd: 80,
      spe: 143
    }
  },
  meltan: {
    name: "Meltan",
    num: 808,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Magnet Pull"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 8,
    baseStats: {
      hp: 46,
      atk: 65,
      def: 65,
      spa: 55,
      spd: 35,
      spe: 34
    }
  },
  melmetal: {
    name: "Melmetal",
    num: 809,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Iron Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 800,
    baseStats: {
      hp: 135,
      atk: 143,
      def: 143,
      spa: 80,
      spd: 65,
      spe: 34
    }
  },
  melmetalgmax: {
    name: "Melmetal-Gmax",
    num: 809,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Iron Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Melmetal",
    forme: "Gmax",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0,
    baseStats: {
      hp: 135,
      atk: 143,
      def: 143,
      spa: 80,
      spd: 65,
      spe: 34
    }
  },
  grookey: {
    name: "Grookey",
    num: 810,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Grassy Surge"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Thwackey"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 5,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 50,
      spa: 40,
      spd: 40,
      spe: 65
    }
  },
  thwackey: {
    name: "Thwackey",
    num: 811,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Grassy Surge"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Rillaboom"
    ],
    prevo: "Grookey",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 14,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 70,
      spa: 55,
      spd: 60,
      spe: 80
    }
  },
  rillaboom: {
    name: "Rillaboom",
    num: 812,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Grassy Surge"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Thwackey",
    evoLevel: 35,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 90,
    baseStats: {
      hp: 100,
      atk: 125,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 85
    }
  },
  rillaboomgmax: {
    name: "Rillaboom-Gmax",
    num: 812,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Grassy Surge"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    baseSpecies: "Rillaboom",
    forme: "Gmax",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 100,
      atk: 125,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 85
    }
  },
  scorbunny: {
    name: "Scorbunny",
    num: 813,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Raboot"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 4.5,
    baseStats: {
      hp: 50,
      atk: 71,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 69
    }
  },
  raboot: {
    name: "Raboot",
    num: 814,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Cinderace"
    ],
    prevo: "Scorbunny",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9,
    baseStats: {
      hp: 65,
      atk: 86,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 94
    }
  },
  cinderace: {
    name: "Cinderace",
    num: 815,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Raboot",
    evoLevel: 35,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 33,
    baseStats: {
      hp: 80,
      atk: 116,
      def: 75,
      spa: 65,
      spd: 75,
      spe: 119
    }
  },
  cinderacegmax: {
    name: "Cinderace-Gmax",
    num: 815,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    baseSpecies: "Cinderace",
    forme: "Gmax",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 80,
      atk: 116,
      def: 75,
      spa: 65,
      spd: 75,
      spe: 119
    }
  },
  sobble: {
    name: "Sobble",
    num: 816,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sniper"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Drizzile"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 4,
    baseStats: {
      hp: 50,
      atk: 40,
      def: 40,
      spa: 70,
      spd: 40,
      spe: 70
    }
  },
  drizzile: {
    name: "Drizzile",
    num: 817,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sniper"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Inteleon"
    ],
    prevo: "Sobble",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 11.5,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 55,
      spa: 95,
      spd: 55,
      spe: 90
    }
  },
  inteleon: {
    name: "Inteleon",
    num: 818,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sniper"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Drizzile",
    evoLevel: 35,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 45.2,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 125,
      spd: 65,
      spe: 120
    }
  },
  inteleongmax: {
    name: "Inteleon-Gmax",
    num: 818,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Sniper"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    baseSpecies: "Inteleon",
    forme: "Gmax",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 125,
      spd: 65,
      spe: 120
    }
  },
  skwovet: {
    name: "Skwovet",
    num: 819,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cheek Pouch",
      H: "Gluttony"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Greedent"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 70,
      atk: 55,
      def: 55,
      spa: 35,
      spd: 35,
      spe: 25
    }
  },
  greedent: {
    name: "Greedent",
    num: 820,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Cheek Pouch",
      H: "Gluttony"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Skwovet",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 120,
      atk: 95,
      def: 95,
      spa: 55,
      spd: 75,
      spe: 20
    }
  },
  rookidee: {
    name: "Rookidee",
    num: 821,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Unnerve",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Corvisquire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.8,
    baseStats: {
      hp: 38,
      atk: 47,
      def: 35,
      spa: 33,
      spd: 35,
      spe: 57
    }
  },
  corvisquire: {
    name: "Corvisquire",
    num: 822,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Keen Eye",
      "1": "Unnerve",
      H: "Big Pecks"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Corviknight"
    ],
    prevo: "Rookidee",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 68,
      atk: 67,
      def: 55,
      spa: 43,
      spd: 55,
      spe: 77
    }
  },
  corviknight: {
    name: "Corviknight",
    num: 823,
    types: [
      "Flying",
      "Steel"
    ],
    abilities: {
      "0": "Pressure",
      "1": "Unnerve",
      H: "Mirror Armor"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Corvisquire",
    evoLevel: 38,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75,
    baseStats: {
      hp: 98,
      atk: 87,
      def: 105,
      spa: 53,
      spd: 85,
      spe: 67
    }
  },
  corviknightgmax: {
    name: "Corviknight-Gmax",
    num: 823,
    types: [
      "Flying",
      "Steel"
    ],
    abilities: {
      "0": "Pressure",
      "1": "Unnerve",
      H: "Mirror Armor"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Corviknight",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 98,
      atk: 87,
      def: 105,
      spa: 53,
      spd: 85,
      spe: 67
    }
  },
  blipbug: {
    name: "Blipbug",
    num: 824,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Compound Eyes",
      H: "Telepathy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Dottler"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 25,
      atk: 20,
      def: 20,
      spa: 25,
      spd: 45,
      spe: 45
    }
  },
  dottler: {
    name: "Dottler",
    num: 825,
    types: [
      "Bug",
      "Psychic"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Compound Eyes",
      H: "Telepathy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Orbeetle"
    ],
    prevo: "Blipbug",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.5,
    baseStats: {
      hp: 50,
      atk: 35,
      def: 80,
      spa: 50,
      spd: 90,
      spe: 30
    }
  },
  orbeetle: {
    name: "Orbeetle",
    num: 826,
    types: [
      "Bug",
      "Psychic"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Frisk",
      H: "Telepathy"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Dottler",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.8,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 110,
      spa: 80,
      spd: 120,
      spe: 90
    }
  },
  orbeetlegmax: {
    name: "Orbeetle-Gmax",
    num: 826,
    types: [
      "Bug",
      "Psychic"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Frisk",
      H: "Telepathy"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Orbeetle",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 110,
      spa: 80,
      spd: 120,
      spe: 90
    }
  },
  nickit: {
    name: "Nickit",
    num: 827,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Unburden",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Thievul"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.9,
    baseStats: {
      hp: 40,
      atk: 28,
      def: 28,
      spa: 47,
      spd: 52,
      spe: 50
    }
  },
  thievul: {
    name: "Thievul",
    num: 828,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Unburden",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Nickit",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.9,
    baseStats: {
      hp: 70,
      atk: 58,
      def: 58,
      spa: 87,
      spd: 92,
      spe: 90
    }
  },
  gossifleur: {
    name: "Gossifleur",
    num: 829,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Cotton Down",
      "1": "Regenerator",
      H: "Effect Spore"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Eldegoss"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.2,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 10
    }
  },
  eldegoss: {
    name: "Eldegoss",
    num: 830,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Cotton Down",
      "1": "Regenerator",
      H: "Effect Spore"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Gossifleur",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 60,
      atk: 50,
      def: 90,
      spa: 80,
      spd: 120,
      spe: 60
    }
  },
  wooloo: {
    name: "Wooloo",
    num: 831,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fluffy",
      "1": "Run Away",
      H: "Bulletproof"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dubwool"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 42,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 45,
      spe: 48
    }
  },
  dubwool: {
    name: "Dubwool",
    num: 832,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fluffy",
      "1": "Steadfast",
      H: "Bulletproof"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Wooloo",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 43,
    baseStats: {
      hp: 72,
      atk: 80,
      def: 100,
      spa: 60,
      spd: 90,
      spe: 88
    }
  },
  chewtle: {
    name: "Chewtle",
    num: 833,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Drednaw"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 50,
      atk: 64,
      def: 50,
      spa: 38,
      spd: 38,
      spe: 44
    }
  },
  drednaw: {
    name: "Drednaw",
    num: 834,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Chewtle",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 115.5,
    baseStats: {
      hp: 90,
      atk: 115,
      def: 90,
      spa: 48,
      spd: 68,
      spe: 74
    }
  },
  drednawgmax: {
    name: "Drednaw-Gmax",
    num: 834,
    types: [
      "Water",
      "Rock"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Drednaw",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 90,
      atk: 115,
      def: 90,
      spa: 48,
      spd: 68,
      spe: 74
    }
  },
  yamper: {
    name: "Yamper",
    num: 835,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Ball Fetch",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Boltund"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13.5,
    baseStats: {
      hp: 59,
      atk: 45,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 26
    }
  },
  boltund: {
    name: "Boltund",
    num: 836,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Strong Jaw",
      H: "Competitive"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Yamper",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34,
    baseStats: {
      hp: 69,
      atk: 90,
      def: 60,
      spa: 90,
      spd: 60,
      spe: 121
    }
  },
  rolycoly: {
    name: "Rolycoly",
    num: 837,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Steam Engine",
      "1": "Heatproof",
      H: "Flash Fire"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Carkol"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 30,
      atk: 40,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 30
    }
  },
  carkol: {
    name: "Carkol",
    num: 838,
    types: [
      "Rock",
      "Fire"
    ],
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Coalossal"
    ],
    prevo: "Rolycoly",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 78,
    baseStats: {
      hp: 80,
      atk: 60,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 50
    }
  },
  coalossal: {
    name: "Coalossal",
    num: 839,
    types: [
      "Rock",
      "Fire"
    ],
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Carkol",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 310.5,
    baseStats: {
      hp: 110,
      atk: 80,
      def: 120,
      spa: 80,
      spd: 90,
      spe: 30
    }
  },
  coalossalgmax: {
    name: "Coalossal-Gmax",
    num: 839,
    types: [
      "Rock",
      "Fire"
    ],
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Coalossal",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 110,
      atk: 80,
      def: 120,
      spa: 80,
      spd: 90,
      spe: 30
    }
  },
  applin: {
    name: "Applin",
    num: 840,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Bulletproof"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    evos: [
      "Flapple",
      "Appletun",
      "Dipplin"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.5,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 80,
      spa: 40,
      spd: 40,
      spe: 20
    }
  },
  flapple: {
    name: "Flapple",
    num: 841,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Hustle"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    prevo: "Applin",
    evoItem: "Tart Apple",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 95,
      spd: 60,
      spe: 70
    }
  },
  flapplegmax: {
    name: "Flapple-Gmax",
    num: 841,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Hustle"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    baseSpecies: "Flapple",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 95,
      spd: 60,
      spe: 70
    }
  },
  appletun: {
    name: "Appletun",
    num: 842,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    prevo: "Applin",
    evoItem: "Sweet Apple",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 110,
      atk: 85,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 30
    }
  },
  appletungmax: {
    name: "Appletun-Gmax",
    num: 842,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    baseSpecies: "Appletun",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 110,
      atk: 85,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 30
    }
  },
  silicobra: {
    name: "Silicobra",
    num: 843,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    evos: [
      "Sandaconda"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.6,
    baseStats: {
      hp: 52,
      atk: 57,
      def: 75,
      spa: 35,
      spd: 50,
      spe: 46
    }
  },
  sandaconda: {
    name: "Sandaconda",
    num: 844,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    prevo: "Silicobra",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 65.5,
    baseStats: {
      hp: 72,
      atk: 107,
      def: 125,
      spa: 65,
      spd: 70,
      spe: 71
    }
  },
  sandacondagmax: {
    name: "Sandaconda-Gmax",
    num: 844,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    baseSpecies: "Sandaconda",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 72,
      atk: 107,
      def: 125,
      spa: 65,
      spd: 70,
      spe: 71
    }
  },
  cramorant: {
    name: "Cramorant",
    num: 845,
    types: [
      "Flying",
      "Water"
    ],
    abilities: {
      "0": "Gulp Missile"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    formes: [
      "Cramorant",
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    }
  },
  cramorantgorging: {
    name: "Cramorant-Gorging",
    num: 845,
    types: [
      "Flying",
      "Water"
    ],
    abilities: {
      "0": "Gulp Missile"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    baseSpecies: "Cramorant",
    forme: "Gorging",
    formes: [
      "Cramorant",
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    }
  },
  cramorantgulping: {
    name: "Cramorant-Gulping",
    num: 845,
    types: [
      "Flying",
      "Water"
    ],
    abilities: {
      "0": "Gulp Missile"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    baseSpecies: "Cramorant",
    forme: "Gulping",
    formes: [
      "Cramorant",
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    }
  },
  arrokuda: {
    name: "Arrokuda",
    num: 846,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Propeller Tail"
    },
    eggGroups: [
      "Water 2"
    ],
    evos: [
      "Barraskewda"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 41,
      atk: 63,
      def: 40,
      spa: 40,
      spd: 30,
      spe: 66
    }
  },
  barraskewda: {
    name: "Barraskewda",
    num: 847,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      H: "Propeller Tail"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Arrokuda",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 61,
      atk: 123,
      def: 60,
      spa: 60,
      spd: 50,
      spe: 136
    }
  },
  toxel: {
    name: "Toxel",
    num: 848,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Rattled",
      "1": "Static",
      H: "Klutz"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 40,
      atk: 38,
      def: 35,
      spa: 54,
      spd: 35,
      spe: 40
    }
  },
  toxtricity: {
    name: "Toxtricity",
    num: 849,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Punk Rock",
      "1": "Plus",
      H: "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Toxel",
    evoLevel: 30,
    formes: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    }
  },
  toxtricitygmax: {
    name: "Toxtricity-Gmax",
    num: 849,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Punk Rock",
      "1": "Plus",
      H: "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Toxtricity",
    forme: "Gmax",
    formes: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    }
  },
  toxtricitylowkey: {
    name: "Toxtricity-Low-Key",
    num: 849,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Punk Rock",
      "1": "Minus",
      H: "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Toxel",
    evoLevel: 30,
    baseSpecies: "Toxtricity",
    forme: "Low-Key",
    formes: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    }
  },
  toxtricitylowkeygmax: {
    name: "Toxtricity-Low-Key-Gmax",
    num: 849,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Punk Rock",
      "1": "Minus",
      H: "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    baseSpecies: "Toxtricity",
    forme: "Low-Key-Gmax",
    formes: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    }
  },
  sizzlipede: {
    name: "Sizzlipede",
    num: 850,
    types: [
      "Fire",
      "Bug"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Centiskorch"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 45
    }
  },
  centiskorch: {
    name: "Centiskorch",
    num: 851,
    types: [
      "Fire",
      "Bug"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Sizzlipede",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 100,
      atk: 115,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 65
    }
  },
  centiskorchgmax: {
    name: "Centiskorch-Gmax",
    num: 851,
    types: [
      "Fire",
      "Bug"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    eggGroups: [
      "Bug"
    ],
    baseSpecies: "Centiskorch",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 100,
      atk: 115,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 65
    }
  },
  clobbopus: {
    name: "Clobbopus",
    num: 852,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Limber",
      H: "Technician"
    },
    eggGroups: [
      "Water 1",
      "Human-Like"
    ],
    evos: [
      "Grapploct"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 50,
      atk: 68,
      def: 60,
      spa: 50,
      spd: 50,
      spe: 32
    }
  },
  grapploct: {
    name: "Grapploct",
    num: 853,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Limber",
      H: "Technician"
    },
    eggGroups: [
      "Water 1",
      "Human-Like"
    ],
    prevo: "Clobbopus",
    evoType: "levelMove",
    evoMove: "Taunt",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 80,
      atk: 118,
      def: 90,
      spa: 70,
      spd: 80,
      spe: 42
    }
  },
  sinistea: {
    name: "Sinistea",
    num: 854,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    evos: [
      "Polteageist"
    ],
    formes: [
      "Sinistea",
      "Sinistea-Antique"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.2,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    }
  },
  sinisteaantique: {
    name: "Sinistea-Antique",
    num: 854,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Polteageist-Antique"
    ],
    baseSpecies: "Sinistea",
    forme: "Antique",
    formes: [
      "Sinistea",
      "Sinistea-Antique"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.2,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    }
  },
  polteageist: {
    name: "Polteageist",
    num: 855,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    prevo: "Sinistea",
    evoItem: "Cracked Pot",
    evoType: "useItem",
    formes: [
      "Polteageist",
      "Polteageist-Antique"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.4,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 65,
      spa: 134,
      spd: 114,
      spe: 70
    }
  },
  polteageistantique: {
    name: "Polteageist-Antique",
    num: 855,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Sinistea-Antique",
    evoItem: "Chipped Pot",
    evoType: "useItem",
    baseSpecies: "Polteageist",
    forme: "Antique",
    formes: [
      "Polteageist",
      "Polteageist-Antique"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.4,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 65,
      spa: 134,
      spd: 114,
      spe: 70
    }
  },
  hatenna: {
    name: "Hatenna",
    num: 856,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Hattrem"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 3.4,
    baseStats: {
      hp: 42,
      atk: 30,
      def: 45,
      spa: 56,
      spd: 53,
      spe: 39
    }
  },
  hattrem: {
    name: "Hattrem",
    num: 857,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Hatterene"
    ],
    prevo: "Hatenna",
    evoLevel: 32,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 4.8,
    baseStats: {
      hp: 57,
      atk: 40,
      def: 65,
      spa: 86,
      spd: 73,
      spe: 49
    }
  },
  hatterene: {
    name: "Hatterene",
    num: 858,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Hattrem",
    evoLevel: 42,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 5.1,
    baseStats: {
      hp: 57,
      atk: 90,
      def: 95,
      spa: 136,
      spd: 103,
      spe: 29
    }
  },
  hatterenegmax: {
    name: "Hatterene-Gmax",
    num: 858,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    eggGroups: [
      "Fairy"
    ],
    baseSpecies: "Hatterene",
    forme: "Gmax",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0,
    baseStats: {
      hp: 57,
      atk: 90,
      def: 95,
      spa: 136,
      spd: 103,
      spe: 29
    }
  },
  impidimp: {
    name: "Impidimp",
    num: 859,
    types: [
      "Dark",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    evos: [
      "Morgrem"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 5.5,
    baseStats: {
      hp: 45,
      atk: 45,
      def: 30,
      spa: 55,
      spd: 40,
      spe: 50
    }
  },
  morgrem: {
    name: "Morgrem",
    num: 860,
    types: [
      "Dark",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    evos: [
      "Grimmsnarl"
    ],
    prevo: "Impidimp",
    evoLevel: 32,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 12.5,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 45,
      spa: 75,
      spd: 55,
      spe: 70
    }
  },
  grimmsnarl: {
    name: "Grimmsnarl",
    num: 861,
    types: [
      "Dark",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    prevo: "Morgrem",
    evoLevel: 42,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 61,
    baseStats: {
      hp: 95,
      atk: 120,
      def: 65,
      spa: 95,
      spd: 75,
      spe: 60
    }
  },
  grimmsnarlgmax: {
    name: "Grimmsnarl-Gmax",
    num: 861,
    types: [
      "Dark",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    baseSpecies: "Grimmsnarl",
    forme: "Gmax",
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 0,
    baseStats: {
      hp: 95,
      atk: 120,
      def: 65,
      spa: 95,
      spd: 75,
      spe: 60
    }
  },
  obstagoon: {
    name: "Obstagoon",
    num: 862,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Guts",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Linoone-Galar",
    evoLevel: 35,
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 46,
    baseStats: {
      hp: 93,
      atk: 90,
      def: 101,
      spa: 60,
      spd: 81,
      spe: 95
    }
  },
  perrserker: {
    name: "Perrserker",
    num: 863,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Battle Armor",
      "1": "Tough Claws",
      H: "Steely Spirit"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Meowth-Galar",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 100,
      spa: 50,
      spd: 60,
      spe: 50
    }
  },
  cursola: {
    name: "Cursola",
    num: 864,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Weak Armor",
      H: "Perish Body"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Corsola-Galar",
    evoLevel: 38,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 0.4,
    baseStats: {
      hp: 60,
      atk: 95,
      def: 50,
      spa: 145,
      spd: 130,
      spe: 30
    }
  },
  sirfetchd: {
    name: "Sirfetch’d",
    num: 865,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Steadfast",
      H: "Scrappy"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    prevo: "Farfetch’d-Galar",
    evoType: "other",
    evoCondition: "Land 3 critical hits in 1 battle",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 117,
    baseStats: {
      hp: 62,
      atk: 135,
      def: 95,
      spa: 68,
      spd: 82,
      spe: 65
    }
  },
  mrrime: {
    name: "Mr. Rime",
    num: 866,
    types: [
      "Ice",
      "Psychic"
    ],
    abilities: {
      "0": "Tangled Feet",
      "1": "Screen Cleaner",
      H: "Ice Body"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Mr. Mime-Galar",
    evoLevel: 42,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58.2,
    baseStats: {
      hp: 80,
      atk: 85,
      def: 75,
      spa: 110,
      spd: 100,
      spe: 70
    }
  },
  runerigus: {
    name: "Runerigus",
    num: 867,
    types: [
      "Ground",
      "Ghost"
    ],
    abilities: {
      "0": "Wandering Spirit"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    prevo: "Yamask-Galar",
    evoType: "other",
    evoCondition: "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 66.6,
    baseStats: {
      hp: 58,
      atk: 95,
      def: 145,
      spa: 50,
      spd: 105,
      spe: 30
    }
  },
  milcery: {
    name: "Milcery",
    num: 868,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    evos: [
      "Alcremie"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.3,
    baseStats: {
      hp: 45,
      atk: 40,
      def: 40,
      spa: 50,
      spd: 61,
      spe: 34
    }
  },
  alcremie: {
    name: "Alcremie",
    num: 869,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    prevo: "Milcery",
    evoType: "other",
    evoCondition: "spin while holding a Sweet",
    cosmeticFormes: [
      "Ruby-Cream",
      "Matcha-Cream",
      "Mint-Cream",
      "Lemon-Cream",
      "Salted-Cream",
      "Ruby-Swirl",
      "Caramel-Swirl",
      "Rainbow-Swirl"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.5,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 121,
      spe: 64
    }
  },
  alcremiegmax: {
    name: "Alcremie-Gmax",
    num: 869,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    baseSpecies: "Alcremie",
    forme: "Gmax",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 121,
      spe: 64
    }
  },
  falinks: {
    name: "Falinks",
    num: 870,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Battle Armor",
      H: "Defiant"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 62,
    baseStats: {
      hp: 65,
      atk: 100,
      def: 100,
      spa: 70,
      spd: 60,
      spe: 75
    }
  },
  pincurchin: {
    name: "Pincurchin",
    num: 871,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Lightning Rod",
      H: "Electric Surge"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 48,
      atk: 101,
      def: 95,
      spa: 91,
      spd: 85,
      spe: 15
    }
  },
  snom: {
    name: "Snom",
    num: 872,
    types: [
      "Ice",
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Ice Scales"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Frosmoth"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.8,
    baseStats: {
      hp: 30,
      atk: 25,
      def: 35,
      spa: 45,
      spd: 30,
      spe: 20
    }
  },
  frosmoth: {
    name: "Frosmoth",
    num: 873,
    types: [
      "Ice",
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      H: "Ice Scales"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Snom",
    evoType: "levelFriendship",
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42,
    baseStats: {
      hp: 70,
      atk: 65,
      def: 60,
      spa: 125,
      spd: 90,
      spe: 65
    }
  },
  stonjourner: {
    name: "Stonjourner",
    num: 874,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Power Spot"
    },
    eggGroups: [
      "Mineral"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 520,
    baseStats: {
      hp: 100,
      atk: 125,
      def: 135,
      spa: 20,
      spd: 20,
      spe: 70
    }
  },
  eiscue: {
    name: "Eiscue",
    num: 875,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Ice Face"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    formes: [
      "Eiscue",
      "Eiscue-Noice"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 89,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 110,
      spa: 65,
      spd: 90,
      spe: 50
    }
  },
  eiscuenoice: {
    name: "Eiscue-Noice",
    num: 875,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Ice Face"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    baseSpecies: "Eiscue",
    forme: "Noice",
    formes: [
      "Eiscue",
      "Eiscue-Noice"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 89,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 70,
      spa: 65,
      spd: 50,
      spe: 130
    }
  },
  indeedee: {
    name: "Indeedee",
    num: 876,
    types: [
      "Psychic",
      "Normal"
    ],
    abilities: {
      "0": "Inner Focus",
      "1": "Synchronize",
      H: "Psychic Surge"
    },
    eggGroups: [
      "Fairy"
    ],
    formes: [
      "Indeedee",
      "Indeedee-F"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 28,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 55,
      spa: 105,
      spd: 95,
      spe: 95
    }
  },
  indeedeef: {
    name: "Indeedee-F",
    num: 876,
    types: [
      "Psychic",
      "Normal"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Synchronize",
      H: "Psychic Surge"
    },
    eggGroups: [
      "Fairy"
    ],
    baseSpecies: "Indeedee",
    forme: "F",
    formes: [
      "Indeedee",
      "Indeedee-F"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 28,
    baseStats: {
      hp: 70,
      atk: 55,
      def: 65,
      spa: 95,
      spd: 105,
      spe: 85
    }
  },
  morpeko: {
    name: "Morpeko",
    num: 877,
    types: [
      "Electric",
      "Dark"
    ],
    abilities: {
      "0": "Hunger Switch"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    formes: [
      "Morpeko",
      "Morpeko-Hangry"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 58,
      atk: 95,
      def: 58,
      spa: 70,
      spd: 58,
      spe: 97
    }
  },
  morpekohangry: {
    name: "Morpeko-Hangry",
    num: 877,
    types: [
      "Electric",
      "Dark"
    ],
    abilities: {
      "0": "Hunger Switch"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    baseSpecies: "Morpeko",
    forme: "Hangry",
    formes: [
      "Morpeko",
      "Morpeko-Hangry"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 58,
      atk: 95,
      def: 58,
      spa: 70,
      spd: 58,
      spe: 97
    }
  },
  cufant: {
    name: "Cufant",
    num: 878,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Sheer Force",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Field",
      "Mineral"
    ],
    evos: [
      "Copperajah"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 100,
    baseStats: {
      hp: 72,
      atk: 80,
      def: 49,
      spa: 40,
      spd: 49,
      spe: 40
    }
  },
  copperajah: {
    name: "Copperajah",
    num: 879,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Sheer Force",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Field",
      "Mineral"
    ],
    prevo: "Cufant",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 650,
    baseStats: {
      hp: 122,
      atk: 130,
      def: 69,
      spa: 80,
      spd: 69,
      spe: 30
    }
  },
  copperajahgmax: {
    name: "Copperajah-Gmax",
    num: 879,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Sheer Force",
      H: "Heavy Metal"
    },
    eggGroups: [
      "Field",
      "Mineral"
    ],
    baseSpecies: "Copperajah",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 122,
      atk: 130,
      def: 69,
      spa: 80,
      spd: 69,
      spe: 30
    }
  },
  dracozolt: {
    name: "Dracozolt",
    num: 880,
    types: [
      "Electric",
      "Dragon"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Hustle",
      H: "Sand Rush"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 190,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 90,
      spa: 80,
      spd: 70,
      spe: 75
    }
  },
  arctozolt: {
    name: "Arctozolt",
    num: 881,
    types: [
      "Electric",
      "Ice"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Static",
      H: "Slush Rush"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 150,
    baseStats: {
      hp: 90,
      atk: 100,
      def: 90,
      spa: 90,
      spd: 80,
      spe: 55
    }
  },
  dracovish: {
    name: "Dracovish",
    num: 882,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Strong Jaw",
      H: "Sand Rush"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 215,
    baseStats: {
      hp: 90,
      atk: 90,
      def: 100,
      spa: 70,
      spd: 80,
      spe: 75
    }
  },
  arctovish: {
    name: "Arctovish",
    num: 883,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Ice Body",
      H: "Slush Rush"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 175,
    baseStats: {
      hp: 90,
      atk: 90,
      def: 100,
      spa: 80,
      spd: 90,
      spe: 55
    }
  },
  duraludon: {
    name: "Duraludon",
    num: 884,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Light Metal",
      "1": "Heavy Metal",
      H: "Stalwart"
    },
    eggGroups: [
      "Mineral",
      "Dragon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 115,
      spa: 120,
      spd: 50,
      spe: 85
    }
  },
  duraludongmax: {
    name: "Duraludon-Gmax",
    num: 884,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Light Metal",
      "1": "Heavy Metal",
      H: "Stalwart"
    },
    eggGroups: [
      "Mineral",
      "Dragon"
    ],
    baseSpecies: "Duraludon",
    forme: "Gmax",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 115,
      spa: 120,
      spd: 50,
      spe: 85
    }
  },
  dreepy: {
    name: "Dreepy",
    num: 885,
    types: [
      "Dragon",
      "Ghost"
    ],
    abilities: {
      "0": "Clear Body",
      "1": "Infiltrator",
      H: "Cursed Body"
    },
    eggGroups: [
      "Amorphous",
      "Dragon"
    ],
    evos: [
      "Drakloak"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 28,
      atk: 60,
      def: 30,
      spa: 40,
      spd: 30,
      spe: 82
    }
  },
  drakloak: {
    name: "Drakloak",
    num: 886,
    types: [
      "Dragon",
      "Ghost"
    ],
    abilities: {
      "0": "Clear Body",
      "1": "Infiltrator",
      H: "Cursed Body"
    },
    eggGroups: [
      "Amorphous",
      "Dragon"
    ],
    evos: [
      "Dragapult"
    ],
    prevo: "Dreepy",
    evoLevel: 50,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 68,
      atk: 80,
      def: 50,
      spa: 60,
      spd: 50,
      spe: 102
    }
  },
  dragapult: {
    name: "Dragapult",
    num: 887,
    types: [
      "Dragon",
      "Ghost"
    ],
    abilities: {
      "0": "Clear Body",
      "1": "Infiltrator",
      H: "Cursed Body"
    },
    eggGroups: [
      "Amorphous",
      "Dragon"
    ],
    prevo: "Drakloak",
    evoLevel: 60,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50,
    baseStats: {
      hp: 88,
      atk: 120,
      def: 75,
      spa: 100,
      spd: 75,
      spe: 142
    }
  },
  zacian: {
    name: "Zacian",
    num: 888,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Intrepid Sword"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Zacian",
      "Zacian-Crowned"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 110,
    baseStats: {
      hp: 92,
      atk: 120,
      def: 115,
      spa: 80,
      spd: 115,
      spe: 138
    }
  },
  zaciancrowned: {
    name: "Zacian-Crowned",
    num: 888,
    types: [
      "Fairy",
      "Steel"
    ],
    abilities: {
      "0": "Intrepid Sword"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zacian",
    forme: "Crowned",
    formes: [
      "Zacian",
      "Zacian-Crowned"
    ],
    requiredItem: "Rusted Sword",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 355,
    baseStats: {
      hp: 92,
      atk: 150,
      def: 115,
      spa: 80,
      spd: 115,
      spe: 148
    }
  },
  zamazenta: {
    name: "Zamazenta",
    num: 889,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Dauntless Shield"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Zamazenta",
      "Zamazenta-Crowned"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 210,
    baseStats: {
      hp: 92,
      atk: 120,
      def: 115,
      spa: 80,
      spd: 115,
      spe: 138
    }
  },
  zamazentacrowned: {
    name: "Zamazenta-Crowned",
    num: 889,
    types: [
      "Fighting",
      "Steel"
    ],
    abilities: {
      "0": "Dauntless Shield"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zamazenta",
    forme: "Crowned",
    formes: [
      "Zamazenta",
      "Zamazenta-Crowned"
    ],
    requiredItem: "Rusted Shield",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 785,
    baseStats: {
      hp: 92,
      atk: 120,
      def: 140,
      spa: 80,
      spd: 140,
      spe: 128
    }
  },
  eternatus: {
    name: "Eternatus",
    num: 890,
    types: [
      "Poison",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Eternatus",
      "Eternatus-Eternamax"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 950,
    baseStats: {
      hp: 140,
      atk: 85,
      def: 95,
      spa: 145,
      spd: 95,
      spe: 130
    }
  },
  eternatuseternamax: {
    name: "Eternatus-Eternamax",
    num: 890,
    types: [
      "Poison",
      "Dragon"
    ],
    abilities: {
      "0": "Pressure"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Eternatus",
    forme: "Eternamax",
    formes: [
      "Eternatus",
      "Eternatus-Eternamax"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0,
    baseStats: {
      hp: 255,
      atk: 115,
      def: 250,
      spa: 125,
      spd: 250,
      spe: 130
    }
  },
  kubfu: {
    name: "Kubfu",
    num: 891,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Inner Focus"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Urshifu",
      "Urshifu-Rapid-Strike"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 60,
      spa: 53,
      spd: 50,
      spe: 72
    }
  },
  urshifu: {
    name: "Urshifu",
    num: 892,
    types: [
      "Fighting",
      "Dark"
    ],
    abilities: {
      "0": "Unseen Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Kubfu",
    evoType: "other",
    evoCondition: "Defeat the Single Strike Tower",
    formes: [
      "Urshifu",
      "Urshifu-Rapid-Strike"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 105,
    baseStats: {
      hp: 100,
      atk: 130,
      def: 100,
      spa: 63,
      spd: 60,
      spe: 97
    }
  },
  urshifugmax: {
    name: "Urshifu-Gmax",
    num: 892,
    types: [
      "Fighting",
      "Dark"
    ],
    abilities: {
      "0": "Unseen Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Urshifu",
    forme: "Gmax",
    formes: [
      "Urshifu",
      "Urshifu-Rapid-Strike"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 0,
    baseStats: {
      hp: 100,
      atk: 130,
      def: 100,
      spa: 63,
      spd: 60,
      spe: 97
    }
  },
  urshifurapidstrike: {
    name: "Urshifu-Rapid-Strike",
    num: 892,
    types: [
      "Fighting",
      "Water"
    ],
    abilities: {
      "0": "Unseen Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Kubfu",
    evoType: "other",
    evoCondition: "Defeat the Rapid Strike Tower",
    baseSpecies: "Urshifu",
    forme: "Rapid-Strike",
    formes: [
      "Urshifu",
      "Urshifu-Rapid-Strike"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 105,
    baseStats: {
      hp: 100,
      atk: 130,
      def: 100,
      spa: 63,
      spd: 60,
      spe: 97
    }
  },
  urshifurapidstrikegmax: {
    name: "Urshifu-Rapid-Strike-Gmax",
    num: 892,
    types: [
      "Fighting",
      "Water"
    ],
    abilities: {
      "0": "Unseen Fist"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Urshifu",
    forme: "Rapid-Strike-Gmax",
    formes: [
      "Urshifu",
      "Urshifu-Rapid-Strike"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 105,
    baseStats: {
      hp: 100,
      atk: 130,
      def: 100,
      spa: 63,
      spd: 60,
      spe: 97
    }
  },
  zarude: {
    name: "Zarude",
    num: 893,
    types: [
      "Dark",
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Zarude",
      "Zarude-Dada"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 70,
    baseStats: {
      hp: 105,
      atk: 120,
      def: 105,
      spa: 70,
      spd: 95,
      spe: 105
    }
  },
  zarudedada: {
    name: "Zarude-Dada",
    num: 893,
    types: [
      "Dark",
      "Grass"
    ],
    abilities: {
      "0": "Leaf Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zarude",
    forme: "Dada",
    formes: [
      "Zarude",
      "Zarude-Dada"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 70,
    baseStats: {
      hp: 105,
      atk: 120,
      def: 105,
      spa: 70,
      spd: 95,
      spe: 105
    }
  },
  regieleki: {
    name: "Regieleki",
    num: 894,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Transistor"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 145,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 50,
      spa: 100,
      spd: 50,
      spe: 200
    }
  },
  regidrago: {
    name: "Regidrago",
    num: 895,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Dragon's Maw"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 200,
    baseStats: {
      hp: 200,
      atk: 100,
      def: 50,
      spa: 100,
      spd: 50,
      spe: 80
    }
  },
  glastrier: {
    name: "Glastrier",
    num: 896,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Chilling Neigh"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 800,
    baseStats: {
      hp: 100,
      atk: 145,
      def: 130,
      spa: 65,
      spd: 110,
      spe: 30
    }
  },
  spectrier: {
    name: "Spectrier",
    num: 897,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Grim Neigh"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 44.5,
    baseStats: {
      hp: 100,
      atk: 65,
      def: 60,
      spa: 145,
      spd: 80,
      spe: 130
    }
  },
  calyrex: {
    name: "Calyrex",
    num: 898,
    types: [
      "Psychic",
      "Grass"
    ],
    abilities: {
      "0": "Unnerve"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Calyrex",
      "Calyrex-Ice",
      "Calyrex-Shadow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 7.7,
    baseStats: {
      hp: 100,
      atk: 80,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 80
    }
  },
  calyrexice: {
    name: "Calyrex-Ice",
    num: 898,
    types: [
      "Psychic",
      "Ice"
    ],
    abilities: {
      "0": "As One (Glastrier)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Calyrex",
    forme: "Ice",
    formes: [
      "Calyrex",
      "Calyrex-Ice",
      "Calyrex-Shadow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 809.1,
    baseStats: {
      hp: 100,
      atk: 165,
      def: 150,
      spa: 85,
      spd: 130,
      spe: 50
    }
  },
  calyrexshadow: {
    name: "Calyrex-Shadow",
    num: 898,
    types: [
      "Psychic",
      "Ghost"
    ],
    abilities: {
      "0": "As One (Spectrier)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Calyrex",
    forme: "Shadow",
    formes: [
      "Calyrex",
      "Calyrex-Ice",
      "Calyrex-Shadow"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 53.6,
    baseStats: {
      hp: 100,
      atk: 85,
      def: 80,
      spa: 165,
      spd: 100,
      spe: 150
    }
  },
  wyrdeer: {
    name: "Wyrdeer",
    num: 899,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Frisk",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Stantler",
    evoType: "other",
    evoCondition: "Use Agile style Psyshield Bash 20 times",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 95.1,
    baseStats: {
      hp: 103,
      atk: 105,
      def: 72,
      spa: 105,
      spd: 75,
      spe: 65
    }
  },
  kleavor: {
    name: "Kleavor",
    num: 900,
    types: [
      "Bug",
      "Rock"
    ],
    abilities: {
      "0": "Swarm",
      "1": "Sheer Force",
      H: "Sharpness"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Scyther",
    evoType: "other",
    evoCondition: "Black Augurite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 89,
    baseStats: {
      hp: 70,
      atk: 135,
      def: 95,
      spa: 45,
      spd: 70,
      spe: 85
    }
  },
  ursaluna: {
    name: "Ursaluna",
    num: 901,
    types: [
      "Ground",
      "Normal"
    ],
    abilities: {
      "0": "Guts",
      "1": "Bulletproof",
      H: "Unnerve"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Ursaring",
    evoType: "other",
    evoCondition: "Peat Block when there's a full moon",
    formes: [
      "Ursaluna",
      "Ursaluna-Bloodmoon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 290,
    baseStats: {
      hp: 130,
      atk: 140,
      def: 105,
      spa: 45,
      spd: 80,
      spe: 50
    }
  },
  ursalunabloodmoon: {
    name: "Ursaluna-Bloodmoon",
    num: 901,
    types: [
      "Ground",
      "Normal"
    ],
    abilities: {
      "0": "Mind's Eye"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Ursaluna",
    forme: "Bloodmoon",
    formes: [
      "Ursaluna",
      "Ursaluna-Bloodmoon"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 333,
    baseStats: {
      hp: 113,
      atk: 70,
      def: 120,
      spa: 135,
      spd: 65,
      spe: 52
    }
  },
  basculegion: {
    name: "Basculegion",
    num: 902,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Basculin-White-Striped",
    evoType: "other",
    evoCondition: "Receive 294+ recoil without fainting",
    formes: [
      "Basculegion",
      "Basculegion-F"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 110,
    baseStats: {
      hp: 120,
      atk: 112,
      def: 65,
      spa: 80,
      spd: 75,
      spe: 78
    }
  },
  basculegionf: {
    name: "Basculegion-F",
    num: 902,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Basculin-White-Striped",
    evoType: "other",
    evoCondition: "Receive 294+ recoil without fainting",
    baseSpecies: "Basculegion",
    forme: "F",
    formes: [
      "Basculegion",
      "Basculegion-F"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 110,
    baseStats: {
      hp: 120,
      atk: 92,
      def: 65,
      spa: 100,
      spd: 75,
      spe: 78
    }
  },
  sneasler: {
    name: "Sneasler",
    num: 903,
    types: [
      "Fighting",
      "Poison"
    ],
    abilities: {
      "0": "Pressure",
      "1": "Unburden",
      H: "Poison Touch"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sneasel-Hisui",
    evoItem: "Razor Claw",
    evoType: "levelHold",
    evoCondition: "during the day",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 43,
    baseStats: {
      hp: 80,
      atk: 130,
      def: 60,
      spa: 40,
      spd: 80,
      spe: 120
    }
  },
  overqwil: {
    name: "Overqwil",
    num: 904,
    types: [
      "Dark",
      "Poison"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Swift Swim",
      H: "Intimidate"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Qwilfish-Hisui",
    evoType: "other",
    evoCondition: "Use Strong style Barb Barrage 20 times",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60.5,
    baseStats: {
      hp: 85,
      atk: 115,
      def: 95,
      spa: 65,
      spd: 65,
      spe: 85
    }
  },
  enamorus: {
    name: "Enamorus",
    num: 905,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Cute Charm",
      H: "Contrary"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Enamorus",
      "Enamorus-Therian"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 48,
    baseStats: {
      hp: 74,
      atk: 115,
      def: 70,
      spa: 135,
      spd: 80,
      spe: 106
    }
  },
  enamorustherian: {
    name: "Enamorus-Therian",
    num: 905,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Overcoat"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Enamorus",
    forme: "Therian",
    formes: [
      "Enamorus",
      "Enamorus-Therian"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 48,
    baseStats: {
      hp: 74,
      atk: 115,
      def: 110,
      spa: 135,
      spd: 100,
      spe: 46
    }
  },
  sprigatito: {
    name: "Sprigatito",
    num: 906,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Protean"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Floragato"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 4.1,
    baseStats: {
      hp: 40,
      atk: 61,
      def: 54,
      spa: 45,
      spd: 45,
      spe: 65
    }
  },
  floragato: {
    name: "Floragato",
    num: 907,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Protean"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Meowscarada"
    ],
    prevo: "Sprigatito",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12.2,
    baseStats: {
      hp: 61,
      atk: 80,
      def: 63,
      spa: 60,
      spd: 63,
      spe: 83
    }
  },
  meowscarada: {
    name: "Meowscarada",
    num: 908,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Overgrow",
      H: "Protean"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Floragato",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 31.2,
    baseStats: {
      hp: 76,
      atk: 110,
      def: 70,
      spa: 81,
      spd: 70,
      spe: 123
    }
  },
  fuecoco: {
    name: "Fuecoco",
    num: 909,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Unaware"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Crocalor"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 9.8,
    baseStats: {
      hp: 67,
      atk: 45,
      def: 59,
      spa: 63,
      spd: 40,
      spe: 36
    }
  },
  crocalor: {
    name: "Crocalor",
    num: 910,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Blaze",
      H: "Unaware"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Skeledirge"
    ],
    prevo: "Fuecoco",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 30.7,
    baseStats: {
      hp: 81,
      atk: 55,
      def: 78,
      spa: 90,
      spd: 58,
      spe: 49
    }
  },
  skeledirge: {
    name: "Skeledirge",
    num: 911,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Blaze",
      H: "Unaware"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Crocalor",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 326.5,
    baseStats: {
      hp: 104,
      atk: 75,
      def: 100,
      spa: 110,
      spd: 75,
      spe: 66
    }
  },
  quaxly: {
    name: "Quaxly",
    num: 912,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Moxie"
    },
    eggGroups: [
      "Flying",
      "Water 1"
    ],
    evos: [
      "Quaxwell"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.1,
    baseStats: {
      hp: 55,
      atk: 65,
      def: 45,
      spa: 50,
      spd: 45,
      spe: 50
    }
  },
  quaxwell: {
    name: "Quaxwell",
    num: 913,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Torrent",
      H: "Moxie"
    },
    eggGroups: [
      "Flying",
      "Water 1"
    ],
    evos: [
      "Quaquaval"
    ],
    prevo: "Quaxly",
    evoLevel: 16,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 21.5,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 65,
      spd: 60,
      spe: 65
    }
  },
  quaquaval: {
    name: "Quaquaval",
    num: 914,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Torrent",
      H: "Moxie"
    },
    eggGroups: [
      "Flying",
      "Water 1"
    ],
    prevo: "Quaxwell",
    evoLevel: 36,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 61.9,
    baseStats: {
      hp: 85,
      atk: 120,
      def: 80,
      spa: 85,
      spd: 75,
      spe: 85
    }
  },
  lechonk: {
    name: "Lechonk",
    num: 915,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Aroma Veil",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Oinkologne",
      "Oinkologne-F"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.2,
    baseStats: {
      hp: 54,
      atk: 45,
      def: 40,
      spa: 35,
      spd: 45,
      spe: 35
    }
  },
  oinkologne: {
    name: "Oinkologne",
    num: 916,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Lingering Aroma",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Lechonk",
    evoLevel: 18,
    formes: [
      "Oinkologne",
      "Oinkologne-F"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 120,
    baseStats: {
      hp: 110,
      atk: 100,
      def: 75,
      spa: 59,
      spd: 80,
      spe: 65
    }
  },
  oinkolognef: {
    name: "Oinkologne-F",
    num: 916,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Aroma Veil",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Lechonk",
    evoLevel: 18,
    baseSpecies: "Oinkologne",
    forme: "F",
    formes: [
      "Oinkologne",
      "Oinkologne-F"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 120,
    baseStats: {
      hp: 115,
      atk: 90,
      def: 70,
      spa: 59,
      spd: 90,
      spe: 65
    }
  },
  tarountula: {
    name: "Tarountula",
    num: 917,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Insomnia",
      H: "Stakeout"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Spidops"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 35,
      atk: 41,
      def: 45,
      spa: 29,
      spd: 40,
      spe: 20
    }
  },
  spidops: {
    name: "Spidops",
    num: 918,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Insomnia",
      H: "Stakeout"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Tarountula",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16.5,
    baseStats: {
      hp: 60,
      atk: 79,
      def: 92,
      spa: 52,
      spd: 86,
      spe: 35
    }
  },
  nymble: {
    name: "Nymble",
    num: 919,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Swarm",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Lokix"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 33,
      atk: 46,
      def: 40,
      spa: 21,
      spd: 25,
      spe: 45
    }
  },
  lokix: {
    name: "Lokix",
    num: 920,
    types: [
      "Bug",
      "Dark"
    ],
    abilities: {
      "0": "Swarm",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Nymble",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 71,
      atk: 102,
      def: 78,
      spa: 52,
      spd: 55,
      spe: 92
    }
  },
  pawmi: {
    name: "Pawmi",
    num: 921,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Static",
      "1": "Natural Cure",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pawmo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 20,
      spa: 40,
      spd: 25,
      spe: 60
    }
  },
  pawmo: {
    name: "Pawmo",
    num: 922,
    types: [
      "Electric",
      "Fighting"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Natural Cure",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pawmot"
    ],
    prevo: "Pawmi",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 60,
      atk: 75,
      def: 40,
      spa: 50,
      spd: 40,
      spe: 85
    }
  },
  pawmot: {
    name: "Pawmot",
    num: 923,
    types: [
      "Electric",
      "Fighting"
    ],
    abilities: {
      "0": "Volt Absorb",
      "1": "Natural Cure",
      H: "Iron Fist"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pawmo",
    evoType: "other",
    evoCondition: "walk 1000 steps in Let's Go",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 41,
    baseStats: {
      hp: 70,
      atk: 115,
      def: 70,
      spa: 70,
      spd: 60,
      spe: 105
    }
  },
  tandemaus: {
    name: "Tandemaus",
    num: 924,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Run Away",
      "1": "Pickup",
      H: "Own Tempo"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    evos: [
      "Maushold",
      "Maushold-Four"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.8,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 45,
      spa: 40,
      spd: 45,
      spe: 75
    }
  },
  maushold: {
    name: "Maushold",
    num: 925,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Friend Guard",
      "1": "Cheek Pouch",
      H: "Technician"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Tandemaus",
    evoLevel: 25,
    formes: [
      "Maushold",
      "Maushold-Four"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 2.3,
    baseStats: {
      hp: 74,
      atk: 75,
      def: 70,
      spa: 65,
      spd: 75,
      spe: 111
    }
  },
  mausholdfour: {
    name: "Maushold-Four",
    num: 925,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Friend Guard",
      "1": "Cheek Pouch",
      H: "Technician"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Tandemaus",
    evoLevel: 25,
    baseSpecies: "Maushold",
    forme: "Four",
    formes: [
      "Maushold",
      "Maushold-Four"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 2.8,
    baseStats: {
      hp: 74,
      atk: 75,
      def: 70,
      spa: 65,
      spd: 75,
      spe: 111
    }
  },
  fidough: {
    name: "Fidough",
    num: 926,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Own Tempo",
      H: "Klutz"
    },
    eggGroups: [
      "Field",
      "Mineral"
    ],
    evos: [
      "Dachsbun"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.9,
    baseStats: {
      hp: 37,
      atk: 55,
      def: 70,
      spa: 30,
      spd: 55,
      spe: 65
    }
  },
  dachsbun: {
    name: "Dachsbun",
    num: 927,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Well-Baked Body",
      H: "Aroma Veil"
    },
    eggGroups: [
      "Field",
      "Mineral"
    ],
    prevo: "Fidough",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.9,
    baseStats: {
      hp: 57,
      atk: 80,
      def: 115,
      spa: 50,
      spd: 80,
      spe: 95
    }
  },
  smoliv: {
    name: "Smoliv",
    num: 928,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Early Bird",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Dolliv"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 41,
      atk: 35,
      def: 45,
      spa: 58,
      spd: 51,
      spe: 30
    }
  },
  dolliv: {
    name: "Dolliv",
    num: 929,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Early Bird",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Arboliva"
    ],
    prevo: "Smoliv",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.9,
    baseStats: {
      hp: 52,
      atk: 53,
      def: 60,
      spa: 78,
      spd: 78,
      spe: 33
    }
  },
  arboliva: {
    name: "Arboliva",
    num: 930,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Seed Sower",
      H: "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Dolliv",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 48.2,
    baseStats: {
      hp: 78,
      atk: 69,
      def: 90,
      spa: 125,
      spd: 109,
      spe: 39
    }
  },
  squawkabilly: {
    name: "Squawkabilly",
    num: 931,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle",
      H: "Guts"
    },
    eggGroups: [
      "Flying"
    ],
    formes: [
      "Squawkabilly",
      "Squawkabilly-Blue",
      "Squawkabilly-Yellow",
      "Squawkabilly-White"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.4,
    baseStats: {
      hp: 82,
      atk: 96,
      def: 51,
      spa: 45,
      spd: 51,
      spe: 92
    }
  },
  squawkabillyblue: {
    name: "Squawkabilly-Blue",
    num: 931,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle",
      H: "Guts"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Squawkabilly",
    forme: "Blue",
    formes: [
      "Squawkabilly",
      "Squawkabilly-Blue",
      "Squawkabilly-Yellow",
      "Squawkabilly-White"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.4,
    baseStats: {
      hp: 82,
      atk: 96,
      def: 51,
      spa: 45,
      spd: 51,
      spe: 92
    }
  },
  squawkabillywhite: {
    name: "Squawkabilly-White",
    num: 931,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle",
      H: "Sheer Force"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Squawkabilly",
    forme: "White",
    formes: [
      "Squawkabilly",
      "Squawkabilly-Blue",
      "Squawkabilly-Yellow",
      "Squawkabilly-White"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.4,
    baseStats: {
      hp: 82,
      atk: 96,
      def: 51,
      spa: 45,
      spd: 51,
      spe: 92
    }
  },
  squawkabillyyellow: {
    name: "Squawkabilly-Yellow",
    num: 931,
    types: [
      "Normal",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle",
      H: "Sheer Force"
    },
    eggGroups: [
      "Flying"
    ],
    baseSpecies: "Squawkabilly",
    forme: "Yellow",
    formes: [
      "Squawkabilly",
      "Squawkabilly-Blue",
      "Squawkabilly-Yellow",
      "Squawkabilly-White"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.4,
    baseStats: {
      hp: 82,
      atk: 96,
      def: 51,
      spa: 45,
      spd: 51,
      spe: 92
    }
  },
  nacli: {
    name: "Nacli",
    num: 932,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Purifying Salt",
      "1": "Sturdy",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Naclstack"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 75,
      spa: 35,
      spd: 35,
      spe: 25
    }
  },
  naclstack: {
    name: "Naclstack",
    num: 933,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Purifying Salt",
      "1": "Sturdy",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Garganacl"
    ],
    prevo: "Nacli",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 105,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 100,
      spa: 35,
      spd: 65,
      spe: 35
    }
  },
  garganacl: {
    name: "Garganacl",
    num: 934,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Purifying Salt",
      "1": "Sturdy",
      H: "Clear Body"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Naclstack",
    evoLevel: 38,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 240,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 130,
      spa: 45,
      spd: 90,
      spe: 35
    }
  },
  charcadet: {
    name: "Charcadet",
    num: 935,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Flame Body"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Armarouge",
      "Ceruledge"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 40,
      atk: 50,
      def: 40,
      spa: 50,
      spd: 40,
      spe: 35
    }
  },
  armarouge: {
    name: "Armarouge",
    num: 936,
    types: [
      "Fire",
      "Psychic"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Weak Armor"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Charcadet",
    evoItem: "Auspicious Armor",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 85,
    baseStats: {
      hp: 85,
      atk: 60,
      def: 100,
      spa: 125,
      spd: 80,
      spe: 75
    }
  },
  ceruledge: {
    name: "Ceruledge",
    num: 937,
    types: [
      "Fire",
      "Ghost"
    ],
    abilities: {
      "0": "Flash Fire",
      H: "Weak Armor"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Charcadet",
    evoItem: "Malicious Armor",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 62,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 80,
      spa: 60,
      spd: 100,
      spe: 85
    }
  },
  tadbulb: {
    name: "Tadbulb",
    num: 938,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Own Tempo",
      "1": "Static",
      H: "Damp"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Bellibolt"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.4,
    baseStats: {
      hp: 61,
      atk: 31,
      def: 41,
      spa: 59,
      spd: 35,
      spe: 45
    }
  },
  bellibolt: {
    name: "Bellibolt",
    num: 939,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Electromorphosis",
      "1": "Static",
      H: "Damp"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Tadbulb",
    evoItem: "Thunder Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 113,
    baseStats: {
      hp: 109,
      atk: 64,
      def: 91,
      spa: 103,
      spd: 83,
      spe: 45
    }
  },
  wattrel: {
    name: "Wattrel",
    num: 940,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Wind Power",
      "1": "Volt Absorb",
      H: "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    evos: [
      "Kilowattrel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.6,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 35,
      spa: 55,
      spd: 40,
      spe: 70
    }
  },
  kilowattrel: {
    name: "Kilowattrel",
    num: 941,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Wind Power",
      "1": "Volt Absorb",
      H: "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    prevo: "Wattrel",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38.6,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 60,
      spa: 105,
      spd: 60,
      spe: 125
    }
  },
  maschiff: {
    name: "Maschiff",
    num: 942,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Run Away",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mabosstiff"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 60,
      atk: 78,
      def: 60,
      spa: 40,
      spd: 51,
      spe: 51
    }
  },
  mabosstiff: {
    name: "Mabosstiff",
    num: 943,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Guard Dog",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Maschiff",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 85
    }
  },
  shroodle: {
    name: "Shroodle",
    num: 944,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Pickpocket",
      H: "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Grafaiai"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.7,
    baseStats: {
      hp: 40,
      atk: 65,
      def: 35,
      spa: 40,
      spd: 35,
      spe: 75
    }
  },
  grafaiai: {
    name: "Grafaiai",
    num: 945,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Poison Touch",
      H: "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Shroodle",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27.2,
    baseStats: {
      hp: 63,
      atk: 95,
      def: 65,
      spa: 80,
      spd: 72,
      spe: 110
    }
  },
  bramblin: {
    name: "Bramblin",
    num: 946,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Wind Rider",
      H: "Infiltrator"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Brambleghast"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.6,
    baseStats: {
      hp: 40,
      atk: 65,
      def: 30,
      spa: 45,
      spd: 35,
      spe: 60
    }
  },
  brambleghast: {
    name: "Brambleghast",
    num: 947,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Wind Rider",
      H: "Infiltrator"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Bramblin",
    evoType: "other",
    evoCondition: "Walk 1000 steps in Let's Go",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 55,
      atk: 115,
      def: 70,
      spa: 80,
      spd: 70,
      spe: 90
    }
  },
  toedscool: {
    name: "Toedscool",
    num: 948,
    types: [
      "Ground",
      "Grass"
    ],
    abilities: {
      "0": "Mycelium Might"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Toedscruel"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 40,
      atk: 40,
      def: 35,
      spa: 50,
      spd: 100,
      spe: 70
    }
  },
  toedscruel: {
    name: "Toedscruel",
    num: 949,
    types: [
      "Ground",
      "Grass"
    ],
    abilities: {
      "0": "Mycelium Might"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Toedscool",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 65,
      spa: 80,
      spd: 120,
      spe: 100
    }
  },
  klawf: {
    name: "Klawf",
    num: 950,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Anger Shell",
      "1": "Shell Armor",
      H: "Regenerator"
    },
    eggGroups: [
      "Water 3"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79,
    baseStats: {
      hp: 70,
      atk: 100,
      def: 115,
      spa: 35,
      spd: 55,
      spe: 75
    }
  },
  capsakid: {
    name: "Capsakid",
    num: 951,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Insomnia",
      H: "Klutz"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Scovillain"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 50,
      atk: 62,
      def: 40,
      spa: 62,
      spd: 40,
      spe: 50
    }
  },
  scovillain: {
    name: "Scovillain",
    num: 952,
    types: [
      "Grass",
      "Fire"
    ],
    abilities: {
      "0": "Chlorophyll",
      "1": "Insomnia",
      H: "Moody"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Capsakid",
    evoItem: "Fire Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 65,
      atk: 108,
      def: 65,
      spa: 108,
      spd: 65,
      spe: 75
    }
  },
  rellor: {
    name: "Rellor",
    num: 953,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Compound Eyes",
      H: "Shed Skin"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Rabsca"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 41,
      atk: 50,
      def: 60,
      spa: 31,
      spd: 58,
      spe: 30
    }
  },
  rabsca: {
    name: "Rabsca",
    num: 954,
    types: [
      "Bug",
      "Psychic"
    ],
    abilities: {
      "0": "Synchronize",
      H: "Telepathy"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Rellor",
    evoType: "other",
    evoCondition: "walk 1000 steps in Let's Go",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 75,
      atk: 50,
      def: 85,
      spa: 115,
      spd: 100,
      spe: 45
    }
  },
  flittle: {
    name: "Flittle",
    num: 955,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Anticipation",
      "1": "Frisk",
      H: "Speed Boost"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Espathra"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 30,
      atk: 35,
      def: 30,
      spa: 55,
      spd: 30,
      spe: 75
    }
  },
  espathra: {
    name: "Espathra",
    num: 956,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Opportunist",
      "1": "Frisk",
      H: "Speed Boost"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Flittle",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 90,
    baseStats: {
      hp: 95,
      atk: 60,
      def: 60,
      spa: 101,
      spd: 60,
      spe: 105
    }
  },
  tinkatink: {
    name: "Tinkatink",
    num: 957,
    types: [
      "Fairy",
      "Steel"
    ],
    abilities: {
      "0": "Mold Breaker",
      "1": "Own Tempo",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Tinkatuff"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 8.9,
    baseStats: {
      hp: 50,
      atk: 45,
      def: 45,
      spa: 35,
      spd: 64,
      spe: 58
    }
  },
  tinkatuff: {
    name: "Tinkatuff",
    num: 958,
    types: [
      "Fairy",
      "Steel"
    ],
    abilities: {
      "0": "Mold Breaker",
      "1": "Own Tempo",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Tinkaton"
    ],
    prevo: "Tinkatink",
    evoLevel: 24,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 59.1,
    baseStats: {
      hp: 65,
      atk: 55,
      def: 55,
      spa: 45,
      spd: 82,
      spe: 78
    }
  },
  tinkaton: {
    name: "Tinkaton",
    num: 959,
    types: [
      "Fairy",
      "Steel"
    ],
    abilities: {
      "0": "Mold Breaker",
      "1": "Own Tempo",
      H: "Pickpocket"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Tinkatuff",
    evoLevel: 38,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 112.8,
    baseStats: {
      hp: 85,
      atk: 75,
      def: 77,
      spa: 70,
      spd: 105,
      spe: 94
    }
  },
  wiglett: {
    name: "Wiglett",
    num: 960,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Gooey",
      "1": "Rattled",
      H: "Sand Veil"
    },
    eggGroups: [
      "Water 3"
    ],
    evos: [
      "Wugtrio"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.8,
    baseStats: {
      hp: 10,
      atk: 55,
      def: 25,
      spa: 35,
      spd: 25,
      spe: 95
    }
  },
  wugtrio: {
    name: "Wugtrio",
    num: 961,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Gooey",
      "1": "Rattled",
      H: "Sand Veil"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Wiglett",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.4,
    baseStats: {
      hp: 35,
      atk: 100,
      def: 50,
      spa: 50,
      spd: 70,
      spe: 120
    }
  },
  bombirdier: {
    name: "Bombirdier",
    num: 962,
    types: [
      "Flying",
      "Dark"
    ],
    abilities: {
      "0": "Big Pecks",
      "1": "Keen Eye",
      H: "Rocky Payload"
    },
    eggGroups: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42.9,
    baseStats: {
      hp: 70,
      atk: 103,
      def: 85,
      spa: 60,
      spd: 85,
      spe: 82
    }
  },
  finizen: {
    name: "Finizen",
    num: 963,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Veil"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    evos: [
      "Palafin"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60.2,
    baseStats: {
      hp: 70,
      atk: 45,
      def: 40,
      spa: 45,
      spd: 40,
      spe: 75
    }
  },
  palafin: {
    name: "Palafin",
    num: 964,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Zero to Hero"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    prevo: "Finizen",
    evoLevel: 38,
    formes: [
      "Palafin",
      "Palafin-Hero"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60.2,
    baseStats: {
      hp: 100,
      atk: 70,
      def: 72,
      spa: 53,
      spd: 62,
      spe: 100
    }
  },
  palafinhero: {
    name: "Palafin-Hero",
    num: 964,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Zero to Hero"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    baseSpecies: "Palafin",
    forme: "Hero",
    formes: [
      "Palafin",
      "Palafin-Hero"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 97.4,
    baseStats: {
      hp: 100,
      atk: 160,
      def: 97,
      spa: 106,
      spd: 87,
      spe: 100
    }
  },
  varoom: {
    name: "Varoom",
    num: 965,
    types: [
      "Steel",
      "Poison"
    ],
    abilities: {
      "0": "Overcoat",
      H: "Slow Start"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Revavroom"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35,
    baseStats: {
      hp: 45,
      atk: 70,
      def: 63,
      spa: 30,
      spd: 45,
      spe: 47
    }
  },
  revavroom: {
    name: "Revavroom",
    num: 966,
    types: [
      "Steel",
      "Poison"
    ],
    abilities: {
      "0": "Overcoat",
      H: "Filter"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Varoom",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 80,
      atk: 119,
      def: 90,
      spa: 54,
      spd: 67,
      spe: 90
    }
  },
  cyclizar: {
    name: "Cyclizar",
    num: 967,
    types: [
      "Dragon",
      "Normal"
    ],
    abilities: {
      "0": "Shed Skin",
      H: "Regenerator"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 63,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 65,
      spa: 85,
      spd: 65,
      spe: 121
    }
  },
  orthworm: {
    name: "Orthworm",
    num: 968,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Earth Eater",
      H: "Sand Veil"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 310,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 145,
      spa: 60,
      spd: 55,
      spe: 65
    }
  },
  glimmet: {
    name: "Glimmet",
    num: 969,
    types: [
      "Rock",
      "Poison"
    ],
    abilities: {
      "0": "Toxic Debris",
      H: "Corrosion"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Glimmora"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 48,
      atk: 35,
      def: 42,
      spa: 105,
      spd: 60,
      spe: 60
    }
  },
  glimmora: {
    name: "Glimmora",
    num: 970,
    types: [
      "Rock",
      "Poison"
    ],
    abilities: {
      "0": "Toxic Debris",
      H: "Corrosion"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Glimmet",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 45,
    baseStats: {
      hp: 83,
      atk: 55,
      def: 90,
      spa: 130,
      spd: 81,
      spe: 86
    }
  },
  greavard: {
    name: "Greavard",
    num: 971,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Pickup",
      H: "Fluffy"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Houndstone"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35,
    baseStats: {
      hp: 50,
      atk: 61,
      def: 60,
      spa: 30,
      spd: 55,
      spe: 34
    }
  },
  houndstone: {
    name: "Houndstone",
    num: 972,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Sand Rush",
      H: "Fluffy"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Greavard",
    evoLevel: 30,
    evoCondition: "at night",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 72,
      atk: 101,
      def: 100,
      spa: 50,
      spd: 97,
      spe: 68
    }
  },
  flamigo: {
    name: "Flamigo",
    num: 973,
    types: [
      "Flying",
      "Fighting"
    ],
    abilities: {
      "0": "Scrappy",
      "1": "Tangled Feet",
      H: "Costar"
    },
    eggGroups: [
      "Flying"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37,
    baseStats: {
      hp: 82,
      atk: 115,
      def: 74,
      spa: 75,
      spd: 64,
      spe: 90
    }
  },
  cetoddle: {
    name: "Cetoddle",
    num: 974,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Snow Cloak",
      H: "Sheer Force"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Cetitan"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 45,
    baseStats: {
      hp: 108,
      atk: 68,
      def: 45,
      spa: 30,
      spd: 40,
      spe: 43
    }
  },
  cetitan: {
    name: "Cetitan",
    num: 975,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Slush Rush",
      H: "Sheer Force"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Cetoddle",
    evoItem: "Ice Stone",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 700,
    baseStats: {
      hp: 170,
      atk: 113,
      def: 65,
      spa: 45,
      spd: 55,
      spe: 73
    }
  },
  veluza: {
    name: "Veluza",
    num: 976,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Mold Breaker",
      H: "Sharpness"
    },
    eggGroups: [
      "Water 2"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 90,
    baseStats: {
      hp: 90,
      atk: 102,
      def: 73,
      spa: 78,
      spd: 65,
      spe: 70
    }
  },
  dondozo: {
    name: "Dondozo",
    num: 977,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Oblivious",
      H: "Water Veil"
    },
    eggGroups: [
      "Water 2"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 220,
    baseStats: {
      hp: 150,
      atk: 100,
      def: 115,
      spa: 65,
      spd: 65,
      spe: 35
    }
  },
  tatsugiri: {
    name: "Tatsugiri",
    num: 978,
    types: [
      "Dragon",
      "Water"
    ],
    abilities: {
      "0": "Commander",
      H: "Storm Drain"
    },
    eggGroups: [
      "Water 2"
    ],
    cosmeticFormes: [
      "Droopy",
      "Stretchy"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 68,
      atk: 50,
      def: 60,
      spa: 120,
      spd: 95,
      spe: 82
    }
  },
  annihilape: {
    name: "Annihilape",
    num: 979,
    types: [
      "Fighting",
      "Ghost"
    ],
    abilities: {
      "0": "Vital Spirit",
      "1": "Inner Focus",
      H: "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Primeape",
    evoType: "other",
    evoCondition: "Use Rage Fist 20 times and level-up",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56,
    baseStats: {
      hp: 110,
      atk: 115,
      def: 80,
      spa: 50,
      spd: 90,
      spe: 90
    }
  },
  clodsire: {
    name: "Clodsire",
    num: 980,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Water Absorb",
      H: "Unaware"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Wooper-Paldea",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 223,
    baseStats: {
      hp: 130,
      atk: 75,
      def: 60,
      spa: 45,
      spd: 100,
      spe: 20
    }
  },
  farigiraf: {
    name: "Farigiraf",
    num: 981,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Cud Chew",
      "1": "Armor Tail",
      H: "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Girafarig",
    evoType: "levelMove",
    evoMove: "Twin Beam",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 160,
    baseStats: {
      hp: 120,
      atk: 90,
      def: 70,
      spa: 110,
      spd: 70,
      spe: 60
    }
  },
  dudunsparce: {
    name: "Dudunsparce",
    num: 982,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Run Away",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Dunsparce",
    evoType: "levelMove",
    evoMove: "Hyper Drill",
    formes: [
      "Dudunsparce",
      "Dudunsparce-Three-Segment"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39.2,
    baseStats: {
      hp: 125,
      atk: 100,
      def: 80,
      spa: 85,
      spd: 75,
      spe: 55
    }
  },
  dudunsparcethreesegment: {
    name: "Dudunsparce-Three-Segment",
    num: 982,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Run Away",
      H: "Rattled"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Dunsparce",
    evoType: "levelMove",
    evoMove: "Hyper Drill",
    baseSpecies: "Dudunsparce",
    forme: "Three-Segment",
    formes: [
      "Dudunsparce",
      "Dudunsparce-Three-Segment"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47.4,
    baseStats: {
      hp: 125,
      atk: 100,
      def: 80,
      spa: 85,
      spd: 75,
      spe: 55
    }
  },
  kingambit: {
    name: "Kingambit",
    num: 983,
    types: [
      "Dark",
      "Steel"
    ],
    abilities: {
      "0": "Defiant",
      "1": "Supreme Overlord",
      H: "Pressure"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Bisharp",
    evoType: "other",
    evoCondition: "Defeat 3 Bisharp leading Pawniard and level-up",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 100,
      atk: 135,
      def: 120,
      spa: 60,
      spd: 85,
      spe: 50
    }
  },
  greattusk: {
    name: "Great Tusk",
    num: 984,
    types: [
      "Ground",
      "Fighting"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 320,
    baseStats: {
      hp: 115,
      atk: 131,
      def: 131,
      spa: 53,
      spd: 53,
      spe: 87
    }
  },
  screamtail: {
    name: "Scream Tail",
    num: 985,
    types: [
      "Fairy",
      "Psychic"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 8,
    baseStats: {
      hp: 115,
      atk: 65,
      def: 99,
      spa: 65,
      spd: 115,
      spe: 111
    }
  },
  brutebonnet: {
    name: "Brute Bonnet",
    num: 986,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 21,
    baseStats: {
      hp: 111,
      atk: 127,
      def: 99,
      spa: 79,
      spd: 99,
      spe: 55
    }
  },
  fluttermane: {
    name: "Flutter Mane",
    num: 987,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 4,
    baseStats: {
      hp: 55,
      atk: 55,
      def: 55,
      spa: 135,
      spd: 135,
      spe: 135
    }
  },
  slitherwing: {
    name: "Slither Wing",
    num: 988,
    types: [
      "Bug",
      "Fighting"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 92,
    baseStats: {
      hp: 85,
      atk: 135,
      def: 79,
      spa: 85,
      spd: 105,
      spe: 81
    }
  },
  sandyshocks: {
    name: "Sandy Shocks",
    num: 989,
    types: [
      "Electric",
      "Ground"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60,
    baseStats: {
      hp: 85,
      atk: 81,
      def: 97,
      spa: 121,
      spd: 85,
      spe: 101
    }
  },
  irontreads: {
    name: "Iron Treads",
    num: 990,
    types: [
      "Ground",
      "Steel"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 240,
    baseStats: {
      hp: 90,
      atk: 112,
      def: 120,
      spa: 72,
      spd: 70,
      spe: 106
    }
  },
  ironbundle: {
    name: "Iron Bundle",
    num: 991,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 11,
    baseStats: {
      hp: 56,
      atk: 80,
      def: 114,
      spa: 124,
      spd: 60,
      spe: 136
    }
  },
  ironhands: {
    name: "Iron Hands",
    num: 992,
    types: [
      "Fighting",
      "Electric"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 380.7,
    baseStats: {
      hp: 154,
      atk: 140,
      def: 108,
      spa: 50,
      spd: 68,
      spe: 50
    }
  },
  ironjugulis: {
    name: "Iron Jugulis",
    num: 993,
    types: [
      "Dark",
      "Flying"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 111,
    baseStats: {
      hp: 94,
      atk: 80,
      def: 86,
      spa: 122,
      spd: 80,
      spe: 108
    }
  },
  ironmoth: {
    name: "Iron Moth",
    num: 994,
    types: [
      "Fire",
      "Poison"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 36,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 60,
      spa: 140,
      spd: 110,
      spe: 110
    }
  },
  ironthorns: {
    name: "Iron Thorns",
    num: 995,
    types: [
      "Rock",
      "Electric"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 303,
    baseStats: {
      hp: 100,
      atk: 134,
      def: 110,
      spa: 70,
      spd: 84,
      spe: 72
    }
  },
  frigibax: {
    name: "Frigibax",
    num: 996,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Thermal Exchange",
      H: "Ice Body"
    },
    eggGroups: [
      "Dragon",
      "Mineral"
    ],
    evos: [
      "Arctibax"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 65,
      atk: 75,
      def: 45,
      spa: 35,
      spd: 45,
      spe: 55
    }
  },
  arctibax: {
    name: "Arctibax",
    num: 997,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Thermal Exchange",
      H: "Ice Body"
    },
    eggGroups: [
      "Dragon",
      "Mineral"
    ],
    evos: [
      "Baxcalibur"
    ],
    prevo: "Frigibax",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 90,
      atk: 95,
      def: 66,
      spa: 45,
      spd: 65,
      spe: 62
    }
  },
  baxcalibur: {
    name: "Baxcalibur",
    num: 998,
    types: [
      "Dragon",
      "Ice"
    ],
    abilities: {
      "0": "Thermal Exchange",
      H: "Ice Body"
    },
    eggGroups: [
      "Dragon",
      "Mineral"
    ],
    prevo: "Arctibax",
    evoLevel: 54,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 210,
    baseStats: {
      hp: 115,
      atk: 145,
      def: 92,
      spa: 75,
      spd: 86,
      spe: 87
    }
  },
  gimmighoul: {
    name: "Gimmighoul",
    num: 999,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Rattled"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Gholdengo"
    ],
    formes: [
      "Gimmighoul",
      "Gimmighoul-Roaming"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 10
    }
  },
  gimmighoulroaming: {
    name: "Gimmighoul-Roaming",
    num: 999,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Run Away"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Gholdengo"
    ],
    baseSpecies: "Gimmighoul",
    forme: "Roaming",
    formes: [
      "Gimmighoul",
      "Gimmighoul-Roaming"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.1,
    baseStats: {
      hp: 45,
      atk: 30,
      def: 25,
      spa: 75,
      spd: 45,
      spe: 80
    }
  },
  gholdengo: {
    name: "Gholdengo",
    num: 1000,
    types: [
      "Steel",
      "Ghost"
    ],
    abilities: {
      "0": "Good as Gold"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Gimmighoul",
    evoType: "other",
    evoCondition: "Level up with 999 Coins in the bag",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 30,
    baseStats: {
      hp: 87,
      atk: 60,
      def: 95,
      spa: 133,
      spd: 91,
      spe: 84
    }
  },
  wochien: {
    name: "Wo-Chien",
    num: 1001,
    types: [
      "Dark",
      "Grass"
    ],
    abilities: {
      "0": "Tablets of Ruin"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 74.2,
    baseStats: {
      hp: 85,
      atk: 85,
      def: 100,
      spa: 95,
      spd: 135,
      spe: 70
    }
  },
  chienpao: {
    name: "Chien-Pao",
    num: 1002,
    types: [
      "Dark",
      "Ice"
    ],
    abilities: {
      "0": "Sword of Ruin"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 152.2,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 80,
      spa: 90,
      spd: 65,
      spe: 135
    }
  },
  tinglu: {
    name: "Ting-Lu",
    num: 1003,
    types: [
      "Dark",
      "Ground"
    ],
    abilities: {
      "0": "Vessel of Ruin"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 699.7,
    baseStats: {
      hp: 155,
      atk: 110,
      def: 125,
      spa: 55,
      spd: 80,
      spe: 45
    }
  },
  chiyu: {
    name: "Chi-Yu",
    num: 1004,
    types: [
      "Dark",
      "Fire"
    ],
    abilities: {
      "0": "Beads of Ruin"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 4.9,
    baseStats: {
      hp: 55,
      atk: 80,
      def: 80,
      spa: 135,
      spd: 120,
      spe: 100
    }
  },
  roaringmoon: {
    name: "Roaring Moon",
    num: 1005,
    types: [
      "Dragon",
      "Dark"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 380,
    baseStats: {
      hp: 105,
      atk: 139,
      def: 71,
      spa: 55,
      spd: 101,
      spe: 119
    }
  },
  ironvaliant: {
    name: "Iron Valiant",
    num: 1006,
    types: [
      "Fairy",
      "Fighting"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 35,
    baseStats: {
      hp: 74,
      atk: 130,
      def: 90,
      spa: 120,
      spd: 60,
      spe: 116
    }
  },
  koraidon: {
    name: "Koraidon",
    num: 1007,
    types: [
      "Fighting",
      "Dragon"
    ],
    abilities: {
      "0": "Orichalcum Pulse"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 303,
    baseStats: {
      hp: 100,
      atk: 135,
      def: 115,
      spa: 85,
      spd: 100,
      spe: 135
    }
  },
  miraidon: {
    name: "Miraidon",
    num: 1008,
    types: [
      "Electric",
      "Dragon"
    ],
    abilities: {
      "0": "Hadron Engine"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 240,
    baseStats: {
      hp: 100,
      atk: 85,
      def: 100,
      spa: 135,
      spd: 115,
      spe: 135
    }
  },
  walkingwake: {
    name: "Walking Wake",
    num: 1009,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Protosynthesis"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 280,
    baseStats: {
      hp: 99,
      atk: 83,
      def: 91,
      spa: 125,
      spd: 83,
      spe: 109
    }
  },
  ironleaves: {
    name: "Iron Leaves",
    num: 1010,
    types: [
      "Grass",
      "Psychic"
    ],
    abilities: {
      "0": "Quark Drive"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 125,
    baseStats: {
      hp: 90,
      atk: 130,
      def: 88,
      spa: 70,
      spd: 108,
      spe: 104
    }
  },
  dipplin: {
    name: "Dipplin",
    num: 1011,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Supersweet Syrup",
      "1": "Gluttony",
      H: "Sticky Hold"
    },
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    prevo: "Applin",
    evoItem: "Syrupy Apple",
    evoType: "useItem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.4,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 110,
      spa: 95,
      spd: 80,
      spe: 40
    }
  },
  poltchageist: {
    name: "Poltchageist",
    num: 1012,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Hospitality",
      H: "Heatproof"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    evos: [
      "Sinistcha"
    ],
    formes: [
      "Poltchageist",
      "Poltchageist-Artisan"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.1,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    }
  },
  poltchageistartisan: {
    name: "Poltchageist-Artisan",
    num: 1012,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Hospitality",
      H: "Heatproof"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Sinistcha-Masterpiece"
    ],
    baseSpecies: "Poltchageist",
    forme: "Artisan",
    formes: [
      "Poltchageist",
      "Poltchageist-Artisan"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.1,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    }
  },
  sinistcha: {
    name: "Sinistcha",
    num: 1013,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Hospitality",
      H: "Heatproof"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    prevo: "Poltchageist",
    evoItem: "Unremarkable Teacup",
    evoType: "useItem",
    formes: [
      "Sinistcha",
      "Sinistcha-Masterpiece"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 2.2,
    baseStats: {
      hp: 71,
      atk: 60,
      def: 106,
      spa: 121,
      spd: 80,
      spe: 70
    }
  },
  sinistchamasterpiece: {
    name: "Sinistcha-Masterpiece",
    num: 1013,
    types: [
      "Grass",
      "Ghost"
    ],
    abilities: {
      "0": "Hospitality",
      H: "Heatproof"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Poltchageist-Artisan",
    evoItem: "Masterpiece Teacup",
    evoType: "useItem",
    baseSpecies: "Sinistcha",
    forme: "Masterpiece",
    formes: [
      "Sinistcha",
      "Sinistcha-Masterpiece"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 2.2,
    baseStats: {
      hp: 71,
      atk: 60,
      def: 106,
      spa: 121,
      spd: 80,
      spe: 70
    }
  },
  okidogi: {
    name: "Okidogi",
    num: 1014,
    types: [
      "Poison",
      "Fighting"
    ],
    abilities: {
      "0": "Toxic Chain",
      H: "Guard Dog"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 92,
    baseStats: {
      hp: 88,
      atk: 128,
      def: 115,
      spa: 58,
      spd: 86,
      spe: 80
    }
  },
  munkidori: {
    name: "Munkidori",
    num: 1015,
    types: [
      "Poison",
      "Psychic"
    ],
    abilities: {
      "0": "Toxic Chain",
      H: "Frisk"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 12.2,
    baseStats: {
      hp: 88,
      atk: 75,
      def: 66,
      spa: 130,
      spd: 90,
      spe: 106
    }
  },
  fezandipiti: {
    name: "Fezandipiti",
    num: 1016,
    types: [
      "Poison",
      "Fairy"
    ],
    abilities: {
      "0": "Toxic Chain",
      H: "Technician"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 30.1,
    baseStats: {
      hp: 88,
      atk: 91,
      def: 82,
      spa: 70,
      spd: 125,
      spe: 99
    }
  },
  ogerpon: {
    name: "Ogerpon",
    num: 1017,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Defiant"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponcornerstone: {
    name: "Ogerpon-Cornerstone",
    num: 1017,
    types: [
      "Grass",
      "Rock"
    ],
    abilities: {
      "0": "Sturdy"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Cornerstone",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Cornerstone Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponcornerstonetera: {
    name: "Ogerpon-Cornerstone-Tera",
    num: 1017,
    types: [
      "Grass",
      "Rock"
    ],
    abilities: {
      "0": "Embody Aspect (Cornerstone)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Cornerstone-Tera",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Cornerstone Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponhearthflame: {
    name: "Ogerpon-Hearthflame",
    num: 1017,
    types: [
      "Grass",
      "Fire"
    ],
    abilities: {
      "0": "Mold Breaker"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Hearthflame",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Hearthflame Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponhearthflametera: {
    name: "Ogerpon-Hearthflame-Tera",
    num: 1017,
    types: [
      "Grass",
      "Fire"
    ],
    abilities: {
      "0": "Embody Aspect (Hearthflame)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Hearthflame-Tera",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Hearthflame Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerpontealtera: {
    name: "Ogerpon-Teal-Tera",
    num: 1017,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Embody Aspect (Teal)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Teal-Tera",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponwellspring: {
    name: "Ogerpon-Wellspring",
    num: 1017,
    types: [
      "Grass",
      "Water"
    ],
    abilities: {
      "0": "Water Absorb"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Wellspring",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Wellspring Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  },
  ogerponwellspringtera: {
    name: "Ogerpon-Wellspring-Tera",
    num: 1017,
    types: [
      "Grass",
      "Water"
    ],
    abilities: {
      "0": "Embody Aspect (Wellspring)"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Ogerpon",
    forme: "Wellspring-Tera",
    formes: [
      "Ogerpon",
      "Ogerpon-Wellspring",
      "Ogerpon-Hearthflame",
      "Ogerpon-Cornerstone",
      "Ogerpon-Teal-Tera",
      "Ogerpon-Wellspring-Tera",
      "Ogerpon-Hearthflame-Tera",
      "Ogerpon-Cornerstone-Tera"
    ],
    requiredItem: "Wellspring Mask",
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.8,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 84,
      spa: 60,
      spd: 96,
      spe: 110
    }
  }
};