exports.BattlePokedex = {
  bulbasaur: {
    name: "Bulbasaur",
    num: 1,
    types: [
      "Grass",
      "Poison"
    ],
    abilities: {
      "0": "Harvest",
      "1": "Overgrow"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Ivysaur"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.9,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 50,
      spe: 45,
      spa: 65,
      spd: 65
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
      "0": "Harvest",
      "1": "Overgrow"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Venusaur"
    ],
    prevo: "Bulbasaur",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.9,
    baseStats: {
      hp: 60,
      atk: 70,
      def: 75,
      spe: 60,
      spa: 85,
      spd: 85
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
      "0": "Harvest",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Ivysaur",
    evoLevel: 36,
    formes: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 100,
    baseStats: {
      hp: 100,
      atk: 100,
      def: 85,
      spe: 65,
      spa: 100,
      spd: 100
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
      "0": "Thick Fat",
      "1": "Grassy Guard"
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
      hp: 100,
      atk: 120,
      def: 123,
      spe: 60,
      spa: 124,
      spd: 123
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
      "1": "Moxie"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Charmeleon"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 45,
      atk: 58,
      def: 45,
      spe: 62,
      spa: 65,
      spd: 45
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
      "1": "Moxie"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Charizard"
    ],
    prevo: "Charmander",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19,
    baseStats: {
      hp: 58,
      atk: 93,
      def: 52,
      spe: 87,
      spa: 93,
      spd: 52
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
      "0": "Ruthless",
      "1": "Moxie"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 90.5,
    baseStats: {
      hp: 78,
      atk: 111,
      def: 70,
      spe: 100,
      spa: 121,
      spd: 70
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
      "0": "Sheer Force",
      "1": "Levitate"
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
      atk: 145,
      def: 90,
      spe: 102,
      spa: 145,
      spd: 90
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
      "0": "Drought",
      "1": "Aerilate"
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
      atk: 132,
      def: 70,
      spe: 111,
      spa: 159,
      spd: 100
    }
  },
  squirtle: {
    name: "Squirtle",
    num: 7,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Torrent"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Wartortle"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9,
    baseStats: {
      hp: 44,
      atk: 48,
      def: 70,
      spe: 43,
      spa: 50,
      spd: 65
    }
  },
  wartortle: {
    name: "Wartortle",
    num: 8,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Torrent"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Blastoise"
    ],
    prevo: "Squirtle",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22.5,
    baseStats: {
      hp: 59,
      atk: 63,
      def: 95,
      spe: 58,
      spa: 80,
      spd: 80
    }
  },
  blastoise: {
    name: "Blastoise",
    num: 9,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Bulletproof"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 85.5,
    baseStats: {
      hp: 84,
      atk: 73,
      def: 125,
      spe: 43,
      spa: 120,
      spd: 105
    }
  },
  blastoisemega: {
    name: "Blastoise-Mega",
    num: 9,
    types: [
      "Water",
      "Steel"
    ],
    abilities: {
      "0": "Mega Launcher",
      "1": "Rapid Fire"
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
      hp: 84,
      atk: 123,
      def: 135,
      spe: 33,
      spa: 160,
      spd: 115
    }
  },
  caterpie: {
    name: "Caterpie",
    num: 10,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Shield Dust"
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
      hp: 35,
      atk: 30,
      def: 35,
      spe: 45,
      spa: 55,
      spd: 50
    }
  },
  metapod: {
    name: "Metapod",
    num: 11,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Battle Armor"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Butterfree"
    ],
    prevo: "Caterpie",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.9,
    baseStats: {
      hp: 50,
      atk: 40,
      def: 85,
      spe: 30,
      spa: 55,
      spd: 70
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
      "0": "Tinted Lens",
      "1": "Prankster"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Metapod",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 70,
      atk: 45,
      def: 60,
      spe: 95,
      spa: 110,
      spd: 100
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
      "0": "Poison Touch",
      "1": "Sap Sipper"
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
      hp: 35,
      atk: 60,
      def: 40,
      spe: 50,
      spa: 30,
      spd: 35
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
      "0": "Battle Armor",
      "1": "Sturdy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Beedrill"
    ],
    prevo: "Weedle",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10,
    baseStats: {
      hp: 50,
      atk: 60,
      def: 85,
      spe: 35,
      spa: 40,
      spd: 60
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
      "0": "Ruthless",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Kakuna",
    evoLevel: 20,
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
      atk: 119,
      def: 65,
      spe: 121,
      spa: 45,
      spd: 65
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
      "0": "Adaptability",
      "1": "Levitate"
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
      atk: 160,
      def: 75,
      spe: 160,
      spa: 45,
      spd: 75
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
      "0": "Defiant",
      "1": "Emergency Exit"
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
      atk: 60,
      def: 45,
      spe: 85,
      spa: 35,
      spd: 45
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
      "0": "Defiant",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Pidgeot"
    ],
    prevo: "Pidgey",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 60,
      spe: 105,
      spa: 50,
      spd: 60
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
      "0": "Defiant",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Pidgeotto",
    evoLevel: 31,
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
      hp: 85,
      atk: 100,
      def: 85,
      spe: 125,
      spa: 70,
      spd: 85
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
      "0": "No Guard",
      "1": "Guarding Gale"
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
      hp: 85,
      atk: 115,
      def: 85,
      spe: 145,
      spa: 135,
      spd: 85
    }
  },
  rattata: {
    name: "Rattata",
    num: 19,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Defiant",
      H: "Guts"
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
      hp: 47,
      atk: 69,
      def: 42,
      spe: 90,
      spa: 40,
      spd: 42
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
      "0": "Hustle",
      "1": "Pickpocket",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Raticate-Alola-Totem",
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
      hp: 47,
      atk: 69,
      def: 42,
      spe: 90,
      spa: 40,
      spd: 42
    }
  },
  raticate: {
    name: "Raticate",
    num: 20,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Strong Jaw",
      H: "Guts"
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
      hp: 70,
      atk: 109,
      def: 72,
      spe: 107,
      spa: 50,
      spd: 72
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
      "0": "Hustle",
      "1": "Strong Jaw",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rattata-Alola",
    evoLevel: 20,
    evoCondition: null,
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
      hp: 94,
      atk: 109,
      def: 80,
      spe: 77,
      spa: 40,
      spd: 80
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
      "0": "Hustle",
      "1": "Metabolism",
      H: "Guts"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rattata-Alola",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 20,
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
      hp: 119,
      atk: 114,
      def: 90,
      spe: 62,
      spa: 40,
      spd: 90
    }
  },
  spearow: {
    name: "Spearow",
    num: 21,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Defiant"
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
      hp: 45,
      atk: 75,
      def: 45,
      spe: 103,
      spa: 31,
      spd: 51
    }
  },
  fearow: {
    name: "Fearow",
    num: 22,
    types: [
      "Electric",
      "Flying"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Reckless"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Spearow",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 75,
      atk: 120,
      def: 75,
      spe: 133,
      spa: 41,
      spd: 81
    }
  },
  ekans: {
    name: "Ekans",
    num: 23,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Unnerve",
      "1": "Intimidate"
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
      hp: 65,
      atk: 65,
      def: 55,
      spe: 70,
      spa: 60,
      spd: 55
    }
  },
  arbok: {
    name: "Arbok",
    num: 24,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Intimidate"
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
      hp: 105,
      atk: 105,
      def: 80,
      spe: 80,
      spa: 85,
      spd: 80
    }
  },
  pikachu: {
    name: "Pikachu",
    num: 25,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Lightning Rod"
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
    evoType: null,
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 45,
      spe: 115,
      spa: 90,
      spd: 50
    }
  },
  raichu: {
    name: "Raichu",
    num: 26,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Electric Surge"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Pikachu",
    evoItem: "Electric Gem",
    evoType: "useItem",
    evoLevel: 33,
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
      hp: 70,
      atk: 95,
      def: 65,
      spe: 125,
      spa: 110,
      spd: 85
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
      "0": "Levitate",
      "1": "Psychic Surge"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Pikachu",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 33,
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
      hp: 70,
      atk: 85,
      def: 60,
      spe: 130,
      spa: 110,
      spd: 95
    }
  },
  sandshrew: {
    name: "Sandshrew",
    num: 27,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Force",
      "1": "Rough Skin"
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
      def: 95,
      spe: 50,
      spa: 20,
      spd: 60
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
      "0": "Refrigerate",
      "1": "Sturdy"
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
      atk: 70,
      def: 110,
      spe: 40,
      spa: 10,
      spd: 70
    }
  },
  sandslash: {
    name: "Sandslash",
    num: 28,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sand Rush",
      "1": "Tough Claws"
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
      atk: 110,
      def: 115,
      spe: 110,
      spa: 45,
      spd: 70
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
      "0": "Slush Rush",
      "1": "Technician"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sandshrew-Alola",
    evoItem: null,
    evoType: null,
    evoLevel: 22,
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
      atk: 115,
      def: 125,
      spe: 100,
      spa: 25,
      spd: 85
    }
  },
  nidoranf: {
    name: "NidoranF",
    num: 29,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Multiscale",
      "1": "Rough Skin"
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
    weightkg: 60,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 65,
      spe: 65,
      spa: 40,
      spd: 55
    }
  },
  nidorina: {
    name: "Nidorina",
    num: 30,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Multiscale",
      "1": "Rough Skin"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Nidoqueen"
    ],
    prevo: "NidoranF",
    evoLevel: 20,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 20,
    baseStats: {
      hp: 69,
      atk: 83,
      def: 92,
      spe: 86,
      spa: 50,
      spd: 75
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
      "0": "Multiscale",
      "1": "Intimidate"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Nidorina",
    evoItem: "Ground Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 60,
    baseStats: {
      hp: 90,
      atk: 131,
      def: 123,
      spe: 81,
      spa: 60,
      spd: 90
    }
  },
  nidoranm: {
    name: "NidoranM",
    num: 32,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Merciless",
      "1": "Hustle"
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
      hp: 45,
      atk: 72,
      def: 58,
      spe: 70,
      spa: 40,
      spd: 50
    }
  },
  nidorino: {
    name: "Nidorino",
    num: 33,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Merciless",
      "1": "Hustle"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Nidoking"
    ],
    prevo: "NidoranM",
    evoLevel: 20,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 19.5,
    baseStats: {
      hp: 60,
      atk: 101,
      def: 83,
      spe: 96,
      spa: 50,
      spd: 65
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
      "0": "Sheer Force",
      "1": "Hustle"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Nidorino",
    evoItem: "Ground Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 62,
    baseStats: {
      hp: 90,
      atk: 141,
      def: 118,
      spe: 91,
      spa: 55,
      spd: 80
    }
  },
  clefairy: {
    name: "Clefairy",
    num: 35,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Unaware",
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
    evoType: null,
    evoLevel: 16,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 7.5,
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spe: 45,
      spa: 90,
      spd: 95
    }
  },
  clefable: {
    name: "Clefable",
    num: 36,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Magic Guard",
      H: "Interstellar"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Clefairy",
    evoItem: null,
    evoType: null,
    evoLevel: 32,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 40,
    baseStats: {
      hp: 85,
      atk: 80,
      def: 85,
      spe: 60,
      spa: 115,
      spd: 125
    }
  },
  vulpix: {
    name: "Vulpix",
    num: 37,
    types: [
      "Fire",
      "Fairy"
    ],
    abilities: {
      "0": "Drought",
      "1": "Solar Power"
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
      hp: 45,
      atk: 45,
      def: 45,
      spe: 77,
      spa: 88,
      spd: 70
    }
  },
  vulpixalola: {
    name: "Vulpix-Alola",
    num: 37,
    types: [
      "Ice",
      "Fairy"
    ],
    abilities: {
      "0": "Snow Warning",
      "1": "Slush Rush"
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
      hp: 45,
      atk: 40,
      def: 45,
      spe: 77,
      spa: 85,
      spd: 78
    }
  },
  ninetales: {
    name: "Ninetales",
    num: 38,
    types: [
      "Fairy",
      "Fire"
    ],
    abilities: {
      "0": "Drought",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vulpix",
    evoItem: null,
    evoType: null,
    evoLevel: 30,
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
      atk: 57,
      def: 75,
      spe: 109,
      spa: 112,
      spd: 109
    }
  },
  ninetalesalola: {
    name: "Ninetales-Alola",
    num: 38,
    types: [
      "Fairy",
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vulpix-Alola",
    evoItem: null,
    evoType: null,
    evoLevel: 30,
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
      atk: 57,
      def: 75,
      spe: 109,
      spa: 109,
      spd: 112
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
      "0": "Huge Power",
      "1": "Fluffy"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Wigglytuff"
    ],
    prevo: "Igglybuff",
    evoType: null,
    evoLevel: 17,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5.5,
    baseStats: {
      hp: 50,
      atk: 35,
      def: 50,
      spe: 45,
      spa: 85,
      spd: 85
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
      "0": "Huge Power",
      "1": "Fluffy"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Jigglypuff",
    evoItem: null,
    evoType: null,
    evoLevel: 29,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 12,
    baseStats: {
      hp: 100,
      atk: 50,
      def: 75,
      spe: 55,
      spa: 100,
      spd: 100
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
      "0": "Merciless",
      "1": "Unnerve",
      H: "Stakeout"
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
      atk: 55,
      def: 40,
      spe: 105,
      spa: 50,
      spd: 40
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
      "0": "Merciless",
      "1": "Intimidate",
      H: "Stakeout"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Crobat"
    ],
    prevo: "Zubat",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 85,
      atk: 85,
      def: 80,
      spe: 105,
      spa: 80,
      spd: 80
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
      "0": "Grassy Guard",
      "1": "Prankster"
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
      atk: 35,
      def: 65,
      spe: 30,
      spa: 75,
      spd: 70
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
      "0": "Grassy Guard",
      "1": "Prankster"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Vileplume",
      "Bellossom"
    ],
    prevo: "Oddish",
    evoLevel: 16,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.6,
    baseStats: {
      hp: 60,
      atk: 65,
      def: 80,
      spe: 40,
      spa: 90,
      spd: 85
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
      "0": "Grassy Surge",
      "1": "Prankster"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Gloom",
    evoItem: "Poison Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18.6,
    baseStats: {
      hp: 85,
      atk: 80,
      def: 95,
      spe: 50,
      spa: 115,
      spd: 110
    }
  },
  paras: {
    name: "Paras",
    num: 46,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Dry Skin"
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
      hp: 50,
      atk: 70,
      def: 80,
      spe: 30,
      spa: 60,
      spd: 80
    }
  },
  parasect: {
    name: "Parasect",
    num: 47,
    types: [
      "Bug",
      "Poison"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Regenerator"
    },
    eggGroups: [
      "Bug",
      "Grass"
    ],
    prevo: "Paras",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.5,
    baseStats: {
      hp: 85,
      atk: 100,
      def: 110,
      spe: 30,
      spa: 90,
      spd: 110
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
      "0": "Fluffy",
      "1": "Tinted Lens"
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
      atk: 40,
      def: 50,
      spe: 66,
      spa: 82,
      spd: 72
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
      "0": "Levitate",
      "1": "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Venonat",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.5,
    baseStats: {
      hp: 70,
      atk: 65,
      def: 65,
      spe: 111,
      spa: 117,
      spd: 87
    }
  },
  diglett: {
    name: "Diglett",
    num: 50,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Wimp Out",
      H: "Arena Trap"
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
      hp: 25,
      atk: 65,
      def: 50,
      spe: 115,
      spa: 25,
      spd: 50
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
      "0": "Hustle",
      "1": "Wimp Out",
      H: "Arena Trap"
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
      hp: 25,
      atk: 65,
      def: 60,
      spe: 105,
      spa: 25,
      spd: 50
    }
  },
  dugtrio: {
    name: "Dugtrio",
    num: 51,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Expertise",
      H: "Arena Trap"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Diglett",
    evoLevel: 20,
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
      hp: 75,
      atk: 105,
      def: 70,
      spe: 130,
      spa: 30,
      spd: 70
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
      "0": "Hustle",
      "1": "Expertise",
      H: "Arena Trap"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Diglett-Alola",
    evoLevel: 20,
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
      hp: 75,
      atk: 105,
      def: 80,
      spe: 120,
      spa: 40,
      spd: 60
    }
  },
  meowth: {
    name: "Meowth",
    num: 52,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Persian"
    ],
    formes: [
      "Meowth",
      "Meowth-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 40,
      atk: 65,
      def: 35,
      spe: 95,
      spa: 55,
      spd: 40
    }
  },
  meowthalola: {
    name: "Meowth-Alola",
    num: 52,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Hubris"
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
      "Meowth-Alola"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.2,
    baseStats: {
      hp: 40,
      atk: 60,
      def: 35,
      spe: 95,
      spa: 65,
      spd: 40
    }
  },
  persian: {
    name: "Persian",
    num: 53,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Super Luck",
      "1": "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Meowth",
    evoLevel: 22,
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
      hp: 70,
      atk: 102,
      def: 65,
      spe: 118,
      spa: 90,
      spd: 70
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
      "1": "Hubris"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Meowth-Alola",
    evoType: null,
    evoLevel: 22,
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
      hp: 70,
      atk: 102,
      def: 65,
      spe: 115,
      spa: 93,
      spd: 70
    }
  },
  psyduck: {
    name: "Psyduck",
    num: 54,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Unaware"
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
      atk: 55,
      def: 50,
      spe: 55,
      spa: 80,
      spd: 60
    }
  },
  golduck: {
    name: "Golduck",
    num: 55,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Magic Guard"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Psyduck",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 76.6,
    baseStats: {
      hp: 80,
      atk: 82,
      def: 78,
      spe: 101,
      spa: 114,
      spd: 80
    }
  },
  mankey: {
    name: "Mankey",
    num: 56,
    types: [
      "Fighting",
      "Electric"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Defiant"
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
      hp: 50,
      atk: 85,
      def: 45,
      spe: 115,
      spa: 30,
      spd: 45
    }
  },
  primeape: {
    name: "Primeape",
    num: 57,
    types: [
      "Fighting",
      "Electric"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Reckless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Mankey",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 80,
      spe: 115,
      spa: 60,
      spd: 80
    }
  },
  growlithe: {
    name: "Growlithe",
    num: 58,
    types: [
      "Fire",
      "Ice"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Refrigerate"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Arcanine"
    ],
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 19,
    baseStats: {
      hp: 55,
      atk: 75,
      def: 55,
      spe: 85,
      spa: 75,
      spd: 55
    }
  },
  arcanine: {
    name: "Arcanine",
    num: 59,
    types: [
      "Fire",
      "Ice"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Refrigerate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Growlithe",
    evoItem: null,
    evoType: null,
    evoLevel: 35,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 155,
    baseStats: {
      hp: 90,
      atk: 120,
      def: 80,
      spe: 115,
      spa: 90,
      spd: 80
    }
  },
  poliwag: {
    name: "Poliwag",
    num: 60,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Gooey"
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
      spe: 75,
      spa: 60,
      spd: 55
    }
  },
  poliwhirl: {
    name: "Poliwhirl",
    num: 61,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Gooey"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Poliwrath",
      "Politoed"
    ],
    prevo: "Poliwag",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 80,
      spe: 65,
      spa: 80,
      spd: 80
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
      "0": "Swift Swim",
      "1": "Stamina"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Poliwhirl",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 54,
    baseStats: {
      hp: 95,
      atk: 140,
      def: 95,
      spe: 60,
      spa: 70,
      spd: 90
    }
  },
  abra: {
    name: "Abra",
    num: 63,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Trace"
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
      hp: 35,
      atk: 20,
      def: 25,
      spe: 90,
      spa: 95,
      spd: 60
    }
  },
  kadabra: {
    name: "Kadabra",
    num: 64,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Magic Guard",
      "1": "Trace"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Alakazam"
    ],
    prevo: "Abra",
    evoLevel: 18,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 56.5,
    baseStats: {
      hp: 55,
      atk: 35,
      def: 40,
      spe: 105,
      spa: 115,
      spd: 75
    }
  },
  alakazam: {
    name: "Alakazam",
    num: 65,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Magic Guard",
      "1": "Trace"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Kadabra",
    evoType: null,
    evoLevel: 33,
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
      hp: 70,
      atk: 50,
      def: 50,
      spe: 120,
      spa: 135,
      spd: 100
    }
  },
  alakazammega: {
    name: "Alakazam-Mega",
    num: 65,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Sixth Sense",
      "1": "Levitate"
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
      hp: 70,
      atk: 50,
      def: 65,
      spe: 135,
      spa: 180,
      spd: 125
    }
  },
  machop: {
    name: "Machop",
    num: 66,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Defiant"
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
      hp: 50,
      atk: 90,
      def: 70,
      spe: 40,
      spa: 30,
      spd: 50
    }
  },
  machoke: {
    name: "Machoke",
    num: 67,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Defiant"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Machamp"
    ],
    prevo: "Machop",
    evoLevel: 20,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 70.5,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 85,
      spe: 55,
      spa: 40,
      spd: 60
    }
  },
  machamp: {
    name: "Machamp",
    num: 68,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Sheer Force"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Machoke",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 36,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 130,
    baseStats: {
      hp: 95,
      atk: 150,
      def: 100,
      spe: 70,
      spa: 50,
      spd: 85
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
      "0": "Adaptability",
      "1": "Metabolism"
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
      atk: 65,
      def: 35,
      spe: 65,
      spa: 75,
      spd: 35
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
      "0": "Adaptability",
      "1": "Metabolism"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Victreebel"
    ],
    prevo: "Bellsprout",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.4,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 80,
      spe: 55,
      spa: 90,
      spd: 80
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
      "0": "Adaptability",
      "1": "Intimidate"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Weepinbell",
    evoItem: null,
    evoType: null,
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 100,
      atk: 105,
      def: 80,
      spe: 70,
      spa: 115,
      spd: 80
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
      "0": "Energy Shield",
      "1": "Adaptability"
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
      hp: 50,
      atk: 40,
      def: 40,
      spe: 70,
      spa: 70,
      spd: 100
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
      "0": "Energy Shield",
      "1": "Adaptability"
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
      def: 70,
      spe: 100,
      spa: 110,
      spd: 120
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
      "0": "Rough Skin",
      "1": "Sturdy"
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
      hp: 45,
      atk: 80,
      def: 100,
      spe: 20,
      spa: 30,
      spd: 50
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
      "0": "Galvanize",
      "1": "Sturdy",
      H: "Magnet Pull"
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
      hp: 45,
      atk: 80,
      def: 100,
      spe: 20,
      spa: 30,
      spd: 50
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
      "0": "Rough Skin",
      "1": "Sturdy"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Golem"
    ],
    prevo: "Geodude",
    evoLevel: 20,
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
      hp: 70,
      atk: 110,
      def: 115,
      spe: 65,
      spa: 35,
      spd: 55
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
      "0": "Galvanize",
      "1": "Sturdy",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Golem-Alola"
    ],
    prevo: "Geodude-Alola",
    evoLevel: 20,
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
      hp: 70,
      atk: 110,
      def: 115,
      spe: 60,
      spa: 35,
      spd: 60
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
      "0": "Headstrong",
      "1": "Sturdy"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Graveler",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 36,
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
      spe: 95,
      spa: 55,
      spd: 70
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
      "0": "Galvanize",
      "1": "Sturdy",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Graveler-Alola",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 36,
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
      spe: 45,
      spa: 105,
      spd: 70
    }
  },
  ponyta: {
    name: "Ponyta",
    num: 77,
    types: [
      "Fire",
      "Normal"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Competitive"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Rapidash"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 55,
      atk: 85,
      def: 55,
      spe: 110,
      spa: 70,
      spd: 55
    }
  },
  rapidash: {
    name: "Rapidash",
    num: 78,
    types: [
      "Fire",
      "Normal"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Ponyta",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 95,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 70,
      spe: 125,
      spa: 100,
      spd: 70
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
      "0": "Unaware",
      "1": "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Slowbro",
      "Slowking"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 65,
      spe: 10,
      spa: 65,
      spd: 80
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
      "0": "Unaware",
      "1": "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 29,
    formes: [
      "Slowbro",
      "Slowbro-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 78.5,
    baseStats: {
      hp: 95,
      atk: 85,
      def: 115,
      spe: 25,
      spa: 100,
      spd: 95
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
      "0": "Bulletproof",
      "1": "Shell Armor"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    baseSpecies: "Slowbro",
    forme: "Mega",
    formes: [
      "Slowbro",
      "Slowbro-Mega"
    ],
    requiredItem: "Slowbronite",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 95,
      atk: 95,
      def: 180,
      spe: 25,
      spa: 100,
      spd: 120
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
      "0": "Levitate",
      "1": "Galvanize",
      H: "Magnet Pull"
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
      def: 90,
      spe: 45,
      spa: 95,
      spd: 70
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
      "0": "Levitate",
      "1": "Galvanize",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Magnezone"
    ],
    prevo: "Magnemite",
    evoLevel: 25,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 60,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 95,
      spe: 80,
      spa: 120,
      spd: 80
    }
  },
  farfetchd: {
    name: "Farfetch’d",
    num: 83,
    types: [
      "Fighting",
      "Flying"
    ],
    abilities: {
      "0": "Super Luck",
      "1": "Unburden"
    },
    eggGroups: [
      "Flying",
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 67,
      atk: 109,
      def: 70,
      spe: 106,
      spa: 58,
      spd: 70
    }
  },
  doduo: {
    name: "Doduo",
    num: 84,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Emergency Exit",
      "1": "Defiant"
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
      hp: 50,
      atk: 85,
      def: 45,
      spe: 110,
      spa: 35,
      spd: 45
    }
  },
  dodrio: {
    name: "Dodrio",
    num: 85,
    types: [
      "Ground",
      "Flying"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Defiant"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Doduo",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 85.2,
    baseStats: {
      hp: 75,
      atk: 115,
      def: 70,
      spe: 125,
      spa: 60,
      spd: 70
    }
  },
  seel: {
    name: "Seel",
    num: 86,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Fur Coat"
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
      atk: 65,
      def: 55,
      spe: 45,
      spa: 65,
      spd: 75
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
      "0": "Swift Swim",
      "1": "Fur Coat"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Seel",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 100,
      atk: 90,
      def: 80,
      spe: 70,
      spa: 90,
      spd: 105
    }
  },
  grimer: {
    name: "Grimer",
    num: 88,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Regenerator"
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
      hp: 60,
      atk: 80,
      def: 60,
      spe: 15,
      spa: 70,
      spd: 85
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
      "0": "Merciless",
      "1": "Regenerator"
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
      hp: 60,
      atk: 85,
      def: 60,
      spe: 15,
      spa: 70,
      spd: 80
    }
  },
  muk: {
    name: "Muk",
    num: 89,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Grimer",
    evoLevel: 31,
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
      hp: 110,
      atk: 110,
      def: 80,
      spe: 15,
      spa: 90,
      spd: 120
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
      "0": "Merciless",
      "1": "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Grimer-Alola",
    evoLevel: 31,
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
      hp: 110,
      atk: 115,
      def: 85,
      spe: 15,
      spa: 90,
      spd: 110
    }
  },
  shellder: {
    name: "Shellder",
    num: 90,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Sturdy",
      "1": "Technician"
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
      hp: 50,
      atk: 60,
      def: 110,
      spe: 50,
      spa: 30,
      spd: 50
    }
  },
  cloyster: {
    name: "Cloyster",
    num: 91,
    types: [
      "Water",
      "Steel"
    ],
    abilities: {
      "0": "Bulletproof",
      "1": "Technician"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Shellder",
    evoItem: null,
    evoType: null,
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 132.5,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 180,
      spe: 70,
      spa: 40,
      spd: 70
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
      "0": "Levitate",
      "1": "Merciless"
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
      atk: 10,
      def: 30,
      spe: 100,
      spa: 95,
      spd: 65
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
      "0": "Levitate",
      "1": "Ruthless"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gengar"
    ],
    prevo: "Gastly",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.1,
    baseStats: {
      hp: 45,
      atk: 95,
      def: 45,
      spe: 115,
      spa: 115,
      spd: 70
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
      "0": "Sinister",
      "1": "Merciless"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Haunter",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 36,
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
      hp: 65,
      atk: 70,
      def: 60,
      spe: 115,
      spa: 130,
      spd: 85
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
      "0": "Psychic Surge",
      "1": "Sixth Sense",
      H: "Shadow Tag"
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
      hp: 65,
      atk: 80,
      def: 60,
      spe: 130,
      spa: 175,
      spd: 115
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
      "0": "Sand Rush",
      "1": "Solid Rock"
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
      hp: 120,
      atk: 120,
      def: 140,
      spe: 70,
      spa: 30,
      spd: 45
    }
  },
  drowzee: {
    name: "Drowzee",
    num: 96,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Thick Fat",
      "1": "Metabolism"
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
      hp: 75,
      atk: 48,
      def: 80,
      spe: 42,
      spa: 90,
      spd: 100
    }
  },
  hypno: {
    name: "Hypno",
    num: 97,
    types: [
      "Psychic",
      "Dark"
    ],
    abilities: {
      "0": "Bad Dreams",
      "1": "Sinister"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Drowzee",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75.6,
    baseStats: {
      hp: 85,
      atk: 73,
      def: 80,
      spe: 67,
      spa: 115,
      spd: 115
    }
  },
  krabby: {
    name: "Krabby",
    num: 98,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Sturdy"
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
      hp: 40,
      atk: 105,
      def: 90,
      spe: 70,
      spa: 25,
      spd: 40
    }
  },
  kingler: {
    name: "Kingler",
    num: 99,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Sturdy"
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
      hp: 75,
      atk: 130,
      def: 115,
      spe: 75,
      spa: 50,
      spd: 80
    }
  },
  voltorb: {
    name: "Voltorb",
    num: 100,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Berserk"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Electrode"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 10.4,
    baseStats: {
      hp: 40,
      atk: 20,
      def: 40,
      spe: 120,
      spa: 100,
      spd: 50
    }
  },
  electrode: {
    name: "Electrode",
    num: 101,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Berserk"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Voltorb",
    evoLevel: 26,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 66.6,
    baseStats: {
      hp: 60,
      atk: 35,
      def: 70,
      spe: 155,
      spa: 135,
      spd: 80
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
      "0": "Grassy Guard",
      "1": "Harvest"
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
      hp: 65,
      atk: 45,
      def: 85,
      spe: 30,
      spa: 90,
      spd: 85
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
      "0": "Solar Rush",
      "1": "Harvest"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Exeggcute",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 35,
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
      atk: 100,
      def: 90,
      spe: 50,
      spa: 125,
      spd: 115
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
      "0": "Solar Rush",
      "1": "Headstrong"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Exeggcute",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 35,
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
      hp: 120,
      atk: 125,
      def: 90,
      spe: 50,
      spa: 100,
      spd: 90
    }
  },
  cubone: {
    name: "Cubone",
    num: 104,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Technician"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.5,
    baseStats: {
      hp: 50,
      atk: 50,
      def: 90,
      spe: 65,
      spa: 35,
      spd: 60
    }
  },
  marowak: {
    name: "Marowak",
    num: 105,
    types: [
      "Ground",
      "Fighting"
    ],
    abilities: {
      "0": "Technician",
      "1": "Headstrong"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cubone",
    evoItem: "Fighting Gem",
    evoType: "useItem",
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
      hp: 65,
      atk: 80,
      def: 115,
      spe: 90,
      spa: 50,
      spd: 80
    }
  },
  marowakalola: {
    name: "Marowak-Alola",
    num: 105,
    types: [
      "Ghost",
      "Fire"
    ],
    abilities: {
      "0": "Technician",
      "1": "Headstrong"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cubone",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 28,
    evoCondition: null,
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
      hp: 65,
      atk: 80,
      def: 110,
      spe: 95,
      spa: 50,
      spd: 80
    }
  },
  marowakalolatotem: {
    name: "Marowak-Alola-Totem",
    num: 105,
    types: [
      "Ghost",
      "Fire"
    ],
    abilities: {
      "0": "Technician",
      "1": "Lightning Rod"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cubone",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 28,
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
      hp: 80,
      atk: 80,
      def: 110,
      spe: 95,
      spa: 105,
      spd: 80
    }
  },
  hitmonlee: {
    name: "Hitmonlee",
    num: 106,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Unburden"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 24,
    evoCondition: null,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 49.8,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 75,
      spe: 105,
      spa: 35,
      spd: 110
    }
  },
  hitmonchan: {
    name: "Hitmonchan",
    num: 107,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 24,
    evoCondition: null,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 50.2,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 85,
      spe: 110,
      spa: 30,
      spd: 110
    }
  },
  lickitung: {
    name: "Lickitung",
    num: 108,
    types: [
      "Normal",
      "Poison"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Liquid Veil"
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
      atk: 85,
      def: 95,
      spe: 30,
      spa: 85,
      spd: 95
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
      "1": "Flash Fire",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Weezing"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 50,
      atk: 35,
      def: 95,
      spe: 40,
      spa: 80,
      spd: 75
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
      "1": "Flash Fire",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Koffing",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 80,
      atk: 60,
      def: 130,
      spe: 60,
      spa: 110,
      spd: 95
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
      "0": "Hustle",
      "1": "Reckless"
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
      atk: 118,
      def: 115,
      spe: 92,
      spa: 30,
      spd: 45
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
      "0": "Hustle",
      "1": "Battle Armor"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Rhyperior"
    ],
    prevo: "Rhyhorn",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 105,
      atk: 133,
      def: 120,
      spe: 62,
      spa: 35,
      spd: 70
    }
  },
  chansey: {
    name: "Chansey",
    num: 113,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Super Luck",
      H: "Friend Guard"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Blissey"
    ],
    prevo: "Happiny",
    evoItem: null,
    evoType: null,
    evoLevel: 20,
    evoCondition: null,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 34.6,
    baseStats: {
      hp: 150,
      atk: 20,
      def: 40,
      spe: 40,
      spa: 80,
      spd: 120
    }
  },
  tangela: {
    name: "Tangela",
    num: 114,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Regenerator"
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
      atk: 60,
      def: 115,
      spe: 65,
      spa: 100,
      spd: 75
    }
  },
  kangaskhan: {
    name: "Kangaskhan",
    num: 115,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Instinct"
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
      atk: 120,
      def: 90,
      spe: 90,
      spa: 40,
      spd: 80
    }
  },
  kangaskhanmega: {
    name: "Kangaskhan-Mega",
    num: 115,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Expertise",
      "1": "Intimidate"
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
      atk: 130,
      def: 110,
      spe: 100,
      spa: 90,
      spd: 90
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
      "1": "Rapid Fire"
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
      hp: 40,
      atk: 40,
      def: 70,
      spe: 75,
      spa: 85,
      spd: 50
    }
  },
  seadra: {
    name: "Seadra",
    num: 117,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Kingdra"
    ],
    prevo: "Horsea",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 55,
      atk: 70,
      def: 95,
      spe: 90,
      spa: 105,
      spd: 65
    }
  },
  goldeen: {
    name: "Goldeen",
    num: 118,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Lightning Rod"
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
      hp: 50,
      atk: 72,
      def: 60,
      spe: 83,
      spa: 75,
      spd: 70
    }
  },
  seaking: {
    name: "Seaking",
    num: 119,
    types: [
      "Water",
      "Ghost"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Lightning Rod"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Goldeen",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 80,
      atk: 112,
      def: 65,
      spe: 98,
      spa: 90,
      spd: 90
    }
  },
  staryu: {
    name: "Staryu",
    num: 120,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Energy Shield",
      "1": "Neuroforce"
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
      hp: 35,
      atk: 30,
      def: 55,
      spe: 97,
      spa: 103,
      spd: 80
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
      "0": "Energy Shield",
      "1": "Neuroforce",
      H: "Interstellar"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Staryu",
    evoItem: null,
    evoType: null,
    evoLevel: 29,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 80,
    baseStats: {
      hp: 70,
      atk: 45,
      def: 85,
      spe: 117,
      spa: 123,
      spd: 95
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
      "0": "Technician",
      "1": "Energy Shield"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Mime Jr.",
    evoType: null,
    evoLevel: 25,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 54.5,
    baseStats: {
      hp: 70,
      atk: 45,
      def: 65,
      spe: 90,
      spa: 115,
      spd: 150
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
      "0": "Technician",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Scizor"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 80,
      spe: 135,
      spa: 40,
      spd: 80
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
      "0": "Serene Grace",
      "1": "Dry Skin"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Smoochum",
    evoLevel: 23,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 40.6,
    baseStats: {
      hp: 70,
      atk: 50,
      def: 60,
      spe: 95,
      spa: 125,
      spd: 125
    }
  },
  electabuzz: {
    name: "Electabuzz",
    num: 125,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Volt Rush",
      "1": "Teravolt"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Electivire"
    ],
    prevo: "Elekid",
    evoLevel: 20,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 30,
    baseStats: {
      hp: 70,
      atk: 108,
      def: 65,
      spe: 112,
      spa: 95,
      spd: 75
    }
  },
  magmar: {
    name: "Magmar",
    num: 126,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Turboblaze",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Magmortar"
    ],
    prevo: "Magby",
    evoLevel: 20,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 44.5,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 70,
      spe: 93,
      spa: 112,
      spd: 85
    }
  },
  pinsir: {
    name: "Pinsir",
    num: 127,
    types: [
      "Bug",
      "Ground"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Hustle"
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
      hp: 80,
      atk: 135,
      def: 113,
      spe: 87,
      spa: 40,
      spd: 80
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
      "0": "Aerilate",
      "1": "Hustle"
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
      hp: 80,
      atk: 165,
      def: 123,
      spe: 117,
      spa: 60,
      spd: 90
    }
  },
  tauros: {
    name: "Tauros",
    num: 128,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Stamina",
      "1": "Reckless"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 88.4,
    baseStats: {
      hp: 90,
      atk: 124,
      def: 95,
      spe: 116,
      spa: 40,
      spd: 70
    }
  },
  magikarp: {
    name: "Magikarp",
    num: 129,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Rattled"
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
      hp: 30,
      atk: 10,
      def: 55,
      spe: 40,
      spa: 10,
      spd: 55
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
      "0": "Berserk",
      "1": "Intimidate"
    },
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    prevo: "Magikarp",
    evoLevel: 40,
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
      hp: 114,
      atk: 125,
      def: 80,
      spe: 81,
      spa: 120,
      spd: 80
    }
  },
  gyaradosmega: {
    name: "Gyarados-Mega",
    num: 130,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Multiscale"
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
      hp: 114,
      atk: 160,
      def: 90,
      spe: 86,
      spa: 160,
      spd: 90
    }
  },
  lapras: {
    name: "Lapras",
    num: 131,
    types: [
      "Water",
      "Dragon"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Stamina"
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
      def: 100,
      spe: 50,
      spa: 95,
      spd: 115
    }
  },
  ditto: {
    name: "Ditto",
    num: 132,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Imposter",
      "1": "Regenerator"
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
      hp: 50,
      atk: 50,
      def: 50,
      spe: 50,
      spa: 50,
      spd: 100
    }
  },
  eevee: {
    name: "Eevee",
    num: 133,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Versatility"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Leafeon",
      "Glaceon",
      "Jolteon",
      "Vaporeon",
      "Flareon",
      "Sylveon",
      "Espeon",
      "Umbreon"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 6.5,
    baseStats: {
      hp: 55,
      atk: 60,
      def: 55,
      spe: 75,
      spa: 60,
      spd: 65
    }
  },
  vaporeon: {
    name: "Vaporeon",
    num: 134,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Drizzle",
      "1": "Regenerator",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 29,
    baseStats: {
      hp: 65,
      atk: 60,
      def: 80,
      spe: 80,
      spa: 110,
      spd: 130
    }
  },
  jolteon: {
    name: "Jolteon",
    num: 135,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Electric Surge",
      "1": "Galvanize",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Electric Gem",
    evoType: "useItem",
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 24.5,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spe: 130,
      spa: 110,
      spd: 95
    }
  },
  flareon: {
    name: "Flareon",
    num: 136,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Drought",
      "1": "Fluffy",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Fire Gem",
    evoType: "useItem",
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 80,
      def: 65,
      spe: 90,
      spa: 115,
      spd: 110
    }
  },
  porygon: {
    name: "Porygon",
    num: 137,
    types: [
      "Electric",
      "Psychic"
    ],
    abilities: {
      "0": "Database",
      "1": "Levitate"
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
      hp: 75,
      atk: 40,
      def: 90,
      spe: 40,
      spa: 95,
      spd: 100
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
      "0": "Weak Armor",
      "1": "Shell Armor"
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
      hp: 45,
      atk: 40,
      def: 100,
      spe: 45,
      spa: 90,
      spd: 80
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
      "0": "Weak Armor",
      "1": "Shell Armor"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Omanyte",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 35,
    baseStats: {
      hp: 70,
      atk: 60,
      def: 140,
      spe: 55,
      spa: 115,
      spd: 110
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
      "1": "Battle Armor"
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
      hp: 45,
      atk: 77,
      def: 110,
      spe: 53,
      spa: 40,
      spd: 75
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
      "1": "Ruthless"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Kabuto",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 40.5,
    baseStats: {
      hp: 70,
      atk: 132,
      def: 115,
      spe: 108,
      spa: 45,
      spd: 80
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
      "0": "Strong Jaw",
      "1": "Intimidate"
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
      hp: 90,
      atk: 125,
      def: 80,
      spe: 130,
      spa: 50,
      spd: 75
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
      "0": "Tough Claws",
      "1": "Aerilate"
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
      hp: 90,
      atk: 145,
      def: 110,
      spe: 150,
      spa: 60,
      spd: 95
    }
  },
  snorlax: {
    name: "Snorlax",
    num: 143,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Metabolism",
      "1": "Comatose",
      H: "Poison Heal"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Munchlax",
    evoType: null,
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 460,
    baseStats: {
      hp: 160,
      atk: 120,
      def: 85,
      spe: 10,
      spa: 65,
      spd: 110
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
      "0": "Guarding Gale",
      "1": "Snow Warning"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 55.4,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 95,
      spe: 105,
      spa: 125,
      spd: 125
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
      "0": "Guarding Gale",
      "1": "Volt Absorb"
    },
    eggGroups: [
      "Undiscovered"
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
      spe: 115,
      spa: 125,
      spd: 95
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
      "0": "Guarding Gale",
      "1": "Solar Power"
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
      hp: 90,
      atk: 90,
      def: 90,
      spe: 105,
      spa: 125,
      spd: 100
    }
  },
  dratini: {
    name: "Dratini",
    num: 147,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Swift Swim"
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
      hp: 55,
      atk: 45,
      def: 55,
      spe: 55,
      spa: 80,
      spd: 70
    }
  },
  dragonair: {
    name: "Dragonair",
    num: 148,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    evos: [
      "Dragonite"
    ],
    prevo: "Dratini",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16.5,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 80,
      spe: 70,
      spa: 90,
      spd: 90
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
      "0": "Aerilate",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Dragonair",
    evoItem: "Flying Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 210,
    baseStats: {
      hp: 110,
      atk: 120,
      def: 90,
      spe: 80,
      spa: 110,
      spd: 90
    }
  },
  mewtwo: {
    name: "Mewtwo",
    num: 150,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Psychic Surge"
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
      hp: 100,
      atk: 100,
      def: 80,
      spe: 135,
      spa: 200,
      spd: 135
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
      "0": "Expertise"
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
      hp: 100,
      atk: 200,
      def: 100,
      spe: 165,
      spa: 150,
      spd: 135
    }
  },
  mewtwomegay: {
    name: "Mewtwo-Mega-Y",
    num: 150,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Hubris"
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
      hp: 100,
      atk: 80,
      def: 60,
      spe: 180,
      spa: 250,
      spd: 180
    }
  },
  mew: {
    name: "Mew",
    num: 151,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Illusion"
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
      spe: 100,
      spa: 100,
      spd: 100
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
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Bayleef"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.4,
    baseStats: {
      hp: 47,
      atk: 47,
      def: 65,
      spe: 43,
      spa: 53,
      spd: 65
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
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Meganium"
    ],
    prevo: "Chikorita",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.8,
    baseStats: {
      hp: 67,
      atk: 67,
      def: 80,
      spe: 53,
      spa: 78,
      spd: 90
    }
  },
  meganium: {
    name: "Meganium",
    num: 154,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Bayleef",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 100.5,
    baseStats: {
      hp: 112,
      atk: 82,
      def: 100,
      spe: 48,
      spa: 93,
      spd: 115
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
      "1": "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Quilava"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.9,
    baseStats: {
      hp: 43,
      atk: 54,
      def: 43,
      spe: 67,
      spa: 70,
      spd: 43
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
      "1": "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Typhlosion"
    ],
    prevo: "Cyndaquil",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19,
    baseStats: {
      hp: 58,
      atk: 69,
      def: 58,
      spe: 93,
      spa: 99,
      spd: 58
    }
  },
  typhlosion: {
    name: "Typhlosion",
    num: 157,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Hubris",
      "1": "Berserk"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Quilava",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 78,
      atk: 94,
      def: 73,
      spe: 103,
      spa: 129,
      spd: 73
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
      "1": "Strong Jaw"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Croconaw"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.5,
    baseStats: {
      hp: 50,
      atk: 70,
      def: 65,
      spe: 52,
      spa: 35,
      spd: 48
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
      "1": "Strong Jaw"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Feraligatr"
    ],
    prevo: "Totodile",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 100,
      def: 85,
      spe: 72,
      spa: 50,
      spd: 63
    }
  },
  feraligatr: {
    name: "Feraligatr",
    num: 160,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Sheer Force"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Croconaw",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 88.8,
    baseStats: {
      hp: 85,
      atk: 125,
      def: 100,
      spe: 97,
      spa: 60,
      spd: 83
    }
  },
  sentret: {
    name: "Sentret",
    num: 161,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Simple",
      "1": "Emergency Exit"
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
      hp: 45,
      atk: 55,
      def: 45,
      spe: 95,
      spa: 45,
      spd: 45
    }
  },
  furret: {
    name: "Furret",
    num: 162,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Simple",
      "1": "Fur Coat"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sentret",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 85,
      atk: 80,
      def: 65,
      spe: 115,
      spa: 60,
      spd: 75
    }
  },
  hoothoot: {
    name: "Hoothoot",
    num: 163,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Hubris",
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
      hp: 51,
      atk: 30,
      def: 56,
      spe: 51,
      spa: 66,
      spd: 76
    }
  },
  noctowl: {
    name: "Noctowl",
    num: 164,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Hubris",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Hoothoot",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.8,
    baseStats: {
      hp: 76,
      atk: 50,
      def: 76,
      spe: 96,
      spa: 106,
      spd: 111
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
      "0": "Wimp Out",
      "1": "Technician"
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
      def: 50,
      spe: 65,
      spa: 60,
      spd: 95
    }
  },
  ledian: {
    name: "Ledian",
    num: 166,
    types: [
      "Bug",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Technician",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Ledyba",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35.6,
    baseStats: {
      hp: 65,
      atk: 70,
      def: 50,
      spe: 110,
      spa: 110,
      spd: 120
    }
  },
  spinarak: {
    name: "Spinarak",
    num: 167,
    types: [
      "Bug",
      "Dark"
    ],
    abilities: {
      "0": "Unnerve",
      "1": "Merciless"
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
      atk: 66,
      def: 55,
      spe: 79,
      spa: 35,
      spd: 55
    }
  },
  ariados: {
    name: "Ariados",
    num: 168,
    types: [
      "Bug",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Ruthless"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Spinarak",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.5,
    baseStats: {
      hp: 70,
      atk: 111,
      def: 80,
      spe: 99,
      spa: 40,
      spd: 80
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
      "0": "Instinct",
      "1": "Intimidate",
      H: "Stakeout"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Golbat",
    evoItem: "Flying Gem",
    evoType: "useItem",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 75,
    baseStats: {
      hp: 85,
      atk: 90,
      def: 70,
      spe: 145,
      spa: 90,
      spd: 70
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
      "0": "Swift Swim",
      "1": "Lightning Rod"
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
      hp: 55,
      atk: 38,
      def: 55,
      spe: 42,
      spa: 85,
      spd: 95
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
      "0": "Swift Swim",
      "1": "Lightning Rod"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Chinchou",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22.5,
    baseStats: {
      hp: 80,
      atk: 58,
      def: 80,
      spe: 67,
      spa: 115,
      spd: 125
    }
  },
  pichu: {
    name: "Pichu",
    num: 172,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Lightning Rod"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Pikachu"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 40,
      atk: 50,
      def: 35,
      spe: 60,
      spa: 75,
      spd: 40
    }
  },
  cleffa: {
    name: "Cleffa",
    num: 173,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Unaware",
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
      atk: 40,
      def: 60,
      spe: 30,
      spa: 70,
      spd: 80
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
      "0": "Huge Power",
      "1": "Fluffy"
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
      hp: 30,
      atk: 20,
      def: 30,
      spe: 40,
      spa: 65,
      spd: 65
    }
  },
  togepi: {
    name: "Togepi",
    num: 175,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Trace",
      "1": "Magic Bounce"
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
      hp: 45,
      atk: 20,
      def: 85,
      spe: 20,
      spa: 65,
      spd: 95
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
      "0": "Trace",
      "1": "Magic Bounce"
    },
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    evos: [
      "Togekiss"
    ],
    prevo: "Togepi",
    evoType: null,
    evoLevel: 17,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 3.2,
    baseStats: {
      hp: 65,
      atk: 40,
      def: 85,
      spe: 40,
      spa: 90,
      spd: 120
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
      "0": "Magic Bounce",
      "1": "Trace"
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
      atk: 35,
      def: 55,
      spe: 50,
      spa: 80,
      spd: 90
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
      "0": "Magic Bounce",
      "1": "Sixth Sense"
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
      hp: 70,
      atk: 55,
      def: 90,
      spe: 70,
      spa: 115,
      spd: 125
    }
  },
  mareep: {
    name: "Mareep",
    num: 179,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Lightning Rod"
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
      hp: 50,
      atk: 40,
      def: 50,
      spe: 45,
      spa: 70,
      spd: 65
    }
  },
  flaaffy: {
    name: "Flaaffy",
    num: 180,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Lightning Rod"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Ampharos"
    ],
    prevo: "Mareep",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13.3,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 65,
      spe: 50,
      spa: 90,
      spd: 85
    }
  },
  ampharos: {
    name: "Ampharos",
    num: 181,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Dazzling",
      "1": "Lightning Rod"
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
      spe: 55,
      spa: 115,
      spd: 115
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
      "0": "Fluffy",
      "1": "Volt Rush"
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
      def: 85,
      spe: 55,
      spa: 165,
      spd: 145
    }
  },
  bellossom: {
    name: "Bellossom",
    num: 182,
    types: [
      "Fairy",
      "Grass"
    ],
    abilities: {
      "0": "Drought",
      "1": "Queenly Majesty"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Gloom",
    evoItem: "Fairy Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.8,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 95,
      spe: 95,
      spa: 105,
      spd: 110
    }
  },
  marill: {
    name: "Marill",
    num: 183,
    types: [
      "Fire",
      "Fairy"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Huge Power"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    evos: [
      "Azumarill"
    ],
    prevo: "Azurill",
    evoType: null,
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 65,
      atk: 35,
      def: 65,
      spe: 55,
      spa: 90,
      spd: 90
    }
  },
  azumarill: {
    name: "Azumarill",
    num: 184,
    types: [
      "Fire",
      "Fairy"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Huge Power"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    prevo: "Marill",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 100,
      atk: 55,
      def: 85,
      spe: 60,
      spa: 115,
      spd: 100
    }
  },
  sudowoodo: {
    name: "Sudowoodo",
    num: 185,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Sap Sipper"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Bonsly",
    evoType: null,
    evoLevel: 20,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 70,
      atk: 105,
      def: 115,
      spe: 75,
      spa: 30,
      spd: 85
    }
  },
  politoed: {
    name: "Politoed",
    num: 186,
    types: [
      "Water",
      "Normal"
    ],
    abilities: {
      "0": "Drizzle",
      "1": "Amplifier"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Poliwhirl",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.9,
    baseStats: {
      hp: 80,
      atk: 75,
      def: 80,
      spe: 95,
      spa: 105,
      spd: 115
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
      "0": "Regenerator",
      "1": "Guarding Gale"
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
    weightkg: 3,
    baseStats: {
      hp: 40,
      atk: 35,
      def: 40,
      spe: 75,
      spa: 55,
      spd: 55
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
      "0": "Regenerator",
      "1": "Guarding Gale"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Jumpluff"
    ],
    prevo: "Hoppip",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 55,
      atk: 45,
      def: 65,
      spe: 95,
      spa: 75,
      spd: 75
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
      "0": "Regenerator",
      "1": "Guarding Gale"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Skiploom",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3,
    baseStats: {
      hp: 75,
      atk: 55,
      def: 80,
      spe: 125,
      spa: 95,
      spd: 95
    }
  },
  aipom: {
    name: "Aipom",
    num: 190,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Technician"
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
      hp: 50,
      atk: 74,
      def: 50,
      spe: 106,
      spa: 40,
      spd: 50
    }
  },
  sunkern: {
    name: "Sunkern",
    num: 191,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Simple",
      "1": "Grassy Guard"
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
      hp: 40,
      atk: 30,
      def: 70,
      spe: 30,
      spa: 80,
      spd: 80
    }
  },
  sunflora: {
    name: "Sunflora",
    num: 192,
    types: [
      "Grass",
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Drought",
      H: "Sweltering Sun"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Sunkern",
    evoItem: null,
    evoType: null,
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 75,
      atk: 45,
      def: 85,
      spe: 45,
      spa: 120,
      spd: 110
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
      "0": "Aerilate",
      "1": "Amplifier"
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
      hp: 49,
      atk: 65,
      def: 49,
      spe: 129,
      spa: 99,
      spd: 49
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
      "0": "Simple",
      "1": "Unaware"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Quagsire"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 55,
      atk: 50,
      def: 65,
      spe: 15,
      spa: 50,
      spd: 65
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
      "0": "Simple",
      "1": "Unaware"
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
      def: 95,
      spe: 25,
      spa: 85,
      spd: 95
    }
  },
  espeon: {
    name: "Espeon",
    num: 196,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Psychic Surge",
      "1": "Solar Power",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 25,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 26.5,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spe: 110,
      spa: 115,
      spd: 110
    }
  },
  umbreon: {
    name: "Umbreon",
    num: 197,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Dark Aura",
      H: "Poison Heal"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 25,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 27,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 80,
      spe: 90,
      spa: 95,
      spd: 130
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
      "0": "Prankster",
      "1": "Super Luck"
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
      hp: 57,
      atk: 85,
      def: 51,
      spe: 106,
      spa: 85,
      spd: 51
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
      "0": "Hubris",
      "1": "Regenerator"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    prevo: "Slowpoke",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 95,
      atk: 70,
      def: 95,
      spe: 25,
      spa: 115,
      spd: 115
    }
  },
  misdreavus: {
    name: "Misdreavus",
    num: 200,
    types: [
      "Ghost",
      "Fairy"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Pixilate"
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
      hp: 50,
      atk: 35,
      def: 50,
      spe: 100,
      spa: 100,
      spd: 100
    }
  },
  unown: {
    name: "Unown",
    num: 201,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Wonder Guard"
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
      hp: 1,
      atk: 54,
      def: 1,
      spe: 72,
      spa: 72,
      spd: 1
    }
  },
  wobbuffet: {
    name: "Wobbuffet",
    num: 202,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Emergency Exit",
      "1": "Magic Bounce",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Wynaut",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 190,
      atk: 33,
      def: 118,
      spe: 33,
      spa: 33,
      spd: 118
    }
  },
  girafarig: {
    name: "Girafarig",
    num: 203,
    types: [
      "Normal",
      "Dark"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Psychic Surge"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 41.5,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 80,
      spe: 100,
      spa: 110,
      spd: 80
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
      "1": "Rough Skin"
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
      def: 95,
      spe: 15,
      spa: 65,
      spd: 80
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
      "0": "Bulletproof",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Pineco",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 125.8,
    baseStats: {
      hp: 75,
      atk: 90,
      def: 140,
      spe: 40,
      spa: 90,
      spd: 100
    }
  },
  dunsparce: {
    name: "Dunsparce",
    num: 206,
    types: [
      "Fairy",
      "Ground"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Simple",
      H: "Serene Grace"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14,
    baseStats: {
      hp: 100,
      atk: 85,
      def: 105,
      spe: 45,
      spa: 85,
      spd: 105
    }
  },
  gligar: {
    name: "Gligar",
    num: 207,
    types: [
      "Poison",
      "Flying"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Tough Claws"
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
      atk: 95,
      def: 115,
      spe: 105,
      spa: 35,
      spd: 65
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
      "0": "Sand Stream",
      "1": "Sheer Force"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Onix",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 40,
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
      hp: 130,
      atk: 130,
      def: 180,
      spe: 30,
      spa: 30,
      spd: 100
    }
  },
  steelixmega: {
    name: "Steelix-Mega",
    num: 208,
    types: [
      "Steel",
      "Rock"
    ],
    abilities: {
      "0": "Sand Force",
      "1": "Energy Shield"
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
      hp: 130,
      atk: 150,
      def: 200,
      spe: 30,
      spa: 40,
      spd: 150
    }
  },
  snubbull: {
    name: "Snubbull",
    num: 209,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Intimidate",
      H: "Quick Feet"
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
      def: 60,
      spe: 50,
      spa: 40,
      spd: 60
    }
  },
  granbull: {
    name: "Granbull",
    num: 210,
    types: [
      "Fairy",
      "Fighting"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Intimidate",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Snubbull",
    evoLevel: 26,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 48.7,
    baseStats: {
      hp: 90,
      atk: 130,
      def: 95,
      spe: 70,
      spa: 60,
      spd: 80
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
      "0": "Intimidate",
      "1": "Instinct"
    },
    eggGroups: [
      "Water 2"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.9,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 95,
      spe: 95,
      spa: 95,
      spd: 80
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
      "0": "Technician",
      "1": "Proficiency"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Scyther",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 35,
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
      def: 120,
      spe: 95,
      spa: 40,
      spd: 80
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
      "0": "Tough Claws",
      "1": "Intimidate"
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
      atk: 165,
      def: 150,
      spe: 100,
      spa: 50,
      spd: 100
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
      "0": "Simple",
      "1": "Shell Armor"
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
      hp: 45,
      atk: 10,
      def: 230,
      spe: 10,
      spa: 10,
      spd: 230
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
      "0": "Skill Link",
      "1": "Ruthless",
      H: "Guts"
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
      atk: 130,
      def: 113,
      spe: 92,
      spa: 40,
      spd: 80
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
      "0": "Hustle",
      "1": "Technician"
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
      atk: 190,
      def: 148,
      spe: 67,
      spa: 40,
      spd: 110
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
      "0": "Refrigerate",
      "1": "Technician"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Weavile"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 55,
      atk: 105,
      def: 55,
      spe: 118,
      spa: 42,
      spd: 55
    }
  },
  teddiursa: {
    name: "Teddiursa",
    num: 216,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Metabolism"
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
      hp: 62,
      atk: 80,
      def: 65,
      spe: 53,
      spa: 45,
      spd: 65
    }
  },
  ursaring: {
    name: "Ursaring",
    num: 217,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Tough Claws",
      H: "Quick Feet"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Teddiursa",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 125.8,
    baseStats: {
      hp: 102,
      atk: 135,
      def: 80,
      spe: 83,
      spa: 55,
      spd: 80
    }
  },
  slugma: {
    name: "Slugma",
    num: 218,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Sweltering Sun",
      "1": "Drought"
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
      def: 60,
      spe: 20,
      spa: 95,
      spd: 95
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
      "0": "Sweltering Sun",
      "1": "Drought"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Slugma",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 70,
      atk: 50,
      def: 120,
      spe: 30,
      spa: 115,
      spd: 115
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
      "0": "Refrigerate",
      "1": "Resilient"
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
      hp: 60,
      atk: 65,
      def: 60,
      spe: 50,
      spa: 50,
      spd: 50
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
      "0": "Refrigerate",
      "1": "Resilient"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Mamoswine"
    ],
    prevo: "Swinub",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55.8,
    baseStats: {
      hp: 105,
      atk: 105,
      def: 90,
      spe: 50,
      spa: 60,
      spd: 70
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
      "0": "Rough Skin",
      "1": "Regenerator"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 5,
    baseStats: {
      hp: 65,
      atk: 55,
      def: 125,
      spe: 35,
      spa: 95,
      spd: 125
    }
  },
  remoraid: {
    name: "Remoraid",
    num: 223,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Rapid Fire"
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
      def: 40,
      spe: 95,
      spa: 95,
      spd: 40
    }
  },
  octillery: {
    name: "Octillery",
    num: 224,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    prevo: "Remoraid",
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.5,
    baseStats: {
      hp: 75,
      atk: 115,
      def: 80,
      spe: 40,
      spa: 125,
      spd: 100
    }
  },
  delibird: {
    name: "Delibird",
    num: 225,
    types: [
      "Ice",
      "Fairy"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Technician"
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
      hp: 70,
      atk: 75,
      def: 70,
      spe: 90,
      spa: 90,
      spd: 85
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
      "1": "Guarding Gale"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Mantyke",
    evoType: null,
    evoLevel: 31,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 220,
    baseStats: {
      hp: 115,
      atk: 40,
      def: 85,
      spe: 80,
      spa: 90,
      spd: 140
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
      "0": "Ruthless",
      "1": "Intimidate"
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
      hp: 70,
      atk: 116,
      def: 116,
      spe: 123,
      spa: 40,
      spd: 70
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
      "0": "Unnerve",
      "1": "Sinister"
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
      hp: 50,
      atk: 65,
      def: 40,
      spe: 80,
      spa: 85,
      spd: 50
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
      "0": "Ruthless",
      "1": "Sinister"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Houndour",
    evoLevel: 29,
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
      atk: 95,
      def: 60,
      spe: 105,
      spa: 120,
      spd: 80
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
      "0": "Hubris",
      "1": "Dark Aura"
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
      atk: 110,
      def: 90,
      spe: 115,
      spa: 155,
      spd: 90
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
      "0": "Drizzle",
      "1": "Mega Launcher"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Seadra",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 152,
    baseStats: {
      hp: 85,
      atk: 95,
      def: 100,
      spe: 95,
      spa: 125,
      spd: 100
    }
  },
  phanpy: {
    name: "Phanpy",
    num: 231,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Dry Skin"
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
      hp: 65,
      atk: 85,
      def: 85,
      spe: 40,
      spa: 30,
      spd: 65
    }
  },
  donphan: {
    name: "Donphan",
    num: 232,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Phanpy",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 100,
      atk: 130,
      def: 130,
      spe: 70,
      spa: 40,
      spd: 80
    }
  },
  porygon2: {
    name: "Porygon2",
    num: 233,
    types: [
      "Electric",
      "Psychic"
    ],
    abilities: {
      "0": "Energy Shield",
      "1": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Porygon-Z"
    ],
    prevo: "Porygon",
    evoItem: null,
    evoType: null,
    evoLevel: 35,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 32.5,
    baseStats: {
      hp: 75,
      atk: 60,
      def: 100,
      spe: 60,
      spa: 105,
      spd: 150
    }
  },
  stantler: {
    name: "Stantler",
    num: 234,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Energy Shield"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 71.2,
    baseStats: {
      hp: 83,
      atk: 105,
      def: 73,
      spe: 106,
      spa: 95,
      spd: 73
    }
  },
  smeargle: {
    name: "Smeargle",
    num: 235,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Versatility"
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
      hp: 70,
      atk: 70,
      def: 70,
      spe: 95,
      spa: 70,
      spd: 70
    }
  },
  tyrogue: {
    name: "Tyrogue",
    num: 236,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Defiant",
      "1": "Emergency Exit"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Hitmonchan",
      "Hitmonlee",
      "Hitmontop"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 21,
    baseStats: {
      hp: 45,
      atk: 80,
      def: 70,
      spe: 85,
      spa: 25,
      spd: 45
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
      "1": "Technician"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Tyrogue",
    evoLevel: 24,
    evoCondition: null,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 48,
    baseStats: {
      hp: 70,
      atk: 110,
      def: 95,
      spe: 100,
      spa: 40,
      spd: 110
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
      "0": "Serene Grace",
      "1": "Dry Skin"
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
      def: 45,
      spe: 75,
      spa: 90,
      spd: 90
    }
  },
  elekid: {
    name: "Elekid",
    num: 239,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Volt Rush",
      "1": "Lightning Rod"
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
      atk: 73,
      def: 40,
      spe: 97,
      spa: 75,
      spd: 45
    }
  },
  magby: {
    name: "Magby",
    num: 240,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Flash Fire",
      "1": "Solar Rush"
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
      atk: 65,
      def: 45,
      spe: 83,
      spa: 82,
      spd: 55
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
      "1": "Sap Sipper"
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
      hp: 105,
      atk: 100,
      def: 105,
      spe: 80,
      spa: 40,
      spd: 105
    }
  },
  blissey: {
    name: "Blissey",
    num: 242,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Misty Surge",
      H: "Friend Guard"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Chansey",
    evoItem: "Normal Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 46.8,
    baseStats: {
      hp: 180,
      atk: 30,
      def: 60,
      spe: 45,
      spa: 85,
      spd: 150
    }
  },
  raikou: {
    name: "Raikou",
    num: 243,
    types: [
      "Electric",
      "Dark"
    ],
    abilities: {
      "0": "Drizzle",
      "1": "Strong Jaw"
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
      hp: 80,
      atk: 122,
      def: 70,
      spe: 136,
      spa: 122,
      spd: 70
    }
  },
  entei: {
    name: "Entei",
    num: 244,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Drought",
      "1": "Intimidate"
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
      hp: 80,
      atk: 127,
      def: 85,
      spe: 106,
      spa: 117,
      spd: 85
    }
  },
  suicune: {
    name: "Suicune",
    num: 245,
    types: [
      "Water",
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning",
      "1": "Serene Grace"
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
      hp: 80,
      atk: 75,
      def: 85,
      spe: 116,
      spa: 117,
      spd: 127
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
      "0": "Hustle",
      "1": "Sand Rush"
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
      atk: 79,
      def: 90,
      spe: 46,
      spa: 45,
      spd: 50
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
      "0": "Hustle",
      "1": "Shell Armor"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Tyranitar"
    ],
    prevo: "Larvitar",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 202,
    baseStats: {
      hp: 70,
      atk: 94,
      def: 115,
      spe: 51,
      spa: 65,
      spd: 85
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
      "0": "Bulletproof",
      "1": "Sand Stream"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Pupitar",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 45,
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
      hp: 110,
      atk: 134,
      def: 115,
      spe: 61,
      spa: 95,
      spd: 85
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
      "0": "Berserk",
      "1": "Sand Force"
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
      hp: 110,
      atk: 164,
      def: 150,
      spe: 61,
      spa: 120,
      spd: 95
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
      "0": "Stormy Seas",
      "1": "Multiscale"
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
      hp: 156,
      atk: 110,
      def: 110,
      spe: 110,
      spa: 110,
      spd: 154
    }
  },
  hooh: {
    name: "Ho-Oh",
    num: 250,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Sweltering Sun",
      "1": "Regenerator"
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
      hp: 156,
      atk: 130,
      def: 90,
      spe: 90,
      spa: 130,
      spd: 154
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
      "0": "Grassy Surge",
      "1": "Psychic Surge"
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
      hp: 65,
      atk: 60,
      def: 80,
      spe: 110,
      spa: 135,
      spd: 150
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
      "1": "Technician"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Grovyle"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 40,
      atk: 60,
      def: 40,
      spe: 70,
      spa: 70,
      spd: 40
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
      "1": "Technician"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Sceptile"
    ],
    prevo: "Treecko",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21.6,
    baseStats: {
      hp: 50,
      atk: 95,
      def: 45,
      spe: 115,
      spa: 85,
      spd: 45
    }
  },
  sceptile: {
    name: "Sceptile",
    num: 254,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Grassy Surge",
      "1": "Ruthless"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 52.2,
    baseStats: {
      hp: 75,
      atk: 115,
      def: 65,
      spe: 125,
      spa: 105,
      spd: 65
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
      "0": "Solar Power",
      "1": "Instinct"
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
      hp: 75,
      atk: 145,
      def: 70,
      spe: 145,
      spa: 145,
      spd: 70
    }
  },
  torchic: {
    name: "Torchic",
    num: 255,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Blaze"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Combusken"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.5,
    baseStats: {
      hp: 45,
      atk: 60,
      def: 45,
      spe: 55,
      spa: 70,
      spd: 45
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
      "0": "Speed Boost",
      "1": "Blaze"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Blaziken"
    ],
    prevo: "Torchic",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.5,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 60,
      spe: 75,
      spa: 85,
      spd: 60
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
      "0": "Speed Boost",
      "1": "Reckless"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 52,
    baseStats: {
      hp: 75,
      atk: 120,
      def: 70,
      spe: 105,
      spa: 110,
      spd: 70
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
      "0": "No Guard",
      "1": "Speed Boost"
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
      hp: 75,
      atk: 160,
      def: 75,
      spe: 115,
      spa: 150,
      spd: 75
    }
  },
  mudkip: {
    name: "Mudkip",
    num: 258,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Water Absorb",
      "1": "Torrent"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Marshtomp"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.6,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 50,
      spe: 40,
      spa: 60,
      spd: 50
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
      "0": "Water Absorb",
      "1": "Torrent"
    },
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    evos: [
      "Swampert"
    ],
    prevo: "Mudkip",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 70,
      atk: 85,
      def: 80,
      spe: 50,
      spa: 80,
      spd: 70
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
      "0": "Water Absorb",
      "1": "Hydration"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 81.9,
    baseStats: {
      hp: 100,
      atk: 120,
      def: 90,
      spe: 60,
      spa: 90,
      spd: 90
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
      "0": "Headstrong",
      "1": "Swift Swim"
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
      atk: 170,
      def: 120,
      spe: 65,
      spa: 95,
      spd: 100
    }
  },
  poochyena: {
    name: "Poochyena",
    num: 261,
    types: [
      "Dark",
      "Rock"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Defiant",
      H: "Stakeout"
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
      hp: 45,
      atk: 90,
      def: 70,
      spe: 90,
      spa: 30,
      spd: 45
    }
  },
  mightyena: {
    name: "Mightyena",
    num: 262,
    types: [
      "Dark",
      "Rock"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Strong Jaw",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Poochyena",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37,
    baseStats: {
      hp: 70,
      atk: 125,
      def: 90,
      spe: 110,
      spa: 60,
      spd: 60
    }
  },
  zigzagoon: {
    name: "Zigzagoon",
    num: 263,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Linoone"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 48,
      atk: 60,
      def: 51,
      spe: 80,
      spa: 30,
      spd: 51
    }
  },
  linoone: {
    name: "Linoone",
    num: 264,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Zigzagoon",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 73,
      atk: 95,
      def: 71,
      spe: 120,
      spa: 50,
      spd: 71
    }
  },
  wurmple: {
    name: "Wurmple",
    num: 265,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Sap Sipper"
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
      def: 40,
      spe: 25,
      spa: 45,
      spd: 50
    }
  },
  silcoon: {
    name: "Silcoon",
    num: 266,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Tangling Hair",
      "1": "Sturdy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Beautifly"
    ],
    prevo: "Wurmple",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10,
    baseStats: {
      hp: 50,
      atk: 40,
      def: 85,
      spe: 15,
      spa: 55,
      spd: 85
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
      "0": "Serene Grace",
      "1": "Ruthless"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Silcoon",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28.4,
    baseStats: {
      hp: 65,
      atk: 45,
      def: 60,
      spe: 100,
      spa: 115,
      spd: 95
    }
  },
  cascoon: {
    name: "Cascoon",
    num: 268,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Poison Point",
      "1": "Sturdy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Dustox"
    ],
    prevo: "Wurmple",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 50,
      atk: 40,
      def: 85,
      spe: 15,
      spa: 55,
      spd: 85
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
      "0": "Prankster",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Cascoon",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.6,
    baseStats: {
      hp: 70,
      atk: 40,
      def: 80,
      spe: 80,
      spa: 95,
      spd: 115
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
      "0": "Rain Dish",
      "1": "Sap Sipper"
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
      hp: 45,
      atk: 40,
      def: 45,
      spe: 40,
      spa: 65,
      spd: 65
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
      "1": "Prankster"
    },
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    evos: [
      "Ludicolo"
    ],
    prevo: "Lotad",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.5,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 60,
      spe: 80,
      spa: 85,
      spd: 75
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
      "0": "Drizzle",
      "1": "Grassy Surge"
    },
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    prevo: "Lombre",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 90,
      atk: 90,
      def: 90,
      spe: 70,
      spa: 105,
      spd: 105
    }
  },
  seedot: {
    name: "Seedot",
    num: 273,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Harvest",
      "1": "Grassy Guard"
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
      def: 75,
      spe: 30,
      spa: 55,
      spd: 60
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
      "0": "Solar Rush",
      "1": "Prankster"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Shiftry"
    ],
    prevo: "Seedot",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 75,
      spe: 80,
      spa: 85,
      spd: 60
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
      "0": "Versatility",
      "1": "Ruthless"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Nuzleaf",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 59.6,
    baseStats: {
      hp: 75,
      atk: 105,
      def: 95,
      spe: 105,
      spa: 105,
      spd: 65
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
      "0": "Hustle",
      "1": "Defiant"
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
      atk: 65,
      def: 30,
      spe: 105,
      spa: 60,
      spd: 30
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
      "0": "Hustle",
      "1": "Instinct",
      H: "Guts"
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
      hp: 65,
      atk: 95,
      def: 60,
      spe: 135,
      spa: 85,
      spd: 60
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
      "0": "Gale Wings",
      "1": "Bird's Eye View"
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
      hp: 45,
      atk: 30,
      def: 45,
      spe: 95,
      spa: 65,
      spd: 45
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
      "0": "Drizzle",
      "1": "Simple"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    prevo: "Wingull",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 80,
      atk: 45,
      def: 100,
      spe: 65,
      spa: 95,
      spd: 95
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
      "0": "Trace",
      "1": "Magic Guard"
    },
    eggGroups: [
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
      hp: 40,
      atk: 25,
      def: 40,
      spe: 55,
      spa: 80,
      spd: 70
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
      "0": "Trace",
      "1": "Magic Guard"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gardevoir",
      "Gallade"
    ],
    prevo: "Ralts",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.2,
    baseStats: {
      hp: 55,
      atk: 40,
      def: 55,
      spe: 75,
      spa: 95,
      spd: 90
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
      "0": "Trace",
      "1": "Magic Guard"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Kirlia",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 33,
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
      hp: 75,
      atk: 55,
      def: 65,
      spe: 100,
      spa: 125,
      spd: 115
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
      "0": "Fairy Aura",
      "1": "Magic Bounce"
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
      hp: 75,
      atk: 55,
      def: 75,
      spe: 100,
      spa: 170,
      spd: 160
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
      "0": "Emergency Exit",
      "1": "Swift Swim"
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
      atk: 20,
      def: 32,
      spe: 97,
      spa: 79,
      spd: 62
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
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    prevo: "Surskit",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.6,
    baseStats: {
      hp: 70,
      atk: 25,
      def: 62,
      spe: 127,
      spa: 114,
      spd: 82
    }
  },
  shroomish: {
    name: "Shroomish",
    num: 285,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Regenerator",
      H: "Poison Heal"
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
      def: 80,
      spe: 35,
      spa: 55,
      spd: 80
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
      "0": "Technician",
      "1": "Regenerator",
      H: "Toxic Boost"
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
      hp: 70,
      atk: 130,
      def: 80,
      spe: 105,
      spa: 60,
      spd: 80
    }
  },
  slakoth: {
    name: "Slakoth",
    num: 287,
    types: [
      "Normal",
      "Ice"
    ],
    abilities: {
      "0": "Unaware",
      "1": "Truant"
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
      hp: 65,
      atk: 70,
      def: 70,
      spe: 30,
      spa: 30,
      spd: 70
    }
  },
  vigoroth: {
    name: "Vigoroth",
    num: 288,
    types: [
      "Normal",
      "Ice"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Unburden"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Slaking"
    ],
    prevo: "Slakoth",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 46.5,
    baseStats: {
      hp: 80,
      atk: 110,
      def: 70,
      spe: 110,
      spa: 40,
      spd: 70
    }
  },
  slaking: {
    name: "Slaking",
    num: 289,
    types: [
      "Normal",
      "Ice"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Slush Rush"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Vigoroth",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 130.5,
    baseStats: {
      hp: 125,
      atk: 160,
      def: 80,
      spe: 80,
      spa: 50,
      spd: 80
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
      "0": "Sap Sipper",
      "1": "Tough Claws"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Ninjask"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.5,
    baseStats: {
      hp: 51,
      atk: 71,
      def: 91,
      spe: 40,
      spa: 46,
      spd: 71
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
      "0": "Versatility",
      "1": "Aerilate",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Nincada",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12,
    baseStats: {
      hp: 61,
      atk: 101,
      def: 51,
      spe: 170,
      spa: 91,
      spd: 51
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
    evoLevel: null,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.2,
    baseStats: {
      hp: 1,
      atk: 30,
      def: 45,
      spe: 60,
      spa: 111,
      spd: 45
    }
  },
  whismur: {
    name: "Whismur",
    num: 293,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Amplifier"
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
      hp: 54,
      atk: 51,
      def: 63,
      spe: 53,
      spa: 76,
      spd: 63
    }
  },
  loudred: {
    name: "Loudred",
    num: 294,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Amplifier"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    evos: [
      "Exploud"
    ],
    prevo: "Whismur",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.5,
    baseStats: {
      hp: 74,
      atk: 86,
      def: 73,
      spe: 68,
      spa: 106,
      spd: 73
    }
  },
  exploud: {
    name: "Exploud",
    num: 295,
    types: [
      "Normal",
      "Dragon"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Amplifier"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Loudred",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 84,
    baseStats: {
      hp: 109,
      atk: 121,
      def: 78,
      spe: 73,
      spa: 141,
      spd: 78
    }
  },
  makuhita: {
    name: "Makuhita",
    num: 296,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Resilient",
      "1": "Thick Fat"
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
      atk: 96,
      def: 86,
      spe: 20,
      spa: 20,
      spd: 76
    }
  },
  hariyama: {
    name: "Hariyama",
    num: 297,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Resilient",
      "1": "Thick Fat"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Makuhita",
    evoLevel: 34,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 253.8,
    baseStats: {
      hp: 144,
      atk: 144,
      def: 96,
      spe: 40,
      spa: 40,
      spd: 86
    }
  },
  azurill: {
    name: "Azurill",
    num: 298,
    types: [
      "Fire",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Huge Power"
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
      def: 50,
      spe: 50,
      spa: 65,
      spd: 65
    }
  },
  nosepass: {
    name: "Nosepass",
    num: 299,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Lightning Rod",
      "1": "Sand Stream"
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
      hp: 65,
      atk: 30,
      def: 135,
      spe: 15,
      spa: 80,
      spd: 115
    }
  },
  skitty: {
    name: "Skitty",
    num: 300,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Simple"
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
      atk: 48,
      def: 45,
      spe: 77,
      spa: 65,
      spd: 65
    }
  },
  delcatty: {
    name: "Delcatty",
    num: 301,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Simple"
    },
    eggGroups: [
      "Field",
      "Fairy"
    ],
    prevo: "Skitty",
    evoItem: null,
    evoType: null,
    evoLevel: 23,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 32.6,
    baseStats: {
      hp: 70,
      atk: 73,
      def: 70,
      spe: 112,
      spa: 95,
      spd: 95
    }
  },
  sableye: {
    name: "Sableye",
    num: 302,
    types: [
      "Ghost",
      "Dark"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Tough Claws",
      H: "Tinted Lens"
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
      hp: 60,
      atk: 95,
      def: 85,
      spe: 95,
      spa: 95,
      spd: 95
    }
  },
  sableyemega: {
    name: "Sableye-Mega",
    num: 302,
    types: [
      "Ghost",
      "Dark"
    ],
    abilities: {
      "0": "Magic Bounce",
      "1": "Energy Shield"
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
      hp: 60,
      atk: 95,
      def: 170,
      spe: 20,
      spa: 110,
      spd: 170
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
      "0": "Strong Jaw",
      "1": "Intimidate"
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
      hp: 65,
      atk: 128,
      def: 115,
      spe: 52,
      spa: 55,
      spd: 100
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
      "0": "Sheer Force",
      "1": "Hustle"
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
      hp: 65,
      atk: 188,
      def: 125,
      spe: 62,
      spa: 65,
      spd: 110
    }
  },
  aron: {
    name: "Aron",
    num: 304,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Filter",
      "1": "Battle Armor"
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
      def: 120,
      spe: 30,
      spa: 40,
      spd: 50
    }
  },
  lairon: {
    name: "Lairon",
    num: 305,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Filter",
      "1": "Battle Armor"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Aggron"
    ],
    prevo: "Aron",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 120,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 140,
      spe: 40,
      spa: 50,
      spd: 70
    }
  },
  aggron: {
    name: "Aggron",
    num: 306,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Headstrong",
      "1": "Hustle"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Lairon",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 45,
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
      hp: 115,
      atk: 135,
      def: 150,
      spe: 60,
      spa: 60,
      spd: 80
    }
  },
  aggronmega: {
    name: "Aggron-Mega",
    num: 306,
    types: [
      "Steel",
      "Dragon"
    ],
    abilities: {
      "0": "Iron Barbs",
      "1": "Bulletproof"
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
      hp: 115,
      atk: 165,
      def: 200,
      spe: 45,
      spa: 60,
      spd: 115
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
      "1": "Technician"
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
      hp: 50,
      atk: 40,
      def: 55,
      spe: 90,
      spa: 95,
      spd: 80
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
      "1": "Psychic Surge"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Meditite",
    evoLevel: 34,
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
      hp: 70,
      atk: 65,
      def: 70,
      spe: 95,
      spa: 125,
      spd: 100
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
      "0": "Pure Power",
      "1": "Sixth Sense"
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
      hp: 70,
      atk: 100,
      def: 75,
      spe: 105,
      spa: 165,
      spd: 110
    }
  },
  electrike: {
    name: "Electrike",
    num: 309,
    types: [
      "Electric",
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Speed Boost"
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
      hp: 45,
      atk: 45,
      def: 50,
      spe: 90,
      spa: 90,
      spd: 50
    }
  },
  manectric: {
    name: "Manectric",
    num: 310,
    types: [
      "Electric",
      "Fire"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Electrike",
    evoLevel: 23,
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
      atk: 95,
      def: 70,
      spe: 115,
      spa: 115,
      spd: 70
    }
  },
  manectricmega: {
    name: "Manectric-Mega",
    num: 310,
    types: [
      "Electric",
      "Fire"
    ],
    abilities: {
      "0": "Electric Surge",
      "1": "Instinct"
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
      atk: 120,
      def: 80,
      spe: 140,
      spa: 145,
      spd: 80
    }
  },
  plusle: {
    name: "Plusle",
    num: 311,
    types: [
      "Electric",
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Speed Boost",
      H: "Battery"
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
      hp: 65,
      atk: 55,
      def: 55,
      spe: 110,
      spa: 115,
      spd: 100
    }
  },
  minun: {
    name: "Minun",
    num: 312,
    types: [
      "Electric",
      "Fairy"
    ],
    abilities: {
      "0": "Dazzling",
      "1": "Fur Coat",
      H: "Friend Guard"
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
      hp: 65,
      atk: 45,
      def: 65,
      spe: 110,
      spa: 100,
      spd: 115
    }
  },
  volbeat: {
    name: "Volbeat",
    num: 313,
    types: [
      "Bug",
      "Electric"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Volt Rush"
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
      hp: 70,
      atk: 47,
      def: 89,
      spe: 85,
      spa: 118,
      spd: 106
    }
  },
  illumise: {
    name: "Illumise",
    num: 314,
    types: [
      "Bug",
      "Fairy"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Technician",
      H: "Tinted Lens"
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
      hp: 70,
      atk: 47,
      def: 90,
      spe: 85,
      spa: 105,
      spd: 118
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
      "0": "Solar Power",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    evos: [
      "Roserade"
    ],
    prevo: "Budew",
    evoType: null,
    evoLevel: 17,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2,
    baseStats: {
      hp: 50,
      atk: 60,
      def: 50,
      spe: 85,
      spa: 100,
      spd: 95
    }
  },
  gulpin: {
    name: "Gulpin",
    num: 316,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Gastro Acid",
      "1": "Metabolism"
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
      hp: 74,
      atk: 42,
      def: 68,
      spe: 20,
      spa: 68,
      spd: 98
    }
  },
  swalot: {
    name: "Swalot",
    num: 317,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Gastro Acid",
      "1": "Metabolism"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Gulpin",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80,
    baseStats: {
      hp: 148,
      atk: 48,
      def: 88,
      spe: 25,
      spa: 108,
      spd: 118
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
      "0": "Strong Jaw",
      "1": "Speed Boost"
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
      atk: 95,
      def: 35,
      spe: 90,
      spa: 70,
      spd: 35
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
      "0": "Strong Jaw",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Carvanha",
    evoLevel: 29,
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
      atk: 130,
      def: 50,
      spe: 120,
      spa: 105,
      spd: 50
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
      "0": "Sheer Force",
      "1": "Instinct"
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
      atk: 160,
      def: 60,
      spe: 130,
      spa: 145,
      spd: 60
    }
  },
  wailmer: {
    name: "Wailmer",
    num: 320,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Simple",
      "1": "Drizzle"
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
      hp: 100,
      atk: 75,
      def: 75,
      spe: 55,
      spa: 100,
      spd: 75
    }
  },
  wailord: {
    name: "Wailord",
    num: 321,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Huge Power",
      "1": "Drizzle"
    },
    eggGroups: [
      "Field",
      "Water 2"
    ],
    prevo: "Wailmer",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 999,
    baseStats: {
      hp: 200,
      atk: 75,
      def: 75,
      spe: 45,
      spa: 130,
      spd: 75
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
      "0": "Simple",
      "1": "Unaware"
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
      hp: 65,
      atk: 70,
      def: 95,
      spe: 20,
      spa: 80,
      spd: 70
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
      "0": "Drought",
      "1": "Berserk"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Numel",
    evoLevel: 35,
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
      hp: 100,
      atk: 120,
      def: 110,
      spe: 45,
      spa: 125,
      spd: 75
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
      "0": "Solar Rush",
      "1": "Sweltering Sun"
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
      hp: 100,
      atk: 145,
      def: 115,
      spe: 45,
      spa: 165,
      spd: 105
    }
  },
  torkoal: {
    name: "Torkoal",
    num: 324,
    types: [
      "Fire",
      "Poison"
    ],
    abilities: {
      "0": "Drought",
      "1": "Shell Armor"
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
      hp: 75,
      atk: 60,
      def: 145,
      spe: 20,
      spa: 100,
      spd: 125
    }
  },
  spoink: {
    name: "Spoink",
    num: 325,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Magic Bounce",
      "1": "Unburden"
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
      atk: 45,
      def: 60,
      spe: 60,
      spa: 90,
      spd: 95
    }
  },
  grumpig: {
    name: "Grumpig",
    num: 326,
    types: [
      "Dark",
      "Psychic"
    ],
    abilities: {
      "0": "Psychic Surge",
      "1": "Dark Aura"
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
      hp: 95,
      atk: 85,
      def: 85,
      spe: 50,
      spa: 100,
      spd: 120
    }
  },
  spinda: {
    name: "Spinda",
    num: 327,
    types: [
      "Psychic",
      "Normal"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Psychic Surge"
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
      hp: 70,
      atk: 80,
      def: 80,
      spe: 95,
      spa: 95,
      spd: 105
    }
  },
  trapinch: {
    name: "Trapinch",
    num: 328,
    types: [
      "Bug",
      "Ground"
    ],
    abilities: {
      "0": "Strong Jaw",
      "1": "Sand Force",
      H: "Arena Trap"
    },
    eggGroups: [
      "Bug"
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
      hp: 47,
      atk: 113,
      def: 95,
      spe: 10,
      spa: 45,
      spd: 50
    }
  },
  vibrava: {
    name: "Vibrava",
    num: 329,
    types: [
      "Bug",
      "Ground"
    ],
    abilities: {
      "0": "Amplifier",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Flygon"
    ],
    prevo: "Trapinch",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.3,
    baseStats: {
      hp: 62,
      atk: 73,
      def: 55,
      spe: 122,
      spa: 113,
      spd: 55
    }
  },
  flygon: {
    name: "Flygon",
    num: 330,
    types: [
      "Bug",
      "Dragon"
    ],
    abilities: {
      "0": "Amplifier",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Vibrava",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.3,
    baseStats: {
      hp: 92,
      atk: 118,
      def: 80,
      spe: 112,
      spa: 118,
      spd: 80
    }
  },
  cacnea: {
    name: "Cacnea",
    num: 331,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Sand Rush",
      "1": "Moxie",
      H: "Stakeout"
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
      hp: 47,
      atk: 87,
      def: 77,
      spe: 47,
      spa: 45,
      spd: 47
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
      "0": "Sand Rush",
      "1": "Moxie",
      H: "Stakeout"
    },
    eggGroups: [
      "Grass",
      "Human-Like"
    ],
    prevo: "Cacnea",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 77.4,
    baseStats: {
      hp: 77,
      atk: 127,
      def: 107,
      spe: 77,
      spa: 60,
      spd: 77
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
      "0": "Amplifier",
      "1": "Fluffy"
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
      spe: 65,
      spa: 65,
      spd: 95
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
      "0": "Serene Grace",
      "1": "Fluffy"
    },
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    prevo: "Swablu",
    evoLevel: 31,
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
      spe: 90,
      spa: 95,
      spd: 115
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
      "0": "Pixilate",
      "1": "Fluffy"
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
      def: 95,
      spe: 90,
      spa: 120,
      spd: 145
    }
  },
  zangoose: {
    name: "Zangoose",
    num: 335,
    types: [
      "Normal",
      "Fighting"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Tough Claws",
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
      atk: 123,
      def: 73,
      spe: 113,
      spa: 60,
      spd: 73
    }
  },
  seviper: {
    name: "Seviper",
    num: 336,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Strong Jaw"
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
      atk: 123,
      def: 73,
      spe: 113,
      spa: 60,
      spd: 73
    }
  },
  lunatone: {
    name: "Lunatone",
    num: 337,
    types: [
      "Rock",
      "Dark"
    ],
    abilities: {
      "0": "Energy Shield",
      "1": "Levitate",
      H: "Interstellar"
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
      atk: 40,
      def: 110,
      spe: 60,
      spa: 125,
      spd: 125
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
      "0": "Levitate",
      "1": "Sweltering Sun",
      H: "Interstellar"
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
      atk: 40,
      def: 125,
      spe: 60,
      spa: 125,
      spd: 110
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
      "0": "Dry Skin",
      "1": "Gooey"
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
      atk: 51,
      def: 68,
      spe: 59,
      spa: 51,
      spd: 71
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
      "0": "Metabolism",
      "1": "Berserk"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Barboach",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23.6,
    baseStats: {
      hp: 120,
      atk: 101,
      def: 93,
      spe: 39,
      spa: 91,
      spd: 91
    }
  },
  corphish: {
    name: "Corphish",
    num: 341,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Hustle"
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
      hp: 53,
      atk: 85,
      def: 85,
      spe: 32,
      spa: 50,
      spd: 65
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
      "0": "Tough Claws",
      "1": "Ruthless"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Corphish",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 32.8,
    baseStats: {
      hp: 73,
      atk: 125,
      def: 115,
      spe: 57,
      spa: 60,
      spd: 95
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
      "0": "Levitate",
      "1": "Energy Shield"
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
      hp: 50,
      atk: 40,
      def: 95,
      spe: 65,
      spa: 95,
      spd: 95
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
      "0": "Levitate",
      "1": "Energy Shield"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Baltoy",
    evoLevel: 33,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 108,
    baseStats: {
      hp: 80,
      atk: 50,
      def: 105,
      spe: 75,
      spa: 120,
      spd: 120
    }
  },
  lileep: {
    name: "Lileep",
    num: 345,
    types: [
      "Rock",
      "Poison"
    ],
    abilities: {
      "0": "Sand Stream",
      "1": "Storm Drain"
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
      def: 97,
      spe: 23,
      spa: 76,
      spd: 97
    }
  },
  cradily: {
    name: "Cradily",
    num: 346,
    types: [
      "Rock",
      "Poison"
    ],
    abilities: {
      "0": "Sand Stream",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Lileep",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 60.4,
    baseStats: {
      hp: 96,
      atk: 81,
      def: 122,
      spe: 23,
      spa: 106,
      spd: 122
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
      "0": "Tinted Lens",
      "1": "Swift Swim"
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
      hp: 46,
      atk: 98,
      def: 90,
      spe: 76,
      spa: 30,
      spd: 60
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
      "0": "Ruthless",
      "1": "Swift Swim"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Anorith",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 68.2,
    baseStats: {
      hp: 96,
      atk: 133,
      def: 125,
      spe: 66,
      spa: 40,
      spd: 90
    }
  },
  feebas: {
    name: "Feebas",
    num: 349,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Multiscale"
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
      hp: 45,
      atk: 15,
      def: 49,
      spe: 61,
      spa: 45,
      spd: 85
    }
  },
  milotic: {
    name: "Milotic",
    num: 350,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Multiscale",
      H: "Marvel Scale"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Feebas",
    evoItem: null,
    evoType: null,
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 162,
    baseStats: {
      hp: 114,
      atk: 80,
      def: 94,
      spe: 81,
      spa: 106,
      spd: 125
    }
  },
  castform: {
    name: "Castform",
    num: 351,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Guarding Gale",
      "1": "Forecast"
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
      atk: 55,
      def: 70,
      spe: 110,
      spa: 110,
      spd: 110
    }
  },
  castformrainy: {
    name: "Castform-Rainy",
    num: 351,
    types: [
      "Water",
      "Flying"
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
      atk: 55,
      def: 70,
      spe: 150,
      spa: 115,
      spd: 115
    }
  },
  castformsnowy: {
    name: "Castform-Snowy",
    num: 351,
    types: [
      "Ice",
      "Flying"
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
      atk: 55,
      def: 70,
      spe: 150,
      spa: 115,
      spd: 115
    }
  },
  castformsunny: {
    name: "Castform-Sunny",
    num: 351,
    types: [
      "Fire",
      "Flying"
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
      atk: 55,
      def: 70,
      spe: 150,
      spa: 115,
      spd: 115
    }
  },
  kecleon: {
    name: "Kecleon",
    num: 352,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Versatility"
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
      hp: 70,
      atk: 94,
      def: 81,
      spe: 71,
      spa: 94,
      spd: 125
    }
  },
  shuppet: {
    name: "Shuppet",
    num: 353,
    types: [
      "Ghost",
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Levitate",
      H: "Envy"
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
      hp: 45,
      atk: 75,
      def: 40,
      spe: 95,
      spa: 75,
      spd: 40
    }
  },
  banette: {
    name: "Banette",
    num: 354,
    types: [
      "Ghost",
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Sinister"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Shuppet",
    evoLevel: 25,
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
      hp: 65,
      atk: 115,
      def: 65,
      spe: 100,
      spa: 115,
      spd: 65
    }
  },
  banettemega: {
    name: "Banette-Mega",
    num: 354,
    types: [
      "Ghost",
      "Dark"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Hubris",
      H: "Shadow Tag"
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
      hp: 65,
      atk: 165,
      def: 65,
      spe: 100,
      spa: 165,
      spd: 65
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
      "1": "Flash Fire"
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
      hp: 40,
      atk: 60,
      def: 80,
      spe: 20,
      spa: 60,
      spd: 100
    }
  },
  dusclops: {
    name: "Dusclops",
    num: 356,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Sinister",
      "1": "Flash Fire"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Dusknoir"
    ],
    prevo: "Duskull",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30.6,
    baseStats: {
      hp: 80,
      atk: 80,
      def: 100,
      spe: 20,
      spa: 80,
      spd: 120
    }
  },
  tropius: {
    name: "Tropius",
    num: 357,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Regenerator"
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
      hp: 119,
      atk: 108,
      def: 98,
      spe: 51,
      spa: 102,
      spd: 97
    }
  },
  chimecho: {
    name: "Chimecho",
    num: 358,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Guarding Gale",
      "1": "Aerilate"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Chingling",
    evoType: null,
    evoLevel: 22,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1,
    baseStats: {
      hp: 75,
      atk: 50,
      def: 80,
      spe: 95,
      spa: 115,
      spd: 110
    }
  },
  absol: {
    name: "Absol",
    num: 359,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Super Luck"
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
      hp: 75,
      atk: 130,
      def: 65,
      spe: 115,
      spa: 75,
      spd: 65
    }
  },
  absolmega: {
    name: "Absol-Mega",
    num: 359,
    types: [
      "Dark",
      "Fairy"
    ],
    abilities: {
      "0": "Pixilate",
      "1": "Dazzling"
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
      hp: 75,
      atk: 150,
      def: 70,
      spe: 130,
      spa: 130,
      spd: 70
    }
  },
  wynaut: {
    name: "Wynaut",
    num: 360,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Emergency Exit",
      "1": "Unaware",
      H: "Shadow Tag"
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
      def: 93,
      spe: 23,
      spa: 23,
      spd: 93
    }
  },
  snorunt: {
    name: "Snorunt",
    num: 361,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Wimp Out"
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
      def: 80,
      spe: 50,
      spa: 60,
      spd: 80
    }
  },
  glalie: {
    name: "Glalie",
    num: 362,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Weak Armor",
      "1": "Intimidate"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    prevo: "Snorunt",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 25,
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
      atk: 90,
      def: 105,
      spe: 55,
      spa: 100,
      spd: 105
    }
  },
  glaliemega: {
    name: "Glalie-Mega",
    num: 362,
    types: [
      "Ice",
      "Dark"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Berserk"
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
      atk: 140,
      def: 80,
      spe: 105,
      spa: 150,
      spd: 80
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
      "0": "Unaware",
      "1": "Resilient"
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
      hp: 60,
      atk: 60,
      def: 65,
      spe: 25,
      spa: 60,
      spd: 65
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
      "0": "Unaware",
      "1": "Resilient"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Walrein"
    ],
    prevo: "Spheal",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 87.6,
    baseStats: {
      hp: 95,
      atk: 80,
      def: 85,
      spe: 30,
      spa: 80,
      spd: 85
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
      "0": "Sheer Force",
      "1": "Resilient"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Sealeo",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 150.6,
    baseStats: {
      hp: 125,
      atk: 130,
      def: 95,
      spe: 35,
      spa: 95,
      spd: 95
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
      "1": "Sturdy"
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
      hp: 47,
      atk: 43,
      def: 107,
      spe: 32,
      spa: 74,
      spd: 107
    }
  },
  huntail: {
    name: "Huntail",
    num: 367,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Multiscale",
      "1": "Sinister"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Clamperl",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 87,
      atk: 114,
      def: 107,
      spe: 67,
      spa: 53,
      spd: 107
    }
  },
  gorebyss: {
    name: "Gorebyss",
    num: 368,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Multiscale",
      "1": "Sap Sipper"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Clamperl",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22.6,
    baseStats: {
      hp: 87,
      atk: 53,
      def: 107,
      spe: 67,
      spa: 114,
      spd: 107
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
      "0": "Multiscale",
      "1": "Stamina"
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
      def: 145,
      spe: 30,
      spa: 45,
      spd: 115
    }
  },
  luvdisc: {
    name: "Luvdisc",
    num: 370,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Trace"
    },
    eggGroups: [
      "Water 2",
      "Water 3"
    ],
    evos: [
      "Alomomola"
    ],
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 8.7,
    baseStats: {
      hp: 55,
      atk: 23,
      def: 65,
      spe: 102,
      spa: 75,
      spd: 115
    }
  },
  bagon: {
    name: "Bagon",
    num: 371,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Rough Skin"
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
      hp: 50,
      atk: 75,
      def: 75,
      spe: 60,
      spa: 40,
      spd: 60
    }
  },
  shelgon: {
    name: "Shelgon",
    num: 372,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Rough Skin"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Salamence"
    ],
    prevo: "Bagon",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110.5,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 135,
      spe: 35,
      spa: 35,
      spd: 110
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
      "0": "Berserk",
      "1": "Intimidate"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Shelgon",
    evoItem: "Flying Gem",
    evoType: "useItem",
    evoLevel: 45,
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
      spe: 100,
      spa: 110,
      spd: 80
    }
  },
  salamencemega: {
    name: "Salamence-Mega",
    num: 373,
    types: [
      "Dragon",
      "Dark"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Levitate"
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
      def: 110,
      spe: 120,
      spa: 140,
      spd: 90
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
      "0": "Analytic",
      "1": "Levitate",
      H: "Magnet Pull"
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
      atk: 60,
      def: 110,
      spe: 20,
      spa: 60,
      spd: 70
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
      "0": "Analytic",
      "1": "Levitate",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Metagross"
    ],
    prevo: "Beldum",
    evoLevel: 25,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 202.5,
    baseStats: {
      hp: 70,
      atk: 90,
      def: 125,
      spe: 20,
      spa: 90,
      spd: 85
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
      "0": "Analytic",
      "1": "Hubris",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Metang",
    evoItem: "Steel Gem",
    evoType: "useItem",
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
      hp: 100,
      atk: 135,
      def: 130,
      spe: 20,
      spa: 125,
      spd: 90
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
      "0": "Tough Claws",
      "1": "Levitate"
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
      hp: 100,
      atk: 145,
      def: 130,
      spe: 110,
      spa: 125,
      spd: 90
    }
  },
  regirock: {
    name: "Regirock",
    num: 377,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Solid Rock"
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
      hp: 85,
      atk: 150,
      def: 200,
      spe: 15,
      spa: 50,
      spd: 100
    }
  },
  regice: {
    name: "Regice",
    num: 378,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Refrigerate",
      "1": "Resilient"
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
      hp: 85,
      atk: 50,
      def: 100,
      spe: 15,
      spa: 150,
      spd: 200
    }
  },
  registeel: {
    name: "Registeel",
    num: 379,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Steelworker",
      "1": "Filter"
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
      hp: 85,
      atk: 100,
      def: 150,
      spe: 15,
      spa: 100,
      spd: 150
    }
  },
  latias: {
    name: "Latias",
    num: 380,
    types: [
      "Dragon",
      "Fairy"
    ],
    abilities: {
      "0": "Magic Bounce",
      "1": "Levitate"
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
      atk: 70,
      def: 80,
      spe: 130,
      spa: 110,
      spd: 130
    }
  },
  latiasmega: {
    name: "Latias-Mega",
    num: 380,
    types: [
      "Dragon",
      "Fairy"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Levitate"
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
      atk: 80,
      def: 110,
      spe: 130,
      spa: 140,
      spd: 160
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
      "0": "Magic Guard",
      "1": "Levitate"
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
      atk: 80,
      def: 70,
      spe: 130,
      spa: 130,
      spd: 110
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
      "0": "Speed Boost",
      "1": "Levitate"
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
      atk: 140,
      def: 80,
      spe: 130,
      spa: 160,
      spd: 110
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
      hp: 160,
      atk: 120,
      def: 90,
      spe: 80,
      spa: 160,
      spd: 140
    }
  },
  kyogreprimal: {
    name: "Kyogre-Primal",
    num: 382,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Stormy Seas"
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
      hp: 160,
      atk: 150,
      def: 100,
      spe: 80,
      spa: 200,
      spd: 160
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
      hp: 160,
      atk: 160,
      def: 160,
      spe: 50,
      spa: 130,
      spd: 90
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
      "0": "Sweltering Sun"
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
      hp: 160,
      atk: 200,
      def: 160,
      spe: 50,
      spa: 180,
      spd: 100
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
      "0": "Intimidate"
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
      hp: 150,
      atk: 175,
      def: 90,
      spe: 120,
      spa: 175,
      spd: 90
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
      "0": "Guarding Gale"
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
      hp: 150,
      atk: 200,
      def: 100,
      spe: 150,
      spa: 200,
      spd: 100
    }
  },
  jirachi: {
    name: "Jirachi",
    num: 385,
    types: [
      "Fairy",
      "Steel"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Serene Grace"
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
      hp: 60,
      atk: 80,
      def: 120,
      spe: 100,
      spa: 100,
      spd: 140
    }
  },
  deoxys: {
    name: "Deoxys",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Neuroforce",
      H: "Interstellar"
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
      hp: 80,
      atk: 120,
      def: 80,
      spe: 120,
      spa: 120,
      spd: 80
    }
  },
  deoxysattack: {
    name: "Deoxys-Attack",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Neuroforce",
      H: "Interstellar"
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
      hp: 80,
      atk: 180,
      def: 20,
      spe: 120,
      spa: 180,
      spd: 20
    }
  },
  deoxysdefense: {
    name: "Deoxys-Defense",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Resilient",
      "1": "Regenerator",
      H: "Interstellar"
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
      hp: 80,
      atk: 70,
      def: 180,
      spe: 20,
      spa: 70,
      spd: 180
    }
  },
  deoxysspeed: {
    name: "Deoxys-Speed",
    num: 386,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Speed Boost",
      "1": "Regenerator",
      H: "Interstellar"
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
      hp: 80,
      atk: 70,
      def: 100,
      spe: 180,
      spa: 70,
      spd: 100
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
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Grotle"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.2,
    baseStats: {
      hp: 55,
      atk: 64,
      def: 75,
      spe: 31,
      spa: 30,
      spd: 65
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
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    evos: [
      "Torterra"
    ],
    prevo: "Turtwig",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.2,
    baseStats: {
      hp: 75,
      atk: 94,
      def: 115,
      spe: 36,
      spa: 35,
      spd: 80
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
      "0": "Headstrong",
      "1": "Harvest"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Grotle",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 310,
    baseStats: {
      hp: 125,
      atk: 129,
      def: 125,
      spe: 41,
      spa: 40,
      spd: 90
    }
  },
  chimchar: {
    name: "Chimchar",
    num: 390,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Blaze"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Monferno"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.2,
    baseStats: {
      hp: 44,
      atk: 63,
      def: 44,
      spe: 62,
      spa: 63,
      spd: 44
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
      "0": "Unburden",
      "1": "Blaze"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    evos: [
      "Infernape"
    ],
    prevo: "Chimchar",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22,
    baseStats: {
      hp: 56,
      atk: 92,
      def: 52,
      spe: 91,
      spa: 92,
      spd: 52
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
      "0": "Technician",
      "1": "Proficiency"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Monferno",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 55,
    baseStats: {
      hp: 71,
      atk: 114,
      def: 66,
      spe: 119,
      spa: 114,
      spd: 66
    }
  },
  piplup: {
    name: "Piplup",
    num: 393,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Torrent"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Prinplup"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.2,
    baseStats: {
      hp: 54,
      atk: 56,
      def: 53,
      spe: 40,
      spa: 61,
      spd: 56
    }
  },
  prinplup: {
    name: "Prinplup",
    num: 394,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Torrent"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Empoleon"
    ],
    prevo: "Piplup",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 23,
    baseStats: {
      hp: 69,
      atk: 91,
      def: 73,
      spe: 50,
      spa: 71,
      spd: 81
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
      "0": "Swift Swim",
      "1": "Ruthless"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Prinplup",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 84.5,
    baseStats: {
      hp: 84,
      atk: 116,
      def: 118,
      spe: 60,
      spa: 71,
      spd: 101
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
      "0": "Bird's Eye View",
      "1": "Scrappy"
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
      atk: 60,
      def: 40,
      spe: 80,
      spa: 40,
      spd: 40
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
      "0": "Bird's Eye View",
      "1": "Intimidate"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Staraptor"
    ],
    prevo: "Starly",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 55,
      spe: 100,
      spa: 45,
      spd: 55
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
      "0": "Reckless",
      "1": "Intimidate"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Staravia",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.9,
    baseStats: {
      hp: 85,
      atk: 120,
      def: 80,
      spe: 110,
      spa: 50,
      spd: 70
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
      "1": "Sap Sipper"
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
      atk: 65,
      def: 60,
      spe: 51,
      spa: 35,
      spd: 60
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
      "1": "Sap Sipper"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Bidoof",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.5,
    baseStats: {
      hp: 94,
      atk: 90,
      def: 85,
      spe: 71,
      spa: 55,
      spd: 85
    }
  },
  kricketot: {
    name: "Kricketot",
    num: 401,
    types: [
      "Bug",
      "Normal"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Technician",
      H: "Tinted Lens"
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
      hp: 47,
      atk: 41,
      def: 55,
      spe: 61,
      spa: 71,
      spd: 55
    }
  },
  kricketune: {
    name: "Kricketune",
    num: 402,
    types: [
      "Bug",
      "Normal"
    ],
    abilities: {
      "0": "Amplifier",
      "1": "Technician",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Kricketot",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25.5,
    baseStats: {
      hp: 67,
      atk: 101,
      def: 55,
      spe: 101,
      spa: 101,
      spd: 55
    }
  },
  shinx: {
    name: "Shinx",
    num: 403,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Volt Rush"
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
      def: 35,
      spe: 80,
      spa: 60,
      spd: 35
    }
  },
  luxio: {
    name: "Luxio",
    num: 404,
    types: [
      "Electric",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Volt Rush"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Luxray"
    ],
    prevo: "Shinx",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30.5,
    baseStats: {
      hp: 60,
      atk: 95,
      def: 45,
      spe: 95,
      spa: 90,
      spd: 45
    }
  },
  luxray: {
    name: "Luxray",
    num: 405,
    types: [
      "Electric",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Volt Rush",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Luxio",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42,
    baseStats: {
      hp: 75,
      atk: 120,
      def: 70,
      spe: 105,
      spa: 110,
      spd: 70
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
      "0": "Solar Power",
      "1": "Grassy Guard"
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
      def: 45,
      spe: 55,
      spa: 65,
      spd: 85
    }
  },
  roserade: {
    name: "Roserade",
    num: 407,
    types: [
      "Poison",
      "Grass"
    ],
    abilities: {
      "0": "Technician",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Roselia",
    evoItem: "Grass Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 60,
      atk: 95,
      def: 60,
      spe: 105,
      spa: 125,
      spd: 105
    }
  },
  cranidos: {
    name: "Cranidos",
    num: 408,
    types: [
      "Rock",
      "Dragon"
    ],
    abilities: {
      "0": "Mold Breaker",
      "1": "Hustle"
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
      hp: 62,
      atk: 105,
      def: 95,
      spe: 78,
      spa: 30,
      spd: 30
    }
  },
  rampardos: {
    name: "Rampardos",
    num: 409,
    types: [
      "Rock",
      "Dragon"
    ],
    abilities: {
      "0": "Headstrong",
      "1": "Hustle"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Cranidos",
    evoLevel: 34,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 102.5,
    baseStats: {
      hp: 102,
      atk: 150,
      def: 115,
      spe: 93,
      spa: 35,
      spd: 55
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
      "0": "Filter",
      "1": "Sturdy"
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
      hp: 62,
      atk: 62,
      def: 138,
      spe: 10,
      spa: 20,
      spd: 108
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
      "0": "Filter",
      "1": "Rough Skin"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Shieldon",
    evoLevel: 34,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 149.5,
    baseStats: {
      hp: 102,
      atk: 102,
      def: 168,
      spe: 15,
      spa: 25,
      spd: 138
    }
  },
  burmy: {
    name: "Burmy",
    num: 412,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Regenerator"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Wormadam",
      "Mothim"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.4,
    baseStats: {
      hp: 42,
      atk: 28,
      def: 68,
      spe: 36,
      spa: 48,
      spd: 88
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
      "0": "Adaptability",
      "1": "Regenerator"
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
      hp: 72,
      atk: 48,
      def: 98,
      spe: 36,
      spa: 98,
      spd: 128
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
      "0": "Adaptability",
      "1": "Regenerator"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: null,
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
      hp: 72,
      atk: 98,
      def: 128,
      spe: 36,
      spa: 48,
      spd: 98
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
      "0": "Adaptability",
      "1": "Regenerator"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Burmy",
    evoLevel: null,
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
      hp: 72,
      atk: 58,
      def: 113,
      spe: 36,
      spa: 88,
      spd: 113
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
      "0": "Adaptability",
      "1": "Hubris"
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
      hp: 72,
      atk: 58,
      def: 63,
      spe: 116,
      spa: 108,
      spd: 63
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
      "0": "Wimp Out",
      "1": "Guarding Gale"
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
      hp: 41,
      atk: 30,
      def: 77,
      spe: 90,
      spa: 55,
      spd: 77
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
      "0": "Intimidate",
      "1": "Guarding Gale"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Combee",
    evoLevel: 25,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 38.5,
    baseStats: {
      hp: 96,
      atk: 95,
      def: 117,
      spe: 30,
      spa: 95,
      spd: 117
    }
  },
  pachirisu: {
    name: "Pachirisu",
    num: 417,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Electric Surge",
      "1": "Prankster"
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
      hp: 65,
      atk: 45,
      def: 70,
      spe: 115,
      spa: 95,
      spd: 110
    }
  },
  buizel: {
    name: "Buizel",
    num: 418,
    types: [
      "Water",
      "Normal"
    ],
    abilities: {
      "0": "Technician",
      "1": "Swift Swim",
      H: "Guts"
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
      atk: 73,
      def: 40,
      spe: 97,
      spa: 65,
      spd: 40
    }
  },
  floatzel: {
    name: "Floatzel",
    num: 419,
    types: [
      "Water",
      "Normal"
    ],
    abilities: {
      "0": "Technician",
      "1": "Swift Swim",
      H: "Guts"
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
      hp: 70,
      atk: 113,
      def: 70,
      spe: 117,
      spa: 95,
      spd: 70
    }
  },
  cherubi: {
    name: "Cherubi",
    num: 420,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Wimp Out"
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
      def: 50,
      spe: 65,
      spa: 67,
      spd: 68
    }
  },
  cherrim: {
    name: "Cherrim",
    num: 421,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Flower Gift"
    },
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    prevo: "Cherubi",
    evoLevel: 20,
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
      atk: 55,
      def: 85,
      spe: 85,
      spa: 92,
      spd: 93
    }
  },
  cherrimsunshine: {
    name: "Cherrim-Sunshine",
    num: 421,
    types: [
      "Fire",
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
      atk: 70,
      def: 65,
      spe: 135,
      spa: 112,
      spd: 98
    }
  },
  shellos: {
    name: "Shellos",
    num: 422,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    evos: [
      "Gastrodon"
    ],
    formes: [
      "Shellos",
      "Shellos-East"
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
      hp: 58,
      atk: 35,
      def: 58,
      spe: 23,
      spa: 83,
      spd: 93
    }
  },
  shelloseast: {
    name: "Shellos-East",
    num: 422,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    evos: [
      "Gastrodon"
    ],
    baseSpecies: "Shellos",
    forme: "East",
    formes: [
      "Shellos",
      "Shellos-East"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.3,
    baseStats: {
      hp: 58,
      atk: 35,
      def: 58,
      spe: 23,
      spa: 78,
      spd: 98
    }
  },
  gastrodon: {
    name: "Gastrodon",
    num: 423,
    types: [
      "Poison",
      "Ground"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    prevo: "Shellos",
    evoLevel: 29,
    formes: [
      "Gastrodon",
      "Gastrodon-East"
    ],
    cosmeticFormes: [
      "East"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.9,
    baseStats: {
      hp: 88,
      atk: 60,
      def: 88,
      spe: 28,
      spa: 113,
      spd: 123
    }
  },
  gastrodoneast: {
    name: "Gastrodon-East",
    num: 423,
    types: [
      "Water",
      "Ground"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    baseSpecies: "Gastrodon",
    forme: "East",
    formes: [
      "Gastrodon",
      "Gastrodon-East"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29.9,
    baseStats: {
      hp: 88,
      atk: 60,
      def: 88,
      spe: 28,
      spa: 108,
      spd: 128
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
      "1": "Expertise"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Aipom",
    evoType: null,
    evoLevel: 26,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.3,
    baseStats: {
      hp: 75,
      atk: 109,
      def: 70,
      spe: 116,
      spa: 60,
      spd: 70
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
      "0": "Flash Fire",
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
      hp: 50,
      atk: 20,
      def: 50,
      spe: 70,
      spa: 90,
      spd: 90
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
      "0": "Guarding Gale",
      "1": "Unburden",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Drifloon",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 150,
      atk: 40,
      def: 60,
      spe: 80,
      spa: 110,
      spd: 110
    }
  },
  buneary: {
    name: "Buneary",
    num: 427,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Unburden"
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
      def: 45,
      spe: 95,
      spa: 44,
      spd: 45
    }
  },
  lopunny: {
    name: "Lopunny",
    num: 428,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Unburden"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Buneary",
    evoType: null,
    evoLevel: 20,
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
      hp: 75,
      atk: 96,
      def: 70,
      spe: 115,
      spa: 54,
      spd: 70
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
      "0": "Scrappy",
      "1": "Reckless"
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
      hp: 75,
      atk: 139,
      def: 82,
      spe: 138,
      spa: 64,
      spd: 82
    }
  },
  mismagius: {
    name: "Mismagius",
    num: 429,
    types: [
      "Ghost",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Magic Guard"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Misdreavus",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.4,
    baseStats: {
      hp: 65,
      atk: 45,
      def: 65,
      spe: 125,
      spa: 125,
      spd: 125
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
      "0": "Moxie",
      "1": "Super Luck"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Murkrow",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27.3,
    baseStats: {
      hp: 77,
      atk: 125,
      def: 71,
      spe: 101,
      spa: 105,
      spd: 71
    }
  },
  glameow: {
    name: "Glameow",
    num: 431,
    types: [
      "Normal",
      "Dark"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Prankster"
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
      hp: 51,
      atk: 67,
      def: 49,
      spe: 97,
      spa: 37,
      spd: 49
    }
  },
  purugly: {
    name: "Purugly",
    num: 432,
    types: [
      "Normal",
      "Dark"
    ],
    abilities: {
      "0": "Moxie",
      "1": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Glameow",
    evoLevel: 25,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 43.8,
    baseStats: {
      hp: 101,
      atk: 112,
      def: 84,
      spe: 92,
      spa: 62,
      spd: 84
    }
  },
  chingling: {
    name: "Chingling",
    num: 433,
    types: [
      "Psychic",
      "Flying"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Aerilate"
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
      hp: 50,
      atk: 30,
      def: 65,
      spe: 60,
      spa: 85,
      spd: 80
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
      "0": "Instinct",
      "1": "Prankster"
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
      hp: 51,
      atk: 63,
      def: 50,
      spe: 76,
      spa: 60,
      spd: 50
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
      "0": "Instinct",
      "1": "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Stunky",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 38,
    baseStats: {
      hp: 101,
      atk: 93,
      def: 80,
      spe: 91,
      spa: 90,
      spd: 80
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
      "1": "Magic Bounce"
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
      hp: 47,
      atk: 24,
      def: 101,
      spe: 23,
      spa: 74,
      spd: 101
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
      "1": "Drizzle"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Bronzor",
    evoLevel: 35,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 187,
    baseStats: {
      hp: 77,
      atk: 44,
      def: 141,
      spe: 33,
      spa: 114,
      spd: 141
    }
  },
  bonsly: {
    name: "Bonsly",
    num: 438,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Contrary",
      "1": "Sap Sipper"
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
      atk: 65,
      def: 95,
      spe: 50,
      spa: 25,
      spd: 65
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
      "0": "Technician",
      "1": "Prankster"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Mr. Mime"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 45,
      atk: 25,
      def: 45,
      spe: 65,
      spa: 80,
      spd: 110
    }
  },
  happiny: {
    name: "Happiny",
    num: 440,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Natural Cure",
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
      atk: 10,
      def: 20,
      spe: 35,
      spa: 65,
      spd: 100
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
      "0": "Prankster",
      "1": "Amplifier"
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
      hp: 65,
      atk: 65,
      def: 65,
      spe: 111,
      spa: 109,
      spd: 65
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
      "0": "Dark Aura",
      "1": "Sinister"
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
      hp: 108,
      atk: 45,
      def: 108,
      spe: 8,
      spa: 148,
      spd: 108
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
      "0": "Rough Skin",
      "1": "Strong Jaw"
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
      atk: 90,
      def: 65,
      spe: 57,
      spa: 40,
      spd: 50
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
      "0": "Rough Skin",
      "1": "Strong Jaw"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Garchomp"
    ],
    prevo: "Gible",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 56,
    baseStats: {
      hp: 73,
      atk: 110,
      def: 80,
      spe: 102,
      spa: 50,
      spd: 65
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
      "0": "Rough Skin",
      "1": "Reckless"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Gabite",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
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
      spe: 112,
      spa: 70,
      spd: 85
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
      "0": "Sand Rush",
      "1": "Tough Claws"
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
      def: 120,
      spe: 102,
      spa: 100,
      spd: 100
    }
  },
  munchlax: {
    name: "Munchlax",
    num: 446,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Metabolism",
      "1": "Thick Fat"
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
      hp: 90,
      atk: 85,
      def: 75,
      spe: 20,
      spa: 40,
      spd: 90
    }
  },
  riolu: {
    name: "Riolu",
    num: 447,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Defiant"
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
      hp: 45,
      atk: 85,
      def: 40,
      spe: 95,
      spa: 70,
      spd: 40
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
      "0": "Sixth Sense",
      "1": "Mega Launcher"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Riolu",
    evoType: null,
    evoLevel: 25,
    evoCondition: null,
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
      atk: 115,
      def: 70,
      spe: 110,
      spa: 115,
      spd: 70
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
      "0": "Adaptability",
      "1": "Versatility"
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
      def: 90,
      spe: 120,
      spa: 145,
      spd: 80
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
      "1": "Strong Jaw"
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
      atk: 87,
      def: 93,
      spe: 32,
      spa: 28,
      spd: 62
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
      "1": "Strong Jaw"
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
      hp: 123,
      atk: 132,
      def: 123,
      spe: 47,
      spa: 38,
      spd: 87
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
      "0": "Merciless",
      "1": "Sand Rush"
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
      atk: 90,
      def: 90,
      spe: 75,
      spa: 20,
      spd: 55
    }
  },
  drapion: {
    name: "Drapion",
    num: 452,
    types: [
      "Poison",
      "Bug"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Sand Rush"
    },
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    prevo: "Skorupi",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 61.5,
    baseStats: {
      hp: 90,
      atk: 125,
      def: 125,
      spe: 95,
      spa: 30,
      spd: 85
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
      "0": "Prankster",
      "1": "Dry Skin"
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
      hp: 50,
      atk: 71,
      def: 40,
      spe: 98,
      spa: 71,
      spd: 40
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
      "0": "Ruthless",
      "1": "Dry Skin"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Croagunk",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 44.4,
    baseStats: {
      hp: 70,
      atk: 126,
      def: 65,
      spe: 123,
      spa: 86,
      spd: 65
    }
  },
  carnivine: {
    name: "Carnivine",
    num: 455,
    types: [
      "Grass",
      "Dark"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Regenerator"
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
      hp: 82,
      atk: 117,
      def: 92,
      spe: 92,
      spa: 50,
      spd: 92
    }
  },
  finneon: {
    name: "Finneon",
    num: 456,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Storm Drain"
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
      atk: 39,
      def: 56,
      spe: 71,
      spa: 74,
      spd: 81
    }
  },
  lumineon: {
    name: "Lumineon",
    num: 457,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Swift Swim",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 2"
    ],
    prevo: "Finneon",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24,
    baseStats: {
      hp: 69,
      atk: 59,
      def: 76,
      spe: 96,
      spa: 109,
      spd: 116
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
      "1": "Water Absorb"
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
      hp: 50,
      atk: 20,
      def: 60,
      spe: 55,
      spa: 65,
      spd: 120
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
      "1": "Grassy Surge"
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
      hp: 62,
      atk: 72,
      def: 87,
      spe: 30,
      spa: 82,
      spd: 87
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
      "1": "Grassy Surge"
    },
    eggGroups: [
      "Monster",
      "Grass"
    ],
    prevo: "Snover",
    evoLevel: 35,
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
      hp: 122,
      atk: 117,
      def: 97,
      spe: 35,
      spa: 107,
      spd: 97
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
      "0": "Slush Rush",
      "1": "Grassy Guard"
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
      hp: 122,
      atk: 157,
      def: 107,
      spe: 35,
      spa: 147,
      spd: 107
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
      "0": "Refrigerate",
      "1": "Ruthless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Sneasel",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 35,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 65,
      spe: 133,
      spa: 62,
      spd: 65
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
      "0": "Levitate",
      "1": "Galvanize",
      H: "Magnet Pull"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Magneton",
    evoItem: "Electric Gem",
    evoType: "useItem",
    evoLevel: 45,
    evoCondition: null,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 180,
    baseStats: {
      hp: 80,
      atk: 70,
      def: 130,
      spe: 75,
      spa: 145,
      spd: 100
    }
  },
  lickilicky: {
    name: "Lickilicky",
    num: 463,
    types: [
      "Normal",
      "Poison"
    ],
    abilities: {
      "0": "Simple",
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Lickitung",
    evoItem: "Normal Gem",
    evoType: "useItem",
    evoLevel: 33,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 140,
    baseStats: {
      hp: 125,
      atk: 100,
      def: 100,
      spe: 50,
      spa: 100,
      spd: 100
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
      "0": "Sand Stream",
      "1": "Bulletproof"
    },
    eggGroups: [
      "Monster",
      "Field"
    ],
    prevo: "Rhydon",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 282.8,
    baseStats: {
      hp: 115,
      atk: 143,
      def: 145,
      spe: 32,
      spa: 45,
      spd: 95
    }
  },
  tangrowth: {
    name: "Tangrowth",
    num: 465,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Regenerator"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Tangela",
    evoItem: "Grass Gem",
    evoType: "useItem",
    evoLevel: 35,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 128.6,
    baseStats: {
      hp: 130,
      atk: 115,
      def: 125,
      spe: 20,
      spa: 100,
      spd: 85
    }
  },
  electivire: {
    name: "Electivire",
    num: 466,
    types: [
      "Electric",
      "Fighting"
    ],
    abilities: {
      "0": "Volt Rush",
      "1": "Proficiency"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Electabuzz",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 138.6,
    baseStats: {
      hp: 85,
      atk: 123,
      def: 70,
      spe: 107,
      spa: 115,
      spd: 75
    }
  },
  magmortar: {
    name: "Magmortar",
    num: 467,
    types: [
      "Fire",
      "Steel"
    ],
    abilities: {
      "0": "Rapid Fire",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Magmar",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 68,
    baseStats: {
      hp: 85,
      atk: 102,
      def: 95,
      spe: 73,
      spa: 125,
      spd: 95
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
      "0": "Aerilate",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    prevo: "Togetic",
    evoItem: "Flying Gem",
    evoType: "useItem",
    evoLevel: 32,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 38,
    baseStats: {
      hp: 85,
      atk: 50,
      def: 85,
      spe: 90,
      spa: 120,
      spd: 120
    }
  },
  yanmega: {
    name: "Yanmega",
    num: 469,
    types: [
      "Bug",
      "Dragon"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Yanma",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 35,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 51.5,
    baseStats: {
      hp: 89,
      atk: 90,
      def: 59,
      spe: 149,
      spa: 129,
      spd: 59
    }
  },
  leafeon: {
    name: "Leafeon",
    num: 470,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Surge",
      "1": "Solar Rush",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Grass Gem",
    evoType: "useItem",
    evoLevel: 25,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25.5,
    baseStats: {
      hp: 65,
      atk: 115,
      def: 70,
      spe: 110,
      spa: 95,
      spd: 70
    }
  },
  glaceon: {
    name: "Glaceon",
    num: 471,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Snow Warning",
      "1": "Refrigerate",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 25,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 25.9,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 80,
      spe: 90,
      spa: 115,
      spd: 110
    }
  },
  gliscor: {
    name: "Gliscor",
    num: 472,
    types: [
      "Poison",
      "Dark"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Tough Claws"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Gligar",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 35,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 42.5,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 125,
      spe: 105,
      spa: 45,
      spd: 75
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
      "0": "Refrigerate",
      "1": "Slush Rush"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Piloswine",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 40,
    evoMove: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 291,
    baseStats: {
      hp: 130,
      atk: 145,
      def: 90,
      spe: 80,
      spa: 60,
      spd: 70
    }
  },
  porygonz: {
    name: "Porygon-Z",
    num: 474,
    types: [
      "Electric",
      "Psychic"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Porygon2",
    evoItem: "Dubious Disc",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 34,
    baseStats: {
      hp: 75,
      atk: 80,
      def: 50,
      spe: 120,
      spa: 150,
      spd: 75
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
      "0": "Ruthless",
      "1": "Proficiency"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Kirlia",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 33,
    formes: [
      "Gallade",
      "Gallade-Mega"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 52,
    baseStats: {
      hp: 75,
      atk: 125,
      def: 75,
      spe: 110,
      spa: 60,
      spd: 90
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
      "0": "Defiant",
      "1": "Super Luck"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 56.4,
    baseStats: {
      hp: 75,
      atk: 170,
      def: 95,
      spe: 120,
      spa: 60,
      spd: 115
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
      "0": "Lightning Rod",
      "1": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Nosepass",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 35,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 340,
    baseStats: {
      hp: 85,
      atk: 50,
      def: 150,
      spe: 30,
      spa: 110,
      spd: 150
    }
  },
  dusknoir: {
    name: "Dusknoir",
    num: 477,
    types: [
      "Ghost",
      "Fighting"
    ],
    abilities: {
      "0": "Sinister",
      "1": "Levitate"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Dusclops",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 106.6,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 100,
      spe: 20,
      spa: 120,
      spd: 120
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
      "0": "Snow Warning",
      "1": "Levitate"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    prevo: "Snorunt",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 25,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 26.6,
    baseStats: {
      hp: 70,
      atk: 50,
      def: 70,
      spe: 125,
      spa: 125,
      spd: 95
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
      "0": "Levitate",
      "1": "Galvanize"
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
      atk: 35,
      def: 57,
      spe: 161,
      spa: 125,
      spd: 97
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
      "0": "Motor Drive",
      "1": "Aerilate"
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
      hp: 60,
      atk: 45,
      def: 97,
      spe: 126,
      spa: 125,
      spd: 97
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
      "0": "Levitate",
      "1": "Refrigerate"
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
      hp: 75,
      atk: 45,
      def: 107,
      spe: 91,
      spa: 125,
      spd: 107
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
      "0": "Levitate",
      "1": "Flash Fire"
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
      hp: 65,
      atk: 45,
      def: 107,
      spe: 101,
      spa: 125,
      spd: 107
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
      "0": "Levitate",
      "1": "Sap Sipper"
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
      hp: 70,
      atk: 45,
      def: 107,
      spe: 96,
      spa: 125,
      spd: 107
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
      "0": "Levitate",
      "1": "Storm Drain"
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
      hp: 80,
      atk: 45,
      def: 107,
      spe: 86,
      spa: 125,
      spd: 107
    }
  },
  uxie: {
    name: "Uxie",
    num: 480,
    types: [
      "Psychic",
      "Normal"
    ],
    abilities: {
      "0": "Magic Bounce",
      "1": "Levitate"
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
      hp: 65,
      atk: 40,
      def: 130,
      spe: 95,
      spa: 90,
      spd: 160
    }
  },
  mesprit: {
    name: "Mesprit",
    num: 481,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Sixth Sense",
      "1": "Levitate"
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
      hp: 65,
      atk: 60,
      def: 105,
      spe: 105,
      spa: 115,
      spd: 130
    }
  },
  azelf: {
    name: "Azelf",
    num: 482,
    types: [
      "Psychic",
      "Fighting"
    ],
    abilities: {
      "0": "Competitive",
      "1": "Levitate"
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
      hp: 65,
      atk: 80,
      def: 80,
      spe: 115,
      spa: 140,
      spd: 100
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
      "0": "Filter"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 683,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 150,
      spe: 90,
      spa: 200,
      spd: 120
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
      "0": "Psychic Surge"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 336,
    baseStats: {
      hp: 120,
      atk: 120,
      def: 120,
      spe: 90,
      spa: 200,
      spd: 150
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
      "0": "Rough Skin",
      "1": "Weak Armor"
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
      hp: 101,
      atk: 90,
      def: 116,
      spe: 47,
      spa: 130,
      spd: 116
    }
  },
  regigigas: {
    name: "Regigigas",
    num: 486,
    types: [
      "Normal",
      "Ground"
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
      hp: 195,
      atk: 250,
      def: 110,
      spe: 35,
      spa: 100,
      spd: 110
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
      "0": "Sinister",
      "1": "Pressure"
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
      hp: 120,
      atk: 100,
      def: 140,
      spe: 66,
      spa: 100,
      spd: 140
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
      "0": "No Guard",
      "1": "Levitate"
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
    requiredItem: "Griseous Orb",
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 650,
    baseStats: {
      hp: 120,
      atk: 140,
      def: 60,
      spe: 146,
      spa: 140,
      spd: 60
    }
  },
  cresselia: {
    name: "Cresselia",
    num: 488,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Dazzling",
      "1": "Levitate"
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
      hp: 85,
      atk: 60,
      def: 120,
      spe: 75,
      spa: 110,
      spd: 150
    }
  },
  phione: {
    name: "Phione",
    num: 489,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Hydration",
      "1": "Dry Skin"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    evos: [
      "Manaphy"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 3.1,
    baseStats: {
      hp: 65,
      atk: 50,
      def: 85,
      spe: 80,
      spa: 85,
      spd: 135
    }
  },
  manaphy: {
    name: "Manaphy",
    num: 490,
    types: [
      "Water",
      "Psychic"
    ],
    abilities: {
      "0": "Drizzle",
      "1": "Adaptability"
    },
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    prevo: "Phione",
    evoItem: "Psychic Gem",
    evoType: "useItem",
    evoLevel: 35,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 1.4,
    baseStats: {
      hp: 65,
      atk: 50,
      def: 85,
      spe: 80,
      spa: 135,
      spd: 135
    }
  },
  darkrai: {
    name: "Darkrai",
    num: 491,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Bad Dreams"
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
      atk: 70,
      def: 60,
      spe: 140,
      spa: 150,
      spd: 110
    }
  },
  shaymin: {
    name: "Shaymin",
    num: 492,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Grassy Surge",
      "1": "Pixilate"
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
      hp: 65,
      atk: 43,
      def: 90,
      spe: 62,
      spa: 115,
      spd: 125
    }
  },
  shayminsky: {
    name: "Shaymin-Sky",
    num: 492,
    types: [
      "Flying",
      "Grass"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Aerilate"
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
      hp: 65,
      atk: 93,
      def: 70,
      spe: 137,
      spa: 125,
      spd: 110
    }
  },
  arceus: {
    name: "Arceus",
    num: 493,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Versatility"
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
      hp: 250,
      atk: 250,
      def: 250,
      spe: 250,
      spa: 250,
      spd: 250
    }
  },
  victini: {
    name: "Victini",
    num: 494,
    types: [
      "Fairy",
      "Fire"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Competitive"
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
      hp: 60,
      atk: 115,
      def: 75,
      spe: 110,
      spa: 125,
      spd: 115
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
      "1": "Hubris"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    evos: [
      "Servine"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.1,
    baseStats: {
      hp: 47,
      atk: 45,
      def: 45,
      spe: 73,
      spa: 55,
      spd: 55
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
      "1": "Hubris"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 62,
      atk: 55,
      def: 65,
      spe: 93,
      spa: 80,
      spd: 80
    }
  },
  serperior: {
    name: "Serperior",
    num: 497,
    types: [
      "Grass",
      "Dragon"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hubris"
    },
    eggGroups: [
      "Field",
      "Grass"
    ],
    prevo: "Servine",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 63,
    baseStats: {
      hp: 102,
      atk: 60,
      def: 80,
      spe: 123,
      spa: 90,
      spd: 95
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
      "1": "Solar Rush"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pignite"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.9,
    baseStats: {
      hp: 50,
      atk: 68,
      def: 55,
      spe: 47,
      spa: 45,
      spd: 55
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
      "1": "Solar Rush"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 55.5,
    baseStats: {
      hp: 80,
      atk: 98,
      def: 70,
      spe: 57,
      spa: 60,
      spd: 70
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
      "0": "Intimidate",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pignite",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 180,
    baseStats: {
      hp: 110,
      atk: 133,
      def: 85,
      spe: 67,
      spa: 70,
      spd: 85
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
      "1": "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Dewott"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5.9,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 45,
      spe: 65,
      spa: 55,
      spd: 45
    }
  },
  dewott: {
    name: "Dewott",
    num: 502,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Torrent",
      "1": "Defiant"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Samurott"
    ],
    prevo: "Oshawott",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.5,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 60,
      spe: 90,
      spa: 65,
      spd: 60
    }
  },
  samurott: {
    name: "Samurott",
    num: 503,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Dewott",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 94.6,
    baseStats: {
      hp: 95,
      atk: 120,
      def: 90,
      spe: 95,
      spa: 70,
      spd: 80
    }
  },
  patrat: {
    name: "Patrat",
    num: 504,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Emergency Exit",
      H: "Tinted Lens"
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
      hp: 47,
      atk: 58,
      def: 45,
      spe: 72,
      spa: 58,
      spd: 50
    }
  },
  watchog: {
    name: "Watchog",
    num: 505,
    types: [
      "Normal",
      "Psychic"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Sap Sipper",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Patrat",
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 27,
    baseStats: {
      hp: 72,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 93,
      spd: 85
    }
  },
  lillipup: {
    name: "Lillipup",
    num: 506,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Slush Rush"
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
      spe: 75,
      spa: 30,
      spd: 45
    }
  },
  herdier: {
    name: "Herdier",
    num: 507,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Slush Rush"
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
      spe: 85,
      spa: 40,
      spd: 65
    }
  },
  stoutland: {
    name: "Stoutland",
    num: 508,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Slush Rush"
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
      hp: 100,
      atk: 110,
      def: 90,
      spe: 90,
      spa: 45,
      spd: 90
    }
  },
  purrloin: {
    name: "Purrloin",
    num: 509,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Technician"
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
      hp: 45,
      atk: 64,
      def: 45,
      spe: 91,
      spa: 40,
      spd: 45
    }
  },
  liepard: {
    name: "Liepard",
    num: 510,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Technician"
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
      hp: 75,
      atk: 109,
      def: 60,
      spe: 121,
      spa: 55,
      spd: 60
    }
  },
  pansage: {
    name: "Pansage",
    num: 511,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Overgrow"
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
      atk: 64,
      def: 48,
      spe: 96,
      spa: 64,
      spd: 48
    }
  },
  simisage: {
    name: "Simisage",
    num: 512,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Grassy Surge"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pansage",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 30.5,
    baseStats: {
      hp: 75,
      atk: 99,
      def: 68,
      spe: 116,
      spa: 99,
      spd: 68
    }
  },
  pansear: {
    name: "Pansear",
    num: 513,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Blaze"
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
      atk: 64,
      def: 48,
      spe: 96,
      spa: 64,
      spd: 48
    }
  },
  simisear: {
    name: "Simisear",
    num: 514,
    types: [
      "Fire"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Drought"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Pansear",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 99,
      def: 68,
      spe: 116,
      spa: 99,
      spd: 68
    }
  },
  panpour: {
    name: "Panpour",
    num: 515,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Torrent"
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
      atk: 64,
      def: 48,
      spe: 96,
      spa: 64,
      spd: 48
    }
  },
  simipour: {
    name: "Simipour",
    num: 516,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Drizzle"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Panpour",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 29,
    baseStats: {
      hp: 75,
      atk: 99,
      def: 68,
      spe: 116,
      spa: 99,
      spd: 68
    }
  },
  munna: {
    name: "Munna",
    num: 517,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Misty Surge"
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
      hp: 66,
      atk: 25,
      def: 65,
      spe: 24,
      spa: 87,
      spd: 103
    }
  },
  musharna: {
    name: "Musharna",
    num: 518,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Misty Surge"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Munna",
    evoItem: null,
    evoType: null,
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 60.5,
    baseStats: {
      hp: 116,
      atk: 35,
      def: 95,
      spe: 29,
      spa: 117,
      spd: 143
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
      "0": "Super Luck",
      "1": "Unaware"
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
      hp: 45,
      atk: 60,
      def: 45,
      spe: 63,
      spa: 57,
      spd: 40
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
      "0": "Super Luck",
      "1": "Competitive"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Unfezant"
    ],
    prevo: "Pidove",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15,
    baseStats: {
      hp: 60,
      atk: 85,
      def: 60,
      spe: 98,
      spa: 77,
      spd: 50
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
      "0": "Super Luck",
      "1": "Proficiency"
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
      spe: 108,
      spa: 107,
      spd: 60
    }
  },
  blitzle: {
    name: "Blitzle",
    num: 522,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Speed Boost",
      H: "Headstrong"
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
      hp: 55,
      atk: 80,
      def: 55,
      spe: 110,
      spa: 75,
      spd: 55
    }
  },
  zebstrika: {
    name: "Zebstrika",
    num: 523,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Reckless",
      "1": "Speed Boost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Blitzle",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 79.5,
    baseStats: {
      hp: 75,
      atk: 110,
      def: 70,
      spe: 125,
      spa: 100,
      spd: 70
    }
  },
  roggenrola: {
    name: "Roggenrola",
    num: 524,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Rough Skin",
      "1": "Energy Shield"
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
      hp: 40,
      atk: 75,
      def: 105,
      spe: 10,
      spa: 75,
      spd: 55
    }
  },
  boldore: {
    name: "Boldore",
    num: 525,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Energy Shield"
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
      def: 120,
      spe: 10,
      spa: 105,
      spd: 70
    }
  },
  gigalith: {
    name: "Gigalith",
    num: 526,
    types: [
      "Rock"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Sand Stream"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Boldore",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 260,
    baseStats: {
      hp: 110,
      atk: 135,
      def: 130,
      spe: 10,
      spa: 135,
      spd: 80
    }
  },
  woobat: {
    name: "Woobat",
    num: 527,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Simple",
      "1": "Pixilate"
    },
    eggGroups: [
      "Field",
      "Flying"
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
      hp: 47,
      atk: 37,
      def: 45,
      spe: 99,
      spa: 77,
      spd: 65
    }
  },
  swoobat: {
    name: "Swoobat",
    num: 528,
    types: [
      "Fairy",
      "Flying"
    ],
    abilities: {
      "0": "Simple",
      "1": "Pixilate"
    },
    eggGroups: [
      "Field",
      "Flying"
    ],
    prevo: "Woobat",
    evoType: null,
    evoLevel: 22,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 67,
      atk: 57,
      def: 60,
      spe: 114,
      spa: 107,
      spd: 95
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
      "1": "Mold Breaker"
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
      hp: 50,
      atk: 95,
      def: 72,
      spe: 78,
      spa: 30,
      spd: 45
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
      "1": "Ruthless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Drilbur",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40.4,
    baseStats: {
      hp: 80,
      atk: 135,
      def: 107,
      spe: 98,
      spa: 50,
      spd: 65
    }
  },
  audino: {
    name: "Audino",
    num: 531,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Trace"
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
      def: 91,
      spe: 50,
      spa: 80,
      spd: 116
    }
  },
  audinomega: {
    name: "Audino-Mega",
    num: 531,
    types: [
      "Fairy",
      "Normal"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Magic Bounce"
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
      spe: 50,
      spa: 105,
      spd: 156
    }
  },
  timburr: {
    name: "Timburr",
    num: 532,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Technician",
      "1": "Sap Sipper"
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
      hp: 55,
      atk: 90,
      def: 80,
      spe: 35,
      spa: 30,
      spd: 40
    }
  },
  gurdurr: {
    name: "Gurdurr",
    num: 533,
    types: [
      "Fighting",
      "Steel"
    ],
    abilities: {
      "0": "Technician",
      "1": "Filter"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Conkeldurr"
    ],
    prevo: "Timburr",
    evoLevel: 20,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 40,
    baseStats: {
      hp: 80,
      atk: 120,
      def: 110,
      spe: 40,
      spa: 40,
      spd: 50
    }
  },
  conkeldurr: {
    name: "Conkeldurr",
    num: 534,
    types: [
      "Fighting",
      "Rock"
    ],
    abilities: {
      "0": "Technician",
      "1": "Solid Rock"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Gurdurr",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 36,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    weightkg: 87,
    baseStats: {
      hp: 105,
      atk: 145,
      def: 120,
      spe: 45,
      spa: 55,
      spd: 80
    }
  },
  tympole: {
    name: "Tympole",
    num: 535,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Dry Skin",
      "1": "Amplifier"
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
      hp: 40,
      atk: 50,
      def: 45,
      spe: 70,
      spa: 60,
      spd: 45
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
      "0": "Dry Skin",
      "1": "Amplifier"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Seismitoad"
    ],
    prevo: "Tympole",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 75,
      atk: 70,
      def: 75,
      spe: 55,
      spa: 70,
      spd: 75
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
      "0": "Dry Skin",
      "1": "Sheer Force",
      H: "Poison Heal"
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
      hp: 110,
      atk: 115,
      def: 90,
      spe: 40,
      spa: 105,
      spd: 90
    }
  },
  throh: {
    name: "Throh",
    num: 538,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Stamina",
      "1": "Expertise"
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
      hp: 100,
      atk: 115,
      def: 115,
      spe: 45,
      spa: 30,
      spd: 95
    }
  },
  sawk: {
    name: "Sawk",
    num: 539,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Versatility",
      "1": "Expertise"
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
      def: 90,
      spe: 100,
      spa: 30,
      spd: 80
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
      "0": "Grassy Guard",
      "1": "Harvest"
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
      spe: 29,
      spa: 63,
      spd: 70
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
      "0": "Grassy Guard",
      "1": "Harvest"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Leavanny"
    ],
    prevo: "Sewaddle",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.3,
    baseStats: {
      hp: 60,
      atk: 63,
      def: 95,
      spe: 44,
      spa: 73,
      spd: 95
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
      "0": "Grassy Surge",
      "1": "Technician",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Swadloon",
    evoType: null,
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.5,
    baseStats: {
      hp: 75,
      atk: 108,
      def: 80,
      spe: 109,
      spa: 98,
      spd: 80
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
      "0": "Speed Boost",
      "1": "Merciless"
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
      hp: 41,
      atk: 65,
      def: 71,
      spe: 72,
      spa: 30,
      spd: 51
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
      "0": "Speed Boost",
      "1": "Merciless"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Scolipede"
    ],
    prevo: "Venipede",
    evoLevel: 19,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 58.5,
    baseStats: {
      hp: 61,
      atk: 70,
      def: 101,
      spe: 87,
      spa: 40,
      spd: 81
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
      "0": "Speed Boost",
      "1": "Intimidate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Whirlipede",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 200.5,
    baseStats: {
      hp: 106,
      atk: 120,
      def: 91,
      spe: 112,
      spa: 50,
      spd: 71
    }
  },
  cottonee: {
    name: "Cottonee",
    num: 546,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Fluffy"
    },
    eggGroups: [
      "Grass",
      "Fairy"
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
      spe: 76,
      spa: 72,
      spd: 75
    }
  },
  whimsicott: {
    name: "Whimsicott",
    num: 547,
    types: [
      "Grass",
      "Flying"
    ],
    abilities: {
      "0": "Prankster",
      "1": "Fluffy"
    },
    eggGroups: [
      "Grass",
      "Fairy"
    ],
    prevo: "Cottonee",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.6,
    baseStats: {
      hp: 60,
      atk: 57,
      def: 85,
      spe: 116,
      spa: 97,
      spd: 100
    }
  },
  petilil: {
    name: "Petilil",
    num: 548,
    types: [
      "Grass",
      "Fairy"
    ],
    abilities: {
      "0": "Harvest",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Lilligant"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 6.6,
    baseStats: {
      hp: 45,
      atk: 35,
      def: 55,
      spe: 60,
      spa: 85,
      spd: 70
    }
  },
  lilligant: {
    name: "Lilligant",
    num: 549,
    types: [
      "Fairy",
      "Grass"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Petilil",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 16.3,
    baseStats: {
      hp: 70,
      atk: 50,
      def: 80,
      spe: 95,
      spa: 115,
      spd: 105
    }
  },
  basculin: {
    name: "Basculin",
    num: 550,
    types: [
      "Water",
      "Fighting"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Instinct"
    },
    eggGroups: [
      "Water 2"
    ],
    formes: [
      "Basculin",
      "Basculin-Blue-Striped"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 65,
      atk: 102,
      def: 65,
      spe: 113,
      spa: 90,
      spd: 65
    }
  },
  basculinbluestriped: {
    name: "Basculin-Blue-Striped",
    num: 550,
    types: [
      "Water",
      "Dark"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Instinct"
    },
    eggGroups: [
      "Water 2"
    ],
    baseSpecies: "Basculin",
    forme: "Blue-Striped",
    formes: [
      "Basculin",
      "Basculin-Blue-Striped"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 18,
    baseStats: {
      hp: 65,
      atk: 102,
      def: 65,
      spe: 113,
      spa: 90,
      spd: 65
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
      "1": "Sand Rush"
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
      atk: 93,
      def: 50,
      spe: 67,
      spa: 35,
      spd: 40
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
      "1": "Moxie"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Krookodile"
    ],
    prevo: "Sandile",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33.4,
    baseStats: {
      hp: 75,
      atk: 113,
      def: 70,
      spe: 92,
      spa: 45,
      spd: 60
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
      "1": "Strong Jaw"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Krokorok",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 96.3,
    baseStats: {
      hp: 105,
      atk: 128,
      def: 95,
      spe: 97,
      spa: 65,
      spd: 85
    }
  },
  darumaka: {
    name: "Darumaka",
    num: 554,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Flash Fire"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Darmanitan"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 37.5,
    baseStats: {
      hp: 60,
      atk: 90,
      def: 65,
      spe: 75,
      spa: 15,
      spd: 45
    }
  },
  darmanitan: {
    name: "Darmanitan",
    num: 555,
    types: [
      "Fire",
      "Ground"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Reckless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Darumaka",
    evoLevel: 32,
    formes: [
      "Darmanitan",
      "Darmanitan-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.9,
    baseStats: {
      hp: 105,
      atk: 150,
      def: 70,
      spe: 105,
      spa: 30,
      spd: 55
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
      "0": "Psychic Surge",
      "1": "Drought"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Darmanitan",
    forme: "Zen",
    formes: [
      "Darmanitan",
      "Darmanitan-Zen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.9,
    baseStats: {
      hp: 105,
      atk: 30,
      def: 125,
      spe: 10,
      spa: 180,
      spd: 165
    }
  },
  maractus: {
    name: "Maractus",
    num: 556,
    types: [
      "Ground",
      "Grass"
    ],
    abilities: {
      "0": "Solar Rush",
      "1": "Storm Drain"
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
      def: 107,
      spe: 65,
      spa: 110,
      spd: 92
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
      "0": "Tough Claws",
      "1": "Solid Rock"
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
      def: 95,
      spe: 55,
      spa: 35,
      spd: 70
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
      "0": "Tough Claws",
      "1": "Sand Stream"
    },
    eggGroups: [
      "Bug",
      "Mineral"
    ],
    prevo: "Dwebble",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 200,
    baseStats: {
      hp: 80,
      atk: 110,
      def: 145,
      spe: 45,
      spa: 65,
      spd: 80
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
      "0": "Intimidate",
      "1": "Moxie"
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
      atk: 77,
      def: 75,
      spe: 58,
      spa: 35,
      spd: 75
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
      "0": "Intimidate",
      "1": "Moxie"
    },
    eggGroups: [
      "Field",
      "Dragon"
    ],
    prevo: "Scraggy",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 30,
    baseStats: {
      hp: 70,
      atk: 107,
      def: 115,
      spe: 73,
      spa: 45,
      spd: 115
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
      "0": "Magic Guard",
      "1": "Neuroforce"
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
      atk: 43,
      def: 80,
      spe: 127,
      spa: 133,
      spd: 95
    }
  },
  yamask: {
    name: "Yamask",
    num: 562,
    types: [
      "Ghost"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Sinister"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    evos: [
      "Cofagrigus"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 48,
      atk: 30,
      def: 90,
      spe: 30,
      spa: 82,
      spd: 90
    }
  },
  cofagrigus: {
    name: "Cofagrigus",
    num: 563,
    types: [
      "Ghost",
      "Rock"
    ],
    abilities: {
      "0": "Sand Stream",
      "1": "Sinister"
    },
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    prevo: "Yamask",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 76.5,
    baseStats: {
      hp: 88,
      atk: 50,
      def: 145,
      spe: 30,
      spa: 117,
      spd: 105
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
      "0": "Strong Jaw",
      "1": "Solid Rock"
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
      def: 118,
      spe: 22,
      spa: 48,
      spd: 80
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
      "0": "Strong Jaw",
      "1": "Bulletproof"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Tirtouga",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 81,
    baseStats: {
      hp: 84,
      atk: 118,
      def: 143,
      spe: 32,
      spa: 53,
      spd: 120
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
      "0": "Hustle",
      "1": "Unburden"
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
      atk: 85,
      def: 45,
      spe: 99,
      spa: 71,
      spd: 45
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
      "0": "Hustle",
      "1": "Reckless"
    },
    eggGroups: [
      "Flying",
      "Water 3"
    ],
    prevo: "Archen",
    evoLevel: 33,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 32,
    baseStats: {
      hp: 75,
      atk: 120,
      def: 65,
      spe: 119,
      spa: 106,
      spd: 65
    }
  },
  trubbish: {
    name: "Trubbish",
    num: 568,
    types: [
      "Poison"
    ],
    abilities: {
      "0": "Weak Armor",
      "1": "Heatproof"
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
      hp: 62,
      atk: 60,
      def: 72,
      spe: 44,
      spa: 60,
      spd: 72
    }
  },
  garbodor: {
    name: "Garbodor",
    num: 569,
    types: [
      "Poison",
      "Steel"
    ],
    abilities: {
      "0": "Heatproof",
      "1": "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Trubbish",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 107.3,
    baseStats: {
      hp: 112,
      atk: 95,
      def: 102,
      spe: 44,
      spa: 95,
      spd: 102
    }
  },
  zorua: {
    name: "Zorua",
    num: 570,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Illusion",
      "1": "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Zoroark"
    ],
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 12.5,
    baseStats: {
      hp: 50,
      atk: 65,
      def: 40,
      spe: 90,
      spa: 85,
      spd: 40
    }
  },
  zoroark: {
    name: "Zoroark",
    num: 571,
    types: [
      "Dark"
    ],
    abilities: {
      "0": "Illusion",
      "1": "Dark Aura"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Zorua",
    evoLevel: 25,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 81.1,
    baseStats: {
      hp: 75,
      atk: 115,
      def: 60,
      spe: 115,
      spa: 125,
      spd: 60
    }
  },
  minccino: {
    name: "Minccino",
    num: 572,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Technician",
      "1": "Wimp Out"
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
      hp: 50,
      atk: 60,
      def: 50,
      spe: 95,
      spa: 60,
      spd: 55
    }
  },
  cinccino: {
    name: "Cinccino",
    num: 573,
    types: [
      "Normal",
      "Fairy"
    ],
    abilities: {
      "0": "Technician",
      "1": "Skill Link"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Minccino",
    evoItem: null,
    evoType: null,
    evoLevel: 22,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 7.5,
    baseStats: {
      hp: 65,
      atk: 95,
      def: 65,
      spe: 115,
      spa: 95,
      spd: 80
    }
  },
  gothita: {
    name: "Gothita",
    num: 574,
    types: [
      "Fairy",
      "Dark"
    ],
    abilities: {
      "0": "Psychic Surge",
      "1": "Magic Bounce"
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
      spe: 45,
      spa: 75,
      spd: 80
    }
  },
  gothorita: {
    name: "Gothorita",
    num: 575,
    types: [
      "Fairy",
      "Dark"
    ],
    abilities: {
      "0": "Psychic Surge",
      "1": "Magic Bounce"
    },
    eggGroups: [
      "Human-Like"
    ],
    evos: [
      "Gothitelle"
    ],
    prevo: "Gothita",
    evoLevel: 18,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 18,
    baseStats: {
      hp: 60,
      atk: 45,
      def: 70,
      spe: 55,
      spa: 95,
      spd: 100
    }
  },
  gothitelle: {
    name: "Gothitelle",
    num: 576,
    types: [
      "Fairy",
      "Dark"
    ],
    abilities: {
      "0": "Psychic Surge",
      "1": "Magic Bounce",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Gothorita",
    evoLevel: 32,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    weightkg: 44,
    baseStats: {
      hp: 80,
      atk: 55,
      def: 95,
      spe: 65,
      spa: 125,
      spd: 130
    }
  },
  solosis: {
    name: "Solosis",
    num: 577,
    types: [
      "Psychic",
      "Poison"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Liquid Veil"
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
      spe: 20,
      spa: 105,
      spd: 60
    }
  },
  duosion: {
    name: "Duosion",
    num: 578,
    types: [
      "Psychic",
      "Poison"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Reuniclus"
    ],
    prevo: "Solosis",
    evoLevel: 18,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8,
    baseStats: {
      hp: 65,
      atk: 40,
      def: 70,
      spe: 20,
      spa: 115,
      spd: 90
    }
  },
  reuniclus: {
    name: "Reuniclus",
    num: 579,
    types: [
      "Psychic",
      "Poison"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Duosion",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 20.1,
    baseStats: {
      hp: 110,
      atk: 115,
      def: 80,
      spe: 20,
      spa: 125,
      spd: 100
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
      "0": "Unaware",
      "1": "Sap Sipper"
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
      hp: 55,
      atk: 58,
      def: 53,
      spe: 83,
      spa: 68,
      spd: 53
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
      "0": "Serene Grace",
      "1": "Stamina"
    },
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    prevo: "Ducklett",
    evoLevel: 24,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.2,
    baseStats: {
      hp: 75,
      atk: 98,
      def: 73,
      spe: 108,
      spa: 108,
      spd: 73
    }
  },
  vanillite: {
    name: "Vanillite",
    num: 582,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Weak Armor",
      "1": "Water Absorb"
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
      hp: 41,
      atk: 30,
      def: 50,
      spe: 74,
      spa: 75,
      spd: 60
    }
  },
  vanillish: {
    name: "Vanillish",
    num: 583,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Weak Armor",
      "1": "Water Absorb"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Vanilluxe"
    ],
    prevo: "Vanillite",
    evoLevel: 19,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 41,
    baseStats: {
      hp: 61,
      atk: 40,
      def: 75,
      spe: 84,
      spa: 95,
      spd: 85
    }
  },
  vanilluxe: {
    name: "Vanilluxe",
    num: 584,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Weak Armor",
      "1": "Water Absorb",
      H: "Snow Warning"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Vanillish",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 57.5,
    baseStats: {
      hp: 81,
      atk: 50,
      def: 90,
      spe: 94,
      spa: 125,
      spd: 110
    }
  },
  deerling: {
    name: "Deerling",
    num: 585,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Versatility"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Sawsbuck"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 19.5,
    baseStats: {
      hp: 60,
      atk: 70,
      def: 50,
      spe: 100,
      spa: 40,
      spd: 50
    }
  },
  sawsbuck: {
    name: "Sawsbuck",
    num: 586,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Versatility"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Deerling",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 92.5,
    baseStats: {
      hp: 95,
      atk: 110,
      def: 80,
      spe: 110,
      spa: 60,
      spd: 80
    }
  },
  emolga: {
    name: "Emolga",
    num: 587,
    types: [
      "Flying",
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Lightning Rod"
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
      hp: 60,
      atk: 60,
      def: 60,
      spe: 138,
      spa: 107,
      spd: 90
    }
  },
  karrablast: {
    name: "Karrablast",
    num: 588,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Unburden"
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
      atk: 85,
      def: 65,
      spe: 85,
      spa: 30,
      spd: 55
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
      "0": "Shell Armor",
      "1": "Unburden"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Karrablast",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 32,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 33,
    baseStats: {
      hp: 70,
      atk: 135,
      def: 125,
      spe: 60,
      spa: 40,
      spd: 105
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
      "0": "Regenerator",
      "1": "Unaware"
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
      hp: 49,
      atk: 55,
      def: 75,
      spe: 15,
      spa: 65,
      spd: 91
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
      "0": "Regenerator",
      "1": "Unaware"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Foongus",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 99,
      atk: 85,
      def: 95,
      spe: 30,
      spa: 95,
      spd: 111
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
      "0": "Sinister",
      "1": "Regenerator",
      H: "Shadow Tag"
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
      hp: 60,
      atk: 40,
      def: 60,
      spe: 40,
      spa: 90,
      spd: 120
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
      "0": "Sinister",
      "1": "Regenerator",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Frillish",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 135,
    baseStats: {
      hp: 120,
      atk: 45,
      def: 80,
      spe: 45,
      spa: 110,
      spd: 135
    }
  },
  alomomola: {
    name: "Alomomola",
    num: 594,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Magic Bounce",
      H: "Friend Guard"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    prevo: "Luvdisc",
    evoItem: "Water Gem",
    evoType: "useItem",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 31.6,
    baseStats: {
      hp: 155,
      atk: 38,
      def: 80,
      spe: 62,
      spa: 75,
      spd: 125
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
      "0": "Lightning Rod",
      "1": "Unnerve",
      H: "Tinted Lens"
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
      hp: 20,
      atk: 37,
      def: 50,
      spe: 101,
      spa: 92,
      spd: 50
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
      "0": "Electric Surge",
      "1": "Intimidate",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Joltik",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.3,
    baseStats: {
      hp: 70,
      atk: 97,
      def: 60,
      spe: 121,
      spa: 117,
      spd: 60
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
      "0": "Iron Barbs",
      "1": "Sturdy"
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
      atk: 64,
      def: 114,
      spe: 10,
      spa: 24,
      spd: 94
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
      "1": "Skill Link"
    },
    eggGroups: [
      "Grass",
      "Mineral"
    ],
    prevo: "Ferroseed",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110,
    baseStats: {
      hp: 74,
      atk: 109,
      def: 144,
      spe: 20,
      spa: 54,
      spd: 124
    }
  },
  klink: {
    name: "Klink",
    num: 599,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Technician"
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
      atk: 60,
      def: 90,
      spe: 25,
      spa: 60,
      spd: 60
    }
  },
  klang: {
    name: "Klang",
    num: 600,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Technician"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Klinklang"
    ],
    prevo: "Klink",
    evoLevel: 20,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 51,
    baseStats: {
      hp: 60,
      atk: 80,
      def: 100,
      spe: 50,
      spa: 80,
      spd: 85
    }
  },
  klinklang: {
    name: "Klinklang",
    num: 601,
    types: [
      "Steel"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Technician"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Klang",
    evoItem: "Steel Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 81,
    baseStats: {
      hp: 80,
      atk: 100,
      def: 120,
      spe: 75,
      spa: 100,
      spd: 100
    }
  },
  tynamo: {
    name: "Tynamo",
    num: 602,
    types: [
      "Electric"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Liquid Veil"
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
      atk: 34,
      def: 40,
      spe: 93,
      spa: 79,
      spd: 79
    }
  },
  eelektrik: {
    name: "Eelektrik",
    num: 603,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Eelektross"
    ],
    prevo: "Tynamo",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 22,
    baseStats: {
      hp: 75,
      atk: 94,
      def: 70,
      spe: 53,
      spa: 94,
      spd: 94
    }
  },
  eelektross: {
    name: "Eelektross",
    num: 604,
    types: [
      "Electric",
      "Poison"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Eelektrik",
    evoItem: "Electric Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 80.5,
    baseStats: {
      hp: 100,
      atk: 119,
      def: 80,
      spe: 63,
      spa: 119,
      spd: 119
    }
  },
  elgyem: {
    name: "Elgyem",
    num: 605,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Analytic",
      "1": "Neuroforce",
      H: "Tinted Lens"
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
      atk: 30,
      def: 85,
      spe: 30,
      spa: 115,
      spd: 105
    }
  },
  beheeyem: {
    name: "Beheeyem",
    num: 606,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Analytic",
      "1": "Neuroforce",
      H: "Interstellar"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Elgyem",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34.5,
    baseStats: {
      hp: 75,
      atk: 50,
      def: 105,
      spe: 30,
      spa: 150,
      spd: 140
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
      "0": "Cursed Body",
      "1": "Flash Fire",
      H: "Shadow Tag"
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
      hp: 45,
      atk: 30,
      def: 55,
      spe: 20,
      spa: 95,
      spd: 90
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
      "0": "Levitate",
      "1": "Flash Fire",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Chandelure"
    ],
    prevo: "Litwick",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 13,
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spe: 75,
      spa: 115,
      spd: 95
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
      "0": "Levitate",
      "1": "Weak Armor",
      H: "Shadow Tag"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Lampent",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 40,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 34.3,
    baseStats: {
      hp: 75,
      atk: 55,
      def: 90,
      spe: 85,
      spa: 145,
      spd: 125
    }
  },
  axew: {
    name: "Axew",
    num: 610,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Defiant"
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
      hp: 47,
      atk: 87,
      def: 77,
      spe: 67,
      spa: 35,
      spd: 47
    }
  },
  fraxure: {
    name: "Fraxure",
    num: 611,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Intimidate"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Haxorus"
    ],
    prevo: "Axew",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36,
    baseStats: {
      hp: 77,
      atk: 117,
      def: 97,
      spe: 77,
      spa: 45,
      spd: 67
    }
  },
  haxorus: {
    name: "Haxorus",
    num: 612,
    types: [
      "Dragon",
      "Fighting"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Intimidate"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Fraxure",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 105.5,
    baseStats: {
      hp: 107,
      atk: 147,
      def: 107,
      spe: 97,
      spa: 65,
      spd: 77
    }
  },
  cubchoo: {
    name: "Cubchoo",
    num: 613,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Slush Rush",
      "1": "Hustle"
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
      hp: 62,
      atk: 75,
      def: 65,
      spe: 53,
      spa: 50,
      spd: 65
    }
  },
  beartic: {
    name: "Beartic",
    num: 614,
    types: [
      "Ice",
      "Water"
    ],
    abilities: {
      "0": "Slush Rush",
      "1": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Cubchoo",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 260,
    baseStats: {
      hp: 102,
      atk: 135,
      def: 80,
      spe: 83,
      spa: 55,
      spd: 80
    }
  },
  cryogonal: {
    name: "Cryogonal",
    num: 615,
    types: [
      "Ice",
      "Flying"
    ],
    abilities: {
      "0": "Energy Shield",
      "1": "Regenerator"
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
      atk: 40,
      def: 60,
      spe: 110,
      spa: 125,
      spd: 135
    }
  },
  shelmet: {
    name: "Shelmet",
    num: 616,
    types: [
      "Bug",
      "Steel"
    ],
    abilities: {
      "0": "Dry Skin",
      "1": "Shell Armor"
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
      def: 110,
      spe: 25,
      spa: 55,
      spd: 90
    }
  },
  accelgor: {
    name: "Accelgor",
    num: 617,
    types: [
      "Bug",
      "Dark"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Versatility"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Shelmet",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 32,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 25.3,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 40,
      spe: 165,
      spa: 105,
      spd: 60
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
      "0": "Electric Surge",
      "1": "Water Absorb"
    },
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11,
    baseStats: {
      hp: 89,
      atk: 65,
      def: 119,
      spe: 32,
      spa: 101,
      spd: 119
    }
  },
  mienfoo: {
    name: "Mienfoo",
    num: 619,
    types: [
      "Fighting",
      "Normal"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Technician"
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
      def: 45,
      spe: 95,
      spa: 55,
      spd: 45
    }
  },
  mienshao: {
    name: "Mienshao",
    num: 620,
    types: [
      "Fighting",
      "Normal"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Technician"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Mienfoo",
    evoLevel: 26,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 35.5,
    baseStats: {
      hp: 70,
      atk: 125,
      def: 60,
      spe: 115,
      spa: 95,
      spd: 60
    }
  },
  druddigon: {
    name: "Druddigon",
    num: 621,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Multiscale",
      "1": "Tough Claws"
    },
    eggGroups: [
      "Dragon",
      "Monster"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 139,
    baseStats: {
      hp: 107,
      atk: 130,
      def: 115,
      spe: 73,
      spa: 60,
      spd: 90
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
      "0": "Energy Shield",
      "1": "Weak Armor"
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
      hp: 69,
      atk: 101,
      def: 100,
      spe: 35,
      spa: 35,
      spd: 90
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
      "0": "Energy Shield",
      "1": "Weak Armor"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Golett",
    evoLevel: 40,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 330,
    baseStats: {
      hp: 129,
      atk: 151,
      def: 110,
      spe: 55,
      spa: 55,
      spd: 100
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
      "0": "Moxie",
      "1": "Defiant"
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
      atk: 95,
      def: 80,
      spe: 75,
      spa: 35,
      spd: 40
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
      "0": "Moxie",
      "1": "Ruthless"
    },
    eggGroups: [
      "Human-Like"
    ],
    prevo: "Pawniard",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 70,
    baseStats: {
      hp: 70,
      atk: 130,
      def: 110,
      spe: 100,
      spa: 55,
      spd: 70
    }
  },
  bouffalant: {
    name: "Bouffalant",
    num: 626,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Headstrong",
      "1": "Fluffy"
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
      atk: 150,
      def: 95,
      spe: 80,
      spa: 35,
      spd: 95
    }
  },
  rufflet: {
    name: "Rufflet",
    num: 627,
    types: [
      "Flying",
      "Normal"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Scrappy"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Braviary"
    ],
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 10.5,
    baseStats: {
      hp: 50,
      atk: 83,
      def: 60,
      spe: 80,
      spa: 37,
      spd: 60
    }
  },
  braviary: {
    name: "Braviary",
    num: 628,
    types: [
      "Flying",
      "Fighting"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Sheer Force"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Rufflet",
    evoLevel: 32,
    genderRatio: {
      M: 1,
      F: 0
    },
    weightkg: 41,
    baseStats: {
      hp: 100,
      atk: 123,
      def: 75,
      spe: 105,
      spa: 57,
      spd: 75
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
      "0": "Sinister",
      "1": "Prankster"
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
      hp: 50,
      atk: 55,
      def: 85,
      spe: 50,
      spa: 45,
      spd: 85
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
      "0": "Sinister",
      "1": "Intimidate"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Vullaby",
    evoLevel: 32,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 39.5,
    baseStats: {
      hp: 100,
      atk: 90,
      def: 105,
      spe: 80,
      spa: 55,
      spd: 105
    }
  },
  heatmor: {
    name: "Heatmor",
    num: 631,
    types: [
      "Fire",
      "Steel"
    ],
    abilities: {
      "0": "Tough Claws",
      "1": "Flash Fire"
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
      def: 101,
      spe: 35,
      spa: 116,
      spd: 101
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
      "0": "Hustle",
      "1": "Strong Jaw"
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
      hp: 63,
      atk: 113,
      def: 133,
      spe: 113,
      spa: 50,
      spd: 63
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
      "0": "Hustle",
      "1": "Berserk"
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
      atk: 75,
      def: 55,
      spe: 53,
      spa: 70,
      spd: 55
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
      "0": "Hustle",
      "1": "Berserk"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Hydreigon"
    ],
    prevo: "Deino",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 50,
    baseStats: {
      hp: 77,
      atk: 100,
      def: 70,
      spe: 68,
      spa: 95,
      spd: 70
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
      "0": "Levitate",
      "1": "Sheer Force"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Zweilous",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 160,
    baseStats: {
      hp: 97,
      atk: 120,
      def: 75,
      spe: 108,
      spa: 125,
      spd: 75
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
      "0": "Flash Fire",
      "1": "Solar Rush"
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
      atk: 40,
      def: 65,
      spe: 70,
      spa: 95,
      spd: 85
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
      "0": "Levitate",
      "1": "Solar Rush"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Larvesta",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 46,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 75,
      spe: 100,
      spa: 135,
      spd: 115
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
      "0": "Proficiency",
      "1": "Intimidate"
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
      atk: 120,
      def: 119,
      spe: 118,
      spa: 70,
      spd: 82
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
      "0": "Proficiency",
      "1": "Headstrong"
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
      hp: 101,
      atk: 139,
      def: 110,
      spe: 108,
      spa: 62,
      spd: 80
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
      "0": "Proficiency",
      "1": "Grassy Surge"
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
      atk: 120,
      def: 77,
      spe: 128,
      spa: 70,
      spd: 114
    }
  },
  tornadus: {
    name: "Tornadus",
    num: 641,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Defiant",
      "1": "Aerilate"
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
      def: 75,
      spe: 131,
      spa: 125,
      spd: 75
    }
  },
  tornadustherian: {
    name: "Tornadus-Therian",
    num: 641,
    types: [
      "Flying"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Aerilate"
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
      atk: 95,
      def: 95,
      spe: 121,
      spa: 115,
      spd: 95
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
      "0": "Defiant",
      "1": "Aerilate"
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
      atk: 125,
      def: 75,
      spe: 121,
      spa: 125,
      spd: 75
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
      "0": "Tough Claws",
      "1": "Aerilate"
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
      atk: 115,
      def: 75,
      spe: 111,
      spa: 145,
      spd: 75
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
      "0": "Sweltering Sun"
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
      hp: 125,
      atk: 120,
      def: 110,
      spe: 95,
      spa: 175,
      spd: 125
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
      "0": "Electric Surge"
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
      hp: 125,
      atk: 175,
      def: 125,
      spe: 95,
      spa: 120,
      spd: 110
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
      "0": "Sheer Force",
      "1": "Aerilate"
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
      def: 80,
      spe: 111,
      spa: 115,
      spd: 80
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
      "0": "Intimidate",
      "1": "Aerilate"
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
      spe: 91,
      spa: 95,
      spd: 90
    }
  },
  kyurem: {
    name: "Kyurem",
    num: 646,
    types: [
      "Ice",
      "Dragon"
    ],
    abilities: {
      "0": "Refrigerate",
      "1": "Slush Rush"
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
      atk: 120,
      def: 90,
      spe: 95,
      spa: 140,
      spd: 90
    }
  },
  kyuremblack: {
    name: "Kyurem-Black",
    num: 646,
    types: [
      "Ice",
      "Electric"
    ],
    abilities: {
      "0": "Galvanize",
      "1": "Volt Rush"
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
      atk: 190,
      def: 110,
      spe: 95,
      spa: 140,
      spd: 100
    }
  },
  kyuremwhite: {
    name: "Kyurem-White",
    num: 646,
    types: [
      "Ice",
      "Fire"
    ],
    abilities: {
      "0": "Sweltering Sun",
      "1": "Solar Rush"
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
      atk: 140,
      def: 100,
      spe: 95,
      spa: 190,
      spd: 110
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
      "0": "Proficiency",
      "1": "Reckless"
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
      hp: 71,
      atk: 117,
      def: 75,
      spe: 123,
      spa: 119,
      spd: 75
    }
  },
  keldeoresolute: {
    name: "Keldeo-Resolute",
    num: 647,
    types: [
      "Water",
      "Fairy"
    ],
    abilities: {
      "0": "Proficiency",
      "1": "Reckless"
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
      hp: 71,
      atk: 127,
      def: 75,
      spe: 123,
      spa: 129,
      spd: 75
    }
  },
  meloetta: {
    name: "Meloetta",
    num: 648,
    types: [
      "Psychic",
      "Fairy"
    ],
    abilities: {
      "0": "Pixilate",
      "1": "Serene Grace"
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
      hp: 70,
      atk: 77,
      def: 77,
      spe: 100,
      spa: 138,
      spd: 138
    }
  },
  meloettapirouette: {
    name: "Meloetta-Pirouette",
    num: 648,
    types: [
      "Fighting",
      "Fairy"
    ],
    abilities: {
      "0": "Pixilate",
      "1": "Serene Grace"
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
      hp: 70,
      atk: 128,
      def: 77,
      spe: 128,
      spa: 120,
      spd: 77
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
      "0": "Instinct",
      "1": "Versatility",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 82.5,
    baseStats: {
      hp: 70,
      atk: 120,
      def: 90,
      spe: 120,
      spa: 130,
      spd: 70
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
      "1": "Grassy Guard"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Quilladin"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9,
    baseStats: {
      hp: 56,
      atk: 66,
      def: 70,
      spe: 43,
      spa: 33,
      spd: 52
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
      "1": "Grassy Guard"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Chesnaught"
    ],
    prevo: "Chespin",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 29,
    baseStats: {
      hp: 81,
      atk: 83,
      def: 102,
      spe: 57,
      spa: 39,
      spd: 73
    }
  },
  chesnaught: {
    name: "Chesnaught",
    num: 652,
    types: [
      "Grass",
      "Steel"
    ],
    abilities: {
      "0": "Bulletproof",
      "1": "Battle Armor"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Quilladin",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 130,
    baseStats: {
      hp: 103,
      atk: 127,
      def: 132,
      spe: 49,
      spa: 44,
      spd: 95
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
      "1": "Magician"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Braixen"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 9.4,
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spe: 65,
      spa: 70,
      spd: 60
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
      "1": "Magician"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Delphox"
    ],
    prevo: "Fennekin",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 59,
      atk: 50,
      def: 58,
      spe: 98,
      spa: 95,
      spd: 75
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
      "0": "Magic Bounce",
      "1": "Magic Guard"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Braixen",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 75,
      atk: 60,
      def: 72,
      spe: 104,
      spa: 124,
      spd: 115
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
      "1": "Technician"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Frogadier"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7,
    baseStats: {
      hp: 41,
      atk: 56,
      def: 40,
      spe: 77,
      spa: 62,
      spd: 44
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
      "1": "Technician"
    },
    eggGroups: [
      "Water 1"
    ],
    evos: [
      "Greninja"
    ],
    prevo: "Froakie",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.9,
    baseStats: {
      hp: 54,
      atk: 73,
      def: 52,
      spe: 112,
      spa: 88,
      spd: 56
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
      "0": "Technician",
      "1": "Versatility"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Frogadier",
    evoLevel: 36,
    formes: [
      "Greninja",
      "Greninja-Ash"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 40,
    baseStats: {
      hp: 72,
      atk: 100,
      def: 67,
      spe: 132,
      spa: 108,
      spd: 71
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
      "0": "Proficiency",
      "1": "No Guard"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Greninja",
    forme: "Ash",
    formes: [
      "Greninja",
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
      def: 71,
      spe: 142,
      spa: 153,
      spd: 67
    }
  },
  bunnelby: {
    name: "Bunnelby",
    num: 659,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Huge Power",
      "1": "Fur Coat"
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
      hp: 49,
      atk: 41,
      def: 47,
      spe: 84,
      spa: 32,
      spd: 47
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
      "0": "Huge Power",
      "1": "Fur Coat"
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
      hp: 109,
      atk: 69,
      def: 87,
      spe: 78,
      spa: 50,
      spd: 87
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
      "0": "Bird's Eye View",
      "1": "Gale Wings"
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
      atk: 56,
      def: 43,
      spe: 87,
      spa: 40,
      spd: 39
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
      "0": "Intimidate",
      "1": "Gale Wings"
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
      atk: 81,
      def: 58,
      spe: 107,
      spa: 56,
      spd: 56
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
      "0": "Intimidate",
      "1": "Reckless"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Fletchinder",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 24.5,
    baseStats: {
      hp: 78,
      atk: 111,
      def: 71,
      spe: 147,
      spa: 74,
      spd: 69
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
      "1": "Sap Sipper"
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
      spe: 35,
      spa: 53,
      spd: 49
    }
  },
  spewpa: {
    name: "Spewpa",
    num: 665,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Shield Dust",
      "1": "Sturdy"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Vivillon"
    ],
    prevo: "Scatterbug",
    evoLevel: 10,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.4,
    baseStats: {
      hp: 50,
      atk: 22,
      def: 88,
      spe: 29,
      spa: 53,
      spd: 88
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
      "0": "Multiscale",
      "1": "Versatility"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Spewpa",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17,
    baseStats: {
      hp: 80,
      atk: 52,
      def: 63,
      spe: 95,
      spa: 100,
      spd: 90
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
      "0": "Intimidate",
      "1": "Instinct"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Pyroar"
    ],
    genderRatio: {
      M: 0.1171875,
      F: 0.8828125
    },
    weightkg: 13.5,
    baseStats: {
      hp: 56,
      atk: 73,
      def: 58,
      spe: 86,
      spa: 73,
      spd: 54
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
      "0": "Intimidate",
      "1": "Instinct"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Litleo",
    evoLevel: 32,
    genderRatio: {
      M: 0.1171875,
      F: 0.8828125
    },
    weightkg: 81.5,
    baseStats: {
      hp: 86,
      atk: 109,
      def: 72,
      spe: 108,
      spa: 109,
      spd: 66
    }
  },
  flabebe: {
    name: "Flabebe",
    num: 669,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Harvest"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Floette"
    ],
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 0.1,
    baseStats: {
      hp: 44,
      atk: 38,
      def: 41,
      spe: 42,
      spa: 61,
      spd: 94
    }
  },
  floette: {
    name: "Floette",
    num: 670,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Harvest"
    },
    eggGroups: [
      "Fairy"
    ],
    evos: [
      "Florges"
    ],
    prevo: "Flabebe",
    evoLevel: 16,
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
      hp: 54,
      atk: 45,
      def: 54,
      spe: 67,
      spa: 87,
      spd: 113
    }
  },
  floetteeternal: {
    name: "Floette-Eternal",
    num: 670,
    types: [
      "Fairy",
      "Dark"
    ],
    abilities: {
      "0": "Dark Aura",
      "1": "Fairy Aura"
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
      hp: 67,
      atk: 52,
      def: 67,
      spe: 97,
      spa: 154,
      spd: 113
    }
  },
  florges: {
    name: "Florges",
    num: 671,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Serene Grace",
      "1": "Harvest"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Floette",
    evoItem: null,
    evoType: null,
    evoLevel: 32,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 10,
    baseStats: {
      hp: 78,
      atk: 52,
      def: 78,
      spe: 75,
      spa: 113,
      spd: 154
    }
  },
  skiddo: {
    name: "Skiddo",
    num: 672,
    types: [
      "Grass",
      "Rock"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Sap Sipper"
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
      hp: 63,
      atk: 80,
      def: 83,
      spe: 93,
      spa: 40,
      spd: 61
    }
  },
  gogoat: {
    name: "Gogoat",
    num: 673,
    types: [
      "Grass",
      "Rock"
    ],
    abilities: {
      "0": "Grassy Surge",
      "1": "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Skiddo",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 91,
    baseStats: {
      hp: 103,
      atk: 110,
      def: 103,
      spe: 103,
      spa: 50,
      spd: 81
    }
  },
  pancham: {
    name: "Pancham",
    num: 674,
    types: [
      "Fighting"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Sap Sipper"
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
      hp: 60,
      atk: 82,
      def: 68,
      spe: 58,
      spa: 36,
      spd: 66
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
      "0": "Hustle",
      "1": "Headstrong"
    },
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    prevo: "Pancham",
    evoLevel: 31,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 136,
    baseStats: {
      hp: 115,
      atk: 134,
      def: 88,
      spe: 63,
      spa: 49,
      spd: 86
    }
  },
  furfrou: {
    name: "Furfrou",
    num: 676,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
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
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroudandy: {
    name: "Furfrou-Dandy",
    num: 676,
    types: [
      "Grass",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Dandy",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroudebutante: {
    name: "Furfrou-Debutante",
    num: 676,
    types: [
      "Electric",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Debutante",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroudiamond: {
    name: "Furfrou-Diamond",
    num: 676,
    types: [
      "Rock",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Diamond",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfrouheart: {
    name: "Furfrou-Heart",
    num: 676,
    types: [
      "Fairy",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Heart",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroukabuki: {
    name: "Furfrou-Kabuki",
    num: 676,
    types: [
      "Fighting",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Kabuki",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroulareine: {
    name: "Furfrou-La Reine",
    num: 676,
    types: [
      "Water",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "La Reine",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroumatron: {
    name: "Furfrou-Matron",
    num: 676,
    types: [
      "Poison",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Matron",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroupharaoh: {
    name: "Furfrou-Pharaoh",
    num: 676,
    types: [
      "Dark",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Pharaoh",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  furfroustar: {
    name: "Furfrou-Star",
    num: 676,
    types: [
      "Ice",
      "Normal"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Adaptability"
    },
    eggGroups: [
      "Field"
    ],
    baseSpecies: "Furfrou",
    forme: "Star",
    formes: [
      "Furfrou",
      "Furfrou-Heart",
      "Furfrou-Star",
      "Furfrou-Diamond",
      "Furfrou-Debutante",
      "Furfrou-Matron",
      "Furfrou-Dandy",
      "Furfrou-La Reine",
      "Furfrou-Kabuki",
      "Furfrou-Pharaoh"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 28,
    baseStats: {
      hp: 75,
      atk: 93,
      def: 70,
      spe: 102,
      spa: 80,
      spd: 95
    }
  },
  espurr: {
    name: "Espurr",
    num: 677,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Prankster"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Meowstic"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 3.5,
    baseStats: {
      hp: 52,
      atk: 38,
      def: 54,
      spe: 68,
      spa: 94,
      spd: 94
    }
  },
  meowstic: {
    name: "Meowstic",
    num: 678,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Energy Shield",
      "1": "Prankster"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 74,
      atk: 48,
      def: 81,
      spe: 109,
      spa: 94,
      spd: 119
    }
  },
  meowsticf: {
    name: "Meowstic-F",
    num: 678,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Sheer Force",
      "1": "Hubris"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Espurr",
    evoLevel: null,
    baseSpecies: "Meowstic",
    forme: "F",
    formes: [
      "Meowstic",
      "Meowstic-F"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.5,
    baseStats: {
      hp: 74,
      atk: 48,
      def: 76,
      spe: 114,
      spa: 119,
      spd: 94
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
      "0": "Levitate",
      "1": "Technician"
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
      atk: 100,
      def: 100,
      spe: 45,
      spa: 35,
      spd: 45
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
      "0": "Levitate",
      "1": "Expertise"
    },
    eggGroups: [
      "Mineral"
    ],
    evos: [
      "Aegislash"
    ],
    prevo: "Honedge",
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.5,
    baseStats: {
      hp: 65,
      atk: 125,
      def: 150,
      spe: 50,
      spa: 45,
      spd: 65
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
      "0": "Stance Change",
      "1": "Levitate"
    },
    eggGroups: [
      "Mineral"
    ],
    prevo: "Doublade",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 40,
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
      hp: 75,
      atk: 50,
      def: 150,
      spe: 75,
      spa: 50,
      spd: 150
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
      hp: 75,
      atk: 150,
      def: 50,
      spe: 75,
      spa: 150,
      spd: 50
    }
  },
  spritzee: {
    name: "Spritzee",
    num: 682,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Prankster"
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
      hp: 48,
      atk: 32,
      def: 60,
      spe: 52,
      spa: 79,
      spd: 99
    }
  },
  aromatisse: {
    name: "Aromatisse",
    num: 683,
    types: [
      "Fairy",
      "Poison"
    ],
    abilities: {
      "0": "Fur Coat",
      "1": "Prankster"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Spritzee",
    evoItem: null,
    evoType: null,
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 15.5,
    baseStats: {
      hp: 81,
      atk: 72,
      def: 72,
      spe: 52,
      spa: 119,
      spd: 129
    }
  },
  swirlix: {
    name: "Swirlix",
    num: 684,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Fluffy"
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
      hp: 52,
      atk: 48,
      def: 66,
      spe: 49,
      spa: 64,
      spd: 91
    }
  },
  slurpuff: {
    name: "Slurpuff",
    num: 685,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Fluffy"
    },
    eggGroups: [
      "Fairy"
    ],
    prevo: "Swirlix",
    evoItem: null,
    evoType: null,
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 82,
      atk: 80,
      def: 86,
      spe: 72,
      spa: 90,
      spd: 115
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
      "1": "Liquid Veil"
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
      spe: 63,
      spa: 79,
      spd: 98
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
      "1": "Liquid Veil"
    },
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    prevo: "Inkay",
    evoLevel: 26,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47,
    baseStats: {
      hp: 86,
      atk: 92,
      def: 88,
      spe: 73,
      spa: 93,
      spd: 118
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
      "0": "Intimidate",
      "1": "Tough Claws"
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
      atk: 82,
      def: 92,
      spe: 50,
      spa: 39,
      spd: 65
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
      "0": "Intimidate",
      "1": "Tough Claws"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Binacle",
    evoLevel: 32,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 96,
    baseStats: {
      hp: 87,
      atk: 120,
      def: 115,
      spe: 73,
      spa: 54,
      spd: 86
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
      "0": "Adaptability",
      "1": "Sap Sipper"
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
      hp: 55,
      atk: 60,
      def: 70,
      spe: 30,
      spa: 87,
      spd: 98
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
      "0": "Adaptability",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    prevo: "Skrelp",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 81.5,
    baseStats: {
      hp: 101,
      atk: 75,
      def: 90,
      spe: 44,
      spa: 117,
      spd: 123
    }
  },
  clauncher: {
    name: "Clauncher",
    num: 692,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Mega Launcher",
      "1": "Technician"
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
      hp: 53,
      atk: 53,
      def: 82,
      spe: 44,
      spa: 95,
      spd: 73
    }
  },
  clawitzer: {
    name: "Clawitzer",
    num: 693,
    types: [
      "Water"
    ],
    abilities: {
      "0": "Mega Launcher",
      "1": "Technician"
    },
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    prevo: "Clauncher",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 8.3,
    baseStats: {
      hp: 71,
      atk: 73,
      def: 108,
      spe: 59,
      spa: 145,
      spd: 94
    }
  },
  helioptile: {
    name: "Helioptile",
    num: 694,
    types: [
      "Electric",
      "Ground"
    ],
    abilities: {
      "0": "Dry Skin",
      "1": "Solar Power"
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
      def: 43,
      spe: 96,
      spa: 86,
      spd: 63
    }
  },
  heliolisk: {
    name: "Heliolisk",
    num: 695,
    types: [
      "Electric",
      "Ground"
    ],
    abilities: {
      "0": "Sweltering Sun",
      "1": "Solar Power"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Helioptile",
    evoItem: null,
    evoType: null,
    evoLevel: 28,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21,
    baseStats: {
      hp: 71,
      atk: 55,
      def: 67,
      spe: 129,
      spa: 119,
      spd: 94
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
      "1": "Intimidate"
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
      hp: 63,
      atk: 109,
      def: 96,
      spe: 61,
      spa: 42,
      spd: 54
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
      "1": "Intimidate"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Tyrunt",
    evoLevel: 35,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 270,
    baseStats: {
      hp: 123,
      atk: 151,
      def: 119,
      spe: 71,
      spa: 47,
      spd: 64
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
      "1": "Energy Shield"
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
      atk: 39,
      def: 77,
      spe: 46,
      spa: 93,
      spd: 93
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
      "1": "Energy Shield"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Amaura",
    evoLevel: 35,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 225,
    baseStats: {
      hp: 123,
      atk: 57,
      def: 92,
      spe: 58,
      spa: 133,
      spd: 112
    }
  },
  sylveon: {
    name: "Sylveon",
    num: 700,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Fairy Aura",
      "1": "Pixilate",
      H: "Evoboost"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Eevee",
    evoItem: "Fairy Gem",
    evoType: "useItem",
    evoLevel: 25,
    evoCondition: null,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    weightkg: 23.5,
    baseStats: {
      hp: 65,
      atk: 65,
      def: 65,
      spe: 90,
      spa: 110,
      spd: 130
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
      "0": "Reckless",
      "1": "Moxie"
    },
    eggGroups: [
      "Human-Like"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 21.5,
    baseStats: {
      hp: 65,
      atk: 112,
      def: 75,
      spe: 133,
      spa: 65,
      spd: 75
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
      "0": "Prankster",
      "1": "Volt Rush"
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
      def: 72,
      spe: 106,
      spa: 106,
      spd: 106
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
      "0": "Levitate",
      "1": "Solid Rock"
    },
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    evos: [
      "Diancie"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 5.7,
    baseStats: {
      hp: 50,
      atk: 30,
      def: 150,
      spe: 30,
      spa: 90,
      spd: 150
    }
  },
  goomy: {
    name: "Goomy",
    num: 704,
    types: [
      "Dragon",
      "Poison"
    ],
    abilities: {
      "0": "Liquid Veil",
      "1": "Regenerator"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Sliggoo"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 2.8,
    baseStats: {
      hp: 45,
      atk: 50,
      def: 60,
      spe: 20,
      spa: 75,
      spd: 110
    }
  },
  sliggoo: {
    name: "Sliggoo",
    num: 705,
    types: [
      "Dragon",
      "Poison"
    ],
    abilities: {
      "0": "Liquid Veil",
      "1": "Regenerator"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Goodra"
    ],
    prevo: "Goomy",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 75,
      atk: 75,
      def: 75,
      spe: 20,
      spa: 100,
      spd: 135
    }
  },
  goodra: {
    name: "Goodra",
    num: 706,
    types: [
      "Dragon",
      "Poison"
    ],
    abilities: {
      "0": "Liquid Veil",
      "1": "Regenerator"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Sliggoo",
    evoItem: "Dragon Gem",
    evoType: "useItem",
    evoLevel: 45,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 150.5,
    baseStats: {
      hp: 115,
      atk: 100,
      def: 80,
      spe: 45,
      spa: 110,
      spd: 150
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
      "0": "Levitate",
      "1": "Prankster"
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
      hp: 62,
      atk: 50,
      def: 119,
      spe: 90,
      spa: 85,
      spd: 119
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
      "0": "Levitate",
      "1": "Grassy Guard"
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
      hp: 48,
      atk: 70,
      def: 87,
      spe: 38,
      spa: 40,
      spd: 87
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
      "0": "Intimidate",
      "1": "Grassy Surge"
    },
    eggGroups: [
      "Grass",
      "Amorphous"
    ],
    prevo: "Phantump",
    evoType: null,
    evoLevel: 30,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 71,
    baseStats: {
      hp: 97,
      atk: 127,
      def: 97,
      spe: 57,
      spa: 60,
      spd: 97
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
      "0": "Harvest",
      "1": "Flash Fire"
    },
    eggGroups: [
      "Amorphous"
    ],
    evos: [
      "Gourgeist-Super",
      "Gourgeist"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 5,
    baseStats: {
      hp: 49,
      atk: 30,
      def: 92,
      spe: 51,
      spa: 74,
      spd: 74
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
      "0": "Unburden",
      "1": "Flash Fire",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo",
    evoItem: "Ghost Gem",
    evoType: "useItem",
    evoLevel: 30,
    formes: [
      "gourgeist",
      "gourgeistsuper"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 12.5,
    baseStats: {
      hp: 56,
      atk: 40,
      def: 122,
      spe: 99,
      spa: 109,
      spd: 109
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
      "0": "Harvest",
      "1": "Flash Fire",
      H: "Flare Boost"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Pumpkaboo",
    evoItem: "Grass Gem",
    evoType: "useItem",
    evoLevel: 30,
    baseSpecies: "Gourgeist",
    forme: "Super",
    formes: [
      "gourgeist",
      "gourgeistsuper"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 39,
    baseStats: {
      hp: 101,
      atk: 50,
      def: 122,
      spe: 44,
      spa: 109,
      spd: 109
    }
  },
  bergmite: {
    name: "Bergmite",
    num: 712,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Resilient",
      "1": "Regenerator"
    },
    eggGroups: [
      "Monster"
    ],
    evos: [
      "Avalugg"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 99.5,
    baseStats: {
      hp: 61,
      atk: 72,
      def: 134,
      spe: 28,
      spa: 34,
      spd: 71
    }
  },
  avalugg: {
    name: "Avalugg",
    num: 713,
    types: [
      "Ice"
    ],
    abilities: {
      "0": "Resilient",
      "1": "Regenerator"
    },
    eggGroups: [
      "Monster"
    ],
    prevo: "Bergmite",
    evoLevel: 35,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 505,
    baseStats: {
      hp: 116,
      atk: 132,
      def: 184,
      spe: 28,
      spa: 34,
      spd: 81
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
      "0": "Amplifier",
      "1": "Aerilate"
    },
    eggGroups: [
      "Flying"
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
      hp: 45,
      atk: 30,
      def: 45,
      spe: 113,
      spa: 92,
      spd: 45
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
      "0": "Amplifier",
      "1": "Aerilate"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Noibat",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 85,
    baseStats: {
      hp: 80,
      atk: 60,
      def: 80,
      spe: 133,
      spa: 117,
      spd: 80
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
      spe: 99,
      spa: 171,
      spd: 128
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
      spe: 99,
      spa: 171,
      spd: 128
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
      "0": "Adaptability",
      "1": "Regenerator",
      H: "Power Construct"
    },
    eggGroups: [
      "Undiscovered"
    ],
    formes: [
      "zygarde",
      "zygarde10",
      "zygardecomplete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 305,
    baseStats: {
      hp: 128,
      atk: 121,
      def: 121,
      spe: 74,
      spa: 121,
      spd: 95
    }
  },
  zygarde10: {
    name: "Zygarde-10%",
    num: 718,
    types: [
      "Dragon",
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Instinct",
      H: "Power Construct"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zygarde",
    forme: "10%",
    formes: [
      "zygarde",
      "zygarde10",
      "zygardecomplete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 33.5,
    baseStats: {
      hp: 64,
      atk: 110,
      def: 71,
      spe: 134,
      spa: 110,
      spd: 71
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
      "0": "Huge Power"
    },
    eggGroups: [
      "Undiscovered"
    ],
    baseSpecies: "Zygarde",
    forme: "Complete",
    formes: [
      "zygarde",
      "zygarde10",
      "zygardecomplete"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 610,
    baseStats: {
      hp: 228,
      atk: 121,
      def: 121,
      spe: 74,
      spa: 121,
      spd: 95
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
      "0": "Levitate",
      "1": "Magic Bounce"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Carbink",
    evoItem: "Rock Gem",
    evoType: "useItem",
    evoLevel: 40,
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
      hp: 75,
      atk: 50,
      def: 150,
      spe: 50,
      spa: 125,
      spd: 150
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
      "0": "Levitate",
      "1": "Serene Grace"
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
      hp: 75,
      atk: 75,
      def: 125,
      spe: 125,
      spa: 175,
      spd: 125
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
      "0": "Levitate",
      "1": "Prankster"
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
      atk: 60,
      def: 60,
      spe: 120,
      spa: 150,
      spd: 130
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
      "0": "Levitate",
      "1": "Expertise"
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
      spe: 100,
      spa: 170,
      spd: 130
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
      "0": "Sheer Force",
      "1": "Storm Drain"
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
      hp: 95,
      atk: 90,
      def: 120,
      spe: 70,
      spa: 130,
      spd: 95
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
      "1": "Technician"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Dartrix"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 53,
      atk: 55,
      def: 55,
      spe: 47,
      spa: 55,
      spd: 55
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
      "1": "Technician"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Decidueye"
    ],
    prevo: "Rowlet",
    evoLevel: 17,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 16,
    baseStats: {
      hp: 63,
      atk: 75,
      def: 70,
      spe: 82,
      spa: 75,
      spd: 70
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
      "0": "No Guard",
      "1": "Technician",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Dartrix",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 36.6,
    baseStats: {
      hp: 73,
      atk: 110,
      def: 70,
      spe: 117,
      spa: 110,
      spd: 70
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
      "1": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Torracat"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4.3,
    baseStats: {
      hp: 45,
      atk: 65,
      def: 45,
      spe: 75,
      spa: 45,
      spd: 45
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
      "1": "Intimidate"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 25,
    baseStats: {
      hp: 65,
      atk: 90,
      def: 60,
      spe: 100,
      spa: 60,
      spd: 60
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
      "0": "Moxie",
      "1": "Intimidate"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Torracat",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 83,
    baseStats: {
      hp: 95,
      atk: 125,
      def: 90,
      spe: 80,
      spa: 70,
      spd: 90
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
      "1": "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    evos: [
      "Brionne"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 7.5,
    baseStats: {
      hp: 50,
      atk: 49,
      def: 54,
      spe: 40,
      spa: 66,
      spd: 61
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
      "1": "Competitive"
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
      M: 0.5,
      F: 0.5
    },
    weightkg: 17.5,
    baseStats: {
      hp: 60,
      atk: 64,
      def: 74,
      spe: 50,
      spa: 96,
      spd: 91
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
      "0": "Pixilate",
      "1": "Competitive"
    },
    eggGroups: [
      "Water 1",
      "Field"
    ],
    prevo: "Brionne",
    evoLevel: 36,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 44,
    baseStats: {
      hp: 85,
      atk: 74,
      def: 84,
      spe: 60,
      spa: 126,
      spd: 121
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
      "0": "Bird's Eye View",
      "1": "Rapid Fire"
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
      hp: 40,
      atk: 75,
      def: 40,
      spe: 75,
      spa: 40,
      spd: 40
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
      "0": "Amplifier",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Flying"
    ],
    evos: [
      "Toucannon"
    ],
    prevo: "Pikipek",
    evoLevel: 15,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.8,
    baseStats: {
      hp: 55,
      atk: 90,
      def: 50,
      spe: 95,
      spa: 80,
      spd: 50
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
      "0": "Intimidate",
      "1": "Rapid Fire"
    },
    eggGroups: [
      "Flying"
    ],
    prevo: "Trumbeak",
    evoLevel: 31,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 26,
    baseStats: {
      hp: 80,
      atk: 125,
      def: 80,
      spe: 60,
      spa: 125,
      spd: 80
    }
  },
  yungoos: {
    name: "Yungoos",
    num: 734,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Hustle",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Gumshoos",
      "Gumshoos-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6,
    baseStats: {
      hp: 45,
      atk: 75,
      def: 45,
      spe: 90,
      spa: 30,
      spd: 45
    }
  },
  gumshoos: {
    name: "Gumshoos",
    num: 735,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Ruthless",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Yungoos",
    evoLevel: 20,
    evoCondition: null,
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
      hp: 75,
      atk: 115,
      def: 75,
      spe: 90,
      spa: 50,
      spd: 75
    }
  },
  gumshoostotem: {
    name: "Gumshoos-Totem",
    num: 735,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Contrary",
      H: "Stakeout"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Yungoos",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 20,
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
      hp: 100,
      atk: 125,
      def: 75,
      spe: 90,
      spa: 50,
      spd: 75
    }
  },
  grubbin: {
    name: "Grubbin",
    num: 736,
    types: [
      "Bug"
    ],
    abilities: {
      "0": "Sap Sipper",
      "1": "Volt Absorb"
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
      atk: 72,
      def: 55,
      spe: 46,
      spa: 60,
      spd: 55
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
      "0": "Battle Armor",
      "1": "Volt Absorb",
      H: "Battery"
    },
    eggGroups: [
      "Bug"
    ],
    evos: [
      "Vikavolt",
      "Vikavolt-Totem"
    ],
    prevo: "Grubbin",
    evoLevel: 20,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 10.5,
    baseStats: {
      hp: 62,
      atk: 82,
      def: 110,
      spe: 36,
      spa: 75,
      spd: 90
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
      "0": "No Guard",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Charjabug",
    evoItem: "Electric Gem",
    evoType: "useItem",
    evoLevel: 40,
    evoCondition: null,
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
      hp: 72,
      atk: 70,
      def: 90,
      spe: 123,
      spa: 145,
      spd: 75
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
      "0": "Hustle",
      "1": "Levitate"
    },
    eggGroups: [
      "Bug"
    ],
    prevo: "Charjabug",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 40,
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
      hp: 92,
      atk: 100,
      def: 90,
      spe: 123,
      spa: 145,
      spd: 75
    }
  },
  crabrawler: {
    name: "Crabrawler",
    num: 739,
    types: [
      "Fighting",
      "Water"
    ],
    abilities: {
      "0": "Hustle",
      "1": "Regenerator"
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
      hp: 72,
      atk: 114,
      def: 107,
      spe: 68,
      spa: 32,
      spd: 87
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
      "0": "Hustle",
      "1": "Slush Rush"
    },
    eggGroups: [
      "Water 3"
    ],
    prevo: "Crabrawler",
    evoItem: "Ice Gem",
    evoType: "useItem",
    evoLevel: 32,
    evoCondition: null,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 180,
    baseStats: {
      hp: 97,
      atk: 134,
      def: 117,
      spe: 63,
      spa: 42,
      spd: 97
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
      "0": "Serene Grace",
      "1": "Unburden"
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
      hp: 66,
      atk: 70,
      def: 70,
      spe: 109,
      spa: 114,
      spd: 86
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
      "0": "Serene Grace",
      "1": "Unburden"
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
      hp: 66,
      atk: 70,
      def: 70,
      spe: 109,
      spa: 114,
      spd: 86
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
      "0": "Serene Grace",
      "1": "Unburden"
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
      hp: 66,
      atk: 70,
      def: 70,
      spe: 109,
      spa: 114,
      spd: 86
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
      "0": "Serene Grace",
      "1": "Unburden"
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
      hp: 66,
      atk: 70,
      def: 70,
      spe: 109,
      spa: 114,
      spd: 86
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
      "0": "Levitate",
      "1": "Fairy Aura"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    evos: [
      "Ribombee",
      "Ribombee-Totem"
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
      spe: 109,
      spa: 66,
      spd: 50
    }
  },
  ribombee: {
    name: "Ribombee",
    num: 743,
    types: [
      "Fairy",
      "Bug"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Fairy Aura"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    prevo: "Cutiefly",
    evoLevel: 22,
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
      spe: 134,
      spa: 111,
      spd: 95
    }
  },
  ribombeetotem: {
    name: "Ribombee-Totem",
    num: 743,
    types: [
      "Fairy",
      "Bug"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Serene Grace"
    },
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    prevo: "Cutiefly",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 22,
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
      hp: 85,
      atk: 55,
      def: 60,
      spe: 134,
      spa: 116,
      spd: 100
    }
  },
  rockruff: {
    name: "Rockruff",
    num: 744,
    types: [
      "Rock",
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle"
    },
    eggGroups: [
      "Field"
    ],
    evos: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 0.5,
    baseStats: {
      hp: 50,
      atk: 75,
      def: 65,
      spe: 80,
      spa: 30,
      spd: 50
    }
  },
  lycanroc: {
    name: "Lycanroc",
    num: 745,
    types: [
      "Rock",
      "Normal"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Hustle"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoItem: "Normal Gem",
    evoType: "useItem",
    evoLevel: 28,
    evoCondition: null,
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
      atk: 120,
      def: 73,
      spe: 127,
      spa: 55,
      spd: 65
    }
  },
  lycanrocdusk: {
    name: "Lycanroc-Dusk",
    num: 745,
    types: [
      "Rock",
      "Fighting"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Reckless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoItem: "Fighting Gem",
    evoType: "useItem",
    evoLevel: 28,
    evoCondition: null,
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
      atk: 120,
      def: 83,
      spe: 112,
      spa: 55,
      spd: 70
    }
  },
  lycanrocmidnight: {
    name: "Lycanroc-Midnight",
    num: 745,
    types: [
      "Rock",
      "Dark"
    ],
    abilities: {
      "0": "Intimidate",
      "1": "Ruthless"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Rockruff",
    evoItem: "Dark Gem",
    evoType: "useItem",
    evoLevel: 28,
    evoCondition: null,
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
      hp: 75,
      atk: 120,
      def: 93,
      spe: 97,
      spa: 55,
      spd: 75
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
      hp: 25,
      atk: 25,
      def: 25,
      spe: 100,
      spa: 25,
      spd: 25
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
      hp: 150,
      atk: 125,
      def: 150,
      spe: 25,
      spa: 125,
      spd: 150
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
      "1": "Regenerator"
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
      atk: 43,
      def: 92,
      spe: 40,
      spa: 63,
      spd: 82
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
      "1": "Regenerator"
    },
    eggGroups: [
      "Water 1"
    ],
    prevo: "Mareanie",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 14.5,
    baseStats: {
      hp: 60,
      atk: 53,
      def: 152,
      spe: 35,
      spa: 93,
      spd: 142
    }
  },
  mudbray: {
    name: "Mudbray",
    num: 749,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Stamina",
      "1": "Sap Sipper"
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
      def: 85,
      spe: 45,
      spa: 45,
      spd: 65
    }
  },
  mudsdale: {
    name: "Mudsdale",
    num: 750,
    types: [
      "Ground"
    ],
    abilities: {
      "0": "Stamina",
      "1": "Sap Sipper"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Mudbray",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 110,
    baseStats: {
      hp: 115,
      atk: 130,
      def: 115,
      spe: 35,
      spa: 55,
      spd: 85
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
      "0": "Liquid Veil",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    evos: [
      "Araquanid",
      "Araquanid-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 4,
    baseStats: {
      hp: 44,
      atk: 45,
      def: 67,
      spe: 27,
      spa: 60,
      spd: 107
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
      "0": "Liquid Veil",
      "1": "Drizzle"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    prevo: "Dewpider",
    evoLevel: 28,
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
      hp: 94,
      atk: 70,
      def: 92,
      spe: 67,
      spa: 80,
      spd: 132
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
      "0": "Liquid Veil",
      "1": "Huge Power"
    },
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    prevo: "Dewpider",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 28,
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
      hp: 124,
      atk: 70,
      def: 92,
      spe: 52,
      spa: 80,
      spd: 132
    }
  },
  fomantis: {
    name: "Fomantis",
    num: 753,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Contrary"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Lurantis",
      "Lurantis-Totem"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 1.5,
    baseStats: {
      hp: 45,
      atk: 70,
      def: 60,
      spe: 75,
      spa: 60,
      spd: 60
    }
  },
  lurantis: {
    name: "Lurantis",
    num: 754,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Super Luck",
      "1": "Contrary",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Fomantis",
    evoLevel: 22,
    evoCondition: null,
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
      atk: 110,
      def: 90,
      spe: 105,
      spa: 60,
      spd: 90
    }
  },
  lurantistotem: {
    name: "Lurantis-Totem",
    num: 754,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "Contrary",
      H: "Tinted Lens"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Fomantis",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 22,
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
      hp: 90,
      atk: 110,
      def: 90,
      spe: 95,
      spa: 100,
      spd: 90
    }
  },
  morelull: {
    name: "Morelull",
    num: 755,
    types: [
      "Poison",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
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
      hp: 45,
      atk: 35,
      def: 65,
      spe: 15,
      spa: 75,
      spd: 95
    }
  },
  shiinotic: {
    name: "Shiinotic",
    num: 756,
    types: [
      "Poison",
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Storm Drain"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Morelull",
    evoLevel: 29,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 11.5,
    baseStats: {
      hp: 85,
      atk: 45,
      def: 95,
      spe: 30,
      spa: 115,
      spd: 145
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
      "0": "Dry Skin",
      "1": "Prankster"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    evos: [
      "Salazzle",
      "Salazzle-Totem"
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
      spe: 94,
      spa: 91,
      spd: 53
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
      "0": "Dry Skin",
      "1": "Merciless"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Salandit",
    evoLevel: 31,
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
      hp: 73,
      atk: 64,
      def: 60,
      spe: 124,
      spa: 121,
      spd: 83
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
      "0": "Dry Skin",
      "1": "Hubris"
    },
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    prevo: "Salandit",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 31,
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
      hp: 98,
      atk: 64,
      def: 60,
      spe: 124,
      spa: 121,
      spd: 83
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
      "1": "Hustle"
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
      hp: 60,
      atk: 80,
      def: 65,
      spe: 55,
      spa: 45,
      spd: 65
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
      "1": "Hustle"
    },
    eggGroups: [
      "Field"
    ],
    prevo: "Stufful",
    evoLevel: 34,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 135,
    baseStats: {
      hp: 120,
      atk: 130,
      def: 85,
      spe: 60,
      spa: 55,
      spd: 85
    }
  },
  bounsweet: {
    name: "Bounsweet",
    num: 761,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Harvest"
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
      def: 83,
      spe: 32,
      spa: 30,
      spd: 83
    }
  },
  steenee: {
    name: "Steenee",
    num: 762,
    types: [
      "Grass"
    ],
    abilities: {
      "0": "Grassy Guard",
      "1": "Unburden"
    },
    eggGroups: [
      "Grass"
    ],
    evos: [
      "Tsareena"
    ],
    prevo: "Bounsweet",
    evoLevel: 16,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 8.2,
    baseStats: {
      hp: 62,
      atk: 70,
      def: 88,
      spe: 72,
      spa: 40,
      spd: 88
    }
  },
  tsareena: {
    name: "Tsareena",
    num: 763,
    types: [
      "Grass",
      "Fighting"
    ],
    abilities: {
      "0": "Queenly Majesty",
      "1": "Expertise"
    },
    eggGroups: [
      "Grass"
    ],
    prevo: "Steenee",
    evoType: null,
    evoLevel: 32,
    evoMove: null,
    genderRatio: {
      M: 0,
      F: 1
    },
    weightkg: 21.4,
    baseStats: {
      hp: 77,
      atk: 125,
      def: 98,
      spe: 102,
      spa: 50,
      spd: 98
    }
  },
  comfey: {
    name: "Comfey",
    num: 764,
    types: [
      "Fairy"
    ],
    abilities: {
      "0": "Regenerator",
      "1": "Grassy Surge",
      H: "Friend Guard"
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
      hp: 66,
      atk: 42,
      def: 90,
      spe: 100,
      spa: 92,
      spd: 135
    }
  },
  oranguru: {
    name: "Oranguru",
    num: 765,
    types: [
      "Psychic",
      "Normal"
    ],
    abilities: {
      "0": "Pure Power",
      "1": "Grassy Surge"
    },
    eggGroups: [
      "Field"
    ],
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 6.9,
    baseStats: {
      hp: 90,
      atk: 60,
      def: 85,
      spe: 40,
      spa: 135,
      spd: 125
    }
  },
  passimian: {
    name: "Passimian",
    num: 766,
    types: [
      "Fighting",
      "Normal"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Headstrong"
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
      atk: 130,
      def: 90,
      spe: 105,
      spa: 40,
      spd: 70
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
      "0": "Rattled",
      "1": "Wimp Out"
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
      hp: 45,
      atk: 45,
      def: 95,
      spe: 95,
      spa: 25,
      spd: 45
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
      "0": "Ruthless",
      "1": "Swift Swim"
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
      hp: 90,
      atk: 140,
      def: 140,
      spe: 60,
      spa: 30,
      spd: 90
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
      "0": "Sand Stream",
      "1": "Regenerator"
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
      atk: 30,
      def: 95,
      spe: 15,
      spa: 80,
      spd: 95
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
      "0": "Sand Stream",
      "1": "Regenerator"
    },
    eggGroups: [
      "Amorphous"
    ],
    prevo: "Sandygast",
    evoLevel: 33,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 250,
    baseStats: {
      hp: 110,
      atk: 60,
      def: 115,
      spe: 25,
      spa: 110,
      spd: 115
    }
  },
  pyukumuku: {
    name: "Pyukumuku",
    num: 771,
    types: [
      "Water",
      "Poison"
    ],
    abilities: {
      "0": "Oblivious",
      "1": "Unaware"
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
      hp: 65,
      atk: 65,
      def: 150,
      spe: 5,
      spa: 65,
      spd: 150
    }
  },
  typenull: {
    name: "Type: Null",
    num: 772,
    types: [
      "Normal",
      "Steel"
    ],
    abilities: {
      "0": "Filter",
      "1": "Battle Armor"
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
      atk: 115,
      def: 125,
      spe: 60,
      spa: 60,
      spd: 95
    }
  },
  silvally: {
    name: "Silvally",
    num: 773,
    types: [
      "Normal"
    ],
    abilities: {
      "0": "Adaptability",
      "1": "RKS System"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Type: Null",
    evoItem: "Normal Gem",
    evoType: "useItem",
    evoLevel: 50,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 100.5,
    baseStats: {
      hp: 95,
      atk: 115,
      def: 80,
      spe: 115,
      spa: 115,
      spd: 80
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
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 40,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 150,
      spe: 60,
      spa: 60,
      spd: 150
    }
  },
  miniorblue: {
    name: "Minior-Blue",
    num: 774,
    types: [
      "Rock",
      "Ice"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Blue",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  miniorgreen: {
    name: "Minior-Green",
    num: 774,
    types: [
      "Rock",
      "Grass"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Green",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  miniorindigo: {
    name: "Minior-Indigo",
    num: 774,
    types: [
      "Rock",
      "Water"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Indigo",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  miniororange: {
    name: "Minior-Orange",
    num: 774,
    types: [
      "Rock",
      "Fire"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Orange",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  miniorred: {
    name: "Minior-Red",
    num: 774,
    types: [
      "Rock",
      "Psychic"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Red",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  miniorviolet: {
    name: "Minior-Violet",
    num: 774,
    types: [
      "Rock",
      "Dragon"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Violet",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  minioryellow: {
    name: "Minior-Yellow",
    num: 774,
    types: [
      "Rock",
      "Electric"
    ],
    abilities: {
      "0": "Shields Down",
      H: "Interstellar"
    },
    eggGroups: [
      "Mineral"
    ],
    baseSpecies: "Minior",
    forme: "Yellow",
    formes: [
      "Minior",
      "Minior-Red",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 0.3,
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spe: 150,
      spa: 150,
      spd: 60
    }
  },
  komala: {
    name: "Komala",
    num: 775,
    types: [
      "Normal",
      "Grass"
    ],
    abilities: {
      "0": "Unburden",
      "1": "Comatose"
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
      hp: 70,
      atk: 115,
      def: 115,
      spe: 65,
      spa: 75,
      spd: 95
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
      "0": "Rapid Fire",
      "1": "Bulletproof"
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
      hp: 100,
      atk: 78,
      def: 140,
      spe: 21,
      spa: 136,
      spd: 100
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
      "0": "Hustle",
      "1": "Volt Rush"
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
      def: 118,
      spe: 101,
      spa: 40,
      spd: 93
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
      "0": "Hustle",
      "1": "Iron Barbs"
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
      hp: 100,
      atk: 108,
      def: 118,
      spe: 91,
      spa: 40,
      spd: 93
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
      "0": "Disguise",
      "1": "Prankster"
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
      atk: 95,
      def: 55,
      spe: 106,
      spa: 95,
      spd: 119
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
      "0": "Disguise",
      "1": "Prankster"
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
      atk: 95,
      def: 55,
      spe: 106,
      spa: 95,
      spd: 119
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
      "0": "Disguise",
      "1": "Unburden"
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
      hp: 80,
      atk: 100,
      def: 55,
      spe: 96,
      spa: 100,
      spd: 119
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
      "0": "Disguise",
      "1": "Unburden"
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
      hp: 80,
      atk: 100,
      def: 55,
      spe: 96,
      spa: 100,
      spd: 119
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
      "0": "Psychic Surge",
      "1": "Strong Jaw"
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
      atk: 115,
      def: 70,
      spe: 112,
      spa: 100,
      spd: 70
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
      "0": "Simple",
      "1": "Berserk"
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
      hp: 138,
      atk: 60,
      def: 95,
      spe: 36,
      spa: 145,
      spd: 101
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
      "0": "Stormy Seas",
      "1": "Steelworker"
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
      hp: 125,
      atk: 144,
      def: 125,
      spe: 40,
      spa: 46,
      spd: 95
    }
  },
  jangmoo: {
    name: "Jangmo-o",
    num: 782,
    types: [
      "Dragon"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Multiscale"
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
      atk: 60,
      def: 85,
      spe: 65,
      spa: 45,
      spd: 60
    }
  },
  hakamoo: {
    name: "Hakamo-o",
    num: 783,
    types: [
      "Dragon",
      "Steel"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Multiscale"
    },
    eggGroups: [
      "Dragon"
    ],
    evos: [
      "Kommo-o",
      "Kommo-o-Totem"
    ],
    prevo: "Jangmo-o",
    evoLevel: 25,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    weightkg: 47,
    baseStats: {
      hp: 70,
      atk: 95,
      def: 95,
      spe: 95,
      spa: 55,
      spd: 70
    }
  },
  kommoo: {
    name: "Kommo-o",
    num: 784,
    types: [
      "Dragon",
      "Steel"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Multiscale"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Hakamo-o",
    evoItem: "Dragon Gem",
    evoType: "useItem",
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
      hp: 90,
      atk: 110,
      def: 125,
      spe: 85,
      spa: 110,
      spd: 80
    }
  },
  kommoototem: {
    name: "Kommo-o-Totem",
    num: 784,
    types: [
      "Dragon",
      "Steel"
    ],
    abilities: {
      "0": "Instinct",
      "1": "Intimidate"
    },
    eggGroups: [
      "Dragon"
    ],
    prevo: "Hakamo-o",
    evoItem: "Strange Souvenir",
    evoType: "useItem",
    evoLevel: 45,
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
      hp: 125,
      atk: 120,
      def: 125,
      spe: 65,
      spa: 110,
      spd: 80
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
      "1": "Reckless"
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
      def: 95,
      spe: 135,
      spa: 100,
      spd: 85
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
      "1": "Prankster"
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
      def: 100,
      spe: 95,
      spa: 135,
      spd: 115
    }
  },
  tapubulu: {
    name: "Tapu Bulu",
    num: 787,
    types: [
      "Ground",
      "Fairy"
    ],
    abilities: {
      "0": "Grassy Surge",
      "1": "Sap Sipper"
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
      hp: 100,
      atk: 135,
      def: 115,
      spe: 85,
      spa: 70,
      spd: 95
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
      "1": "Fairy Aura"
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
      hp: 100,
      atk: 70,
      def: 115,
      spe: 85,
      spa: 95,
      spd: 135
    }
  },
  cosmog: {
    name: "Cosmog",
    num: 789,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Wimp Out",
      "1": "Unaware"
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
      spe: 37,
      spa: 29,
      spd: 31
    }
  },
  cosmoem: {
    name: "Cosmoem",
    num: 790,
    types: [
      "Psychic"
    ],
    abilities: {
      "0": "Shell Armor",
      "1": "Unaware"
    },
    eggGroups: [
      "Undiscovered"
    ],
    evos: [
      "Solgaleo",
      "Lunala"
    ],
    prevo: "Cosmog",
    evoLevel: 30,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 999.9,
    baseStats: {
      hp: 43,
      atk: 29,
      def: 181,
      spe: 37,
      spa: 29,
      spd: 181
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
      "0": "Sweltering Sun",
      "1": "Sixth Sense"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Cosmoem",
    evoLevel: 100,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 230,
    baseStats: {
      hp: 139,
      atk: 157,
      def: 139,
      spe: 97,
      spa: 131,
      spd: 137
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
      "0": "Energy Shield",
      "1": "Sixth Sense"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Cosmoem",
    evoLevel: 100,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 120,
    baseStats: {
      hp: 139,
      atk: 113,
      def: 113,
      spe: 109,
      spa: 163,
      spd: 163
    }
  },
  nihilego: {
    name: "Nihilego",
    num: 793,
    types: [
      "Ice",
      "Poison"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Merciless"
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
      hp: 71,
      atk: 47,
      def: 53,
      spe: 127,
      spa: 151,
      spd: 151
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
      "0": "Moxie",
      "1": "Regenerator"
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
      atk: 151,
      def: 139,
      spe: 79,
      spa: 53,
      spd: 71
    }
  },
  pheromosa: {
    name: "Pheromosa",
    num: 795,
    types: [
      "Bug",
      "Ice"
    ],
    abilities: {
      "0": "Queenly Majesty",
      "1": "Technician",
      H: "Tinted Lens"
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
      hp: 83,
      atk: 139,
      def: 37,
      spe: 167,
      spa: 137,
      spd: 37
    }
  },
  xurkitree: {
    name: "Xurkitree",
    num: 796,
    types: [
      "Electric",
      "Grass"
    ],
    abilities: {
      "0": "Volt Rush",
      "1": "Dazzling"
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
      hp: 113,
      atk: 89,
      def: 71,
      spe: 53,
      spa: 173,
      spd: 101
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
      "0": "Huge Power",
      "1": "Speed Boost"
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
      hp: 137,
      atk: 73,
      def: 103,
      spe: 47,
      spa: 137,
      spd: 103
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
      "0": "Levitate",
      "1": "Proficiency"
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
      hp: 47,
      atk: 181,
      def: 113,
      spe: 151,
      spa: 61,
      spd: 47
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
      "0": "Huge Power",
      "1": "Sinister"
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
      hp: 199,
      atk: 79,
      def: 79,
      spe: 13,
      spa: 151,
      spd: 79
    }
  },
  necrozma: {
    name: "Necrozma",
    num: 800,
    types: [
      "Psychic",
      "Dark"
    ],
    abilities: {
      "0": "Ruthless",
      "1": "Berserk"
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
      hp: 139,
      atk: 149,
      def: 131,
      spe: 101,
      spa: 149,
      spd: 131
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
      "0": "Energy Shield",
      "1": "Berserk"
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
      hp: 139,
      atk: 137,
      def: 139,
      spe: 127,
      spa: 179,
      spd: 179
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
      "0": "Sweltering Sun",
      "1": "Berserk"
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
      hp: 139,
      atk: 173,
      def: 157,
      spe: 101,
      spa: 173,
      spd: 157
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
      "0": "Dazzling",
      "1": "Neuroforce"
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
      hp: 139,
      atk: 199,
      def: 107,
      spe: 199,
      spa: 199,
      spd: 157
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
      "0": "Steelworker",
      "1": "Fairy Aura"
    },
    eggGroups: [
      "Undiscovered"
    ],
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 80.5,
    baseStats: {
      hp: 80,
      atk: 65,
      def: 130,
      spe: 65,
      spa: 130,
      spd: 130
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
      "0": "Instinct",
      "1": "Expertise"
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
      hp: 60,
      atk: 125,
      def: 60,
      spe: 140,
      spa: 125,
      spd: 90
    }
  },
  poipole: {
    name: "Poipole",
    num: 803,
    types: [
      "Poison",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Prankster"
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
      atk: 51,
      def: 73,
      spe: 103,
      spa: 113,
      spd: 73
    }
  },
  naganadel: {
    name: "Naganadel",
    num: 804,
    types: [
      "Poison",
      "Psychic"
    ],
    abilities: {
      "0": "Levitate",
      "1": "Ruthless"
    },
    eggGroups: [
      "Undiscovered"
    ],
    prevo: "Poipole",
    evoItem: "Poison Gem",
    evoType: "useItem",
    evoLevel: 45,
    evoMove: null,
    genderRatio: {
      M: 0,
      F: 0
    },
    weightkg: 150,
    baseStats: {
      hp: 73,
      atk: 127,
      def: 73,
      spe: 127,
      spa: 127,
      spd: 73
    }
  },
  stakataka: {
    name: "Stakataka",
    num: 805,
    types: [
      "Rock",
      "Psychic"
    ],
    abilities: {
      "0": "Filter",
      "1": "Magic Bounce"
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
      hp: 131,
      atk: 131,
      def: 211,
      spe: 13,
      spa: 13,
      spd: 101
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
      "0": "Dazzling",
      "1": "Magician"
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
      hp: 73,
      atk: 73,
      def: 53,
      spe: 127,
      spa: 167,
      spd: 107
    }
  },
  zeraora: {
    name: "Zeraora",
    num: 807,
    types: [
      "Electric",
      "Fighting"
    ],
    abilities: {
      "0": "No Guard",
      "1": "Galvanize"
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
      hp: 73,
      atk: 122,
      def: 70,
      spe: 148,
      spa: 117,
      spd: 70
    }
  }
};