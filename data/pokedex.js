exports.BattlePokedex = {
  bulbasaur: {
    tags: [],
    num: 1,
    name: "Bulbasaur",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 45,
      atk: 49,
      def: 49,
      spa: 65,
      spd: 65,
      spe: 45
    },
    weightkg: 6.9,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "bulbasaur",
    fullname: "pokemon: Bulbasaur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bulbasaur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 318,
    weighthg: 69,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    evos: [
      "Ivysaur"
    ],
    nfe: true
  },
  ivysaur: {
    tags: [],
    num: 2,
    name: "Ivysaur",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 62,
      def: 63,
      spa: 80,
      spd: 80,
      spe: 60
    },
    weightkg: 13,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "ivysaur",
    fullname: "pokemon: Ivysaur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ivysaur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    evos: [
      "Venusaur"
    ],
    nfe: true,
    prevo: "Bulbasaur"
  },
  venusaur: {
    tags: [],
    num: 3,
    name: "Venusaur",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 82,
      def: 83,
      spa: 100,
      spd: 100,
      spe: 80
    },
    weightkg: 100,
    evoLevel: 32,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    canGigantamax: "G-Max Vine Lash",
    tier: "Illegal",
    id: "venusaur",
    fullname: "pokemon: Venusaur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Venusaur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 1000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    nfe: false,
    otherFormes: [
      "Venusaur-Mega"
    ],
    formeOrder: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    formes: [
      "Venusaur",
      "Venusaur-Mega"
    ],
    prevo: "Ivysaur"
  },
  venusaurgmax: {
    tags: [],
    num: 3,
    name: "Venusaur-Gmax",
    baseSpecies: "Venusaur",
    forme: "Gmax",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 82,
      def: 83,
      spa: 100,
      spd: 100,
      spe: 80
    },
    weightkg: 0,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    changesFrom: "Venusaur",
    tier: "Illegal",
    id: "venusaurgmax",
    fullname: "pokemon: Venusaur-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 525,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Chlorophyll"
    },
    nfe: false
  },
  venusaurmega: {
    tags: [],
    num: 3,
    name: "Venusaur-Mega",
    baseSpecies: "Venusaur",
    forme: "Mega",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 123,
      spa: 122,
      spd: 120,
      spe: 80
    },
    weightkg: 155.5,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    requiredItem: "Venusaurite",
    tier: "Illegal",
    id: "venusaurmega",
    fullname: "pokemon: Venusaur-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Venusaurite"
    ],
    bst: 625,
    weighthg: 1555,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Venusaur",
    changesFrom: "Venusaur",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Thick Fat"
    },
    nfe: false
  },
  charmander: {
    tags: [],
    num: 4,
    name: "Charmander",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 39,
      atk: 52,
      def: 43,
      spa: 60,
      spd: 50,
      spe: 65
    },
    weightkg: 8.5,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "LC",
    id: "charmander",
    fullname: "pokemon: Charmander",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Charmander",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 309,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    evos: [
      "Charmeleon"
    ],
    nfe: true
  },
  charmeleon: {
    tags: [],
    num: 5,
    name: "Charmeleon",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 58,
      atk: 64,
      def: 58,
      spa: 80,
      spd: 65,
      spe: 80
    },
    weightkg: 19,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "NFE",
    id: "charmeleon",
    fullname: "pokemon: Charmeleon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Charmeleon",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 405,
    weighthg: 190,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    evos: [
      "Charizard"
    ],
    nfe: true,
    prevo: "Charmander"
  },
  charizard: {
    tags: [],
    num: 6,
    name: "Charizard",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    },
    weightkg: 90.5,
    evoLevel: 36,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    canGigantamax: "G-Max Wildfire",
    tier: "NU",
    doublesTier: "(DUU)",
    id: "charizard",
    fullname: "pokemon: Charizard",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Charizard",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 534,
    weighthg: 905,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    nfe: false,
    otherFormes: [
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    formeOrder: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    formes: [
      "Charizard",
      "Charizard-Mega-X",
      "Charizard-Mega-Y"
    ],
    prevo: "Charmeleon"
  },
  charizardgmax: {
    tags: [],
    num: 6,
    name: "Charizard-Gmax",
    baseSpecies: "Charizard",
    forme: "Gmax",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    },
    weightkg: 0,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    changesFrom: "Charizard",
    tier: "Illegal",
    id: "charizardgmax",
    fullname: "pokemon: Charizard-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 534,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Solar Power"
    },
    nfe: false
  },
  charizardmegax: {
    tags: [],
    num: 6,
    name: "Charizard-Mega-X",
    baseSpecies: "Charizard",
    forme: "Mega-X",
    types: [
      "Fire",
      "Dragon"
    ],
    baseStats: {
      hp: 78,
      atk: 130,
      def: 111,
      spa: 130,
      spd: 85,
      spe: 100
    },
    weightkg: 110.5,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    requiredItem: "Charizardite X",
    tier: "Illegal",
    id: "charizardmegax",
    fullname: "pokemon: Charizard-Mega-X",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Charizardite X"
    ],
    bst: 634,
    weighthg: 1105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Charizard",
    changesFrom: "Charizard",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Tough Claws"
    },
    nfe: false
  },
  charizardmegay: {
    tags: [],
    num: 6,
    name: "Charizard-Mega-Y",
    baseSpecies: "Charizard",
    forme: "Mega-Y",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 104,
      def: 78,
      spa: 159,
      spd: 115,
      spe: 100
    },
    weightkg: 100.5,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    requiredItem: "Charizardite Y",
    tier: "Illegal",
    id: "charizardmegay",
    fullname: "pokemon: Charizard-Mega-Y",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Charizardite Y"
    ],
    bst: 634,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Charizard",
    changesFrom: "Charizard",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Drought"
    },
    nfe: false
  },
  squirtle: {
    tags: [],
    num: 7,
    name: "Squirtle",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 44,
      atk: 48,
      def: 65,
      spa: 50,
      spd: 64,
      spe: 43
    },
    weightkg: 9,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "squirtle",
    fullname: "pokemon: Squirtle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Squirtle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 314,
    weighthg: 90,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    evos: [
      "Wartortle"
    ],
    nfe: true
  },
  wartortle: {
    tags: [],
    num: 8,
    name: "Wartortle",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 59,
      atk: 63,
      def: 80,
      spa: 65,
      spd: 80,
      spe: 58
    },
    weightkg: 22.5,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "wartortle",
    fullname: "pokemon: Wartortle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wartortle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 225,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    evos: [
      "Blastoise"
    ],
    nfe: true,
    prevo: "Squirtle"
  },
  blastoise: {
    tags: [],
    num: 9,
    name: "Blastoise",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 79,
      atk: 83,
      def: 100,
      spa: 85,
      spd: 105,
      spe: 78
    },
    weightkg: 85.5,
    evoLevel: 36,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    canGigantamax: "G-Max Cannonade",
    tier: "Illegal",
    id: "blastoise",
    fullname: "pokemon: Blastoise",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Blastoise",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 855,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    nfe: false,
    otherFormes: [
      "Blastoise-Mega"
    ],
    formeOrder: [
      "Blastoise",
      "Blastoise-Mega"
    ],
    formes: [
      "Blastoise",
      "Blastoise-Mega"
    ],
    prevo: "Wartortle"
  },
  blastoisegmax: {
    tags: [],
    num: 9,
    name: "Blastoise-Gmax",
    baseSpecies: "Blastoise",
    forme: "Gmax",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 79,
      atk: 83,
      def: 100,
      spa: 85,
      spd: 105,
      spe: 78
    },
    weightkg: 0,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    changesFrom: "Blastoise",
    tier: "Illegal",
    id: "blastoisegmax",
    fullname: "pokemon: Blastoise-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 530,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Rain Dish"
    },
    nfe: false
  },
  blastoisemega: {
    tags: [],
    num: 9,
    name: "Blastoise-Mega",
    baseSpecies: "Blastoise",
    forme: "Mega",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 79,
      atk: 103,
      def: 120,
      spa: 135,
      spd: 115,
      spe: 78
    },
    weightkg: 101.1,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    requiredItem: "Blastoisinite",
    tier: "Illegal",
    id: "blastoisemega",
    fullname: "pokemon: Blastoise-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Blastoisinite"
    ],
    bst: 630,
    weighthg: 1011,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Blastoise",
    changesFrom: "Blastoise",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Mega Launcher"
    },
    nfe: false
  },
  caterpie: {
    tags: [],
    num: 10,
    name: "Caterpie",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 45,
      atk: 30,
      def: 35,
      spa: 20,
      spd: 20,
      spe: 45
    },
    weightkg: 2.9,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "caterpie",
    fullname: "pokemon: Caterpie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Caterpie",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 195,
    weighthg: 29,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    evos: [
      "Metapod"
    ],
    nfe: true
  },
  metapod: {
    tags: [],
    num: 11,
    name: "Metapod",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 20,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 30
    },
    weightkg: 9.9,
    evoLevel: 7,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "metapod",
    fullname: "pokemon: Metapod",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Metapod",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 205,
    weighthg: 99,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin"
    },
    evos: [
      "Butterfree"
    ],
    nfe: true,
    prevo: "Caterpie"
  },
  butterfree: {
    tags: [],
    num: 12,
    name: "Butterfree",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 50,
      spa: 90,
      spd: 80,
      spe: 70
    },
    weightkg: 32,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    canGigantamax: "G-Max Befuddle",
    tier: "Illegal",
    id: "butterfree",
    fullname: "pokemon: Butterfree",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Butterfree",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 395,
    weighthg: 320,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      H: "Tinted Lens"
    },
    nfe: false,
    prevo: "Metapod"
  },
  butterfreegmax: {
    tags: [],
    num: 12,
    name: "Butterfree-Gmax",
    baseSpecies: "Butterfree",
    forme: "Gmax",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 50,
      spa: 90,
      spd: 80,
      spe: 70
    },
    weightkg: 0,
    eggGroups: [
      "Bug"
    ],
    changesFrom: "Butterfree",
    tier: "Illegal",
    id: "butterfreegmax",
    fullname: "pokemon: Butterfree-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 395,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      H: "Tinted Lens"
    },
    nfe: false
  },
  weedle: {
    tags: [],
    num: 13,
    name: "Weedle",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 35,
      def: 30,
      spa: 20,
      spd: 20,
      spe: 50
    },
    weightkg: 3.2,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "weedle",
    fullname: "pokemon: Weedle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Weedle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 195,
    weighthg: 32,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    evos: [
      "Kakuna"
    ],
    nfe: true
  },
  kakuna: {
    tags: [],
    num: 14,
    name: "Kakuna",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 45,
      atk: 25,
      def: 50,
      spa: 25,
      spd: 25,
      spe: 35
    },
    weightkg: 10,
    evoLevel: 7,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "kakuna",
    fullname: "pokemon: Kakuna",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kakuna",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 205,
    weighthg: 100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin"
    },
    evos: [
      "Beedrill"
    ],
    nfe: true,
    prevo: "Weedle"
  },
  beedrill: {
    tags: [],
    num: 15,
    name: "Beedrill",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 40,
      spa: 45,
      spd: 80,
      spe: 75
    },
    weightkg: 29.5,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "beedrill",
    fullname: "pokemon: Beedrill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Beedrill",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 395,
    weighthg: 295,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      H: "Sniper"
    },
    nfe: false,
    otherFormes: [
      "Beedrill-Mega"
    ],
    formeOrder: [
      "Beedrill",
      "Beedrill-Mega"
    ],
    formes: [
      "Beedrill",
      "Beedrill-Mega"
    ],
    prevo: "Kakuna"
  },
  beedrillmega: {
    tags: [],
    num: 15,
    name: "Beedrill-Mega",
    baseSpecies: "Beedrill",
    forme: "Mega",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 65,
      atk: 150,
      def: 40,
      spa: 15,
      spd: 80,
      spe: 145
    },
    weightkg: 40.5,
    eggGroups: [
      "Bug"
    ],
    requiredItem: "Beedrillite",
    tier: "Illegal",
    id: "beedrillmega",
    fullname: "pokemon: Beedrill-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Beedrillite"
    ],
    bst: 495,
    weighthg: 405,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Beedrill",
    changesFrom: "Beedrill",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Adaptability"
    },
    nfe: false
  },
  pidgey: {
    tags: [],
    num: 16,
    name: "Pidgey",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 35,
      spd: 35,
      spe: 56
    },
    weightkg: 1.8,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "pidgey",
    fullname: "pokemon: Pidgey",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pidgey",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 251,
    weighthg: 18,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    evos: [
      "Pidgeotto"
    ],
    nfe: true
  },
  pidgeotto: {
    tags: [],
    num: 17,
    name: "Pidgeotto",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 63,
      atk: 60,
      def: 55,
      spa: 50,
      spd: 50,
      spe: 71
    },
    weightkg: 30,
    evoLevel: 18,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "pidgeotto",
    fullname: "pokemon: Pidgeotto",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pidgeotto",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 349,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    evos: [
      "Pidgeot"
    ],
    nfe: true,
    prevo: "Pidgey"
  },
  pidgeot: {
    tags: [],
    num: 18,
    name: "Pidgeot",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 83,
      atk: 80,
      def: 75,
      spa: 70,
      spd: 70,
      spe: 101
    },
    weightkg: 39.5,
    evoLevel: 36,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "pidgeot",
    fullname: "pokemon: Pidgeot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pidgeot",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 479,
    weighthg: 395,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    nfe: false,
    otherFormes: [
      "Pidgeot-Mega"
    ],
    formeOrder: [
      "Pidgeot",
      "Pidgeot-Mega"
    ],
    formes: [
      "Pidgeot",
      "Pidgeot-Mega"
    ],
    prevo: "Pidgeotto"
  },
  pidgeotmega: {
    tags: [],
    num: 18,
    name: "Pidgeot-Mega",
    baseSpecies: "Pidgeot",
    forme: "Mega",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 83,
      atk: 80,
      def: 80,
      spa: 135,
      spd: 80,
      spe: 121
    },
    weightkg: 50.5,
    eggGroups: [
      "Flying"
    ],
    requiredItem: "Pidgeotite",
    tier: "Illegal",
    id: "pidgeotmega",
    fullname: "pokemon: Pidgeot-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Pidgeotite"
    ],
    bst: 579,
    weighthg: 505,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Pidgeot",
    changesFrom: "Pidgeot",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "No Guard"
    },
    nfe: false
  },
  rattata: {
    tags: [],
    num: 19,
    name: "Rattata",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 30,
      atk: 56,
      def: 35,
      spa: 25,
      spd: 35,
      spe: 72
    },
    weightkg: 3.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "rattata",
    fullname: "pokemon: Rattata",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rattata",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 253,
    weighthg: 35,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Guts",
      H: "Hustle"
    },
    evos: [
      "Raticate"
    ],
    nfe: true,
    otherFormes: [
      "Rattata-Alola"
    ],
    formeOrder: [
      "Rattata",
      "Rattata-Alola"
    ],
    formes: [
      "Rattata",
      "Rattata-Alola"
    ]
  },
  rattataalola: {
    tags: [],
    num: 19,
    name: "Rattata-Alola",
    baseSpecies: "Rattata",
    forme: "Alola",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 30,
      atk: 56,
      def: 35,
      spa: 25,
      spd: 35,
      spe: 72
    },
    weightkg: 3.8,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "rattataalola",
    fullname: "pokemon: Rattata-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 253,
    weighthg: 38,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gluttony",
      "1": "Hustle",
      H: "Thick Fat"
    },
    evos: [
      "Raticate-Alola"
    ],
    nfe: true
  },
  raticate: {
    tags: [],
    num: 20,
    name: "Raticate",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 81,
      def: 60,
      spa: 50,
      spd: 70,
      spe: 97
    },
    weightkg: 18.5,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "raticate",
    fullname: "pokemon: Raticate",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Raticate",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 413,
    weighthg: 185,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Guts",
      H: "Hustle"
    },
    nfe: false,
    otherFormes: [
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    formeOrder: [
      "Raticate",
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    formes: [
      "Raticate",
      "Raticate-Alola",
      "Raticate-Alola-Totem"
    ],
    prevo: "Rattata"
  },
  raticatealola: {
    tags: [],
    num: 20,
    name: "Raticate-Alola",
    baseSpecies: "Raticate",
    forme: "Alola",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 75,
      atk: 71,
      def: 70,
      spa: 40,
      spd: 80,
      spe: 77
    },
    weightkg: 25.5,
    evoLevel: 20,
    evoCondition: "at night",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "raticatealola",
    fullname: "pokemon: Raticate-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 413,
    weighthg: 255,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gluttony",
      "1": "Hustle",
      H: "Thick Fat"
    },
    nfe: false,
    prevo: "Rattata-Alola"
  },
  raticatealolatotem: {
    tags: [],
    num: 20,
    name: "Raticate-Alola-Totem",
    baseSpecies: "Raticate",
    forme: "Alola-Totem",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 75,
      atk: 71,
      def: 70,
      spa: 40,
      spd: 80,
      spe: 77
    },
    weightkg: 105,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "raticatealolatotem",
    fullname: "pokemon: Raticate-Alola-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 413,
    weighthg: 1050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat"
    },
    nfe: false
  },
  spearow: {
    tags: [],
    num: 21,
    name: "Spearow",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 60,
      def: 30,
      spa: 31,
      spd: 31,
      spe: 70
    },
    weightkg: 2,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "spearow",
    fullname: "pokemon: Spearow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Spearow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 262,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      H: "Sniper"
    },
    evos: [
      "Fearow"
    ],
    nfe: true
  },
  fearow: {
    tags: [],
    num: 22,
    name: "Fearow",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 65,
      spa: 61,
      spd: 61,
      spe: 100
    },
    weightkg: 38,
    evoLevel: 20,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "fearow",
    fullname: "pokemon: Fearow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Fearow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 442,
    weighthg: 380,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      H: "Sniper"
    },
    nfe: false,
    prevo: "Spearow"
  },
  ekans: {
    tags: [],
    num: 23,
    name: "Ekans",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 35,
      atk: 60,
      def: 44,
      spa: 40,
      spd: 54,
      spe: 55
    },
    weightkg: 6.9,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "Illegal",
    id: "ekans",
    fullname: "pokemon: Ekans",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ekans",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 288,
    weighthg: 69,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Shed Skin",
      H: "Unnerve"
    },
    evos: [
      "Arbok"
    ],
    nfe: true
  },
  arbok: {
    tags: [],
    num: 24,
    name: "Arbok",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 95,
      def: 69,
      spa: 65,
      spd: 79,
      spe: 80
    },
    weightkg: 65,
    evoLevel: 22,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "Illegal",
    id: "arbok",
    fullname: "pokemon: Arbok",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Arbok",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 448,
    weighthg: 650,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Shed Skin",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Ekans"
  },
  pikachu: {
    tags: [],
    num: 25,
    name: "Pikachu",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    evoType: "levelFriendship",
    eggGroups: [
      "Field",
      "Fairy"
    ],
    canGigantamax: "G-Max Volt Crash",
    tier: "NFE",
    id: "pikachu",
    fullname: "pokemon: Pikachu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pikachu",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    evos: [
      "Raichu"
    ],
    nfe: true,
    otherFormes: [
      "Pikachu-Cosplay",
      "Pikachu-Rock-Star",
      "Pikachu-Belle",
      "Pikachu-Pop-Star",
      "Pikachu-PhD",
      "Pikachu-Libre",
      "Pikachu-Original",
      "Pikachu-Hoenn",
      "Pikachu-Sinnoh",
      "Pikachu-Unova",
      "Pikachu-Kalos",
      "Pikachu-Alola",
      "Pikachu-Partner",
      "Pikachu-World"
    ],
    formeOrder: [
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
    prevo: "Pichu"
  },
  pikachualola: {
    tags: [],
    num: 25,
    name: "Pikachu-Alola",
    baseSpecies: "Pikachu",
    forme: "Alola",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachualola",
    fullname: "pokemon: Pikachu-Alola",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachubelle: {
    tags: [],
    num: 25,
    name: "Pikachu-Belle",
    baseSpecies: "Pikachu",
    forme: "Belle",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Pikachu-Cosplay",
    gen: 6,
    tier: "Illegal",
    id: "pikachubelle",
    fullname: "pokemon: Pikachu-Belle",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachucosplay: {
    tags: [],
    num: 25,
    name: "Pikachu-Cosplay",
    baseSpecies: "Pikachu",
    forme: "Cosplay",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 6,
    tier: "Illegal",
    id: "pikachucosplay",
    fullname: "pokemon: Pikachu-Cosplay",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachugmax: {
    tags: [],
    num: 25,
    name: "Pikachu-Gmax",
    baseSpecies: "Pikachu",
    forme: "Gmax",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 0,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    changesFrom: "Pikachu",
    tier: "Illegal",
    id: "pikachugmax",
    fullname: "pokemon: Pikachu-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachuhoenn: {
    tags: [],
    num: 25,
    name: "Pikachu-Hoenn",
    baseSpecies: "Pikachu",
    forme: "Hoenn",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachuhoenn",
    fullname: "pokemon: Pikachu-Hoenn",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachukalos: {
    tags: [],
    num: 25,
    name: "Pikachu-Kalos",
    baseSpecies: "Pikachu",
    forme: "Kalos",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachukalos",
    fullname: "pokemon: Pikachu-Kalos",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachulibre: {
    tags: [],
    num: 25,
    name: "Pikachu-Libre",
    baseSpecies: "Pikachu",
    forme: "Libre",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Pikachu-Cosplay",
    gen: 6,
    tier: "Illegal",
    id: "pikachulibre",
    fullname: "pokemon: Pikachu-Libre",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachuoriginal: {
    tags: [],
    num: 25,
    name: "Pikachu-Original",
    baseSpecies: "Pikachu",
    forme: "Original",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachuoriginal",
    fullname: "pokemon: Pikachu-Original",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachupartner: {
    tags: [],
    num: 25,
    name: "Pikachu-Partner",
    baseSpecies: "Pikachu",
    forme: "Partner",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachupartner",
    fullname: "pokemon: Pikachu-Partner",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachuphd: {
    tags: [],
    num: 25,
    name: "Pikachu-PhD",
    baseSpecies: "Pikachu",
    forme: "PhD",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Pikachu-Cosplay",
    gen: 6,
    tier: "Illegal",
    id: "pikachuphd",
    fullname: "pokemon: Pikachu-PhD",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachupopstar: {
    tags: [],
    num: 25,
    name: "Pikachu-Pop-Star",
    baseSpecies: "Pikachu",
    forme: "Pop-Star",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Pikachu-Cosplay",
    gen: 6,
    tier: "Illegal",
    id: "pikachupopstar",
    fullname: "pokemon: Pikachu-Pop-Star",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachurockstar: {
    tags: [],
    num: 25,
    name: "Pikachu-Rock-Star",
    baseSpecies: "Pikachu",
    forme: "Rock-Star",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Pikachu-Cosplay",
    gen: 6,
    tier: "Illegal",
    id: "pikachurockstar",
    fullname: "pokemon: Pikachu-Rock-Star",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  pikachusinnoh: {
    tags: [],
    num: 25,
    name: "Pikachu-Sinnoh",
    baseSpecies: "Pikachu",
    forme: "Sinnoh",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachusinnoh",
    fullname: "pokemon: Pikachu-Sinnoh",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachuunova: {
    tags: [],
    num: 25,
    name: "Pikachu-Unova",
    baseSpecies: "Pikachu",
    forme: "Unova",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 7,
    tier: "Illegal",
    id: "pikachuunova",
    fullname: "pokemon: Pikachu-Unova",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  pikachuworld: {
    tags: [],
    num: 25,
    name: "Pikachu-World",
    baseSpecies: "Pikachu",
    forme: "World",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 8,
    tier: "Illegal",
    id: "pikachuworld",
    fullname: "pokemon: Pikachu-World",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 320,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false
  },
  raichu: {
    tags: [],
    num: 26,
    name: "Raichu",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 90,
      def: 55,
      spa: 90,
      spd: 80,
      spe: 110
    },
    weightkg: 30,
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "raichu",
    fullname: "pokemon: Raichu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Raichu",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 485,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    nfe: false,
    prevo: "Pikachu"
  },
  sandshrew: {
    tags: [],
    num: 27,
    name: "Sandshrew",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 85,
      spa: 20,
      spd: 30,
      spe: 40
    },
    weightkg: 12,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "sandshrew",
    fullname: "pokemon: Sandshrew",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sandshrew",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Sand Rush"
    },
    evos: [
      "Sandslash"
    ],
    nfe: true,
    otherFormes: [
      "Sandshrew-Alola"
    ],
    formeOrder: [
      "Sandshrew",
      "Sandshrew-Alola"
    ],
    formes: [
      "Sandshrew",
      "Sandshrew-Alola"
    ]
  },
  sandshrewalola: {
    tags: [],
    num: 27,
    name: "Sandshrew-Alola",
    baseSpecies: "Sandshrew",
    forme: "Alola",
    types: [
      "Ice",
      "Steel"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 90,
      spa: 10,
      spd: 35,
      spe: 40
    },
    weightkg: 40,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "sandshrewalola",
    fullname: "pokemon: Sandshrew-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Slush Rush"
    },
    evos: [
      "Sandslash-Alola"
    ],
    nfe: true
  },
  sandslash: {
    tags: [],
    num: 28,
    name: "Sandslash",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 75,
      atk: 100,
      def: 110,
      spa: 45,
      spd: 55,
      spe: 65
    },
    weightkg: 29.5,
    evoLevel: 22,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "sandslash",
    fullname: "pokemon: Sandslash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sandslash",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 295,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Sand Rush"
    },
    nfe: false,
    otherFormes: [
      "Sandslash-Alola"
    ],
    formeOrder: [
      "Sandslash",
      "Sandslash-Alola"
    ],
    formes: [
      "Sandslash",
      "Sandslash-Alola"
    ],
    prevo: "Sandshrew"
  },
  sandslashalola: {
    tags: [],
    num: 28,
    name: "Sandslash-Alola",
    baseSpecies: "Sandslash",
    forme: "Alola",
    types: [
      "Ice",
      "Steel"
    ],
    baseStats: {
      hp: 75,
      atk: 100,
      def: 120,
      spa: 25,
      spd: 65,
      spe: 65
    },
    weightkg: 55,
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "sandslashalola",
    fullname: "pokemon: Sandslash-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Slush Rush"
    },
    nfe: false,
    prevo: "Sandshrew-Alola"
  },
  nidoranf: {
    tags: [],
    num: 29,
    name: "Nidoran-F",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 55,
      atk: 47,
      def: 52,
      spa: 40,
      spd: 40,
      spe: 41
    },
    weightkg: 7,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "nidoranf",
    fullname: "pokemon: Nidoran-F",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidoran-F",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 275,
    weighthg: 70,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    evos: [
      "Nidorina"
    ],
    nfe: true
  },
  nidorina: {
    tags: [],
    num: 30,
    name: "Nidorina",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 70,
      atk: 62,
      def: 67,
      spa: 55,
      spd: 55,
      spe: 56
    },
    weightkg: 20,
    evoLevel: 16,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "nidorina",
    fullname: "pokemon: Nidorina",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidorina",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 365,
    weighthg: 200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    evos: [
      "Nidoqueen"
    ],
    nfe: true,
    prevo: "Nidoran-F"
  },
  nidoqueen: {
    tags: [],
    num: 31,
    name: "Nidoqueen",
    types: [
      "Poison",
      "Ground"
    ],
    baseStats: {
      hp: 90,
      atk: 92,
      def: 87,
      spa: 75,
      spd: 85,
      spe: 76
    },
    weightkg: 60,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "nidoqueen",
    fullname: "pokemon: Nidoqueen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidoqueen",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Nidorina"
  },
  nidoranm: {
    tags: [],
    num: 32,
    name: "Nidoran-M",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 46,
      atk: 57,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 50
    },
    weightkg: 9,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "nidoranm",
    fullname: "pokemon: Nidoran-M",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidoran-M",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 273,
    weighthg: 90,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    evos: [
      "Nidorino"
    ],
    nfe: true
  },
  nidorino: {
    tags: [],
    num: 33,
    name: "Nidorino",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 61,
      atk: 72,
      def: 57,
      spa: 55,
      spd: 55,
      spe: 65
    },
    weightkg: 19.5,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "nidorino",
    fullname: "pokemon: Nidorino",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidorino",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 365,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Hustle"
    },
    evos: [
      "Nidoking"
    ],
    nfe: true,
    prevo: "Nidoran-M"
  },
  nidoking: {
    tags: [],
    num: 34,
    name: "Nidoking",
    types: [
      "Poison",
      "Ground"
    ],
    baseStats: {
      hp: 81,
      atk: 102,
      def: 77,
      spa: 85,
      spd: 75,
      spe: 85
    },
    weightkg: 62,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "nidoking",
    fullname: "pokemon: Nidoking",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nidoking",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 620,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Poison Point",
      "1": "Rivalry",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Nidorino"
  },
  clefairy: {
    tags: [],
    num: 35,
    name: "Clefairy",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 45,
      def: 48,
      spa: 60,
      spd: 65,
      spe: 35
    },
    weightkg: 7.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "clefairy",
    fullname: "pokemon: Clefairy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Clefairy",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 323,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Friend Guard"
    },
    evos: [
      "Clefable"
    ],
    nfe: true,
    prevo: "Cleffa"
  },
  clefable: {
    tags: [],
    num: 36,
    name: "Clefable",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 95,
      atk: 70,
      def: 73,
      spa: 95,
      spd: 90,
      spe: 60
    },
    weightkg: 40,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "clefable",
    fullname: "pokemon: Clefable",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Clefable",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 483,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Unaware"
    },
    nfe: false,
    prevo: "Clefairy"
  },
  vulpix: {
    tags: [],
    num: 37,
    name: "Vulpix",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 38,
      atk: 41,
      def: 40,
      spa: 50,
      spd: 65,
      spe: 65
    },
    weightkg: 9.9,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "vulpix",
    fullname: "pokemon: Vulpix",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vulpix",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 299,
    weighthg: 99,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Flash Fire",
      H: "Drought"
    },
    evos: [
      "Ninetales"
    ],
    nfe: true,
    otherFormes: [
      "Vulpix-Alola"
    ],
    formeOrder: [
      "Vulpix",
      "Vulpix-Alola"
    ],
    formes: [
      "Vulpix",
      "Vulpix-Alola"
    ]
  },
  vulpixalola: {
    tags: [],
    num: 37,
    name: "Vulpix-Alola",
    baseSpecies: "Vulpix",
    forme: "Alola",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 38,
      atk: 41,
      def: 40,
      spa: 50,
      spd: 65,
      spe: 65
    },
    weightkg: 9.9,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "vulpixalola",
    fullname: "pokemon: Vulpix-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 299,
    weighthg: 99,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Snow Warning"
    },
    evos: [
      "Ninetales-Alola"
    ],
    nfe: true
  },
  ninetales: {
    tags: [],
    num: 38,
    name: "Ninetales",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 73,
      atk: 76,
      def: 75,
      spa: 81,
      spd: 100,
      spe: 100
    },
    weightkg: 19.9,
    evoType: "useItem",
    evoItem: "Fire Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "ninetales",
    fullname: "pokemon: Ninetales",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ninetales",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 199,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Flash Fire",
      H: "Drought"
    },
    nfe: false,
    otherFormes: [
      "Ninetales-Alola"
    ],
    formeOrder: [
      "Ninetales",
      "Ninetales-Alola"
    ],
    formes: [
      "Ninetales",
      "Ninetales-Alola"
    ],
    prevo: "Vulpix"
  },
  ninetalesalola: {
    tags: [],
    num: 38,
    name: "Ninetales-Alola",
    baseSpecies: "Ninetales",
    forme: "Alola",
    types: [
      "Ice",
      "Fairy"
    ],
    baseStats: {
      hp: 73,
      atk: 67,
      def: 75,
      spa: 81,
      spd: 100,
      spe: 109
    },
    weightkg: 19.9,
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "ninetalesalola",
    fullname: "pokemon: Ninetales-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 199,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Snow Warning"
    },
    nfe: false,
    prevo: "Vulpix-Alola"
  },
  jigglypuff: {
    tags: [],
    num: 39,
    name: "Jigglypuff",
    types: [
      "Normal",
      "Fairy"
    ],
    baseStats: {
      hp: 115,
      atk: 45,
      def: 20,
      spa: 45,
      spd: 25,
      spe: 20
    },
    weightkg: 5.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Fairy"
    ],
    tier: "NFE",
    id: "jigglypuff",
    fullname: "pokemon: Jigglypuff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Jigglypuff",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 270,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Friend Guard"
    },
    evos: [
      "Wigglytuff"
    ],
    nfe: true,
    prevo: "Igglybuff"
  },
  wigglytuff: {
    tags: [],
    num: 40,
    name: "Wigglytuff",
    types: [
      "Normal",
      "Fairy"
    ],
    baseStats: {
      hp: 140,
      atk: 70,
      def: 45,
      spa: 85,
      spd: 50,
      spe: 45
    },
    weightkg: 12,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Fairy"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "wigglytuff",
    fullname: "pokemon: Wigglytuff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Wigglytuff",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 435,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Frisk"
    },
    nfe: false,
    prevo: "Jigglypuff"
  },
  zubat: {
    tags: [],
    num: 41,
    name: "Zubat",
    types: [
      "Poison",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 30,
      spd: 40,
      spe: 55
    },
    weightkg: 7.5,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "zubat",
    fullname: "pokemon: Zubat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zubat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 245,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    evos: [
      "Golbat"
    ],
    nfe: true
  },
  golbat: {
    tags: [],
    num: 42,
    name: "Golbat",
    types: [
      "Poison",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 70,
      spa: 65,
      spd: 75,
      spe: 90
    },
    weightkg: 55,
    evoLevel: 22,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "golbat",
    fullname: "pokemon: Golbat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Golbat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    evos: [
      "Crobat"
    ],
    nfe: true,
    prevo: "Zubat"
  },
  oddish: {
    tags: [],
    num: 43,
    name: "Oddish",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 45,
      atk: 50,
      def: 55,
      spa: 75,
      spd: 65,
      spe: 30
    },
    weightkg: 5.4,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "oddish",
    fullname: "pokemon: Oddish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Oddish",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 54,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Run Away"
    },
    evos: [
      "Gloom"
    ],
    nfe: true
  },
  gloom: {
    tags: [],
    num: 44,
    name: "Gloom",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 70,
      spa: 85,
      spd: 75,
      spe: 40
    },
    weightkg: 8.6,
    evoLevel: 21,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "gloom",
    fullname: "pokemon: Gloom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gloom",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 395,
    weighthg: 86,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Stench"
    },
    evos: [
      "Vileplume",
      "Bellossom"
    ],
    nfe: true,
    prevo: "Oddish"
  },
  vileplume: {
    tags: [],
    num: 45,
    name: "Vileplume",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 85,
      spa: 110,
      spd: 90,
      spe: 50
    },
    weightkg: 18.6,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "vileplume",
    fullname: "pokemon: Vileplume",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vileplume",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 186,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Effect Spore"
    },
    nfe: false,
    prevo: "Gloom"
  },
  paras: {
    tags: [],
    num: 46,
    name: "Paras",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 35,
      atk: 70,
      def: 55,
      spa: 45,
      spd: 55,
      spe: 25
    },
    weightkg: 5.4,
    eggGroups: [
      "Bug",
      "Grass"
    ],
    tier: "Illegal",
    id: "paras",
    fullname: "pokemon: Paras",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Paras",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 285,
    weighthg: 54,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      "1": "Dry Skin",
      H: "Damp"
    },
    evos: [
      "Parasect"
    ],
    nfe: true
  },
  parasect: {
    tags: [],
    num: 47,
    name: "Parasect",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 95,
      def: 80,
      spa: 60,
      spd: 80,
      spe: 30
    },
    weightkg: 29.5,
    evoLevel: 24,
    eggGroups: [
      "Bug",
      "Grass"
    ],
    tier: "Illegal",
    id: "parasect",
    fullname: "pokemon: Parasect",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Parasect",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 295,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      "1": "Dry Skin",
      H: "Damp"
    },
    nfe: false,
    prevo: "Paras"
  },
  venonat: {
    tags: [],
    num: 48,
    name: "Venonat",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 50,
      spa: 40,
      spd: 55,
      spe: 45
    },
    weightkg: 30,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "venonat",
    fullname: "pokemon: Venonat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Venonat",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      "1": "Tinted Lens",
      H: "Run Away"
    },
    evos: [
      "Venomoth"
    ],
    nfe: true
  },
  venomoth: {
    tags: [],
    num: 49,
    name: "Venomoth",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 70,
      atk: 65,
      def: 60,
      spa: 90,
      spd: 75,
      spe: 90
    },
    weightkg: 12.5,
    evoLevel: 31,
    eggGroups: [
      "Bug"
    ],
    tier: "NUBL",
    doublesTier: "(DUU)",
    id: "venomoth",
    fullname: "pokemon: Venomoth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Venomoth",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 450,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      "1": "Tinted Lens",
      H: "Wonder Skin"
    },
    nfe: false,
    prevo: "Venonat"
  },
  diglett: {
    tags: [],
    num: 50,
    name: "Diglett",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 10,
      atk: 55,
      def: 25,
      spa: 35,
      spd: 45,
      spe: 95
    },
    weightkg: 0.8,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "diglett",
    fullname: "pokemon: Diglett",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Diglett",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 265,
    weighthg: 8,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      "1": "Arena Trap",
      H: "Sand Force"
    },
    evos: [
      "Dugtrio"
    ],
    nfe: true
  },
  dugtrio: {
    tags: [],
    num: 51,
    name: "Dugtrio",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 35,
      atk: 100,
      def: 50,
      spa: 50,
      spd: 70,
      spe: 120
    },
    weightkg: 33.3,
    evoLevel: 26,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "dugtrio",
    fullname: "pokemon: Dugtrio",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dugtrio",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 425,
    weighthg: 333,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      "1": "Arena Trap",
      H: "Sand Force"
    },
    nfe: false,
    prevo: "Diglett"
  },
  meowth: {
    tags: [],
    num: 52,
    name: "Meowth",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 40,
      spd: 40,
      spe: 90
    },
    weightkg: 4.2,
    eggGroups: [
      "Field"
    ],
    canGigantamax: "G-Max Gold Rush",
    tier: "LC",
    id: "meowth",
    fullname: "pokemon: Meowth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Meowth",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 290,
    weighthg: 42,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Technician",
      H: "Unnerve"
    },
    evos: [
      "Persian"
    ],
    nfe: true,
    otherFormes: [
      "Meowth-Galar"
    ],
    formeOrder: [
      "Meowth",
      "Meowth-Galar"
    ],
    formes: [
      "Meowth",
      "Meowth-Galar"
    ]
  },
  meowthgalar: {
    tags: [],
    num: 52,
    name: "Meowth-Galar",
    baseSpecies: "Meowth",
    forme: "Galar",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 55,
      spa: 40,
      spd: 40,
      spe: 40
    },
    weightkg: 7.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "meowthgalar",
    fullname: "pokemon: Meowth-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 290,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Tough Claws",
      H: "Unnerve"
    },
    evos: [
      "Perrserker"
    ],
    nfe: true
  },
  meowthgmax: {
    tags: [],
    num: 52,
    name: "Meowth-Gmax",
    baseSpecies: "Meowth",
    forme: "Gmax",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 40,
      spd: 40,
      spe: 90
    },
    weightkg: 0,
    eggGroups: [
      "Field"
    ],
    changesFrom: "Meowth",
    tier: "Illegal",
    id: "meowthgmax",
    fullname: "pokemon: Meowth-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 290,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Technician",
      H: "Unnerve"
    },
    nfe: false
  },
  persian: {
    tags: [],
    num: 53,
    name: "Persian",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 65,
      atk: 70,
      def: 60,
      spa: 65,
      spd: 65,
      spe: 115
    },
    weightkg: 32,
    evoLevel: 28,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "persian",
    fullname: "pokemon: Persian",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Persian",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 440,
    weighthg: 320,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      "1": "Technician",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Meowth"
  },
  psyduck: {
    tags: [],
    num: 54,
    name: "Psyduck",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 52,
      def: 48,
      spa: 65,
      spd: 50,
      spe: 55
    },
    weightkg: 19.6,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "LC",
    id: "psyduck",
    fullname: "pokemon: Psyduck",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Psyduck",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 196,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Damp",
      "1": "Cloud Nine",
      H: "Swift Swim"
    },
    evos: [
      "Golduck"
    ],
    nfe: true
  },
  golduck: {
    tags: [],
    num: 55,
    name: "Golduck",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 80,
      atk: 82,
      def: 78,
      spa: 95,
      spd: 80,
      spe: 85
    },
    weightkg: 76.6,
    evoLevel: 33,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "golduck",
    fullname: "pokemon: Golduck",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Golduck",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 766,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Damp",
      "1": "Cloud Nine",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Psyduck"
  },
  mankey: {
    tags: [],
    num: 56,
    name: "Mankey",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 40,
      atk: 80,
      def: 35,
      spa: 35,
      spd: 45,
      spe: 70
    },
    weightkg: 28,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "mankey",
    fullname: "pokemon: Mankey",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mankey",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit",
      "1": "Anger Point",
      H: "Defiant"
    },
    evos: [
      "Primeape"
    ],
    nfe: true
  },
  primeape: {
    tags: [],
    num: 57,
    name: "Primeape",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 65,
      atk: 105,
      def: 60,
      spa: 60,
      spd: 70,
      spe: 95
    },
    weightkg: 32,
    evoLevel: 28,
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "NFE",
    id: "primeape",
    fullname: "pokemon: Primeape",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Primeape",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 455,
    weighthg: 320,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit",
      "1": "Anger Point",
      H: "Defiant"
    },
    evos: [
      "Annihilape"
    ],
    nfe: true,
    prevo: "Mankey"
  },
  growlithe: {
    tags: [],
    num: 58,
    name: "Growlithe",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 55,
      atk: 70,
      def: 45,
      spa: 70,
      spd: 50,
      spe: 60
    },
    weightkg: 19,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "growlithe",
    fullname: "pokemon: Growlithe",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Growlithe",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 350,
    weighthg: 190,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Justified"
    },
    evos: [
      "Arcanine"
    ],
    nfe: true
  },
  arcanine: {
    tags: [],
    num: 59,
    name: "Arcanine",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 90,
      atk: 110,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 95
    },
    weightkg: 155,
    evoType: "useItem",
    evoItem: "Fire Stone",
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "DOU",
    id: "arcanine",
    fullname: "pokemon: Arcanine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Arcanine",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 555,
    weighthg: 1550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Intimidate",
      "1": "Flash Fire",
      H: "Justified"
    },
    nfe: false,
    prevo: "Growlithe"
  },
  poliwag: {
    tags: [],
    num: 60,
    name: "Poliwag",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 40,
      atk: 50,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 90
    },
    weightkg: 12.4,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "poliwag",
    fullname: "pokemon: Poliwag",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Poliwag",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 124,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    evos: [
      "Poliwhirl"
    ],
    nfe: true
  },
  poliwhirl: {
    tags: [],
    num: 61,
    name: "Poliwhirl",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 65,
      atk: 65,
      def: 65,
      spa: 50,
      spd: 50,
      spe: 90
    },
    weightkg: 20,
    evoLevel: 25,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "poliwhirl",
    fullname: "pokemon: Poliwhirl",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Poliwhirl",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 385,
    weighthg: 200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    evos: [
      "Poliwrath",
      "Politoed"
    ],
    nfe: true,
    prevo: "Poliwag"
  },
  poliwrath: {
    tags: [],
    num: 62,
    name: "Poliwrath",
    types: [
      "Water",
      "Fighting"
    ],
    baseStats: {
      hp: 90,
      atk: 95,
      def: 95,
      spa: 70,
      spd: 90,
      spe: 70
    },
    weightkg: 54,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "poliwrath",
    fullname: "pokemon: Poliwrath",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Poliwrath",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 540,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Poliwhirl"
  },
  abra: {
    tags: [],
    num: 63,
    name: "Abra",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 25,
      atk: 20,
      def: 15,
      spa: 105,
      spd: 55,
      spe: 90
    },
    weightkg: 19.5,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "abra",
    fullname: "pokemon: Abra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Abra",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    evos: [
      "Kadabra"
    ],
    nfe: true
  },
  kadabra: {
    tags: [],
    num: 64,
    name: "Kadabra",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 40,
      atk: 35,
      def: 30,
      spa: 120,
      spd: 70,
      spe: 105
    },
    weightkg: 56.5,
    evoLevel: 16,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "kadabra",
    fullname: "pokemon: Kadabra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kadabra",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 400,
    weighthg: 565,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    evos: [
      "Alakazam"
    ],
    nfe: true,
    prevo: "Abra"
  },
  alakazam: {
    tags: [],
    num: 65,
    name: "Alakazam",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 55,
      atk: 50,
      def: 45,
      spa: 135,
      spd: 95,
      spe: 120
    },
    weightkg: 48,
    evoType: "trade",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "alakazam",
    fullname: "pokemon: Alakazam",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Alakazam",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 480,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Synchronize",
      "1": "Inner Focus",
      H: "Magic Guard"
    },
    nfe: false,
    otherFormes: [
      "Alakazam-Mega"
    ],
    formeOrder: [
      "Alakazam",
      "Alakazam-Mega"
    ],
    formes: [
      "Alakazam",
      "Alakazam-Mega"
    ],
    prevo: "Kadabra"
  },
  alakazammega: {
    tags: [],
    num: 65,
    name: "Alakazam-Mega",
    baseSpecies: "Alakazam",
    forme: "Mega",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 55,
      atk: 50,
      def: 65,
      spa: 175,
      spd: 105,
      spe: 150
    },
    weightkg: 48,
    eggGroups: [
      "Human-Like"
    ],
    requiredItem: "Alakazite",
    tier: "Illegal",
    id: "alakazammega",
    fullname: "pokemon: Alakazam-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Alakazite"
    ],
    bst: 600,
    weighthg: 480,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Alakazam",
    changesFrom: "Alakazam",
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Trace"
    },
    nfe: false
  },
  machop: {
    tags: [],
    num: 66,
    name: "Machop",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 70,
      atk: 80,
      def: 50,
      spa: 35,
      spd: 35,
      spe: 35
    },
    weightkg: 19.5,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "machop",
    fullname: "pokemon: Machop",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Machop",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    evos: [
      "Machoke"
    ],
    nfe: true
  },
  machoke: {
    tags: [],
    num: 67,
    name: "Machoke",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 70,
      spa: 50,
      spd: 60,
      spe: 45
    },
    weightkg: 70.5,
    evoLevel: 28,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "machoke",
    fullname: "pokemon: Machoke",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Machoke",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 705,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    evos: [
      "Machamp"
    ],
    nfe: true,
    prevo: "Machop"
  },
  machamp: {
    tags: [],
    num: 68,
    name: "Machamp",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 90,
      atk: 130,
      def: 80,
      spa: 65,
      spd: 85,
      spe: 55
    },
    weightkg: 130,
    evoType: "trade",
    eggGroups: [
      "Human-Like"
    ],
    canGigantamax: "G-Max Chi Strike",
    tier: "Illegal",
    id: "machamp",
    fullname: "pokemon: Machamp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Machamp",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 1300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    nfe: false,
    prevo: "Machoke"
  },
  machampgmax: {
    tags: [],
    num: 68,
    name: "Machamp-Gmax",
    baseSpecies: "Machamp",
    forme: "Gmax",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 90,
      atk: 130,
      def: 80,
      spa: 65,
      spd: 85,
      spe: 55
    },
    weightkg: 0,
    eggGroups: [
      "Human-Like"
    ],
    changesFrom: "Machamp",
    tier: "Illegal",
    id: "machampgmax",
    fullname: "pokemon: Machamp-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 505,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "No Guard",
      H: "Steadfast"
    },
    nfe: false
  },
  bellsprout: {
    tags: [],
    num: 69,
    name: "Bellsprout",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 35,
      spa: 70,
      spd: 30,
      spe: 40
    },
    weightkg: 4,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "bellsprout",
    fullname: "pokemon: Bellsprout",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bellsprout",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    evos: [
      "Weepinbell"
    ],
    nfe: true
  },
  weepinbell: {
    tags: [],
    num: 70,
    name: "Weepinbell",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 50,
      spa: 85,
      spd: 45,
      spe: 55
    },
    weightkg: 6.4,
    evoLevel: 21,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "weepinbell",
    fullname: "pokemon: Weepinbell",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Weepinbell",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 390,
    weighthg: 64,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    evos: [
      "Victreebel"
    ],
    nfe: true,
    prevo: "Bellsprout"
  },
  victreebel: {
    tags: [],
    num: 71,
    name: "Victreebel",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 105,
      def: 65,
      spa: 100,
      spd: 70,
      spe: 70
    },
    weightkg: 15.5,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "victreebel",
    fullname: "pokemon: Victreebel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Victreebel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 155,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Gluttony"
    },
    nfe: false,
    prevo: "Weepinbell"
  },
  tentacool: {
    tags: [],
    num: 72,
    name: "Tentacool",
    types: [
      "Water",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 35,
      spa: 50,
      spd: 100,
      spe: 70
    },
    weightkg: 45.5,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "tentacool",
    fullname: "pokemon: Tentacool",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tentacool",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 455,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Clear Body",
      "1": "Liquid Ooze",
      H: "Rain Dish"
    },
    evos: [
      "Tentacruel"
    ],
    nfe: true
  },
  tentacruel: {
    tags: [],
    num: 73,
    name: "Tentacruel",
    types: [
      "Water",
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 70,
      def: 65,
      spa: 80,
      spd: 120,
      spe: 100
    },
    weightkg: 55,
    evoLevel: 30,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "tentacruel",
    fullname: "pokemon: Tentacruel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tentacruel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Clear Body",
      "1": "Liquid Ooze",
      H: "Rain Dish"
    },
    nfe: false,
    prevo: "Tentacool"
  },
  geodude: {
    tags: [],
    num: 74,
    name: "Geodude",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 40,
      atk: 80,
      def: 100,
      spa: 30,
      spd: 30,
      spe: 20
    },
    weightkg: 20,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "geodude",
    fullname: "pokemon: Geodude",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Geodude",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    evos: [
      "Graveler"
    ],
    nfe: true,
    otherFormes: [
      "Geodude-Alola"
    ],
    formeOrder: [
      "Geodude",
      "Geodude-Alola"
    ],
    formes: [
      "Geodude",
      "Geodude-Alola"
    ]
  },
  geodudealola: {
    tags: [],
    num: 74,
    name: "Geodude-Alola",
    baseSpecies: "Geodude",
    forme: "Alola",
    types: [
      "Rock",
      "Electric"
    ],
    baseStats: {
      hp: 40,
      atk: 80,
      def: 100,
      spa: 30,
      spd: 30,
      spe: 20
    },
    weightkg: 20.3,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "geodudealola",
    fullname: "pokemon: Geodude-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 203,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    evos: [
      "Graveler-Alola"
    ],
    nfe: true
  },
  graveler: {
    tags: [],
    num: 75,
    name: "Graveler",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 55,
      atk: 95,
      def: 115,
      spa: 45,
      spd: 45,
      spe: 35
    },
    weightkg: 105,
    evoLevel: 25,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "graveler",
    fullname: "pokemon: Graveler",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Graveler",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 390,
    weighthg: 1050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    evos: [
      "Golem"
    ],
    nfe: true,
    otherFormes: [
      "Graveler-Alola"
    ],
    formeOrder: [
      "Graveler",
      "Graveler-Alola"
    ],
    formes: [
      "Graveler",
      "Graveler-Alola"
    ],
    prevo: "Geodude"
  },
  graveleralola: {
    tags: [],
    num: 75,
    name: "Graveler-Alola",
    baseSpecies: "Graveler",
    forme: "Alola",
    types: [
      "Rock",
      "Electric"
    ],
    baseStats: {
      hp: 55,
      atk: 95,
      def: 115,
      spa: 45,
      spd: 45,
      spe: 35
    },
    weightkg: 110,
    evoLevel: 25,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "graveleralola",
    fullname: "pokemon: Graveler-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 390,
    weighthg: 1100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    evos: [
      "Golem-Alola"
    ],
    nfe: true,
    prevo: "Geodude-Alola"
  },
  golem: {
    tags: [],
    num: 76,
    name: "Golem",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 130,
      spa: 55,
      spd: 65,
      spe: 45
    },
    weightkg: 300,
    evoType: "trade",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "golem",
    fullname: "pokemon: Golem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Golem",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 3000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sand Veil"
    },
    nfe: false,
    otherFormes: [
      "Golem-Alola"
    ],
    formeOrder: [
      "Golem",
      "Golem-Alola"
    ],
    formes: [
      "Golem",
      "Golem-Alola"
    ],
    prevo: "Graveler"
  },
  golemalola: {
    tags: [],
    num: 76,
    name: "Golem-Alola",
    baseSpecies: "Golem",
    forme: "Alola",
    types: [
      "Rock",
      "Electric"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 130,
      spa: 55,
      spd: 65,
      spe: 45
    },
    weightkg: 316,
    evoType: "trade",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "golemalola",
    fullname: "pokemon: Golem-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 3160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Galvanize"
    },
    nfe: false,
    prevo: "Graveler-Alola"
  },
  ponyta: {
    tags: [],
    num: 77,
    name: "Ponyta",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 50,
      atk: 85,
      def: 55,
      spa: 65,
      spd: 65,
      spe: 90
    },
    weightkg: 30,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "ponyta",
    fullname: "pokemon: Ponyta",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ponyta",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 410,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Flash Fire",
      H: "Flame Body"
    },
    evos: [
      "Rapidash"
    ],
    nfe: true,
    otherFormes: [
      "Ponyta-Galar"
    ],
    formeOrder: [
      "Ponyta",
      "Ponyta-Galar"
    ],
    formes: [
      "Ponyta",
      "Ponyta-Galar"
    ]
  },
  ponytagalar: {
    tags: [],
    num: 77,
    name: "Ponyta-Galar",
    baseSpecies: "Ponyta",
    forme: "Galar",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 85,
      def: 55,
      spa: 65,
      spd: 65,
      spe: 90
    },
    weightkg: 24,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "ponytagalar",
    fullname: "pokemon: Ponyta-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 410,
    weighthg: 240,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Pastel Veil",
      H: "Anticipation"
    },
    evos: [
      "Rapidash-Galar"
    ],
    nfe: true
  },
  rapidash: {
    tags: [],
    num: 78,
    name: "Rapidash",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 100,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 105
    },
    weightkg: 95,
    evoLevel: 40,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "rapidash",
    fullname: "pokemon: Rapidash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rapidash",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 950,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Flash Fire",
      H: "Flame Body"
    },
    nfe: false,
    otherFormes: [
      "Rapidash-Galar"
    ],
    formeOrder: [
      "Rapidash",
      "Rapidash-Galar"
    ],
    formes: [
      "Rapidash",
      "Rapidash-Galar"
    ],
    prevo: "Ponyta"
  },
  rapidashgalar: {
    tags: [],
    num: 78,
    name: "Rapidash-Galar",
    baseSpecies: "Rapidash",
    forme: "Galar",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 65,
      atk: 100,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 105
    },
    weightkg: 80,
    evoLevel: 40,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "rapidashgalar",
    fullname: "pokemon: Rapidash-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Pastel Veil",
      H: "Anticipation"
    },
    nfe: false,
    prevo: "Ponyta-Galar"
  },
  slowpoke: {
    tags: [],
    num: 79,
    name: "Slowpoke",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 90,
      atk: 65,
      def: 65,
      spa: 40,
      spd: 40,
      spe: 15
    },
    weightkg: 36,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "LC",
    id: "slowpoke",
    fullname: "pokemon: Slowpoke",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Slowpoke",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 315,
    weighthg: 360,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    evos: [
      "Slowbro",
      "Slowking"
    ],
    nfe: true
  },
  slowbro: {
    tags: [],
    num: 80,
    name: "Slowbro",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 75,
      def: 110,
      spa: 100,
      spd: 80,
      spe: 30
    },
    weightkg: 78.5,
    evoLevel: 37,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "slowbro",
    fullname: "pokemon: Slowbro",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Slowbro",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 785,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    nfe: false,
    otherFormes: [
      "Slowbro-Mega"
    ],
    formeOrder: [
      "Slowbro",
      "Slowbro-Mega"
    ],
    formes: [
      "Slowbro",
      "Slowbro-Mega"
    ],
    prevo: "Slowpoke"
  },
  slowbromega: {
    tags: [],
    num: 80,
    name: "Slowbro-Mega",
    baseSpecies: "Slowbro",
    forme: "Mega",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 75,
      def: 180,
      spa: 130,
      spd: 80,
      spe: 30
    },
    weightkg: 120,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    requiredItem: "Slowbronite",
    tier: "Illegal",
    id: "slowbromega",
    fullname: "pokemon: Slowbro-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Slowbronite"
    ],
    bst: 590,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Slowbro",
    changesFrom: "Slowbro",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shell Armor"
    },
    nfe: false
  },
  magnemite: {
    tags: [],
    num: 81,
    name: "Magnemite",
    types: [
      "Electric",
      "Steel"
    ],
    baseStats: {
      hp: 25,
      atk: 35,
      def: 70,
      spa: 95,
      spd: 55,
      spe: 45
    },
    weightkg: 6,
    eggGroups: [
      "Mineral"
    ],
    tier: "LC",
    id: "magnemite",
    fullname: "pokemon: Magnemite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Magnemite",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 325,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    evos: [
      "Magneton"
    ],
    nfe: true
  },
  magneton: {
    tags: [],
    num: 82,
    name: "Magneton",
    types: [
      "Electric",
      "Steel"
    ],
    baseStats: {
      hp: 50,
      atk: 60,
      def: 95,
      spa: 120,
      spd: 70,
      spe: 70
    },
    weightkg: 60,
    evoLevel: 30,
    eggGroups: [
      "Mineral"
    ],
    tier: "PUBL",
    doublesTier: "NFE",
    id: "magneton",
    fullname: "pokemon: Magneton",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Magneton",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 465,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    evos: [
      "Magnezone"
    ],
    nfe: true,
    prevo: "Magnemite"
  },
  farfetchd: {
    tags: [],
    num: 83,
    name: "Farfetch’d",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 52,
      atk: 90,
      def: 55,
      spa: 58,
      spd: 62,
      spe: 60
    },
    weightkg: 15,
    eggGroups: [
      "Flying",
      "Field"
    ],
    tier: "Illegal",
    id: "farfetchd",
    fullname: "pokemon: Farfetch’d",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Farfetch’d",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 377,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Inner Focus",
      H: "Defiant"
    },
    nfe: false,
    otherFormes: [
      "Farfetch’d-Galar"
    ],
    formeOrder: [
      "Farfetch’d",
      "Farfetch’d-Galar"
    ],
    formes: [
      "Farfetch’d",
      "Farfetch’d-Galar"
    ]
  },
  farfetchdgalar: {
    tags: [],
    num: 83,
    name: "Farfetch’d-Galar",
    baseSpecies: "Farfetch’d",
    forme: "Galar",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 52,
      atk: 95,
      def: 55,
      spa: 58,
      spd: 62,
      spe: 55
    },
    weightkg: 15,
    eggGroups: [
      "Flying",
      "Field"
    ],
    tier: "Illegal",
    id: "farfetchdgalar",
    fullname: "pokemon: Farfetch’d-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 377,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steadfast",
      H: "Scrappy"
    },
    evos: [
      "Sirfetch’d"
    ],
    nfe: true
  },
  doduo: {
    tags: [],
    num: 84,
    name: "Doduo",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 35,
      atk: 85,
      def: 45,
      spa: 35,
      spd: 35,
      spe: 75
    },
    weightkg: 39.2,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "doduo",
    fullname: "pokemon: Doduo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Doduo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 392,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Early Bird",
      H: "Tangled Feet"
    },
    evos: [
      "Dodrio"
    ],
    nfe: true
  },
  dodrio: {
    tags: [],
    num: 85,
    name: "Dodrio",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 110,
      def: 70,
      spa: 60,
      spd: 60,
      spe: 110
    },
    weightkg: 85.2,
    evoLevel: 31,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "dodrio",
    fullname: "pokemon: Dodrio",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dodrio",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 470,
    weighthg: 852,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Early Bird",
      H: "Tangled Feet"
    },
    nfe: false,
    prevo: "Doduo"
  },
  seel: {
    tags: [],
    num: 86,
    name: "Seel",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 65,
      atk: 45,
      def: 55,
      spa: 45,
      spd: 70,
      spe: 45
    },
    weightkg: 90,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "seel",
    fullname: "pokemon: Seel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Seel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 900,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Hydration",
      H: "Ice Body"
    },
    evos: [
      "Dewgong"
    ],
    nfe: true
  },
  dewgong: {
    tags: [],
    num: 87,
    name: "Dewgong",
    types: [
      "Water",
      "Ice"
    ],
    baseStats: {
      hp: 90,
      atk: 70,
      def: 80,
      spa: 70,
      spd: 95,
      spe: 70
    },
    weightkg: 120,
    evoLevel: 34,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "dewgong",
    fullname: "pokemon: Dewgong",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dewgong",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 475,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Hydration",
      H: "Ice Body"
    },
    nfe: false,
    prevo: "Seel"
  },
  grimer: {
    tags: [],
    num: 88,
    name: "Grimer",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 80,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 25
    },
    weightkg: 30,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "grimer",
    fullname: "pokemon: Grimer",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Grimer",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 325,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Poison Touch"
    },
    evos: [
      "Muk"
    ],
    nfe: true
  },
  muk: {
    tags: [],
    num: 89,
    name: "Muk",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 105,
      atk: 105,
      def: 75,
      spa: 65,
      spd: 100,
      spe: 50
    },
    weightkg: 30,
    evoLevel: 38,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "muk",
    fullname: "pokemon: Muk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Muk",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Poison Touch"
    },
    nfe: false,
    prevo: "Grimer"
  },
  shellder: {
    tags: [],
    num: 90,
    name: "Shellder",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 30,
      atk: 65,
      def: 100,
      spa: 45,
      spd: 25,
      spe: 40
    },
    weightkg: 4,
    eggGroups: [
      "Water 3"
    ],
    tier: "LC",
    id: "shellder",
    fullname: "pokemon: Shellder",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shellder",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shell Armor",
      "1": "Skill Link",
      H: "Overcoat"
    },
    evos: [
      "Cloyster"
    ],
    nfe: true
  },
  cloyster: {
    tags: [],
    num: 91,
    name: "Cloyster",
    types: [
      "Water",
      "Ice"
    ],
    baseStats: {
      hp: 50,
      atk: 95,
      def: 180,
      spa: 85,
      spd: 45,
      spe: 70
    },
    weightkg: 132.5,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Water 3"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "cloyster",
    fullname: "pokemon: Cloyster",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cloyster",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 1325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shell Armor",
      "1": "Skill Link",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Shellder"
  },
  gastly: {
    tags: [],
    num: 92,
    name: "Gastly",
    types: [
      "Ghost",
      "Poison"
    ],
    baseStats: {
      hp: 30,
      atk: 35,
      def: 30,
      spa: 100,
      spd: 35,
      spe: 80
    },
    weightkg: 0.1,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NFE",
    id: "gastly",
    fullname: "pokemon: Gastly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gastly",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 310,
    weighthg: 1,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Haunter"
    ],
    nfe: true
  },
  haunter: {
    tags: [],
    num: 93,
    name: "Haunter",
    types: [
      "Ghost",
      "Poison"
    ],
    baseStats: {
      hp: 45,
      atk: 50,
      def: 45,
      spa: 115,
      spd: 55,
      spe: 95
    },
    weightkg: 0.1,
    evoLevel: 25,
    eggGroups: [
      "Amorphous"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "haunter",
    fullname: "pokemon: Haunter",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Haunter",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 405,
    weighthg: 1,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Gengar"
    ],
    nfe: true,
    prevo: "Gastly"
  },
  gengar: {
    tags: [],
    num: 94,
    name: "Gengar",
    types: [
      "Ghost",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 75,
      spe: 110
    },
    weightkg: 40.5,
    evoType: "trade",
    eggGroups: [
      "Amorphous"
    ],
    canGigantamax: "G-Max Terror",
    tier: "UU",
    doublesTier: "(DUU)",
    id: "gengar",
    fullname: "pokemon: Gengar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gengar",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 405,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cursed Body"
    },
    nfe: false,
    otherFormes: [
      "Gengar-Mega"
    ],
    formeOrder: [
      "Gengar",
      "Gengar-Mega"
    ],
    formes: [
      "Gengar",
      "Gengar-Mega"
    ],
    prevo: "Haunter"
  },
  gengargmax: {
    tags: [],
    num: 94,
    name: "Gengar-Gmax",
    baseSpecies: "Gengar",
    forme: "Gmax",
    types: [
      "Ghost",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 75,
      spe: 110
    },
    weightkg: 0,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Gengar",
    tier: "Illegal",
    id: "gengargmax",
    fullname: "pokemon: Gengar-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 500,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cursed Body"
    },
    nfe: false
  },
  gengarmega: {
    tags: [],
    num: 94,
    name: "Gengar-Mega",
    baseSpecies: "Gengar",
    forme: "Mega",
    types: [
      "Ghost",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 80,
      spa: 170,
      spd: 95,
      spe: 130
    },
    weightkg: 40.5,
    eggGroups: [
      "Amorphous"
    ],
    requiredItem: "Gengarite",
    tier: "Illegal",
    id: "gengarmega",
    fullname: "pokemon: Gengar-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Gengarite"
    ],
    bst: 600,
    weighthg: 405,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Gengar",
    changesFrom: "Gengar",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shadow Tag"
    },
    nfe: false
  },
  onix: {
    tags: [],
    num: 95,
    name: "Onix",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 35,
      atk: 45,
      def: 160,
      spa: 30,
      spd: 45,
      spe: 70
    },
    weightkg: 210,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "onix",
    fullname: "pokemon: Onix",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Onix",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 385,
    weighthg: 2100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Weak Armor"
    },
    evos: [
      "Steelix"
    ],
    nfe: true
  },
  drowzee: {
    tags: [],
    num: 96,
    name: "Drowzee",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 48,
      def: 45,
      spa: 43,
      spd: 90,
      spe: 42
    },
    weightkg: 32.4,
    eggGroups: [
      "Human-Like"
    ],
    tier: "LC",
    id: "drowzee",
    fullname: "pokemon: Drowzee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Drowzee",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 328,
    weighthg: 324,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Forewarn",
      H: "Inner Focus"
    },
    evos: [
      "Hypno"
    ],
    nfe: true
  },
  hypno: {
    tags: [],
    num: 97,
    name: "Hypno",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 85,
      atk: 73,
      def: 70,
      spa: 73,
      spd: 115,
      spe: 67
    },
    weightkg: 75.6,
    evoLevel: 26,
    eggGroups: [
      "Human-Like"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "hypno",
    fullname: "pokemon: Hypno",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hypno",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 483,
    weighthg: 756,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Forewarn",
      H: "Inner Focus"
    },
    nfe: false,
    prevo: "Drowzee"
  },
  krabby: {
    tags: [],
    num: 98,
    name: "Krabby",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 30,
      atk: 105,
      def: 90,
      spa: 25,
      spd: 25,
      spe: 50
    },
    weightkg: 6.5,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "krabby",
    fullname: "pokemon: Krabby",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Krabby",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    evos: [
      "Kingler"
    ],
    nfe: true
  },
  kingler: {
    tags: [],
    num: 99,
    name: "Kingler",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 130,
      def: 115,
      spa: 50,
      spd: 50,
      spe: 75
    },
    weightkg: 60,
    evoLevel: 28,
    eggGroups: [
      "Water 3"
    ],
    canGigantamax: "G-Max Foam Burst",
    tier: "Illegal",
    id: "kingler",
    fullname: "pokemon: Kingler",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kingler",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 475,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Krabby"
  },
  kinglergmax: {
    tags: [],
    num: 99,
    name: "Kingler-Gmax",
    baseSpecies: "Kingler",
    forme: "Gmax",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 130,
      def: 115,
      spa: 50,
      spd: 50,
      spe: 75
    },
    weightkg: 0,
    eggGroups: [
      "Water 3"
    ],
    changesFrom: "Kingler",
    tier: "Illegal",
    id: "kinglergmax",
    fullname: "pokemon: Kingler-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 475,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Sheer Force"
    },
    nfe: false
  },
  voltorb: {
    tags: [],
    num: 100,
    name: "Voltorb",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 50,
      spa: 55,
      spd: 55,
      spe: 100
    },
    weightkg: 10.4,
    eggGroups: [
      "Mineral"
    ],
    tier: "LC",
    id: "voltorb",
    fullname: "pokemon: Voltorb",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Voltorb",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 104,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    evos: [
      "Electrode"
    ],
    nfe: true
  },
  electrode: {
    tags: [],
    num: 101,
    name: "Electrode",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 70,
      spa: 80,
      spd: 80,
      spe: 150
    },
    weightkg: 66.6,
    evoLevel: 30,
    eggGroups: [
      "Mineral"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "electrode",
    fullname: "pokemon: Electrode",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Electrode",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 666,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Soundproof",
      "1": "Static",
      H: "Aftermath"
    },
    nfe: false,
    prevo: "Voltorb"
  },
  exeggcute: {
    tags: [],
    num: 102,
    name: "Exeggcute",
    types: [
      "Grass",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 40,
      def: 80,
      spa: 60,
      spd: 45,
      spe: 40
    },
    weightkg: 2.5,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "exeggcute",
    fullname: "pokemon: Exeggcute",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Exeggcute",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Harvest"
    },
    evos: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    nfe: true
  },
  exeggutor: {
    tags: [],
    num: 103,
    name: "Exeggutor",
    types: [
      "Grass",
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 85,
      spa: 125,
      spd: 75,
      spe: 55
    },
    weightkg: 120,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "exeggutor",
    fullname: "pokemon: Exeggutor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Exeggutor",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Harvest"
    },
    nfe: false,
    otherFormes: [
      "Exeggutor-Alola"
    ],
    formeOrder: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    formes: [
      "Exeggutor",
      "Exeggutor-Alola"
    ],
    prevo: "Exeggcute"
  },
  exeggutoralola: {
    tags: [],
    num: 103,
    name: "Exeggutor-Alola",
    baseSpecies: "Exeggutor",
    forme: "Alola",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 95,
      atk: 105,
      def: 85,
      spa: 125,
      spd: 75,
      spe: 45
    },
    weightkg: 415.6,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    evoRegion: "Alola",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "exeggutoralola",
    fullname: "pokemon: Exeggutor-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 4156,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Frisk",
      H: "Harvest"
    },
    nfe: false,
    prevo: "Exeggcute"
  },
  cubone: {
    tags: [],
    num: 104,
    name: "Cubone",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 95,
      spa: 40,
      spd: 50,
      spe: 35
    },
    weightkg: 6.5,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "cubone",
    fullname: "pokemon: Cubone",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cubone",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Lightning Rod",
      H: "Battle Armor"
    },
    evos: [
      "Marowak",
      "Marowak-Alola"
    ],
    nfe: true
  },
  marowak: {
    tags: [],
    num: 105,
    name: "Marowak",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    },
    weightkg: 45,
    evoLevel: 28,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "marowak",
    fullname: "pokemon: Marowak",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Marowak",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 425,
    weighthg: 450,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Lightning Rod",
      H: "Battle Armor"
    },
    nfe: false,
    otherFormes: [
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    formeOrder: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    formes: [
      "Marowak",
      "Marowak-Alola",
      "Marowak-Alola-Totem"
    ],
    prevo: "Cubone"
  },
  marowakalola: {
    tags: [],
    num: 105,
    name: "Marowak-Alola",
    baseSpecies: "Marowak",
    forme: "Alola",
    types: [
      "Fire",
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    },
    weightkg: 34,
    evoLevel: 28,
    evoCondition: "at night",
    evoRegion: "Alola",
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "marowakalola",
    fullname: "pokemon: Marowak-Alola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 425,
    weighthg: 340,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cursed Body",
      "1": "Lightning Rod",
      H: "Rock Head"
    },
    nfe: false,
    prevo: "Cubone"
  },
  marowakalolatotem: {
    tags: [],
    num: 105,
    name: "Marowak-Alola-Totem",
    baseSpecies: "Marowak",
    forme: "Alola-Totem",
    types: [
      "Fire",
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 110,
      spa: 50,
      spd: 80,
      spe: 45
    },
    weightkg: 98,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "marowakalolatotem",
    fullname: "pokemon: Marowak-Alola-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 425,
    weighthg: 980,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head"
    },
    nfe: false
  },
  hitmonlee: {
    tags: [],
    num: 106,
    name: "Hitmonlee",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 50,
      atk: 120,
      def: 53,
      spa: 35,
      spd: 110,
      spe: 87
    },
    weightkg: 49.8,
    evoLevel: 20,
    evoCondition: "with an Atk stat > its Def stat",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "hitmonlee",
    fullname: "pokemon: Hitmonlee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Hitmonlee",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 498,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Limber",
      "1": "Reckless",
      H: "Unburden"
    },
    nfe: false,
    prevo: "Tyrogue"
  },
  hitmonchan: {
    tags: [],
    num: 107,
    name: "Hitmonchan",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 50,
      atk: 105,
      def: 79,
      spa: 35,
      spd: 110,
      spe: 76
    },
    weightkg: 50.2,
    evoLevel: 20,
    evoCondition: "with an Atk stat < its Def stat",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "hitmonchan",
    fullname: "pokemon: Hitmonchan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Hitmonchan",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 502,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Iron Fist",
      H: "Inner Focus"
    },
    nfe: false,
    prevo: "Tyrogue"
  },
  lickitung: {
    tags: [],
    num: 108,
    name: "Lickitung",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 90,
      atk: 55,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 30
    },
    weightkg: 65.5,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "lickitung",
    fullname: "pokemon: Lickitung",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lickitung",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 385,
    weighthg: 655,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Oblivious",
      H: "Cloud Nine"
    },
    evos: [
      "Lickilicky"
    ],
    nfe: true
  },
  koffing: {
    tags: [],
    num: 109,
    name: "Koffing",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 65,
      def: 95,
      spa: 60,
      spd: 45,
      spe: 35
    },
    weightkg: 1,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "koffing",
    fullname: "pokemon: Koffing",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Koffing",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 340,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Stench"
    },
    evos: [
      "Weezing",
      "Weezing-Galar"
    ],
    nfe: true
  },
  weezing: {
    tags: [],
    num: 110,
    name: "Weezing",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 120,
      spa: 85,
      spd: 70,
      spe: 60
    },
    weightkg: 9.5,
    evoLevel: 35,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "weezing",
    fullname: "pokemon: Weezing",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Weezing",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Stench"
    },
    nfe: false,
    otherFormes: [
      "Weezing-Galar"
    ],
    formeOrder: [
      "Weezing",
      "Weezing-Galar"
    ],
    formes: [
      "Weezing",
      "Weezing-Galar"
    ],
    prevo: "Koffing"
  },
  weezinggalar: {
    tags: [],
    num: 110,
    name: "Weezing-Galar",
    baseSpecies: "Weezing",
    forme: "Galar",
    types: [
      "Poison",
      "Fairy"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 120,
      spa: 85,
      spd: 70,
      spe: 60
    },
    weightkg: 16,
    evoLevel: 35,
    evoRegion: "Galar",
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "weezinggalar",
    fullname: "pokemon: Weezing-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate",
      "1": "Neutralizing Gas",
      H: "Misty Surge"
    },
    nfe: false,
    prevo: "Koffing"
  },
  rhyhorn: {
    tags: [],
    num: 111,
    name: "Rhyhorn",
    types: [
      "Ground",
      "Rock"
    ],
    baseStats: {
      hp: 80,
      atk: 85,
      def: 95,
      spa: 30,
      spd: 30,
      spe: 25
    },
    weightkg: 115,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "rhyhorn",
    fullname: "pokemon: Rhyhorn",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rhyhorn",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 345,
    weighthg: 1150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      "1": "Rock Head",
      H: "Reckless"
    },
    evos: [
      "Rhydon"
    ],
    nfe: true
  },
  rhydon: {
    tags: [],
    num: 112,
    name: "Rhydon",
    types: [
      "Ground",
      "Rock"
    ],
    baseStats: {
      hp: 105,
      atk: 130,
      def: 120,
      spa: 45,
      spd: 45,
      spe: 40
    },
    weightkg: 120,
    evoLevel: 42,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "rhydon",
    fullname: "pokemon: Rhydon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rhydon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      "1": "Rock Head",
      H: "Reckless"
    },
    evos: [
      "Rhyperior"
    ],
    nfe: true,
    prevo: "Rhyhorn"
  },
  chansey: {
    tags: [],
    num: 113,
    name: "Chansey",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 250,
      atk: 5,
      def: 5,
      spa: 35,
      spd: 105,
      spe: 50
    },
    weightkg: 34.6,
    evoType: "levelHold",
    evoItem: "Oval Stone",
    evoCondition: "during the day",
    eggGroups: [
      "Fairy"
    ],
    canHatch: true,
    tier: "NU",
    doublesTier: "NFE",
    id: "chansey",
    fullname: "pokemon: Chansey",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Chansey",
    forme: "",
    baseForme: "",
    bst: 450,
    weighthg: 346,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Healer"
    },
    evos: [
      "Blissey"
    ],
    nfe: true,
    prevo: "Happiny"
  },
  tangela: {
    tags: [],
    num: 114,
    name: "Tangela",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 65,
      atk: 55,
      def: 115,
      spa: 100,
      spd: 40,
      spe: 60
    },
    weightkg: 35,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "tangela",
    fullname: "pokemon: Tangela",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tangela",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 435,
    weighthg: 350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Regenerator"
    },
    evos: [
      "Tangrowth"
    ],
    nfe: true
  },
  kangaskhan: {
    tags: [],
    num: 115,
    name: "Kangaskhan",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 105,
      atk: 95,
      def: 80,
      spa: 40,
      spd: 80,
      spe: 90
    },
    weightkg: 80,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "kangaskhan",
    fullname: "pokemon: Kangaskhan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kangaskhan",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 490,
    weighthg: 800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Early Bird",
      "1": "Scrappy",
      H: "Inner Focus"
    },
    nfe: false,
    otherFormes: [
      "Kangaskhan-Mega"
    ],
    formeOrder: [
      "Kangaskhan",
      "Kangaskhan-Mega"
    ],
    formes: [
      "Kangaskhan",
      "Kangaskhan-Mega"
    ]
  },
  kangaskhanmega: {
    tags: [],
    num: 115,
    name: "Kangaskhan-Mega",
    baseSpecies: "Kangaskhan",
    forme: "Mega",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 105,
      atk: 125,
      def: 100,
      spa: 60,
      spd: 100,
      spe: 100
    },
    weightkg: 100,
    eggGroups: [
      "Monster"
    ],
    requiredItem: "Kangaskhanite",
    tier: "Illegal",
    id: "kangaskhanmega",
    fullname: "pokemon: Kangaskhan-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Kangaskhanite"
    ],
    bst: 590,
    weighthg: 1000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Kangaskhan",
    changesFrom: "Kangaskhan",
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Parental Bond"
    },
    nfe: false
  },
  horsea: {
    tags: [],
    num: 116,
    name: "Horsea",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 30,
      atk: 40,
      def: 70,
      spa: 70,
      spd: 25,
      spe: 60
    },
    weightkg: 8,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "Illegal",
    id: "horsea",
    fullname: "pokemon: Horsea",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Horsea",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 295,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Sniper",
      H: "Damp"
    },
    evos: [
      "Seadra"
    ],
    nfe: true
  },
  seadra: {
    tags: [],
    num: 117,
    name: "Seadra",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 65,
      def: 95,
      spa: 95,
      spd: 45,
      spe: 85
    },
    weightkg: 25,
    evoLevel: 32,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "Illegal",
    id: "seadra",
    fullname: "pokemon: Seadra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Seadra",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 440,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Sniper",
      H: "Damp"
    },
    evos: [
      "Kingdra"
    ],
    nfe: true,
    prevo: "Horsea"
  },
  goldeen: {
    tags: [],
    num: 118,
    name: "Goldeen",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 45,
      atk: 67,
      def: 60,
      spa: 35,
      spd: 50,
      spe: 63
    },
    weightkg: 15,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "goldeen",
    fullname: "pokemon: Goldeen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Goldeen",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Water Veil",
      H: "Lightning Rod"
    },
    evos: [
      "Seaking"
    ],
    nfe: true
  },
  seaking: {
    tags: [],
    num: 119,
    name: "Seaking",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 80,
      atk: 92,
      def: 65,
      spa: 65,
      spd: 80,
      spe: 68
    },
    weightkg: 39,
    evoLevel: 33,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "seaking",
    fullname: "pokemon: Seaking",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Seaking",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 390,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Water Veil",
      H: "Lightning Rod"
    },
    nfe: false,
    prevo: "Goldeen"
  },
  staryu: {
    tags: [],
    num: 120,
    name: "Staryu",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 30,
      atk: 45,
      def: 55,
      spa: 70,
      spd: 55,
      spe: 85
    },
    weightkg: 34.5,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "staryu",
    fullname: "pokemon: Staryu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Staryu",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 340,
    weighthg: 345,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Illuminate",
      "1": "Natural Cure",
      H: "Analytic"
    },
    evos: [
      "Starmie"
    ],
    nfe: true
  },
  starmie: {
    tags: [],
    num: 121,
    name: "Starmie",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 75,
      def: 85,
      spa: 100,
      spd: 85,
      spe: 115
    },
    weightkg: 80,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "starmie",
    fullname: "pokemon: Starmie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Starmie",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Illuminate",
      "1": "Natural Cure",
      H: "Analytic"
    },
    nfe: false,
    prevo: "Staryu"
  },
  mrmime: {
    tags: [],
    num: 122,
    name: "Mr. Mime",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 65,
      spa: 100,
      spd: 120,
      spe: 90
    },
    weightkg: 54.5,
    evoType: "levelMove",
    evoMove: "Mimic",
    eggGroups: [
      "Human-Like"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "mrmime",
    fullname: "pokemon: Mr. Mime",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mr. Mime",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 460,
    weighthg: 545,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Soundproof",
      "1": "Filter",
      H: "Technician"
    },
    nfe: false,
    otherFormes: [
      "Mr. Mime-Galar"
    ],
    formeOrder: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    formes: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    prevo: "Mime Jr."
  },
  mrmimegalar: {
    tags: [],
    num: 122,
    name: "Mr. Mime-Galar",
    baseSpecies: "Mr. Mime",
    forme: "Galar",
    types: [
      "Ice",
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 100
    },
    weightkg: 56.8,
    evoType: "levelMove",
    evoMove: "Mimic",
    evoRegion: "Galar",
    eggGroups: [
      "Human-Like"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "mrmimegalar",
    fullname: "pokemon: Mr. Mime-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 460,
    weighthg: 568,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit",
      "1": "Screen Cleaner",
      H: "Ice Body"
    },
    evos: [
      "Mr. Rime"
    ],
    nfe: true,
    prevo: "Mime Jr."
  },
  scyther: {
    tags: [],
    num: 123,
    name: "Scyther",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 55,
      spd: 80,
      spe: 105
    },
    weightkg: 56,
    eggGroups: [
      "Bug"
    ],
    tier: "NU",
    doublesTier: "NFE",
    id: "scyther",
    fullname: "pokemon: Scyther",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Scyther",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 500,
    weighthg: 560,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Technician",
      H: "Steadfast"
    },
    evos: [
      "Scizor"
    ],
    nfe: true
  },
  jynx: {
    tags: [],
    num: 124,
    name: "Jynx",
    types: [
      "Ice",
      "Psychic"
    ],
    baseStats: {
      hp: 65,
      atk: 50,
      def: 35,
      spa: 115,
      spd: 95,
      spe: 95
    },
    weightkg: 40.6,
    evoLevel: 30,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "jynx",
    fullname: "pokemon: Jynx",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Jynx",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 406,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Oblivious",
      "1": "Forewarn",
      H: "Dry Skin"
    },
    nfe: false,
    prevo: "Smoochum"
  },
  electabuzz: {
    tags: [],
    num: 125,
    name: "Electabuzz",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 65,
      atk: 83,
      def: 57,
      spa: 95,
      spd: 85,
      spe: 105
    },
    weightkg: 30,
    evoLevel: 30,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "electabuzz",
    fullname: "pokemon: Electabuzz",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Electabuzz",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Static",
      H: "Vital Spirit"
    },
    evos: [
      "Electivire"
    ],
    nfe: true,
    prevo: "Elekid"
  },
  magmar: {
    tags: [],
    num: 126,
    name: "Magmar",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 95,
      def: 57,
      spa: 100,
      spd: 85,
      spe: 93
    },
    weightkg: 44.5,
    evoLevel: 30,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "magmar",
    fullname: "pokemon: Magmar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Magmar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 445,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    evos: [
      "Magmortar"
    ],
    nfe: true,
    prevo: "Magby"
  },
  pinsir: {
    tags: [],
    num: 127,
    name: "Pinsir",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 65,
      atk: 125,
      def: 100,
      spa: 55,
      spd: 70,
      spe: 85
    },
    weightkg: 55,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "pinsir",
    fullname: "pokemon: Pinsir",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pinsir",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 500,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Mold Breaker",
      H: "Moxie"
    },
    nfe: false,
    otherFormes: [
      "Pinsir-Mega"
    ],
    formeOrder: [
      "Pinsir",
      "Pinsir-Mega"
    ],
    formes: [
      "Pinsir",
      "Pinsir-Mega"
    ]
  },
  pinsirmega: {
    tags: [],
    num: 127,
    name: "Pinsir-Mega",
    baseSpecies: "Pinsir",
    forme: "Mega",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 155,
      def: 120,
      spa: 65,
      spd: 90,
      spe: 105
    },
    weightkg: 59,
    eggGroups: [
      "Bug"
    ],
    requiredItem: "Pinsirite",
    tier: "Illegal",
    id: "pinsirmega",
    fullname: "pokemon: Pinsir-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Pinsirite"
    ],
    bst: 600,
    weighthg: 590,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Pinsir",
    changesFrom: "Pinsir",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Aerilate"
    },
    nfe: false
  },
  taurospaldeaaqua: {
    tags: [],
    num: 128,
    name: "Tauros-Paldea-Aqua",
    baseSpecies: "Tauros",
    forme: "Paldea-Aqua",
    types: [
      "Fighting",
      "Water"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    },
    weightkg: 88.4,
    eggGroups: [
      "Field"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "taurospaldeaaqua",
    fullname: "pokemon: Tauros-Paldea-Aqua",
    effectType: "Pokemon",
    kind: "Species",
    gen: 9,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 490,
    weighthg: 884,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    nfe: false
  },
  taurospaldeablaze: {
    tags: [],
    num: 128,
    name: "Tauros-Paldea-Blaze",
    baseSpecies: "Tauros",
    forme: "Paldea-Blaze",
    types: [
      "Fighting",
      "Fire"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    },
    weightkg: 88.4,
    eggGroups: [
      "Field"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "taurospaldeablaze",
    fullname: "pokemon: Tauros-Paldea-Blaze",
    effectType: "Pokemon",
    kind: "Species",
    gen: 9,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 490,
    weighthg: 884,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    nfe: false
  },
  taurospaldeacombat: {
    tags: [],
    num: 128,
    name: "Tauros-Paldea-Combat",
    baseSpecies: "Tauros",
    forme: "Paldea-Combat",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 105,
      spa: 30,
      spd: 70,
      spe: 100
    },
    weightkg: 88.4,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "taurospaldeacombat",
    fullname: "pokemon: Tauros-Paldea-Combat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 9,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 490,
    weighthg: 884,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Intimidate",
      "1": "Anger Point",
      H: "Cud Chew"
    },
    nfe: false
  },
  magikarp: {
    tags: [],
    num: 129,
    name: "Magikarp",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 20,
      atk: 10,
      def: 55,
      spa: 15,
      spd: 20,
      spe: 80
    },
    weightkg: 10,
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    tier: "LC",
    id: "magikarp",
    fullname: "pokemon: Magikarp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Magikarp",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 200,
    weighthg: 100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Rattled"
    },
    evos: [
      "Gyarados"
    ],
    nfe: true
  },
  gyarados: {
    tags: [],
    num: 130,
    name: "Gyarados",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 95,
      atk: 125,
      def: 79,
      spa: 60,
      spd: 100,
      spe: 81
    },
    weightkg: 235,
    evoLevel: 20,
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "gyarados",
    fullname: "pokemon: Gyarados",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gyarados",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 540,
    weighthg: 2350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      H: "Moxie"
    },
    nfe: false,
    otherFormes: [
      "Gyarados-Mega"
    ],
    formeOrder: [
      "Gyarados",
      "Gyarados-Mega"
    ],
    formes: [
      "Gyarados",
      "Gyarados-Mega"
    ],
    prevo: "Magikarp"
  },
  gyaradosmega: {
    tags: [],
    num: 130,
    name: "Gyarados-Mega",
    baseSpecies: "Gyarados",
    forme: "Mega",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 155,
      def: 109,
      spa: 70,
      spd: 130,
      spe: 81
    },
    weightkg: 305,
    eggGroups: [
      "Water 2",
      "Dragon"
    ],
    requiredItem: "Gyaradosite",
    tier: "Illegal",
    id: "gyaradosmega",
    fullname: "pokemon: Gyarados-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Gyaradosite"
    ],
    bst: 640,
    weighthg: 3050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Gyarados",
    changesFrom: "Gyarados",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mold Breaker"
    },
    nfe: false
  },
  lapras: {
    tags: [],
    num: 131,
    name: "Lapras",
    types: [
      "Water",
      "Ice"
    ],
    baseStats: {
      hp: 130,
      atk: 85,
      def: 80,
      spa: 85,
      spd: 95,
      spe: 60
    },
    weightkg: 220,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    canGigantamax: "G-Max Resonance",
    tier: "Illegal",
    id: "lapras",
    fullname: "pokemon: Lapras",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lapras",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 535,
    weighthg: 2200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Shell Armor",
      H: "Hydration"
    },
    nfe: false
  },
  laprasgmax: {
    tags: [],
    num: 131,
    name: "Lapras-Gmax",
    baseSpecies: "Lapras",
    forme: "Gmax",
    types: [
      "Water",
      "Ice"
    ],
    baseStats: {
      hp: 130,
      atk: 85,
      def: 80,
      spa: 85,
      spd: 95,
      spe: 60
    },
    weightkg: 0,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    changesFrom: "Lapras",
    tier: "Illegal",
    id: "laprasgmax",
    fullname: "pokemon: Lapras-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 535,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Shell Armor",
      H: "Hydration"
    },
    nfe: false
  },
  ditto: {
    tags: [],
    num: 132,
    name: "Ditto",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 48,
      atk: 48,
      def: 48,
      spa: 48,
      spd: 48,
      spe: 48
    },
    weightkg: 4,
    eggGroups: [
      "Ditto"
    ],
    tier: "RU",
    doublesTier: "DUU",
    id: "ditto",
    fullname: "pokemon: Ditto",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Ditto",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 288,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Limber",
      H: "Imposter"
    },
    nfe: false
  },
  eevee: {
    tags: [],
    num: 133,
    name: "Eevee",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 55,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 55
    },
    weightkg: 6.5,
    eggGroups: [
      "Field"
    ],
    canGigantamax: "G-Max Cuddle",
    tier: "LC",
    id: "eevee",
    fullname: "pokemon: Eevee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Eevee",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 325,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Run Away",
      "1": "Adaptability",
      H: "Anticipation"
    },
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
    nfe: true
  },
  eeveegmax: {
    tags: [],
    num: 133,
    name: "Eevee-Gmax",
    baseSpecies: "Eevee",
    forme: "Gmax",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 55,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 55
    },
    weightkg: 0,
    eggGroups: [
      "Field"
    ],
    changesFrom: "Eevee",
    tier: "Illegal",
    id: "eeveegmax",
    fullname: "pokemon: Eevee-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Run Away",
      "1": "Adaptability",
      H: "Anticipation"
    },
    nfe: false
  },
  vaporeon: {
    tags: [],
    num: 134,
    name: "Vaporeon",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 130,
      atk: 65,
      def: 60,
      spa: 110,
      spd: 95,
      spe: 65
    },
    weightkg: 29,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "vaporeon",
    fullname: "pokemon: Vaporeon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Vaporeon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 290,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Water Absorb",
      H: "Hydration"
    },
    nfe: false,
    prevo: "Eevee"
  },
  jolteon: {
    tags: [],
    num: 135,
    name: "Jolteon",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spa: 110,
      spd: 95,
      spe: 130
    },
    weightkg: 24.5,
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "jolteon",
    fullname: "pokemon: Jolteon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Jolteon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 245,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Volt Absorb",
      H: "Quick Feet"
    },
    nfe: false,
    prevo: "Eevee"
  },
  flareon: {
    tags: [],
    num: 136,
    name: "Flareon",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 130,
      def: 60,
      spa: 95,
      spd: 110,
      spe: 65
    },
    weightkg: 25,
    evoType: "useItem",
    evoItem: "Fire Stone",
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "flareon",
    fullname: "pokemon: Flareon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Flareon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Flash Fire",
      H: "Guts"
    },
    nfe: false,
    prevo: "Eevee"
  },
  porygon: {
    tags: [],
    num: 137,
    name: "Porygon",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 65,
      atk: 60,
      def: 70,
      spa: 85,
      spd: 75,
      spe: 40
    },
    weightkg: 36.5,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "porygon",
    fullname: "pokemon: Porygon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Porygon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 395,
    weighthg: 365,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Trace",
      "1": "Download",
      H: "Analytic"
    },
    evos: [
      "Porygon2"
    ],
    nfe: true
  },
  omanyte: {
    tags: [],
    num: 138,
    name: "Omanyte",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 35,
      atk: 40,
      def: 100,
      spa: 90,
      spd: 55,
      spe: 35
    },
    weightkg: 7.5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "omanyte",
    fullname: "pokemon: Omanyte",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Omanyte",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    evos: [
      "Omastar"
    ],
    nfe: true
  },
  omastar: {
    tags: [],
    num: 139,
    name: "Omastar",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 60,
      def: 125,
      spa: 115,
      spd: 70,
      spe: 55
    },
    weightkg: 35,
    evoLevel: 40,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "omastar",
    fullname: "pokemon: Omastar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Omastar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Omanyte"
  },
  kabuto: {
    tags: [],
    num: 140,
    name: "Kabuto",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 30,
      atk: 80,
      def: 90,
      spa: 55,
      spd: 45,
      spe: 55
    },
    weightkg: 11.5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "kabuto",
    fullname: "pokemon: Kabuto",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kabuto",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Battle Armor",
      H: "Weak Armor"
    },
    evos: [
      "Kabutops"
    ],
    nfe: true
  },
  kabutops: {
    tags: [],
    num: 141,
    name: "Kabutops",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 60,
      atk: 115,
      def: 105,
      spa: 65,
      spd: 70,
      spe: 80
    },
    weightkg: 40.5,
    evoLevel: 40,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "kabutops",
    fullname: "pokemon: Kabutops",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kabutops",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 405,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Battle Armor",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Kabuto"
  },
  aerodactyl: {
    tags: [],
    num: 142,
    name: "Aerodactyl",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 105,
      def: 65,
      spa: 60,
      spd: 75,
      spe: 130
    },
    weightkg: 59,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "aerodactyl",
    fullname: "pokemon: Aerodactyl",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aerodactyl",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 515,
    weighthg: 590,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Rock Head",
      "1": "Pressure",
      H: "Unnerve"
    },
    nfe: false,
    otherFormes: [
      "Aerodactyl-Mega"
    ],
    formeOrder: [
      "Aerodactyl",
      "Aerodactyl-Mega"
    ],
    formes: [
      "Aerodactyl",
      "Aerodactyl-Mega"
    ]
  },
  aerodactylmega: {
    tags: [],
    num: 142,
    name: "Aerodactyl-Mega",
    baseSpecies: "Aerodactyl",
    forme: "Mega",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 135,
      def: 85,
      spa: 70,
      spd: 95,
      spe: 150
    },
    weightkg: 79,
    eggGroups: [
      "Flying"
    ],
    requiredItem: "Aerodactylite",
    tier: "Illegal",
    id: "aerodactylmega",
    fullname: "pokemon: Aerodactyl-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Aerodactylite"
    ],
    bst: 615,
    weighthg: 790,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Aerodactyl",
    changesFrom: "Aerodactyl",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Tough Claws"
    },
    nfe: false
  },
  snorlax: {
    tags: [],
    num: 143,
    name: "Snorlax",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 160,
      atk: 110,
      def: 65,
      spa: 65,
      spd: 110,
      spe: 30
    },
    weightkg: 460,
    evoType: "levelFriendship",
    eggGroups: [
      "Monster"
    ],
    canHatch: true,
    canGigantamax: "G-Max Replenish",
    tier: "Illegal",
    id: "snorlax",
    fullname: "pokemon: Snorlax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    baseSpecies: "Snorlax",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 540,
    weighthg: 4600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Immunity",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    nfe: false,
    prevo: "Munchlax"
  },
  snorlaxgmax: {
    tags: [],
    num: 143,
    name: "Snorlax-Gmax",
    baseSpecies: "Snorlax",
    forme: "Gmax",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 160,
      atk: 110,
      def: 65,
      spa: 65,
      spd: 110,
      spe: 30
    },
    weightkg: 0,
    eggGroups: [
      "Monster"
    ],
    changesFrom: "Snorlax",
    tier: "Illegal",
    id: "snorlaxgmax",
    fullname: "pokemon: Snorlax-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 540,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Immunity",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    nfe: false
  },
  dratini: {
    tags: [],
    num: 147,
    name: "Dratini",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 41,
      atk: 64,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 50
    },
    weightkg: 3.3,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "LC",
    id: "dratini",
    fullname: "pokemon: Dratini",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dratini",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 33,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Marvel Scale"
    },
    evos: [
      "Dragonair"
    ],
    nfe: true
  },
  dragonair: {
    tags: [],
    num: 148,
    name: "Dragonair",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 61,
      atk: 84,
      def: 65,
      spa: 70,
      spd: 70,
      spe: 70
    },
    weightkg: 16.5,
    evoLevel: 30,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "dragonair",
    fullname: "pokemon: Dragonair",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dragonair",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 420,
    weighthg: 165,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Marvel Scale"
    },
    evos: [
      "Dragonite"
    ],
    nfe: true,
    prevo: "Dratini"
  },
  dragonite: {
    tags: [],
    num: 149,
    name: "Dragonite",
    types: [
      "Dragon",
      "Flying"
    ],
    baseStats: {
      hp: 91,
      atk: 134,
      def: 95,
      spa: 100,
      spd: 100,
      spe: 80
    },
    weightkg: 210,
    evoLevel: 55,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "dragonite",
    fullname: "pokemon: Dragonite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 1,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dragonite",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 2100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      H: "Multiscale"
    },
    nfe: false,
    prevo: "Dragonair"
  },
  mewtwomegax: {
    tags: [
      "Restricted Legendary"
    ],
    num: 150,
    name: "Mewtwo-Mega-X",
    baseSpecies: "Mewtwo",
    forme: "Mega-X",
    types: [
      "Psychic",
      "Fighting"
    ],
    baseStats: {
      hp: 106,
      atk: 190,
      def: 100,
      spa: 154,
      spd: 100,
      spe: 130
    },
    weightkg: 127,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Mewtwonite X",
    tier: "Illegal",
    id: "mewtwomegax",
    fullname: "pokemon: Mewtwo-Mega-X",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Mewtwonite X"
    ],
    bst: 780,
    weighthg: 1270,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Mewtwo",
    changesFrom: "Mewtwo",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Steadfast"
    },
    nfe: false
  },
  mewtwomegay: {
    tags: [
      "Restricted Legendary"
    ],
    num: 150,
    name: "Mewtwo-Mega-Y",
    baseSpecies: "Mewtwo",
    forme: "Mega-Y",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 106,
      atk: 150,
      def: 70,
      spa: 194,
      spd: 120,
      spe: 140
    },
    weightkg: 33,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Mewtwonite Y",
    tier: "Illegal",
    id: "mewtwomegay",
    fullname: "pokemon: Mewtwo-Mega-Y",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Mewtwonite Y"
    ],
    bst: 780,
    weighthg: 330,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Mewtwo",
    changesFrom: "Mewtwo",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Insomnia"
    },
    nfe: false
  },
  chikorita: {
    tags: [],
    num: 152,
    name: "Chikorita",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 45,
      atk: 49,
      def: 65,
      spa: 49,
      spd: 65,
      spe: 45
    },
    weightkg: 6.4,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "chikorita",
    fullname: "pokemon: Chikorita",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chikorita",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 318,
    weighthg: 64,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    evos: [
      "Bayleef"
    ],
    nfe: true
  },
  bayleef: {
    tags: [],
    num: 153,
    name: "Bayleef",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 62,
      def: 80,
      spa: 63,
      spd: 80,
      spe: 60
    },
    weightkg: 15.8,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "bayleef",
    fullname: "pokemon: Bayleef",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bayleef",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 158,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    evos: [
      "Meganium"
    ],
    nfe: true,
    prevo: "Chikorita"
  },
  meganium: {
    tags: [],
    num: 154,
    name: "Meganium",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 80,
      atk: 82,
      def: 100,
      spa: 83,
      spd: 100,
      spe: 80
    },
    weightkg: 100.5,
    evoLevel: 32,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "meganium",
    fullname: "pokemon: Meganium",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Meganium",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Leaf Guard"
    },
    nfe: false,
    prevo: "Bayleef"
  },
  cyndaquil: {
    tags: [],
    num: 155,
    name: "Cyndaquil",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 39,
      atk: 52,
      def: 43,
      spa: 60,
      spd: 50,
      spe: 65
    },
    weightkg: 7.9,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "cyndaquil",
    fullname: "pokemon: Cyndaquil",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cyndaquil",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 309,
    weighthg: 79,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    evos: [
      "Quilava"
    ],
    nfe: true
  },
  quilava: {
    tags: [],
    num: 156,
    name: "Quilava",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 58,
      atk: 64,
      def: 58,
      spa: 80,
      spd: 65,
      spe: 80
    },
    weightkg: 19,
    evoLevel: 14,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "quilava",
    fullname: "pokemon: Quilava",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Quilava",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 405,
    weighthg: 190,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    evos: [
      "Typhlosion"
    ],
    nfe: true,
    prevo: "Cyndaquil"
  },
  typhlosion: {
    tags: [],
    num: 157,
    name: "Typhlosion",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 78,
      atk: 84,
      def: 78,
      spa: 109,
      spd: 85,
      spe: 100
    },
    weightkg: 79.5,
    evoLevel: 36,
    eggGroups: [
      "Field"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "typhlosion",
    fullname: "pokemon: Typhlosion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Typhlosion",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 534,
    weighthg: 795,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Flash Fire"
    },
    nfe: false,
    prevo: "Quilava"
  },
  totodile: {
    tags: [],
    num: 158,
    name: "Totodile",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 64,
      spa: 44,
      spd: 48,
      spe: 43
    },
    weightkg: 9.5,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "totodile",
    fullname: "pokemon: Totodile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Totodile",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 314,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    evos: [
      "Croconaw"
    ],
    nfe: true
  },
  croconaw: {
    tags: [],
    num: 159,
    name: "Croconaw",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 65,
      atk: 80,
      def: 80,
      spa: 59,
      spd: 63,
      spe: 58
    },
    weightkg: 25,
    evoLevel: 18,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "croconaw",
    fullname: "pokemon: Croconaw",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Croconaw",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    evos: [
      "Feraligatr"
    ],
    nfe: true,
    prevo: "Totodile"
  },
  feraligatr: {
    tags: [],
    num: 160,
    name: "Feraligatr",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 85,
      atk: 105,
      def: 100,
      spa: 79,
      spd: 83,
      spe: 78
    },
    weightkg: 88.8,
    evoLevel: 30,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "feraligatr",
    fullname: "pokemon: Feraligatr",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Feraligatr",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 888,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Croconaw"
  },
  sentret: {
    tags: [],
    num: 161,
    name: "Sentret",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 35,
      atk: 46,
      def: 34,
      spa: 35,
      spd: 45,
      spe: 20
    },
    weightkg: 6,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "sentret",
    fullname: "pokemon: Sentret",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sentret",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 215,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Frisk"
    },
    evos: [
      "Furret"
    ],
    nfe: true
  },
  furret: {
    tags: [],
    num: 162,
    name: "Furret",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 85,
      atk: 76,
      def: 64,
      spa: 45,
      spd: 55,
      spe: 90
    },
    weightkg: 32.5,
    evoLevel: 15,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "furret",
    fullname: "pokemon: Furret",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Furret",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 415,
    weighthg: 325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Frisk"
    },
    nfe: false,
    prevo: "Sentret"
  },
  hoothoot: {
    tags: [],
    num: 163,
    name: "Hoothoot",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 30,
      def: 30,
      spa: 36,
      spd: 56,
      spe: 50
    },
    weightkg: 21.2,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "hoothoot",
    fullname: "pokemon: Hoothoot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Hoothoot",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 262,
    weighthg: 212,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Keen Eye",
      H: "Tinted Lens"
    },
    evos: [
      "Noctowl"
    ],
    nfe: true
  },
  noctowl: {
    tags: [],
    num: 164,
    name: "Noctowl",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 100,
      atk: 50,
      def: 50,
      spa: 86,
      spd: 96,
      spe: 70
    },
    weightkg: 40.8,
    evoLevel: 20,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "noctowl",
    fullname: "pokemon: Noctowl",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Noctowl",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 452,
    weighthg: 408,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Keen Eye",
      H: "Tinted Lens"
    },
    nfe: false,
    prevo: "Hoothoot"
  },
  ledyba: {
    tags: [],
    num: 165,
    name: "Ledyba",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 20,
      def: 30,
      spa: 40,
      spd: 80,
      spe: 55
    },
    weightkg: 10.8,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "ledyba",
    fullname: "pokemon: Ledyba",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ledyba",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 265,
    weighthg: 108,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Early Bird",
      H: "Rattled"
    },
    evos: [
      "Ledian"
    ],
    nfe: true
  },
  ledian: {
    tags: [],
    num: 166,
    name: "Ledian",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 35,
      def: 50,
      spa: 55,
      spd: 110,
      spe: 85
    },
    weightkg: 35.6,
    evoLevel: 18,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "ledian",
    fullname: "pokemon: Ledian",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ledian",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 390,
    weighthg: 356,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Early Bird",
      H: "Iron Fist"
    },
    nfe: false,
    prevo: "Ledyba"
  },
  spinarak: {
    tags: [],
    num: 167,
    name: "Spinarak",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 60,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 30
    },
    weightkg: 8.5,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "spinarak",
    fullname: "pokemon: Spinarak",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Spinarak",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Insomnia",
      H: "Sniper"
    },
    evos: [
      "Ariados"
    ],
    nfe: true
  },
  ariados: {
    tags: [],
    num: 168,
    name: "Ariados",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 40
    },
    weightkg: 33.5,
    evoLevel: 22,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "ariados",
    fullname: "pokemon: Ariados",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ariados",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 400,
    weighthg: 335,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Insomnia",
      H: "Sniper"
    },
    nfe: false,
    prevo: "Spinarak"
  },
  crobat: {
    tags: [],
    num: 169,
    name: "Crobat",
    types: [
      "Poison",
      "Flying"
    ],
    baseStats: {
      hp: 85,
      atk: 90,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 130
    },
    weightkg: 75,
    evoType: "levelFriendship",
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "crobat",
    fullname: "pokemon: Crobat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Crobat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 750,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      H: "Infiltrator"
    },
    nfe: false,
    prevo: "Golbat"
  },
  chinchou: {
    tags: [],
    num: 170,
    name: "Chinchou",
    types: [
      "Water",
      "Electric"
    ],
    baseStats: {
      hp: 75,
      atk: 38,
      def: 38,
      spa: 56,
      spd: 56,
      spe: 67
    },
    weightkg: 12,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "chinchou",
    fullname: "pokemon: Chinchou",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chinchou",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 330,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Volt Absorb",
      "1": "Illuminate",
      H: "Water Absorb"
    },
    evos: [
      "Lanturn"
    ],
    nfe: true
  },
  lanturn: {
    tags: [],
    num: 171,
    name: "Lanturn",
    types: [
      "Water",
      "Electric"
    ],
    baseStats: {
      hp: 125,
      atk: 58,
      def: 58,
      spa: 76,
      spd: 76,
      spe: 67
    },
    weightkg: 22.5,
    evoLevel: 27,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "lanturn",
    fullname: "pokemon: Lanturn",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lanturn",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 460,
    weighthg: 225,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Volt Absorb",
      "1": "Illuminate",
      H: "Water Absorb"
    },
    nfe: false,
    prevo: "Chinchou"
  },
  pichu: {
    tags: [],
    num: 172,
    name: "Pichu",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 20,
      atk: 40,
      def: 15,
      spa: 35,
      spd: 35,
      spe: 60
    },
    weightkg: 2,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "pichu",
    fullname: "pokemon: Pichu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pichu",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 205,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Lightning Rod"
    },
    evos: [
      "Pikachu"
    ],
    nfe: true,
    otherFormes: [
      "Pichu-Spiky-eared"
    ],
    formeOrder: [
      "Pichu",
      "Pichu-Spiky-eared"
    ],
    formes: [
      "Pichu",
      "Pichu-Spiky-eared"
    ]
  },
  pichuspikyeared: {
    tags: [],
    num: 172,
    name: "Pichu-Spiky-eared",
    baseSpecies: "Pichu",
    forme: "Spiky-eared",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 20,
      atk: 40,
      def: 15,
      spa: 35,
      spd: 35,
      spe: 60
    },
    weightkg: 2,
    eggGroups: [
      "Undiscovered"
    ],
    gen: 4,
    tier: "Illegal",
    id: "pichuspikyeared",
    fullname: "pokemon: Pichu-Spiky-eared",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 205,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static"
    },
    nfe: false
  },
  cleffa: {
    tags: [],
    num: 173,
    name: "Cleffa",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 50,
      atk: 25,
      def: 28,
      spa: 45,
      spd: 55,
      spe: 15
    },
    weightkg: 3,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "cleffa",
    fullname: "pokemon: Cleffa",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cleffa",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 218,
    weighthg: 30,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Magic Guard",
      H: "Friend Guard"
    },
    evos: [
      "Clefairy"
    ],
    nfe: true
  },
  igglybuff: {
    tags: [],
    num: 174,
    name: "Igglybuff",
    types: [
      "Normal",
      "Fairy"
    ],
    baseStats: {
      hp: 90,
      atk: 30,
      def: 15,
      spa: 40,
      spd: 20,
      spe: 15
    },
    weightkg: 1,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "igglybuff",
    fullname: "pokemon: Igglybuff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Igglybuff",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 210,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Competitive",
      H: "Friend Guard"
    },
    evos: [
      "Jigglypuff"
    ],
    nfe: true
  },
  togepi: {
    tags: [],
    num: 175,
    name: "Togepi",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 35,
      atk: 20,
      def: 65,
      spa: 40,
      spd: 65,
      spe: 20
    },
    weightkg: 1.5,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "togepi",
    fullname: "pokemon: Togepi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Togepi",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 245,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    evos: [
      "Togetic"
    ],
    nfe: true
  },
  togetic: {
    tags: [],
    num: 176,
    name: "Togetic",
    types: [
      "Fairy",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 40,
      def: 85,
      spa: 80,
      spd: 105,
      spe: 40
    },
    weightkg: 3.2,
    evoType: "levelFriendship",
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    tier: "Illegal",
    id: "togetic",
    fullname: "pokemon: Togetic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Togetic",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 32,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    evos: [
      "Togekiss"
    ],
    nfe: true,
    prevo: "Togepi"
  },
  natu: {
    tags: [],
    num: 177,
    name: "Natu",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 50,
      def: 45,
      spa: 70,
      spd: 45,
      spe: 70
    },
    weightkg: 2,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "natu",
    fullname: "pokemon: Natu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Natu",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Synchronize",
      "1": "Early Bird",
      H: "Magic Bounce"
    },
    evos: [
      "Xatu"
    ],
    nfe: true
  },
  xatu: {
    tags: [],
    num: 178,
    name: "Xatu",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 75,
      def: 70,
      spa: 95,
      spd: 70,
      spe: 95
    },
    weightkg: 15,
    evoLevel: 25,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "xatu",
    fullname: "pokemon: Xatu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Xatu",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 470,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Synchronize",
      "1": "Early Bird",
      H: "Magic Bounce"
    },
    nfe: false,
    prevo: "Natu"
  },
  mareep: {
    tags: [],
    num: 179,
    name: "Mareep",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 55,
      atk: 40,
      def: 40,
      spa: 65,
      spd: 45,
      spe: 35
    },
    weightkg: 7.8,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "LC",
    id: "mareep",
    fullname: "pokemon: Mareep",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mareep",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 280,
    weighthg: 78,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    evos: [
      "Flaaffy"
    ],
    nfe: true
  },
  flaaffy: {
    tags: [],
    num: 180,
    name: "Flaaffy",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 70,
      atk: 55,
      def: 55,
      spa: 80,
      spd: 60,
      spe: 45
    },
    weightkg: 13.3,
    evoLevel: 15,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "NFE",
    id: "flaaffy",
    fullname: "pokemon: Flaaffy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Flaaffy",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 365,
    weighthg: 133,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    evos: [
      "Ampharos"
    ],
    nfe: true,
    prevo: "Mareep"
  },
  ampharos: {
    tags: [],
    num: 181,
    name: "Ampharos",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 90,
      atk: 75,
      def: 85,
      spa: 115,
      spd: 90,
      spe: 55
    },
    weightkg: 61.5,
    evoLevel: 30,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "ampharos",
    fullname: "pokemon: Ampharos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Ampharos",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 615,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Plus"
    },
    nfe: false,
    otherFormes: [
      "Ampharos-Mega"
    ],
    formeOrder: [
      "Ampharos",
      "Ampharos-Mega"
    ],
    formes: [
      "Ampharos",
      "Ampharos-Mega"
    ],
    prevo: "Flaaffy"
  },
  ampharosmega: {
    tags: [],
    num: 181,
    name: "Ampharos-Mega",
    baseSpecies: "Ampharos",
    forme: "Mega",
    types: [
      "Electric",
      "Dragon"
    ],
    baseStats: {
      hp: 90,
      atk: 95,
      def: 105,
      spa: 165,
      spd: 110,
      spe: 45
    },
    weightkg: 61.5,
    eggGroups: [
      "Monster",
      "Field"
    ],
    requiredItem: "Ampharosite",
    tier: "Illegal",
    id: "ampharosmega",
    fullname: "pokemon: Ampharos-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Ampharosite"
    ],
    bst: 610,
    weighthg: 615,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Ampharos",
    changesFrom: "Ampharos",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mold Breaker"
    },
    nfe: false
  },
  bellossom: {
    tags: [],
    num: 182,
    name: "Bellossom",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 95,
      spa: 90,
      spd: 100,
      spe: 50
    },
    weightkg: 5.8,
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "bellossom",
    fullname: "pokemon: Bellossom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bellossom",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 58,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      H: "Healer"
    },
    nfe: false,
    prevo: "Gloom"
  },
  marill: {
    tags: [],
    num: 183,
    name: "Marill",
    types: [
      "Water",
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 20,
      def: 50,
      spa: 20,
      spd: 50,
      spe: 40
    },
    weightkg: 8.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    canHatch: true,
    tier: "NFE",
    id: "marill",
    fullname: "pokemon: Marill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Marill",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    bst: 250,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    evos: [
      "Azumarill"
    ],
    nfe: true,
    prevo: "Azurill"
  },
  azumarill: {
    tags: [],
    num: 184,
    name: "Azumarill",
    types: [
      "Water",
      "Fairy"
    ],
    baseStats: {
      hp: 100,
      atk: 50,
      def: 80,
      spa: 60,
      spd: 80,
      spe: 50
    },
    weightkg: 28.5,
    evoLevel: 18,
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "azumarill",
    fullname: "pokemon: Azumarill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Azumarill",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 420,
    weighthg: 285,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    nfe: false,
    prevo: "Marill"
  },
  sudowoodo: {
    tags: [],
    num: 185,
    name: "Sudowoodo",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 70,
      atk: 100,
      def: 115,
      spa: 30,
      spd: 65,
      spe: 30
    },
    weightkg: 38,
    evoType: "levelMove",
    evoMove: "Mimic",
    eggGroups: [
      "Mineral"
    ],
    canHatch: true,
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "sudowoodo",
    fullname: "pokemon: Sudowoodo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sudowoodo",
    forme: "",
    baseForme: "",
    bst: 410,
    weighthg: 380,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Rattled"
    },
    nfe: false,
    prevo: "Bonsly"
  },
  politoed: {
    tags: [],
    num: 186,
    name: "Politoed",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 90,
      atk: 75,
      def: 75,
      spa: 90,
      spd: 100,
      spe: 70
    },
    weightkg: 33.9,
    evoType: "trade",
    evoItem: "King's Rock",
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "politoed",
    fullname: "pokemon: Politoed",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Politoed",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 339,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Damp",
      H: "Drizzle"
    },
    nfe: false,
    prevo: "Poliwhirl"
  },
  hoppip: {
    tags: [],
    num: 187,
    name: "Hoppip",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 35,
      atk: 35,
      def: 40,
      spa: 35,
      spd: 55,
      spe: 50
    },
    weightkg: 0.5,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "LC",
    id: "hoppip",
    fullname: "pokemon: Hoppip",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hoppip",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 250,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    evos: [
      "Skiploom"
    ],
    nfe: true
  },
  skiploom: {
    tags: [],
    num: 188,
    name: "Skiploom",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 45,
      def: 50,
      spa: 45,
      spd: 65,
      spe: 80
    },
    weightkg: 1,
    evoLevel: 18,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "NFE",
    id: "skiploom",
    fullname: "pokemon: Skiploom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Skiploom",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 340,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    evos: [
      "Jumpluff"
    ],
    nfe: true,
    prevo: "Hoppip"
  },
  jumpluff: {
    tags: [],
    num: 189,
    name: "Jumpluff",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 55,
      def: 70,
      spa: 55,
      spd: 95,
      spe: 110
    },
    weightkg: 3,
    evoLevel: 27,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "jumpluff",
    fullname: "pokemon: Jumpluff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Jumpluff",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 460,
    weighthg: 30,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Infiltrator"
    },
    nfe: false,
    prevo: "Skiploom"
  },
  aipom: {
    tags: [],
    num: 190,
    name: "Aipom",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 70,
      def: 55,
      spa: 40,
      spd: 55,
      spe: 85
    },
    weightkg: 11.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "aipom",
    fullname: "pokemon: Aipom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aipom",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 360,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Pickup",
      H: "Skill Link"
    },
    evos: [
      "Ambipom"
    ],
    nfe: true
  },
  sunkern: {
    tags: [],
    num: 191,
    name: "Sunkern",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 30,
      atk: 30,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 30
    },
    weightkg: 1.8,
    eggGroups: [
      "Grass"
    ],
    tier: "LC",
    id: "sunkern",
    fullname: "pokemon: Sunkern",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sunkern",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 180,
    weighthg: 18,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Early Bird"
    },
    evos: [
      "Sunflora"
    ],
    nfe: true
  },
  sunflora: {
    tags: [],
    num: 192,
    name: "Sunflora",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 75,
      def: 55,
      spa: 105,
      spd: 85,
      spe: 30
    },
    weightkg: 8.5,
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "sunflora",
    fullname: "pokemon: Sunflora",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sunflora",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 425,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Early Bird"
    },
    nfe: false,
    prevo: "Sunkern"
  },
  yanma: {
    tags: [],
    num: 193,
    name: "Yanma",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 65,
      def: 45,
      spa: 75,
      spd: 45,
      spe: 95
    },
    weightkg: 38,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "yanma",
    fullname: "pokemon: Yanma",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Yanma",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 390,
    weighthg: 380,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Speed Boost",
      "1": "Compound Eyes",
      H: "Frisk"
    },
    evos: [
      "Yanmega"
    ],
    nfe: true
  },
  wooper: {
    tags: [],
    num: 194,
    name: "Wooper",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 55,
      atk: 45,
      def: 45,
      spa: 25,
      spd: 25,
      spe: 15
    },
    weightkg: 8.5,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "LC",
    id: "wooper",
    fullname: "pokemon: Wooper",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Wooper",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 210,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Damp",
      "1": "Water Absorb",
      H: "Unaware"
    },
    evos: [
      "Quagsire"
    ],
    nfe: true,
    otherFormes: [
      "Wooper-Paldea"
    ],
    formeOrder: [
      "Wooper",
      "Wooper-Paldea"
    ],
    formes: [
      "Wooper",
      "Wooper-Paldea"
    ]
  },
  wooperpaldea: {
    tags: [],
    num: 194,
    name: "Wooper-Paldea",
    baseSpecies: "Wooper",
    forme: "Paldea",
    types: [
      "Poison",
      "Ground"
    ],
    baseStats: {
      hp: 55,
      atk: 45,
      def: 45,
      spa: 25,
      spd: 25,
      spe: 15
    },
    weightkg: 8.5,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "LC",
    id: "wooperpaldea",
    fullname: "pokemon: Wooper-Paldea",
    effectType: "Pokemon",
    kind: "Species",
    gen: 9,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 210,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Water Absorb",
      H: "Unaware"
    },
    evos: [
      "Clodsire"
    ],
    nfe: true
  },
  quagsire: {
    tags: [],
    num: 195,
    name: "Quagsire",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 95,
      atk: 85,
      def: 85,
      spa: 65,
      spd: 65,
      spe: 35
    },
    weightkg: 75,
    evoLevel: 20,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "quagsire",
    fullname: "pokemon: Quagsire",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Quagsire",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 430,
    weighthg: 750,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Damp",
      "1": "Water Absorb",
      H: "Unaware"
    },
    nfe: false,
    prevo: "Wooper"
  },
  espeon: {
    tags: [],
    num: 196,
    name: "Espeon",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 65,
      atk: 65,
      def: 60,
      spa: 130,
      spd: 95,
      spe: 110
    },
    weightkg: 26.5,
    evoType: "levelFriendship",
    evoCondition: "during the day",
    eggGroups: [
      "Field"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "espeon",
    fullname: "pokemon: Espeon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Espeon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 265,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Synchronize",
      H: "Magic Bounce"
    },
    nfe: false,
    prevo: "Eevee"
  },
  umbreon: {
    tags: [],
    num: 197,
    name: "Umbreon",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 65,
      def: 110,
      spa: 60,
      spd: 130,
      spe: 65
    },
    weightkg: 27,
    evoType: "levelFriendship",
    evoCondition: "at night",
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "umbreon",
    fullname: "pokemon: Umbreon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Umbreon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 270,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Synchronize",
      H: "Inner Focus"
    },
    nfe: false,
    prevo: "Eevee"
  },
  murkrow: {
    tags: [],
    num: 198,
    name: "Murkrow",
    types: [
      "Dark",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 42,
      spa: 85,
      spd: 42,
      spe: 91
    },
    weightkg: 2.1,
    eggGroups: [
      "Flying"
    ],
    tier: "NFE",
    doublesTier: "DOU",
    id: "murkrow",
    fullname: "pokemon: Murkrow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Murkrow",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 405,
    weighthg: 21,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Super Luck",
      H: "Prankster"
    },
    evos: [
      "Honchkrow"
    ],
    nfe: true
  },
  slowking: {
    tags: [],
    num: 199,
    name: "Slowking",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 75,
      def: 80,
      spa: 100,
      spd: 110,
      spe: 30
    },
    weightkg: 79.5,
    evoType: "trade",
    evoItem: "King's Rock",
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "slowking",
    fullname: "pokemon: Slowking",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Slowking",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 795,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Own Tempo",
      H: "Regenerator"
    },
    nfe: false,
    prevo: "Slowpoke"
  },
  misdreavus: {
    tags: [],
    num: 200,
    name: "Misdreavus",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 85,
      spd: 85,
      spe: 85
    },
    weightkg: 1,
    eggGroups: [
      "Amorphous"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "misdreavus",
    fullname: "pokemon: Misdreavus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Misdreavus",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 435,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Mismagius"
    ],
    nfe: true
  },
  unown: {
    tags: [],
    num: 201,
    name: "Unown",
    baseForme: "A",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 48,
      atk: 72,
      def: 48,
      spa: 72,
      spd: 48,
      spe: 48
    },
    weightkg: 5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "unown",
    fullname: "pokemon: Unown",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Unown",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 336,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    cosmeticFormes: [
      "Unown-B",
      "Unown-C",
      "Unown-D",
      "Unown-E",
      "Unown-F",
      "Unown-G",
      "Unown-H",
      "Unown-I",
      "Unown-J",
      "Unown-K",
      "Unown-L",
      "Unown-M",
      "Unown-N",
      "Unown-O",
      "Unown-P",
      "Unown-Q",
      "Unown-R",
      "Unown-S",
      "Unown-T",
      "Unown-U",
      "Unown-V",
      "Unown-W",
      "Unown-X",
      "Unown-Y",
      "Unown-Z",
      "Unown-Exclamation",
      "Unown-Question"
    ],
    formeOrder: [
      "Unown",
      "Unown-B",
      "Unown-C",
      "Unown-D",
      "Unown-E",
      "Unown-F",
      "Unown-G",
      "Unown-H",
      "Unown-I",
      "Unown-J",
      "Unown-K",
      "Unown-L",
      "Unown-M",
      "Unown-N",
      "Unown-O",
      "Unown-P",
      "Unown-Q",
      "Unown-R",
      "Unown-S",
      "Unown-T",
      "Unown-U",
      "Unown-V",
      "Unown-W",
      "Unown-X",
      "Unown-Y",
      "Unown-Z",
      "Unown-Exclamation",
      "Unown-Question"
    ],
    formes: [
      "Unown",
      "Unown-B",
      "Unown-C",
      "Unown-D",
      "Unown-E",
      "Unown-F",
      "Unown-G",
      "Unown-H",
      "Unown-I",
      "Unown-J",
      "Unown-K",
      "Unown-L",
      "Unown-M",
      "Unown-N",
      "Unown-O",
      "Unown-P",
      "Unown-Q",
      "Unown-R",
      "Unown-S",
      "Unown-T",
      "Unown-U",
      "Unown-V",
      "Unown-W",
      "Unown-X",
      "Unown-Y",
      "Unown-Z",
      "Unown-Exclamation",
      "Unown-Question"
    ]
  },
  wobbuffet: {
    tags: [],
    num: 202,
    name: "Wobbuffet",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 190,
      atk: 33,
      def: 58,
      spa: 33,
      spd: 58,
      spe: 33
    },
    weightkg: 28.5,
    evoLevel: 15,
    eggGroups: [
      "Amorphous"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "wobbuffet",
    fullname: "pokemon: Wobbuffet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wobbuffet",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 405,
    weighthg: 285,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shadow Tag",
      H: "Telepathy"
    },
    nfe: false,
    prevo: "Wynaut"
  },
  girafarig: {
    tags: [],
    num: 203,
    name: "Girafarig",
    types: [
      "Normal",
      "Psychic"
    ],
    baseStats: {
      hp: 70,
      atk: 80,
      def: 65,
      spa: 90,
      spd: 65,
      spe: 85
    },
    weightkg: 41.5,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "girafarig",
    fullname: "pokemon: Girafarig",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Girafarig",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 455,
    weighthg: 415,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Early Bird",
      H: "Sap Sipper"
    },
    evos: [
      "Farigiraf"
    ],
    nfe: true
  },
  pineco: {
    tags: [],
    num: 204,
    name: "Pineco",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 90,
      spa: 35,
      spd: 35,
      spe: 15
    },
    weightkg: 7.2,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "pineco",
    fullname: "pokemon: Pineco",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pineco",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 290,
    weighthg: 72,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      H: "Overcoat"
    },
    evos: [
      "Forretress"
    ],
    nfe: true
  },
  forretress: {
    tags: [],
    num: 205,
    name: "Forretress",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 75,
      atk: 90,
      def: 140,
      spa: 60,
      spd: 60,
      spe: 40
    },
    weightkg: 125.8,
    evoLevel: 31,
    eggGroups: [
      "Bug"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "forretress",
    fullname: "pokemon: Forretress",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Forretress",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 465,
    weighthg: 1258,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Pineco"
  },
  dunsparce: {
    tags: [],
    num: 206,
    name: "Dunsparce",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 100,
      atk: 70,
      def: 70,
      spa: 65,
      spd: 65,
      spe: 45
    },
    weightkg: 14,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "dunsparce",
    fullname: "pokemon: Dunsparce",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dunsparce",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 415,
    weighthg: 140,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Serene Grace",
      "1": "Run Away",
      H: "Rattled"
    },
    evos: [
      "Dudunsparce",
      "Dudunsparce-Three-Segment"
    ],
    nfe: true
  },
  gligar: {
    tags: [],
    num: 207,
    name: "Gligar",
    types: [
      "Ground",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 75,
      def: 105,
      spa: 35,
      spd: 65,
      spe: 85
    },
    weightkg: 64.8,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "gligar",
    fullname: "pokemon: Gligar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gligar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 430,
    weighthg: 648,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Sand Veil",
      H: "Immunity"
    },
    evos: [
      "Gliscor"
    ],
    nfe: true
  },
  steelix: {
    tags: [],
    num: 208,
    name: "Steelix",
    types: [
      "Steel",
      "Ground"
    ],
    baseStats: {
      hp: 75,
      atk: 85,
      def: 200,
      spa: 55,
      spd: 65,
      spe: 30
    },
    weightkg: 400,
    evoType: "trade",
    evoItem: "Metal Coat",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "steelix",
    fullname: "pokemon: Steelix",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Steelix",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 4000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Sturdy",
      H: "Sheer Force"
    },
    nfe: false,
    otherFormes: [
      "Steelix-Mega"
    ],
    formeOrder: [
      "Steelix",
      "Steelix-Mega"
    ],
    formes: [
      "Steelix",
      "Steelix-Mega"
    ],
    prevo: "Onix"
  },
  steelixmega: {
    tags: [],
    num: 208,
    name: "Steelix-Mega",
    baseSpecies: "Steelix",
    forme: "Mega",
    types: [
      "Steel",
      "Ground"
    ],
    baseStats: {
      hp: 75,
      atk: 125,
      def: 230,
      spa: 55,
      spd: 95,
      spe: 30
    },
    weightkg: 740,
    eggGroups: [
      "Mineral"
    ],
    requiredItem: "Steelixite",
    tier: "Illegal",
    id: "steelixmega",
    fullname: "pokemon: Steelix-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Steelixite"
    ],
    bst: 610,
    weighthg: 7400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Steelix",
    changesFrom: "Steelix",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Force"
    },
    nfe: false
  },
  snubbull: {
    tags: [],
    num: 209,
    name: "Snubbull",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 50,
      spa: 40,
      spd: 40,
      spe: 30
    },
    weightkg: 7.8,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "snubbull",
    fullname: "pokemon: Snubbull",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Snubbull",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 78,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Intimidate",
      "1": "Run Away",
      H: "Rattled"
    },
    evos: [
      "Granbull"
    ],
    nfe: true
  },
  granbull: {
    tags: [],
    num: 210,
    name: "Granbull",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 90,
      atk: 120,
      def: 75,
      spa: 60,
      spd: 60,
      spe: 45
    },
    weightkg: 48.7,
    evoLevel: 23,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "granbull",
    fullname: "pokemon: Granbull",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Granbull",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 487,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Intimidate",
      "1": "Quick Feet",
      H: "Rattled"
    },
    nfe: false,
    prevo: "Snubbull"
  },
  qwilfish: {
    tags: [],
    num: 211,
    name: "Qwilfish",
    types: [
      "Water",
      "Poison"
    ],
    baseStats: {
      hp: 65,
      atk: 95,
      def: 85,
      spa: 55,
      spd: 55,
      spe: 85
    },
    weightkg: 3.9,
    eggGroups: [
      "Water 2"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "qwilfish",
    fullname: "pokemon: Qwilfish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Qwilfish",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 440,
    weighthg: 39,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Swift Swim",
      H: "Intimidate"
    },
    nfe: false
  },
  scizor: {
    tags: [],
    num: 212,
    name: "Scizor",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 130,
      def: 100,
      spa: 55,
      spd: 80,
      spe: 65
    },
    weightkg: 118,
    evoType: "trade",
    evoItem: "Metal Coat",
    eggGroups: [
      "Bug"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "scizor",
    fullname: "pokemon: Scizor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Scizor",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 1180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Technician",
      H: "Light Metal"
    },
    nfe: false,
    otherFormes: [
      "Scizor-Mega"
    ],
    formeOrder: [
      "Scizor",
      "Scizor-Mega"
    ],
    formes: [
      "Scizor",
      "Scizor-Mega"
    ],
    prevo: "Scyther"
  },
  scizormega: {
    tags: [],
    num: 212,
    name: "Scizor-Mega",
    baseSpecies: "Scizor",
    forme: "Mega",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 150,
      def: 140,
      spa: 65,
      spd: 100,
      spe: 75
    },
    weightkg: 125,
    eggGroups: [
      "Bug"
    ],
    requiredItem: "Scizorite",
    tier: "Illegal",
    id: "scizormega",
    fullname: "pokemon: Scizor-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Scizorite"
    ],
    bst: 600,
    weighthg: 1250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Scizor",
    changesFrom: "Scizor",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Technician"
    },
    nfe: false
  },
  shuckle: {
    tags: [],
    num: 213,
    name: "Shuckle",
    types: [
      "Bug",
      "Rock"
    ],
    baseStats: {
      hp: 20,
      atk: 10,
      def: 230,
      spa: 10,
      spd: 230,
      spe: 5
    },
    weightkg: 20.5,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "shuckle",
    fullname: "pokemon: Shuckle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shuckle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 505,
    weighthg: 205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Gluttony",
      H: "Contrary"
    },
    nfe: false
  },
  heracross: {
    tags: [],
    num: 214,
    name: "Heracross",
    types: [
      "Bug",
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 125,
      def: 75,
      spa: 40,
      spd: 95,
      spe: 85
    },
    weightkg: 54,
    eggGroups: [
      "Bug"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "heracross",
    fullname: "pokemon: Heracross",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Heracross",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 500,
    weighthg: 540,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Guts",
      H: "Moxie"
    },
    nfe: false,
    otherFormes: [
      "Heracross-Mega"
    ],
    formeOrder: [
      "Heracross",
      "Heracross-Mega"
    ],
    formes: [
      "Heracross",
      "Heracross-Mega"
    ]
  },
  heracrossmega: {
    tags: [],
    num: 214,
    name: "Heracross-Mega",
    baseSpecies: "Heracross",
    forme: "Mega",
    types: [
      "Bug",
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 185,
      def: 115,
      spa: 40,
      spd: 105,
      spe: 75
    },
    weightkg: 62.5,
    eggGroups: [
      "Bug"
    ],
    requiredItem: "Heracronite",
    tier: "Illegal",
    id: "heracrossmega",
    fullname: "pokemon: Heracross-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Heracronite"
    ],
    bst: 600,
    weighthg: 625,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Heracross",
    changesFrom: "Heracross",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Skill Link"
    },
    nfe: false
  },
  sneasel: {
    tags: [],
    num: 215,
    name: "Sneasel",
    types: [
      "Dark",
      "Ice"
    ],
    baseStats: {
      hp: 55,
      atk: 95,
      def: 55,
      spa: 35,
      spd: 75,
      spe: 115
    },
    weightkg: 28,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "sneasel",
    fullname: "pokemon: Sneasel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sneasel",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 430,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Keen Eye",
      H: "Pickpocket"
    },
    evos: [
      "Weavile"
    ],
    nfe: true
  },
  teddiursa: {
    tags: [],
    num: 216,
    name: "Teddiursa",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 40
    },
    weightkg: 8.8,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "teddiursa",
    fullname: "pokemon: Teddiursa",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Teddiursa",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 88,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Quick Feet",
      H: "Honey Gather"
    },
    evos: [
      "Ursaring"
    ],
    nfe: true
  },
  ursaring: {
    tags: [],
    num: 217,
    name: "Ursaring",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 90,
      atk: 130,
      def: 75,
      spa: 75,
      spd: 75,
      spe: 55
    },
    weightkg: 125.8,
    evoLevel: 30,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "ursaring",
    fullname: "pokemon: Ursaring",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Ursaring",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 1258,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Guts",
      "1": "Quick Feet",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Teddiursa"
  },
  slugma: {
    tags: [],
    num: 218,
    name: "Slugma",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 40,
      spa: 70,
      spd: 40,
      spe: 20
    },
    weightkg: 35,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "slugma",
    fullname: "pokemon: Slugma",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Slugma",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magma Armor",
      "1": "Flame Body",
      H: "Weak Armor"
    },
    evos: [
      "Magcargo"
    ],
    nfe: true
  },
  magcargo: {
    tags: [],
    num: 219,
    name: "Magcargo",
    types: [
      "Fire",
      "Rock"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 120,
      spa: 90,
      spd: 80,
      spe: 30
    },
    weightkg: 55,
    evoLevel: 38,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "magcargo",
    fullname: "pokemon: Magcargo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Magcargo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 430,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magma Armor",
      "1": "Flame Body",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Slugma"
  },
  swinub: {
    tags: [],
    num: 220,
    name: "Swinub",
    types: [
      "Ice",
      "Ground"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 40,
      spa: 30,
      spd: 30,
      spe: 50
    },
    weightkg: 6.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "swinub",
    fullname: "pokemon: Swinub",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swinub",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    evos: [
      "Piloswine"
    ],
    nfe: true
  },
  piloswine: {
    tags: [],
    num: 221,
    name: "Piloswine",
    types: [
      "Ice",
      "Ground"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 80,
      spa: 60,
      spd: 60,
      spe: 50
    },
    weightkg: 55.8,
    evoLevel: 33,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "piloswine",
    fullname: "pokemon: Piloswine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Piloswine",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 558,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    evos: [
      "Mamoswine"
    ],
    nfe: true,
    prevo: "Swinub"
  },
  corsola: {
    tags: [],
    num: 222,
    name: "Corsola",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 65,
      atk: 55,
      def: 95,
      spa: 65,
      spd: 95,
      spe: 35
    },
    weightkg: 5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "corsola",
    fullname: "pokemon: Corsola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Corsola",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 410,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Hustle",
      "1": "Natural Cure",
      H: "Regenerator"
    },
    nfe: false,
    otherFormes: [
      "Corsola-Galar"
    ],
    formeOrder: [
      "Corsola",
      "Corsola-Galar"
    ],
    formes: [
      "Corsola",
      "Corsola-Galar"
    ]
  },
  corsolagalar: {
    tags: [],
    num: 222,
    name: "Corsola-Galar",
    baseSpecies: "Corsola",
    forme: "Galar",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 100,
      spa: 65,
      spd: 100,
      spe: 30
    },
    weightkg: 0.5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "corsolagalar",
    fullname: "pokemon: Corsola-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 410,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    evos: [
      "Cursola"
    ],
    nfe: true
  },
  remoraid: {
    tags: [],
    num: 223,
    name: "Remoraid",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 35,
      atk: 65,
      def: 35,
      spa: 65,
      spd: 35,
      spe: 65
    },
    weightkg: 12,
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "Illegal",
    id: "remoraid",
    fullname: "pokemon: Remoraid",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Remoraid",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hustle",
      "1": "Sniper",
      H: "Moody"
    },
    evos: [
      "Octillery"
    ],
    nfe: true
  },
  octillery: {
    tags: [],
    num: 224,
    name: "Octillery",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 75,
      atk: 105,
      def: 75,
      spa: 105,
      spd: 75,
      spe: 45
    },
    weightkg: 28.5,
    evoLevel: 25,
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "Illegal",
    id: "octillery",
    fullname: "pokemon: Octillery",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Octillery",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 285,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Suction Cups",
      "1": "Sniper",
      H: "Moody"
    },
    nfe: false,
    prevo: "Remoraid"
  },
  delibird: {
    tags: [],
    num: 225,
    name: "Delibird",
    types: [
      "Ice",
      "Flying"
    ],
    baseStats: {
      hp: 45,
      atk: 55,
      def: 45,
      spa: 65,
      spd: 45,
      spe: 75
    },
    weightkg: 16,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "delibird",
    fullname: "pokemon: Delibird",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Delibird",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 330,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit",
      "1": "Hustle",
      H: "Insomnia"
    },
    nfe: false
  },
  mantine: {
    tags: [],
    num: 226,
    name: "Mantine",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 85,
      atk: 40,
      def: 70,
      spa: 80,
      spd: 140,
      spe: 70
    },
    weightkg: 220,
    evoType: "levelExtra",
    evoCondition: "with a Remoraid in party",
    eggGroups: [
      "Water 1"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "mantine",
    fullname: "pokemon: Mantine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mantine",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 485,
    weighthg: 2200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Water Absorb",
      H: "Water Veil"
    },
    nfe: false,
    prevo: "Mantyke"
  },
  skarmory: {
    tags: [],
    num: 227,
    name: "Skarmory",
    types: [
      "Steel",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 80,
      def: 140,
      spa: 40,
      spd: 70,
      spe: 70
    },
    weightkg: 50.5,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "skarmory",
    fullname: "pokemon: Skarmory",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Skarmory",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 465,
    weighthg: 505,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Sturdy",
      H: "Weak Armor"
    },
    nfe: false
  },
  houndour: {
    tags: [],
    num: 228,
    name: "Houndour",
    types: [
      "Dark",
      "Fire"
    ],
    baseStats: {
      hp: 45,
      atk: 60,
      def: 30,
      spa: 80,
      spd: 50,
      spe: 65
    },
    weightkg: 10.8,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "houndour",
    fullname: "pokemon: Houndour",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Houndour",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 108,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Early Bird",
      "1": "Flash Fire",
      H: "Unnerve"
    },
    evos: [
      "Houndoom"
    ],
    nfe: true
  },
  houndoom: {
    tags: [],
    num: 229,
    name: "Houndoom",
    types: [
      "Dark",
      "Fire"
    ],
    baseStats: {
      hp: 75,
      atk: 90,
      def: 50,
      spa: 110,
      spd: 80,
      spe: 95
    },
    weightkg: 35,
    evoLevel: 24,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "houndoom",
    fullname: "pokemon: Houndoom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Houndoom",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Early Bird",
      "1": "Flash Fire",
      H: "Unnerve"
    },
    nfe: false,
    otherFormes: [
      "Houndoom-Mega"
    ],
    formeOrder: [
      "Houndoom",
      "Houndoom-Mega"
    ],
    formes: [
      "Houndoom",
      "Houndoom-Mega"
    ],
    prevo: "Houndour"
  },
  houndoommega: {
    tags: [],
    num: 229,
    name: "Houndoom-Mega",
    baseSpecies: "Houndoom",
    forme: "Mega",
    types: [
      "Dark",
      "Fire"
    ],
    baseStats: {
      hp: 75,
      atk: 90,
      def: 90,
      spa: 140,
      spd: 90,
      spe: 115
    },
    weightkg: 49.5,
    eggGroups: [
      "Field"
    ],
    requiredItem: "Houndoominite",
    tier: "Illegal",
    id: "houndoommega",
    fullname: "pokemon: Houndoom-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Houndoominite"
    ],
    bst: 600,
    weighthg: 495,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Houndoom",
    changesFrom: "Houndoom",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Solar Power"
    },
    nfe: false
  },
  kingdra: {
    tags: [],
    num: 230,
    name: "Kingdra",
    types: [
      "Water",
      "Dragon"
    ],
    baseStats: {
      hp: 75,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 85
    },
    weightkg: 152,
    evoType: "trade",
    evoItem: "Dragon Scale",
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "Illegal",
    id: "kingdra",
    fullname: "pokemon: Kingdra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kingdra",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 540,
    weighthg: 1520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Sniper",
      H: "Damp"
    },
    nfe: false,
    prevo: "Seadra"
  },
  phanpy: {
    tags: [],
    num: 231,
    name: "Phanpy",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 90,
      atk: 60,
      def: 60,
      spa: 40,
      spd: 40,
      spe: 40
    },
    weightkg: 33.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "phanpy",
    fullname: "pokemon: Phanpy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Phanpy",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 335,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      H: "Sand Veil"
    },
    evos: [
      "Donphan"
    ],
    nfe: true
  },
  donphan: {
    tags: [],
    num: 232,
    name: "Donphan",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 90,
      atk: 120,
      def: 120,
      spa: 60,
      spd: 60,
      spe: 50
    },
    weightkg: 120,
    evoLevel: 25,
    eggGroups: [
      "Field"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "donphan",
    fullname: "pokemon: Donphan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Donphan",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      H: "Sand Veil"
    },
    nfe: false,
    prevo: "Phanpy"
  },
  porygon2: {
    tags: [],
    num: 233,
    name: "Porygon2",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 85,
      atk: 80,
      def: 90,
      spa: 105,
      spd: 95,
      spe: 60
    },
    weightkg: 32.5,
    evoType: "trade",
    evoItem: "Up-Grade",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "porygon2",
    fullname: "pokemon: Porygon2",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Porygon2",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Trace",
      "1": "Download",
      H: "Analytic"
    },
    evos: [
      "Porygon-Z"
    ],
    nfe: true,
    prevo: "Porygon"
  },
  stantler: {
    tags: [],
    num: 234,
    name: "Stantler",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 73,
      atk: 95,
      def: 62,
      spa: 85,
      spd: 65,
      spe: 85
    },
    weightkg: 71.2,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "stantler",
    fullname: "pokemon: Stantler",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Stantler",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 465,
    weighthg: 712,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Frisk",
      H: "Sap Sipper"
    },
    nfe: false
  },
  smeargle: {
    tags: [],
    num: 235,
    name: "Smeargle",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 20,
      def: 35,
      spa: 20,
      spd: 45,
      spe: 75
    },
    weightkg: 58,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "smeargle",
    fullname: "pokemon: Smeargle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Smeargle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 580,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Technician",
      H: "Moody"
    },
    nfe: false
  },
  tyrogue: {
    tags: [],
    num: 236,
    name: "Tyrogue",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 35,
      atk: 35,
      def: 35,
      spa: 35,
      spd: 35,
      spe: 35
    },
    weightkg: 21,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "tyrogue",
    fullname: "pokemon: Tyrogue",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tyrogue",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 210,
    weighthg: 210,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Guts",
      "1": "Steadfast",
      H: "Vital Spirit"
    },
    evos: [
      "Hitmonlee",
      "Hitmonchan",
      "Hitmontop"
    ],
    nfe: true
  },
  hitmontop: {
    tags: [],
    num: 237,
    name: "Hitmontop",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 50,
      atk: 95,
      def: 95,
      spa: 35,
      spd: 110,
      spe: 70
    },
    weightkg: 48,
    evoLevel: 20,
    evoCondition: "with an Atk stat equal to its Def stat",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "hitmontop",
    fullname: "pokemon: Hitmontop",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Hitmontop",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 480,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Intimidate",
      "1": "Technician",
      H: "Steadfast"
    },
    nfe: false,
    prevo: "Tyrogue"
  },
  smoochum: {
    tags: [],
    num: 238,
    name: "Smoochum",
    types: [
      "Ice",
      "Psychic"
    ],
    baseStats: {
      hp: 45,
      atk: 30,
      def: 15,
      spa: 85,
      spd: 65,
      spe: 65
    },
    weightkg: 6,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "smoochum",
    fullname: "pokemon: Smoochum",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Smoochum",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 305,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Oblivious",
      "1": "Forewarn",
      H: "Hydration"
    },
    evos: [
      "Jynx"
    ],
    nfe: true
  },
  elekid: {
    tags: [],
    num: 239,
    name: "Elekid",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 45,
      atk: 63,
      def: 37,
      spa: 65,
      spd: 55,
      spe: 95
    },
    weightkg: 23.5,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "elekid",
    fullname: "pokemon: Elekid",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Elekid",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 360,
    weighthg: 235,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Static",
      H: "Vital Spirit"
    },
    evos: [
      "Electabuzz"
    ],
    nfe: true
  },
  magby: {
    tags: [],
    num: 240,
    name: "Magby",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 45,
      atk: 75,
      def: 37,
      spa: 70,
      spd: 55,
      spe: 83
    },
    weightkg: 21.4,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "magby",
    fullname: "pokemon: Magby",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Magby",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 365,
    weighthg: 214,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    evos: [
      "Magmar"
    ],
    nfe: true
  },
  miltank: {
    tags: [],
    num: 241,
    name: "Miltank",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 95,
      atk: 80,
      def: 105,
      spa: 40,
      spd: 70,
      spe: 100
    },
    weightkg: 75.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "miltank",
    fullname: "pokemon: Miltank",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Miltank",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 490,
    weighthg: 755,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Scrappy",
      H: "Sap Sipper"
    },
    nfe: false
  },
  blissey: {
    tags: [],
    num: 242,
    name: "Blissey",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 255,
      atk: 10,
      def: 10,
      spa: 75,
      spd: 135,
      spe: 55
    },
    weightkg: 46.8,
    evoType: "levelFriendship",
    eggGroups: [
      "Fairy"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "blissey",
    fullname: "pokemon: Blissey",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Blissey",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 540,
    weighthg: 468,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Healer"
    },
    nfe: false,
    prevo: "Chansey"
  },
  raikou: {
    tags: [
      "Sub-Legendary"
    ],
    num: 243,
    name: "Raikou",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 90,
      atk: 85,
      def: 75,
      spa: 115,
      spd: 100,
      spe: 115
    },
    weightkg: 178,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "raikou",
    fullname: "pokemon: Raikou",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Raikou",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 1780,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    nfe: false
  },
  entei: {
    tags: [
      "Sub-Legendary"
    ],
    num: 244,
    name: "Entei",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 115,
      atk: 115,
      def: 85,
      spa: 90,
      spd: 75,
      spe: 100
    },
    weightkg: 198,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "entei",
    fullname: "pokemon: Entei",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Entei",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 1980,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    nfe: false
  },
  suicune: {
    tags: [
      "Sub-Legendary"
    ],
    num: 245,
    name: "Suicune",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 100,
      atk: 75,
      def: 115,
      spa: 90,
      spd: 115,
      spe: 85
    },
    weightkg: 187,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "suicune",
    fullname: "pokemon: Suicune",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Suicune",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 1870,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure",
      H: "Inner Focus"
    },
    nfe: false
  },
  larvitar: {
    tags: [],
    num: 246,
    name: "Larvitar",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 50,
      atk: 64,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 41
    },
    weightkg: 72,
    eggGroups: [
      "Monster"
    ],
    tier: "LC",
    id: "larvitar",
    fullname: "pokemon: Larvitar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Larvitar",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 720,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Guts",
      H: "Sand Veil"
    },
    evos: [
      "Pupitar"
    ],
    nfe: true
  },
  pupitar: {
    tags: [],
    num: 247,
    name: "Pupitar",
    types: [
      "Rock",
      "Ground"
    ],
    baseStats: {
      hp: 70,
      atk: 84,
      def: 70,
      spa: 65,
      spd: 70,
      spe: 51
    },
    weightkg: 152,
    evoLevel: 30,
    eggGroups: [
      "Monster"
    ],
    tier: "NFE",
    id: "pupitar",
    fullname: "pokemon: Pupitar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pupitar",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 410,
    weighthg: 1520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin"
    },
    evos: [
      "Tyranitar"
    ],
    nfe: true,
    prevo: "Larvitar"
  },
  tyranitar: {
    tags: [],
    num: 248,
    name: "Tyranitar",
    types: [
      "Rock",
      "Dark"
    ],
    baseStats: {
      hp: 100,
      atk: 134,
      def: 110,
      spa: 95,
      spd: 100,
      spe: 61
    },
    weightkg: 202,
    evoLevel: 55,
    eggGroups: [
      "Monster"
    ],
    tier: "UU",
    doublesTier: "DOU",
    id: "tyranitar",
    fullname: "pokemon: Tyranitar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Tyranitar",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 2020,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Stream",
      H: "Unnerve"
    },
    nfe: false,
    otherFormes: [
      "Tyranitar-Mega"
    ],
    formeOrder: [
      "Tyranitar",
      "Tyranitar-Mega"
    ],
    formes: [
      "Tyranitar",
      "Tyranitar-Mega"
    ],
    prevo: "Pupitar"
  },
  tyranitarmega: {
    tags: [],
    num: 248,
    name: "Tyranitar-Mega",
    baseSpecies: "Tyranitar",
    forme: "Mega",
    types: [
      "Rock",
      "Dark"
    ],
    baseStats: {
      hp: 100,
      atk: 164,
      def: 150,
      spa: 95,
      spd: 120,
      spe: 71
    },
    weightkg: 255,
    eggGroups: [
      "Monster"
    ],
    requiredItem: "Tyranitarite",
    tier: "Illegal",
    id: "tyranitarmega",
    fullname: "pokemon: Tyranitar-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Tyranitarite"
    ],
    bst: 700,
    weighthg: 2550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Tyranitar",
    changesFrom: "Tyranitar",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Stream"
    },
    nfe: false
  },
  lugia: {
    tags: [
      "Restricted Legendary"
    ],
    num: 249,
    name: "Lugia",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 106,
      atk: 90,
      def: 130,
      spa: 90,
      spd: 154,
      spe: 110
    },
    weightkg: 216,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "lugia",
    fullname: "pokemon: Lugia",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lugia",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 2160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure",
      H: "Multiscale"
    },
    nfe: false
  },
  hooh: {
    tags: [
      "Restricted Legendary"
    ],
    num: 250,
    name: "Ho-Oh",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 106,
      atk: 130,
      def: 90,
      spa: 110,
      spd: 154,
      spe: 90
    },
    weightkg: 199,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "hooh",
    fullname: "pokemon: Ho-Oh",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ho-Oh",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 1990,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure",
      H: "Regenerator"
    },
    nfe: false
  },
  celebi: {
    tags: [
      "Mythical"
    ],
    num: 251,
    name: "Celebi",
    types: [
      "Psychic",
      "Grass"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    },
    weightkg: 5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "celebi",
    fullname: "pokemon: Celebi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 2,
    shortDesc: "",
    desc: "",
    baseSpecies: "Celebi",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Natural Cure"
    },
    nfe: false
  },
  treecko: {
    tags: [],
    num: 252,
    name: "Treecko",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 35,
      spa: 65,
      spd: 55,
      spe: 70
    },
    weightkg: 5,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "treecko",
    fullname: "pokemon: Treecko",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Treecko",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    evos: [
      "Grovyle"
    ],
    nfe: true
  },
  grovyle: {
    tags: [],
    num: 253,
    name: "Grovyle",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 45,
      spa: 85,
      spd: 65,
      spe: 95
    },
    weightkg: 21.6,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "grovyle",
    fullname: "pokemon: Grovyle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Grovyle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 216,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    evos: [
      "Sceptile"
    ],
    nfe: true,
    prevo: "Treecko"
  },
  sceptile: {
    tags: [],
    num: 254,
    name: "Sceptile",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 105,
      spd: 85,
      spe: 120
    },
    weightkg: 52.2,
    evoLevel: 36,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "sceptile",
    fullname: "pokemon: Sceptile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sceptile",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 522,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Unburden"
    },
    nfe: false,
    otherFormes: [
      "Sceptile-Mega"
    ],
    formeOrder: [
      "Sceptile",
      "Sceptile-Mega"
    ],
    formes: [
      "Sceptile",
      "Sceptile-Mega"
    ],
    prevo: "Grovyle"
  },
  sceptilemega: {
    tags: [],
    num: 254,
    name: "Sceptile-Mega",
    baseSpecies: "Sceptile",
    forme: "Mega",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 75,
      spa: 145,
      spd: 85,
      spe: 145
    },
    weightkg: 55.2,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    requiredItem: "Sceptilite",
    tier: "Illegal",
    id: "sceptilemega",
    fullname: "pokemon: Sceptile-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Sceptilite"
    ],
    bst: 630,
    weighthg: 552,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Sceptile",
    changesFrom: "Sceptile",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Lightning Rod"
    },
    nfe: false
  },
  torchic: {
    tags: [],
    num: 255,
    name: "Torchic",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 45,
      atk: 60,
      def: 40,
      spa: 70,
      spd: 50,
      spe: 45
    },
    weightkg: 2.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "torchic",
    fullname: "pokemon: Torchic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Torchic",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    evos: [
      "Combusken"
    ],
    nfe: true
  },
  combusken: {
    tags: [],
    num: 256,
    name: "Combusken",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 60,
      spa: 85,
      spd: 60,
      spe: 55
    },
    weightkg: 19.5,
    evoLevel: 16,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "combusken",
    fullname: "pokemon: Combusken",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Combusken",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    evos: [
      "Blaziken"
    ],
    nfe: true,
    prevo: "Torchic"
  },
  blaziken: {
    tags: [],
    num: 257,
    name: "Blaziken",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 70,
      spa: 110,
      spd: 70,
      spe: 80
    },
    weightkg: 52,
    evoLevel: 36,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "blaziken",
    fullname: "pokemon: Blaziken",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Blaziken",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Speed Boost"
    },
    nfe: false,
    otherFormes: [
      "Blaziken-Mega"
    ],
    formeOrder: [
      "Blaziken",
      "Blaziken-Mega"
    ],
    formes: [
      "Blaziken",
      "Blaziken-Mega"
    ],
    prevo: "Combusken"
  },
  blazikenmega: {
    tags: [],
    num: 257,
    name: "Blaziken-Mega",
    baseSpecies: "Blaziken",
    forme: "Mega",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 160,
      def: 80,
      spa: 130,
      spd: 80,
      spe: 100
    },
    weightkg: 52,
    eggGroups: [
      "Field"
    ],
    requiredItem: "Blazikenite",
    tier: "Illegal",
    id: "blazikenmega",
    fullname: "pokemon: Blaziken-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Blazikenite"
    ],
    bst: 630,
    weighthg: 520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Blaziken",
    changesFrom: "Blaziken",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Speed Boost"
    },
    nfe: false
  },
  mudkip: {
    tags: [],
    num: 258,
    name: "Mudkip",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 70,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 40
    },
    weightkg: 7.6,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "mudkip",
    fullname: "pokemon: Mudkip",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mudkip",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 76,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    evos: [
      "Marshtomp"
    ],
    nfe: true
  },
  marshtomp: {
    tags: [],
    num: 259,
    name: "Marshtomp",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 50
    },
    weightkg: 28,
    evoLevel: 16,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "marshtomp",
    fullname: "pokemon: Marshtomp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Marshtomp",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    evos: [
      "Swampert"
    ],
    nfe: true,
    prevo: "Mudkip"
  },
  swampert: {
    tags: [],
    num: 260,
    name: "Swampert",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 100,
      atk: 110,
      def: 90,
      spa: 85,
      spd: 90,
      spe: 60
    },
    weightkg: 81.9,
    evoLevel: 36,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "Illegal",
    id: "swampert",
    fullname: "pokemon: Swampert",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swampert",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 819,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Damp"
    },
    nfe: false,
    otherFormes: [
      "Swampert-Mega"
    ],
    formeOrder: [
      "Swampert",
      "Swampert-Mega"
    ],
    formes: [
      "Swampert",
      "Swampert-Mega"
    ],
    prevo: "Marshtomp"
  },
  swampertmega: {
    tags: [],
    num: 260,
    name: "Swampert-Mega",
    baseSpecies: "Swampert",
    forme: "Mega",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 100,
      atk: 150,
      def: 110,
      spa: 95,
      spd: 110,
      spe: 70
    },
    weightkg: 102,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    requiredItem: "Swampertite",
    tier: "Illegal",
    id: "swampertmega",
    fullname: "pokemon: Swampert-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Swampertite"
    ],
    bst: 635,
    weighthg: 1020,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Swampert",
    changesFrom: "Swampert",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim"
    },
    nfe: false
  },
  poochyena: {
    tags: [],
    num: 261,
    name: "Poochyena",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 35,
      spa: 30,
      spd: 30,
      spe: 35
    },
    weightkg: 13.6,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "poochyena",
    fullname: "pokemon: Poochyena",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Poochyena",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 220,
    weighthg: 136,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Quick Feet",
      H: "Rattled"
    },
    evos: [
      "Mightyena"
    ],
    nfe: true
  },
  mightyena: {
    tags: [],
    num: 262,
    name: "Mightyena",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 60,
      spe: 70
    },
    weightkg: 37,
    evoLevel: 18,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "mightyena",
    fullname: "pokemon: Mightyena",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mightyena",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 370,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Quick Feet",
      H: "Moxie"
    },
    nfe: false,
    prevo: "Poochyena"
  },
  zigzagoon: {
    tags: [],
    num: 263,
    name: "Zigzagoon",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 38,
      atk: 30,
      def: 41,
      spa: 30,
      spd: 41,
      spe: 60
    },
    weightkg: 17.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "zigzagoon",
    fullname: "pokemon: Zigzagoon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zigzagoon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 240,
    weighthg: 175,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    evos: [
      "Linoone"
    ],
    nfe: true,
    otherFormes: [
      "Zigzagoon-Galar"
    ],
    formeOrder: [
      "Zigzagoon",
      "Zigzagoon-Galar"
    ],
    formes: [
      "Zigzagoon",
      "Zigzagoon-Galar"
    ]
  },
  zigzagoongalar: {
    tags: [],
    num: 263,
    name: "Zigzagoon-Galar",
    baseSpecies: "Zigzagoon",
    forme: "Galar",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 38,
      atk: 30,
      def: 41,
      spa: 30,
      spd: 41,
      spe: 60
    },
    weightkg: 17.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "zigzagoongalar",
    fullname: "pokemon: Zigzagoon-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 240,
    weighthg: 175,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    evos: [
      "Linoone-Galar"
    ],
    nfe: true
  },
  linoone: {
    tags: [],
    num: 264,
    name: "Linoone",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 78,
      atk: 70,
      def: 61,
      spa: 50,
      spd: 61,
      spe: 100
    },
    weightkg: 32.5,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "linoone",
    fullname: "pokemon: Linoone",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Linoone",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    nfe: false,
    otherFormes: [
      "Linoone-Galar"
    ],
    formeOrder: [
      "Linoone",
      "Linoone-Galar"
    ],
    formes: [
      "Linoone",
      "Linoone-Galar"
    ],
    prevo: "Zigzagoon"
  },
  linoonegalar: {
    tags: [],
    num: 264,
    name: "Linoone-Galar",
    baseSpecies: "Linoone",
    forme: "Galar",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 78,
      atk: 70,
      def: 61,
      spa: 50,
      spd: 61,
      spe: 100
    },
    weightkg: 32.5,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "linoonegalar",
    fullname: "pokemon: Linoone-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Gluttony",
      H: "Quick Feet"
    },
    evos: [
      "Obstagoon"
    ],
    nfe: true,
    prevo: "Zigzagoon-Galar"
  },
  wurmple: {
    tags: [],
    num: 265,
    name: "Wurmple",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 45,
      atk: 45,
      def: 35,
      spa: 20,
      spd: 30,
      spe: 20
    },
    weightkg: 3.6,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "wurmple",
    fullname: "pokemon: Wurmple",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wurmple",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 195,
    weighthg: 36,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Run Away"
    },
    evos: [
      "Silcoon",
      "Cascoon"
    ],
    nfe: true
  },
  silcoon: {
    tags: [],
    num: 266,
    name: "Silcoon",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 35,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 15
    },
    weightkg: 10,
    evoLevel: 7,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "silcoon",
    fullname: "pokemon: Silcoon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Silcoon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 205,
    weighthg: 100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin"
    },
    evos: [
      "Beautifly"
    ],
    nfe: true,
    prevo: "Wurmple"
  },
  beautifly: {
    tags: [],
    num: 267,
    name: "Beautifly",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 70,
      def: 50,
      spa: 100,
      spd: 50,
      spe: 65
    },
    weightkg: 28.4,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "beautifly",
    fullname: "pokemon: Beautifly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Beautifly",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 395,
    weighthg: 284,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      H: "Rivalry"
    },
    nfe: false,
    prevo: "Silcoon"
  },
  cascoon: {
    tags: [],
    num: 268,
    name: "Cascoon",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 35,
      def: 55,
      spa: 25,
      spd: 25,
      spe: 15
    },
    weightkg: 11.5,
    evoLevel: 7,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "cascoon",
    fullname: "pokemon: Cascoon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cascoon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 205,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin"
    },
    evos: [
      "Dustox"
    ],
    nfe: true,
    prevo: "Wurmple"
  },
  dustox: {
    tags: [],
    num: 269,
    name: "Dustox",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 70,
      spa: 50,
      spd: 90,
      spe: 65
    },
    weightkg: 31.6,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "dustox",
    fullname: "pokemon: Dustox",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dustox",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 385,
    weighthg: 316,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Compound Eyes"
    },
    nfe: false,
    prevo: "Cascoon"
  },
  lotad: {
    tags: [],
    num: 270,
    name: "Lotad",
    types: [
      "Water",
      "Grass"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 30,
      spa: 40,
      spd: 50,
      spe: 30
    },
    weightkg: 2.6,
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    tier: "Illegal",
    id: "lotad",
    fullname: "pokemon: Lotad",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lotad",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 220,
    weighthg: 26,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    evos: [
      "Lombre"
    ],
    nfe: true
  },
  lombre: {
    tags: [],
    num: 271,
    name: "Lombre",
    types: [
      "Water",
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 50,
      spa: 60,
      spd: 70,
      spe: 50
    },
    weightkg: 32.5,
    evoLevel: 14,
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    tier: "Illegal",
    id: "lombre",
    fullname: "pokemon: Lombre",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lombre",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 340,
    weighthg: 325,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    evos: [
      "Ludicolo"
    ],
    nfe: true,
    prevo: "Lotad"
  },
  ludicolo: {
    tags: [],
    num: 272,
    name: "Ludicolo",
    types: [
      "Water",
      "Grass"
    ],
    baseStats: {
      hp: 80,
      atk: 70,
      def: 70,
      spa: 90,
      spd: 100,
      spe: 70
    },
    weightkg: 55,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Water 1",
      "Grass"
    ],
    tier: "Illegal",
    id: "ludicolo",
    fullname: "pokemon: Ludicolo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ludicolo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Rain Dish",
      H: "Own Tempo"
    },
    nfe: false,
    prevo: "Lombre"
  },
  seedot: {
    tags: [],
    num: 273,
    name: "Seedot",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 50,
      spa: 30,
      spd: 30,
      spe: 30
    },
    weightkg: 4,
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "seedot",
    fullname: "pokemon: Seedot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Seedot",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 220,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Early Bird",
      H: "Pickpocket"
    },
    evos: [
      "Nuzleaf"
    ],
    nfe: true
  },
  nuzleaf: {
    tags: [],
    num: 274,
    name: "Nuzleaf",
    types: [
      "Grass",
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 60
    },
    weightkg: 28,
    evoLevel: 14,
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "nuzleaf",
    fullname: "pokemon: Nuzleaf",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nuzleaf",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 340,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Early Bird",
      H: "Pickpocket"
    },
    evos: [
      "Shiftry"
    ],
    nfe: true,
    prevo: "Seedot"
  },
  shiftry: {
    tags: [],
    num: 275,
    name: "Shiftry",
    types: [
      "Grass",
      "Dark"
    ],
    baseStats: {
      hp: 90,
      atk: 100,
      def: 60,
      spa: 90,
      spd: 60,
      spe: 80
    },
    weightkg: 59.6,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "shiftry",
    fullname: "pokemon: Shiftry",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shiftry",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 596,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Early Bird",
      H: "Pickpocket"
    },
    nfe: false,
    prevo: "Nuzleaf"
  },
  taillow: {
    tags: [],
    num: 276,
    name: "Taillow",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 85
    },
    weightkg: 2.3,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "taillow",
    fullname: "pokemon: Taillow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Taillow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 270,
    weighthg: 23,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Guts",
      H: "Scrappy"
    },
    evos: [
      "Swellow"
    ],
    nfe: true
  },
  swellow: {
    tags: [],
    num: 277,
    name: "Swellow",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 60,
      spa: 75,
      spd: 50,
      spe: 125
    },
    weightkg: 19.8,
    evoLevel: 22,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "swellow",
    fullname: "pokemon: Swellow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swellow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 198,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Guts",
      H: "Scrappy"
    },
    nfe: false,
    prevo: "Taillow"
  },
  wingull: {
    tags: [],
    num: 278,
    name: "Wingull",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 30,
      spa: 55,
      spd: 30,
      spe: 85
    },
    weightkg: 9.5,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    tier: "LC",
    id: "wingull",
    fullname: "pokemon: Wingull",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Wingull",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 270,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Hydration",
      H: "Rain Dish"
    },
    evos: [
      "Pelipper"
    ],
    nfe: true
  },
  pelipper: {
    tags: [],
    num: 279,
    name: "Pelipper",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 100,
      spa: 95,
      spd: 70,
      spe: 65
    },
    weightkg: 28,
    evoLevel: 25,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    tier: "UU",
    doublesTier: "DOU",
    id: "pelipper",
    fullname: "pokemon: Pelipper",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pelipper",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 440,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Drizzle",
      H: "Rain Dish"
    },
    nfe: false,
    prevo: "Wingull"
  },
  ralts: {
    tags: [],
    num: 280,
    name: "Ralts",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 28,
      atk: 25,
      def: 25,
      spa: 45,
      spd: 35,
      spe: 40
    },
    weightkg: 6.6,
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    tier: "LC",
    id: "ralts",
    fullname: "pokemon: Ralts",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Ralts",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 198,
    weighthg: 66,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    evos: [
      "Kirlia"
    ],
    nfe: true
  },
  kirlia: {
    tags: [],
    num: 281,
    name: "Kirlia",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 38,
      atk: 35,
      def: 35,
      spa: 65,
      spd: 55,
      spe: 50
    },
    weightkg: 20.2,
    evoLevel: 20,
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    tier: "NFE",
    id: "kirlia",
    fullname: "pokemon: Kirlia",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Kirlia",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 278,
    weighthg: 202,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    evos: [
      "Gardevoir",
      "Gallade"
    ],
    nfe: true,
    prevo: "Ralts"
  },
  gardevoir: {
    tags: [],
    num: 282,
    name: "Gardevoir",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 68,
      atk: 65,
      def: 65,
      spa: 125,
      spd: 115,
      spe: 80
    },
    weightkg: 48.4,
    evoLevel: 30,
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    tier: "RU",
    doublesTier: "DUU",
    id: "gardevoir",
    fullname: "pokemon: Gardevoir",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gardevoir",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 518,
    weighthg: 484,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Synchronize",
      "1": "Trace",
      H: "Telepathy"
    },
    nfe: false,
    otherFormes: [
      "Gardevoir-Mega"
    ],
    formeOrder: [
      "Gardevoir",
      "Gardevoir-Mega"
    ],
    formes: [
      "Gardevoir",
      "Gardevoir-Mega"
    ],
    prevo: "Kirlia"
  },
  gardevoirmega: {
    tags: [],
    num: 282,
    name: "Gardevoir-Mega",
    baseSpecies: "Gardevoir",
    forme: "Mega",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 68,
      atk: 85,
      def: 65,
      spa: 165,
      spd: 135,
      spe: 100
    },
    weightkg: 48.4,
    eggGroups: [
      "Amorphous"
    ],
    requiredItem: "Gardevoirite",
    tier: "Illegal",
    id: "gardevoirmega",
    fullname: "pokemon: Gardevoir-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Gardevoirite"
    ],
    bst: 618,
    weighthg: 484,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Gardevoir",
    changesFrom: "Gardevoir",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pixilate"
    },
    nfe: false
  },
  surskit: {
    tags: [],
    num: 283,
    name: "Surskit",
    types: [
      "Bug",
      "Water"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 32,
      spa: 50,
      spd: 52,
      spe: 65
    },
    weightkg: 1.7,
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    tier: "LC",
    id: "surskit",
    fullname: "pokemon: Surskit",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Surskit",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 269,
    weighthg: 17,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Rain Dish"
    },
    evos: [
      "Masquerain"
    ],
    nfe: true
  },
  masquerain: {
    tags: [],
    num: 284,
    name: "Masquerain",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 60,
      def: 62,
      spa: 100,
      spd: 82,
      spe: 80
    },
    weightkg: 3.6,
    evoLevel: 22,
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "masquerain",
    fullname: "pokemon: Masquerain",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Masquerain",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 454,
    weighthg: 36,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Surskit"
  },
  shroomish: {
    tags: [],
    num: 285,
    name: "Shroomish",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 35
    },
    weightkg: 4.5,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "LC",
    id: "shroomish",
    fullname: "pokemon: Shroomish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shroomish",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 295,
    weighthg: 45,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      "1": "Poison Heal",
      H: "Quick Feet"
    },
    evos: [
      "Breloom"
    ],
    nfe: true
  },
  breloom: {
    tags: [],
    num: 286,
    name: "Breloom",
    types: [
      "Grass",
      "Fighting"
    ],
    baseStats: {
      hp: 60,
      atk: 130,
      def: 80,
      spa: 60,
      spd: 60,
      spe: 70
    },
    weightkg: 39.2,
    evoLevel: 23,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "breloom",
    fullname: "pokemon: Breloom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Breloom",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 460,
    weighthg: 392,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      "1": "Poison Heal",
      H: "Technician"
    },
    nfe: false,
    prevo: "Shroomish"
  },
  slakoth: {
    tags: [],
    num: 287,
    name: "Slakoth",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 35,
      spd: 35,
      spe: 30
    },
    weightkg: 24,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "slakoth",
    fullname: "pokemon: Slakoth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Slakoth",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 280,
    weighthg: 240,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Truant"
    },
    evos: [
      "Vigoroth"
    ],
    nfe: true
  },
  vigoroth: {
    tags: [],
    num: 288,
    name: "Vigoroth",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 55,
      spd: 55,
      spe: 90
    },
    weightkg: 46.5,
    evoLevel: 18,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "vigoroth",
    fullname: "pokemon: Vigoroth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Vigoroth",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 440,
    weighthg: 465,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit"
    },
    evos: [
      "Slaking"
    ],
    nfe: true,
    prevo: "Slakoth"
  },
  slaking: {
    tags: [],
    num: 289,
    name: "Slaking",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 150,
      atk: 160,
      def: 100,
      spa: 95,
      spd: 65,
      spe: 100
    },
    weightkg: 130.5,
    evoLevel: 36,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "DUU",
    id: "slaking",
    fullname: "pokemon: Slaking",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Slaking",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 670,
    weighthg: 1305,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Truant"
    },
    nfe: false,
    prevo: "Vigoroth"
  },
  nincada: {
    tags: [],
    num: 290,
    name: "Nincada",
    types: [
      "Bug",
      "Ground"
    ],
    baseStats: {
      hp: 31,
      atk: 45,
      def: 90,
      spa: 30,
      spd: 30,
      spe: 40
    },
    weightkg: 5.5,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "nincada",
    fullname: "pokemon: Nincada",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nincada",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 266,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      H: "Run Away"
    },
    evos: [
      "Ninjask",
      "Shedinja"
    ],
    nfe: true
  },
  ninjask: {
    tags: [],
    num: 291,
    name: "Ninjask",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 61,
      atk: 90,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 160
    },
    weightkg: 12,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "ninjask",
    fullname: "pokemon: Ninjask",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ninjask",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 456,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Speed Boost",
      H: "Infiltrator"
    },
    nfe: false,
    prevo: "Nincada"
  },
  shedinja: {
    tags: [],
    num: 292,
    name: "Shedinja",
    types: [
      "Bug",
      "Ghost"
    ],
    baseStats: {
      hp: 1,
      atk: 90,
      def: 45,
      spa: 30,
      spd: 30,
      spe: 40
    },
    maxHP: 1,
    weightkg: 1.2,
    evoLevel: 20,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "shedinja",
    fullname: "pokemon: Shedinja",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shedinja",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 236,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Wonder Guard"
    },
    nfe: false,
    prevo: "Nincada"
  },
  whismur: {
    tags: [],
    num: 293,
    name: "Whismur",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 64,
      atk: 51,
      def: 23,
      spa: 51,
      spd: 23,
      spe: 28
    },
    weightkg: 16.3,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "whismur",
    fullname: "pokemon: Whismur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Whismur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 240,
    weighthg: 163,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Soundproof",
      H: "Rattled"
    },
    evos: [
      "Loudred"
    ],
    nfe: true
  },
  loudred: {
    tags: [],
    num: 294,
    name: "Loudred",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 84,
      atk: 71,
      def: 43,
      spa: 71,
      spd: 43,
      spe: 48
    },
    weightkg: 40.5,
    evoLevel: 20,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "loudred",
    fullname: "pokemon: Loudred",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Loudred",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 360,
    weighthg: 405,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Soundproof",
      H: "Scrappy"
    },
    evos: [
      "Exploud"
    ],
    nfe: true,
    prevo: "Whismur"
  },
  exploud: {
    tags: [],
    num: 295,
    name: "Exploud",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 104,
      atk: 91,
      def: 63,
      spa: 91,
      spd: 73,
      spe: 68
    },
    weightkg: 84,
    evoLevel: 40,
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "exploud",
    fullname: "pokemon: Exploud",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Exploud",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 840,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Soundproof",
      H: "Scrappy"
    },
    nfe: false,
    prevo: "Loudred"
  },
  makuhita: {
    tags: [],
    num: 296,
    name: "Makuhita",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 72,
      atk: 60,
      def: 30,
      spa: 20,
      spd: 30,
      spe: 25
    },
    weightkg: 86.4,
    eggGroups: [
      "Human-Like"
    ],
    tier: "LC",
    id: "makuhita",
    fullname: "pokemon: Makuhita",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Makuhita",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 237,
    weighthg: 864,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Guts",
      H: "Sheer Force"
    },
    evos: [
      "Hariyama"
    ],
    nfe: true
  },
  hariyama: {
    tags: [],
    num: 297,
    name: "Hariyama",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 144,
      atk: 120,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 50
    },
    weightkg: 253.8,
    evoLevel: 24,
    eggGroups: [
      "Human-Like"
    ],
    tier: "RUBL",
    doublesTier: "DUU",
    id: "hariyama",
    fullname: "pokemon: Hariyama",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hariyama",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 474,
    weighthg: 2538,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Guts",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Makuhita"
  },
  azurill: {
    tags: [],
    num: 298,
    name: "Azurill",
    types: [
      "Normal",
      "Fairy"
    ],
    baseStats: {
      hp: 50,
      atk: 20,
      def: 40,
      spa: 20,
      spd: 40,
      spe: 20
    },
    weightkg: 2,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "azurill",
    fullname: "pokemon: Azurill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Azurill",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 190,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Huge Power",
      H: "Sap Sipper"
    },
    evos: [
      "Marill"
    ],
    nfe: true
  },
  nosepass: {
    tags: [],
    num: 299,
    name: "Nosepass",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 30,
      atk: 45,
      def: 135,
      spa: 45,
      spd: 90,
      spe: 30
    },
    weightkg: 97,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "nosepass",
    fullname: "pokemon: Nosepass",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nosepass",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 375,
    weighthg: 970,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Magnet Pull",
      H: "Sand Force"
    },
    evos: [
      "Probopass"
    ],
    nfe: true
  },
  skitty: {
    tags: [],
    num: 300,
    name: "Skitty",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 50,
      atk: 45,
      def: 45,
      spa: 35,
      spd: 35,
      spe: 50
    },
    weightkg: 11,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "skitty",
    fullname: "pokemon: Skitty",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Skitty",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 260,
    weighthg: 110,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Normalize",
      H: "Wonder Skin"
    },
    evos: [
      "Delcatty"
    ],
    nfe: true
  },
  delcatty: {
    tags: [],
    num: 301,
    name: "Delcatty",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 70,
      atk: 65,
      def: 65,
      spa: 55,
      spd: 55,
      spe: 90
    },
    weightkg: 32.6,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "delcatty",
    fullname: "pokemon: Delcatty",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Delcatty",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 400,
    weighthg: 326,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Normalize",
      H: "Wonder Skin"
    },
    nfe: false,
    prevo: "Skitty"
  },
  sableye: {
    tags: [],
    num: 302,
    name: "Sableye",
    types: [
      "Dark",
      "Ghost"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 75,
      spa: 65,
      spd: 65,
      spe: 50
    },
    weightkg: 11,
    eggGroups: [
      "Human-Like"
    ],
    tier: "RU",
    doublesTier: "DUU",
    id: "sableye",
    fullname: "pokemon: Sableye",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sableye",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 380,
    weighthg: 110,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Stall",
      H: "Prankster"
    },
    nfe: false,
    otherFormes: [
      "Sableye-Mega"
    ],
    formeOrder: [
      "Sableye",
      "Sableye-Mega"
    ],
    formes: [
      "Sableye",
      "Sableye-Mega"
    ]
  },
  sableyemega: {
    tags: [],
    num: 302,
    name: "Sableye-Mega",
    baseSpecies: "Sableye",
    forme: "Mega",
    types: [
      "Dark",
      "Ghost"
    ],
    baseStats: {
      hp: 50,
      atk: 85,
      def: 125,
      spa: 85,
      spd: 115,
      spe: 20
    },
    weightkg: 161,
    eggGroups: [
      "Human-Like"
    ],
    requiredItem: "Sablenite",
    tier: "Illegal",
    id: "sableyemega",
    fullname: "pokemon: Sableye-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Sablenite"
    ],
    bst: 480,
    weighthg: 1610,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Sableye",
    changesFrom: "Sableye",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magic Bounce"
    },
    nfe: false
  },
  mawile: {
    tags: [],
    num: 303,
    name: "Mawile",
    types: [
      "Steel",
      "Fairy"
    ],
    baseStats: {
      hp: 50,
      atk: 85,
      def: 85,
      spa: 55,
      spd: 55,
      spe: 50
    },
    weightkg: 11.5,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "mawile",
    fullname: "pokemon: Mawile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mawile",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 380,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Intimidate",
      H: "Sheer Force"
    },
    nfe: false,
    otherFormes: [
      "Mawile-Mega"
    ],
    formeOrder: [
      "Mawile",
      "Mawile-Mega"
    ],
    formes: [
      "Mawile",
      "Mawile-Mega"
    ]
  },
  mawilemega: {
    tags: [],
    num: 303,
    name: "Mawile-Mega",
    baseSpecies: "Mawile",
    forme: "Mega",
    types: [
      "Steel",
      "Fairy"
    ],
    baseStats: {
      hp: 50,
      atk: 105,
      def: 125,
      spa: 55,
      spd: 95,
      spe: 50
    },
    weightkg: 23.5,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    requiredItem: "Mawilite",
    tier: "Illegal",
    id: "mawilemega",
    fullname: "pokemon: Mawile-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Mawilite"
    ],
    bst: 480,
    weighthg: 235,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Mawile",
    changesFrom: "Mawile",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Huge Power"
    },
    nfe: false
  },
  aron: {
    tags: [],
    num: 304,
    name: "Aron",
    types: [
      "Steel",
      "Rock"
    ],
    baseStats: {
      hp: 50,
      atk: 70,
      def: 100,
      spa: 40,
      spd: 40,
      spe: 30
    },
    weightkg: 60,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "aron",
    fullname: "pokemon: Aron",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aron",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 330,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    evos: [
      "Lairon"
    ],
    nfe: true
  },
  lairon: {
    tags: [],
    num: 305,
    name: "Lairon",
    types: [
      "Steel",
      "Rock"
    ],
    baseStats: {
      hp: 60,
      atk: 90,
      def: 140,
      spa: 50,
      spd: 50,
      spe: 40
    },
    weightkg: 120,
    evoLevel: 32,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "lairon",
    fullname: "pokemon: Lairon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lairon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 430,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    evos: [
      "Aggron"
    ],
    nfe: true,
    prevo: "Aron"
  },
  aggron: {
    tags: [],
    num: 306,
    name: "Aggron",
    types: [
      "Steel",
      "Rock"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 180,
      spa: 60,
      spd: 60,
      spe: 50
    },
    weightkg: 360,
    evoLevel: 42,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "aggron",
    fullname: "pokemon: Aggron",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aggron",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 3600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Heavy Metal"
    },
    nfe: false,
    otherFormes: [
      "Aggron-Mega"
    ],
    formeOrder: [
      "Aggron",
      "Aggron-Mega"
    ],
    formes: [
      "Aggron",
      "Aggron-Mega"
    ],
    prevo: "Lairon"
  },
  aggronmega: {
    tags: [],
    num: 306,
    name: "Aggron-Mega",
    baseSpecies: "Aggron",
    forme: "Mega",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 140,
      def: 230,
      spa: 60,
      spd: 80,
      spe: 50
    },
    weightkg: 395,
    eggGroups: [
      "Monster"
    ],
    requiredItem: "Aggronite",
    tier: "Illegal",
    id: "aggronmega",
    fullname: "pokemon: Aggron-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Aggronite"
    ],
    bst: 630,
    weighthg: 3950,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Aggron",
    changesFrom: "Aggron",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Filter"
    },
    nfe: false
  },
  meditite: {
    tags: [],
    num: 307,
    name: "Meditite",
    types: [
      "Fighting",
      "Psychic"
    ],
    baseStats: {
      hp: 30,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 55,
      spe: 60
    },
    weightkg: 11.2,
    eggGroups: [
      "Human-Like"
    ],
    tier: "NFE",
    id: "meditite",
    fullname: "pokemon: Meditite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Meditite",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 280,
    weighthg: 112,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pure Power",
      H: "Telepathy"
    },
    evos: [
      "Medicham"
    ],
    nfe: true
  },
  medicham: {
    tags: [],
    num: 308,
    name: "Medicham",
    types: [
      "Fighting",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 80
    },
    weightkg: 31.5,
    evoLevel: 37,
    eggGroups: [
      "Human-Like"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "medicham",
    fullname: "pokemon: Medicham",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Medicham",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 410,
    weighthg: 315,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pure Power",
      H: "Telepathy"
    },
    nfe: false,
    otherFormes: [
      "Medicham-Mega"
    ],
    formeOrder: [
      "Medicham",
      "Medicham-Mega"
    ],
    formes: [
      "Medicham",
      "Medicham-Mega"
    ],
    prevo: "Meditite"
  },
  medichammega: {
    tags: [],
    num: 308,
    name: "Medicham-Mega",
    baseSpecies: "Medicham",
    forme: "Mega",
    types: [
      "Fighting",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 100,
      def: 85,
      spa: 80,
      spd: 85,
      spe: 100
    },
    weightkg: 31.5,
    eggGroups: [
      "Human-Like"
    ],
    requiredItem: "Medichamite",
    tier: "Illegal",
    id: "medichammega",
    fullname: "pokemon: Medicham-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Medichamite"
    ],
    bst: 510,
    weighthg: 315,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Medicham",
    changesFrom: "Medicham",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pure Power"
    },
    nfe: false
  },
  electrike: {
    tags: [],
    num: 309,
    name: "Electrike",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 65,
      spd: 40,
      spe: 65
    },
    weightkg: 15.2,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "electrike",
    fullname: "pokemon: Electrike",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Electrike",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 295,
    weighthg: 152,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      "1": "Lightning Rod",
      H: "Minus"
    },
    evos: [
      "Manectric"
    ],
    nfe: true
  },
  manectric: {
    tags: [],
    num: 310,
    name: "Manectric",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 70,
      atk: 75,
      def: 60,
      spa: 105,
      spd: 60,
      spe: 105
    },
    weightkg: 40.2,
    evoLevel: 26,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "manectric",
    fullname: "pokemon: Manectric",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Manectric",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 475,
    weighthg: 402,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      "1": "Lightning Rod",
      H: "Minus"
    },
    nfe: false,
    otherFormes: [
      "Manectric-Mega"
    ],
    formeOrder: [
      "Manectric",
      "Manectric-Mega"
    ],
    formes: [
      "Manectric",
      "Manectric-Mega"
    ],
    prevo: "Electrike"
  },
  manectricmega: {
    tags: [],
    num: 310,
    name: "Manectric-Mega",
    baseSpecies: "Manectric",
    forme: "Mega",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 70,
      atk: 75,
      def: 80,
      spa: 135,
      spd: 80,
      spe: 135
    },
    weightkg: 44,
    eggGroups: [
      "Field"
    ],
    requiredItem: "Manectite",
    tier: "Illegal",
    id: "manectricmega",
    fullname: "pokemon: Manectric-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Manectite"
    ],
    bst: 575,
    weighthg: 440,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Manectric",
    changesFrom: "Manectric",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate"
    },
    nfe: false
  },
  plusle: {
    tags: [],
    num: 311,
    name: "Plusle",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 40,
      spa: 85,
      spd: 75,
      spe: 95
    },
    weightkg: 4.2,
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "plusle",
    fullname: "pokemon: Plusle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Plusle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 405,
    weighthg: 42,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Plus",
      H: "Lightning Rod"
    },
    nfe: false
  },
  minun: {
    tags: [],
    num: 312,
    name: "Minun",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 40,
      def: 50,
      spa: 75,
      spd: 85,
      spe: 95
    },
    weightkg: 4.2,
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "minun",
    fullname: "pokemon: Minun",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Minun",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 405,
    weighthg: 42,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Minus",
      H: "Volt Absorb"
    },
    nfe: false
  },
  volbeat: {
    tags: [],
    num: 313,
    name: "Volbeat",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 65,
      atk: 73,
      def: 75,
      spa: 47,
      spd: 85,
      spe: 85
    },
    weightkg: 17.7,
    eggGroups: [
      "Bug",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "volbeat",
    fullname: "pokemon: Volbeat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Volbeat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 430,
    weighthg: 177,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Illuminate",
      "1": "Swarm",
      H: "Prankster"
    },
    nfe: false
  },
  illumise: {
    tags: [],
    num: 314,
    name: "Illumise",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 65,
      atk: 47,
      def: 75,
      spa: 73,
      spd: 85,
      spe: 85
    },
    weightkg: 17.7,
    eggGroups: [
      "Bug",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "illumise",
    fullname: "pokemon: Illumise",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Illumise",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 430,
    weighthg: 177,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Oblivious",
      "1": "Tinted Lens",
      H: "Prankster"
    },
    nfe: false
  },
  roselia: {
    tags: [],
    num: 315,
    name: "Roselia",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 50,
      atk: 60,
      def: 45,
      spa: 100,
      spd: 80,
      spe: 65
    },
    weightkg: 2,
    evoType: "levelFriendship",
    evoCondition: "during the day",
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "roselia",
    fullname: "pokemon: Roselia",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Roselia",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 400,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Leaf Guard"
    },
    evos: [
      "Roserade"
    ],
    nfe: true,
    prevo: "Budew"
  },
  gulpin: {
    tags: [],
    num: 316,
    name: "Gulpin",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 70,
      atk: 43,
      def: 53,
      spa: 43,
      spd: 53,
      spe: 40
    },
    weightkg: 10.3,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "gulpin",
    fullname: "pokemon: Gulpin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gulpin",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 302,
    weighthg: 103,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Liquid Ooze",
      "1": "Sticky Hold",
      H: "Gluttony"
    },
    evos: [
      "Swalot"
    ],
    nfe: true
  },
  swalot: {
    tags: [],
    num: 317,
    name: "Swalot",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 100,
      atk: 73,
      def: 83,
      spa: 73,
      spd: 83,
      spe: 55
    },
    weightkg: 80,
    evoLevel: 26,
    eggGroups: [
      "Amorphous"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "swalot",
    fullname: "pokemon: Swalot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Swalot",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 467,
    weighthg: 800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Liquid Ooze",
      "1": "Sticky Hold",
      H: "Gluttony"
    },
    nfe: false,
    prevo: "Gulpin"
  },
  carvanha: {
    tags: [],
    num: 318,
    name: "Carvanha",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 45,
      atk: 90,
      def: 20,
      spa: 65,
      spd: 20,
      spe: 65
    },
    weightkg: 20.8,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "carvanha",
    fullname: "pokemon: Carvanha",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Carvanha",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 208,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rough Skin",
      H: "Speed Boost"
    },
    evos: [
      "Sharpedo"
    ],
    nfe: true
  },
  sharpedo: {
    tags: [],
    num: 319,
    name: "Sharpedo",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 120,
      def: 40,
      spa: 95,
      spd: 40,
      spe: 95
    },
    weightkg: 88.8,
    evoLevel: 30,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "sharpedo",
    fullname: "pokemon: Sharpedo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sharpedo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 460,
    weighthg: 888,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rough Skin",
      H: "Speed Boost"
    },
    nfe: false,
    otherFormes: [
      "Sharpedo-Mega"
    ],
    formeOrder: [
      "Sharpedo",
      "Sharpedo-Mega"
    ],
    formes: [
      "Sharpedo",
      "Sharpedo-Mega"
    ],
    prevo: "Carvanha"
  },
  sharpedomega: {
    tags: [],
    num: 319,
    name: "Sharpedo-Mega",
    baseSpecies: "Sharpedo",
    forme: "Mega",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 140,
      def: 70,
      spa: 110,
      spd: 65,
      spe: 105
    },
    weightkg: 130.3,
    eggGroups: [
      "Water 2"
    ],
    requiredItem: "Sharpedonite",
    tier: "Illegal",
    id: "sharpedomega",
    fullname: "pokemon: Sharpedo-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Sharpedonite"
    ],
    bst: 560,
    weighthg: 1303,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Sharpedo",
    changesFrom: "Sharpedo",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Strong Jaw"
    },
    nfe: false
  },
  wailmer: {
    tags: [],
    num: 320,
    name: "Wailmer",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 130,
      atk: 70,
      def: 35,
      spa: 70,
      spd: 35,
      spe: 60
    },
    weightkg: 130,
    eggGroups: [
      "Field",
      "Water 2"
    ],
    tier: "Illegal",
    id: "wailmer",
    fullname: "pokemon: Wailmer",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wailmer",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 400,
    weighthg: 1300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Veil",
      "1": "Oblivious",
      H: "Pressure"
    },
    evos: [
      "Wailord"
    ],
    nfe: true
  },
  wailord: {
    tags: [],
    num: 321,
    name: "Wailord",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 170,
      atk: 90,
      def: 45,
      spa: 90,
      spd: 45,
      spe: 60
    },
    weightkg: 398,
    evoLevel: 40,
    eggGroups: [
      "Field",
      "Water 2"
    ],
    tier: "Illegal",
    id: "wailord",
    fullname: "pokemon: Wailord",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wailord",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 3980,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Veil",
      "1": "Oblivious",
      H: "Pressure"
    },
    nfe: false,
    prevo: "Wailmer"
  },
  numel: {
    tags: [],
    num: 322,
    name: "Numel",
    types: [
      "Fire",
      "Ground"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 40,
      spa: 65,
      spd: 45,
      spe: 35
    },
    weightkg: 24,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "numel",
    fullname: "pokemon: Numel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Numel",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 240,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Simple",
      H: "Own Tempo"
    },
    evos: [
      "Camerupt"
    ],
    nfe: true
  },
  camerupt: {
    tags: [],
    num: 323,
    name: "Camerupt",
    types: [
      "Fire",
      "Ground"
    ],
    baseStats: {
      hp: 70,
      atk: 100,
      def: 70,
      spa: 105,
      spd: 75,
      spe: 40
    },
    weightkg: 220,
    evoLevel: 33,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "camerupt",
    fullname: "pokemon: Camerupt",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Camerupt",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 460,
    weighthg: 2200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magma Armor",
      "1": "Solid Rock",
      H: "Anger Point"
    },
    nfe: false,
    otherFormes: [
      "Camerupt-Mega"
    ],
    formeOrder: [
      "Camerupt",
      "Camerupt-Mega"
    ],
    formes: [
      "Camerupt",
      "Camerupt-Mega"
    ],
    prevo: "Numel"
  },
  cameruptmega: {
    tags: [],
    num: 323,
    name: "Camerupt-Mega",
    baseSpecies: "Camerupt",
    forme: "Mega",
    types: [
      "Fire",
      "Ground"
    ],
    baseStats: {
      hp: 70,
      atk: 120,
      def: 100,
      spa: 145,
      spd: 105,
      spe: 20
    },
    weightkg: 320.5,
    eggGroups: [
      "Field"
    ],
    requiredItem: "Cameruptite",
    tier: "Illegal",
    id: "cameruptmega",
    fullname: "pokemon: Camerupt-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Cameruptite"
    ],
    bst: 560,
    weighthg: 3205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Camerupt",
    changesFrom: "Camerupt",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sheer Force"
    },
    nfe: false
  },
  torkoal: {
    tags: [],
    num: 324,
    name: "Torkoal",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 140,
      spa: 85,
      spd: 70,
      spe: 20
    },
    weightkg: 80.4,
    eggGroups: [
      "Field"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "torkoal",
    fullname: "pokemon: Torkoal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Torkoal",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 804,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "White Smoke",
      "1": "Drought",
      H: "Shell Armor"
    },
    nfe: false
  },
  spoink: {
    tags: [],
    num: 325,
    name: "Spoink",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 25,
      def: 35,
      spa: 70,
      spd: 80,
      spe: 60
    },
    weightkg: 30.6,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "spoink",
    fullname: "pokemon: Spoink",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Spoink",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 306,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Gluttony"
    },
    evos: [
      "Grumpig"
    ],
    nfe: true
  },
  grumpig: {
    tags: [],
    num: 326,
    name: "Grumpig",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 45,
      def: 65,
      spa: 90,
      spd: 110,
      spe: 80
    },
    weightkg: 71.5,
    evoLevel: 32,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "grumpig",
    fullname: "pokemon: Grumpig",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Grumpig",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 470,
    weighthg: 715,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Gluttony"
    },
    nfe: false,
    prevo: "Spoink"
  },
  spinda: {
    tags: [],
    num: 327,
    name: "Spinda",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 60
    },
    weightkg: 5,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "spinda",
    fullname: "pokemon: Spinda",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Spinda",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 360,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Tangled Feet",
      H: "Contrary"
    },
    nfe: false
  },
  trapinch: {
    tags: [],
    num: 328,
    name: "Trapinch",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 45,
      atk: 100,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 10
    },
    weightkg: 15,
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    tier: "Illegal",
    id: "trapinch",
    fullname: "pokemon: Trapinch",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Trapinch",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 290,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Arena Trap",
      H: "Sheer Force"
    },
    evos: [
      "Vibrava"
    ],
    nfe: true
  },
  vibrava: {
    tags: [],
    num: 329,
    name: "Vibrava",
    types: [
      "Ground",
      "Dragon"
    ],
    baseStats: {
      hp: 50,
      atk: 70,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 70
    },
    weightkg: 15.3,
    evoLevel: 35,
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    tier: "Illegal",
    id: "vibrava",
    fullname: "pokemon: Vibrava",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vibrava",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 340,
    weighthg: 153,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Flygon"
    ],
    nfe: true,
    prevo: "Trapinch"
  },
  flygon: {
    tags: [],
    num: 330,
    name: "Flygon",
    types: [
      "Ground",
      "Dragon"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 100
    },
    weightkg: 82,
    evoLevel: 45,
    eggGroups: [
      "Bug",
      "Dragon"
    ],
    tier: "Illegal",
    id: "flygon",
    fullname: "pokemon: Flygon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Flygon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 820,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Vibrava"
  },
  cacnea: {
    tags: [],
    num: 331,
    name: "Cacnea",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 50,
      atk: 85,
      def: 40,
      spa: 85,
      spd: 40,
      spe: 35
    },
    weightkg: 51.3,
    eggGroups: [
      "Grass",
      "Human-Like"
    ],
    tier: "LC",
    id: "cacnea",
    fullname: "pokemon: Cacnea",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cacnea",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 335,
    weighthg: 513,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Water Absorb"
    },
    evos: [
      "Cacturne"
    ],
    nfe: true
  },
  cacturne: {
    tags: [],
    num: 332,
    name: "Cacturne",
    types: [
      "Grass",
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 115,
      def: 60,
      spa: 115,
      spd: 60,
      spe: 55
    },
    weightkg: 77.4,
    evoLevel: 32,
    eggGroups: [
      "Grass",
      "Human-Like"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "cacturne",
    fullname: "pokemon: Cacturne",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cacturne",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 475,
    weighthg: 774,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Water Absorb"
    },
    nfe: false,
    prevo: "Cacnea"
  },
  swablu: {
    tags: [],
    num: 333,
    name: "Swablu",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 45,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 75,
      spe: 50
    },
    weightkg: 1.2,
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    tier: "LC",
    id: "swablu",
    fullname: "pokemon: Swablu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Swablu",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 310,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      H: "Cloud Nine"
    },
    evos: [
      "Altaria"
    ],
    nfe: true
  },
  altaria: {
    tags: [],
    num: 334,
    name: "Altaria",
    types: [
      "Dragon",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 70,
      def: 90,
      spa: 70,
      spd: 105,
      spe: 80
    },
    weightkg: 20.6,
    evoLevel: 35,
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "altaria",
    fullname: "pokemon: Altaria",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Altaria",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 206,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      H: "Cloud Nine"
    },
    nfe: false,
    otherFormes: [
      "Altaria-Mega"
    ],
    formeOrder: [
      "Altaria",
      "Altaria-Mega"
    ],
    formes: [
      "Altaria",
      "Altaria-Mega"
    ],
    prevo: "Swablu"
  },
  altariamega: {
    tags: [],
    num: 334,
    name: "Altaria-Mega",
    baseSpecies: "Altaria",
    forme: "Mega",
    types: [
      "Dragon",
      "Fairy"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 110,
      spa: 110,
      spd: 105,
      spe: 80
    },
    weightkg: 20.6,
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    requiredItem: "Altarianite",
    tier: "Illegal",
    id: "altariamega",
    fullname: "pokemon: Altaria-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Altarianite"
    ],
    bst: 590,
    weighthg: 206,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Altaria",
    changesFrom: "Altaria",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pixilate"
    },
    nfe: false
  },
  zangoose: {
    tags: [],
    num: 335,
    name: "Zangoose",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 73,
      atk: 115,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 90
    },
    weightkg: 40.3,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "zangoose",
    fullname: "pokemon: Zangoose",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Zangoose",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 458,
    weighthg: 403,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Immunity",
      H: "Toxic Boost"
    },
    nfe: false
  },
  seviper: {
    tags: [],
    num: 336,
    name: "Seviper",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 73,
      atk: 100,
      def: 60,
      spa: 100,
      spd: 60,
      spe: 65
    },
    weightkg: 52.5,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "seviper",
    fullname: "pokemon: Seviper",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Seviper",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 458,
    weighthg: 525,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Infiltrator"
    },
    nfe: false
  },
  lunatone: {
    tags: [],
    num: 337,
    name: "Lunatone",
    types: [
      "Rock",
      "Psychic"
    ],
    baseStats: {
      hp: 90,
      atk: 55,
      def: 65,
      spa: 95,
      spd: 85,
      spe: 70
    },
    weightkg: 168,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "lunatone",
    fullname: "pokemon: Lunatone",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lunatone",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 460,
    weighthg: 1680,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  solrock: {
    tags: [],
    num: 338,
    name: "Solrock",
    types: [
      "Rock",
      "Psychic"
    ],
    baseStats: {
      hp: 90,
      atk: 95,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 70
    },
    weightkg: 154,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "solrock",
    fullname: "pokemon: Solrock",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Solrock",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 460,
    weighthg: 1540,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  barboach: {
    tags: [],
    num: 339,
    name: "Barboach",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 50,
      atk: 48,
      def: 43,
      spa: 46,
      spd: 41,
      spe: 60
    },
    weightkg: 1.9,
    eggGroups: [
      "Water 2"
    ],
    tier: "LC",
    id: "barboach",
    fullname: "pokemon: Barboach",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Barboach",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 288,
    weighthg: 19,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Anticipation",
      H: "Hydration"
    },
    evos: [
      "Whiscash"
    ],
    nfe: true
  },
  whiscash: {
    tags: [],
    num: 340,
    name: "Whiscash",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 110,
      atk: 78,
      def: 73,
      spa: 76,
      spd: 71,
      spe: 60
    },
    weightkg: 23.6,
    evoLevel: 30,
    eggGroups: [
      "Water 2"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "whiscash",
    fullname: "pokemon: Whiscash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Whiscash",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 468,
    weighthg: 236,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Anticipation",
      H: "Hydration"
    },
    nfe: false,
    prevo: "Barboach"
  },
  corphish: {
    tags: [],
    num: 341,
    name: "Corphish",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 43,
      atk: 80,
      def: 65,
      spa: 50,
      spd: 35,
      spe: 35
    },
    weightkg: 11.5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "corphish",
    fullname: "pokemon: Corphish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Corphish",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 308,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Adaptability"
    },
    evos: [
      "Crawdaunt"
    ],
    nfe: true
  },
  crawdaunt: {
    tags: [],
    num: 342,
    name: "Crawdaunt",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 63,
      atk: 120,
      def: 85,
      spa: 90,
      spd: 55,
      spe: 55
    },
    weightkg: 32.8,
    evoLevel: 30,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "crawdaunt",
    fullname: "pokemon: Crawdaunt",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Crawdaunt",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 468,
    weighthg: 328,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Shell Armor",
      H: "Adaptability"
    },
    nfe: false,
    prevo: "Corphish"
  },
  baltoy: {
    tags: [],
    num: 343,
    name: "Baltoy",
    types: [
      "Ground",
      "Psychic"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 70,
      spe: 55
    },
    weightkg: 21.5,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "baltoy",
    fullname: "pokemon: Baltoy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Baltoy",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 215,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Claydol"
    ],
    nfe: true
  },
  claydol: {
    tags: [],
    num: 344,
    name: "Claydol",
    types: [
      "Ground",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 70,
      def: 105,
      spa: 70,
      spd: 120,
      spe: 75
    },
    weightkg: 108,
    evoLevel: 36,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "claydol",
    fullname: "pokemon: Claydol",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Claydol",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 1080,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Baltoy"
  },
  lileep: {
    tags: [],
    num: 345,
    name: "Lileep",
    types: [
      "Rock",
      "Grass"
    ],
    baseStats: {
      hp: 66,
      atk: 41,
      def: 77,
      spa: 61,
      spd: 87,
      spe: 23
    },
    weightkg: 23.8,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "lileep",
    fullname: "pokemon: Lileep",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lileep",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 238,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Suction Cups",
      H: "Storm Drain"
    },
    evos: [
      "Cradily"
    ],
    nfe: true
  },
  cradily: {
    tags: [],
    num: 346,
    name: "Cradily",
    types: [
      "Rock",
      "Grass"
    ],
    baseStats: {
      hp: 86,
      atk: 81,
      def: 97,
      spa: 81,
      spd: 107,
      spe: 43
    },
    weightkg: 60.4,
    evoLevel: 40,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "cradily",
    fullname: "pokemon: Cradily",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cradily",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 604,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Suction Cups",
      H: "Storm Drain"
    },
    nfe: false,
    prevo: "Lileep"
  },
  anorith: {
    tags: [],
    num: 347,
    name: "Anorith",
    types: [
      "Rock",
      "Bug"
    ],
    baseStats: {
      hp: 45,
      atk: 95,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    },
    weightkg: 12.5,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "anorith",
    fullname: "pokemon: Anorith",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Anorith",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Battle Armor",
      H: "Swift Swim"
    },
    evos: [
      "Armaldo"
    ],
    nfe: true
  },
  armaldo: {
    tags: [],
    num: 348,
    name: "Armaldo",
    types: [
      "Rock",
      "Bug"
    ],
    baseStats: {
      hp: 75,
      atk: 125,
      def: 100,
      spa: 70,
      spd: 80,
      spe: 45
    },
    weightkg: 68.2,
    evoLevel: 40,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "armaldo",
    fullname: "pokemon: Armaldo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Armaldo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 682,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Battle Armor",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Anorith"
  },
  feebas: {
    tags: [],
    num: 349,
    name: "Feebas",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 20,
      atk: 15,
      def: 20,
      spa: 10,
      spd: 55,
      spe: 80
    },
    weightkg: 7.4,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "Illegal",
    id: "feebas",
    fullname: "pokemon: Feebas",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Feebas",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 200,
    weighthg: 74,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Oblivious",
      H: "Adaptability"
    },
    evos: [
      "Milotic"
    ],
    nfe: true
  },
  milotic: {
    tags: [],
    num: 350,
    name: "Milotic",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 95,
      atk: 60,
      def: 79,
      spa: 100,
      spd: 125,
      spe: 81
    },
    weightkg: 162,
    evoType: "trade",
    evoItem: "Prism Scale",
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "Illegal",
    id: "milotic",
    fullname: "pokemon: Milotic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Milotic",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 540,
    weighthg: 1620,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Marvel Scale",
      "1": "Competitive",
      H: "Cute Charm"
    },
    nfe: false,
    prevo: "Feebas"
  },
  castform: {
    tags: [],
    num: 351,
    name: "Castform",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    },
    weightkg: 0.8,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "castform",
    fullname: "pokemon: Castform",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Castform",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 420,
    weighthg: 8,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forecast"
    },
    nfe: false,
    otherFormes: [
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    formeOrder: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ],
    formes: [
      "Castform",
      "Castform-Sunny",
      "Castform-Rainy",
      "Castform-Snowy"
    ]
  },
  castformrainy: {
    tags: [],
    num: 351,
    name: "Castform-Rainy",
    baseSpecies: "Castform",
    forme: "Rainy",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    },
    weightkg: 0.8,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    requiredAbility: "Forecast",
    battleOnly: "Castform",
    id: "castformrainy",
    fullname: "pokemon: Castform-Rainy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 420,
    weighthg: 8,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Castform",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forecast"
    },
    nfe: false
  },
  castformsnowy: {
    tags: [],
    num: 351,
    name: "Castform-Snowy",
    baseSpecies: "Castform",
    forme: "Snowy",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    },
    weightkg: 0.8,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    requiredAbility: "Forecast",
    battleOnly: "Castform",
    id: "castformsnowy",
    fullname: "pokemon: Castform-Snowy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 420,
    weighthg: 8,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Castform",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forecast"
    },
    nfe: false
  },
  castformsunny: {
    tags: [],
    num: 351,
    name: "Castform-Sunny",
    baseSpecies: "Castform",
    forme: "Sunny",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 70
    },
    weightkg: 0.8,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    requiredAbility: "Forecast",
    battleOnly: "Castform",
    id: "castformsunny",
    fullname: "pokemon: Castform-Sunny",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 420,
    weighthg: 8,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Castform",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forecast"
    },
    nfe: false
  },
  kecleon: {
    tags: [],
    num: 352,
    name: "Kecleon",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 90,
      def: 70,
      spa: 60,
      spd: 120,
      spe: 40
    },
    weightkg: 22,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "kecleon",
    fullname: "pokemon: Kecleon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kecleon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 440,
    weighthg: 220,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Color Change",
      H: "Protean"
    },
    nfe: false
  },
  shuppet: {
    tags: [],
    num: 353,
    name: "Shuppet",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 44,
      atk: 75,
      def: 35,
      spa: 63,
      spd: 33,
      spe: 45
    },
    weightkg: 2.3,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "shuppet",
    fullname: "pokemon: Shuppet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shuppet",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 295,
    weighthg: 23,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Frisk",
      H: "Cursed Body"
    },
    evos: [
      "Banette"
    ],
    nfe: true
  },
  banette: {
    tags: [],
    num: 354,
    name: "Banette",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 64,
      atk: 115,
      def: 65,
      spa: 83,
      spd: 63,
      spe: 65
    },
    weightkg: 12.5,
    evoLevel: 37,
    eggGroups: [
      "Amorphous"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "banette",
    fullname: "pokemon: Banette",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Banette",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 455,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Frisk",
      H: "Cursed Body"
    },
    nfe: false,
    otherFormes: [
      "Banette-Mega"
    ],
    formeOrder: [
      "Banette",
      "Banette-Mega"
    ],
    formes: [
      "Banette",
      "Banette-Mega"
    ],
    prevo: "Shuppet"
  },
  banettemega: {
    tags: [],
    num: 354,
    name: "Banette-Mega",
    baseSpecies: "Banette",
    forme: "Mega",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 64,
      atk: 165,
      def: 75,
      spa: 93,
      spd: 83,
      spe: 75
    },
    weightkg: 13,
    eggGroups: [
      "Amorphous"
    ],
    requiredItem: "Banettite",
    tier: "Illegal",
    id: "banettemega",
    fullname: "pokemon: Banette-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Banettite"
    ],
    bst: 555,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Banette",
    changesFrom: "Banette",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Prankster"
    },
    nfe: false
  },
  duskull: {
    tags: [],
    num: 355,
    name: "Duskull",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 20,
      atk: 40,
      def: 90,
      spa: 30,
      spd: 90,
      spe: 25
    },
    weightkg: 15,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "duskull",
    fullname: "pokemon: Duskull",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Duskull",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 295,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate",
      H: "Frisk"
    },
    evos: [
      "Dusclops"
    ],
    nfe: true
  },
  dusclops: {
    tags: [],
    num: 356,
    name: "Dusclops",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 40,
      atk: 70,
      def: 130,
      spa: 60,
      spd: 130,
      spe: 25
    },
    weightkg: 30.6,
    evoLevel: 37,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "dusclops",
    fullname: "pokemon: Dusclops",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dusclops",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 306,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      H: "Frisk"
    },
    evos: [
      "Dusknoir"
    ],
    nfe: true,
    prevo: "Duskull"
  },
  tropius: {
    tags: [],
    num: 357,
    name: "Tropius",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 99,
      atk: 68,
      def: 83,
      spa: 72,
      spd: 87,
      spe: 51
    },
    weightkg: 100,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "tropius",
    fullname: "pokemon: Tropius",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Tropius",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 460,
    weighthg: 1000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Solar Power",
      H: "Harvest"
    },
    nfe: false
  },
  chimecho: {
    tags: [],
    num: 358,
    name: "Chimecho",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 75,
      atk: 50,
      def: 80,
      spa: 95,
      spd: 90,
      spe: 65
    },
    weightkg: 1,
    evoType: "levelFriendship",
    evoCondition: "at night",
    eggGroups: [
      "Amorphous"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "chimecho",
    fullname: "pokemon: Chimecho",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chimecho",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 455,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Chingling"
  },
  absol: {
    tags: [],
    num: 359,
    name: "Absol",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 65,
      atk: 130,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 75
    },
    weightkg: 47,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "absol",
    fullname: "pokemon: Absol",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Absol",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 465,
    weighthg: 470,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      "1": "Super Luck",
      H: "Justified"
    },
    nfe: false,
    otherFormes: [
      "Absol-Mega"
    ],
    formeOrder: [
      "Absol",
      "Absol-Mega"
    ],
    formes: [
      "Absol",
      "Absol-Mega"
    ]
  },
  absolmega: {
    tags: [],
    num: 359,
    name: "Absol-Mega",
    baseSpecies: "Absol",
    forme: "Mega",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 65,
      atk: 150,
      def: 60,
      spa: 115,
      spd: 60,
      spe: 115
    },
    weightkg: 49,
    eggGroups: [
      "Field"
    ],
    requiredItem: "Absolite",
    tier: "Illegal",
    id: "absolmega",
    fullname: "pokemon: Absol-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Absolite"
    ],
    bst: 565,
    weighthg: 490,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Absol",
    changesFrom: "Absol",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Magic Bounce"
    },
    nfe: false
  },
  wynaut: {
    tags: [],
    num: 360,
    name: "Wynaut",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 23,
      def: 48,
      spa: 23,
      spd: 48,
      spe: 23
    },
    weightkg: 14,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "wynaut",
    fullname: "pokemon: Wynaut",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wynaut",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 260,
    weighthg: 140,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shadow Tag",
      H: "Telepathy"
    },
    evos: [
      "Wobbuffet"
    ],
    nfe: true
  },
  snorunt: {
    tags: [],
    num: 361,
    name: "Snorunt",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 50,
      spa: 50,
      spd: 50,
      spe: 50
    },
    weightkg: 16.8,
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    tier: "LC",
    id: "snorunt",
    fullname: "pokemon: Snorunt",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Snorunt",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 168,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Ice Body",
      H: "Moody"
    },
    evos: [
      "Glalie",
      "Froslass"
    ],
    nfe: true
  },
  glalie: {
    tags: [],
    num: 362,
    name: "Glalie",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 80
    },
    weightkg: 256.5,
    evoLevel: 42,
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "glalie",
    fullname: "pokemon: Glalie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Glalie",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 2565,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Ice Body",
      H: "Moody"
    },
    nfe: false,
    otherFormes: [
      "Glalie-Mega"
    ],
    formeOrder: [
      "Glalie",
      "Glalie-Mega"
    ],
    formes: [
      "Glalie",
      "Glalie-Mega"
    ],
    prevo: "Snorunt"
  },
  glaliemega: {
    tags: [],
    num: 362,
    name: "Glalie-Mega",
    baseSpecies: "Glalie",
    forme: "Mega",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 80,
      spa: 120,
      spd: 80,
      spe: 100
    },
    weightkg: 350.2,
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    requiredItem: "Glalitite",
    tier: "Illegal",
    id: "glaliemega",
    fullname: "pokemon: Glalie-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Glalitite"
    ],
    bst: 580,
    weighthg: 3502,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Glalie",
    changesFrom: "Glalie",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Refrigerate"
    },
    nfe: false
  },
  spheal: {
    tags: [],
    num: 363,
    name: "Spheal",
    types: [
      "Ice",
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 40,
      def: 50,
      spa: 55,
      spd: 50,
      spe: 25
    },
    weightkg: 39.5,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "spheal",
    fullname: "pokemon: Spheal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Spheal",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 290,
    weighthg: 395,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    evos: [
      "Sealeo"
    ],
    nfe: true
  },
  sealeo: {
    tags: [],
    num: 364,
    name: "Sealeo",
    types: [
      "Ice",
      "Water"
    ],
    baseStats: {
      hp: 90,
      atk: 60,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 45
    },
    weightkg: 87.6,
    evoLevel: 32,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "sealeo",
    fullname: "pokemon: Sealeo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sealeo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 410,
    weighthg: 876,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    evos: [
      "Walrein"
    ],
    nfe: true,
    prevo: "Spheal"
  },
  walrein: {
    tags: [],
    num: 365,
    name: "Walrein",
    types: [
      "Ice",
      "Water"
    ],
    baseStats: {
      hp: 110,
      atk: 80,
      def: 90,
      spa: 95,
      spd: 90,
      spe: 65
    },
    weightkg: 150.6,
    evoLevel: 44,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "walrein",
    fullname: "pokemon: Walrein",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Walrein",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 1506,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Ice Body",
      H: "Oblivious"
    },
    nfe: false,
    prevo: "Sealeo"
  },
  clamperl: {
    tags: [],
    num: 366,
    name: "Clamperl",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 35,
      atk: 64,
      def: 85,
      spa: 74,
      spd: 55,
      spe: 32
    },
    weightkg: 52.5,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "clamperl",
    fullname: "pokemon: Clamperl",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Clamperl",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 345,
    weighthg: 525,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shell Armor",
      H: "Rattled"
    },
    evos: [
      "Huntail",
      "Gorebyss"
    ],
    nfe: true
  },
  huntail: {
    tags: [],
    num: 367,
    name: "Huntail",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 104,
      def: 105,
      spa: 94,
      spd: 75,
      spe: 52
    },
    weightkg: 27,
    evoType: "trade",
    evoItem: "Deep Sea Tooth",
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "huntail",
    fullname: "pokemon: Huntail",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Huntail",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 270,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    nfe: false,
    prevo: "Clamperl"
  },
  gorebyss: {
    tags: [],
    num: 368,
    name: "Gorebyss",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 84,
      def: 105,
      spa: 114,
      spd: 75,
      spe: 52
    },
    weightkg: 22.6,
    evoType: "trade",
    evoItem: "Deep Sea Scale",
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "gorebyss",
    fullname: "pokemon: Gorebyss",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gorebyss",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 226,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Hydration"
    },
    nfe: false,
    prevo: "Clamperl"
  },
  relicanth: {
    tags: [],
    num: 369,
    name: "Relicanth",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 100,
      atk: 90,
      def: 130,
      spa: 45,
      spd: 65,
      spe: 55
    },
    weightkg: 23.4,
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "Illegal",
    id: "relicanth",
    fullname: "pokemon: Relicanth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Relicanth",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 234,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Rock Head",
      H: "Sturdy"
    },
    nfe: false
  },
  luvdisc: {
    tags: [],
    num: 370,
    name: "Luvdisc",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 43,
      atk: 30,
      def: 55,
      spa: 40,
      spd: 65,
      spe: 97
    },
    weightkg: 8.7,
    eggGroups: [
      "Water 2"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "luvdisc",
    fullname: "pokemon: Luvdisc",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Luvdisc",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 330,
    weighthg: 87,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Swift Swim",
      H: "Hydration"
    },
    nfe: false
  },
  bagon: {
    tags: [],
    num: 371,
    name: "Bagon",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 45,
      atk: 75,
      def: 60,
      spa: 40,
      spd: 30,
      spe: 50
    },
    weightkg: 42.1,
    eggGroups: [
      "Dragon"
    ],
    tier: "LC",
    id: "bagon",
    fullname: "pokemon: Bagon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bagon",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 421,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      H: "Sheer Force"
    },
    evos: [
      "Shelgon"
    ],
    nfe: true
  },
  shelgon: {
    tags: [],
    num: 372,
    name: "Shelgon",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 65,
      atk: 95,
      def: 100,
      spa: 60,
      spd: 50,
      spe: 50
    },
    weightkg: 110.5,
    evoLevel: 30,
    eggGroups: [
      "Dragon"
    ],
    tier: "NFE",
    id: "shelgon",
    fullname: "pokemon: Shelgon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shelgon",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 420,
    weighthg: 1105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      H: "Overcoat"
    },
    evos: [
      "Salamence"
    ],
    nfe: true,
    prevo: "Bagon"
  },
  salamence: {
    tags: [],
    num: 373,
    name: "Salamence",
    types: [
      "Dragon",
      "Flying"
    ],
    baseStats: {
      hp: 95,
      atk: 135,
      def: 80,
      spa: 110,
      spd: 80,
      spe: 100
    },
    weightkg: 102.6,
    evoLevel: 50,
    eggGroups: [
      "Dragon"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "salamence",
    fullname: "pokemon: Salamence",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Salamence",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 1026,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      H: "Moxie"
    },
    nfe: false,
    otherFormes: [
      "Salamence-Mega"
    ],
    formeOrder: [
      "Salamence",
      "Salamence-Mega"
    ],
    formes: [
      "Salamence",
      "Salamence-Mega"
    ],
    prevo: "Shelgon"
  },
  salamencemega: {
    tags: [],
    num: 373,
    name: "Salamence-Mega",
    baseSpecies: "Salamence",
    forme: "Mega",
    types: [
      "Dragon",
      "Flying"
    ],
    baseStats: {
      hp: 95,
      atk: 145,
      def: 130,
      spa: 120,
      spd: 90,
      spe: 120
    },
    weightkg: 112.6,
    eggGroups: [
      "Dragon"
    ],
    requiredItem: "Salamencite",
    tier: "Illegal",
    id: "salamencemega",
    fullname: "pokemon: Salamence-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Salamencite"
    ],
    bst: 700,
    weighthg: 1126,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Salamence",
    changesFrom: "Salamence",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Aerilate"
    },
    nfe: false
  },
  beldum: {
    tags: [],
    num: 374,
    name: "Beldum",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 80,
      spa: 35,
      spd: 60,
      spe: 30
    },
    weightkg: 95.2,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "beldum",
    fullname: "pokemon: Beldum",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Beldum",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 952,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    evos: [
      "Metang"
    ],
    nfe: true
  },
  metang: {
    tags: [],
    num: 375,
    name: "Metang",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 75,
      def: 100,
      spa: 55,
      spd: 80,
      spe: 50
    },
    weightkg: 202.5,
    evoLevel: 20,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "metang",
    fullname: "pokemon: Metang",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Metang",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 2025,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    evos: [
      "Metagross"
    ],
    nfe: true,
    prevo: "Beldum"
  },
  metagross: {
    tags: [],
    num: 376,
    name: "Metagross",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 135,
      def: 130,
      spa: 95,
      spd: 90,
      spe: 70
    },
    weightkg: 550,
    evoLevel: 45,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "metagross",
    fullname: "pokemon: Metagross",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Metagross",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 5500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    nfe: false,
    otherFormes: [
      "Metagross-Mega"
    ],
    formeOrder: [
      "Metagross",
      "Metagross-Mega"
    ],
    formes: [
      "Metagross",
      "Metagross-Mega"
    ],
    prevo: "Metang"
  },
  metagrossmega: {
    tags: [],
    num: 376,
    name: "Metagross-Mega",
    baseSpecies: "Metagross",
    forme: "Mega",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 145,
      def: 150,
      spa: 105,
      spd: 110,
      spe: 110
    },
    weightkg: 942.9,
    eggGroups: [
      "Mineral"
    ],
    requiredItem: "Metagrossite",
    tier: "Illegal",
    id: "metagrossmega",
    fullname: "pokemon: Metagross-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Metagrossite"
    ],
    bst: 700,
    weighthg: 9429,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Metagross",
    changesFrom: "Metagross",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Tough Claws"
    },
    nfe: false
  },
  regirock: {
    tags: [
      "Sub-Legendary"
    ],
    num: 377,
    name: "Regirock",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 200,
      spa: 50,
      spd: 100,
      spe: 50
    },
    weightkg: 230,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "regirock",
    fullname: "pokemon: Regirock",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Regirock",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 2300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Sturdy"
    },
    nfe: false
  },
  regice: {
    tags: [
      "Sub-Legendary"
    ],
    num: 378,
    name: "Regice",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 80,
      atk: 50,
      def: 100,
      spa: 100,
      spd: 200,
      spe: 50
    },
    weightkg: 175,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "regice",
    fullname: "pokemon: Regice",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Regice",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 1750,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Ice Body"
    },
    nfe: false
  },
  registeel: {
    tags: [
      "Sub-Legendary"
    ],
    num: 379,
    name: "Registeel",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 80,
      atk: 75,
      def: 150,
      spa: 75,
      spd: 150,
      spe: 50
    },
    weightkg: 205,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "registeel",
    fullname: "pokemon: Registeel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Registeel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 2050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Clear Body",
      H: "Light Metal"
    },
    nfe: false
  },
  latias: {
    tags: [
      "Sub-Legendary"
    ],
    num: 380,
    name: "Latias",
    types: [
      "Dragon",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 80,
      def: 90,
      spa: 110,
      spd: 130,
      spe: 110
    },
    weightkg: 40,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "latias",
    fullname: "pokemon: Latias",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Latias",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    otherFormes: [
      "Latias-Mega"
    ],
    formeOrder: [
      "Latias",
      "Latias-Mega"
    ],
    formes: [
      "Latias",
      "Latias-Mega"
    ]
  },
  latiasmega: {
    tags: [
      "Sub-Legendary"
    ],
    num: 380,
    name: "Latias-Mega",
    baseSpecies: "Latias",
    forme: "Mega",
    types: [
      "Dragon",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 120,
      spa: 140,
      spd: 150,
      spe: 110
    },
    weightkg: 52,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Latiasite",
    tier: "Illegal",
    id: "latiasmega",
    fullname: "pokemon: Latias-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Latiasite"
    ],
    bst: 700,
    weighthg: 520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Latias",
    changesFrom: "Latias",
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  latios: {
    tags: [
      "Sub-Legendary"
    ],
    num: 381,
    name: "Latios",
    types: [
      "Dragon",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 90,
      def: 80,
      spa: 130,
      spd: 110,
      spe: 110
    },
    weightkg: 60,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "latios",
    fullname: "pokemon: Latios",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Latios",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    otherFormes: [
      "Latios-Mega"
    ],
    formeOrder: [
      "Latios",
      "Latios-Mega"
    ],
    formes: [
      "Latios",
      "Latios-Mega"
    ]
  },
  latiosmega: {
    tags: [
      "Sub-Legendary"
    ],
    num: 381,
    name: "Latios-Mega",
    baseSpecies: "Latios",
    forme: "Mega",
    types: [
      "Dragon",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 130,
      def: 100,
      spa: 160,
      spd: 120,
      spe: 110
    },
    weightkg: 70,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Latiosite",
    tier: "Illegal",
    id: "latiosmega",
    fullname: "pokemon: Latios-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Latiosite"
    ],
    bst: 700,
    weighthg: 700,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Latios",
    changesFrom: "Latios",
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  kyogreprimal: {
    tags: [
      "Restricted Legendary"
    ],
    num: 382,
    name: "Kyogre-Primal",
    baseSpecies: "Kyogre",
    forme: "Primal",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 100,
      atk: 150,
      def: 90,
      spa: 180,
      spd: 160,
      spe: 90
    },
    weightkg: 430,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Blue Orb",
    tier: "Illegal",
    id: "kyogreprimal",
    fullname: "pokemon: Kyogre-Primal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Blue Orb"
    ],
    bst: 770,
    weighthg: 4300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Kyogre",
    isPrimal: true,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Primordial Sea"
    },
    nfe: false
  },
  groudonprimal: {
    tags: [
      "Restricted Legendary"
    ],
    num: 383,
    name: "Groudon-Primal",
    baseSpecies: "Groudon",
    forme: "Primal",
    types: [
      "Ground",
      "Fire"
    ],
    baseStats: {
      hp: 100,
      atk: 180,
      def: 160,
      spa: 150,
      spd: 90,
      spe: 90
    },
    weightkg: 999.7,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Red Orb",
    tier: "Illegal",
    id: "groudonprimal",
    fullname: "pokemon: Groudon-Primal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Red Orb"
    ],
    bst: 770,
    weighthg: 9997,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Groudon",
    isPrimal: true,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Desolate Land"
    },
    nfe: false
  },
  rayquazamega: {
    tags: [
      "Restricted Legendary"
    ],
    num: 384,
    name: "Rayquaza-Mega",
    baseSpecies: "Rayquaza",
    forme: "Mega",
    types: [
      "Dragon",
      "Flying"
    ],
    baseStats: {
      hp: 105,
      atk: 180,
      def: 100,
      spa: 180,
      spd: 100,
      spe: 115
    },
    weightkg: 392,
    eggGroups: [
      "Undiscovered"
    ],
    requiredMove: "Dragon Ascent",
    tier: "Illegal",
    id: "rayquazamega",
    fullname: "pokemon: Rayquaza-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 780,
    weighthg: 3920,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Rayquaza",
    changesFrom: "Rayquaza",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Delta Stream"
    },
    nfe: false
  },
  jirachi: {
    tags: [
      "Mythical"
    ],
    num: 385,
    name: "Jirachi",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    },
    weightkg: 1.1,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "jirachi",
    fullname: "pokemon: Jirachi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Jirachi",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 11,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Serene Grace"
    },
    nfe: false
  },
  deoxys: {
    tags: [
      "Mythical"
    ],
    num: 386,
    name: "Deoxys",
    baseForme: "Normal",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 150,
      def: 50,
      spa: 150,
      spd: 50,
      spe: 150
    },
    weightkg: 60.8,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "deoxys",
    fullname: "pokemon: Deoxys",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseSpecies: "Deoxys",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 608,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure"
    },
    nfe: false,
    otherFormes: [
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    formeOrder: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ],
    formes: [
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed"
    ]
  },
  deoxysattack: {
    tags: [
      "Mythical"
    ],
    num: 386,
    name: "Deoxys-Attack",
    baseSpecies: "Deoxys",
    forme: "Attack",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 180,
      def: 20,
      spa: 180,
      spd: 20,
      spe: 150
    },
    weightkg: 60.8,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Deoxys",
    tier: "Illegal",
    id: "deoxysattack",
    fullname: "pokemon: Deoxys-Attack",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 608,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure"
    },
    nfe: false
  },
  deoxysdefense: {
    tags: [
      "Mythical"
    ],
    num: 386,
    name: "Deoxys-Defense",
    baseSpecies: "Deoxys",
    forme: "Defense",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 70,
      def: 160,
      spa: 70,
      spd: 160,
      spe: 90
    },
    weightkg: 60.8,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Deoxys",
    tier: "Illegal",
    id: "deoxysdefense",
    fullname: "pokemon: Deoxys-Defense",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 608,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure"
    },
    nfe: false
  },
  deoxysspeed: {
    tags: [
      "Mythical"
    ],
    num: 386,
    name: "Deoxys-Speed",
    baseSpecies: "Deoxys",
    forme: "Speed",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 95,
      def: 90,
      spa: 95,
      spd: 90,
      spe: 180
    },
    weightkg: 60.8,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Deoxys",
    tier: "Illegal",
    id: "deoxysspeed",
    fullname: "pokemon: Deoxys-Speed",
    effectType: "Pokemon",
    kind: "Species",
    gen: 3,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 608,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure"
    },
    nfe: false
  },
  turtwig: {
    tags: [],
    num: 387,
    name: "Turtwig",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 55,
      atk: 68,
      def: 64,
      spa: 45,
      spd: 55,
      spe: 31
    },
    weightkg: 10.2,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "turtwig",
    fullname: "pokemon: Turtwig",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Turtwig",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 318,
    weighthg: 102,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    evos: [
      "Grotle"
    ],
    nfe: true
  },
  grotle: {
    tags: [],
    num: 388,
    name: "Grotle",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 89,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 36
    },
    weightkg: 97,
    evoLevel: 18,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "grotle",
    fullname: "pokemon: Grotle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Grotle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 970,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    evos: [
      "Torterra"
    ],
    nfe: true,
    prevo: "Turtwig"
  },
  torterra: {
    tags: [],
    num: 389,
    name: "Torterra",
    types: [
      "Grass",
      "Ground"
    ],
    baseStats: {
      hp: 95,
      atk: 109,
      def: 105,
      spa: 75,
      spd: 85,
      spe: 56
    },
    weightkg: 310,
    evoLevel: 32,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "Illegal",
    id: "torterra",
    fullname: "pokemon: Torterra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Torterra",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 3100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Shell Armor"
    },
    nfe: false,
    prevo: "Grotle"
  },
  chimchar: {
    tags: [],
    num: 390,
    name: "Chimchar",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 44,
      atk: 58,
      def: 44,
      spa: 58,
      spd: 44,
      spe: 61
    },
    weightkg: 6.2,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "chimchar",
    fullname: "pokemon: Chimchar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chimchar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 309,
    weighthg: 62,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    evos: [
      "Monferno"
    ],
    nfe: true
  },
  monferno: {
    tags: [],
    num: 391,
    name: "Monferno",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 64,
      atk: 78,
      def: 52,
      spa: 78,
      spd: 52,
      spe: 81
    },
    weightkg: 22,
    evoLevel: 14,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "monferno",
    fullname: "pokemon: Monferno",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Monferno",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 220,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    evos: [
      "Infernape"
    ],
    nfe: true,
    prevo: "Chimchar"
  },
  infernape: {
    tags: [],
    num: 392,
    name: "Infernape",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 76,
      atk: 104,
      def: 71,
      spa: 104,
      spd: 71,
      spe: 108
    },
    weightkg: 55,
    evoLevel: 36,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "infernape",
    fullname: "pokemon: Infernape",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Infernape",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 534,
    weighthg: 550,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Iron Fist"
    },
    nfe: false,
    prevo: "Monferno"
  },
  piplup: {
    tags: [],
    num: 393,
    name: "Piplup",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 53,
      atk: 51,
      def: 53,
      spa: 61,
      spd: 56,
      spe: 40
    },
    weightkg: 5.2,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "piplup",
    fullname: "pokemon: Piplup",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Piplup",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 314,
    weighthg: 52,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Defiant"
    },
    evos: [
      "Prinplup"
    ],
    nfe: true
  },
  prinplup: {
    tags: [],
    num: 394,
    name: "Prinplup",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 64,
      atk: 66,
      def: 68,
      spa: 81,
      spd: 76,
      spe: 50
    },
    weightkg: 23,
    evoLevel: 16,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "prinplup",
    fullname: "pokemon: Prinplup",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Prinplup",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 230,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Defiant"
    },
    evos: [
      "Empoleon"
    ],
    nfe: true,
    prevo: "Piplup"
  },
  empoleon: {
    tags: [],
    num: 395,
    name: "Empoleon",
    types: [
      "Water",
      "Steel"
    ],
    baseStats: {
      hp: 84,
      atk: 86,
      def: 88,
      spa: 111,
      spd: 101,
      spe: 60
    },
    weightkg: 84.5,
    evoLevel: 36,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "empoleon",
    fullname: "pokemon: Empoleon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Empoleon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 845,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Defiant"
    },
    nfe: false,
    prevo: "Prinplup"
  },
  starly: {
    tags: [],
    num: 396,
    name: "Starly",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 60
    },
    weightkg: 2,
    eggGroups: [
      "Flying"
    ],
    tier: "LC",
    id: "starly",
    fullname: "pokemon: Starly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Starly",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 245,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      H: "Reckless"
    },
    evos: [
      "Staravia"
    ],
    nfe: true
  },
  staravia: {
    tags: [],
    num: 397,
    name: "Staravia",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 75,
      def: 50,
      spa: 40,
      spd: 40,
      spe: 80
    },
    weightkg: 15.5,
    evoLevel: 14,
    eggGroups: [
      "Flying"
    ],
    tier: "NFE",
    id: "staravia",
    fullname: "pokemon: Staravia",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Staravia",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 340,
    weighthg: 155,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      H: "Reckless"
    },
    evos: [
      "Staraptor"
    ],
    nfe: true,
    prevo: "Starly"
  },
  staraptor: {
    tags: [],
    num: 398,
    name: "Staraptor",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 85,
      atk: 120,
      def: 70,
      spa: 50,
      spd: 60,
      spe: 100
    },
    weightkg: 24.9,
    evoLevel: 34,
    eggGroups: [
      "Flying"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "staraptor",
    fullname: "pokemon: Staraptor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Staraptor",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 485,
    weighthg: 249,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      H: "Reckless"
    },
    nfe: false,
    prevo: "Staravia"
  },
  bidoof: {
    tags: [],
    num: 399,
    name: "Bidoof",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 59,
      atk: 45,
      def: 40,
      spa: 35,
      spd: 40,
      spe: 31
    },
    weightkg: 20,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "bidoof",
    fullname: "pokemon: Bidoof",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bidoof",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Simple",
      "1": "Unaware",
      H: "Moody"
    },
    evos: [
      "Bibarel"
    ],
    nfe: true
  },
  bibarel: {
    tags: [],
    num: 400,
    name: "Bibarel",
    types: [
      "Normal",
      "Water"
    ],
    baseStats: {
      hp: 79,
      atk: 85,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 71
    },
    weightkg: 31.5,
    evoLevel: 15,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "bibarel",
    fullname: "pokemon: Bibarel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bibarel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 410,
    weighthg: 315,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Simple",
      "1": "Unaware",
      H: "Moody"
    },
    nfe: false,
    prevo: "Bidoof"
  },
  kricketot: {
    tags: [],
    num: 401,
    name: "Kricketot",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 37,
      atk: 25,
      def: 41,
      spa: 25,
      spd: 41,
      spe: 25
    },
    weightkg: 2.2,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "kricketot",
    fullname: "pokemon: Kricketot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Kricketot",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 194,
    weighthg: 22,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Run Away"
    },
    evos: [
      "Kricketune"
    ],
    nfe: true
  },
  kricketune: {
    tags: [],
    num: 402,
    name: "Kricketune",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 77,
      atk: 85,
      def: 51,
      spa: 55,
      spd: 51,
      spe: 65
    },
    weightkg: 25.5,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "kricketune",
    fullname: "pokemon: Kricketune",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Kricketune",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 384,
    weighthg: 255,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      H: "Technician"
    },
    nfe: false,
    prevo: "Kricketot"
  },
  shinx: {
    tags: [],
    num: 403,
    name: "Shinx",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 45,
      atk: 65,
      def: 34,
      spa: 40,
      spd: 34,
      spe: 45
    },
    weightkg: 9.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "shinx",
    fullname: "pokemon: Shinx",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shinx",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 263,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    evos: [
      "Luxio"
    ],
    nfe: true
  },
  luxio: {
    tags: [],
    num: 404,
    name: "Luxio",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 49,
      spa: 60,
      spd: 49,
      spe: 60
    },
    weightkg: 30.5,
    evoLevel: 15,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "luxio",
    fullname: "pokemon: Luxio",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Luxio",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 363,
    weighthg: 305,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    evos: [
      "Luxray"
    ],
    nfe: true,
    prevo: "Shinx"
  },
  luxray: {
    tags: [],
    num: 405,
    name: "Luxray",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 79,
      spa: 95,
      spd: 79,
      spe: 70
    },
    weightkg: 42,
    evoLevel: 30,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "luxray",
    fullname: "pokemon: Luxray",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Luxray",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 523,
    weighthg: 420,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Intimidate",
      H: "Guts"
    },
    nfe: false,
    prevo: "Luxio"
  },
  budew: {
    tags: [],
    num: 406,
    name: "Budew",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 35,
      spa: 50,
      spd: 70,
      spe: 55
    },
    weightkg: 1.2,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "budew",
    fullname: "pokemon: Budew",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Budew",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 280,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Leaf Guard"
    },
    evos: [
      "Roselia"
    ],
    nfe: true
  },
  roserade: {
    tags: [],
    num: 407,
    name: "Roserade",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 70,
      def: 65,
      spa: 125,
      spd: 105,
      spe: 90
    },
    weightkg: 14.5,
    evoType: "useItem",
    evoItem: "Shiny Stone",
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "Illegal",
    id: "roserade",
    fullname: "pokemon: Roserade",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Roserade",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 145,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Poison Point",
      H: "Technician"
    },
    nfe: false,
    prevo: "Roselia"
  },
  cranidos: {
    tags: [],
    num: 408,
    name: "Cranidos",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 67,
      atk: 125,
      def: 40,
      spa: 30,
      spd: 30,
      spe: 58
    },
    weightkg: 31.5,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "cranidos",
    fullname: "pokemon: Cranidos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cranidos",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 350,
    weighthg: 315,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Mold Breaker",
      H: "Sheer Force"
    },
    evos: [
      "Rampardos"
    ],
    nfe: true
  },
  rampardos: {
    tags: [],
    num: 409,
    name: "Rampardos",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 97,
      atk: 165,
      def: 60,
      spa: 65,
      spd: 50,
      spe: 58
    },
    weightkg: 102.5,
    evoLevel: 30,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "rampardos",
    fullname: "pokemon: Rampardos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rampardos",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 1025,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Mold Breaker",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Cranidos"
  },
  shieldon: {
    tags: [],
    num: 410,
    name: "Shieldon",
    types: [
      "Rock",
      "Steel"
    ],
    baseStats: {
      hp: 30,
      atk: 42,
      def: 118,
      spa: 42,
      spd: 88,
      spe: 30
    },
    weightkg: 57,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "shieldon",
    fullname: "pokemon: Shieldon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shieldon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 350,
    weighthg: 570,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Sturdy",
      H: "Soundproof"
    },
    evos: [
      "Bastiodon"
    ],
    nfe: true
  },
  bastiodon: {
    tags: [],
    num: 411,
    name: "Bastiodon",
    types: [
      "Rock",
      "Steel"
    ],
    baseStats: {
      hp: 60,
      atk: 52,
      def: 168,
      spa: 47,
      spd: 138,
      spe: 30
    },
    weightkg: 149.5,
    evoLevel: 30,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "bastiodon",
    fullname: "pokemon: Bastiodon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bastiodon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 1495,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Sturdy",
      H: "Soundproof"
    },
    nfe: false,
    prevo: "Shieldon"
  },
  burmy: {
    tags: [],
    num: 412,
    name: "Burmy",
    baseForme: "Plant",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 40,
      atk: 29,
      def: 45,
      spa: 29,
      spd: 45,
      spe: 36
    },
    weightkg: 3.4,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "burmy",
    fullname: "pokemon: Burmy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Burmy",
    forme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 224,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Overcoat"
    },
    evos: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash",
      "Mothim"
    ],
    nfe: true,
    cosmeticFormes: [
      "Burmy-Sandy",
      "Burmy-Trash"
    ],
    formeOrder: [
      "Burmy",
      "Burmy-Sandy",
      "Burmy-Trash"
    ],
    formes: [
      "Burmy",
      "Burmy-Sandy",
      "Burmy-Trash"
    ]
  },
  wormadam: {
    tags: [],
    num: 413,
    name: "Wormadam",
    baseForme: "Plant",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 59,
      def: 85,
      spa: 79,
      spd: 105,
      spe: 36
    },
    weightkg: 6.5,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "wormadam",
    fullname: "pokemon: Wormadam",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wormadam",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 424,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    nfe: false,
    otherFormes: [
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    formeOrder: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    formes: [
      "Wormadam",
      "Wormadam-Sandy",
      "Wormadam-Trash"
    ],
    prevo: "Burmy"
  },
  wormadamsandy: {
    tags: [],
    num: 413,
    name: "Wormadam-Sandy",
    baseSpecies: "Wormadam",
    forme: "Sandy",
    types: [
      "Bug",
      "Ground"
    ],
    baseStats: {
      hp: 60,
      atk: 79,
      def: 105,
      spa: 59,
      spd: 85,
      spe: 36
    },
    weightkg: 6.5,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "wormadamsandy",
    fullname: "pokemon: Wormadam-Sandy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 424,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Burmy"
  },
  wormadamtrash: {
    tags: [],
    num: 413,
    name: "Wormadam-Trash",
    baseSpecies: "Wormadam",
    forme: "Trash",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 60,
      atk: 69,
      def: 95,
      spa: 69,
      spd: 95,
      spe: 36
    },
    weightkg: 6.5,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "wormadamtrash",
    fullname: "pokemon: Wormadam-Trash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 424,
    weighthg: 65,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Anticipation",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Burmy"
  },
  mothim: {
    tags: [],
    num: 414,
    name: "Mothim",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 94,
      def: 50,
      spa: 94,
      spd: 50,
      spe: 66
    },
    weightkg: 23.3,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "mothim",
    fullname: "pokemon: Mothim",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mothim",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 424,
    weighthg: 233,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Swarm",
      H: "Tinted Lens"
    },
    nfe: false,
    prevo: "Burmy"
  },
  combee: {
    tags: [],
    num: 415,
    name: "Combee",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 30,
      atk: 30,
      def: 42,
      spa: 30,
      spd: 42,
      spe: 70
    },
    weightkg: 5.5,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "combee",
    fullname: "pokemon: Combee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Combee",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 244,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Honey Gather",
      H: "Hustle"
    },
    evos: [
      "Vespiquen"
    ],
    nfe: true
  },
  vespiquen: {
    tags: [],
    num: 416,
    name: "Vespiquen",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 80,
      def: 102,
      spa: 80,
      spd: 102,
      spe: 40
    },
    weightkg: 38.5,
    evoLevel: 21,
    eggGroups: [
      "Bug"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "vespiquen",
    fullname: "pokemon: Vespiquen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Vespiquen",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 474,
    weighthg: 385,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Pressure",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Combee"
  },
  pachirisu: {
    tags: [],
    num: 417,
    name: "Pachirisu",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 70,
      spa: 45,
      spd: 90,
      spe: 95
    },
    weightkg: 3.9,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "pachirisu",
    fullname: "pokemon: Pachirisu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pachirisu",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 405,
    weighthg: 39,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Pickup",
      H: "Volt Absorb"
    },
    nfe: false
  },
  buizel: {
    tags: [],
    num: 418,
    name: "Buizel",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 65,
      def: 35,
      spa: 60,
      spd: 30,
      spe: 85
    },
    weightkg: 29.5,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "LC",
    id: "buizel",
    fullname: "pokemon: Buizel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Buizel",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 295,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    evos: [
      "Floatzel"
    ],
    nfe: true
  },
  floatzel: {
    tags: [],
    num: 419,
    name: "Floatzel",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 85,
      atk: 105,
      def: 55,
      spa: 85,
      spd: 50,
      spe: 115
    },
    weightkg: 33.5,
    evoLevel: 26,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "floatzel",
    fullname: "pokemon: Floatzel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Floatzel",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 495,
    weighthg: 335,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Water Veil"
    },
    nfe: false,
    prevo: "Buizel"
  },
  cherubi: {
    tags: [],
    num: 420,
    name: "Cherubi",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 45,
      atk: 35,
      def: 45,
      spa: 62,
      spd: 53,
      spe: 35
    },
    weightkg: 3.3,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "Illegal",
    id: "cherubi",
    fullname: "pokemon: Cherubi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cherubi",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 275,
    weighthg: 33,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll"
    },
    evos: [
      "Cherrim"
    ],
    nfe: true
  },
  cherrim: {
    tags: [],
    num: 421,
    name: "Cherrim",
    baseForme: "Overcast",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 60,
      def: 70,
      spa: 87,
      spd: 78,
      spe: 85
    },
    weightkg: 9.3,
    evoLevel: 25,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "Illegal",
    id: "cherrim",
    fullname: "pokemon: Cherrim",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cherrim",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 450,
    weighthg: 93,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flower Gift"
    },
    nfe: false,
    otherFormes: [
      "Cherrim-Sunshine"
    ],
    formeOrder: [
      "Cherrim",
      "Cherrim-Sunshine"
    ],
    formes: [
      "Cherrim",
      "Cherrim-Sunshine"
    ],
    prevo: "Cherubi"
  },
  cherrimsunshine: {
    tags: [],
    num: 421,
    name: "Cherrim-Sunshine",
    baseSpecies: "Cherrim",
    forme: "Sunshine",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 60,
      def: 70,
      spa: 87,
      spd: 78,
      spe: 85
    },
    weightkg: 9.3,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    requiredAbility: "Flower Gift",
    battleOnly: "Cherrim",
    id: "cherrimsunshine",
    fullname: "pokemon: Cherrim-Sunshine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 450,
    weighthg: 93,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Cherrim",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flower Gift"
    },
    nfe: false
  },
  shellos: {
    tags: [],
    num: 422,
    name: "Shellos",
    baseForme: "West",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 76,
      atk: 48,
      def: 48,
      spa: 57,
      spd: 62,
      spe: 34
    },
    weightkg: 6.3,
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    tier: "LC",
    id: "shellos",
    fullname: "pokemon: Shellos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Shellos",
    forme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 325,
    weighthg: 63,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      H: "Sand Force"
    },
    evos: [
      "Gastrodon"
    ],
    nfe: true,
    cosmeticFormes: [
      "Shellos-East"
    ],
    formeOrder: [
      "Shellos",
      "Shellos-East"
    ],
    formes: [
      "Shellos",
      "Shellos-East"
    ]
  },
  gastrodon: {
    tags: [],
    num: 423,
    name: "Gastrodon",
    baseForme: "West",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 111,
      atk: 83,
      def: 68,
      spa: 92,
      spd: 82,
      spe: 39
    },
    weightkg: 29.9,
    evoLevel: 30,
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "gastrodon",
    fullname: "pokemon: Gastrodon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gastrodon",
    forme: "",
    canHatch: false,
    bst: 475,
    weighthg: 299,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sticky Hold",
      "1": "Storm Drain",
      H: "Sand Force"
    },
    nfe: false,
    cosmeticFormes: [
      "Gastrodon-East"
    ],
    formeOrder: [
      "Gastrodon",
      "Gastrodon-East"
    ],
    formes: [
      "Gastrodon",
      "Gastrodon-East"
    ],
    prevo: "Shellos"
  },
  ambipom: {
    tags: [],
    num: 424,
    name: "Ambipom",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 75,
      atk: 100,
      def: 66,
      spa: 60,
      spd: 66,
      spe: 115
    },
    weightkg: 20.3,
    evoType: "levelMove",
    evoMove: "Double Hit",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "ambipom",
    fullname: "pokemon: Ambipom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ambipom",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 482,
    weighthg: 203,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Technician",
      "1": "Pickup",
      H: "Skill Link"
    },
    nfe: false,
    prevo: "Aipom"
  },
  drifloon: {
    tags: [],
    num: 425,
    name: "Drifloon",
    types: [
      "Ghost",
      "Flying"
    ],
    baseStats: {
      hp: 90,
      atk: 50,
      def: 34,
      spa: 60,
      spd: 44,
      spe: 70
    },
    weightkg: 1.2,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "drifloon",
    fullname: "pokemon: Drifloon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Drifloon",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 348,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Aftermath",
      "1": "Unburden",
      H: "Flare Boost"
    },
    evos: [
      "Drifblim"
    ],
    nfe: true
  },
  drifblim: {
    tags: [],
    num: 426,
    name: "Drifblim",
    types: [
      "Ghost",
      "Flying"
    ],
    baseStats: {
      hp: 150,
      atk: 80,
      def: 44,
      spa: 90,
      spd: 54,
      spe: 80
    },
    weightkg: 15,
    evoLevel: 28,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "drifblim",
    fullname: "pokemon: Drifblim",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Drifblim",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 498,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Aftermath",
      "1": "Unburden",
      H: "Flare Boost"
    },
    nfe: false,
    prevo: "Drifloon"
  },
  buneary: {
    tags: [],
    num: 427,
    name: "Buneary",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 66,
      def: 44,
      spa: 44,
      spd: 56,
      spe: 85
    },
    weightkg: 5.5,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "buneary",
    fullname: "pokemon: Buneary",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Buneary",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 350,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Klutz",
      H: "Limber"
    },
    evos: [
      "Lopunny"
    ],
    nfe: true
  },
  lopunny: {
    tags: [],
    num: 428,
    name: "Lopunny",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 65,
      atk: 76,
      def: 84,
      spa: 54,
      spd: 96,
      spe: 105
    },
    weightkg: 33.3,
    evoType: "levelFriendship",
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "lopunny",
    fullname: "pokemon: Lopunny",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lopunny",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 333,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Klutz",
      H: "Limber"
    },
    nfe: false,
    otherFormes: [
      "Lopunny-Mega"
    ],
    formeOrder: [
      "Lopunny",
      "Lopunny-Mega"
    ],
    formes: [
      "Lopunny",
      "Lopunny-Mega"
    ],
    prevo: "Buneary"
  },
  lopunnymega: {
    tags: [],
    num: 428,
    name: "Lopunny-Mega",
    baseSpecies: "Lopunny",
    forme: "Mega",
    types: [
      "Normal",
      "Fighting"
    ],
    baseStats: {
      hp: 65,
      atk: 136,
      def: 94,
      spa: 54,
      spd: 96,
      spe: 135
    },
    weightkg: 28.3,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    requiredItem: "Lopunnite",
    tier: "Illegal",
    id: "lopunnymega",
    fullname: "pokemon: Lopunny-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Lopunnite"
    ],
    bst: 580,
    weighthg: 283,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Lopunny",
    changesFrom: "Lopunny",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Scrappy"
    },
    nfe: false
  },
  mismagius: {
    tags: [],
    num: 429,
    name: "Mismagius",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 60,
      spa: 105,
      spd: 105,
      spe: 105
    },
    weightkg: 4.4,
    evoType: "useItem",
    evoItem: "Dusk Stone",
    eggGroups: [
      "Amorphous"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "mismagius",
    fullname: "pokemon: Mismagius",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mismagius",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 495,
    weighthg: 44,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Misdreavus"
  },
  honchkrow: {
    tags: [],
    num: 430,
    name: "Honchkrow",
    types: [
      "Dark",
      "Flying"
    ],
    baseStats: {
      hp: 100,
      atk: 125,
      def: 52,
      spa: 105,
      spd: 52,
      spe: 71
    },
    weightkg: 27.3,
    evoType: "useItem",
    evoItem: "Dusk Stone",
    eggGroups: [
      "Flying"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "honchkrow",
    fullname: "pokemon: Honchkrow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Honchkrow",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 505,
    weighthg: 273,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Insomnia",
      "1": "Super Luck",
      H: "Moxie"
    },
    nfe: false,
    prevo: "Murkrow"
  },
  glameow: {
    tags: [],
    num: 431,
    name: "Glameow",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 49,
      atk: 55,
      def: 42,
      spa: 42,
      spd: 37,
      spe: 85
    },
    weightkg: 3.9,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "glameow",
    fullname: "pokemon: Glameow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Glameow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 39,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Limber",
      "1": "Own Tempo",
      H: "Keen Eye"
    },
    evos: [
      "Purugly"
    ],
    nfe: true
  },
  purugly: {
    tags: [],
    num: 432,
    name: "Purugly",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 71,
      atk: 82,
      def: 64,
      spa: 64,
      spd: 59,
      spe: 112
    },
    weightkg: 43.8,
    evoLevel: 38,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "purugly",
    fullname: "pokemon: Purugly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Purugly",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 452,
    weighthg: 438,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Thick Fat",
      "1": "Own Tempo",
      H: "Defiant"
    },
    nfe: false,
    prevo: "Glameow"
  },
  chingling: {
    tags: [],
    num: 433,
    name: "Chingling",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 45,
      atk: 30,
      def: 50,
      spa: 65,
      spd: 50,
      spe: 45
    },
    weightkg: 0.6,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "chingling",
    fullname: "pokemon: Chingling",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chingling",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 285,
    weighthg: 6,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Chimecho"
    ],
    nfe: true
  },
  stunky: {
    tags: [],
    num: 434,
    name: "Stunky",
    types: [
      "Poison",
      "Dark"
    ],
    baseStats: {
      hp: 63,
      atk: 63,
      def: 47,
      spa: 41,
      spd: 41,
      spe: 74
    },
    weightkg: 19.2,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "stunky",
    fullname: "pokemon: Stunky",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Stunky",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 329,
    weighthg: 192,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Aftermath",
      H: "Keen Eye"
    },
    evos: [
      "Skuntank"
    ],
    nfe: true
  },
  skuntank: {
    tags: [],
    num: 435,
    name: "Skuntank",
    types: [
      "Poison",
      "Dark"
    ],
    baseStats: {
      hp: 103,
      atk: 93,
      def: 67,
      spa: 71,
      spd: 61,
      spe: 84
    },
    weightkg: 38,
    evoLevel: 34,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "skuntank",
    fullname: "pokemon: Skuntank",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Skuntank",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 479,
    weighthg: 380,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Aftermath",
      H: "Keen Eye"
    },
    nfe: false,
    prevo: "Stunky"
  },
  bronzor: {
    tags: [],
    num: 436,
    name: "Bronzor",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 57,
      atk: 24,
      def: 86,
      spa: 24,
      spd: 86,
      spe: 23
    },
    weightkg: 60.5,
    eggGroups: [
      "Mineral"
    ],
    tier: "LC",
    id: "bronzor",
    fullname: "pokemon: Bronzor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bronzor",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 605,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate",
      "1": "Heatproof",
      H: "Heavy Metal"
    },
    evos: [
      "Bronzong"
    ],
    nfe: true
  },
  bronzong: {
    tags: [],
    num: 437,
    name: "Bronzong",
    types: [
      "Steel",
      "Psychic"
    ],
    baseStats: {
      hp: 67,
      atk: 89,
      def: 116,
      spa: 79,
      spd: 116,
      spe: 33
    },
    weightkg: 187,
    evoLevel: 33,
    eggGroups: [
      "Mineral"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "bronzong",
    fullname: "pokemon: Bronzong",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bronzong",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 1870,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate",
      "1": "Heatproof",
      H: "Heavy Metal"
    },
    nfe: false,
    prevo: "Bronzor"
  },
  bonsly: {
    tags: [],
    num: 438,
    name: "Bonsly",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 50,
      atk: 80,
      def: 95,
      spa: 10,
      spd: 45,
      spe: 10
    },
    weightkg: 15,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "bonsly",
    fullname: "pokemon: Bonsly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bonsly",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 290,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Rock Head",
      H: "Rattled"
    },
    evos: [
      "Sudowoodo"
    ],
    nfe: true
  },
  mimejr: {
    tags: [],
    num: 439,
    name: "Mime Jr.",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 20,
      atk: 25,
      def: 45,
      spa: 70,
      spd: 90,
      spe: 60
    },
    weightkg: 13,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "mimejr",
    fullname: "pokemon: Mime Jr.",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mime Jr.",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 310,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Soundproof",
      "1": "Filter",
      H: "Technician"
    },
    evos: [
      "Mr. Mime",
      "Mr. Mime-Galar"
    ],
    nfe: true
  },
  happiny: {
    tags: [],
    num: 440,
    name: "Happiny",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 100,
      atk: 5,
      def: 5,
      spa: 15,
      spd: 65,
      spe: 30
    },
    weightkg: 24.4,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "happiny",
    fullname: "pokemon: Happiny",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Happiny",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 220,
    weighthg: 244,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Serene Grace",
      H: "Friend Guard"
    },
    evos: [
      "Chansey"
    ],
    nfe: true
  },
  chatot: {
    tags: [],
    num: 441,
    name: "Chatot",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 76,
      atk: 65,
      def: 45,
      spa: 92,
      spd: 42,
      spe: 91
    },
    weightkg: 1.9,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "chatot",
    fullname: "pokemon: Chatot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chatot",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 411,
    weighthg: 19,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Tangled Feet",
      H: "Big Pecks"
    },
    nfe: false
  },
  spiritomb: {
    tags: [],
    num: 442,
    name: "Spiritomb",
    types: [
      "Ghost",
      "Dark"
    ],
    baseStats: {
      hp: 50,
      atk: 92,
      def: 108,
      spa: 92,
      spd: 108,
      spe: 35
    },
    weightkg: 108,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "spiritomb",
    fullname: "pokemon: Spiritomb",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Spiritomb",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 485,
    weighthg: 1080,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      H: "Infiltrator"
    },
    nfe: false
  },
  gible: {
    tags: [],
    num: 443,
    name: "Gible",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 58,
      atk: 70,
      def: 45,
      spa: 40,
      spd: 45,
      spe: 42
    },
    weightkg: 20.5,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "LC",
    id: "gible",
    fullname: "pokemon: Gible",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gible",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    evos: [
      "Gabite"
    ],
    nfe: true
  },
  gabite: {
    tags: [],
    num: 444,
    name: "Gabite",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 68,
      atk: 90,
      def: 65,
      spa: 50,
      spd: 55,
      spe: 82
    },
    weightkg: 56,
    evoLevel: 24,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "gabite",
    fullname: "pokemon: Gabite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gabite",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 410,
    weighthg: 560,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    evos: [
      "Garchomp"
    ],
    nfe: true,
    prevo: "Gible"
  },
  garchomp: {
    tags: [],
    num: 445,
    name: "Garchomp",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 108,
      atk: 130,
      def: 95,
      spa: 80,
      spd: 85,
      spe: 102
    },
    weightkg: 95,
    evoLevel: 48,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "garchomp",
    fullname: "pokemon: Garchomp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Garchomp",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 950,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Veil",
      H: "Rough Skin"
    },
    nfe: false,
    otherFormes: [
      "Garchomp-Mega"
    ],
    formeOrder: [
      "Garchomp",
      "Garchomp-Mega"
    ],
    formes: [
      "Garchomp",
      "Garchomp-Mega"
    ],
    prevo: "Gabite"
  },
  garchompmega: {
    tags: [],
    num: 445,
    name: "Garchomp-Mega",
    baseSpecies: "Garchomp",
    forme: "Mega",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 108,
      atk: 170,
      def: 115,
      spa: 120,
      spd: 95,
      spe: 92
    },
    weightkg: 95,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    requiredItem: "Garchompite",
    tier: "Illegal",
    id: "garchompmega",
    fullname: "pokemon: Garchomp-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Garchompite"
    ],
    bst: 700,
    weighthg: 950,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Garchomp",
    changesFrom: "Garchomp",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Force"
    },
    nfe: false
  },
  munchlax: {
    tags: [],
    num: 446,
    name: "Munchlax",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 135,
      atk: 85,
      def: 40,
      spa: 40,
      spd: 85,
      spe: 5
    },
    weightkg: 105,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "munchlax",
    fullname: "pokemon: Munchlax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Munchlax",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 390,
    weighthg: 1050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Pickup",
      "1": "Thick Fat",
      H: "Gluttony"
    },
    evos: [
      "Snorlax"
    ],
    nfe: true
  },
  riolu: {
    tags: [],
    num: 447,
    name: "Riolu",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 40,
      atk: 70,
      def: 40,
      spa: 35,
      spd: 40,
      spe: 60
    },
    weightkg: 20.2,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "riolu",
    fullname: "pokemon: Riolu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Riolu",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 285,
    weighthg: 202,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Steadfast",
      "1": "Inner Focus",
      H: "Prankster"
    },
    evos: [
      "Lucario"
    ],
    nfe: true
  },
  lucario: {
    tags: [],
    num: 448,
    name: "Lucario",
    types: [
      "Fighting",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 70,
      spa: 115,
      spd: 70,
      spe: 90
    },
    weightkg: 54,
    evoType: "levelFriendship",
    evoCondition: "during the day",
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "lucario",
    fullname: "pokemon: Lucario",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Lucario",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 540,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Steadfast",
      "1": "Inner Focus",
      H: "Justified"
    },
    nfe: false,
    otherFormes: [
      "Lucario-Mega"
    ],
    formeOrder: [
      "Lucario",
      "Lucario-Mega"
    ],
    formes: [
      "Lucario",
      "Lucario-Mega"
    ],
    prevo: "Riolu"
  },
  lucariomega: {
    tags: [],
    num: 448,
    name: "Lucario-Mega",
    baseSpecies: "Lucario",
    forme: "Mega",
    types: [
      "Fighting",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 145,
      def: 88,
      spa: 140,
      spd: 70,
      spe: 112
    },
    weightkg: 57.5,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    requiredItem: "Lucarionite",
    tier: "Illegal",
    id: "lucariomega",
    fullname: "pokemon: Lucario-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Lucarionite"
    ],
    bst: 625,
    weighthg: 575,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Lucario",
    changesFrom: "Lucario",
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Adaptability"
    },
    nfe: false
  },
  hippopotas: {
    tags: [],
    num: 449,
    name: "Hippopotas",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 68,
      atk: 72,
      def: 78,
      spa: 38,
      spd: 42,
      spe: 32
    },
    weightkg: 49.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "hippopotas",
    fullname: "pokemon: Hippopotas",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hippopotas",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 495,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Stream",
      H: "Sand Force"
    },
    evos: [
      "Hippowdon"
    ],
    nfe: true
  },
  hippowdon: {
    tags: [],
    num: 450,
    name: "Hippowdon",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 108,
      atk: 112,
      def: 118,
      spa: 68,
      spd: 72,
      spe: 47
    },
    weightkg: 300,
    evoLevel: 34,
    eggGroups: [
      "Field"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "hippowdon",
    fullname: "pokemon: Hippowdon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hippowdon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 3000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Stream",
      H: "Sand Force"
    },
    nfe: false,
    prevo: "Hippopotas"
  },
  skorupi: {
    tags: [],
    num: 451,
    name: "Skorupi",
    types: [
      "Poison",
      "Bug"
    ],
    baseStats: {
      hp: 40,
      atk: 50,
      def: 90,
      spa: 30,
      spd: 55,
      spe: 65
    },
    weightkg: 12,
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    tier: "Illegal",
    id: "skorupi",
    fullname: "pokemon: Skorupi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Skorupi",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 330,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Battle Armor",
      "1": "Sniper",
      H: "Keen Eye"
    },
    evos: [
      "Drapion"
    ],
    nfe: true
  },
  drapion: {
    tags: [],
    num: 452,
    name: "Drapion",
    types: [
      "Poison",
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 110,
      spa: 60,
      spd: 75,
      spe: 95
    },
    weightkg: 61.5,
    evoLevel: 40,
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    tier: "Illegal",
    id: "drapion",
    fullname: "pokemon: Drapion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Drapion",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 615,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Battle Armor",
      "1": "Sniper",
      H: "Keen Eye"
    },
    nfe: false,
    prevo: "Skorupi"
  },
  croagunk: {
    tags: [],
    num: 453,
    name: "Croagunk",
    types: [
      "Poison",
      "Fighting"
    ],
    baseStats: {
      hp: 48,
      atk: 61,
      def: 40,
      spa: 61,
      spd: 40,
      spe: 50
    },
    weightkg: 23,
    eggGroups: [
      "Human-Like"
    ],
    tier: "LC",
    id: "croagunk",
    fullname: "pokemon: Croagunk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Croagunk",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 230,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Anticipation",
      "1": "Dry Skin",
      H: "Poison Touch"
    },
    evos: [
      "Toxicroak"
    ],
    nfe: true
  },
  toxicroak: {
    tags: [],
    num: 454,
    name: "Toxicroak",
    types: [
      "Poison",
      "Fighting"
    ],
    baseStats: {
      hp: 83,
      atk: 106,
      def: 65,
      spa: 86,
      spd: 65,
      spe: 85
    },
    weightkg: 44.4,
    evoLevel: 37,
    eggGroups: [
      "Human-Like"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "toxicroak",
    fullname: "pokemon: Toxicroak",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Toxicroak",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 444,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Anticipation",
      "1": "Dry Skin",
      H: "Poison Touch"
    },
    nfe: false,
    prevo: "Croagunk"
  },
  carnivine: {
    tags: [],
    num: 455,
    name: "Carnivine",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 74,
      atk: 100,
      def: 72,
      spa: 90,
      spd: 72,
      spe: 46
    },
    weightkg: 27,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "carnivine",
    fullname: "pokemon: Carnivine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Carnivine",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 454,
    weighthg: 270,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  finneon: {
    tags: [],
    num: 456,
    name: "Finneon",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 49,
      atk: 49,
      def: 56,
      spa: 49,
      spd: 61,
      spe: 66
    },
    weightkg: 7,
    eggGroups: [
      "Water 2"
    ],
    tier: "LC",
    id: "finneon",
    fullname: "pokemon: Finneon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Finneon",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 70,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Storm Drain",
      H: "Water Veil"
    },
    evos: [
      "Lumineon"
    ],
    nfe: true
  },
  lumineon: {
    tags: [],
    num: 457,
    name: "Lumineon",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 69,
      atk: 69,
      def: 76,
      spa: 69,
      spd: 86,
      spe: 91
    },
    weightkg: 24,
    evoLevel: 31,
    eggGroups: [
      "Water 2"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "lumineon",
    fullname: "pokemon: Lumineon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Lumineon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 460,
    weighthg: 240,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Storm Drain",
      H: "Water Veil"
    },
    nfe: false,
    prevo: "Finneon"
  },
  mantyke: {
    tags: [],
    num: 458,
    name: "Mantyke",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 45,
      atk: 20,
      def: 50,
      spa: 60,
      spd: 120,
      spe: 50
    },
    weightkg: 65,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "Illegal",
    id: "mantyke",
    fullname: "pokemon: Mantyke",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mantyke",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    bst: 345,
    weighthg: 650,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Water Absorb",
      H: "Water Veil"
    },
    evos: [
      "Mantine"
    ],
    nfe: true
  },
  snover: {
    tags: [],
    num: 459,
    name: "Snover",
    types: [
      "Grass",
      "Ice"
    ],
    baseStats: {
      hp: 60,
      atk: 62,
      def: 50,
      spa: 62,
      spd: 60,
      spe: 40
    },
    weightkg: 50.5,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "LC",
    id: "snover",
    fullname: "pokemon: Snover",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Snover",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 334,
    weighthg: 505,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Warning",
      H: "Soundproof"
    },
    evos: [
      "Abomasnow"
    ],
    nfe: true
  },
  abomasnow: {
    tags: [],
    num: 460,
    name: "Abomasnow",
    types: [
      "Grass",
      "Ice"
    ],
    baseStats: {
      hp: 90,
      atk: 92,
      def: 75,
      spa: 92,
      spd: 85,
      spe: 60
    },
    weightkg: 135.5,
    evoLevel: 40,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    tier: "RU",
    doublesTier: "DOU",
    id: "abomasnow",
    fullname: "pokemon: Abomasnow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Abomasnow",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 494,
    weighthg: 1355,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Warning",
      H: "Soundproof"
    },
    nfe: false,
    otherFormes: [
      "Abomasnow-Mega"
    ],
    formeOrder: [
      "Abomasnow",
      "Abomasnow-Mega"
    ],
    formes: [
      "Abomasnow",
      "Abomasnow-Mega"
    ],
    prevo: "Snover"
  },
  abomasnowmega: {
    tags: [],
    num: 460,
    name: "Abomasnow-Mega",
    baseSpecies: "Abomasnow",
    forme: "Mega",
    types: [
      "Grass",
      "Ice"
    ],
    baseStats: {
      hp: 90,
      atk: 132,
      def: 105,
      spa: 132,
      spd: 105,
      spe: 30
    },
    weightkg: 185,
    eggGroups: [
      "Monster",
      "Grass"
    ],
    requiredItem: "Abomasite",
    tier: "Illegal",
    id: "abomasnowmega",
    fullname: "pokemon: Abomasnow-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Abomasite"
    ],
    bst: 594,
    weighthg: 1850,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Abomasnow",
    changesFrom: "Abomasnow",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Warning"
    },
    nfe: false
  },
  weavile: {
    tags: [],
    num: 461,
    name: "Weavile",
    types: [
      "Dark",
      "Ice"
    ],
    baseStats: {
      hp: 70,
      atk: 120,
      def: 65,
      spa: 45,
      spd: 85,
      spe: 125
    },
    weightkg: 34,
    evoType: "levelHold",
    evoItem: "Razor Claw",
    evoCondition: "at night",
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "weavile",
    fullname: "pokemon: Weavile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Weavile",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 340,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      H: "Pickpocket"
    },
    nfe: false,
    prevo: "Sneasel"
  },
  magnezone: {
    tags: [],
    num: 462,
    name: "Magnezone",
    types: [
      "Electric",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 70,
      def: 115,
      spa: 130,
      spd: 90,
      spe: 60
    },
    weightkg: 180,
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: [
      "Mineral"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "magnezone",
    fullname: "pokemon: Magnezone",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Magnezone",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 535,
    weighthg: 1800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Magnet Pull",
      "1": "Sturdy",
      H: "Analytic"
    },
    nfe: false,
    prevo: "Magneton"
  },
  lickilicky: {
    tags: [],
    num: 463,
    name: "Lickilicky",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 110,
      atk: 85,
      def: 95,
      spa: 80,
      spd: 95,
      spe: 50
    },
    weightkg: 140,
    evoType: "levelMove",
    evoMove: "Rollout",
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "lickilicky",
    fullname: "pokemon: Lickilicky",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lickilicky",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 1400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Oblivious",
      H: "Cloud Nine"
    },
    nfe: false,
    prevo: "Lickitung"
  },
  rhyperior: {
    tags: [],
    num: 464,
    name: "Rhyperior",
    types: [
      "Ground",
      "Rock"
    ],
    baseStats: {
      hp: 115,
      atk: 140,
      def: 130,
      spa: 55,
      spd: 55,
      spe: 40
    },
    weightkg: 282.8,
    evoType: "trade",
    evoItem: "Protector",
    eggGroups: [
      "Monster",
      "Field"
    ],
    tier: "Illegal",
    id: "rhyperior",
    fullname: "pokemon: Rhyperior",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Rhyperior",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 2828,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      "1": "Solid Rock",
      H: "Reckless"
    },
    nfe: false,
    prevo: "Rhydon"
  },
  tangrowth: {
    tags: [],
    num: 465,
    name: "Tangrowth",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 125,
      spa: 110,
      spd: 50,
      spe: 50
    },
    weightkg: 128.6,
    evoType: "levelMove",
    evoMove: "Ancient Power",
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "tangrowth",
    fullname: "pokemon: Tangrowth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tangrowth",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 1286,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Leaf Guard",
      H: "Regenerator"
    },
    nfe: false,
    prevo: "Tangela"
  },
  electivire: {
    tags: [],
    num: 466,
    name: "Electivire",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 75,
      atk: 123,
      def: 67,
      spa: 95,
      spd: 85,
      spe: 95
    },
    weightkg: 138.6,
    evoType: "trade",
    evoItem: "Electirizer",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "electivire",
    fullname: "pokemon: Electivire",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Electivire",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 540,
    weighthg: 1386,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Motor Drive",
      H: "Vital Spirit"
    },
    nfe: false,
    prevo: "Electabuzz"
  },
  magmortar: {
    tags: [],
    num: 467,
    name: "Magmortar",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 75,
      atk: 95,
      def: 67,
      spa: 125,
      spd: 95,
      spe: 83
    },
    weightkg: 68,
    evoType: "trade",
    evoItem: "Magmarizer",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "magmortar",
    fullname: "pokemon: Magmortar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Magmortar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 540,
    weighthg: 680,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Flame Body",
      H: "Vital Spirit"
    },
    nfe: false,
    prevo: "Magmar"
  },
  togekiss: {
    tags: [],
    num: 468,
    name: "Togekiss",
    types: [
      "Fairy",
      "Flying"
    ],
    baseStats: {
      hp: 85,
      atk: 50,
      def: 95,
      spa: 120,
      spd: 115,
      spe: 80
    },
    weightkg: 38,
    evoType: "useItem",
    evoItem: "Shiny Stone",
    eggGroups: [
      "Flying",
      "Fairy"
    ],
    tier: "Illegal",
    id: "togekiss",
    fullname: "pokemon: Togekiss",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Togekiss",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 545,
    weighthg: 380,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Hustle",
      "1": "Serene Grace",
      H: "Super Luck"
    },
    nfe: false,
    prevo: "Togetic"
  },
  yanmega: {
    tags: [],
    num: 469,
    name: "Yanmega",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 86,
      atk: 76,
      def: 86,
      spa: 116,
      spd: 56,
      spe: 95
    },
    weightkg: 51.5,
    evoType: "levelMove",
    evoMove: "Ancient Power",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "yanmega",
    fullname: "pokemon: Yanmega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Yanmega",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 515,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Speed Boost",
      "1": "Tinted Lens",
      H: "Frisk"
    },
    nfe: false,
    prevo: "Yanma"
  },
  leafeon: {
    tags: [],
    num: 470,
    name: "Leafeon",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 65,
      atk: 110,
      def: 130,
      spa: 60,
      spd: 65,
      spe: 95
    },
    weightkg: 25.5,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "leafeon",
    fullname: "pokemon: Leafeon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Leafeon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 255,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Leaf Guard",
      H: "Chlorophyll"
    },
    nfe: false,
    prevo: "Eevee"
  },
  glaceon: {
    tags: [],
    num: 471,
    name: "Glaceon",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 65,
      atk: 60,
      def: 110,
      spa: 130,
      spd: 95,
      spe: 65
    },
    weightkg: 25.9,
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "glaceon",
    fullname: "pokemon: Glaceon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Glaceon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 259,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Ice Body"
    },
    nfe: false,
    prevo: "Eevee"
  },
  gliscor: {
    tags: [],
    num: 472,
    name: "Gliscor",
    types: [
      "Ground",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 95,
      def: 125,
      spa: 45,
      spd: 75,
      spe: 95
    },
    weightkg: 42.5,
    evoType: "levelHold",
    evoItem: "Razor Fang",
    evoCondition: "at night",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "gliscor",
    fullname: "pokemon: Gliscor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gliscor",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 425,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Sand Veil",
      H: "Poison Heal"
    },
    nfe: false,
    prevo: "Gligar"
  },
  mamoswine: {
    tags: [],
    num: 473,
    name: "Mamoswine",
    types: [
      "Ice",
      "Ground"
    ],
    baseStats: {
      hp: 110,
      atk: 130,
      def: 80,
      spa: 70,
      spd: 60,
      spe: 80
    },
    weightkg: 291,
    evoType: "levelMove",
    evoMove: "Ancient Power",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "mamoswine",
    fullname: "pokemon: Mamoswine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mamoswine",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 2910,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Oblivious",
      "1": "Snow Cloak",
      H: "Thick Fat"
    },
    nfe: false,
    prevo: "Piloswine"
  },
  porygonz: {
    tags: [],
    num: 474,
    name: "Porygon-Z",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 85,
      atk: 80,
      def: 70,
      spa: 135,
      spd: 75,
      spe: 90
    },
    weightkg: 34,
    evoType: "trade",
    evoItem: "Dubious Disc",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "porygonz",
    fullname: "pokemon: Porygon-Z",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Porygon-Z",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 340,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Adaptability",
      "1": "Download",
      H: "Analytic"
    },
    nfe: false,
    prevo: "Porygon2"
  },
  gallade: {
    tags: [],
    num: 475,
    name: "Gallade",
    types: [
      "Psychic",
      "Fighting"
    ],
    baseStats: {
      hp: 68,
      atk: 125,
      def: 65,
      spa: 65,
      spd: 115,
      spe: 80
    },
    weightkg: 52,
    evoType: "useItem",
    evoItem: "Dawn Stone",
    eggGroups: [
      "Human-Like",
      "Amorphous"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "gallade",
    fullname: "pokemon: Gallade",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gallade",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 518,
    weighthg: 520,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Steadfast",
      "1": "Sharpness",
      H: "Justified"
    },
    nfe: false,
    otherFormes: [
      "Gallade-Mega"
    ],
    formeOrder: [
      "Gallade",
      "Gallade-Mega"
    ],
    formes: [
      "Gallade",
      "Gallade-Mega"
    ],
    prevo: "Kirlia"
  },
  gallademega: {
    tags: [],
    num: 475,
    name: "Gallade-Mega",
    baseSpecies: "Gallade",
    forme: "Mega",
    types: [
      "Psychic",
      "Fighting"
    ],
    baseStats: {
      hp: 68,
      atk: 165,
      def: 95,
      spa: 65,
      spd: 115,
      spe: 110
    },
    weightkg: 56.4,
    eggGroups: [
      "Amorphous"
    ],
    requiredItem: "Galladite",
    tier: "Illegal",
    id: "gallademega",
    fullname: "pokemon: Gallade-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Galladite"
    ],
    bst: 618,
    weighthg: 564,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Gallade",
    changesFrom: "Gallade",
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Inner Focus"
    },
    nfe: false
  },
  probopass: {
    tags: [],
    num: 476,
    name: "Probopass",
    types: [
      "Rock",
      "Steel"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 145,
      spa: 75,
      spd: 150,
      spe: 40
    },
    weightkg: 340,
    evoType: "levelExtra",
    evoCondition: "near a special magnetic field",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "probopass",
    fullname: "pokemon: Probopass",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Probopass",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 3400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Magnet Pull",
      H: "Sand Force"
    },
    nfe: false,
    prevo: "Nosepass"
  },
  dusknoir: {
    tags: [],
    num: 477,
    name: "Dusknoir",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 45,
      atk: 100,
      def: 135,
      spa: 65,
      spd: 135,
      spe: 45
    },
    weightkg: 106.6,
    evoType: "trade",
    evoItem: "Reaper Cloth",
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "dusknoir",
    fullname: "pokemon: Dusknoir",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dusknoir",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 1066,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      H: "Frisk"
    },
    nfe: false,
    prevo: "Dusclops"
  },
  froslass: {
    tags: [],
    num: 478,
    name: "Froslass",
    types: [
      "Ice",
      "Ghost"
    ],
    baseStats: {
      hp: 70,
      atk: 80,
      def: 70,
      spa: 80,
      spd: 70,
      spe: 110
    },
    weightkg: 26.6,
    evoType: "useItem",
    evoItem: "Dawn Stone",
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "froslass",
    fullname: "pokemon: Froslass",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Froslass",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 266,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Snow Cloak",
      H: "Cursed Body"
    },
    nfe: false,
    prevo: "Snorunt"
  },
  rotom: {
    tags: [],
    num: 479,
    name: "Rotom",
    types: [
      "Electric",
      "Ghost"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 77,
      spa: 95,
      spd: 77,
      spe: 91
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "rotom",
    fullname: "pokemon: Rotom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rotom",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 440,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    otherFormes: [
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    formeOrder: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ],
    formes: [
      "Rotom",
      "Rotom-Heat",
      "Rotom-Wash",
      "Rotom-Frost",
      "Rotom-Fan",
      "Rotom-Mow"
    ]
  },
  rotomfan: {
    tags: [],
    num: 479,
    name: "Rotom-Fan",
    baseSpecies: "Rotom",
    forme: "Fan",
    types: [
      "Electric",
      "Flying"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Rotom",
    tier: "PU",
    doublesTier: "(DUU)",
    id: "rotomfan",
    fullname: "pokemon: Rotom-Fan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 520,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  rotomfrost: {
    tags: [],
    num: 479,
    name: "Rotom-Frost",
    baseSpecies: "Rotom",
    forme: "Frost",
    types: [
      "Electric",
      "Ice"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Rotom",
    tier: "NU",
    doublesTier: "(DUU)",
    id: "rotomfrost",
    fullname: "pokemon: Rotom-Frost",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 520,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  rotomheat: {
    tags: [],
    num: 479,
    name: "Rotom-Heat",
    baseSpecies: "Rotom",
    forme: "Heat",
    types: [
      "Electric",
      "Fire"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Rotom",
    tier: "UU",
    doublesTier: "(DUU)",
    id: "rotomheat",
    fullname: "pokemon: Rotom-Heat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 520,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  rotommow: {
    tags: [],
    num: 479,
    name: "Rotom-Mow",
    baseSpecies: "Rotom",
    forme: "Mow",
    types: [
      "Electric",
      "Grass"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Rotom",
    tier: "RU",
    doublesTier: "(DUU)",
    id: "rotommow",
    fullname: "pokemon: Rotom-Mow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 520,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  rotomwash: {
    tags: [],
    num: 479,
    name: "Rotom-Wash",
    baseSpecies: "Rotom",
    forme: "Wash",
    types: [
      "Electric",
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 107,
      spa: 105,
      spd: 107,
      spe: 86
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    changesFrom: "Rotom",
    tier: "OU",
    doublesTier: "DUU",
    id: "rotomwash",
    fullname: "pokemon: Rotom-Wash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 520,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  regigigas: {
    tags: [
      "Sub-Legendary"
    ],
    num: 486,
    name: "Regigigas",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 110,
      atk: 160,
      def: 110,
      spa: 80,
      spd: 110,
      spe: 100
    },
    weightkg: 420,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "regigigas",
    fullname: "pokemon: Regigigas",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Regigigas",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 670,
    weighthg: 4200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Slow Start"
    },
    nfe: false
  },
  phione: {
    tags: [
      "Mythical"
    ],
    num: 489,
    name: "Phione",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 80,
      atk: 80,
      def: 80,
      spa: 80,
      spd: 80,
      spe: 80
    },
    weightkg: 3.1,
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    tier: "Illegal",
    id: "phione",
    fullname: "pokemon: Phione",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Phione",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 480,
    weighthg: 31,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Hydration"
    },
    nfe: false
  },
  manaphy: {
    tags: [
      "Mythical"
    ],
    num: 490,
    name: "Manaphy",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    },
    weightkg: 1.4,
    eggGroups: [
      "Water 1",
      "Fairy"
    ],
    tier: "Illegal",
    id: "manaphy",
    fullname: "pokemon: Manaphy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Manaphy",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 14,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Hydration"
    },
    nfe: false
  },
  darkrai: {
    tags: [
      "Mythical"
    ],
    num: 491,
    name: "Darkrai",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 90,
      spa: 135,
      spd: 90,
      spe: 125
    },
    weightkg: 50.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "darkrai",
    fullname: "pokemon: Darkrai",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Darkrai",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 505,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Bad Dreams"
    },
    nfe: false
  },
  shaymin: {
    tags: [
      "Mythical"
    ],
    num: 492,
    name: "Shaymin",
    baseForme: "Land",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    },
    weightkg: 2.1,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "shaymin",
    fullname: "pokemon: Shaymin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shaymin",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 21,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Natural Cure"
    },
    nfe: false,
    otherFormes: [
      "Shaymin-Sky"
    ],
    formeOrder: [
      "Shaymin",
      "Shaymin-Sky"
    ],
    formes: [
      "Shaymin",
      "Shaymin-Sky"
    ]
  },
  shayminsky: {
    tags: [
      "Mythical"
    ],
    num: 492,
    name: "Shaymin-Sky",
    baseSpecies: "Shaymin",
    forme: "Sky",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 100,
      atk: 103,
      def: 75,
      spa: 120,
      spd: 75,
      spe: 127
    },
    weightkg: 5.2,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Shaymin",
    tier: "Illegal",
    id: "shayminsky",
    fullname: "pokemon: Shaymin-Sky",
    effectType: "Pokemon",
    kind: "Species",
    gen: 4,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 52,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Serene Grace"
    },
    nfe: false
  },
  victini: {
    tags: [
      "Mythical"
    ],
    num: 494,
    name: "Victini",
    types: [
      "Psychic",
      "Fire"
    ],
    baseStats: {
      hp: 100,
      atk: 100,
      def: 100,
      spa: 100,
      spd: 100,
      spe: 100
    },
    weightkg: 4,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "victini",
    fullname: "pokemon: Victini",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Victini",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Victory Star"
    },
    nfe: false
  },
  snivy: {
    tags: [],
    num: 495,
    name: "Snivy",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 45,
      atk: 45,
      def: 55,
      spa: 45,
      spd: 55,
      spe: 63
    },
    weightkg: 8.1,
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "snivy",
    fullname: "pokemon: Snivy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Snivy",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 308,
    weighthg: 81,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    evos: [
      "Servine"
    ],
    nfe: true
  },
  servine: {
    tags: [],
    num: 496,
    name: "Servine",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 75,
      spa: 60,
      spd: 75,
      spe: 83
    },
    weightkg: 16,
    evoLevel: 17,
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "servine",
    fullname: "pokemon: Servine",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Servine",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 413,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    evos: [
      "Serperior"
    ],
    nfe: true,
    prevo: "Snivy"
  },
  serperior: {
    tags: [],
    num: 497,
    name: "Serperior",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 75,
      def: 95,
      spa: 75,
      spd: 95,
      spe: 113
    },
    weightkg: 63,
    evoLevel: 36,
    eggGroups: [
      "Field",
      "Grass"
    ],
    tier: "Illegal",
    id: "serperior",
    fullname: "pokemon: Serperior",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Serperior",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 528,
    weighthg: 630,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Contrary"
    },
    nfe: false,
    prevo: "Servine"
  },
  tepig: {
    tags: [],
    num: 498,
    name: "Tepig",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 63,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 45
    },
    weightkg: 9.9,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "tepig",
    fullname: "pokemon: Tepig",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tepig",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 308,
    weighthg: 99,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Thick Fat"
    },
    evos: [
      "Pignite"
    ],
    nfe: true
  },
  pignite: {
    tags: [],
    num: 499,
    name: "Pignite",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 90,
      atk: 93,
      def: 55,
      spa: 70,
      spd: 55,
      spe: 55
    },
    weightkg: 55.5,
    evoLevel: 17,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "pignite",
    fullname: "pokemon: Pignite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pignite",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 418,
    weighthg: 555,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Thick Fat"
    },
    evos: [
      "Emboar"
    ],
    nfe: true,
    prevo: "Tepig"
  },
  emboar: {
    tags: [],
    num: 500,
    name: "Emboar",
    types: [
      "Fire",
      "Fighting"
    ],
    baseStats: {
      hp: 110,
      atk: 123,
      def: 65,
      spa: 100,
      spd: 65,
      spe: 65
    },
    weightkg: 150,
    evoLevel: 36,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "emboar",
    fullname: "pokemon: Emboar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Emboar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 528,
    weighthg: 1500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Reckless"
    },
    nfe: false,
    prevo: "Pignite"
  },
  oshawott: {
    tags: [],
    num: 501,
    name: "Oshawott",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 55,
      def: 45,
      spa: 63,
      spd: 45,
      spe: 45
    },
    weightkg: 5.9,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "oshawott",
    fullname: "pokemon: Oshawott",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Oshawott",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 308,
    weighthg: 59,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    evos: [
      "Dewott"
    ],
    nfe: true
  },
  dewott: {
    tags: [],
    num: 502,
    name: "Dewott",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 75,
      atk: 75,
      def: 60,
      spa: 83,
      spd: 60,
      spe: 60
    },
    weightkg: 24.5,
    evoLevel: 17,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "dewott",
    fullname: "pokemon: Dewott",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dewott",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 413,
    weighthg: 245,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    evos: [
      "Samurott"
    ],
    nfe: true,
    prevo: "Oshawott"
  },
  samurott: {
    tags: [],
    num: 503,
    name: "Samurott",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 95,
      atk: 100,
      def: 85,
      spa: 108,
      spd: 70,
      spe: 70
    },
    weightkg: 94.6,
    evoLevel: 36,
    eggGroups: [
      "Field"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "samurott",
    fullname: "pokemon: Samurott",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Samurott",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 528,
    weighthg: 946,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Shell Armor"
    },
    nfe: false,
    prevo: "Dewott"
  },
  patrat: {
    tags: [],
    num: 504,
    name: "Patrat",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 45,
      atk: 55,
      def: 39,
      spa: 35,
      spd: 39,
      spe: 42
    },
    weightkg: 11.6,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "patrat",
    fullname: "pokemon: Patrat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Patrat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 255,
    weighthg: 116,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Keen Eye",
      H: "Analytic"
    },
    evos: [
      "Watchog"
    ],
    nfe: true
  },
  watchog: {
    tags: [],
    num: 505,
    name: "Watchog",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 69,
      spa: 60,
      spd: 69,
      spe: 77
    },
    weightkg: 27,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "watchog",
    fullname: "pokemon: Watchog",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Watchog",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 270,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Illuminate",
      "1": "Keen Eye",
      H: "Analytic"
    },
    nfe: false,
    prevo: "Patrat"
  },
  lillipup: {
    tags: [],
    num: 506,
    name: "Lillipup",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 45,
      atk: 60,
      def: 45,
      spa: 25,
      spd: 45,
      spe: 55
    },
    weightkg: 4.1,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "lillipup",
    fullname: "pokemon: Lillipup",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lillipup",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 275,
    weighthg: 41,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Vital Spirit",
      "1": "Pickup",
      H: "Run Away"
    },
    evos: [
      "Herdier"
    ],
    nfe: true
  },
  herdier: {
    tags: [],
    num: 507,
    name: "Herdier",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 65,
      atk: 80,
      def: 65,
      spa: 35,
      spd: 65,
      spe: 60
    },
    weightkg: 14.7,
    evoLevel: 16,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "herdier",
    fullname: "pokemon: Herdier",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Herdier",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 370,
    weighthg: 147,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Sand Rush",
      H: "Scrappy"
    },
    evos: [
      "Stoutland"
    ],
    nfe: true,
    prevo: "Lillipup"
  },
  stoutland: {
    tags: [],
    num: 508,
    name: "Stoutland",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 85,
      atk: 110,
      def: 90,
      spa: 45,
      spd: 90,
      spe: 80
    },
    weightkg: 61,
    evoLevel: 32,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "stoutland",
    fullname: "pokemon: Stoutland",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Stoutland",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 610,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Sand Rush",
      H: "Scrappy"
    },
    nfe: false,
    prevo: "Herdier"
  },
  purrloin: {
    tags: [],
    num: 509,
    name: "Purrloin",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 41,
      atk: 50,
      def: 37,
      spa: 50,
      spd: 37,
      spe: 66
    },
    weightkg: 10.1,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "purrloin",
    fullname: "pokemon: Purrloin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Purrloin",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 281,
    weighthg: 101,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Prankster"
    },
    evos: [
      "Liepard"
    ],
    nfe: true
  },
  liepard: {
    tags: [],
    num: 510,
    name: "Liepard",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 64,
      atk: 88,
      def: 50,
      spa: 88,
      spd: 50,
      spe: 106
    },
    weightkg: 37.5,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "liepard",
    fullname: "pokemon: Liepard",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Liepard",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 446,
    weighthg: 375,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Prankster"
    },
    nfe: false,
    prevo: "Purrloin"
  },
  pansage: {
    tags: [],
    num: 511,
    name: "Pansage",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    },
    weightkg: 10.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "pansage",
    fullname: "pokemon: Pansage",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pansage",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 316,
    weighthg: 105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Overgrow"
    },
    evos: [
      "Simisage"
    ],
    nfe: true
  },
  simisage: {
    tags: [],
    num: 512,
    name: "Simisage",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    },
    weightkg: 30.5,
    evoType: "useItem",
    evoItem: "Leaf Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "simisage",
    fullname: "pokemon: Simisage",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Simisage",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 498,
    weighthg: 305,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Overgrow"
    },
    nfe: false,
    prevo: "Pansage"
  },
  pansear: {
    tags: [],
    num: 513,
    name: "Pansear",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    },
    weightkg: 11,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "pansear",
    fullname: "pokemon: Pansear",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pansear",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 316,
    weighthg: 110,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Blaze"
    },
    evos: [
      "Simisear"
    ],
    nfe: true
  },
  simisear: {
    tags: [],
    num: 514,
    name: "Simisear",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    },
    weightkg: 28,
    evoType: "useItem",
    evoItem: "Fire Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "simisear",
    fullname: "pokemon: Simisear",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Simisear",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 498,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Blaze"
    },
    nfe: false,
    prevo: "Pansear"
  },
  panpour: {
    tags: [],
    num: 515,
    name: "Panpour",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 53,
      def: 48,
      spa: 53,
      spd: 48,
      spe: 64
    },
    weightkg: 13.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "panpour",
    fullname: "pokemon: Panpour",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Panpour",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 316,
    weighthg: 135,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Torrent"
    },
    evos: [
      "Simipour"
    ],
    nfe: true
  },
  simipour: {
    tags: [],
    num: 516,
    name: "Simipour",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 63,
      spa: 98,
      spd: 63,
      spe: 101
    },
    weightkg: 29,
    evoType: "useItem",
    evoItem: "Water Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "simipour",
    fullname: "pokemon: Simipour",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Simipour",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 498,
    weighthg: 290,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Gluttony",
      H: "Torrent"
    },
    nfe: false,
    prevo: "Panpour"
  },
  munna: {
    tags: [],
    num: 517,
    name: "Munna",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 76,
      atk: 25,
      def: 45,
      spa: 67,
      spd: 55,
      spe: 24
    },
    weightkg: 23.3,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "munna",
    fullname: "pokemon: Munna",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Munna",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 292,
    weighthg: 233,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forewarn",
      "1": "Synchronize",
      H: "Telepathy"
    },
    evos: [
      "Musharna"
    ],
    nfe: true
  },
  musharna: {
    tags: [],
    num: 518,
    name: "Musharna",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 116,
      atk: 55,
      def: 85,
      spa: 107,
      spd: 95,
      spe: 29
    },
    weightkg: 60.5,
    evoType: "useItem",
    evoItem: "Moon Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "musharna",
    fullname: "pokemon: Musharna",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Musharna",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 487,
    weighthg: 605,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Forewarn",
      "1": "Synchronize",
      H: "Telepathy"
    },
    nfe: false,
    prevo: "Munna"
  },
  pidove: {
    tags: [],
    num: 519,
    name: "Pidove",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 50,
      atk: 55,
      def: 50,
      spa: 36,
      spd: 30,
      spe: 43
    },
    weightkg: 2.1,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "pidove",
    fullname: "pokemon: Pidove",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pidove",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 264,
    weighthg: 21,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    evos: [
      "Tranquill"
    ],
    nfe: true
  },
  tranquill: {
    tags: [],
    num: 520,
    name: "Tranquill",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 62,
      atk: 77,
      def: 62,
      spa: 50,
      spd: 42,
      spe: 65
    },
    weightkg: 15,
    evoLevel: 21,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "tranquill",
    fullname: "pokemon: Tranquill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tranquill",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 358,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    evos: [
      "Unfezant"
    ],
    nfe: true,
    prevo: "Pidove"
  },
  unfezant: {
    tags: [],
    num: 521,
    name: "Unfezant",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 115,
      def: 80,
      spa: 65,
      spd: 55,
      spe: 93
    },
    weightkg: 29,
    evoLevel: 32,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "unfezant",
    fullname: "pokemon: Unfezant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Unfezant",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 488,
    weighthg: 290,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Big Pecks",
      "1": "Super Luck",
      H: "Rivalry"
    },
    nfe: false,
    prevo: "Tranquill"
  },
  blitzle: {
    tags: [],
    num: 522,
    name: "Blitzle",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 45,
      atk: 60,
      def: 32,
      spa: 50,
      spd: 32,
      spe: 76
    },
    weightkg: 29.8,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "blitzle",
    fullname: "pokemon: Blitzle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Blitzle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 295,
    weighthg: 298,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      "1": "Motor Drive",
      H: "Sap Sipper"
    },
    evos: [
      "Zebstrika"
    ],
    nfe: true
  },
  zebstrika: {
    tags: [],
    num: 523,
    name: "Zebstrika",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 75,
      atk: 100,
      def: 63,
      spa: 80,
      spd: 63,
      spe: 116
    },
    weightkg: 79.5,
    evoLevel: 27,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "zebstrika",
    fullname: "pokemon: Zebstrika",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zebstrika",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 497,
    weighthg: 795,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      "1": "Motor Drive",
      H: "Sap Sipper"
    },
    nfe: false,
    prevo: "Blitzle"
  },
  roggenrola: {
    tags: [],
    num: 524,
    name: "Roggenrola",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 55,
      atk: 75,
      def: 85,
      spa: 25,
      spd: 25,
      spe: 15
    },
    weightkg: 18,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "roggenrola",
    fullname: "pokemon: Roggenrola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Roggenrola",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 280,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Weak Armor",
      H: "Sand Force"
    },
    evos: [
      "Boldore"
    ],
    nfe: true
  },
  boldore: {
    tags: [],
    num: 525,
    name: "Boldore",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 70,
      atk: 105,
      def: 105,
      spa: 50,
      spd: 40,
      spe: 20
    },
    weightkg: 102,
    evoLevel: 25,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "boldore",
    fullname: "pokemon: Boldore",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Boldore",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 390,
    weighthg: 1020,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Weak Armor",
      H: "Sand Force"
    },
    evos: [
      "Gigalith"
    ],
    nfe: true,
    prevo: "Roggenrola"
  },
  gigalith: {
    tags: [],
    num: 526,
    name: "Gigalith",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 85,
      atk: 135,
      def: 130,
      spa: 60,
      spd: 80,
      spe: 25
    },
    weightkg: 260,
    evoType: "trade",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "gigalith",
    fullname: "pokemon: Gigalith",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gigalith",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 515,
    weighthg: 2600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Sand Stream",
      H: "Sand Force"
    },
    nfe: false,
    prevo: "Boldore"
  },
  woobat: {
    tags: [],
    num: 527,
    name: "Woobat",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 65,
      atk: 45,
      def: 43,
      spa: 55,
      spd: 43,
      spe: 72
    },
    weightkg: 2.1,
    eggGroups: [
      "Flying",
      "Field"
    ],
    tier: "Illegal",
    id: "woobat",
    fullname: "pokemon: Woobat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Woobat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 323,
    weighthg: 21,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Unaware",
      "1": "Klutz",
      H: "Simple"
    },
    evos: [
      "Swoobat"
    ],
    nfe: true
  },
  swoobat: {
    tags: [],
    num: 528,
    name: "Swoobat",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 67,
      atk: 57,
      def: 55,
      spa: 77,
      spd: 55,
      spe: 114
    },
    weightkg: 10.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Flying",
      "Field"
    ],
    tier: "Illegal",
    id: "swoobat",
    fullname: "pokemon: Swoobat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swoobat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 425,
    weighthg: 105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Unaware",
      "1": "Klutz",
      H: "Simple"
    },
    nfe: false,
    prevo: "Woobat"
  },
  drilbur: {
    tags: [],
    num: 529,
    name: "Drilbur",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 60,
      atk: 85,
      def: 40,
      spa: 30,
      spd: 45,
      spe: 68
    },
    weightkg: 8.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "drilbur",
    fullname: "pokemon: Drilbur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Drilbur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 328,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Rush",
      "1": "Sand Force",
      H: "Mold Breaker"
    },
    evos: [
      "Excadrill"
    ],
    nfe: true
  },
  excadrill: {
    tags: [],
    num: 530,
    name: "Excadrill",
    types: [
      "Ground",
      "Steel"
    ],
    baseStats: {
      hp: 110,
      atk: 135,
      def: 60,
      spa: 50,
      spd: 65,
      spe: 88
    },
    weightkg: 40.4,
    evoLevel: 31,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "excadrill",
    fullname: "pokemon: Excadrill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Excadrill",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 508,
    weighthg: 404,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Rush",
      "1": "Sand Force",
      H: "Mold Breaker"
    },
    nfe: false,
    prevo: "Drilbur"
  },
  audino: {
    tags: [],
    num: 531,
    name: "Audino",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 103,
      atk: 60,
      def: 86,
      spa: 60,
      spd: 86,
      spe: 50
    },
    weightkg: 31,
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "audino",
    fullname: "pokemon: Audino",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Audino",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 445,
    weighthg: 310,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Healer",
      "1": "Regenerator",
      H: "Klutz"
    },
    nfe: false,
    otherFormes: [
      "Audino-Mega"
    ],
    formeOrder: [
      "Audino",
      "Audino-Mega"
    ],
    formes: [
      "Audino",
      "Audino-Mega"
    ]
  },
  audinomega: {
    tags: [],
    num: 531,
    name: "Audino-Mega",
    baseSpecies: "Audino",
    forme: "Mega",
    types: [
      "Normal",
      "Fairy"
    ],
    baseStats: {
      hp: 103,
      atk: 60,
      def: 126,
      spa: 80,
      spd: 126,
      spe: 50
    },
    weightkg: 32,
    eggGroups: [
      "Fairy"
    ],
    requiredItem: "Audinite",
    tier: "Illegal",
    id: "audinomega",
    fullname: "pokemon: Audino-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    requiredItems: [
      "Audinite"
    ],
    bst: 545,
    weighthg: 320,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Audino",
    changesFrom: "Audino",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Healer"
    },
    nfe: false
  },
  timburr: {
    tags: [],
    num: 532,
    name: "Timburr",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 55,
      spa: 25,
      spd: 35,
      spe: 35
    },
    weightkg: 12.5,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "timburr",
    fullname: "pokemon: Timburr",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Timburr",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    evos: [
      "Gurdurr"
    ],
    nfe: true
  },
  gurdurr: {
    tags: [],
    num: 533,
    name: "Gurdurr",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 85,
      atk: 105,
      def: 85,
      spa: 40,
      spd: 50,
      spe: 40
    },
    weightkg: 40,
    evoLevel: 25,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "gurdurr",
    fullname: "pokemon: Gurdurr",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gurdurr",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    evos: [
      "Conkeldurr"
    ],
    nfe: true,
    prevo: "Timburr"
  },
  conkeldurr: {
    tags: [],
    num: 534,
    name: "Conkeldurr",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 105,
      atk: 140,
      def: 95,
      spa: 55,
      spd: 65,
      spe: 45
    },
    weightkg: 87,
    evoType: "trade",
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "conkeldurr",
    fullname: "pokemon: Conkeldurr",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Conkeldurr",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 870,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.75,
      F: 0.25
    },
    abilities: {
      "0": "Guts",
      "1": "Sheer Force",
      H: "Iron Fist"
    },
    nfe: false,
    prevo: "Gurdurr"
  },
  tympole: {
    tags: [],
    num: 535,
    name: "Tympole",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 40,
      spa: 50,
      spd: 40,
      spe: 64
    },
    weightkg: 4.5,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "tympole",
    fullname: "pokemon: Tympole",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tympole",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 294,
    weighthg: 45,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Hydration",
      H: "Water Absorb"
    },
    evos: [
      "Palpitoad"
    ],
    nfe: true
  },
  palpitoad: {
    tags: [],
    num: 536,
    name: "Palpitoad",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 75,
      atk: 65,
      def: 55,
      spa: 65,
      spd: 55,
      spe: 69
    },
    weightkg: 17,
    evoLevel: 25,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "palpitoad",
    fullname: "pokemon: Palpitoad",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Palpitoad",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 384,
    weighthg: 170,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Hydration",
      H: "Water Absorb"
    },
    evos: [
      "Seismitoad"
    ],
    nfe: true,
    prevo: "Tympole"
  },
  seismitoad: {
    tags: [],
    num: 537,
    name: "Seismitoad",
    types: [
      "Water",
      "Ground"
    ],
    baseStats: {
      hp: 105,
      atk: 95,
      def: 75,
      spa: 85,
      spd: 75,
      spe: 74
    },
    weightkg: 62,
    evoLevel: 36,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "seismitoad",
    fullname: "pokemon: Seismitoad",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Seismitoad",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 509,
    weighthg: 620,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      "1": "Poison Touch",
      H: "Water Absorb"
    },
    nfe: false,
    prevo: "Palpitoad"
  },
  throh: {
    tags: [],
    num: 538,
    name: "Throh",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 120,
      atk: 100,
      def: 85,
      spa: 30,
      spd: 85,
      spe: 45
    },
    weightkg: 55.5,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "throh",
    fullname: "pokemon: Throh",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Throh",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 465,
    weighthg: 555,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Guts",
      "1": "Inner Focus",
      H: "Mold Breaker"
    },
    nfe: false
  },
  sawk: {
    tags: [],
    num: 539,
    name: "Sawk",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 75,
      atk: 125,
      def: 75,
      spa: 30,
      spd: 75,
      spe: 85
    },
    weightkg: 51,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "sawk",
    fullname: "pokemon: Sawk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sawk",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 465,
    weighthg: 510,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Sturdy",
      "1": "Inner Focus",
      H: "Mold Breaker"
    },
    nfe: false
  },
  sewaddle: {
    tags: [],
    num: 540,
    name: "Sewaddle",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 45,
      atk: 53,
      def: 70,
      spa: 40,
      spd: 60,
      spe: 42
    },
    weightkg: 2.5,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "sewaddle",
    fullname: "pokemon: Sewaddle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sewaddle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    evos: [
      "Swadloon"
    ],
    nfe: true
  },
  swadloon: {
    tags: [],
    num: 541,
    name: "Swadloon",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 55,
      atk: 63,
      def: 90,
      spa: 50,
      spd: 80,
      spe: 42
    },
    weightkg: 7.3,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "swadloon",
    fullname: "pokemon: Swadloon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swadloon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 380,
    weighthg: 73,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Leaf Guard",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    evos: [
      "Leavanny"
    ],
    nfe: true,
    prevo: "Sewaddle"
  },
  leavanny: {
    tags: [],
    num: 542,
    name: "Leavanny",
    types: [
      "Bug",
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 103,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 92
    },
    weightkg: 20.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "leavanny",
    fullname: "pokemon: Leavanny",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Leavanny",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Chlorophyll",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Swadloon"
  },
  venipede: {
    tags: [],
    num: 543,
    name: "Venipede",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 30,
      atk: 45,
      def: 59,
      spa: 30,
      spd: 39,
      spe: 57
    },
    weightkg: 5.3,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "venipede",
    fullname: "pokemon: Venipede",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Venipede",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 260,
    weighthg: 53,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    evos: [
      "Whirlipede"
    ],
    nfe: true
  },
  whirlipede: {
    tags: [],
    num: 544,
    name: "Whirlipede",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 99,
      spa: 40,
      spd: 79,
      spe: 47
    },
    weightkg: 58.5,
    evoLevel: 22,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "whirlipede",
    fullname: "pokemon: Whirlipede",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Whirlipede",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 360,
    weighthg: 585,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    evos: [
      "Scolipede"
    ],
    nfe: true,
    prevo: "Venipede"
  },
  scolipede: {
    tags: [],
    num: 545,
    name: "Scolipede",
    types: [
      "Bug",
      "Poison"
    ],
    baseStats: {
      hp: 60,
      atk: 100,
      def: 89,
      spa: 55,
      spd: 69,
      spe: 112
    },
    weightkg: 200.5,
    evoLevel: 30,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "scolipede",
    fullname: "pokemon: Scolipede",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Scolipede",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 2005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Swarm",
      H: "Speed Boost"
    },
    nfe: false,
    prevo: "Whirlipede"
  },
  cottonee: {
    tags: [],
    num: 546,
    name: "Cottonee",
    types: [
      "Grass",
      "Fairy"
    ],
    baseStats: {
      hp: 40,
      atk: 27,
      def: 60,
      spa: 37,
      spd: 50,
      spe: 66
    },
    weightkg: 0.6,
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "Illegal",
    id: "cottonee",
    fullname: "pokemon: Cottonee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cottonee",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 280,
    weighthg: 6,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Prankster",
      "1": "Infiltrator",
      H: "Chlorophyll"
    },
    evos: [
      "Whimsicott"
    ],
    nfe: true
  },
  whimsicott: {
    tags: [],
    num: 547,
    name: "Whimsicott",
    types: [
      "Grass",
      "Fairy"
    ],
    baseStats: {
      hp: 60,
      atk: 67,
      def: 85,
      spa: 77,
      spd: 75,
      spe: 116
    },
    weightkg: 6.6,
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: [
      "Fairy",
      "Grass"
    ],
    tier: "Illegal",
    id: "whimsicott",
    fullname: "pokemon: Whimsicott",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Whimsicott",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 66,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Prankster",
      "1": "Infiltrator",
      H: "Chlorophyll"
    },
    nfe: false,
    prevo: "Cottonee"
  },
  petilil: {
    tags: [],
    num: 548,
    name: "Petilil",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 45,
      atk: 35,
      def: 50,
      spa: 70,
      spd: 50,
      spe: 30
    },
    weightkg: 6.6,
    eggGroups: [
      "Grass"
    ],
    tier: "LC",
    id: "petilil",
    fullname: "pokemon: Petilil",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Petilil",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 280,
    weighthg: 66,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Own Tempo",
      H: "Leaf Guard"
    },
    evos: [
      "Lilligant"
    ],
    nfe: true
  },
  lilligant: {
    tags: [],
    num: 549,
    name: "Lilligant",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 75,
      spe: 90
    },
    weightkg: 16.3,
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: [
      "Grass"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "lilligant",
    fullname: "pokemon: Lilligant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Lilligant",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 163,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Own Tempo",
      H: "Leaf Guard"
    },
    nfe: false,
    prevo: "Petilil"
  },
  basculin: {
    tags: [],
    num: 550,
    name: "Basculin",
    baseForme: "Red-Striped",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 92,
      def: 65,
      spa: 80,
      spd: 55,
      spe: 98
    },
    weightkg: 18,
    eggGroups: [
      "Water 2"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "basculin",
    fullname: "pokemon: Basculin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Basculin",
    forme: "",
    canHatch: true,
    bst: 460,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Reckless",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    nfe: false,
    otherFormes: [
      "Basculin-Blue-Striped"
    ],
    formeOrder: [
      "Basculin",
      "Basculin-Blue-Striped"
    ],
    formes: [
      "Basculin",
      "Basculin-Blue-Striped"
    ]
  },
  basculinbluestriped: {
    tags: [],
    num: 550,
    name: "Basculin-Blue-Striped",
    baseSpecies: "Basculin",
    forme: "Blue-Striped",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 92,
      def: 65,
      spa: 80,
      spd: 55,
      spe: 98
    },
    weightkg: 18,
    eggGroups: [
      "Water 2"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "basculinbluestriped",
    fullname: "pokemon: Basculin-Blue-Striped",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 460,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rock Head",
      "1": "Adaptability",
      H: "Mold Breaker"
    },
    nfe: false
  },
  sandile: {
    tags: [],
    num: 551,
    name: "Sandile",
    types: [
      "Ground",
      "Dark"
    ],
    baseStats: {
      hp: 50,
      atk: 72,
      def: 35,
      spa: 35,
      spd: 35,
      spe: 65
    },
    weightkg: 15.2,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "sandile",
    fullname: "pokemon: Sandile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sandile",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 292,
    weighthg: 152,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    evos: [
      "Krokorok"
    ],
    nfe: true
  },
  krokorok: {
    tags: [],
    num: 552,
    name: "Krokorok",
    types: [
      "Ground",
      "Dark"
    ],
    baseStats: {
      hp: 60,
      atk: 82,
      def: 45,
      spa: 45,
      spd: 45,
      spe: 74
    },
    weightkg: 33.4,
    evoLevel: 29,
    eggGroups: [
      "Field"
    ],
    tier: "NFE",
    id: "krokorok",
    fullname: "pokemon: Krokorok",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Krokorok",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 351,
    weighthg: 334,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    evos: [
      "Krookodile"
    ],
    nfe: true,
    prevo: "Sandile"
  },
  krookodile: {
    tags: [],
    num: 553,
    name: "Krookodile",
    types: [
      "Ground",
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 117,
      def: 80,
      spa: 65,
      spd: 70,
      spe: 92
    },
    weightkg: 96.3,
    evoLevel: 40,
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "krookodile",
    fullname: "pokemon: Krookodile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Krookodile",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 519,
    weighthg: 963,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Intimidate",
      "1": "Moxie",
      H: "Anger Point"
    },
    nfe: false,
    prevo: "Krokorok"
  },
  darumaka: {
    tags: [],
    num: 554,
    name: "Darumaka",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 45,
      spa: 15,
      spd: 45,
      spe: 50
    },
    weightkg: 37.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "darumaka",
    fullname: "pokemon: Darumaka",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Darumaka",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 315,
    weighthg: 375,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hustle",
      H: "Inner Focus"
    },
    evos: [
      "Darmanitan"
    ],
    nfe: true,
    otherFormes: [
      "Darumaka-Galar"
    ],
    formeOrder: [
      "Darumaka",
      "Darumaka-Galar"
    ],
    formes: [
      "Darumaka",
      "Darumaka-Galar"
    ]
  },
  darumakagalar: {
    tags: [],
    num: 554,
    name: "Darumaka-Galar",
    baseSpecies: "Darumaka",
    forme: "Galar",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 70,
      atk: 90,
      def: 45,
      spa: 15,
      spd: 45,
      spe: 50
    },
    weightkg: 40,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "darumakagalar",
    fullname: "pokemon: Darumaka-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 315,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hustle",
      H: "Inner Focus"
    },
    evos: [
      "Darmanitan-Galar"
    ],
    nfe: true
  },
  darmanitan: {
    tags: [],
    num: 555,
    name: "Darmanitan",
    baseForme: "Standard",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 105,
      atk: 140,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 95
    },
    weightkg: 92.9,
    evoLevel: 35,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "darmanitan",
    fullname: "pokemon: Darmanitan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Darmanitan",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 929,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sheer Force",
      H: "Zen Mode"
    },
    nfe: false,
    otherFormes: [
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    formeOrder: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    formes: [
      "Darmanitan",
      "Darmanitan-Zen",
      "Darmanitan-Galar",
      "Darmanitan-Galar-Zen"
    ],
    prevo: "Darumaka"
  },
  darmanitangalar: {
    tags: [],
    num: 555,
    name: "Darmanitan-Galar",
    baseSpecies: "Darmanitan",
    forme: "Galar",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 105,
      atk: 140,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 95
    },
    weightkg: 120,
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "darmanitangalar",
    fullname: "pokemon: Darmanitan-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gorilla Tactics",
      H: "Zen Mode"
    },
    nfe: false,
    prevo: "Darumaka-Galar"
  },
  darmanitangalarzen: {
    tags: [],
    num: 555,
    name: "Darmanitan-Galar-Zen",
    baseSpecies: "Darmanitan",
    forme: "Galar-Zen",
    types: [
      "Ice",
      "Fire"
    ],
    baseStats: {
      hp: 105,
      atk: 160,
      def: 55,
      spa: 30,
      spd: 55,
      spe: 135
    },
    weightkg: 120,
    eggGroups: [
      "Field"
    ],
    requiredAbility: "Zen Mode",
    battleOnly: "Darmanitan-Galar",
    id: "darmanitangalarzen",
    fullname: "pokemon: Darmanitan-Galar-Zen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 540,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Darmanitan-Galar",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Zen Mode"
    },
    nfe: false
  },
  darmanitanzen: {
    tags: [],
    num: 555,
    name: "Darmanitan-Zen",
    baseSpecies: "Darmanitan",
    forme: "Zen",
    types: [
      "Fire",
      "Psychic"
    ],
    baseStats: {
      hp: 105,
      atk: 30,
      def: 105,
      spa: 140,
      spd: 105,
      spe: 55
    },
    weightkg: 92.9,
    eggGroups: [
      "Field"
    ],
    requiredAbility: "Zen Mode",
    battleOnly: "Darmanitan",
    id: "darmanitanzen",
    fullname: "pokemon: Darmanitan-Zen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 540,
    weighthg: 929,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Darmanitan",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Zen Mode"
    },
    nfe: false
  },
  maractus: {
    tags: [],
    num: 556,
    name: "Maractus",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 86,
      def: 67,
      spa: 106,
      spd: 67,
      spe: 60
    },
    weightkg: 28,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "maractus",
    fullname: "pokemon: Maractus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Maractus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 461,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Chlorophyll",
      H: "Storm Drain"
    },
    nfe: false
  },
  dwebble: {
    tags: [],
    num: 557,
    name: "Dwebble",
    types: [
      "Bug",
      "Rock"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 85,
      spa: 35,
      spd: 35,
      spe: 55
    },
    weightkg: 14.5,
    eggGroups: [
      "Bug",
      "Mineral"
    ],
    tier: "Illegal",
    id: "dwebble",
    fullname: "pokemon: Dwebble",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dwebble",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 145,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    evos: [
      "Crustle"
    ],
    nfe: true
  },
  crustle: {
    tags: [],
    num: 558,
    name: "Crustle",
    types: [
      "Bug",
      "Rock"
    ],
    baseStats: {
      hp: 70,
      atk: 105,
      def: 125,
      spa: 65,
      spd: 75,
      spe: 45
    },
    weightkg: 200,
    evoLevel: 34,
    eggGroups: [
      "Bug",
      "Mineral"
    ],
    tier: "Illegal",
    id: "crustle",
    fullname: "pokemon: Crustle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Crustle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 2000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy",
      "1": "Shell Armor",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Dwebble"
  },
  scraggy: {
    tags: [],
    num: 559,
    name: "Scraggy",
    types: [
      "Dark",
      "Fighting"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 70,
      spa: 35,
      spd: 70,
      spe: 48
    },
    weightkg: 11.8,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "Illegal",
    id: "scraggy",
    fullname: "pokemon: Scraggy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Scraggy",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 348,
    weighthg: 118,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      "1": "Moxie",
      H: "Intimidate"
    },
    evos: [
      "Scrafty"
    ],
    nfe: true
  },
  scrafty: {
    tags: [],
    num: 560,
    name: "Scrafty",
    types: [
      "Dark",
      "Fighting"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 115,
      spa: 45,
      spd: 115,
      spe: 58
    },
    weightkg: 30,
    evoLevel: 39,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "Illegal",
    id: "scrafty",
    fullname: "pokemon: Scrafty",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Scrafty",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 488,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      "1": "Moxie",
      H: "Intimidate"
    },
    nfe: false,
    prevo: "Scraggy"
  },
  sigilyph: {
    tags: [],
    num: 561,
    name: "Sigilyph",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 72,
      atk: 58,
      def: 80,
      spa: 103,
      spd: 80,
      spe: 97
    },
    weightkg: 14,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "sigilyph",
    fullname: "pokemon: Sigilyph",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sigilyph",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 490,
    weighthg: 140,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Wonder Skin",
      "1": "Magic Guard",
      H: "Tinted Lens"
    },
    nfe: false
  },
  yamask: {
    tags: [],
    num: 562,
    name: "Yamask",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 38,
      atk: 30,
      def: 85,
      spa: 55,
      spd: 65,
      spe: 30
    },
    weightkg: 1.5,
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "yamask",
    fullname: "pokemon: Yamask",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Yamask",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 303,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mummy"
    },
    evos: [
      "Cofagrigus"
    ],
    nfe: true,
    otherFormes: [
      "Yamask-Galar"
    ],
    formeOrder: [
      "Yamask",
      "Yamask-Galar"
    ],
    formes: [
      "Yamask",
      "Yamask-Galar"
    ]
  },
  yamaskgalar: {
    tags: [],
    num: 562,
    name: "Yamask-Galar",
    baseSpecies: "Yamask",
    forme: "Galar",
    types: [
      "Ground",
      "Ghost"
    ],
    baseStats: {
      hp: 38,
      atk: 55,
      def: 85,
      spa: 30,
      spd: 65,
      spe: 30
    },
    weightkg: 1.5,
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "yamaskgalar",
    fullname: "pokemon: Yamask-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 303,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Wandering Spirit"
    },
    evos: [
      "Runerigus"
    ],
    nfe: true
  },
  cofagrigus: {
    tags: [],
    num: 563,
    name: "Cofagrigus",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 58,
      atk: 50,
      def: 145,
      spa: 95,
      spd: 105,
      spe: 30
    },
    weightkg: 76.5,
    evoLevel: 34,
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "cofagrigus",
    fullname: "pokemon: Cofagrigus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cofagrigus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 483,
    weighthg: 765,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mummy"
    },
    nfe: false,
    prevo: "Yamask"
  },
  tirtouga: {
    tags: [],
    num: 564,
    name: "Tirtouga",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 54,
      atk: 78,
      def: 103,
      spa: 53,
      spd: 45,
      spe: 22
    },
    weightkg: 16.5,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "tirtouga",
    fullname: "pokemon: Tirtouga",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tirtouga",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 165,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Solid Rock",
      "1": "Sturdy",
      H: "Swift Swim"
    },
    evos: [
      "Carracosta"
    ],
    nfe: true
  },
  carracosta: {
    tags: [],
    num: 565,
    name: "Carracosta",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 74,
      atk: 108,
      def: 133,
      spa: 83,
      spd: 65,
      spe: 32
    },
    weightkg: 81,
    evoLevel: 37,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "carracosta",
    fullname: "pokemon: Carracosta",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Carracosta",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 810,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Solid Rock",
      "1": "Sturdy",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Tirtouga"
  },
  archen: {
    tags: [],
    num: 566,
    name: "Archen",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 112,
      def: 45,
      spa: 74,
      spd: 45,
      spe: 70
    },
    weightkg: 9.5,
    eggGroups: [
      "Flying",
      "Water 3"
    ],
    tier: "Illegal",
    id: "archen",
    fullname: "pokemon: Archen",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Archen",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 401,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Defeatist"
    },
    evos: [
      "Archeops"
    ],
    nfe: true
  },
  archeops: {
    tags: [],
    num: 567,
    name: "Archeops",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 140,
      def: 65,
      spa: 112,
      spd: 65,
      spe: 110
    },
    weightkg: 32,
    evoLevel: 37,
    eggGroups: [
      "Flying",
      "Water 3"
    ],
    tier: "Illegal",
    id: "archeops",
    fullname: "pokemon: Archeops",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Archeops",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 567,
    weighthg: 320,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Defeatist"
    },
    nfe: false,
    prevo: "Archen"
  },
  trubbish: {
    tags: [],
    num: 568,
    name: "Trubbish",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 50,
      atk: 50,
      def: 62,
      spa: 40,
      spd: 62,
      spe: 65
    },
    weightkg: 31,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "trubbish",
    fullname: "pokemon: Trubbish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Trubbish",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 329,
    weighthg: 310,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Sticky Hold",
      H: "Aftermath"
    },
    evos: [
      "Garbodor"
    ],
    nfe: true
  },
  garbodor: {
    tags: [],
    num: 569,
    name: "Garbodor",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 95,
      def: 82,
      spa: 60,
      spd: 82,
      spe: 75
    },
    weightkg: 107.3,
    evoLevel: 36,
    eggGroups: [
      "Mineral"
    ],
    canGigantamax: "G-Max Malodor",
    tier: "Illegal",
    id: "garbodor",
    fullname: "pokemon: Garbodor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Garbodor",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 474,
    weighthg: 1073,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Weak Armor",
      H: "Aftermath"
    },
    nfe: false,
    prevo: "Trubbish"
  },
  garbodorgmax: {
    tags: [],
    num: 569,
    name: "Garbodor-Gmax",
    baseSpecies: "Garbodor",
    forme: "Gmax",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 80,
      atk: 95,
      def: 82,
      spa: 60,
      spd: 82,
      spe: 75
    },
    weightkg: 0,
    eggGroups: [
      "Mineral"
    ],
    changesFrom: "Garbodor",
    tier: "Illegal",
    id: "garbodorgmax",
    fullname: "pokemon: Garbodor-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 474,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stench",
      "1": "Weak Armor",
      H: "Aftermath"
    },
    nfe: false
  },
  zorua: {
    tags: [],
    num: 570,
    name: "Zorua",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 40,
      atk: 65,
      def: 40,
      spa: 80,
      spd: 40,
      spe: 65
    },
    weightkg: 12.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "zorua",
    fullname: "pokemon: Zorua",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Zorua",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Illusion"
    },
    evos: [
      "Zoroark"
    ],
    nfe: true,
    otherFormes: [
      "Zorua-Hisui"
    ],
    formeOrder: [
      "Zorua",
      "Zorua-Hisui"
    ],
    formes: [
      "Zorua",
      "Zorua-Hisui"
    ]
  },
  zoruahisui: {
    tags: [],
    num: 570,
    name: "Zorua-Hisui",
    baseSpecies: "Zorua",
    forme: "Hisui",
    types: [
      "Normal",
      "Ghost"
    ],
    baseStats: {
      hp: 35,
      atk: 60,
      def: 40,
      spa: 85,
      spd: 40,
      spe: 70
    },
    weightkg: 12.5,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "LC",
    id: "zoruahisui",
    fullname: "pokemon: Zorua-Hisui",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 330,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Illusion"
    },
    evos: [
      "Zoroark-Hisui"
    ],
    nfe: true
  },
  zoroark: {
    tags: [],
    num: 571,
    name: "Zoroark",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 60,
      atk: 105,
      def: 60,
      spa: 120,
      spd: 60,
      spe: 105
    },
    weightkg: 81.1,
    evoLevel: 30,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "zoroark",
    fullname: "pokemon: Zoroark",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Zoroark",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 811,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Illusion"
    },
    nfe: false,
    otherFormes: [
      "Zoroark-Hisui"
    ],
    formeOrder: [
      "Zoroark",
      "Zoroark-Hisui"
    ],
    formes: [
      "Zoroark",
      "Zoroark-Hisui"
    ],
    prevo: "Zorua"
  },
  zoroarkhisui: {
    tags: [],
    num: 571,
    name: "Zoroark-Hisui",
    baseSpecies: "Zoroark",
    forme: "Hisui",
    types: [
      "Normal",
      "Ghost"
    ],
    baseStats: {
      hp: 55,
      atk: 100,
      def: 60,
      spa: 125,
      spd: 60,
      spe: 110
    },
    weightkg: 73,
    evoLevel: 30,
    eggGroups: [
      "Field"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "zoroarkhisui",
    fullname: "pokemon: Zoroark-Hisui",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 730,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Illusion"
    },
    nfe: false,
    prevo: "Zorua-Hisui"
  },
  minccino: {
    tags: [],
    num: 572,
    name: "Minccino",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 55,
      atk: 50,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 75
    },
    weightkg: 5.8,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "minccino",
    fullname: "pokemon: Minccino",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Minccino",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 58,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Technician",
      H: "Skill Link"
    },
    evos: [
      "Cinccino"
    ],
    nfe: true
  },
  cinccino: {
    tags: [],
    num: 573,
    name: "Cinccino",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 75,
      atk: 95,
      def: 60,
      spa: 65,
      spd: 60,
      spe: 115
    },
    weightkg: 7.5,
    evoType: "useItem",
    evoItem: "Shiny Stone",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "cinccino",
    fullname: "pokemon: Cinccino",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cinccino",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 470,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Cute Charm",
      "1": "Technician",
      H: "Skill Link"
    },
    nfe: false,
    prevo: "Minccino"
  },
  gothita: {
    tags: [],
    num: 574,
    name: "Gothita",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 45,
      atk: 30,
      def: 50,
      spa: 55,
      spd: 65,
      spe: 45
    },
    weightkg: 5.8,
    eggGroups: [
      "Human-Like"
    ],
    tier: "LC",
    id: "gothita",
    fullname: "pokemon: Gothita",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gothita",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 290,
    weighthg: 58,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    evos: [
      "Gothorita"
    ],
    nfe: true
  },
  gothorita: {
    tags: [],
    num: 575,
    name: "Gothorita",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 70,
      spa: 75,
      spd: 85,
      spe: 55
    },
    weightkg: 18,
    evoLevel: 32,
    eggGroups: [
      "Human-Like"
    ],
    tier: "NFE",
    id: "gothorita",
    fullname: "pokemon: Gothorita",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gothorita",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 390,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    evos: [
      "Gothitelle"
    ],
    nfe: true,
    prevo: "Gothita"
  },
  gothitelle: {
    tags: [],
    num: 576,
    name: "Gothitelle",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 70,
      atk: 55,
      def: 95,
      spa: 95,
      spd: 110,
      spe: 65
    },
    weightkg: 44,
    evoLevel: 41,
    eggGroups: [
      "Human-Like"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "gothitelle",
    fullname: "pokemon: Gothitelle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gothitelle",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 440,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Frisk",
      "1": "Competitive",
      H: "Shadow Tag"
    },
    nfe: false,
    prevo: "Gothorita"
  },
  solosis: {
    tags: [],
    num: 577,
    name: "Solosis",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 45,
      atk: 30,
      def: 40,
      spa: 105,
      spd: 50,
      spe: 20
    },
    weightkg: 1,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "solosis",
    fullname: "pokemon: Solosis",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Solosis",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 290,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    evos: [
      "Duosion"
    ],
    nfe: true
  },
  duosion: {
    tags: [],
    num: 578,
    name: "Duosion",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 65,
      atk: 40,
      def: 50,
      spa: 125,
      spd: 60,
      spe: 30
    },
    weightkg: 8,
    evoLevel: 32,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "duosion",
    fullname: "pokemon: Duosion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Duosion",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 370,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    evos: [
      "Reuniclus"
    ],
    nfe: true,
    prevo: "Solosis"
  },
  reuniclus: {
    tags: [],
    num: 579,
    name: "Reuniclus",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 110,
      atk: 65,
      def: 75,
      spa: 125,
      spd: 85,
      spe: 30
    },
    weightkg: 20.1,
    evoLevel: 41,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "reuniclus",
    fullname: "pokemon: Reuniclus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Reuniclus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 201,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Overcoat",
      "1": "Magic Guard",
      H: "Regenerator"
    },
    nfe: false,
    prevo: "Duosion"
  },
  ducklett: {
    tags: [],
    num: 580,
    name: "Ducklett",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 62,
      atk: 44,
      def: 50,
      spa: 44,
      spd: 50,
      spe: 55
    },
    weightkg: 5.5,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    tier: "Illegal",
    id: "ducklett",
    fullname: "pokemon: Ducklett",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ducklett",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Big Pecks",
      H: "Hydration"
    },
    evos: [
      "Swanna"
    ],
    nfe: true
  },
  swanna: {
    tags: [],
    num: 581,
    name: "Swanna",
    types: [
      "Water",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 87,
      def: 63,
      spa: 87,
      spd: 63,
      spe: 98
    },
    weightkg: 24.2,
    evoLevel: 35,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    tier: "Illegal",
    id: "swanna",
    fullname: "pokemon: Swanna",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swanna",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 473,
    weighthg: 242,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Big Pecks",
      H: "Hydration"
    },
    nfe: false,
    prevo: "Ducklett"
  },
  vanillite: {
    tags: [],
    num: 582,
    name: "Vanillite",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 36,
      atk: 50,
      def: 50,
      spa: 65,
      spd: 60,
      spe: 44
    },
    weightkg: 5.7,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "vanillite",
    fullname: "pokemon: Vanillite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vanillite",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 57,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ice Body",
      "1": "Snow Cloak",
      H: "Weak Armor"
    },
    evos: [
      "Vanillish"
    ],
    nfe: true
  },
  vanillish: {
    tags: [],
    num: 583,
    name: "Vanillish",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 51,
      atk: 65,
      def: 65,
      spa: 80,
      spd: 75,
      spe: 59
    },
    weightkg: 41,
    evoLevel: 35,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "vanillish",
    fullname: "pokemon: Vanillish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vanillish",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 395,
    weighthg: 410,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ice Body",
      "1": "Snow Cloak",
      H: "Weak Armor"
    },
    evos: [
      "Vanilluxe"
    ],
    nfe: true,
    prevo: "Vanillite"
  },
  vanilluxe: {
    tags: [],
    num: 584,
    name: "Vanilluxe",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 71,
      atk: 95,
      def: 85,
      spa: 110,
      spd: 95,
      spe: 79
    },
    weightkg: 57.5,
    evoLevel: 47,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "vanilluxe",
    fullname: "pokemon: Vanilluxe",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vanilluxe",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 535,
    weighthg: 575,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ice Body",
      "1": "Snow Warning",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Vanillish"
  },
  deerling: {
    tags: [],
    num: 585,
    name: "Deerling",
    baseForme: "Spring",
    types: [
      "Normal",
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    },
    weightkg: 19.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "deerling",
    fullname: "pokemon: Deerling",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Deerling",
    forme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 335,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Sap Sipper",
      H: "Serene Grace"
    },
    evos: [
      "Sawsbuck"
    ],
    nfe: true,
    cosmeticFormes: [
      "Deerling-Summer",
      "Deerling-Autumn",
      "Deerling-Winter"
    ],
    formeOrder: [
      "Deerling",
      "Deerling-Summer",
      "Deerling-Autumn",
      "Deerling-Winter"
    ],
    formes: [
      "Deerling",
      "Deerling-Summer",
      "Deerling-Autumn",
      "Deerling-Winter"
    ]
  },
  sawsbuck: {
    tags: [],
    num: 586,
    name: "Sawsbuck",
    baseForme: "Spring",
    types: [
      "Normal",
      "Grass"
    ],
    baseStats: {
      hp: 80,
      atk: 100,
      def: 70,
      spa: 60,
      spd: 70,
      spe: 95
    },
    weightkg: 92.5,
    evoLevel: 34,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "sawsbuck",
    fullname: "pokemon: Sawsbuck",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sawsbuck",
    forme: "",
    canHatch: false,
    bst: 475,
    weighthg: 925,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Chlorophyll",
      "1": "Sap Sipper",
      H: "Serene Grace"
    },
    nfe: false,
    cosmeticFormes: [
      "Sawsbuck-Summer",
      "Sawsbuck-Autumn",
      "Sawsbuck-Winter"
    ],
    formeOrder: [
      "Sawsbuck",
      "Sawsbuck-Summer",
      "Sawsbuck-Autumn",
      "Sawsbuck-Winter"
    ],
    formes: [
      "Sawsbuck",
      "Sawsbuck-Summer",
      "Sawsbuck-Autumn",
      "Sawsbuck-Winter"
    ],
    prevo: "Deerling"
  },
  emolga: {
    tags: [],
    num: 587,
    name: "Emolga",
    types: [
      "Electric",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 75,
      def: 60,
      spa: 75,
      spd: 60,
      spe: 103
    },
    weightkg: 5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "emolga",
    fullname: "pokemon: Emolga",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Emolga",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 428,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      H: "Motor Drive"
    },
    nfe: false
  },
  karrablast: {
    tags: [],
    num: 588,
    name: "Karrablast",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 75,
      def: 45,
      spa: 40,
      spd: 45,
      spe: 60
    },
    weightkg: 5.9,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "karrablast",
    fullname: "pokemon: Karrablast",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Karrablast",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 315,
    weighthg: 59,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Shed Skin",
      H: "No Guard"
    },
    evos: [
      "Escavalier"
    ],
    nfe: true
  },
  escavalier: {
    tags: [],
    num: 589,
    name: "Escavalier",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 135,
      def: 105,
      spa: 60,
      spd: 105,
      spe: 20
    },
    weightkg: 33,
    evoType: "trade",
    evoCondition: "with a Shelmet",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "escavalier",
    fullname: "pokemon: Escavalier",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Escavalier",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 330,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Shell Armor",
      H: "Overcoat"
    },
    nfe: false,
    prevo: "Karrablast"
  },
  foongus: {
    tags: [],
    num: 590,
    name: "Foongus",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 69,
      atk: 55,
      def: 45,
      spa: 55,
      spd: 55,
      spe: 15
    },
    weightkg: 1,
    eggGroups: [
      "Grass"
    ],
    tier: "LC",
    id: "foongus",
    fullname: "pokemon: Foongus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Foongus",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 294,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      H: "Regenerator"
    },
    evos: [
      "Amoonguss"
    ],
    nfe: true
  },
  amoonguss: {
    tags: [],
    num: 591,
    name: "Amoonguss",
    types: [
      "Grass",
      "Poison"
    ],
    baseStats: {
      hp: 114,
      atk: 85,
      def: 70,
      spa: 85,
      spd: 80,
      spe: 30
    },
    weightkg: 10.5,
    evoLevel: 39,
    eggGroups: [
      "Grass"
    ],
    tier: "OU",
    doublesTier: "DOU",
    id: "amoonguss",
    fullname: "pokemon: Amoonguss",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Amoonguss",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 464,
    weighthg: 105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Effect Spore",
      H: "Regenerator"
    },
    nfe: false,
    prevo: "Foongus"
  },
  frillish: {
    tags: [],
    num: 592,
    name: "Frillish",
    types: [
      "Water",
      "Ghost"
    ],
    baseStats: {
      hp: 55,
      atk: 40,
      def: 50,
      spa: 65,
      spd: 85,
      spe: 40
    },
    weightkg: 33,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "frillish",
    fullname: "pokemon: Frillish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Frillish",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 330,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Cursed Body",
      H: "Damp"
    },
    evos: [
      "Jellicent"
    ],
    nfe: true
  },
  jellicent: {
    tags: [],
    num: 593,
    name: "Jellicent",
    types: [
      "Water",
      "Ghost"
    ],
    baseStats: {
      hp: 100,
      atk: 60,
      def: 70,
      spa: 85,
      spd: 105,
      spe: 60
    },
    weightkg: 135,
    evoLevel: 40,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "jellicent",
    fullname: "pokemon: Jellicent",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Jellicent",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 1350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Absorb",
      "1": "Cursed Body",
      H: "Damp"
    },
    nfe: false,
    prevo: "Frillish"
  },
  alomomola: {
    tags: [],
    num: 594,
    name: "Alomomola",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 165,
      atk: 75,
      def: 80,
      spa: 40,
      spd: 45,
      spe: 65
    },
    weightkg: 31.6,
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "alomomola",
    fullname: "pokemon: Alomomola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Alomomola",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 316,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Healer",
      "1": "Hydration",
      H: "Regenerator"
    },
    nfe: false
  },
  joltik: {
    tags: [],
    num: 595,
    name: "Joltik",
    types: [
      "Bug",
      "Electric"
    ],
    baseStats: {
      hp: 50,
      atk: 47,
      def: 50,
      spa: 57,
      spd: 50,
      spe: 65
    },
    weightkg: 0.6,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "joltik",
    fullname: "pokemon: Joltik",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Joltik",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 319,
    weighthg: 6,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      "1": "Unnerve",
      H: "Swarm"
    },
    evos: [
      "Galvantula"
    ],
    nfe: true
  },
  galvantula: {
    tags: [],
    num: 596,
    name: "Galvantula",
    types: [
      "Bug",
      "Electric"
    ],
    baseStats: {
      hp: 70,
      atk: 77,
      def: 60,
      spa: 97,
      spd: 60,
      spe: 108
    },
    weightkg: 14.3,
    evoLevel: 36,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "galvantula",
    fullname: "pokemon: Galvantula",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Galvantula",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 472,
    weighthg: 143,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Compound Eyes",
      "1": "Unnerve",
      H: "Swarm"
    },
    nfe: false,
    prevo: "Joltik"
  },
  ferroseed: {
    tags: [],
    num: 597,
    name: "Ferroseed",
    types: [
      "Grass",
      "Steel"
    ],
    baseStats: {
      hp: 44,
      atk: 50,
      def: 91,
      spa: 24,
      spd: 86,
      spe: 10
    },
    weightkg: 18.8,
    eggGroups: [
      "Grass",
      "Mineral"
    ],
    tier: "Illegal",
    id: "ferroseed",
    fullname: "pokemon: Ferroseed",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ferroseed",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 188,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Iron Barbs"
    },
    evos: [
      "Ferrothorn"
    ],
    nfe: true
  },
  ferrothorn: {
    tags: [],
    num: 598,
    name: "Ferrothorn",
    types: [
      "Grass",
      "Steel"
    ],
    baseStats: {
      hp: 74,
      atk: 94,
      def: 131,
      spa: 54,
      spd: 116,
      spe: 20
    },
    weightkg: 110,
    evoLevel: 40,
    eggGroups: [
      "Grass",
      "Mineral"
    ],
    tier: "Illegal",
    id: "ferrothorn",
    fullname: "pokemon: Ferrothorn",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ferrothorn",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 489,
    weighthg: 1100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Iron Barbs",
      H: "Anticipation"
    },
    nfe: false,
    prevo: "Ferroseed"
  },
  klink: {
    tags: [],
    num: 599,
    name: "Klink",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 70,
      spa: 45,
      spd: 60,
      spe: 30
    },
    weightkg: 21,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "klink",
    fullname: "pokemon: Klink",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Klink",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 210,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    evos: [
      "Klang"
    ],
    nfe: true
  },
  klang: {
    tags: [],
    num: 600,
    name: "Klang",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 60,
      atk: 80,
      def: 95,
      spa: 70,
      spd: 85,
      spe: 50
    },
    weightkg: 51,
    evoLevel: 38,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "klang",
    fullname: "pokemon: Klang",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Klang",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 440,
    weighthg: 510,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    evos: [
      "Klinklang"
    ],
    nfe: true,
    prevo: "Klink"
  },
  klinklang: {
    tags: [],
    num: 601,
    name: "Klinklang",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 60,
      atk: 100,
      def: 115,
      spa: 70,
      spd: 85,
      spe: 90
    },
    weightkg: 81,
    evoLevel: 49,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "klinklang",
    fullname: "pokemon: Klinklang",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Klinklang",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 810,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Plus",
      "1": "Minus",
      H: "Clear Body"
    },
    nfe: false,
    prevo: "Klang"
  },
  tynamo: {
    tags: [],
    num: 602,
    name: "Tynamo",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 45,
      spd: 40,
      spe: 60
    },
    weightkg: 0.3,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "tynamo",
    fullname: "pokemon: Tynamo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Tynamo",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 275,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Eelektrik"
    ],
    nfe: true
  },
  eelektrik: {
    tags: [],
    num: 603,
    name: "Eelektrik",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 65,
      atk: 85,
      def: 70,
      spa: 75,
      spd: 70,
      spe: 40
    },
    weightkg: 22,
    evoLevel: 39,
    eggGroups: [
      "Amorphous"
    ],
    tier: "NFE",
    id: "eelektrik",
    fullname: "pokemon: Eelektrik",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Eelektrik",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 405,
    weighthg: 220,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    evos: [
      "Eelektross"
    ],
    nfe: true,
    prevo: "Tynamo"
  },
  eelektross: {
    tags: [],
    num: 604,
    name: "Eelektross",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 85,
      atk: 115,
      def: 80,
      spa: 105,
      spd: 80,
      spe: 50
    },
    weightkg: 80.5,
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: [
      "Amorphous"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "eelektross",
    fullname: "pokemon: Eelektross",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Eelektross",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 515,
    weighthg: 805,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Eelektrik"
  },
  elgyem: {
    tags: [],
    num: 605,
    name: "Elgyem",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 55,
      atk: 55,
      def: 55,
      spa: 85,
      spd: 55,
      spe: 30
    },
    weightkg: 9,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "elgyem",
    fullname: "pokemon: Elgyem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Elgyem",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 90,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Telepathy",
      "1": "Synchronize",
      H: "Analytic"
    },
    evos: [
      "Beheeyem"
    ],
    nfe: true
  },
  beheeyem: {
    tags: [],
    num: 606,
    name: "Beheeyem",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 75,
      atk: 75,
      def: 75,
      spa: 125,
      spd: 95,
      spe: 40
    },
    weightkg: 34.5,
    evoLevel: 42,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "beheeyem",
    fullname: "pokemon: Beheeyem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Beheeyem",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 345,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Telepathy",
      "1": "Synchronize",
      H: "Analytic"
    },
    nfe: false,
    prevo: "Elgyem"
  },
  litwick: {
    tags: [],
    num: 607,
    name: "Litwick",
    types: [
      "Ghost",
      "Fire"
    ],
    baseStats: {
      hp: 50,
      atk: 30,
      def: 55,
      spa: 65,
      spd: 55,
      spe: 20
    },
    weightkg: 3.1,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "litwick",
    fullname: "pokemon: Litwick",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Litwick",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 275,
    weighthg: 31,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    evos: [
      "Lampent"
    ],
    nfe: true
  },
  lampent: {
    tags: [],
    num: 608,
    name: "Lampent",
    types: [
      "Ghost",
      "Fire"
    ],
    baseStats: {
      hp: 60,
      atk: 40,
      def: 60,
      spa: 95,
      spd: 60,
      spe: 55
    },
    weightkg: 13,
    evoLevel: 41,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "lampent",
    fullname: "pokemon: Lampent",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lampent",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 370,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    evos: [
      "Chandelure"
    ],
    nfe: true,
    prevo: "Litwick"
  },
  chandelure: {
    tags: [],
    num: 609,
    name: "Chandelure",
    types: [
      "Ghost",
      "Fire"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 90,
      spa: 145,
      spd: 90,
      spe: 80
    },
    weightkg: 34.3,
    evoType: "useItem",
    evoItem: "Dusk Stone",
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "chandelure",
    fullname: "pokemon: Chandelure",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Chandelure",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 343,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "Flame Body",
      H: "Infiltrator"
    },
    nfe: false,
    prevo: "Lampent"
  },
  axew: {
    tags: [],
    num: 610,
    name: "Axew",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 46,
      atk: 87,
      def: 60,
      spa: 30,
      spd: 40,
      spe: 57
    },
    weightkg: 18,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "LC",
    id: "axew",
    fullname: "pokemon: Axew",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Axew",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    evos: [
      "Fraxure"
    ],
    nfe: true
  },
  fraxure: {
    tags: [],
    num: 611,
    name: "Fraxure",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 66,
      atk: 117,
      def: 70,
      spa: 40,
      spd: 50,
      spe: 67
    },
    weightkg: 36,
    evoLevel: 38,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "NFE",
    id: "fraxure",
    fullname: "pokemon: Fraxure",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Fraxure",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 410,
    weighthg: 360,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    evos: [
      "Haxorus"
    ],
    nfe: true,
    prevo: "Axew"
  },
  haxorus: {
    tags: [],
    num: 612,
    name: "Haxorus",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 76,
      atk: 147,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 97
    },
    weightkg: 105.5,
    evoLevel: 48,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "haxorus",
    fullname: "pokemon: Haxorus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Haxorus",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 540,
    weighthg: 1055,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rivalry",
      "1": "Mold Breaker",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Fraxure"
  },
  cubchoo: {
    tags: [],
    num: 613,
    name: "Cubchoo",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 55,
      atk: 70,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 40
    },
    weightkg: 8.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "cubchoo",
    fullname: "pokemon: Cubchoo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cubchoo",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      H: "Rattled"
    },
    evos: [
      "Beartic"
    ],
    nfe: true
  },
  beartic: {
    tags: [],
    num: 614,
    name: "Beartic",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 95,
      atk: 130,
      def: 80,
      spa: 70,
      spd: 80,
      spe: 50
    },
    weightkg: 260,
    evoLevel: 37,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "beartic",
    fullname: "pokemon: Beartic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Beartic",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 505,
    weighthg: 2600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Snow Cloak",
      "1": "Slush Rush",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Cubchoo"
  },
  cryogonal: {
    tags: [],
    num: 615,
    name: "Cryogonal",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 80,
      atk: 50,
      def: 50,
      spa: 95,
      spd: 135,
      spe: 105
    },
    weightkg: 148,
    eggGroups: [
      "Mineral"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "cryogonal",
    fullname: "pokemon: Cryogonal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cryogonal",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 515,
    weighthg: 1480,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  shelmet: {
    tags: [],
    num: 616,
    name: "Shelmet",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 40,
      def: 85,
      spa: 40,
      spd: 65,
      spe: 25
    },
    weightkg: 7.7,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "shelmet",
    fullname: "pokemon: Shelmet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shelmet",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 77,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hydration",
      "1": "Shell Armor",
      H: "Overcoat"
    },
    evos: [
      "Accelgor"
    ],
    nfe: true
  },
  accelgor: {
    tags: [],
    num: 617,
    name: "Accelgor",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 80,
      atk: 70,
      def: 40,
      spa: 100,
      spd: 60,
      spe: 145
    },
    weightkg: 25.3,
    evoType: "trade",
    evoCondition: "with a Karrablast",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "accelgor",
    fullname: "pokemon: Accelgor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Accelgor",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 253,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hydration",
      "1": "Sticky Hold",
      H: "Unburden"
    },
    nfe: false,
    prevo: "Shelmet"
  },
  stunfisk: {
    tags: [],
    num: 618,
    name: "Stunfisk",
    types: [
      "Ground",
      "Electric"
    ],
    baseStats: {
      hp: 109,
      atk: 66,
      def: 84,
      spa: 81,
      spd: 99,
      spe: 32
    },
    weightkg: 11,
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "stunfisk",
    fullname: "pokemon: Stunfisk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Stunfisk",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 471,
    weighthg: 110,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Static",
      "1": "Limber",
      H: "Sand Veil"
    },
    nfe: false,
    otherFormes: [
      "Stunfisk-Galar"
    ],
    formeOrder: [
      "Stunfisk",
      "Stunfisk-Galar"
    ],
    formes: [
      "Stunfisk",
      "Stunfisk-Galar"
    ]
  },
  stunfiskgalar: {
    tags: [],
    num: 618,
    name: "Stunfisk-Galar",
    baseSpecies: "Stunfisk",
    forme: "Galar",
    types: [
      "Ground",
      "Steel"
    ],
    baseStats: {
      hp: 109,
      atk: 81,
      def: 99,
      spa: 66,
      spd: 84,
      spe: 32
    },
    weightkg: 20.5,
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "stunfiskgalar",
    fullname: "pokemon: Stunfisk-Galar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 471,
    weighthg: 205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mimicry"
    },
    nfe: false
  },
  mienfoo: {
    tags: [],
    num: 619,
    name: "Mienfoo",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 45,
      atk: 85,
      def: 50,
      spa: 55,
      spd: 50,
      spe: 65
    },
    weightkg: 20,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "mienfoo",
    fullname: "pokemon: Mienfoo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mienfoo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 350,
    weighthg: 200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Regenerator",
      H: "Reckless"
    },
    evos: [
      "Mienshao"
    ],
    nfe: true
  },
  mienshao: {
    tags: [],
    num: 620,
    name: "Mienshao",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 65,
      atk: 125,
      def: 60,
      spa: 95,
      spd: 60,
      spe: 105
    },
    weightkg: 35.5,
    evoLevel: 50,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "mienshao",
    fullname: "pokemon: Mienshao",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mienshao",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 355,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Regenerator",
      H: "Reckless"
    },
    nfe: false,
    prevo: "Mienfoo"
  },
  druddigon: {
    tags: [],
    num: 621,
    name: "Druddigon",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 77,
      atk: 120,
      def: 90,
      spa: 60,
      spd: 90,
      spe: 48
    },
    weightkg: 139,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "druddigon",
    fullname: "pokemon: Druddigon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Druddigon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 1390,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rough Skin",
      "1": "Sheer Force",
      H: "Mold Breaker"
    },
    nfe: false
  },
  golett: {
    tags: [],
    num: 622,
    name: "Golett",
    types: [
      "Ground",
      "Ghost"
    ],
    baseStats: {
      hp: 59,
      atk: 74,
      def: 50,
      spa: 35,
      spd: 50,
      spe: 35
    },
    weightkg: 92,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "golett",
    fullname: "pokemon: Golett",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Golett",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 303,
    weighthg: 920,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Iron Fist",
      "1": "Klutz",
      H: "No Guard"
    },
    evos: [
      "Golurk"
    ],
    nfe: true
  },
  golurk: {
    tags: [],
    num: 623,
    name: "Golurk",
    types: [
      "Ground",
      "Ghost"
    ],
    baseStats: {
      hp: 89,
      atk: 124,
      def: 80,
      spa: 55,
      spd: 80,
      spe: 55
    },
    weightkg: 330,
    evoLevel: 43,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "golurk",
    fullname: "pokemon: Golurk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Golurk",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 483,
    weighthg: 3300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Iron Fist",
      "1": "Klutz",
      H: "No Guard"
    },
    nfe: false,
    prevo: "Golett"
  },
  pawniard: {
    tags: [],
    num: 624,
    name: "Pawniard",
    types: [
      "Dark",
      "Steel"
    ],
    baseStats: {
      hp: 45,
      atk: 85,
      def: 70,
      spa: 40,
      spd: 40,
      spe: 60
    },
    weightkg: 10.2,
    eggGroups: [
      "Human-Like"
    ],
    tier: "LC",
    id: "pawniard",
    fullname: "pokemon: Pawniard",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pawniard",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 340,
    weighthg: 102,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Defiant",
      "1": "Inner Focus",
      H: "Pressure"
    },
    evos: [
      "Bisharp"
    ],
    nfe: true
  },
  bisharp: {
    tags: [],
    num: 625,
    name: "Bisharp",
    types: [
      "Dark",
      "Steel"
    ],
    baseStats: {
      hp: 65,
      atk: 125,
      def: 100,
      spa: 60,
      spd: 70,
      spe: 70
    },
    weightkg: 70,
    evoLevel: 52,
    eggGroups: [
      "Human-Like"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "bisharp",
    fullname: "pokemon: Bisharp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bisharp",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 700,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Defiant",
      "1": "Inner Focus",
      H: "Pressure"
    },
    evos: [
      "Kingambit"
    ],
    nfe: true,
    prevo: "Pawniard"
  },
  bouffalant: {
    tags: [],
    num: 626,
    name: "Bouffalant",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 95,
      atk: 110,
      def: 95,
      spa: 40,
      spd: 95,
      spe: 55
    },
    weightkg: 94.6,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "bouffalant",
    fullname: "pokemon: Bouffalant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bouffalant",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 490,
    weighthg: 946,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Reckless",
      "1": "Sap Sipper",
      H: "Soundproof"
    },
    nfe: false
  },
  rufflet: {
    tags: [],
    num: 627,
    name: "Rufflet",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 83,
      def: 50,
      spa: 37,
      spd: 50,
      spe: 60
    },
    weightkg: 10.5,
    eggGroups: [
      "Flying"
    ],
    tier: "NFE",
    id: "rufflet",
    fullname: "pokemon: Rufflet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rufflet",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: true,
    bst: 350,
    weighthg: 105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Sheer Force",
      H: "Hustle"
    },
    evos: [
      "Braviary"
    ],
    nfe: true
  },
  braviary: {
    tags: [],
    num: 628,
    name: "Braviary",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 100,
      atk: 123,
      def: 75,
      spa: 57,
      spd: 75,
      spe: 80
    },
    weightkg: 41,
    evoLevel: 54,
    eggGroups: [
      "Flying"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "braviary",
    fullname: "pokemon: Braviary",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Braviary",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 410,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Sheer Force",
      H: "Defiant"
    },
    nfe: false,
    prevo: "Rufflet"
  },
  vullaby: {
    tags: [],
    num: 629,
    name: "Vullaby",
    types: [
      "Dark",
      "Flying"
    ],
    baseStats: {
      hp: 70,
      atk: 55,
      def: 75,
      spa: 45,
      spd: 65,
      spe: 60
    },
    weightkg: 9,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "vullaby",
    fullname: "pokemon: Vullaby",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vullaby",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 370,
    weighthg: 90,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Big Pecks",
      "1": "Overcoat",
      H: "Weak Armor"
    },
    evos: [
      "Mandibuzz"
    ],
    nfe: true
  },
  mandibuzz: {
    tags: [],
    num: 630,
    name: "Mandibuzz",
    types: [
      "Dark",
      "Flying"
    ],
    baseStats: {
      hp: 110,
      atk: 65,
      def: 105,
      spa: 55,
      spd: 95,
      spe: 80
    },
    weightkg: 39.5,
    evoLevel: 54,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "mandibuzz",
    fullname: "pokemon: Mandibuzz",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mandibuzz",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 395,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Big Pecks",
      "1": "Overcoat",
      H: "Weak Armor"
    },
    nfe: false,
    prevo: "Vullaby"
  },
  heatmor: {
    tags: [],
    num: 631,
    name: "Heatmor",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 85,
      atk: 97,
      def: 66,
      spa: 105,
      spd: 66,
      spe: 65
    },
    weightkg: 58,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "heatmor",
    fullname: "pokemon: Heatmor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Heatmor",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 484,
    weighthg: 580,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gluttony",
      "1": "Flash Fire",
      H: "White Smoke"
    },
    nfe: false
  },
  durant: {
    tags: [],
    num: 632,
    name: "Durant",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 58,
      atk: 109,
      def: 112,
      spa: 48,
      spd: 48,
      spe: 109
    },
    weightkg: 33,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "durant",
    fullname: "pokemon: Durant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Durant",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 484,
    weighthg: 330,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Hustle",
      H: "Truant"
    },
    nfe: false
  },
  deino: {
    tags: [],
    num: 633,
    name: "Deino",
    types: [
      "Dark",
      "Dragon"
    ],
    baseStats: {
      hp: 52,
      atk: 65,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 38
    },
    weightkg: 17.3,
    eggGroups: [
      "Dragon"
    ],
    tier: "LC",
    id: "deino",
    fullname: "pokemon: Deino",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Deino",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 173,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hustle"
    },
    evos: [
      "Zweilous"
    ],
    nfe: true
  },
  zweilous: {
    tags: [],
    num: 634,
    name: "Zweilous",
    types: [
      "Dark",
      "Dragon"
    ],
    baseStats: {
      hp: 72,
      atk: 85,
      def: 70,
      spa: 65,
      spd: 70,
      spe: 58
    },
    weightkg: 50,
    evoLevel: 50,
    eggGroups: [
      "Dragon"
    ],
    tier: "NFE",
    id: "zweilous",
    fullname: "pokemon: Zweilous",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Zweilous",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 420,
    weighthg: 500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hustle"
    },
    evos: [
      "Hydreigon"
    ],
    nfe: true,
    prevo: "Deino"
  },
  hydreigon: {
    tags: [],
    num: 635,
    name: "Hydreigon",
    types: [
      "Dark",
      "Dragon"
    ],
    baseStats: {
      hp: 92,
      atk: 105,
      def: 90,
      spa: 125,
      spd: 90,
      spe: 98
    },
    weightkg: 160,
    evoLevel: 64,
    eggGroups: [
      "Dragon"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "hydreigon",
    fullname: "pokemon: Hydreigon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hydreigon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 1600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    prevo: "Zweilous"
  },
  larvesta: {
    tags: [],
    num: 636,
    name: "Larvesta",
    types: [
      "Bug",
      "Fire"
    ],
    baseStats: {
      hp: 55,
      atk: 85,
      def: 55,
      spa: 50,
      spd: 55,
      spe: 60
    },
    weightkg: 28.8,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "larvesta",
    fullname: "pokemon: Larvesta",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Larvesta",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 360,
    weighthg: 288,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flame Body",
      H: "Swarm"
    },
    evos: [
      "Volcarona"
    ],
    nfe: true
  },
  volcarona: {
    tags: [],
    num: 637,
    name: "Volcarona",
    types: [
      "Bug",
      "Fire"
    ],
    baseStats: {
      hp: 85,
      atk: 60,
      def: 65,
      spa: 135,
      spd: 105,
      spe: 100
    },
    weightkg: 46,
    evoLevel: 59,
    eggGroups: [
      "Bug"
    ],
    tier: "OU",
    doublesTier: "DUU",
    id: "volcarona",
    fullname: "pokemon: Volcarona",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Volcarona",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 550,
    weighthg: 460,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flame Body",
      H: "Swarm"
    },
    nfe: false,
    prevo: "Larvesta"
  },
  cobalion: {
    tags: [
      "Sub-Legendary"
    ],
    num: 638,
    name: "Cobalion",
    types: [
      "Steel",
      "Fighting"
    ],
    baseStats: {
      hp: 91,
      atk: 90,
      def: 129,
      spa: 90,
      spd: 72,
      spe: 108
    },
    weightkg: 250,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "cobalion",
    fullname: "pokemon: Cobalion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cobalion",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 2500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Justified"
    },
    nfe: false
  },
  terrakion: {
    tags: [
      "Sub-Legendary"
    ],
    num: 639,
    name: "Terrakion",
    types: [
      "Rock",
      "Fighting"
    ],
    baseStats: {
      hp: 91,
      atk: 129,
      def: 90,
      spa: 72,
      spd: 90,
      spe: 108
    },
    weightkg: 260,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "terrakion",
    fullname: "pokemon: Terrakion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Terrakion",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 2600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Justified"
    },
    nfe: false
  },
  virizion: {
    tags: [
      "Sub-Legendary"
    ],
    num: 640,
    name: "Virizion",
    types: [
      "Grass",
      "Fighting"
    ],
    baseStats: {
      hp: 91,
      atk: 90,
      def: 72,
      spa: 90,
      spd: 129,
      spe: 108
    },
    weightkg: 200,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "virizion",
    fullname: "pokemon: Virizion",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Virizion",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 2000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Justified"
    },
    nfe: false
  },
  reshiram: {
    tags: [
      "Restricted Legendary"
    ],
    num: 643,
    name: "Reshiram",
    types: [
      "Dragon",
      "Fire"
    ],
    baseStats: {
      hp: 100,
      atk: 120,
      def: 100,
      spa: 150,
      spd: 120,
      spe: 90
    },
    weightkg: 330,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "reshiram",
    fullname: "pokemon: Reshiram",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Reshiram",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 3300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Turboblaze"
    },
    nfe: false
  },
  zekrom: {
    tags: [
      "Restricted Legendary"
    ],
    num: 644,
    name: "Zekrom",
    types: [
      "Dragon",
      "Electric"
    ],
    baseStats: {
      hp: 100,
      atk: 150,
      def: 120,
      spa: 120,
      spd: 100,
      spe: 90
    },
    weightkg: 345,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "zekrom",
    fullname: "pokemon: Zekrom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zekrom",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 3450,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Teravolt"
    },
    nfe: false
  },
  kyurem: {
    tags: [
      "Restricted Legendary"
    ],
    num: 646,
    name: "Kyurem",
    types: [
      "Dragon",
      "Ice"
    ],
    baseStats: {
      hp: 125,
      atk: 130,
      def: 90,
      spa: 130,
      spd: 90,
      spe: 95
    },
    weightkg: 325,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "kyurem",
    fullname: "pokemon: Kyurem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kyurem",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 660,
    weighthg: 3250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Pressure"
    },
    nfe: false,
    otherFormes: [
      "Kyurem-Black",
      "Kyurem-White"
    ],
    formeOrder: [
      "Kyurem",
      "Kyurem-White",
      "Kyurem-Black"
    ],
    formes: [
      "Kyurem",
      "Kyurem-White",
      "Kyurem-Black"
    ]
  },
  kyuremblack: {
    tags: [
      "Restricted Legendary"
    ],
    num: 646,
    name: "Kyurem-Black",
    baseSpecies: "Kyurem",
    forme: "Black",
    types: [
      "Dragon",
      "Ice"
    ],
    baseStats: {
      hp: 125,
      atk: 170,
      def: 100,
      spa: 120,
      spd: 90,
      spe: 95
    },
    weightkg: 325,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Kyurem",
    tier: "Illegal",
    id: "kyuremblack",
    fullname: "pokemon: Kyurem-Black",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 700,
    weighthg: 3250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Teravolt"
    },
    nfe: false
  },
  kyuremwhite: {
    tags: [
      "Restricted Legendary"
    ],
    num: 646,
    name: "Kyurem-White",
    baseSpecies: "Kyurem",
    forme: "White",
    types: [
      "Dragon",
      "Ice"
    ],
    baseStats: {
      hp: 125,
      atk: 120,
      def: 90,
      spa: 170,
      spd: 100,
      spe: 95
    },
    weightkg: 325,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Kyurem",
    tier: "Illegal",
    id: "kyuremwhite",
    fullname: "pokemon: Kyurem-White",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 700,
    weighthg: 3250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Turboblaze"
    },
    nfe: false
  },
  keldeo: {
    tags: [
      "Mythical"
    ],
    num: 647,
    name: "Keldeo",
    baseForme: "Ordinary",
    types: [
      "Water",
      "Fighting"
    ],
    baseStats: {
      hp: 91,
      atk: 72,
      def: 90,
      spa: 129,
      spd: 90,
      spe: 108
    },
    weightkg: 48.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "keldeo",
    fullname: "pokemon: Keldeo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Keldeo",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 485,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Justified"
    },
    nfe: false,
    otherFormes: [
      "Keldeo-Resolute"
    ],
    formeOrder: [
      "Keldeo",
      "Keldeo-Resolute"
    ],
    formes: [
      "Keldeo",
      "Keldeo-Resolute"
    ]
  },
  keldeoresolute: {
    tags: [
      "Mythical"
    ],
    num: 647,
    name: "Keldeo-Resolute",
    baseSpecies: "Keldeo",
    forme: "Resolute",
    types: [
      "Water",
      "Fighting"
    ],
    baseStats: {
      hp: 91,
      atk: 72,
      def: 90,
      spa: 129,
      spd: 90,
      spe: 108
    },
    weightkg: 48.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredMove: "Secret Sword",
    changesFrom: "Keldeo",
    id: "keldeoresolute",
    fullname: "pokemon: Keldeo-Resolute",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 580,
    weighthg: 485,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Justified"
    },
    nfe: false
  },
  genesect: {
    tags: [
      "Mythical"
    ],
    num: 649,
    name: "Genesect",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    },
    weightkg: 82.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "genesect",
    fullname: "pokemon: Genesect",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseSpecies: "Genesect",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 825,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Download"
    },
    nfe: false,
    otherFormes: [
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    formeOrder: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ],
    formes: [
      "Genesect",
      "Genesect-Douse",
      "Genesect-Shock",
      "Genesect-Burn",
      "Genesect-Chill"
    ]
  },
  genesectburn: {
    tags: [
      "Mythical"
    ],
    num: 649,
    name: "Genesect-Burn",
    baseSpecies: "Genesect",
    forme: "Burn",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    },
    weightkg: 82.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Burn Drive",
    changesFrom: "Genesect",
    tier: "Illegal",
    id: "genesectburn",
    fullname: "pokemon: Genesect-Burn",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Burn Drive"
    ],
    bst: 600,
    weighthg: 825,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Download"
    },
    nfe: false
  },
  genesectchill: {
    tags: [
      "Mythical"
    ],
    num: 649,
    name: "Genesect-Chill",
    baseSpecies: "Genesect",
    forme: "Chill",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    },
    weightkg: 82.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Chill Drive",
    changesFrom: "Genesect",
    tier: "Illegal",
    id: "genesectchill",
    fullname: "pokemon: Genesect-Chill",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Chill Drive"
    ],
    bst: 600,
    weighthg: 825,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Download"
    },
    nfe: false
  },
  genesectdouse: {
    tags: [
      "Mythical"
    ],
    num: 649,
    name: "Genesect-Douse",
    baseSpecies: "Genesect",
    forme: "Douse",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    },
    weightkg: 82.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Douse Drive",
    changesFrom: "Genesect",
    tier: "Illegal",
    id: "genesectdouse",
    fullname: "pokemon: Genesect-Douse",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Douse Drive"
    ],
    bst: 600,
    weighthg: 825,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Download"
    },
    nfe: false
  },
  genesectshock: {
    tags: [
      "Mythical"
    ],
    num: 649,
    name: "Genesect-Shock",
    baseSpecies: "Genesect",
    forme: "Shock",
    types: [
      "Bug",
      "Steel"
    ],
    baseStats: {
      hp: 71,
      atk: 120,
      def: 95,
      spa: 120,
      spd: 95,
      spe: 99
    },
    weightkg: 82.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Shock Drive",
    changesFrom: "Genesect",
    tier: "Illegal",
    id: "genesectshock",
    fullname: "pokemon: Genesect-Shock",
    effectType: "Pokemon",
    kind: "Species",
    gen: 5,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Shock Drive"
    ],
    bst: 600,
    weighthg: 825,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Download"
    },
    nfe: false
  },
  froakie: {
    tags: [],
    num: 656,
    name: "Froakie",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 41,
      atk: 56,
      def: 40,
      spa: 62,
      spd: 44,
      spe: 71
    },
    weightkg: 7,
    eggGroups: [
      "Water 1"
    ],
    tier: "LC",
    id: "froakie",
    fullname: "pokemon: Froakie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Froakie",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 314,
    weighthg: 70,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Protean"
    },
    evos: [
      "Frogadier"
    ],
    nfe: true
  },
  frogadier: {
    tags: [],
    num: 657,
    name: "Frogadier",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 54,
      atk: 63,
      def: 52,
      spa: 83,
      spd: 56,
      spe: 97
    },
    weightkg: 10.9,
    evoLevel: 16,
    eggGroups: [
      "Water 1"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "frogadier",
    fullname: "pokemon: Frogadier",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Frogadier",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 405,
    weighthg: 109,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Protean"
    },
    evos: [
      "Greninja"
    ],
    nfe: true,
    prevo: "Froakie"
  },
  greninja: {
    tags: [],
    num: 658,
    name: "Greninja",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 72,
      atk: 95,
      def: 67,
      spa: 103,
      spd: 71,
      spe: 122
    },
    weightkg: 40,
    evoLevel: 36,
    eggGroups: [
      "Water 1"
    ],
    tier: "OU",
    doublesTier: "(DUU)",
    id: "greninja",
    fullname: "pokemon: Greninja",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Greninja",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 530,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Protean",
      S: "Battle Bond"
    },
    nfe: false,
    otherFormes: [
      "Greninja-Ash"
    ],
    formeOrder: [
      "Greninja",
      "Greninja",
      "Greninja-Ash"
    ],
    formes: [
      "Greninja",
      "Greninja",
      "Greninja-Ash"
    ],
    prevo: "Frogadier"
  },
  greninjaash: {
    tags: [],
    num: 658,
    name: "Greninja-Ash",
    baseSpecies: "Greninja",
    forme: "Ash",
    types: [
      "Water",
      "Dark"
    ],
    baseStats: {
      hp: 72,
      atk: 145,
      def: 67,
      spa: 153,
      spd: 71,
      spe: 132
    },
    weightkg: 40,
    eggGroups: [
      "Undiscovered"
    ],
    requiredAbility: "Battle Bond",
    battleOnly: "Greninja",
    gen: 7,
    tier: "Illegal",
    id: "greninjaash",
    fullname: "pokemon: Greninja-Ash",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 640,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Greninja",
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Battle Bond"
    },
    nfe: false
  },
  bunnelby: {
    tags: [],
    num: 659,
    name: "Bunnelby",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 38,
      atk: 36,
      def: 38,
      spa: 32,
      spd: 36,
      spe: 57
    },
    weightkg: 5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "bunnelby",
    fullname: "pokemon: Bunnelby",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bunnelby",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 237,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Cheek Pouch",
      H: "Huge Power"
    },
    evos: [
      "Diggersby"
    ],
    nfe: true
  },
  diggersby: {
    tags: [],
    num: 660,
    name: "Diggersby",
    types: [
      "Normal",
      "Ground"
    ],
    baseStats: {
      hp: 85,
      atk: 56,
      def: 77,
      spa: 50,
      spd: 77,
      spe: 78
    },
    weightkg: 42.4,
    evoLevel: 20,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "diggersby",
    fullname: "pokemon: Diggersby",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Diggersby",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 423,
    weighthg: 424,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Cheek Pouch",
      H: "Huge Power"
    },
    nfe: false,
    prevo: "Bunnelby"
  },
  fletchling: {
    tags: [],
    num: 661,
    name: "Fletchling",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 45,
      atk: 50,
      def: 43,
      spa: 40,
      spd: 38,
      spe: 62
    },
    weightkg: 1.7,
    eggGroups: [
      "Flying"
    ],
    tier: "LC",
    id: "fletchling",
    fullname: "pokemon: Fletchling",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Fletchling",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 278,
    weighthg: 17,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Big Pecks",
      H: "Gale Wings"
    },
    evos: [
      "Fletchinder"
    ],
    nfe: true
  },
  fletchinder: {
    tags: [],
    num: 662,
    name: "Fletchinder",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 62,
      atk: 73,
      def: 55,
      spa: 56,
      spd: 52,
      spe: 84
    },
    weightkg: 16,
    evoLevel: 17,
    eggGroups: [
      "Flying"
    ],
    tier: "NFE",
    id: "fletchinder",
    fullname: "pokemon: Fletchinder",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Fletchinder",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 382,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flame Body",
      H: "Gale Wings"
    },
    evos: [
      "Talonflame"
    ],
    nfe: true,
    prevo: "Fletchling"
  },
  talonflame: {
    tags: [],
    num: 663,
    name: "Talonflame",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 81,
      def: 71,
      spa: 74,
      spd: 69,
      spe: 126
    },
    weightkg: 24.5,
    evoLevel: 35,
    eggGroups: [
      "Flying"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "talonflame",
    fullname: "pokemon: Talonflame",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Talonflame",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 499,
    weighthg: 245,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flame Body",
      H: "Gale Wings"
    },
    nfe: false,
    prevo: "Fletchinder"
  },
  scatterbug: {
    tags: [],
    num: 664,
    name: "Scatterbug",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 38,
      atk: 35,
      def: 40,
      spa: 27,
      spd: 25,
      spe: 35
    },
    weightkg: 2.5,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "scatterbug",
    fullname: "pokemon: Scatterbug",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Scatterbug",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 200,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    evos: [
      "Spewpa"
    ],
    nfe: true
  },
  spewpa: {
    tags: [],
    num: 665,
    name: "Spewpa",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 45,
      atk: 22,
      def: 60,
      spa: 27,
      spd: 30,
      spe: 29
    },
    weightkg: 8.4,
    evoLevel: 9,
    eggGroups: [
      "Bug"
    ],
    tier: "NFE",
    id: "spewpa",
    fullname: "pokemon: Spewpa",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Spewpa",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 213,
    weighthg: 84,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shed Skin",
      H: "Friend Guard"
    },
    evos: [
      "Vivillon",
      "Vivillon-Fancy"
    ],
    nfe: true,
    prevo: "Scatterbug"
  },
  vivillon: {
    tags: [],
    num: 666,
    name: "Vivillon",
    baseForme: "Meadow",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 52,
      def: 50,
      spa: 90,
      spd: 50,
      spe: 89
    },
    weightkg: 17,
    evoLevel: 12,
    eggGroups: [
      "Bug"
    ],
    tier: "PUBL",
    doublesTier: "(DUU)",
    id: "vivillon",
    fullname: "pokemon: Vivillon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Vivillon",
    forme: "",
    canHatch: false,
    bst: 411,
    weighthg: 170,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    nfe: false,
    cosmeticFormes: [
      "Vivillon-Archipelago",
      "Vivillon-Continental",
      "Vivillon-Elegant",
      "Vivillon-Garden",
      "Vivillon-High Plains",
      "Vivillon-Icy Snow",
      "Vivillon-Jungle",
      "Vivillon-Marine",
      "Vivillon-Modern",
      "Vivillon-Monsoon",
      "Vivillon-Ocean",
      "Vivillon-Polar",
      "Vivillon-River",
      "Vivillon-Sandstorm",
      "Vivillon-Savanna",
      "Vivillon-Sun",
      "Vivillon-Tundra"
    ],
    otherFormes: [
      "Vivillon-Fancy"
    ],
    formeOrder: [
      "Vivillon-Icy Snow",
      "Vivillon-Polar",
      "Vivillon-Tundra",
      "Vivillon-Continental",
      "Vivillon-Garden",
      "Vivillon-Elegant",
      "Vivillon",
      "Vivillon-Modern",
      "Vivillon-Marine",
      "Vivillon-Archipelago",
      "Vivillon-High Plains",
      "Vivillon-Sandstorm",
      "Vivillon-River",
      "Vivillon-Monsoon",
      "Vivillon-Savanna",
      "Vivillon-Sun",
      "Vivillon-Ocean",
      "Vivillon-Jungle",
      "Vivillon-Fancy"
    ],
    formes: [
      "Vivillon-Icy Snow",
      "Vivillon-Polar",
      "Vivillon-Tundra",
      "Vivillon-Continental",
      "Vivillon-Garden",
      "Vivillon-Elegant",
      "Vivillon",
      "Vivillon-Modern",
      "Vivillon-Marine",
      "Vivillon-Archipelago",
      "Vivillon-High Plains",
      "Vivillon-Sandstorm",
      "Vivillon-River",
      "Vivillon-Monsoon",
      "Vivillon-Savanna",
      "Vivillon-Sun",
      "Vivillon-Ocean",
      "Vivillon-Jungle",
      "Vivillon-Fancy"
    ],
    prevo: "Spewpa"
  },
  vivillonfancy: {
    tags: [],
    num: 666,
    name: "Vivillon-Fancy",
    baseSpecies: "Vivillon",
    forme: "Fancy",
    types: [
      "Bug",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 52,
      def: 50,
      spa: 90,
      spd: 50,
      spe: 89
    },
    weightkg: 17,
    evoLevel: 12,
    eggGroups: [
      "Bug"
    ],
    tier: "PUBL",
    doublesTier: "(DUU)",
    id: "vivillonfancy",
    fullname: "pokemon: Vivillon-Fancy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: false,
    bst: 411,
    weighthg: 170,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      "1": "Compound Eyes",
      H: "Friend Guard"
    },
    nfe: false,
    prevo: "Spewpa"
  },
  litleo: {
    tags: [],
    num: 667,
    name: "Litleo",
    types: [
      "Fire",
      "Normal"
    ],
    baseStats: {
      hp: 62,
      atk: 50,
      def: 58,
      spa: 73,
      spd: 54,
      spe: 72
    },
    weightkg: 13.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "litleo",
    fullname: "pokemon: Litleo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Litleo",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 369,
    weighthg: 135,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.125,
      F: 0.875
    },
    abilities: {
      "0": "Rivalry",
      "1": "Unnerve",
      H: "Moxie"
    },
    evos: [
      "Pyroar"
    ],
    nfe: true
  },
  pyroar: {
    tags: [],
    num: 668,
    name: "Pyroar",
    types: [
      "Fire",
      "Normal"
    ],
    baseStats: {
      hp: 86,
      atk: 68,
      def: 72,
      spa: 109,
      spd: 66,
      spe: 106
    },
    weightkg: 81.5,
    evoLevel: 35,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "pyroar",
    fullname: "pokemon: Pyroar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pyroar",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 507,
    weighthg: 815,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.125,
      F: 0.875
    },
    abilities: {
      "0": "Rivalry",
      "1": "Unnerve",
      H: "Moxie"
    },
    nfe: false,
    prevo: "Litleo"
  },
  flabebe: {
    tags: [],
    num: 669,
    name: "Flabébé",
    baseForme: "Red",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 44,
      atk: 38,
      def: 39,
      spa: 61,
      spd: 79,
      spe: 42
    },
    weightkg: 0.1,
    eggGroups: [
      "Fairy"
    ],
    tier: "LC",
    id: "flabebe",
    fullname: "pokemon: Flabébé",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Flabébé",
    forme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 303,
    weighthg: 1,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    evos: [
      "Floette"
    ],
    nfe: true,
    cosmeticFormes: [
      "Flabébé-Blue",
      "Flabébé-Orange",
      "Flabébé-White",
      "Flabébé-Yellow"
    ],
    formeOrder: [
      "Flabébé",
      "Flabébé-Blue",
      "Flabébé-Orange",
      "Flabébé-White",
      "Flabébé-Yellow"
    ],
    formes: [
      "Flabébé",
      "Flabébé-Blue",
      "Flabébé-Orange",
      "Flabébé-White",
      "Flabébé-Yellow"
    ]
  },
  floette: {
    tags: [],
    num: 670,
    name: "Floette",
    baseForme: "Red",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 54,
      atk: 45,
      def: 47,
      spa: 75,
      spd: 98,
      spe: 52
    },
    weightkg: 0.9,
    evoLevel: 19,
    eggGroups: [
      "Fairy"
    ],
    tier: "NFE",
    id: "floette",
    fullname: "pokemon: Floette",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Floette",
    forme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 371,
    weighthg: 9,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    evos: [
      "Florges"
    ],
    nfe: true,
    cosmeticFormes: [
      "Floette-Blue",
      "Floette-Orange",
      "Floette-White",
      "Floette-Yellow"
    ],
    otherFormes: [
      "Floette-Eternal"
    ],
    formeOrder: [
      "Floette",
      "Floette-Blue",
      "Floette-Orange",
      "Floette-White",
      "Floette-Yellow",
      "Floette-Eternal"
    ],
    formes: [
      "Floette",
      "Floette-Blue",
      "Floette-Orange",
      "Floette-White",
      "Floette-Yellow",
      "Floette-Eternal"
    ],
    prevo: "Flabébé"
  },
  floetteeternal: {
    tags: [],
    num: 670,
    name: "Floette-Eternal",
    baseSpecies: "Floette",
    forme: "Eternal",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 74,
      atk: 65,
      def: 67,
      spa: 125,
      spd: 128,
      spe: 92
    },
    weightkg: 0.9,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "floetteeternal",
    fullname: "pokemon: Floette-Eternal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 551,
    weighthg: 9,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Flower Veil"
    },
    nfe: false
  },
  florges: {
    tags: [],
    num: 671,
    name: "Florges",
    baseForme: "Red",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 78,
      atk: 65,
      def: 68,
      spa: 112,
      spd: 154,
      spe: 75
    },
    weightkg: 10,
    evoType: "useItem",
    evoItem: "Shiny Stone",
    eggGroups: [
      "Fairy"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "florges",
    fullname: "pokemon: Florges",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Florges",
    forme: "",
    canHatch: false,
    bst: 552,
    weighthg: 100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Flower Veil",
      H: "Symbiosis"
    },
    nfe: false,
    cosmeticFormes: [
      "Florges-Blue",
      "Florges-Orange",
      "Florges-White",
      "Florges-Yellow"
    ],
    formeOrder: [
      "Florges",
      "Florges-Blue",
      "Florges-Orange",
      "Florges-White",
      "Florges-Yellow"
    ],
    formes: [
      "Florges",
      "Florges-Blue",
      "Florges-Orange",
      "Florges-White",
      "Florges-Yellow"
    ],
    prevo: "Floette"
  },
  skiddo: {
    tags: [],
    num: 672,
    name: "Skiddo",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 66,
      atk: 65,
      def: 48,
      spa: 62,
      spd: 57,
      spe: 52
    },
    weightkg: 31,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "skiddo",
    fullname: "pokemon: Skiddo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Skiddo",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 350,
    weighthg: 310,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sap Sipper",
      H: "Grass Pelt"
    },
    evos: [
      "Gogoat"
    ],
    nfe: true
  },
  gogoat: {
    tags: [],
    num: 673,
    name: "Gogoat",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 123,
      atk: 100,
      def: 62,
      spa: 97,
      spd: 81,
      spe: 68
    },
    weightkg: 91,
    evoLevel: 32,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "gogoat",
    fullname: "pokemon: Gogoat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gogoat",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 531,
    weighthg: 910,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sap Sipper",
      H: "Grass Pelt"
    },
    nfe: false,
    prevo: "Skiddo"
  },
  pancham: {
    tags: [],
    num: 674,
    name: "Pancham",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 67,
      atk: 82,
      def: 62,
      spa: 46,
      spd: 48,
      spe: 43
    },
    weightkg: 8,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "pancham",
    fullname: "pokemon: Pancham",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pancham",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 348,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      H: "Scrappy"
    },
    evos: [
      "Pangoro"
    ],
    nfe: true
  },
  pangoro: {
    tags: [],
    num: 675,
    name: "Pangoro",
    types: [
      "Fighting",
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 124,
      def: 78,
      spa: 69,
      spd: 71,
      spe: 58
    },
    weightkg: 136,
    evoLevel: 32,
    evoCondition: "with a Dark-type in the party",
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "pangoro",
    fullname: "pokemon: Pangoro",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pangoro",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 1360,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Iron Fist",
      "1": "Mold Breaker",
      H: "Scrappy"
    },
    nfe: false,
    prevo: "Pancham"
  },
  furfrou: {
    tags: [],
    num: 676,
    name: "Furfrou",
    baseForme: "Natural",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 60,
      spa: 65,
      spd: 90,
      spe: 102
    },
    weightkg: 28,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "furfrou",
    fullname: "pokemon: Furfrou",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Furfrou",
    forme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 472,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Fur Coat"
    },
    nfe: false,
    cosmeticFormes: [
      "Furfrou-Dandy",
      "Furfrou-Debutante",
      "Furfrou-Diamond",
      "Furfrou-Heart",
      "Furfrou-Kabuki",
      "Furfrou-La Reine",
      "Furfrou-Matron",
      "Furfrou-Pharaoh",
      "Furfrou-Star"
    ],
    formeOrder: [
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
    ]
  },
  espurr: {
    tags: [],
    num: 677,
    name: "Espurr",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 62,
      atk: 48,
      def: 54,
      spa: 63,
      spd: 60,
      spe: 68
    },
    weightkg: 3.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "espurr",
    fullname: "pokemon: Espurr",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Espurr",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 355,
    weighthg: 35,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Own Tempo"
    },
    evos: [
      "Meowstic",
      "Meowstic-F"
    ],
    nfe: true
  },
  meowstic: {
    tags: [],
    num: 678,
    name: "Meowstic",
    baseForme: "M",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 74,
      atk: 48,
      def: 76,
      spa: 83,
      spd: 81,
      spe: 104
    },
    weightkg: 8.5,
    evoLevel: 25,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "meowstic",
    fullname: "pokemon: Meowstic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Meowstic",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 466,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Prankster"
    },
    nfe: false,
    otherFormes: [
      "Meowstic-F"
    ],
    formeOrder: [
      "Meowstic",
      "Meowstic-F"
    ],
    formes: [
      "Meowstic",
      "Meowstic-F"
    ],
    prevo: "Espurr"
  },
  meowsticf: {
    tags: [],
    num: 678,
    name: "Meowstic-F",
    baseSpecies: "Meowstic",
    forme: "F",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 74,
      atk: 48,
      def: 76,
      spa: 83,
      spd: 81,
      spe: 104
    },
    weightkg: 8.5,
    evoLevel: 25,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "meowsticf",
    fullname: "pokemon: Meowstic-F",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 466,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Infiltrator",
      H: "Competitive"
    },
    nfe: false,
    prevo: "Espurr"
  },
  honedge: {
    tags: [],
    num: 679,
    name: "Honedge",
    types: [
      "Steel",
      "Ghost"
    ],
    baseStats: {
      hp: 45,
      atk: 80,
      def: 100,
      spa: 35,
      spd: 37,
      spe: 28
    },
    weightkg: 2,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "honedge",
    fullname: "pokemon: Honedge",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Honedge",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 325,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "No Guard"
    },
    evos: [
      "Doublade"
    ],
    nfe: true
  },
  doublade: {
    tags: [],
    num: 680,
    name: "Doublade",
    types: [
      "Steel",
      "Ghost"
    ],
    baseStats: {
      hp: 59,
      atk: 110,
      def: 150,
      spa: 45,
      spd: 49,
      spe: 35
    },
    weightkg: 4.5,
    evoLevel: 35,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "doublade",
    fullname: "pokemon: Doublade",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Doublade",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 448,
    weighthg: 45,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "No Guard"
    },
    evos: [
      "Aegislash"
    ],
    nfe: true,
    prevo: "Honedge"
  },
  aegislash: {
    tags: [],
    num: 681,
    name: "Aegislash",
    baseForme: "Shield",
    types: [
      "Steel",
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 140,
      spa: 50,
      spd: 140,
      spe: 60
    },
    weightkg: 53,
    evoType: "useItem",
    evoItem: "Dusk Stone",
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "aegislash",
    fullname: "pokemon: Aegislash",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aegislash",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 530,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stance Change"
    },
    nfe: false,
    otherFormes: [
      "Aegislash-Blade"
    ],
    formeOrder: [
      "Aegislash",
      "Aegislash-Blade"
    ],
    formes: [
      "Aegislash",
      "Aegislash-Blade"
    ],
    prevo: "Doublade"
  },
  aegislashblade: {
    tags: [],
    num: 681,
    name: "Aegislash-Blade",
    baseSpecies: "Aegislash",
    forme: "Blade",
    types: [
      "Steel",
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 140,
      def: 50,
      spa: 140,
      spd: 50,
      spe: 60
    },
    weightkg: 53,
    eggGroups: [
      "Mineral"
    ],
    requiredAbility: "Stance Change",
    battleOnly: "Aegislash",
    id: "aegislashblade",
    fullname: "pokemon: Aegislash-Blade",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 500,
    weighthg: 530,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Aegislash",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stance Change"
    },
    nfe: false
  },
  spritzee: {
    tags: [],
    num: 682,
    name: "Spritzee",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 78,
      atk: 52,
      def: 60,
      spa: 63,
      spd: 65,
      spe: 23
    },
    weightkg: 0.5,
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "spritzee",
    fullname: "pokemon: Spritzee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Spritzee",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 341,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Healer",
      H: "Aroma Veil"
    },
    evos: [
      "Aromatisse"
    ],
    nfe: true
  },
  aromatisse: {
    tags: [],
    num: 683,
    name: "Aromatisse",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 101,
      atk: 72,
      def: 72,
      spa: 99,
      spd: 89,
      spe: 29
    },
    weightkg: 15.5,
    evoType: "trade",
    evoItem: "Sachet",
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "aromatisse",
    fullname: "pokemon: Aromatisse",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aromatisse",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 462,
    weighthg: 155,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Healer",
      H: "Aroma Veil"
    },
    nfe: false,
    prevo: "Spritzee"
  },
  swirlix: {
    tags: [],
    num: 684,
    name: "Swirlix",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 62,
      atk: 48,
      def: 66,
      spa: 59,
      spd: 57,
      spe: 49
    },
    weightkg: 3.5,
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "swirlix",
    fullname: "pokemon: Swirlix",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Swirlix",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 341,
    weighthg: 35,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sweet Veil",
      H: "Unburden"
    },
    evos: [
      "Slurpuff"
    ],
    nfe: true
  },
  slurpuff: {
    tags: [],
    num: 685,
    name: "Slurpuff",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 82,
      atk: 80,
      def: 86,
      spa: 85,
      spd: 75,
      spe: 72
    },
    weightkg: 5,
    evoType: "trade",
    evoItem: "Whipped Dream",
    eggGroups: [
      "Fairy"
    ],
    tier: "Illegal",
    id: "slurpuff",
    fullname: "pokemon: Slurpuff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Slurpuff",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sweet Veil",
      H: "Unburden"
    },
    nfe: false,
    prevo: "Swirlix"
  },
  inkay: {
    tags: [],
    num: 686,
    name: "Inkay",
    types: [
      "Dark",
      "Psychic"
    ],
    baseStats: {
      hp: 53,
      atk: 54,
      def: 53,
      spa: 37,
      spd: 46,
      spe: 45
    },
    weightkg: 3.5,
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "Illegal",
    id: "inkay",
    fullname: "pokemon: Inkay",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Inkay",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 288,
    weighthg: 35,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Contrary",
      "1": "Suction Cups",
      H: "Infiltrator"
    },
    evos: [
      "Malamar"
    ],
    nfe: true
  },
  malamar: {
    tags: [],
    num: 687,
    name: "Malamar",
    types: [
      "Dark",
      "Psychic"
    ],
    baseStats: {
      hp: 86,
      atk: 92,
      def: 88,
      spa: 68,
      spd: 75,
      spe: 73
    },
    weightkg: 47,
    evoLevel: 30,
    evoCondition: "with the console turned upside-down",
    eggGroups: [
      "Water 1",
      "Water 2"
    ],
    tier: "Illegal",
    id: "malamar",
    fullname: "pokemon: Malamar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Malamar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 482,
    weighthg: 470,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Contrary",
      "1": "Suction Cups",
      H: "Infiltrator"
    },
    nfe: false,
    prevo: "Inkay"
  },
  binacle: {
    tags: [],
    num: 688,
    name: "Binacle",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 42,
      atk: 52,
      def: 67,
      spa: 39,
      spd: 56,
      spe: 50
    },
    weightkg: 31,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "binacle",
    fullname: "pokemon: Binacle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Binacle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 306,
    weighthg: 310,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Tough Claws",
      "1": "Sniper",
      H: "Pickpocket"
    },
    evos: [
      "Barbaracle"
    ],
    nfe: true
  },
  barbaracle: {
    tags: [],
    num: 689,
    name: "Barbaracle",
    types: [
      "Rock",
      "Water"
    ],
    baseStats: {
      hp: 72,
      atk: 105,
      def: 115,
      spa: 54,
      spd: 86,
      spe: 68
    },
    weightkg: 96,
    evoLevel: 39,
    eggGroups: [
      "Water 3"
    ],
    tier: "Illegal",
    id: "barbaracle",
    fullname: "pokemon: Barbaracle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Barbaracle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 960,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Tough Claws",
      "1": "Sniper",
      H: "Pickpocket"
    },
    nfe: false,
    prevo: "Binacle"
  },
  skrelp: {
    tags: [],
    num: 690,
    name: "Skrelp",
    types: [
      "Poison",
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 60,
      def: 60,
      spa: 60,
      spd: 60,
      spe: 30
    },
    weightkg: 7.3,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "LC",
    id: "skrelp",
    fullname: "pokemon: Skrelp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Skrelp",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 73,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Poison Touch",
      H: "Adaptability"
    },
    evos: [
      "Dragalge"
    ],
    nfe: true
  },
  dragalge: {
    tags: [],
    num: 691,
    name: "Dragalge",
    types: [
      "Poison",
      "Dragon"
    ],
    baseStats: {
      hp: 65,
      atk: 75,
      def: 90,
      spa: 97,
      spd: 123,
      spe: 44
    },
    weightkg: 81.5,
    evoLevel: 48,
    eggGroups: [
      "Water 1",
      "Dragon"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "dragalge",
    fullname: "pokemon: Dragalge",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dragalge",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 494,
    weighthg: 815,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Poison Point",
      "1": "Poison Touch",
      H: "Adaptability"
    },
    nfe: false,
    prevo: "Skrelp"
  },
  clauncher: {
    tags: [],
    num: 692,
    name: "Clauncher",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 53,
      def: 62,
      spa: 58,
      spd: 63,
      spe: 44
    },
    weightkg: 8.3,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "LC",
    id: "clauncher",
    fullname: "pokemon: Clauncher",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Clauncher",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 330,
    weighthg: 83,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mega Launcher"
    },
    evos: [
      "Clawitzer"
    ],
    nfe: true
  },
  clawitzer: {
    tags: [],
    num: 693,
    name: "Clawitzer",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 71,
      atk: 73,
      def: 88,
      spa: 120,
      spd: 89,
      spe: 59
    },
    weightkg: 35.3,
    evoLevel: 37,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "clawitzer",
    fullname: "pokemon: Clawitzer",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Clawitzer",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 353,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Mega Launcher"
    },
    nfe: false,
    prevo: "Clauncher"
  },
  helioptile: {
    tags: [],
    num: 694,
    name: "Helioptile",
    types: [
      "Electric",
      "Normal"
    ],
    baseStats: {
      hp: 44,
      atk: 38,
      def: 33,
      spa: 61,
      spd: 43,
      spe: 70
    },
    weightkg: 6,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "helioptile",
    fullname: "pokemon: Helioptile",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Helioptile",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 289,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Dry Skin",
      "1": "Sand Veil",
      H: "Solar Power"
    },
    evos: [
      "Heliolisk"
    ],
    nfe: true
  },
  heliolisk: {
    tags: [],
    num: 695,
    name: "Heliolisk",
    types: [
      "Electric",
      "Normal"
    ],
    baseStats: {
      hp: 62,
      atk: 55,
      def: 52,
      spa: 109,
      spd: 94,
      spe: 109
    },
    weightkg: 21,
    evoType: "useItem",
    evoItem: "Sun Stone",
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "heliolisk",
    fullname: "pokemon: Heliolisk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Heliolisk",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 481,
    weighthg: 210,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Dry Skin",
      "1": "Sand Veil",
      H: "Solar Power"
    },
    nfe: false,
    prevo: "Helioptile"
  },
  tyrunt: {
    tags: [],
    num: 696,
    name: "Tyrunt",
    types: [
      "Rock",
      "Dragon"
    ],
    baseStats: {
      hp: 58,
      atk: 89,
      def: 77,
      spa: 45,
      spd: 45,
      spe: 48
    },
    weightkg: 26,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "tyrunt",
    fullname: "pokemon: Tyrunt",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tyrunt",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 362,
    weighthg: 260,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Strong Jaw",
      H: "Sturdy"
    },
    evos: [
      "Tyrantrum"
    ],
    nfe: true
  },
  tyrantrum: {
    tags: [],
    num: 697,
    name: "Tyrantrum",
    types: [
      "Rock",
      "Dragon"
    ],
    baseStats: {
      hp: 82,
      atk: 121,
      def: 119,
      spa: 69,
      spd: 59,
      spe: 71
    },
    weightkg: 270,
    evoLevel: 39,
    evoCondition: "during the day",
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "tyrantrum",
    fullname: "pokemon: Tyrantrum",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tyrantrum",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 521,
    weighthg: 2700,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Strong Jaw",
      H: "Rock Head"
    },
    nfe: false,
    prevo: "Tyrunt"
  },
  amaura: {
    tags: [],
    num: 698,
    name: "Amaura",
    types: [
      "Rock",
      "Ice"
    ],
    baseStats: {
      hp: 77,
      atk: 59,
      def: 50,
      spa: 67,
      spd: 63,
      spe: 46
    },
    weightkg: 25.2,
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "amaura",
    fullname: "pokemon: Amaura",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Amaura",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 362,
    weighthg: 252,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Refrigerate",
      H: "Snow Warning"
    },
    evos: [
      "Aurorus"
    ],
    nfe: true
  },
  aurorus: {
    tags: [],
    num: 699,
    name: "Aurorus",
    types: [
      "Rock",
      "Ice"
    ],
    baseStats: {
      hp: 123,
      atk: 77,
      def: 72,
      spa: 99,
      spd: 92,
      spe: 58
    },
    weightkg: 225,
    evoLevel: 39,
    evoCondition: "at night",
    eggGroups: [
      "Monster"
    ],
    tier: "Illegal",
    id: "aurorus",
    fullname: "pokemon: Aurorus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Aurorus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 521,
    weighthg: 2250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Refrigerate",
      H: "Snow Warning"
    },
    nfe: false,
    prevo: "Amaura"
  },
  sylveon: {
    tags: [],
    num: 700,
    name: "Sylveon",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 95,
      atk: 65,
      def: 65,
      spa: 110,
      spd: 130,
      spe: 60
    },
    weightkg: 23.5,
    evoType: "levelExtra",
    evoCondition: "with a Fairy-type move and two levels of Affection",
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "DOU",
    id: "sylveon",
    fullname: "pokemon: Sylveon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sylveon",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 525,
    weighthg: 235,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Cute Charm",
      H: "Pixilate"
    },
    nfe: false,
    prevo: "Eevee"
  },
  hawlucha: {
    tags: [],
    num: 701,
    name: "Hawlucha",
    types: [
      "Fighting",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 92,
      def: 75,
      spa: 74,
      spd: 63,
      spe: 118
    },
    weightkg: 21.5,
    eggGroups: [
      "Flying",
      "Human-Like"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "hawlucha",
    fullname: "pokemon: Hawlucha",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hawlucha",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 500,
    weighthg: 215,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      "1": "Unburden",
      H: "Mold Breaker"
    },
    nfe: false
  },
  dedenne: {
    tags: [],
    num: 702,
    name: "Dedenne",
    types: [
      "Electric",
      "Fairy"
    ],
    baseStats: {
      hp: 67,
      atk: 58,
      def: 57,
      spa: 81,
      spd: 67,
      spe: 101
    },
    weightkg: 2.2,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "dedenne",
    fullname: "pokemon: Dedenne",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dedenne",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 431,
    weighthg: 22,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cheek Pouch",
      "1": "Pickup",
      H: "Plus"
    },
    nfe: false
  },
  goomy: {
    tags: [],
    num: 704,
    name: "Goomy",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 45,
      atk: 50,
      def: 35,
      spa: 55,
      spd: 75,
      spe: 40
    },
    weightkg: 2.8,
    eggGroups: [
      "Dragon"
    ],
    tier: "LC",
    id: "goomy",
    fullname: "pokemon: Goomy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Goomy",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 300,
    weighthg: 28,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    evos: [
      "Sliggoo"
    ],
    nfe: true
  },
  sliggoo: {
    tags: [],
    num: 705,
    name: "Sliggoo",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 68,
      atk: 75,
      def: 53,
      spa: 83,
      spd: 113,
      spe: 60
    },
    weightkg: 17.5,
    evoLevel: 40,
    eggGroups: [
      "Dragon"
    ],
    tier: "NFE",
    id: "sliggoo",
    fullname: "pokemon: Sliggoo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sliggoo",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 452,
    weighthg: 175,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    evos: [
      "Goodra"
    ],
    nfe: true,
    prevo: "Goomy"
  },
  goodra: {
    tags: [],
    num: 706,
    name: "Goodra",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 90,
      atk: 100,
      def: 70,
      spa: 110,
      spd: 150,
      spe: 80
    },
    weightkg: 150.5,
    evoLevel: 50,
    eggGroups: [
      "Dragon"
    ],
    tier: "NUBL",
    doublesTier: "(DUU)",
    id: "goodra",
    fullname: "pokemon: Goodra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Goodra",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 600,
    weighthg: 1505,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sap Sipper",
      "1": "Hydration",
      H: "Gooey"
    },
    nfe: false,
    prevo: "Sliggoo"
  },
  klefki: {
    tags: [],
    num: 707,
    name: "Klefki",
    types: [
      "Steel",
      "Fairy"
    ],
    baseStats: {
      hp: 57,
      atk: 80,
      def: 91,
      spa: 80,
      spd: 87,
      spe: 75
    },
    weightkg: 3,
    eggGroups: [
      "Mineral"
    ],
    tier: "RU",
    doublesTier: "DUU",
    id: "klefki",
    fullname: "pokemon: Klefki",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Klefki",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 30,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Prankster",
      H: "Magician"
    },
    nfe: false
  },
  phantump: {
    tags: [],
    num: 708,
    name: "Phantump",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 43,
      atk: 70,
      def: 48,
      spa: 50,
      spd: 60,
      spe: 38
    },
    weightkg: 7,
    eggGroups: [
      "Grass",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "phantump",
    fullname: "pokemon: Phantump",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Phantump",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 309,
    weighthg: 70,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Frisk",
      H: "Harvest"
    },
    evos: [
      "Trevenant"
    ],
    nfe: true
  },
  trevenant: {
    tags: [],
    num: 709,
    name: "Trevenant",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 85,
      atk: 110,
      def: 76,
      spa: 65,
      spd: 82,
      spe: 56
    },
    weightkg: 71,
    evoType: "trade",
    eggGroups: [
      "Grass",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "trevenant",
    fullname: "pokemon: Trevenant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Trevenant",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 474,
    weighthg: 710,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Natural Cure",
      "1": "Frisk",
      H: "Harvest"
    },
    nfe: false,
    prevo: "Phantump"
  },
  pumpkaboo: {
    tags: [],
    num: 710,
    name: "Pumpkaboo",
    baseForme: "Average",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 49,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 51
    },
    weightkg: 5,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "pumpkaboo",
    fullname: "pokemon: Pumpkaboo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pumpkaboo",
    forme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 50,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    evos: [
      "Gourgeist"
    ],
    nfe: true,
    otherFormes: [
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    formeOrder: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ],
    formes: [
      "Pumpkaboo",
      "Pumpkaboo-Small",
      "Pumpkaboo-Large",
      "Pumpkaboo-Super"
    ]
  },
  pumpkaboolarge: {
    tags: [],
    num: 710,
    name: "Pumpkaboo-Large",
    baseSpecies: "Pumpkaboo",
    forme: "Large",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 54,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 46
    },
    weightkg: 7.5,
    eggGroups: [
      "Amorphous"
    ],
    id: "pumpkaboolarge",
    fullname: "pokemon: Pumpkaboo-Large",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    evos: [
      "Gourgeist-Large"
    ],
    nfe: true
  },
  pumpkaboosmall: {
    tags: [],
    num: 710,
    name: "Pumpkaboo-Small",
    baseSpecies: "Pumpkaboo",
    forme: "Small",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 44,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 56
    },
    weightkg: 3.5,
    eggGroups: [
      "Amorphous"
    ],
    id: "pumpkaboosmall",
    fullname: "pokemon: Pumpkaboo-Small",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 35,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    evos: [
      "Gourgeist-Small"
    ],
    nfe: true
  },
  pumpkaboosuper: {
    tags: [],
    num: 710,
    name: "Pumpkaboo-Super",
    baseSpecies: "Pumpkaboo",
    forme: "Super",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 59,
      atk: 66,
      def: 70,
      spa: 44,
      spd: 55,
      spe: 41
    },
    weightkg: 15,
    eggGroups: [
      "Amorphous"
    ],
    id: "pumpkaboosuper",
    fullname: "pokemon: Pumpkaboo-Super",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 335,
    weighthg: 150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    evos: [
      "Gourgeist-Super"
    ],
    nfe: true
  },
  gourgeist: {
    tags: [],
    num: 711,
    name: "Gourgeist",
    baseForme: "Average",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 65,
      atk: 90,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 84
    },
    weightkg: 12.5,
    evoType: "trade",
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "gourgeist",
    fullname: "pokemon: Gourgeist",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gourgeist",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 494,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    nfe: false,
    otherFormes: [
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    formeOrder: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    formes: [
      "Gourgeist",
      "Gourgeist-Small",
      "Gourgeist-Large",
      "Gourgeist-Super"
    ],
    prevo: "Pumpkaboo"
  },
  gourgeistlarge: {
    tags: [],
    num: 711,
    name: "Gourgeist-Large",
    baseSpecies: "Gourgeist",
    forme: "Large",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 75,
      atk: 95,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 69
    },
    weightkg: 14,
    evoType: "trade",
    eggGroups: [
      "Amorphous"
    ],
    id: "gourgeistlarge",
    fullname: "pokemon: Gourgeist-Large",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 494,
    weighthg: 140,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    nfe: false,
    prevo: "Pumpkaboo-Large"
  },
  gourgeistsmall: {
    tags: [],
    num: 711,
    name: "Gourgeist-Small",
    baseSpecies: "Gourgeist",
    forme: "Small",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 55,
      atk: 85,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 99
    },
    weightkg: 9.5,
    evoType: "trade",
    eggGroups: [
      "Amorphous"
    ],
    id: "gourgeistsmall",
    fullname: "pokemon: Gourgeist-Small",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 494,
    weighthg: 95,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    nfe: false,
    prevo: "Pumpkaboo-Small"
  },
  gourgeistsuper: {
    tags: [],
    num: 711,
    name: "Gourgeist-Super",
    baseSpecies: "Gourgeist",
    forme: "Super",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 85,
      atk: 100,
      def: 122,
      spa: 58,
      spd: 75,
      spe: 54
    },
    weightkg: 39,
    evoType: "trade",
    eggGroups: [
      "Amorphous"
    ],
    id: "gourgeistsuper",
    fullname: "pokemon: Gourgeist-Super",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 494,
    weighthg: 390,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pickup",
      "1": "Frisk",
      H: "Insomnia"
    },
    nfe: false,
    prevo: "Pumpkaboo-Super"
  },
  bergmite: {
    tags: [],
    num: 712,
    name: "Bergmite",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 55,
      atk: 69,
      def: 85,
      spa: 32,
      spd: 35,
      spe: 28
    },
    weightkg: 99.5,
    eggGroups: [
      "Monster",
      "Mineral"
    ],
    tier: "LC",
    id: "bergmite",
    fullname: "pokemon: Bergmite",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bergmite",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 304,
    weighthg: 995,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Ice Body",
      H: "Sturdy"
    },
    evos: [
      "Avalugg"
    ],
    nfe: true
  },
  avalugg: {
    tags: [],
    num: 713,
    name: "Avalugg",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 95,
      atk: 117,
      def: 184,
      spa: 44,
      spd: 46,
      spe: 28
    },
    weightkg: 505,
    evoLevel: 37,
    eggGroups: [
      "Monster",
      "Mineral"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "avalugg",
    fullname: "pokemon: Avalugg",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Avalugg",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 514,
    weighthg: 5050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Ice Body",
      H: "Sturdy"
    },
    nfe: false,
    prevo: "Bergmite"
  },
  noibat: {
    tags: [],
    num: 714,
    name: "Noibat",
    types: [
      "Flying",
      "Dragon"
    ],
    baseStats: {
      hp: 40,
      atk: 30,
      def: 35,
      spa: 45,
      spd: 40,
      spe: 55
    },
    weightkg: 8,
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    tier: "LC",
    id: "noibat",
    fullname: "pokemon: Noibat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Noibat",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 245,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Frisk",
      "1": "Infiltrator",
      H: "Telepathy"
    },
    evos: [
      "Noivern"
    ],
    nfe: true
  },
  noivern: {
    tags: [],
    num: 715,
    name: "Noivern",
    types: [
      "Flying",
      "Dragon"
    ],
    baseStats: {
      hp: 85,
      atk: 70,
      def: 80,
      spa: 97,
      spd: 80,
      spe: 123
    },
    weightkg: 85,
    evoLevel: 48,
    eggGroups: [
      "Flying",
      "Dragon"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "noivern",
    fullname: "pokemon: Noivern",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Noivern",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 535,
    weighthg: 850,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Frisk",
      "1": "Infiltrator",
      H: "Telepathy"
    },
    nfe: false,
    prevo: "Noibat"
  },
  xerneas: {
    tags: [
      "Restricted Legendary"
    ],
    num: 716,
    name: "Xerneas",
    baseForme: "Active",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 126,
      atk: 131,
      def: 95,
      spa: 131,
      spd: 98,
      spe: 99
    },
    weightkg: 215,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "xerneas",
    fullname: "pokemon: Xerneas",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Xerneas",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 2150,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Fairy Aura"
    },
    nfe: false
  },
  yveltal: {
    tags: [
      "Restricted Legendary"
    ],
    num: 717,
    name: "Yveltal",
    types: [
      "Dark",
      "Flying"
    ],
    baseStats: {
      hp: 126,
      atk: 131,
      def: 95,
      spa: 131,
      spd: 98,
      spe: 99
    },
    weightkg: 203,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "yveltal",
    fullname: "pokemon: Yveltal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Yveltal",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 2030,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Dark Aura"
    },
    nfe: false
  },
  zygarde: {
    tags: [
      "Restricted Legendary"
    ],
    num: 718,
    name: "Zygarde",
    baseForme: "50%",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 108,
      atk: 100,
      def: 121,
      spa: 81,
      spd: 95,
      spe: 95
    },
    weightkg: 305,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "zygarde",
    fullname: "pokemon: Zygarde",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zygarde",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 3050,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Aura Break",
      S: "Power Construct"
    },
    nfe: false,
    otherFormes: [
      "Zygarde-10%",
      "Zygarde-Complete"
    ],
    formeOrder: [
      "Zygarde",
      "Zygarde-10%",
      "Zygarde-10%",
      "Zygarde",
      "Zygarde-Complete"
    ],
    formes: [
      "Zygarde",
      "Zygarde-10%",
      "Zygarde-10%",
      "Zygarde",
      "Zygarde-Complete"
    ]
  },
  zygarde10: {
    tags: [
      "Restricted Legendary"
    ],
    num: 718,
    name: "Zygarde-10%",
    baseSpecies: "Zygarde",
    forme: "10%",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 54,
      atk: 100,
      def: 71,
      spa: 61,
      spd: 85,
      spe: 115
    },
    weightkg: 33.5,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Zygarde",
    gen: 7,
    tier: "Illegal",
    id: "zygarde10",
    fullname: "pokemon: Zygarde-10%",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 486,
    weighthg: 335,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Aura Break",
      S: "Power Construct"
    },
    nfe: false
  },
  zygardecomplete: {
    tags: [
      "Restricted Legendary"
    ],
    num: 718,
    name: "Zygarde-Complete",
    baseSpecies: "Zygarde",
    forme: "Complete",
    types: [
      "Dragon",
      "Ground"
    ],
    baseStats: {
      hp: 216,
      atk: 100,
      def: 121,
      spa: 91,
      spd: 95,
      spe: 85
    },
    weightkg: 610,
    eggGroups: [
      "Undiscovered"
    ],
    requiredAbility: "Power Construct",
    battleOnly: [
      "Zygarde",
      "Zygarde-10%"
    ],
    gen: 7,
    tier: "Illegal",
    id: "zygardecomplete",
    fullname: "pokemon: Zygarde-Complete",
    effectType: "Pokemon",
    kind: "Species",
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 708,
    weighthg: 6100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Zygarde",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Power Construct"
    },
    nfe: false
  },
  dianciemega: {
    tags: [
      "Mythical"
    ],
    num: 719,
    name: "Diancie-Mega",
    baseSpecies: "Diancie",
    forme: "Mega",
    types: [
      "Rock",
      "Fairy"
    ],
    baseStats: {
      hp: 50,
      atk: 160,
      def: 110,
      spa: 160,
      spd: 110,
      spe: 110
    },
    weightkg: 27.8,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Diancite",
    tier: "Illegal",
    id: "dianciemega",
    fullname: "pokemon: Diancie-Mega",
    effectType: "Pokemon",
    kind: "Species",
    gen: 6,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Diancite"
    ],
    bst: 700,
    weighthg: 278,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    isMega: true,
    gmaxUnreleased: false,
    cannotDynamax: false,
    battleOnly: "Diancie",
    changesFrom: "Diancie",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Magic Bounce"
    },
    nfe: false
  },
  rowlet: {
    tags: [],
    num: 722,
    name: "Rowlet",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 68,
      atk: 55,
      def: 55,
      spa: 50,
      spd: 50,
      spe: 42
    },
    weightkg: 1.5,
    eggGroups: [
      "Flying"
    ],
    tier: "LC",
    id: "rowlet",
    fullname: "pokemon: Rowlet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rowlet",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    evos: [
      "Dartrix"
    ],
    nfe: true
  },
  dartrix: {
    tags: [],
    num: 723,
    name: "Dartrix",
    types: [
      "Grass",
      "Flying"
    ],
    baseStats: {
      hp: 78,
      atk: 75,
      def: 75,
      spa: 70,
      spd: 70,
      spe: 52
    },
    weightkg: 16,
    evoLevel: 17,
    eggGroups: [
      "Flying"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "dartrix",
    fullname: "pokemon: Dartrix",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Dartrix",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 420,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    evos: [
      "Decidueye"
    ],
    nfe: true,
    prevo: "Rowlet"
  },
  decidueye: {
    tags: [],
    num: 724,
    name: "Decidueye",
    types: [
      "Grass",
      "Ghost"
    ],
    baseStats: {
      hp: 78,
      atk: 107,
      def: 75,
      spa: 100,
      spd: 100,
      spe: 70
    },
    weightkg: 36.6,
    evoLevel: 34,
    eggGroups: [
      "Flying"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "decidueye",
    fullname: "pokemon: Decidueye",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Decidueye",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 530,
    weighthg: 366,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Long Reach"
    },
    nfe: false,
    prevo: "Dartrix"
  },
  litten: {
    tags: [],
    num: 725,
    name: "Litten",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 45,
      atk: 65,
      def: 40,
      spa: 60,
      spd: 40,
      spe: 70
    },
    weightkg: 4.3,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "litten",
    fullname: "pokemon: Litten",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Litten",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 43,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    evos: [
      "Torracat"
    ],
    nfe: true
  },
  torracat: {
    tags: [],
    num: 726,
    name: "Torracat",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 85,
      def: 50,
      spa: 80,
      spd: 50,
      spe: 90
    },
    weightkg: 25,
    evoLevel: 17,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "torracat",
    fullname: "pokemon: Torracat",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Torracat",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    evos: [
      "Incineroar"
    ],
    nfe: true,
    prevo: "Litten"
  },
  incineroar: {
    tags: [],
    num: 727,
    name: "Incineroar",
    types: [
      "Fire",
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 115,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 60
    },
    weightkg: 83,
    evoLevel: 34,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "incineroar",
    fullname: "pokemon: Incineroar",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Incineroar",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 830,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Intimidate"
    },
    nfe: false,
    prevo: "Torracat"
  },
  popplio: {
    tags: [],
    num: 728,
    name: "Popplio",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 54,
      def: 54,
      spa: 66,
      spd: 56,
      spe: 40
    },
    weightkg: 7.5,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "popplio",
    fullname: "pokemon: Popplio",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Popplio",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 320,
    weighthg: 75,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    evos: [
      "Brionne"
    ],
    nfe: true
  },
  brionne: {
    tags: [],
    num: 729,
    name: "Brionne",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 60,
      atk: 69,
      def: 69,
      spa: 91,
      spd: 81,
      spe: 50
    },
    weightkg: 17.5,
    evoLevel: 17,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "brionne",
    fullname: "pokemon: Brionne",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Brionne",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 175,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    evos: [
      "Primarina"
    ],
    nfe: true,
    prevo: "Popplio"
  },
  primarina: {
    tags: [],
    num: 730,
    name: "Primarina",
    types: [
      "Water",
      "Fairy"
    ],
    baseStats: {
      hp: 80,
      atk: 74,
      def: 74,
      spa: 126,
      spd: 116,
      spe: 60
    },
    weightkg: 44,
    evoLevel: 34,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "Illegal",
    id: "primarina",
    fullname: "pokemon: Primarina",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Primarina",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 440,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Liquid Voice"
    },
    nfe: false,
    prevo: "Brionne"
  },
  pikipek: {
    tags: [],
    num: 731,
    name: "Pikipek",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 35,
      atk: 75,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 65
    },
    weightkg: 1.2,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "pikipek",
    fullname: "pokemon: Pikipek",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pikipek",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 265,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Pickup"
    },
    evos: [
      "Trumbeak"
    ],
    nfe: true
  },
  trumbeak: {
    tags: [],
    num: 732,
    name: "Trumbeak",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 55,
      atk: 85,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 75
    },
    weightkg: 14.8,
    evoLevel: 14,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "trumbeak",
    fullname: "pokemon: Trumbeak",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Trumbeak",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 355,
    weighthg: 148,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Pickup"
    },
    evos: [
      "Toucannon"
    ],
    nfe: true,
    prevo: "Pikipek"
  },
  toucannon: {
    tags: [],
    num: 733,
    name: "Toucannon",
    types: [
      "Normal",
      "Flying"
    ],
    baseStats: {
      hp: 80,
      atk: 120,
      def: 75,
      spa: 75,
      spd: 75,
      spe: 60
    },
    weightkg: 26,
    evoLevel: 28,
    eggGroups: [
      "Flying"
    ],
    tier: "Illegal",
    id: "toucannon",
    fullname: "pokemon: Toucannon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Toucannon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 485,
    weighthg: 260,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Skill Link",
      H: "Sheer Force"
    },
    nfe: false,
    prevo: "Trumbeak"
  },
  yungoos: {
    tags: [],
    num: 734,
    name: "Yungoos",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 48,
      atk: 70,
      def: 30,
      spa: 30,
      spd: 30,
      spe: 45
    },
    weightkg: 6,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "yungoos",
    fullname: "pokemon: Yungoos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Yungoos",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 253,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stakeout",
      "1": "Strong Jaw",
      H: "Adaptability"
    },
    evos: [
      "Gumshoos"
    ],
    nfe: true
  },
  gumshoos: {
    tags: [],
    num: 735,
    name: "Gumshoos",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 88,
      atk: 110,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 45
    },
    weightkg: 14.2,
    evoLevel: 20,
    evoCondition: "during the day",
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "gumshoos",
    fullname: "pokemon: Gumshoos",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Gumshoos",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 418,
    weighthg: 142,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Stakeout",
      "1": "Strong Jaw",
      H: "Adaptability"
    },
    nfe: false,
    otherFormes: [
      "Gumshoos-Totem"
    ],
    formeOrder: [
      "Gumshoos",
      "Gumshoos-Totem"
    ],
    formes: [
      "Gumshoos",
      "Gumshoos-Totem"
    ],
    prevo: "Yungoos"
  },
  gumshoostotem: {
    tags: [],
    num: 735,
    name: "Gumshoos-Totem",
    baseSpecies: "Gumshoos",
    forme: "Totem",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 88,
      atk: 110,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 45
    },
    weightkg: 60,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "gumshoostotem",
    fullname: "pokemon: Gumshoos-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 418,
    weighthg: 600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Adaptability"
    },
    nfe: false
  },
  grubbin: {
    tags: [],
    num: 736,
    name: "Grubbin",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 47,
      atk: 62,
      def: 45,
      spa: 55,
      spd: 45,
      spe: 46
    },
    weightkg: 4.4,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "grubbin",
    fullname: "pokemon: Grubbin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Grubbin",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 44,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm"
    },
    evos: [
      "Charjabug"
    ],
    nfe: true
  },
  charjabug: {
    tags: [],
    num: 737,
    name: "Charjabug",
    types: [
      "Bug",
      "Electric"
    ],
    baseStats: {
      hp: 57,
      atk: 82,
      def: 95,
      spa: 55,
      spd: 75,
      spe: 36
    },
    weightkg: 10.5,
    evoLevel: 20,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "charjabug",
    fullname: "pokemon: Charjabug",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Charjabug",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 400,
    weighthg: 105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Battery"
    },
    evos: [
      "Vikavolt"
    ],
    nfe: true,
    prevo: "Grubbin"
  },
  vikavolt: {
    tags: [],
    num: 738,
    name: "Vikavolt",
    types: [
      "Bug",
      "Electric"
    ],
    baseStats: {
      hp: 77,
      atk: 70,
      def: 90,
      spa: 145,
      spd: 75,
      spe: 43
    },
    weightkg: 45,
    evoType: "useItem",
    evoItem: "Thunder Stone",
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "vikavolt",
    fullname: "pokemon: Vikavolt",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Vikavolt",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 450,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false,
    otherFormes: [
      "Vikavolt-Totem"
    ],
    formeOrder: [
      "Vikavolt",
      "Vikavolt-Totem"
    ],
    formes: [
      "Vikavolt",
      "Vikavolt-Totem"
    ],
    prevo: "Charjabug"
  },
  vikavolttotem: {
    tags: [],
    num: 738,
    name: "Vikavolt-Totem",
    baseSpecies: "Vikavolt",
    forme: "Totem",
    types: [
      "Bug",
      "Electric"
    ],
    baseStats: {
      hp: 77,
      atk: 70,
      def: 90,
      spa: 145,
      spd: 75,
      spe: 43
    },
    weightkg: 147.5,
    eggGroups: [
      "Bug"
    ],
    id: "vikavolttotem",
    fullname: "pokemon: Vikavolt-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 500,
    weighthg: 1475,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Levitate"
    },
    nfe: false
  },
  crabrawler: {
    tags: [],
    num: 739,
    name: "Crabrawler",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 47,
      atk: 82,
      def: 57,
      spa: 42,
      spd: 47,
      spe: 63
    },
    weightkg: 7,
    eggGroups: [
      "Water 3"
    ],
    tier: "LC",
    id: "crabrawler",
    fullname: "pokemon: Crabrawler",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Crabrawler",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 338,
    weighthg: 70,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Iron Fist",
      H: "Anger Point"
    },
    evos: [
      "Crabominable"
    ],
    nfe: true
  },
  crabominable: {
    tags: [],
    num: 740,
    name: "Crabominable",
    types: [
      "Fighting",
      "Ice"
    ],
    baseStats: {
      hp: 97,
      atk: 132,
      def: 77,
      spa: 62,
      spd: 67,
      spe: 43
    },
    weightkg: 180,
    evoType: "useItem",
    evoItem: "Ice Stone",
    eggGroups: [
      "Water 3"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "crabominable",
    fullname: "pokemon: Crabominable",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Crabominable",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 478,
    weighthg: 1800,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Hyper Cutter",
      "1": "Iron Fist",
      H: "Anger Point"
    },
    nfe: false,
    prevo: "Crabrawler"
  },
  oricorio: {
    tags: [],
    num: 741,
    name: "Oricorio",
    baseForme: "Baile",
    types: [
      "Fire",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    },
    weightkg: 3.4,
    eggGroups: [
      "Flying"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "oricorio",
    fullname: "pokemon: Oricorio",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Oricorio",
    forme: "",
    canHatch: true,
    bst: 476,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Dancer"
    },
    nfe: false,
    otherFormes: [
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    formeOrder: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ],
    formes: [
      "Oricorio",
      "Oricorio-Pom-Pom",
      "Oricorio-Pa'u",
      "Oricorio-Sensu"
    ]
  },
  oricoriopau: {
    tags: [],
    num: 741,
    name: "Oricorio-Pa'u",
    baseSpecies: "Oricorio",
    forme: "Pa'u",
    types: [
      "Psychic",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    },
    weightkg: 3.4,
    eggGroups: [
      "Flying"
    ],
    changesFrom: "Oricorio",
    tier: "PUBL",
    doublesTier: "(DUU)",
    id: "oricoriopau",
    fullname: "pokemon: Oricorio-Pa'u",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 476,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Dancer"
    },
    nfe: false
  },
  oricoriopompom: {
    tags: [],
    num: 741,
    name: "Oricorio-Pom-Pom",
    baseSpecies: "Oricorio",
    forme: "Pom-Pom",
    types: [
      "Electric",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    },
    weightkg: 3.4,
    eggGroups: [
      "Flying"
    ],
    changesFrom: "Oricorio",
    tier: "RU",
    doublesTier: "(DUU)",
    id: "oricoriopompom",
    fullname: "pokemon: Oricorio-Pom-Pom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 476,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Dancer"
    },
    nfe: false
  },
  oricoriosensu: {
    tags: [],
    num: 741,
    name: "Oricorio-Sensu",
    baseSpecies: "Oricorio",
    forme: "Sensu",
    types: [
      "Ghost",
      "Flying"
    ],
    baseStats: {
      hp: 75,
      atk: 70,
      def: 70,
      spa: 98,
      spd: 70,
      spe: 93
    },
    weightkg: 3.4,
    eggGroups: [
      "Flying"
    ],
    changesFrom: "Oricorio",
    tier: "NUBL",
    doublesTier: "(DUU)",
    id: "oricoriosensu",
    fullname: "pokemon: Oricorio-Sensu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: true,
    bst: 476,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Dancer"
    },
    nfe: false
  },
  cutiefly: {
    tags: [],
    num: 742,
    name: "Cutiefly",
    types: [
      "Bug",
      "Fairy"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 40,
      spa: 55,
      spd: 40,
      spe: 84
    },
    weightkg: 0.2,
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    tier: "Illegal",
    id: "cutiefly",
    fullname: "pokemon: Cutiefly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cutiefly",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 304,
    weighthg: 2,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Honey Gather",
      "1": "Shield Dust",
      H: "Sweet Veil"
    },
    evos: [
      "Ribombee"
    ],
    nfe: true
  },
  ribombee: {
    tags: [],
    num: 743,
    name: "Ribombee",
    types: [
      "Bug",
      "Fairy"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 60,
      spa: 95,
      spd: 70,
      spe: 124
    },
    weightkg: 0.5,
    evoLevel: 25,
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    tier: "Illegal",
    id: "ribombee",
    fullname: "pokemon: Ribombee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Ribombee",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 464,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Honey Gather",
      "1": "Shield Dust",
      H: "Sweet Veil"
    },
    nfe: false,
    otherFormes: [
      "Ribombee-Totem"
    ],
    formeOrder: [
      "Ribombee",
      "Ribombee-Totem"
    ],
    formes: [
      "Ribombee",
      "Ribombee-Totem"
    ],
    prevo: "Cutiefly"
  },
  ribombeetotem: {
    tags: [],
    num: 743,
    name: "Ribombee-Totem",
    baseSpecies: "Ribombee",
    forme: "Totem",
    types: [
      "Bug",
      "Fairy"
    ],
    baseStats: {
      hp: 60,
      atk: 55,
      def: 60,
      spa: 95,
      spd: 70,
      spe: 124
    },
    weightkg: 2,
    eggGroups: [
      "Bug",
      "Fairy"
    ],
    id: "ribombeetotem",
    fullname: "pokemon: Ribombee-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 464,
    weighthg: 20,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sweet Veil"
    },
    nfe: false
  },
  rockruff: {
    tags: [],
    num: 744,
    name: "Rockruff",
    baseForme: "Midday",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 45,
      atk: 65,
      def: 40,
      spa: 30,
      spd: 40,
      spe: 60
    },
    weightkg: 9.2,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "rockruff",
    fullname: "pokemon: Rockruff",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rockruff",
    forme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 280,
    weighthg: 92,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Vital Spirit",
      H: "Steadfast",
      S: "Own Tempo"
    },
    evos: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    nfe: true,
    formeOrder: [
      "Rockruff",
      "Rockruff"
    ],
    formes: [
      "Rockruff",
      "Rockruff"
    ]
  },
  lycanroc: {
    tags: [],
    num: 745,
    name: "Lycanroc",
    baseForme: "Midday",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 75,
      atk: 115,
      def: 65,
      spa: 55,
      spd: 65,
      spe: 112
    },
    weightkg: 25,
    evoLevel: 25,
    evoCondition: "during the day",
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "DUU",
    id: "lycanroc",
    fullname: "pokemon: Lycanroc",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Lycanroc",
    forme: "",
    canHatch: false,
    bst: 487,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Sand Rush",
      H: "Steadfast"
    },
    nfe: false,
    otherFormes: [
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    formeOrder: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    formes: [
      "Lycanroc",
      "Lycanroc-Midnight",
      "Lycanroc-Dusk"
    ],
    prevo: "Rockruff"
  },
  lycanrocdusk: {
    tags: [],
    num: 745,
    name: "Lycanroc-Dusk",
    baseSpecies: "Lycanroc",
    forme: "Dusk",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 75,
      atk: 117,
      def: 65,
      spa: 55,
      spd: 65,
      spe: 110
    },
    weightkg: 25,
    evoLevel: 25,
    evoCondition: "from a special Rockruff",
    eggGroups: [
      "Field"
    ],
    tier: "RUBL",
    doublesTier: "(DUU)",
    id: "lycanrocdusk",
    fullname: "pokemon: Lycanroc-Dusk",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: false,
    bst: 487,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Tough Claws"
    },
    nfe: false,
    prevo: "Rockruff"
  },
  lycanrocmidnight: {
    tags: [],
    num: 745,
    name: "Lycanroc-Midnight",
    baseSpecies: "Lycanroc",
    forme: "Midnight",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 85,
      atk: 115,
      def: 75,
      spa: 55,
      spd: 75,
      spe: 82
    },
    weightkg: 25,
    evoLevel: 25,
    evoCondition: "at night",
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "lycanrocmidnight",
    fullname: "pokemon: Lycanroc-Midnight",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    canHatch: false,
    bst: 487,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Vital Spirit",
      H: "No Guard"
    },
    nfe: false,
    prevo: "Rockruff"
  },
  wishiwashi: {
    tags: [],
    num: 746,
    name: "Wishiwashi",
    baseForme: "Solo",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 45,
      atk: 20,
      def: 20,
      spa: 25,
      spd: 25,
      spe: 40
    },
    weightkg: 0.3,
    eggGroups: [
      "Water 2"
    ],
    tier: "Illegal",
    id: "wishiwashi",
    fullname: "pokemon: Wishiwashi",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wishiwashi",
    forme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 175,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Schooling"
    },
    nfe: false,
    otherFormes: [
      "Wishiwashi-School"
    ],
    formeOrder: [
      "Wishiwashi",
      "Wishiwashi-School"
    ],
    formes: [
      "Wishiwashi",
      "Wishiwashi-School"
    ]
  },
  wishiwashischool: {
    tags: [],
    num: 746,
    name: "Wishiwashi-School",
    baseSpecies: "Wishiwashi",
    forme: "School",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 45,
      atk: 140,
      def: 130,
      spa: 140,
      spd: 135,
      spe: 30
    },
    weightkg: 78.6,
    eggGroups: [
      "Water 2"
    ],
    requiredAbility: "Schooling",
    battleOnly: "Wishiwashi",
    id: "wishiwashischool",
    fullname: "pokemon: Wishiwashi-School",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 620,
    weighthg: 786,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Wishiwashi",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Schooling"
    },
    nfe: false
  },
  mareanie: {
    tags: [],
    num: 747,
    name: "Mareanie",
    types: [
      "Poison",
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 53,
      def: 62,
      spa: 43,
      spd: 52,
      spe: 45
    },
    weightkg: 8,
    eggGroups: [
      "Water 1"
    ],
    tier: "LC",
    id: "mareanie",
    fullname: "pokemon: Mareanie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mareanie",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 305,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Merciless",
      "1": "Limber",
      H: "Regenerator"
    },
    evos: [
      "Toxapex"
    ],
    nfe: true
  },
  toxapex: {
    tags: [],
    num: 748,
    name: "Toxapex",
    types: [
      "Poison",
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 63,
      def: 152,
      spa: 53,
      spd: 142,
      spe: 35
    },
    weightkg: 14.5,
    evoLevel: 38,
    eggGroups: [
      "Water 1"
    ],
    tier: "OU",
    doublesTier: "(DUU)",
    id: "toxapex",
    fullname: "pokemon: Toxapex",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Toxapex",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 495,
    weighthg: 145,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Merciless",
      "1": "Limber",
      H: "Regenerator"
    },
    nfe: false,
    prevo: "Mareanie"
  },
  mudbray: {
    tags: [],
    num: 749,
    name: "Mudbray",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 70,
      atk: 100,
      def: 70,
      spa: 45,
      spd: 55,
      spe: 45
    },
    weightkg: 110,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "mudbray",
    fullname: "pokemon: Mudbray",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mudbray",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 385,
    weighthg: 1100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Stamina",
      H: "Inner Focus"
    },
    evos: [
      "Mudsdale"
    ],
    nfe: true
  },
  mudsdale: {
    tags: [],
    num: 750,
    name: "Mudsdale",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 100,
      atk: 125,
      def: 100,
      spa: 55,
      spd: 85,
      spe: 35
    },
    weightkg: 920,
    evoLevel: 30,
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "mudsdale",
    fullname: "pokemon: Mudsdale",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mudsdale",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 500,
    weighthg: 9200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Own Tempo",
      "1": "Stamina",
      H: "Inner Focus"
    },
    nfe: false,
    prevo: "Mudbray"
  },
  dewpider: {
    tags: [],
    num: 751,
    name: "Dewpider",
    types: [
      "Water",
      "Bug"
    ],
    baseStats: {
      hp: 38,
      atk: 40,
      def: 52,
      spa: 40,
      spd: 72,
      spe: 27
    },
    weightkg: 4,
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    tier: "Illegal",
    id: "dewpider",
    fullname: "pokemon: Dewpider",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dewpider",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 269,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Bubble",
      H: "Water Absorb"
    },
    evos: [
      "Araquanid"
    ],
    nfe: true
  },
  araquanid: {
    tags: [],
    num: 752,
    name: "Araquanid",
    types: [
      "Water",
      "Bug"
    ],
    baseStats: {
      hp: 68,
      atk: 70,
      def: 92,
      spa: 50,
      spd: 132,
      spe: 42
    },
    weightkg: 82,
    evoLevel: 22,
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    tier: "Illegal",
    id: "araquanid",
    fullname: "pokemon: Araquanid",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Araquanid",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 454,
    weighthg: 820,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Bubble",
      H: "Water Absorb"
    },
    nfe: false,
    otherFormes: [
      "Araquanid-Totem"
    ],
    formeOrder: [
      "Araquanid",
      "Araquanid-Totem"
    ],
    formes: [
      "Araquanid",
      "Araquanid-Totem"
    ],
    prevo: "Dewpider"
  },
  araquanidtotem: {
    tags: [],
    num: 752,
    name: "Araquanid-Totem",
    baseSpecies: "Araquanid",
    forme: "Totem",
    types: [
      "Water",
      "Bug"
    ],
    baseStats: {
      hp: 68,
      atk: 70,
      def: 92,
      spa: 50,
      spd: 132,
      spe: 42
    },
    weightkg: 217.5,
    eggGroups: [
      "Water 1",
      "Bug"
    ],
    id: "araquanidtotem",
    fullname: "pokemon: Araquanid-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 454,
    weighthg: 2175,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Bubble"
    },
    nfe: false
  },
  fomantis: {
    tags: [],
    num: 753,
    name: "Fomantis",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 40,
      atk: 55,
      def: 35,
      spa: 50,
      spd: 35,
      spe: 35
    },
    weightkg: 1.5,
    eggGroups: [
      "Grass"
    ],
    tier: "LC",
    id: "fomantis",
    fullname: "pokemon: Fomantis",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Fomantis",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 250,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Leaf Guard",
      H: "Contrary"
    },
    evos: [
      "Lurantis"
    ],
    nfe: true
  },
  lurantis: {
    tags: [],
    num: 754,
    name: "Lurantis",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 105,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 45
    },
    weightkg: 18.5,
    evoLevel: 34,
    evoCondition: "during the day",
    eggGroups: [
      "Grass"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "lurantis",
    fullname: "pokemon: Lurantis",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Lurantis",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 185,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Leaf Guard",
      H: "Contrary"
    },
    nfe: false,
    otherFormes: [
      "Lurantis-Totem"
    ],
    formeOrder: [
      "Lurantis",
      "Lurantis-Totem"
    ],
    formes: [
      "Lurantis",
      "Lurantis-Totem"
    ],
    prevo: "Fomantis"
  },
  lurantistotem: {
    tags: [],
    num: 754,
    name: "Lurantis-Totem",
    baseSpecies: "Lurantis",
    forme: "Totem",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 105,
      def: 90,
      spa: 80,
      spd: 90,
      spe: 45
    },
    weightkg: 58,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "lurantistotem",
    fullname: "pokemon: Lurantis-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 480,
    weighthg: 580,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Leaf Guard"
    },
    nfe: false
  },
  morelull: {
    tags: [],
    num: 755,
    name: "Morelull",
    types: [
      "Grass",
      "Fairy"
    ],
    baseStats: {
      hp: 40,
      atk: 35,
      def: 55,
      spa: 65,
      spd: 75,
      spe: 15
    },
    weightkg: 1.5,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "morelull",
    fullname: "pokemon: Morelull",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Morelull",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 285,
    weighthg: 15,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Illuminate",
      "1": "Effect Spore",
      H: "Rain Dish"
    },
    evos: [
      "Shiinotic"
    ],
    nfe: true
  },
  shiinotic: {
    tags: [],
    num: 756,
    name: "Shiinotic",
    types: [
      "Grass",
      "Fairy"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 80,
      spa: 90,
      spd: 100,
      spe: 30
    },
    weightkg: 11.5,
    evoLevel: 24,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "shiinotic",
    fullname: "pokemon: Shiinotic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Shiinotic",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 405,
    weighthg: 115,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Illuminate",
      "1": "Effect Spore",
      H: "Rain Dish"
    },
    nfe: false,
    prevo: "Morelull"
  },
  salandit: {
    tags: [],
    num: 757,
    name: "Salandit",
    types: [
      "Poison",
      "Fire"
    ],
    baseStats: {
      hp: 48,
      atk: 44,
      def: 40,
      spa: 71,
      spd: 40,
      spe: 77
    },
    weightkg: 4.8,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "LC",
    id: "salandit",
    fullname: "pokemon: Salandit",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Salandit",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 48,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Corrosion",
      H: "Oblivious"
    },
    evos: [
      "Salazzle"
    ],
    nfe: true
  },
  salazzle: {
    tags: [],
    num: 758,
    name: "Salazzle",
    types: [
      "Poison",
      "Fire"
    ],
    baseStats: {
      hp: 68,
      atk: 64,
      def: 60,
      spa: 111,
      spd: 60,
      spe: 117
    },
    weightkg: 22.2,
    evoLevel: 33,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "salazzle",
    fullname: "pokemon: Salazzle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Salazzle",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 222,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Corrosion",
      H: "Oblivious"
    },
    nfe: false,
    otherFormes: [
      "Salazzle-Totem"
    ],
    formeOrder: [
      "Salazzle",
      "Salazzle-Totem"
    ],
    formes: [
      "Salazzle",
      "Salazzle-Totem"
    ],
    prevo: "Salandit"
  },
  salazzletotem: {
    tags: [],
    num: 758,
    name: "Salazzle-Totem",
    baseSpecies: "Salazzle",
    forme: "Totem",
    types: [
      "Poison",
      "Fire"
    ],
    baseStats: {
      hp: 68,
      atk: 64,
      def: 60,
      spa: 111,
      spd: 60,
      spe: 117
    },
    weightkg: 81,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "salazzletotem",
    fullname: "pokemon: Salazzle-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 480,
    weighthg: 810,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Corrosion"
    },
    nfe: false
  },
  stufful: {
    tags: [],
    num: 759,
    name: "Stufful",
    types: [
      "Normal",
      "Fighting"
    ],
    baseStats: {
      hp: 70,
      atk: 75,
      def: 50,
      spa: 45,
      spd: 50,
      spe: 50
    },
    weightkg: 6.8,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "stufful",
    fullname: "pokemon: Stufful",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Stufful",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 340,
    weighthg: 68,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Fluffy",
      "1": "Klutz",
      H: "Cute Charm"
    },
    evos: [
      "Bewear"
    ],
    nfe: true
  },
  bewear: {
    tags: [],
    num: 760,
    name: "Bewear",
    types: [
      "Normal",
      "Fighting"
    ],
    baseStats: {
      hp: 120,
      atk: 125,
      def: 80,
      spa: 55,
      spd: 60,
      spe: 60
    },
    weightkg: 135,
    evoLevel: 27,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "bewear",
    fullname: "pokemon: Bewear",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Bewear",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 500,
    weighthg: 1350,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Fluffy",
      "1": "Klutz",
      H: "Unnerve"
    },
    nfe: false,
    prevo: "Stufful"
  },
  bounsweet: {
    tags: [],
    num: 761,
    name: "Bounsweet",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 42,
      atk: 30,
      def: 38,
      spa: 30,
      spd: 38,
      spe: 32
    },
    weightkg: 3.2,
    eggGroups: [
      "Grass"
    ],
    tier: "LC",
    id: "bounsweet",
    fullname: "pokemon: Bounsweet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bounsweet",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 210,
    weighthg: 32,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Leaf Guard",
      "1": "Oblivious",
      H: "Sweet Veil"
    },
    evos: [
      "Steenee"
    ],
    nfe: true
  },
  steenee: {
    tags: [],
    num: 762,
    name: "Steenee",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 52,
      atk: 40,
      def: 48,
      spa: 40,
      spd: 48,
      spe: 62
    },
    weightkg: 8.2,
    evoLevel: 18,
    eggGroups: [
      "Grass"
    ],
    tier: "NFE",
    id: "steenee",
    fullname: "pokemon: Steenee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Steenee",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 290,
    weighthg: 82,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Leaf Guard",
      "1": "Oblivious",
      H: "Sweet Veil"
    },
    evos: [
      "Tsareena"
    ],
    nfe: true,
    prevo: "Bounsweet"
  },
  tsareena: {
    tags: [],
    num: 763,
    name: "Tsareena",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 72,
      atk: 120,
      def: 98,
      spa: 50,
      spd: 98,
      spe: 72
    },
    weightkg: 21.4,
    evoType: "levelMove",
    evoMove: "Stomp",
    eggGroups: [
      "Grass"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "tsareena",
    fullname: "pokemon: Tsareena",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Tsareena",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 214,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Leaf Guard",
      "1": "Queenly Majesty",
      H: "Sweet Veil"
    },
    nfe: false,
    prevo: "Steenee"
  },
  comfey: {
    tags: [],
    num: 764,
    name: "Comfey",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 51,
      atk: 52,
      def: 90,
      spa: 82,
      spd: 110,
      spe: 100
    },
    weightkg: 0.3,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "comfey",
    fullname: "pokemon: Comfey",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Comfey",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Flower Veil",
      "1": "Triage",
      H: "Natural Cure"
    },
    nfe: false
  },
  oranguru: {
    tags: [],
    num: 765,
    name: "Oranguru",
    types: [
      "Normal",
      "Psychic"
    ],
    baseStats: {
      hp: 90,
      atk: 60,
      def: 80,
      spa: 90,
      spd: 110,
      spe: 60
    },
    weightkg: 76,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "DUU",
    id: "oranguru",
    fullname: "pokemon: Oranguru",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Oranguru",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 490,
    weighthg: 760,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Inner Focus",
      "1": "Telepathy",
      H: "Symbiosis"
    },
    nfe: false
  },
  passimian: {
    tags: [],
    num: 766,
    name: "Passimian",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 100,
      atk: 120,
      def: 90,
      spa: 40,
      spd: 60,
      spe: 80
    },
    weightkg: 82.8,
    eggGroups: [
      "Field"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "passimian",
    fullname: "pokemon: Passimian",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Passimian",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 490,
    weighthg: 828,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Receiver",
      H: "Defiant"
    },
    nfe: false
  },
  wimpod: {
    tags: [],
    num: 767,
    name: "Wimpod",
    types: [
      "Bug",
      "Water"
    ],
    baseStats: {
      hp: 25,
      atk: 35,
      def: 40,
      spa: 20,
      spd: 30,
      spe: 80
    },
    weightkg: 12,
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    tier: "Illegal",
    id: "wimpod",
    fullname: "pokemon: Wimpod",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wimpod",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 230,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Wimp Out"
    },
    evos: [
      "Golisopod"
    ],
    nfe: true
  },
  golisopod: {
    tags: [],
    num: 768,
    name: "Golisopod",
    types: [
      "Bug",
      "Water"
    ],
    baseStats: {
      hp: 75,
      atk: 125,
      def: 140,
      spa: 60,
      spd: 90,
      spe: 40
    },
    weightkg: 108,
    evoLevel: 30,
    eggGroups: [
      "Bug",
      "Water 3"
    ],
    tier: "Illegal",
    id: "golisopod",
    fullname: "pokemon: Golisopod",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Golisopod",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 530,
    weighthg: 1080,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Emergency Exit"
    },
    nfe: false,
    prevo: "Wimpod"
  },
  sandygast: {
    tags: [],
    num: 769,
    name: "Sandygast",
    types: [
      "Ghost",
      "Ground"
    ],
    baseStats: {
      hp: 55,
      atk: 55,
      def: 80,
      spa: 70,
      spd: 45,
      spe: 15
    },
    weightkg: 70,
    eggGroups: [
      "Amorphous"
    ],
    tier: "LC",
    id: "sandygast",
    fullname: "pokemon: Sandygast",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sandygast",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 320,
    weighthg: 700,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Compaction",
      H: "Sand Veil"
    },
    evos: [
      "Palossand"
    ],
    nfe: true
  },
  palossand: {
    tags: [],
    num: 770,
    name: "Palossand",
    types: [
      "Ghost",
      "Ground"
    ],
    baseStats: {
      hp: 85,
      atk: 75,
      def: 110,
      spa: 100,
      spd: 75,
      spe: 35
    },
    weightkg: 250,
    evoLevel: 42,
    eggGroups: [
      "Amorphous"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "palossand",
    fullname: "pokemon: Palossand",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Palossand",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 480,
    weighthg: 2500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Water Compaction",
      H: "Sand Veil"
    },
    nfe: false,
    prevo: "Sandygast"
  },
  pyukumuku: {
    tags: [],
    num: 771,
    name: "Pyukumuku",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 55,
      atk: 60,
      def: 130,
      spa: 30,
      spd: 130,
      spe: 5
    },
    weightkg: 1.2,
    eggGroups: [
      "Water 1"
    ],
    tier: "Illegal",
    id: "pyukumuku",
    fullname: "pokemon: Pyukumuku",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pyukumuku",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 410,
    weighthg: 12,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Innards Out",
      H: "Unaware"
    },
    nfe: false
  },
  typenull: {
    tags: [
      "Sub-Legendary"
    ],
    num: 772,
    name: "Type: Null",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 59
    },
    weightkg: 120.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "typenull",
    fullname: "pokemon: Type: Null",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Type: Null",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 534,
    weighthg: 1205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Battle Armor"
    },
    evos: [
      "Silvally"
    ],
    nfe: true
  },
  silvally: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    evoType: "levelFriendship",
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "silvally",
    fullname: "pokemon: Silvally",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Silvally",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false,
    otherFormes: [
      "Silvally-Bug",
      "Silvally-Dark",
      "Silvally-Dragon",
      "Silvally-Electric",
      "Silvally-Fairy",
      "Silvally-Fighting",
      "Silvally-Fire",
      "Silvally-Flying",
      "Silvally-Ghost",
      "Silvally-Grass",
      "Silvally-Ground",
      "Silvally-Ice",
      "Silvally-Poison",
      "Silvally-Psychic",
      "Silvally-Rock",
      "Silvally-Steel",
      "Silvally-Water"
    ],
    formeOrder: [
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
    prevo: "Type: Null"
  },
  silvallybug: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Bug",
    baseSpecies: "Silvally",
    forme: "Bug",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Bug Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallybug",
    fullname: "pokemon: Silvally-Bug",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Bug Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallydark: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Dark",
    baseSpecies: "Silvally",
    forme: "Dark",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Dark Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallydark",
    fullname: "pokemon: Silvally-Dark",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Dark Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallydragon: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Dragon",
    baseSpecies: "Silvally",
    forme: "Dragon",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Dragon Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallydragon",
    fullname: "pokemon: Silvally-Dragon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Dragon Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyelectric: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Electric",
    baseSpecies: "Silvally",
    forme: "Electric",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Electric Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyelectric",
    fullname: "pokemon: Silvally-Electric",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Electric Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyfairy: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Fairy",
    baseSpecies: "Silvally",
    forme: "Fairy",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Fairy Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyfairy",
    fullname: "pokemon: Silvally-Fairy",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Fairy Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyfighting: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Fighting",
    baseSpecies: "Silvally",
    forme: "Fighting",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Fighting Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyfighting",
    fullname: "pokemon: Silvally-Fighting",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Fighting Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyfire: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Fire",
    baseSpecies: "Silvally",
    forme: "Fire",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Fire Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyfire",
    fullname: "pokemon: Silvally-Fire",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Fire Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyflying: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Flying",
    baseSpecies: "Silvally",
    forme: "Flying",
    types: [
      "Flying"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Flying Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyflying",
    fullname: "pokemon: Silvally-Flying",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Flying Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyghost: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Ghost",
    baseSpecies: "Silvally",
    forme: "Ghost",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Ghost Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyghost",
    fullname: "pokemon: Silvally-Ghost",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Ghost Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallygrass: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Grass",
    baseSpecies: "Silvally",
    forme: "Grass",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Grass Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallygrass",
    fullname: "pokemon: Silvally-Grass",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Grass Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyground: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Ground",
    baseSpecies: "Silvally",
    forme: "Ground",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Ground Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyground",
    fullname: "pokemon: Silvally-Ground",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Ground Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyice: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Ice",
    baseSpecies: "Silvally",
    forme: "Ice",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Ice Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyice",
    fullname: "pokemon: Silvally-Ice",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Ice Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallypoison: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Poison",
    baseSpecies: "Silvally",
    forme: "Poison",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Poison Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallypoison",
    fullname: "pokemon: Silvally-Poison",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Poison Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallypsychic: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Psychic",
    baseSpecies: "Silvally",
    forme: "Psychic",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Psychic Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallypsychic",
    fullname: "pokemon: Silvally-Psychic",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Psychic Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallyrock: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Rock",
    baseSpecies: "Silvally",
    forme: "Rock",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Rock Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallyrock",
    fullname: "pokemon: Silvally-Rock",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Rock Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallysteel: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Steel",
    baseSpecies: "Silvally",
    forme: "Steel",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Steel Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallysteel",
    fullname: "pokemon: Silvally-Steel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Steel Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  silvallywater: {
    tags: [
      "Sub-Legendary"
    ],
    num: 773,
    name: "Silvally-Water",
    baseSpecies: "Silvally",
    forme: "Water",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 95,
      atk: 95,
      def: 95,
      spa: 95,
      spd: 95,
      spe: 95
    },
    weightkg: 100.5,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Water Memory",
    changesFrom: "Silvally",
    tier: "Illegal",
    id: "silvallywater",
    fullname: "pokemon: Silvally-Water",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Water Memory"
    ],
    bst: 570,
    weighthg: 1005,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "RKS System"
    },
    nfe: false
  },
  minior: {
    tags: [],
    num: 774,
    name: "Minior",
    baseForme: "Red",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 100,
      def: 60,
      spa: 100,
      spd: 60,
      spe: 120
    },
    weightkg: 0.3,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "minior",
    fullname: "pokemon: Minior",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Minior",
    forme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 500,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Shields Down"
    },
    nfe: false,
    cosmeticFormes: [
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    otherFormes: [
      "Minior-Meteor"
    ],
    formeOrder: [
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ],
    formes: [
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior-Meteor",
      "Minior",
      "Minior-Orange",
      "Minior-Yellow",
      "Minior-Green",
      "Minior-Blue",
      "Minior-Indigo",
      "Minior-Violet"
    ]
  },
  miniormeteor: {
    tags: [],
    num: 774,
    name: "Minior-Meteor",
    baseSpecies: "Minior",
    forme: "Meteor",
    types: [
      "Rock",
      "Flying"
    ],
    baseStats: {
      hp: 60,
      atk: 60,
      def: 100,
      spa: 60,
      spd: 100,
      spe: 60
    },
    weightkg: 40,
    eggGroups: [
      "Mineral"
    ],
    requiredAbility: "Shields Down",
    battleOnly: "Minior",
    id: "miniormeteor",
    fullname: "pokemon: Minior-Meteor",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 440,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Minior",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Shields Down"
    },
    nfe: false
  },
  komala: {
    tags: [],
    num: 775,
    name: "Komala",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 65,
      atk: 115,
      def: 65,
      spa: 75,
      spd: 95,
      spe: 65
    },
    weightkg: 19.9,
    eggGroups: [
      "Field"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "komala",
    fullname: "pokemon: Komala",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Komala",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 480,
    weighthg: 199,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Comatose"
    },
    nfe: false
  },
  turtonator: {
    tags: [],
    num: 776,
    name: "Turtonator",
    types: [
      "Fire",
      "Dragon"
    ],
    baseStats: {
      hp: 60,
      atk: 78,
      def: 135,
      spa: 91,
      spd: 85,
      spe: 36
    },
    weightkg: 212,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "turtonator",
    fullname: "pokemon: Turtonator",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Turtonator",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 2120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shell Armor"
    },
    nfe: false
  },
  togedemaru: {
    tags: [],
    num: 777,
    name: "Togedemaru",
    types: [
      "Electric",
      "Steel"
    ],
    baseStats: {
      hp: 65,
      atk: 98,
      def: 63,
      spa: 40,
      spd: 73,
      spe: 96
    },
    weightkg: 3.3,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    tier: "Illegal",
    id: "togedemaru",
    fullname: "pokemon: Togedemaru",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Togedemaru",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 435,
    weighthg: 33,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Iron Barbs",
      "1": "Lightning Rod",
      H: "Sturdy"
    },
    nfe: false,
    otherFormes: [
      "Togedemaru-Totem"
    ],
    formeOrder: [
      "Togedemaru",
      "Togedemaru-Totem"
    ],
    formes: [
      "Togedemaru",
      "Togedemaru-Totem"
    ]
  },
  togedemarutotem: {
    tags: [],
    num: 777,
    name: "Togedemaru-Totem",
    baseSpecies: "Togedemaru",
    forme: "Totem",
    types: [
      "Electric",
      "Steel"
    ],
    baseStats: {
      hp: 65,
      atk: 98,
      def: 63,
      spa: 40,
      spd: 73,
      spe: 96
    },
    weightkg: 13,
    eggGroups: [
      "Field",
      "Fairy"
    ],
    id: "togedemarutotem",
    fullname: "pokemon: Togedemaru-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 435,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sturdy"
    },
    nfe: false
  },
  mimikyu: {
    tags: [],
    num: 778,
    name: "Mimikyu",
    baseForme: "Disguised",
    types: [
      "Ghost",
      "Fairy"
    ],
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    },
    weightkg: 0.7,
    eggGroups: [
      "Amorphous"
    ],
    tier: "UU",
    doublesTier: "DUU",
    id: "mimikyu",
    fullname: "pokemon: Mimikyu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Mimikyu",
    forme: "",
    canHatch: true,
    bst: 476,
    weighthg: 7,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Disguise"
    },
    nfe: false,
    otherFormes: [
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    formeOrder: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ],
    formes: [
      "Mimikyu",
      "Mimikyu-Busted",
      "Mimikyu-Totem",
      "Mimikyu-Busted-Totem"
    ]
  },
  mimikyubusted: {
    tags: [],
    num: 778,
    name: "Mimikyu-Busted",
    baseSpecies: "Mimikyu",
    forme: "Busted",
    types: [
      "Ghost",
      "Fairy"
    ],
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    },
    weightkg: 0.7,
    eggGroups: [
      "Amorphous"
    ],
    requiredAbility: "Disguise",
    battleOnly: "Mimikyu",
    id: "mimikyubusted",
    fullname: "pokemon: Mimikyu-Busted",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    tier: "UU",
    doublesTier: "DUU",
    canHatch: true,
    bst: 476,
    weighthg: 7,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Mimikyu",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Disguise"
    },
    nfe: false
  },
  mimikyubustedtotem: {
    tags: [],
    num: 778,
    name: "Mimikyu-Busted-Totem",
    baseSpecies: "Mimikyu",
    forme: "Busted-Totem",
    types: [
      "Ghost",
      "Fairy"
    ],
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    },
    weightkg: 2.8,
    eggGroups: [
      "Amorphous"
    ],
    requiredAbility: "Disguise",
    battleOnly: "Mimikyu-Totem",
    tier: "Illegal",
    id: "mimikyubustedtotem",
    fullname: "pokemon: Mimikyu-Busted-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 476,
    weighthg: 28,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Mimikyu-Totem",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Disguise"
    },
    nfe: false
  },
  mimikyutotem: {
    tags: [],
    num: 778,
    name: "Mimikyu-Totem",
    baseSpecies: "Mimikyu",
    forme: "Totem",
    types: [
      "Ghost",
      "Fairy"
    ],
    baseStats: {
      hp: 55,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96
    },
    weightkg: 2.8,
    eggGroups: [
      "Amorphous"
    ],
    tier: "Illegal",
    id: "mimikyutotem",
    fullname: "pokemon: Mimikyu-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 476,
    weighthg: 28,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Disguise"
    },
    nfe: false
  },
  bruxish: {
    tags: [],
    num: 779,
    name: "Bruxish",
    types: [
      "Water",
      "Psychic"
    ],
    baseStats: {
      hp: 68,
      atk: 105,
      def: 70,
      spa: 70,
      spd: 70,
      spe: 92
    },
    weightkg: 19,
    eggGroups: [
      "Water 2"
    ],
    tier: "NU",
    doublesTier: "(DUU)",
    id: "bruxish",
    fullname: "pokemon: Bruxish",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Bruxish",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 475,
    weighthg: 190,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Dazzling",
      "1": "Strong Jaw",
      H: "Wonder Skin"
    },
    nfe: false
  },
  drampa: {
    tags: [],
    num: 780,
    name: "Drampa",
    types: [
      "Normal",
      "Dragon"
    ],
    baseStats: {
      hp: 78,
      atk: 60,
      def: 85,
      spa: 135,
      spd: 91,
      spe: 36
    },
    weightkg: 185,
    eggGroups: [
      "Monster",
      "Dragon"
    ],
    tier: "Illegal",
    id: "drampa",
    fullname: "pokemon: Drampa",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Drampa",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 1850,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Berserk",
      "1": "Sap Sipper",
      H: "Cloud Nine"
    },
    nfe: false
  },
  dhelmise: {
    tags: [],
    num: 781,
    name: "Dhelmise",
    types: [
      "Ghost",
      "Grass"
    ],
    baseStats: {
      hp: 70,
      atk: 131,
      def: 100,
      spa: 86,
      spd: 90,
      spe: 40
    },
    weightkg: 210,
    eggGroups: [
      "Mineral"
    ],
    tier: "Illegal",
    id: "dhelmise",
    fullname: "pokemon: Dhelmise",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dhelmise",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 517,
    weighthg: 2100,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Steelworker"
    },
    nfe: false
  },
  jangmoo: {
    tags: [],
    num: 782,
    name: "Jangmo-o",
    types: [
      "Dragon"
    ],
    baseStats: {
      hp: 45,
      atk: 55,
      def: 65,
      spa: 45,
      spd: 45,
      spe: 45
    },
    weightkg: 29.7,
    eggGroups: [
      "Dragon"
    ],
    tier: "Illegal",
    id: "jangmoo",
    fullname: "pokemon: Jangmo-o",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Jangmo-o",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 300,
    weighthg: 297,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    evos: [
      "Hakamo-o"
    ],
    nfe: true
  },
  hakamoo: {
    tags: [],
    num: 783,
    name: "Hakamo-o",
    types: [
      "Dragon",
      "Fighting"
    ],
    baseStats: {
      hp: 55,
      atk: 75,
      def: 90,
      spa: 65,
      spd: 70,
      spe: 65
    },
    weightkg: 47,
    evoLevel: 35,
    eggGroups: [
      "Dragon"
    ],
    tier: "Illegal",
    id: "hakamoo",
    fullname: "pokemon: Hakamo-o",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Hakamo-o",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 470,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    evos: [
      "Kommo-o"
    ],
    nfe: true,
    prevo: "Jangmo-o"
  },
  kommoo: {
    tags: [],
    num: 784,
    name: "Kommo-o",
    types: [
      "Dragon",
      "Fighting"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 125,
      spa: 100,
      spd: 105,
      spe: 85
    },
    weightkg: 78.2,
    evoLevel: 45,
    eggGroups: [
      "Dragon"
    ],
    tier: "Illegal",
    id: "kommoo",
    fullname: "pokemon: Kommo-o",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kommo-o",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 782,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Bulletproof",
      "1": "Soundproof",
      H: "Overcoat"
    },
    nfe: false,
    otherFormes: [
      "Kommo-o-Totem"
    ],
    formeOrder: [
      "Kommo-o",
      "Kommo-o-Totem"
    ],
    formes: [
      "Kommo-o",
      "Kommo-o-Totem"
    ],
    prevo: "Hakamo-o"
  },
  kommoototem: {
    tags: [],
    num: 784,
    name: "Kommo-o-Totem",
    baseSpecies: "Kommo-o",
    forme: "Totem",
    types: [
      "Dragon",
      "Fighting"
    ],
    baseStats: {
      hp: 75,
      atk: 110,
      def: 125,
      spa: 100,
      spd: 105,
      spe: 85
    },
    weightkg: 207.5,
    eggGroups: [
      "Dragon"
    ],
    id: "kommoototem",
    fullname: "pokemon: Kommo-o-Totem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 600,
    weighthg: 2075,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Overcoat"
    },
    nfe: false
  },
  tapukoko: {
    tags: [
      "Sub-Legendary"
    ],
    num: 785,
    name: "Tapu Koko",
    types: [
      "Electric",
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 115,
      def: 85,
      spa: 95,
      spd: 75,
      spe: 130
    },
    weightkg: 20.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "tapukoko",
    fullname: "pokemon: Tapu Koko",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tapu Koko",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 205,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Electric Surge",
      H: "Telepathy"
    },
    nfe: false
  },
  tapulele: {
    tags: [
      "Sub-Legendary"
    ],
    num: 786,
    name: "Tapu Lele",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 75,
      spa: 130,
      spd: 115,
      spe: 95
    },
    weightkg: 18.6,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "tapulele",
    fullname: "pokemon: Tapu Lele",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tapu Lele",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 186,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Psychic Surge",
      H: "Telepathy"
    },
    nfe: false
  },
  tapubulu: {
    tags: [
      "Sub-Legendary"
    ],
    num: 787,
    name: "Tapu Bulu",
    types: [
      "Grass",
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 130,
      def: 115,
      spa: 85,
      spd: 95,
      spe: 75
    },
    weightkg: 45.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "tapubulu",
    fullname: "pokemon: Tapu Bulu",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tapu Bulu",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 455,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Grassy Surge",
      H: "Telepathy"
    },
    nfe: false
  },
  tapufini: {
    tags: [
      "Sub-Legendary"
    ],
    num: 788,
    name: "Tapu Fini",
    types: [
      "Water",
      "Fairy"
    ],
    baseStats: {
      hp: 70,
      atk: 75,
      def: 115,
      spa: 95,
      spd: 130,
      spe: 85
    },
    weightkg: 21.2,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "tapufini",
    fullname: "pokemon: Tapu Fini",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Tapu Fini",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 212,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Misty Surge",
      H: "Telepathy"
    },
    nfe: false
  },
  cosmog: {
    tags: [
      "Restricted Legendary"
    ],
    num: 789,
    name: "Cosmog",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 43,
      atk: 29,
      def: 31,
      spa: 29,
      spd: 31,
      spe: 37
    },
    weightkg: 0.1,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "cosmog",
    fullname: "pokemon: Cosmog",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cosmog",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 200,
    weighthg: 1,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Unaware"
    },
    evos: [
      "Cosmoem"
    ],
    nfe: true
  },
  cosmoem: {
    tags: [
      "Restricted Legendary"
    ],
    num: 790,
    name: "Cosmoem",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 43,
      atk: 29,
      def: 131,
      spa: 29,
      spd: 131,
      spe: 37
    },
    weightkg: 999.9,
    evoLevel: 43,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "cosmoem",
    fullname: "pokemon: Cosmoem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cosmoem",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 400,
    weighthg: 9999,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Sturdy"
    },
    evos: [
      "Solgaleo",
      "Lunala"
    ],
    nfe: true,
    prevo: "Cosmog"
  },
  solgaleo: {
    tags: [
      "Restricted Legendary"
    ],
    num: 791,
    name: "Solgaleo",
    types: [
      "Psychic",
      "Steel"
    ],
    baseStats: {
      hp: 137,
      atk: 137,
      def: 107,
      spa: 113,
      spd: 89,
      spe: 97
    },
    weightkg: 230,
    evoLevel: 53,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "solgaleo",
    fullname: "pokemon: Solgaleo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Solgaleo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 2300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Full Metal Body"
    },
    nfe: false,
    prevo: "Cosmoem"
  },
  lunala: {
    tags: [
      "Restricted Legendary"
    ],
    num: 792,
    name: "Lunala",
    types: [
      "Psychic",
      "Ghost"
    ],
    baseStats: {
      hp: 137,
      atk: 113,
      def: 89,
      spa: 137,
      spd: 107,
      spe: 97
    },
    weightkg: 120,
    evoLevel: 53,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "lunala",
    fullname: "pokemon: Lunala",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Lunala",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Shadow Shield"
    },
    nfe: false,
    prevo: "Cosmoem"
  },
  nihilego: {
    tags: [
      "Sub-Legendary"
    ],
    num: 793,
    name: "Nihilego",
    types: [
      "Rock",
      "Poison"
    ],
    baseStats: {
      hp: 109,
      atk: 53,
      def: 47,
      spa: 127,
      spd: 131,
      spe: 103
    },
    weightkg: 55.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "nihilego",
    fullname: "pokemon: Nihilego",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nihilego",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 555,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  buzzwole: {
    tags: [
      "Sub-Legendary"
    ],
    num: 794,
    name: "Buzzwole",
    types: [
      "Bug",
      "Fighting"
    ],
    baseStats: {
      hp: 107,
      atk: 139,
      def: 139,
      spa: 53,
      spd: 53,
      spe: 79
    },
    weightkg: 333.6,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "buzzwole",
    fullname: "pokemon: Buzzwole",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Buzzwole",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 3336,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  pheromosa: {
    tags: [
      "Sub-Legendary"
    ],
    num: 795,
    name: "Pheromosa",
    types: [
      "Bug",
      "Fighting"
    ],
    baseStats: {
      hp: 71,
      atk: 137,
      def: 37,
      spa: 137,
      spd: 37,
      spe: 151
    },
    weightkg: 25,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "pheromosa",
    fullname: "pokemon: Pheromosa",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Pheromosa",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 250,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  xurkitree: {
    tags: [
      "Sub-Legendary"
    ],
    num: 796,
    name: "Xurkitree",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 83,
      atk: 89,
      def: 71,
      spa: 173,
      spd: 71,
      spe: 83
    },
    weightkg: 100,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "xurkitree",
    fullname: "pokemon: Xurkitree",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Xurkitree",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 1000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  celesteela: {
    tags: [
      "Sub-Legendary"
    ],
    num: 797,
    name: "Celesteela",
    types: [
      "Steel",
      "Flying"
    ],
    baseStats: {
      hp: 97,
      atk: 101,
      def: 103,
      spa: 107,
      spd: 101,
      spe: 61
    },
    weightkg: 999.9,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "celesteela",
    fullname: "pokemon: Celesteela",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Celesteela",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 9999,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  kartana: {
    tags: [
      "Sub-Legendary"
    ],
    num: 798,
    name: "Kartana",
    types: [
      "Grass",
      "Steel"
    ],
    baseStats: {
      hp: 59,
      atk: 181,
      def: 131,
      spa: 59,
      spd: 31,
      spe: 109
    },
    weightkg: 0.1,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "kartana",
    fullname: "pokemon: Kartana",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Kartana",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 1,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  guzzlord: {
    tags: [
      "Sub-Legendary"
    ],
    num: 799,
    name: "Guzzlord",
    types: [
      "Dark",
      "Dragon"
    ],
    baseStats: {
      hp: 223,
      atk: 101,
      def: 53,
      spa: 97,
      spd: 53,
      spe: 43
    },
    weightkg: 888,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "guzzlord",
    fullname: "pokemon: Guzzlord",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Guzzlord",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 8880,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  necrozma: {
    tags: [
      "Restricted Legendary"
    ],
    num: 800,
    name: "Necrozma",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 97,
      atk: 107,
      def: 101,
      spa: 127,
      spd: 89,
      spe: 79
    },
    weightkg: 230,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "necrozma",
    fullname: "pokemon: Necrozma",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Necrozma",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 2300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Prism Armor"
    },
    nfe: false,
    otherFormes: [
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    formeOrder: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ],
    formes: [
      "Necrozma",
      "Necrozma-Dusk-Mane",
      "Necrozma-Dawn-Wings",
      "Necrozma-Ultra"
    ]
  },
  necrozmadawnwings: {
    tags: [
      "Restricted Legendary"
    ],
    num: 800,
    name: "Necrozma-Dawn-Wings",
    baseSpecies: "Necrozma",
    forme: "Dawn-Wings",
    types: [
      "Psychic",
      "Ghost"
    ],
    baseStats: {
      hp: 97,
      atk: 113,
      def: 109,
      spa: 157,
      spd: 127,
      spe: 77
    },
    weightkg: 350,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Necrozma",
    tier: "Illegal",
    id: "necrozmadawnwings",
    fullname: "pokemon: Necrozma-Dawn-Wings",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 3500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Prism Armor"
    },
    nfe: false
  },
  necrozmaduskmane: {
    tags: [
      "Restricted Legendary"
    ],
    num: 800,
    name: "Necrozma-Dusk-Mane",
    baseSpecies: "Necrozma",
    forme: "Dusk-Mane",
    types: [
      "Psychic",
      "Steel"
    ],
    baseStats: {
      hp: 97,
      atk: 157,
      def: 127,
      spa: 113,
      spd: 109,
      spe: 77
    },
    weightkg: 460,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Necrozma",
    tier: "Illegal",
    id: "necrozmaduskmane",
    fullname: "pokemon: Necrozma-Dusk-Mane",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 680,
    weighthg: 4600,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Prism Armor"
    },
    nfe: false
  },
  necrozmaultra: {
    tags: [
      "Restricted Legendary"
    ],
    num: 800,
    name: "Necrozma-Ultra",
    baseSpecies: "Necrozma",
    forme: "Ultra",
    types: [
      "Psychic",
      "Dragon"
    ],
    baseStats: {
      hp: 97,
      atk: 167,
      def: 97,
      spa: 167,
      spd: 97,
      spe: 129
    },
    weightkg: 230,
    eggGroups: [
      "Undiscovered"
    ],
    requiredItem: "Ultranecrozium Z",
    battleOnly: [
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane"
    ],
    tier: "Illegal",
    id: "necrozmaultra",
    fullname: "pokemon: Necrozma-Ultra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    requiredItems: [
      "Ultranecrozium Z"
    ],
    bst: 754,
    weighthg: 2300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Necrozma-Dawn-Wings",
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Neuroforce"
    },
    nfe: false
  },
  marshadow: {
    tags: [
      "Mythical"
    ],
    num: 802,
    name: "Marshadow",
    types: [
      "Fighting",
      "Ghost"
    ],
    baseStats: {
      hp: 90,
      atk: 125,
      def: 80,
      spa: 90,
      spd: 90,
      spe: 125
    },
    weightkg: 22.2,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "marshadow",
    fullname: "pokemon: Marshadow",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Marshadow",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 222,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Technician"
    },
    nfe: false
  },
  poipole: {
    tags: [
      "Sub-Legendary"
    ],
    num: 803,
    name: "Poipole",
    types: [
      "Poison"
    ],
    baseStats: {
      hp: 67,
      atk: 73,
      def: 67,
      spa: 73,
      spd: 67,
      spe: 73
    },
    weightkg: 1.8,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "poipole",
    fullname: "pokemon: Poipole",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Poipole",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 420,
    weighthg: 18,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    evos: [
      "Naganadel"
    ],
    nfe: true
  },
  naganadel: {
    tags: [
      "Sub-Legendary"
    ],
    num: 804,
    name: "Naganadel",
    types: [
      "Poison",
      "Dragon"
    ],
    baseStats: {
      hp: 73,
      atk: 73,
      def: 73,
      spa: 127,
      spd: 73,
      spe: 121
    },
    weightkg: 150,
    evoType: "levelMove",
    evoMove: "Dragon Pulse",
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "naganadel",
    fullname: "pokemon: Naganadel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Naganadel",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 540,
    weighthg: 1500,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false,
    prevo: "Poipole"
  },
  stakataka: {
    tags: [
      "Sub-Legendary"
    ],
    num: 805,
    name: "Stakataka",
    types: [
      "Rock",
      "Steel"
    ],
    baseStats: {
      hp: 61,
      atk: 131,
      def: 211,
      spa: 53,
      spd: 101,
      spe: 13
    },
    weightkg: 820,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "stakataka",
    fullname: "pokemon: Stakataka",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Stakataka",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 8200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  blacephalon: {
    tags: [
      "Sub-Legendary"
    ],
    num: 806,
    name: "Blacephalon",
    types: [
      "Fire",
      "Ghost"
    ],
    baseStats: {
      hp: 53,
      atk: 127,
      def: 53,
      spa: 151,
      spd: 79,
      spe: 107
    },
    weightkg: 13,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "blacephalon",
    fullname: "pokemon: Blacephalon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Blacephalon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 570,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Beast Boost"
    },
    nfe: false
  },
  zeraora: {
    tags: [
      "Mythical"
    ],
    num: 807,
    name: "Zeraora",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 88,
      atk: 112,
      def: 75,
      spa: 102,
      spd: 80,
      spe: 143
    },
    weightkg: 44.5,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "zeraora",
    fullname: "pokemon: Zeraora",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Zeraora",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 445,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Volt Absorb"
    },
    nfe: false
  },
  meltan: {
    tags: [
      "Mythical"
    ],
    num: 808,
    name: "Meltan",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 46,
      atk: 65,
      def: 65,
      spa: 55,
      spd: 35,
      spe: 34
    },
    weightkg: 8,
    eggGroups: [
      "Undiscovered"
    ],
    tier: "Illegal",
    id: "meltan",
    fullname: "pokemon: Meltan",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Meltan",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 300,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Magnet Pull"
    },
    nfe: false
  },
  melmetal: {
    tags: [
      "Mythical"
    ],
    num: 809,
    name: "Melmetal",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 135,
      atk: 143,
      def: 143,
      spa: 80,
      spd: 65,
      spe: 34
    },
    weightkg: 800,
    eggGroups: [
      "Undiscovered"
    ],
    canGigantamax: "G-Max Meltdown",
    tier: "Illegal",
    id: "melmetal",
    fullname: "pokemon: Melmetal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 7,
    shortDesc: "",
    desc: "",
    baseSpecies: "Melmetal",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 8000,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Iron Fist"
    },
    nfe: false
  },
  melmetalgmax: {
    tags: [
      "Mythical"
    ],
    num: 809,
    name: "Melmetal-Gmax",
    baseSpecies: "Melmetal",
    forme: "Gmax",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 135,
      atk: 143,
      def: 143,
      spa: 80,
      spd: 65,
      spe: 34
    },
    weightkg: 0,
    eggGroups: [
      "Undiscovered"
    ],
    changesFrom: "Melmetal",
    tier: "Illegal",
    id: "melmetalgmax",
    fullname: "pokemon: Melmetal-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 600,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Iron Fist"
    },
    nfe: false
  },
  rillaboomgmax: {
    tags: [],
    num: 812,
    name: "Rillaboom-Gmax",
    baseSpecies: "Rillaboom",
    forme: "Gmax",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 100,
      atk: 125,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 85
    },
    weightkg: 0,
    eggGroups: [
      "Field",
      "Grass"
    ],
    changesFrom: "Rillaboom",
    tier: "Illegal",
    id: "rillaboomgmax",
    fullname: "pokemon: Rillaboom-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 530,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Overgrow",
      H: "Grassy Surge"
    },
    nfe: false
  },
  scorbunny: {
    tags: [],
    num: 813,
    name: "Scorbunny",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 50,
      atk: 71,
      def: 40,
      spa: 40,
      spd: 40,
      spe: 69
    },
    weightkg: 4.5,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "LC",
    id: "scorbunny",
    fullname: "pokemon: Scorbunny",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Scorbunny",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 310,
    weighthg: 45,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    evos: [
      "Raboot"
    ],
    nfe: true
  },
  raboot: {
    tags: [],
    num: 814,
    name: "Raboot",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 65,
      atk: 86,
      def: 60,
      spa: 55,
      spd: 60,
      spe: 94
    },
    weightkg: 9,
    evoLevel: 16,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "raboot",
    fullname: "pokemon: Raboot",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Raboot",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 420,
    weighthg: 90,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    evos: [
      "Cinderace"
    ],
    nfe: true,
    prevo: "Scorbunny"
  },
  cinderace: {
    tags: [],
    num: 815,
    name: "Cinderace",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 80,
      atk: 116,
      def: 75,
      spa: 65,
      spd: 75,
      spe: 119
    },
    weightkg: 33,
    evoLevel: 35,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    canGigantamax: "G-Max Fireball",
    tier: "OU",
    doublesTier: "(DUU)",
    id: "cinderace",
    fullname: "pokemon: Cinderace",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Cinderace",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 530,
    weighthg: 330,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    nfe: false,
    prevo: "Raboot"
  },
  cinderacegmax: {
    tags: [],
    num: 815,
    name: "Cinderace-Gmax",
    baseSpecies: "Cinderace",
    forme: "Gmax",
    types: [
      "Fire"
    ],
    baseStats: {
      hp: 80,
      atk: 116,
      def: 75,
      spa: 65,
      spd: 75,
      spe: 119
    },
    weightkg: 0,
    eggGroups: [
      "Field",
      "Human-Like"
    ],
    changesFrom: "Cinderace",
    tier: "Illegal",
    id: "cinderacegmax",
    fullname: "pokemon: Cinderace-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 530,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Blaze",
      H: "Libero"
    },
    nfe: false
  },
  inteleongmax: {
    tags: [],
    num: 818,
    name: "Inteleon-Gmax",
    baseSpecies: "Inteleon",
    forme: "Gmax",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 65,
      spa: 125,
      spd: 65,
      spe: 120
    },
    weightkg: 0,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    changesFrom: "Inteleon",
    tier: "Illegal",
    id: "inteleongmax",
    fullname: "pokemon: Inteleon-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 530,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.875,
      F: 0.125
    },
    abilities: {
      "0": "Torrent",
      H: "Sniper"
    },
    nfe: false
  },
  skwovet: {
    tags: [],
    num: 819,
    name: "Skwovet",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 70,
      atk: 55,
      def: 55,
      spa: 35,
      spd: 35,
      spe: 25
    },
    weightkg: 2.5,
    eggGroups: [
      "Field"
    ],
    tier: "LC",
    id: "skwovet",
    fullname: "pokemon: Skwovet",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Skwovet",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 275,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cheek Pouch",
      H: "Gluttony"
    },
    evos: [
      "Greedent"
    ],
    nfe: true
  },
  greedent: {
    tags: [],
    num: 820,
    name: "Greedent",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 120,
      atk: 95,
      def: 95,
      spa: 55,
      spd: 75,
      spe: 20
    },
    weightkg: 6,
    evoLevel: 24,
    eggGroups: [
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "greedent",
    fullname: "pokemon: Greedent",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Greedent",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 460,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cheek Pouch",
      H: "Gluttony"
    },
    nfe: false,
    prevo: "Skwovet"
  },
  rookidee: {
    tags: [],
    num: 821,
    name: "Rookidee",
    types: [
      "Flying"
    ],
    baseStats: {
      hp: 38,
      atk: 47,
      def: 35,
      spa: 33,
      spd: 35,
      spe: 57
    },
    weightkg: 1.8,
    eggGroups: [
      "Flying"
    ],
    tier: "LC",
    id: "rookidee",
    fullname: "pokemon: Rookidee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rookidee",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 245,
    weighthg: 18,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Unnerve",
      H: "Big Pecks"
    },
    evos: [
      "Corvisquire"
    ],
    nfe: true
  },
  corvisquire: {
    tags: [],
    num: 822,
    name: "Corvisquire",
    types: [
      "Flying"
    ],
    baseStats: {
      hp: 68,
      atk: 67,
      def: 55,
      spa: 43,
      spd: 55,
      spe: 77
    },
    weightkg: 16,
    evoLevel: 18,
    eggGroups: [
      "Flying"
    ],
    tier: "NFE",
    id: "corvisquire",
    fullname: "pokemon: Corvisquire",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Corvisquire",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 365,
    weighthg: 160,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Keen Eye",
      "1": "Unnerve",
      H: "Big Pecks"
    },
    evos: [
      "Corviknight"
    ],
    nfe: true,
    prevo: "Rookidee"
  },
  corviknight: {
    tags: [],
    num: 823,
    name: "Corviknight",
    types: [
      "Flying",
      "Steel"
    ],
    baseStats: {
      hp: 98,
      atk: 87,
      def: 105,
      spa: 53,
      spd: 85,
      spe: 67
    },
    weightkg: 75,
    evoLevel: 38,
    eggGroups: [
      "Flying"
    ],
    canGigantamax: "G-Max Wind Rage",
    tier: "OU",
    doublesTier: "(DUU)",
    id: "corviknight",
    fullname: "pokemon: Corviknight",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Corviknight",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 495,
    weighthg: 750,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      "1": "Unnerve",
      H: "Mirror Armor"
    },
    nfe: false,
    prevo: "Corvisquire"
  },
  corviknightgmax: {
    tags: [],
    num: 823,
    name: "Corviknight-Gmax",
    baseSpecies: "Corviknight",
    forme: "Gmax",
    types: [
      "Flying",
      "Steel"
    ],
    baseStats: {
      hp: 98,
      atk: 87,
      def: 105,
      spa: 53,
      spd: 85,
      spe: 67
    },
    weightkg: 0,
    eggGroups: [
      "Flying"
    ],
    changesFrom: "Corviknight",
    tier: "Illegal",
    id: "corviknightgmax",
    fullname: "pokemon: Corviknight-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 495,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Pressure",
      "1": "Unnerve",
      H: "Mirror Armor"
    },
    nfe: false
  },
  blipbug: {
    tags: [],
    num: 824,
    name: "Blipbug",
    types: [
      "Bug"
    ],
    baseStats: {
      hp: 25,
      atk: 20,
      def: 20,
      spa: 25,
      spd: 45,
      spe: 45
    },
    weightkg: 8,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "blipbug",
    fullname: "pokemon: Blipbug",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Blipbug",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 180,
    weighthg: 80,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Compound Eyes",
      H: "Telepathy"
    },
    evos: [
      "Dottler"
    ],
    nfe: true
  },
  dottler: {
    tags: [],
    num: 825,
    name: "Dottler",
    types: [
      "Bug",
      "Psychic"
    ],
    baseStats: {
      hp: 50,
      atk: 35,
      def: 80,
      spa: 50,
      spd: 90,
      spe: 30
    },
    weightkg: 19.5,
    evoLevel: 10,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "dottler",
    fullname: "pokemon: Dottler",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dottler",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 335,
    weighthg: 195,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Compound Eyes",
      H: "Telepathy"
    },
    evos: [
      "Orbeetle"
    ],
    nfe: true,
    prevo: "Blipbug"
  },
  orbeetle: {
    tags: [],
    num: 826,
    name: "Orbeetle",
    types: [
      "Bug",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 110,
      spa: 80,
      spd: 120,
      spe: 90
    },
    weightkg: 40.8,
    evoLevel: 30,
    eggGroups: [
      "Bug"
    ],
    canGigantamax: "G-Max Gravitas",
    tier: "Illegal",
    id: "orbeetle",
    fullname: "pokemon: Orbeetle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Orbeetle",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 505,
    weighthg: 408,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Frisk",
      H: "Telepathy"
    },
    nfe: false,
    prevo: "Dottler"
  },
  orbeetlegmax: {
    tags: [],
    num: 826,
    name: "Orbeetle-Gmax",
    baseSpecies: "Orbeetle",
    forme: "Gmax",
    types: [
      "Bug",
      "Psychic"
    ],
    baseStats: {
      hp: 60,
      atk: 45,
      def: 110,
      spa: 80,
      spd: 120,
      spe: 90
    },
    weightkg: 0,
    eggGroups: [
      "Bug"
    ],
    changesFrom: "Orbeetle",
    tier: "Illegal",
    id: "orbeetlegmax",
    fullname: "pokemon: Orbeetle-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 505,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swarm",
      "1": "Frisk",
      H: "Telepathy"
    },
    nfe: false
  },
  nickit: {
    tags: [],
    num: 827,
    name: "Nickit",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 40,
      atk: 28,
      def: 28,
      spa: 47,
      spd: 52,
      spe: 50
    },
    weightkg: 8.9,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "nickit",
    fullname: "pokemon: Nickit",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Nickit",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 245,
    weighthg: 89,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Unburden",
      H: "Stakeout"
    },
    evos: [
      "Thievul"
    ],
    nfe: true
  },
  thievul: {
    tags: [],
    num: 828,
    name: "Thievul",
    types: [
      "Dark"
    ],
    baseStats: {
      hp: 70,
      atk: 58,
      def: 58,
      spa: 87,
      spd: 92,
      spe: 90
    },
    weightkg: 19.9,
    evoLevel: 18,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "thievul",
    fullname: "pokemon: Thievul",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Thievul",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 455,
    weighthg: 199,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Run Away",
      "1": "Unburden",
      H: "Stakeout"
    },
    nfe: false,
    prevo: "Nickit"
  },
  gossifleur: {
    tags: [],
    num: 829,
    name: "Gossifleur",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 60,
      spa: 40,
      spd: 60,
      spe: 10
    },
    weightkg: 2.2,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "gossifleur",
    fullname: "pokemon: Gossifleur",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Gossifleur",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 250,
    weighthg: 22,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cotton Down",
      "1": "Regenerator",
      H: "Effect Spore"
    },
    evos: [
      "Eldegoss"
    ],
    nfe: true
  },
  eldegoss: {
    tags: [],
    num: 830,
    name: "Eldegoss",
    types: [
      "Grass"
    ],
    baseStats: {
      hp: 60,
      atk: 50,
      def: 90,
      spa: 80,
      spd: 120,
      spe: 60
    },
    weightkg: 2.5,
    evoLevel: 20,
    eggGroups: [
      "Grass"
    ],
    tier: "Illegal",
    id: "eldegoss",
    fullname: "pokemon: Eldegoss",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Eldegoss",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 460,
    weighthg: 25,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Cotton Down",
      "1": "Regenerator",
      H: "Effect Spore"
    },
    nfe: false,
    prevo: "Gossifleur"
  },
  wooloo: {
    tags: [],
    num: 831,
    name: "Wooloo",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 42,
      atk: 40,
      def: 55,
      spa: 40,
      spd: 45,
      spe: 48
    },
    weightkg: 6,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "wooloo",
    fullname: "pokemon: Wooloo",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Wooloo",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 270,
    weighthg: 60,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Fluffy",
      "1": "Run Away",
      H: "Bulletproof"
    },
    evos: [
      "Dubwool"
    ],
    nfe: true
  },
  dubwool: {
    tags: [],
    num: 832,
    name: "Dubwool",
    types: [
      "Normal"
    ],
    baseStats: {
      hp: 72,
      atk: 80,
      def: 100,
      spa: 60,
      spd: 90,
      spe: 88
    },
    weightkg: 43,
    evoLevel: 24,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "dubwool",
    fullname: "pokemon: Dubwool",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Dubwool",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 430,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Fluffy",
      "1": "Steadfast",
      H: "Bulletproof"
    },
    nfe: false,
    prevo: "Wooloo"
  },
  chewtle: {
    tags: [],
    num: 833,
    name: "Chewtle",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 50,
      atk: 64,
      def: 50,
      spa: 38,
      spd: 38,
      spe: 44
    },
    weightkg: 8.5,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    tier: "LC",
    id: "chewtle",
    fullname: "pokemon: Chewtle",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Chewtle",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 284,
    weighthg: 85,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    evos: [
      "Drednaw"
    ],
    nfe: true
  },
  drednaw: {
    tags: [],
    num: 834,
    name: "Drednaw",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 90,
      atk: 115,
      def: 90,
      spa: 48,
      spd: 68,
      spe: 74
    },
    weightkg: 115.5,
    evoLevel: 22,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    canGigantamax: "G-Max Stonesurge",
    tier: "RUBL",
    doublesTier: "(DUU)",
    id: "drednaw",
    fullname: "pokemon: Drednaw",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Drednaw",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 485,
    weighthg: 1155,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    nfe: false,
    prevo: "Chewtle"
  },
  drednawgmax: {
    tags: [],
    num: 834,
    name: "Drednaw-Gmax",
    baseSpecies: "Drednaw",
    forme: "Gmax",
    types: [
      "Water",
      "Rock"
    ],
    baseStats: {
      hp: 90,
      atk: 115,
      def: 90,
      spa: 48,
      spd: 68,
      spe: 74
    },
    weightkg: 0,
    eggGroups: [
      "Monster",
      "Water 1"
    ],
    changesFrom: "Drednaw",
    tier: "Illegal",
    id: "drednawgmax",
    fullname: "pokemon: Drednaw-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Strong Jaw",
      "1": "Shell Armor",
      H: "Swift Swim"
    },
    nfe: false
  },
  yamper: {
    tags: [],
    num: 835,
    name: "Yamper",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 59,
      atk: 45,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 26
    },
    weightkg: 13.5,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "yamper",
    fullname: "pokemon: Yamper",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Yamper",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 270,
    weighthg: 135,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ball Fetch",
      H: "Rattled"
    },
    evos: [
      "Boltund"
    ],
    nfe: true
  },
  boltund: {
    tags: [],
    num: 836,
    name: "Boltund",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 69,
      atk: 90,
      def: 60,
      spa: 90,
      spd: 60,
      spe: 121
    },
    weightkg: 34,
    evoLevel: 25,
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "boltund",
    fullname: "pokemon: Boltund",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Boltund",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 490,
    weighthg: 340,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Strong Jaw",
      H: "Competitive"
    },
    nfe: false,
    prevo: "Yamper"
  },
  rolycoly: {
    tags: [],
    num: 837,
    name: "Rolycoly",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 30,
      atk: 40,
      def: 50,
      spa: 40,
      spd: 50,
      spe: 30
    },
    weightkg: 12,
    eggGroups: [
      "Mineral"
    ],
    tier: "LC",
    id: "rolycoly",
    fullname: "pokemon: Rolycoly",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Rolycoly",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 240,
    weighthg: 120,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steam Engine",
      "1": "Heatproof",
      H: "Flash Fire"
    },
    evos: [
      "Carkol"
    ],
    nfe: true
  },
  carkol: {
    tags: [],
    num: 838,
    name: "Carkol",
    types: [
      "Rock",
      "Fire"
    ],
    baseStats: {
      hp: 80,
      atk: 60,
      def: 90,
      spa: 60,
      spd: 70,
      spe: 50
    },
    weightkg: 78,
    evoLevel: 18,
    eggGroups: [
      "Mineral"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "carkol",
    fullname: "pokemon: Carkol",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Carkol",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 410,
    weighthg: 780,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    evos: [
      "Coalossal"
    ],
    nfe: true,
    prevo: "Rolycoly"
  },
  coalossal: {
    tags: [],
    num: 839,
    name: "Coalossal",
    types: [
      "Rock",
      "Fire"
    ],
    baseStats: {
      hp: 110,
      atk: 80,
      def: 120,
      spa: 80,
      spd: 90,
      spe: 30
    },
    weightkg: 310.5,
    evoLevel: 34,
    eggGroups: [
      "Mineral"
    ],
    canGigantamax: "G-Max Volcalith",
    tier: "RU",
    doublesTier: "(DUU)",
    id: "coalossal",
    fullname: "pokemon: Coalossal",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Coalossal",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 3105,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    nfe: false,
    prevo: "Carkol"
  },
  coalossalgmax: {
    tags: [],
    num: 839,
    name: "Coalossal-Gmax",
    baseSpecies: "Coalossal",
    forme: "Gmax",
    types: [
      "Rock",
      "Fire"
    ],
    baseStats: {
      hp: 110,
      atk: 80,
      def: 120,
      spa: 80,
      spd: 90,
      spe: 30
    },
    weightkg: 0,
    eggGroups: [
      "Mineral"
    ],
    changesFrom: "Coalossal",
    tier: "Illegal",
    id: "coalossalgmax",
    fullname: "pokemon: Coalossal-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 510,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steam Engine",
      "1": "Flame Body",
      H: "Flash Fire"
    },
    nfe: false
  },
  applin: {
    tags: [],
    num: 840,
    name: "Applin",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 40,
      atk: 40,
      def: 80,
      spa: 40,
      spd: 40,
      spe: 20
    },
    weightkg: 0.5,
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    tier: "LC",
    id: "applin",
    fullname: "pokemon: Applin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Applin",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 260,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Bulletproof"
    },
    evos: [
      "Flapple",
      "Appletun"
    ],
    nfe: true
  },
  flapple: {
    tags: [],
    num: 841,
    name: "Flapple",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 95,
      spd: 60,
      spe: 70
    },
    weightkg: 1,
    evoType: "useItem",
    evoItem: "Tart Apple",
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    canGigantamax: "G-Max Tartness",
    tier: "PU",
    doublesTier: "(DUU)",
    id: "flapple",
    fullname: "pokemon: Flapple",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Flapple",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 485,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Hustle"
    },
    nfe: false,
    prevo: "Applin"
  },
  flapplegmax: {
    tags: [],
    num: 841,
    name: "Flapple-Gmax",
    baseSpecies: "Flapple",
    forme: "Gmax",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 80,
      spa: 95,
      spd: 60,
      spe: 70
    },
    weightkg: 0,
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    changesFrom: "Flapple",
    tier: "Illegal",
    id: "flapplegmax",
    fullname: "pokemon: Flapple-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Hustle"
    },
    nfe: false
  },
  appletun: {
    tags: [],
    num: 842,
    name: "Appletun",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 110,
      atk: 85,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 30
    },
    weightkg: 13,
    evoType: "useItem",
    evoItem: "Sweet Apple",
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    canGigantamax: "G-Max Sweetness",
    tier: "NU",
    doublesTier: "(DUU)",
    id: "appletun",
    fullname: "pokemon: Appletun",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Appletun",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 485,
    weighthg: 130,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    nfe: false,
    prevo: "Applin"
  },
  appletungmax: {
    tags: [],
    num: 842,
    name: "Appletun-Gmax",
    baseSpecies: "Appletun",
    forme: "Gmax",
    types: [
      "Grass",
      "Dragon"
    ],
    baseStats: {
      hp: 110,
      atk: 85,
      def: 80,
      spa: 100,
      spd: 80,
      spe: 30
    },
    weightkg: 0,
    eggGroups: [
      "Grass",
      "Dragon"
    ],
    changesFrom: "Appletun",
    tier: "Illegal",
    id: "appletungmax",
    fullname: "pokemon: Appletun-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 485,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ripen",
      "1": "Gluttony",
      H: "Thick Fat"
    },
    nfe: false
  },
  silicobra: {
    tags: [],
    num: 843,
    name: "Silicobra",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 52,
      atk: 57,
      def: 75,
      spa: 35,
      spd: 50,
      spe: 46
    },
    weightkg: 7.6,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    tier: "LC",
    id: "silicobra",
    fullname: "pokemon: Silicobra",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Silicobra",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 315,
    weighthg: 76,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    evos: [
      "Sandaconda"
    ],
    nfe: true
  },
  sandaconda: {
    tags: [],
    num: 844,
    name: "Sandaconda",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 72,
      atk: 107,
      def: 125,
      spa: 65,
      spd: 70,
      spe: 71
    },
    weightkg: 65.5,
    evoLevel: 36,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    canGigantamax: "G-Max Sandblast",
    tier: "NU",
    doublesTier: "(DUU)",
    id: "sandaconda",
    fullname: "pokemon: Sandaconda",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sandaconda",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 655,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    nfe: false,
    prevo: "Silicobra"
  },
  sandacondagmax: {
    tags: [],
    num: 844,
    name: "Sandaconda-Gmax",
    baseSpecies: "Sandaconda",
    forme: "Gmax",
    types: [
      "Ground"
    ],
    baseStats: {
      hp: 72,
      atk: 107,
      def: 125,
      spa: 65,
      spd: 70,
      spe: 71
    },
    weightkg: 0,
    eggGroups: [
      "Field",
      "Dragon"
    ],
    changesFrom: "Sandaconda",
    tier: "Illegal",
    id: "sandacondagmax",
    fullname: "pokemon: Sandaconda-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 510,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Sand Spit",
      "1": "Shed Skin",
      H: "Sand Veil"
    },
    nfe: false
  },
  cramorant: {
    tags: [],
    num: 845,
    name: "Cramorant",
    types: [
      "Flying",
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    },
    weightkg: 18,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    tier: "Illegal",
    id: "cramorant",
    fullname: "pokemon: Cramorant",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cramorant",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 475,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gulp Missile"
    },
    nfe: false,
    otherFormes: [
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ],
    formeOrder: [
      "Cramorant",
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ],
    formes: [
      "Cramorant",
      "Cramorant-Gulping",
      "Cramorant-Gorging"
    ]
  },
  cramorantgorging: {
    tags: [],
    num: 845,
    name: "Cramorant-Gorging",
    baseSpecies: "Cramorant",
    forme: "Gorging",
    types: [
      "Flying",
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    },
    weightkg: 18,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    requiredAbility: "Gulp Missile",
    battleOnly: "Cramorant",
    id: "cramorantgorging",
    fullname: "pokemon: Cramorant-Gorging",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 475,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Cramorant",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gulp Missile"
    },
    nfe: false
  },
  cramorantgulping: {
    tags: [],
    num: 845,
    name: "Cramorant-Gulping",
    baseSpecies: "Cramorant",
    forme: "Gulping",
    types: [
      "Flying",
      "Water"
    ],
    baseStats: {
      hp: 70,
      atk: 85,
      def: 55,
      spa: 85,
      spd: 95,
      spe: 85
    },
    weightkg: 18,
    eggGroups: [
      "Water 1",
      "Flying"
    ],
    requiredAbility: "Gulp Missile",
    battleOnly: "Cramorant",
    id: "cramorantgulping",
    fullname: "pokemon: Cramorant-Gulping",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    tier: "Illegal",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 475,
    weighthg: 180,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Cramorant",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Gulp Missile"
    },
    nfe: false
  },
  arrokuda: {
    tags: [],
    num: 846,
    name: "Arrokuda",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 41,
      atk: 63,
      def: 40,
      spa: 40,
      spd: 30,
      spe: 66
    },
    weightkg: 1,
    eggGroups: [
      "Water 2"
    ],
    tier: "LC",
    id: "arrokuda",
    fullname: "pokemon: Arrokuda",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Arrokuda",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 280,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Propeller Tail"
    },
    evos: [
      "Barraskewda"
    ],
    nfe: true
  },
  barraskewda: {
    tags: [],
    num: 847,
    name: "Barraskewda",
    types: [
      "Water"
    ],
    baseStats: {
      hp: 61,
      atk: 123,
      def: 60,
      spa: 60,
      spd: 50,
      spe: 136
    },
    weightkg: 30,
    evoLevel: 26,
    eggGroups: [
      "Water 2"
    ],
    tier: "NUBL",
    doublesTier: "(DUU)",
    id: "barraskewda",
    fullname: "pokemon: Barraskewda",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Barraskewda",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 490,
    weighthg: 300,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Swift Swim",
      H: "Propeller Tail"
    },
    nfe: false,
    prevo: "Arrokuda"
  },
  toxel: {
    tags: [],
    num: 848,
    name: "Toxel",
    types: [
      "Electric",
      "Poison"
    ],
    baseStats: {
      hp: 40,
      atk: 38,
      def: 35,
      spa: 54,
      spd: 35,
      spe: 40
    },
    weightkg: 11,
    eggGroups: [
      "Undiscovered"
    ],
    canHatch: true,
    tier: "LC",
    id: "toxel",
    fullname: "pokemon: Toxel",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Toxel",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    bst: 242,
    weighthg: 110,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Rattled",
      "1": "Static",
      H: "Klutz"
    },
    evos: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    nfe: true
  },
  toxtricity: {
    tags: [],
    num: 849,
    name: "Toxtricity",
    baseForme: "Amped",
    types: [
      "Electric",
      "Poison"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    },
    weightkg: 40,
    evoLevel: 30,
    eggGroups: [
      "Human-Like"
    ],
    canGigantamax: "G-Max Stun Shock",
    tier: "RUBL",
    doublesTier: "(DUU)",
    id: "toxtricity",
    fullname: "pokemon: Toxtricity",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Toxtricity",
    forme: "",
    canHatch: false,
    bst: 502,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Punk Rock",
      "1": "Plus",
      H: "Technician"
    },
    nfe: false,
    otherFormes: [
      "Toxtricity-Low-Key"
    ],
    formeOrder: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    formes: [
      "Toxtricity",
      "Toxtricity-Low-Key"
    ],
    prevo: "Toxel"
  },
  toxtricitygmax: {
    tags: [],
    num: 849,
    name: "Toxtricity-Gmax",
    baseSpecies: "Toxtricity",
    forme: "Gmax",
    types: [
      "Electric",
      "Poison"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    },
    weightkg: 0,
    eggGroups: [
      "Human-Like"
    ],
    changesFrom: "Toxtricity",
    tier: "Illegal",
    id: "toxtricitygmax",
    fullname: "pokemon: Toxtricity-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 502,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Punk Rock",
      "1": "Plus",
      H: "Technician"
    },
    nfe: false
  },
  toxtricitylowkey: {
    tags: [],
    num: 849,
    name: "Toxtricity-Low-Key",
    baseSpecies: "Toxtricity",
    forme: "Low-Key",
    types: [
      "Electric",
      "Poison"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    },
    weightkg: 40,
    evoLevel: 30,
    eggGroups: [
      "Human-Like"
    ],
    canGigantamax: "G-Max Stun Shock",
    id: "toxtricitylowkey",
    fullname: "pokemon: Toxtricity-Low-Key",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    tier: "RUBL",
    doublesTier: "(DUU)",
    canHatch: false,
    bst: 502,
    weighthg: 400,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Punk Rock",
      "1": "Minus",
      H: "Technician"
    },
    nfe: false,
    prevo: "Toxel"
  },
  toxtricitylowkeygmax: {
    tags: [],
    num: 849,
    name: "Toxtricity-Low-Key-Gmax",
    baseSpecies: "Toxtricity",
    forme: "Low-Key-Gmax",
    types: [
      "Electric",
      "Poison"
    ],
    baseStats: {
      hp: 75,
      atk: 98,
      def: 70,
      spa: 114,
      spd: 70,
      spe: 75
    },
    weightkg: 0,
    eggGroups: [
      "Human-Like"
    ],
    battleOnly: "Toxtricity-Low-Key",
    changesFrom: "Toxtricity-Low-Key",
    tier: "Illegal",
    id: "toxtricitylowkeygmax",
    fullname: "pokemon: Toxtricity-Low-Key-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 502,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Punk Rock",
      "1": "Minus",
      H: "Technician"
    },
    nfe: false
  },
  sizzlipede: {
    tags: [],
    num: 850,
    name: "Sizzlipede",
    types: [
      "Fire",
      "Bug"
    ],
    baseStats: {
      hp: 50,
      atk: 65,
      def: 45,
      spa: 50,
      spd: 50,
      spe: 45
    },
    weightkg: 1,
    eggGroups: [
      "Bug"
    ],
    tier: "Illegal",
    id: "sizzlipede",
    fullname: "pokemon: Sizzlipede",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sizzlipede",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 305,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    evos: [
      "Centiskorch"
    ],
    nfe: true
  },
  centiskorch: {
    tags: [],
    num: 851,
    name: "Centiskorch",
    types: [
      "Fire",
      "Bug"
    ],
    baseStats: {
      hp: 100,
      atk: 115,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 65
    },
    weightkg: 120,
    evoLevel: 28,
    eggGroups: [
      "Bug"
    ],
    canGigantamax: "G-Max Centiferno",
    tier: "Illegal",
    id: "centiskorch",
    fullname: "pokemon: Centiskorch",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Centiskorch",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 525,
    weighthg: 1200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    nfe: false,
    prevo: "Sizzlipede"
  },
  centiskorchgmax: {
    tags: [],
    num: 851,
    name: "Centiskorch-Gmax",
    baseSpecies: "Centiskorch",
    forme: "Gmax",
    types: [
      "Fire",
      "Bug"
    ],
    baseStats: {
      hp: 100,
      atk: 115,
      def: 65,
      spa: 90,
      spd: 90,
      spe: 65
    },
    weightkg: 0,
    eggGroups: [
      "Bug"
    ],
    changesFrom: "Centiskorch",
    tier: "Illegal",
    id: "centiskorchgmax",
    fullname: "pokemon: Centiskorch-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 525,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Flash Fire",
      "1": "White Smoke",
      H: "Flame Body"
    },
    nfe: false
  },
  clobbopus: {
    tags: [],
    num: 852,
    name: "Clobbopus",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 50,
      atk: 68,
      def: 60,
      spa: 50,
      spd: 50,
      spe: 32
    },
    weightkg: 4,
    eggGroups: [
      "Water 1",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "clobbopus",
    fullname: "pokemon: Clobbopus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Clobbopus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 310,
    weighthg: 40,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      H: "Technician"
    },
    evos: [
      "Grapploct"
    ],
    nfe: true
  },
  grapploct: {
    tags: [],
    num: 853,
    name: "Grapploct",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 80,
      atk: 118,
      def: 90,
      spa: 70,
      spd: 80,
      spe: 42
    },
    weightkg: 39,
    evoType: "levelMove",
    evoMove: "Taunt",
    eggGroups: [
      "Water 1",
      "Human-Like"
    ],
    tier: "Illegal",
    id: "grapploct",
    fullname: "pokemon: Grapploct",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Grapploct",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 480,
    weighthg: 390,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Limber",
      H: "Technician"
    },
    nfe: false,
    prevo: "Clobbopus"
  },
  sinistea: {
    tags: [],
    num: 854,
    name: "Sinistea",
    baseForme: "Phony",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    },
    weightkg: 0.2,
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "LC",
    id: "sinistea",
    fullname: "pokemon: Sinistea",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Sinistea",
    forme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 308,
    weighthg: 2,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    evos: [
      "Polteageist"
    ],
    nfe: true,
    otherFormes: [
      "Sinistea-Antique"
    ],
    formeOrder: [
      "Sinistea",
      "Sinistea-Antique"
    ],
    formes: [
      "Sinistea",
      "Sinistea-Antique"
    ]
  },
  sinisteaantique: {
    tags: [],
    num: 854,
    name: "Sinistea-Antique",
    baseSpecies: "Sinistea",
    forme: "Antique",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 40,
      atk: 45,
      def: 45,
      spa: 74,
      spd: 54,
      spe: 50
    },
    weightkg: 0.2,
    eggGroups: [
      "Undiscovered"
    ],
    id: "sinisteaantique",
    fullname: "pokemon: Sinistea-Antique",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    tier: "LC",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 308,
    weighthg: 2,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    evos: [
      "Polteageist-Antique"
    ],
    nfe: true
  },
  polteageist: {
    tags: [],
    num: 855,
    name: "Polteageist",
    baseForme: "Phony",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 65,
      spa: 134,
      spd: 114,
      spe: 70
    },
    weightkg: 0.4,
    evoType: "useItem",
    evoItem: "Cracked Pot",
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "UU",
    doublesTier: "(DUU)",
    id: "polteageist",
    fullname: "pokemon: Polteageist",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Polteageist",
    forme: "",
    canHatch: false,
    bst: 508,
    weighthg: 4,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    nfe: false,
    otherFormes: [
      "Polteageist-Antique"
    ],
    formeOrder: [
      "Polteageist",
      "Polteageist-Antique"
    ],
    formes: [
      "Polteageist",
      "Polteageist-Antique"
    ],
    prevo: "Sinistea"
  },
  polteageistantique: {
    tags: [],
    num: 855,
    name: "Polteageist-Antique",
    baseSpecies: "Polteageist",
    forme: "Antique",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 65,
      spa: 134,
      spd: 114,
      spe: 70
    },
    weightkg: 0.4,
    evoType: "useItem",
    evoItem: "Chipped Pot",
    eggGroups: [
      "Undiscovered"
    ],
    id: "polteageistantique",
    fullname: "pokemon: Polteageist-Antique",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    tier: "UU",
    doublesTier: "(DUU)",
    canHatch: false,
    bst: 508,
    weighthg: 4,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Weak Armor",
      H: "Cursed Body"
    },
    nfe: false,
    prevo: "Sinistea-Antique"
  },
  hatenna: {
    tags: [],
    num: 856,
    name: "Hatenna",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 42,
      atk: 30,
      def: 45,
      spa: 56,
      spd: 53,
      spe: 39
    },
    weightkg: 3.4,
    eggGroups: [
      "Fairy"
    ],
    tier: "LC",
    id: "hatenna",
    fullname: "pokemon: Hatenna",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hatenna",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 265,
    weighthg: 34,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    evos: [
      "Hattrem"
    ],
    nfe: true
  },
  hattrem: {
    tags: [],
    num: 857,
    name: "Hattrem",
    types: [
      "Psychic"
    ],
    baseStats: {
      hp: 57,
      atk: 40,
      def: 65,
      spa: 86,
      spd: 73,
      spe: 49
    },
    weightkg: 4.8,
    evoLevel: 32,
    eggGroups: [
      "Fairy"
    ],
    tier: "PU",
    doublesTier: "NFE",
    id: "hattrem",
    fullname: "pokemon: Hattrem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hattrem",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 370,
    weighthg: 48,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    evos: [
      "Hatterene"
    ],
    nfe: true,
    prevo: "Hatenna"
  },
  hatterene: {
    tags: [],
    num: 858,
    name: "Hatterene",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 57,
      atk: 90,
      def: 95,
      spa: 136,
      spd: 103,
      spe: 29
    },
    weightkg: 5.1,
    evoLevel: 42,
    eggGroups: [
      "Fairy"
    ],
    canGigantamax: "G-Max Smite",
    tier: "OU",
    doublesTier: "DOU",
    id: "hatterene",
    fullname: "pokemon: Hatterene",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Hatterene",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 51,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    nfe: false,
    prevo: "Hattrem"
  },
  hatterenegmax: {
    tags: [],
    num: 858,
    name: "Hatterene-Gmax",
    baseSpecies: "Hatterene",
    forme: "Gmax",
    types: [
      "Psychic",
      "Fairy"
    ],
    baseStats: {
      hp: 57,
      atk: 90,
      def: 95,
      spa: 136,
      spd: 103,
      spe: 29
    },
    weightkg: 0,
    eggGroups: [
      "Fairy"
    ],
    changesFrom: "Hatterene",
    tier: "Illegal",
    id: "hatterenegmax",
    fullname: "pokemon: Hatterene-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 510,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Healer",
      "1": "Anticipation",
      H: "Magic Bounce"
    },
    nfe: false
  },
  impidimp: {
    tags: [],
    num: 859,
    name: "Impidimp",
    types: [
      "Dark",
      "Fairy"
    ],
    baseStats: {
      hp: 45,
      atk: 45,
      def: 30,
      spa: 55,
      spd: 40,
      spe: 50
    },
    weightkg: 5.5,
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    tier: "LC",
    id: "impidimp",
    fullname: "pokemon: Impidimp",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Impidimp",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 265,
    weighthg: 55,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    evos: [
      "Morgrem"
    ],
    nfe: true
  },
  morgrem: {
    tags: [],
    num: 860,
    name: "Morgrem",
    types: [
      "Dark",
      "Fairy"
    ],
    baseStats: {
      hp: 65,
      atk: 60,
      def: 45,
      spa: 75,
      spd: 55,
      spe: 70
    },
    weightkg: 12.5,
    evoLevel: 32,
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    tier: "NFE",
    id: "morgrem",
    fullname: "pokemon: Morgrem",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Morgrem",
    forme: "",
    baseForme: "",
    doublesTier: "NFE",
    canHatch: false,
    bst: 370,
    weighthg: 125,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    evos: [
      "Grimmsnarl"
    ],
    nfe: true,
    prevo: "Impidimp"
  },
  grimmsnarl: {
    tags: [],
    num: 861,
    name: "Grimmsnarl",
    types: [
      "Dark",
      "Fairy"
    ],
    baseStats: {
      hp: 95,
      atk: 120,
      def: 65,
      spa: 95,
      spd: 75,
      spe: 60
    },
    weightkg: 61,
    evoLevel: 42,
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    canGigantamax: "G-Max Snooze",
    tier: "UU",
    doublesTier: "DOU",
    id: "grimmsnarl",
    fullname: "pokemon: Grimmsnarl",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Grimmsnarl",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 510,
    weighthg: 610,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    nfe: false,
    prevo: "Morgrem"
  },
  grimmsnarlgmax: {
    tags: [],
    num: 861,
    name: "Grimmsnarl-Gmax",
    baseSpecies: "Grimmsnarl",
    forme: "Gmax",
    types: [
      "Dark",
      "Fairy"
    ],
    baseStats: {
      hp: 95,
      atk: 120,
      def: 65,
      spa: 95,
      spd: 75,
      spe: 60
    },
    weightkg: 0,
    eggGroups: [
      "Fairy",
      "Human-Like"
    ],
    changesFrom: "Grimmsnarl",
    tier: "Illegal",
    id: "grimmsnarlgmax",
    fullname: "pokemon: Grimmsnarl-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 510,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "M",
    genderRatio: {
      M: 1,
      F: 0
    },
    abilities: {
      "0": "Prankster",
      "1": "Frisk",
      H: "Pickpocket"
    },
    nfe: false
  },
  obstagoon: {
    tags: [],
    num: 862,
    name: "Obstagoon",
    types: [
      "Dark",
      "Normal"
    ],
    baseStats: {
      hp: 93,
      atk: 90,
      def: 101,
      spa: 60,
      spd: 81,
      spe: 95
    },
    weightkg: 46,
    evoLevel: 35,
    evoCondition: "at night",
    eggGroups: [
      "Field"
    ],
    tier: "Illegal",
    id: "obstagoon",
    fullname: "pokemon: Obstagoon",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Obstagoon",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 460,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Reckless",
      "1": "Guts",
      H: "Defiant"
    },
    nfe: false,
    prevo: "Linoone-Galar"
  },
  perrserker: {
    tags: [],
    num: 863,
    name: "Perrserker",
    types: [
      "Steel"
    ],
    baseStats: {
      hp: 70,
      atk: 110,
      def: 100,
      spa: 50,
      spd: 60,
      spe: 50
    },
    weightkg: 28,
    evoLevel: 28,
    eggGroups: [
      "Field"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "perrserker",
    fullname: "pokemon: Perrserker",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Perrserker",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 440,
    weighthg: 280,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Battle Armor",
      "1": "Tough Claws",
      H: "Steely Spirit"
    },
    nfe: false,
    prevo: "Meowth-Galar"
  },
  cursola: {
    tags: [],
    num: 864,
    name: "Cursola",
    types: [
      "Ghost"
    ],
    baseStats: {
      hp: 60,
      atk: 95,
      def: 50,
      spa: 145,
      spd: 130,
      spe: 30
    },
    weightkg: 0.4,
    evoLevel: 38,
    eggGroups: [
      "Water 1",
      "Water 3"
    ],
    tier: "Illegal",
    id: "cursola",
    fullname: "pokemon: Cursola",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Cursola",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 510,
    weighthg: 4,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.25,
      F: 0.75
    },
    abilities: {
      "0": "Weak Armor",
      H: "Perish Body"
    },
    nfe: false,
    prevo: "Corsola-Galar"
  },
  sirfetchd: {
    tags: [],
    num: 865,
    name: "Sirfetch’d",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 62,
      atk: 135,
      def: 95,
      spa: 68,
      spd: 82,
      spe: 65
    },
    weightkg: 117,
    evoType: "other",
    evoCondition: "Land 3 critical hits in 1 battle",
    eggGroups: [
      "Flying",
      "Field"
    ],
    tier: "Illegal",
    id: "sirfetchd",
    fullname: "pokemon: Sirfetch’d",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Sirfetch’d",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 507,
    weighthg: 1170,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Steadfast",
      H: "Scrappy"
    },
    nfe: false,
    prevo: "Farfetch’d-Galar"
  },
  mrrime: {
    tags: [],
    num: 866,
    name: "Mr. Rime",
    types: [
      "Ice",
      "Psychic"
    ],
    baseStats: {
      hp: 80,
      atk: 85,
      def: 75,
      spa: 110,
      spd: 100,
      spe: 70
    },
    weightkg: 58.2,
    evoLevel: 42,
    eggGroups: [
      "Human-Like"
    ],
    tier: "Illegal",
    id: "mrrime",
    fullname: "pokemon: Mr. Rime",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Mr. Rime",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 520,
    weighthg: 582,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Tangled Feet",
      "1": "Screen Cleaner",
      H: "Ice Body"
    },
    nfe: false,
    prevo: "Mr. Mime-Galar"
  },
  runerigus: {
    tags: [],
    num: 867,
    name: "Runerigus",
    types: [
      "Ground",
      "Ghost"
    ],
    baseStats: {
      hp: 58,
      atk: 95,
      def: 145,
      spa: 50,
      spd: 105,
      spe: 30
    },
    weightkg: 66.6,
    evoType: "other",
    evoCondition: "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
    eggGroups: [
      "Mineral",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "runerigus",
    fullname: "pokemon: Runerigus",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Runerigus",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 483,
    weighthg: 666,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Wandering Spirit"
    },
    nfe: false,
    prevo: "Yamask-Galar"
  },
  milcery: {
    tags: [],
    num: 868,
    name: "Milcery",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 45,
      atk: 40,
      def: 40,
      spa: 50,
      spd: 61,
      spe: 34
    },
    weightkg: 0.3,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    tier: "Illegal",
    id: "milcery",
    fullname: "pokemon: Milcery",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Milcery",
    forme: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 270,
    weighthg: 3,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    evos: [
      "Alcremie"
    ],
    nfe: true
  },
  alcremie: {
    tags: [],
    num: 869,
    name: "Alcremie",
    baseForme: "Vanilla Cream",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 65,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 121,
      spe: 64
    },
    weightkg: 0.5,
    evoType: "other",
    evoCondition: "spin while holding a Sweet",
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    canGigantamax: "G-Max Finale",
    tier: "Illegal",
    id: "alcremie",
    fullname: "pokemon: Alcremie",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseSpecies: "Alcremie",
    forme: "",
    doublesTier: "Illegal",
    canHatch: false,
    bst: 495,
    weighthg: 5,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    nfe: false,
    cosmeticFormes: [
      "Alcremie-Ruby-Cream",
      "Alcremie-Matcha-Cream",
      "Alcremie-Mint-Cream",
      "Alcremie-Lemon-Cream",
      "Alcremie-Salted-Cream",
      "Alcremie-Ruby-Swirl",
      "Alcremie-Caramel-Swirl",
      "Alcremie-Rainbow-Swirl"
    ],
    formeOrder: [
      "Alcremie",
      "Alcremie-Ruby-Cream",
      "Alcremie-Matcha-Cream",
      "Alcremie-Mint-Cream",
      "Alcremie-Lemon-Cream",
      "Alcremie-Salted-Cream",
      "Alcremie-Ruby-Swirl",
      "Alcremie-Caramel-Swirl",
      "Alcremie-Rainbow-Swirl"
    ],
    formes: [
      "Alcremie",
      "Alcremie-Ruby-Cream",
      "Alcremie-Matcha-Cream",
      "Alcremie-Mint-Cream",
      "Alcremie-Lemon-Cream",
      "Alcremie-Salted-Cream",
      "Alcremie-Ruby-Swirl",
      "Alcremie-Caramel-Swirl",
      "Alcremie-Rainbow-Swirl"
    ],
    prevo: "Milcery"
  },
  alcremiegmax: {
    tags: [],
    num: 869,
    name: "Alcremie-Gmax",
    baseSpecies: "Alcremie",
    forme: "Gmax",
    types: [
      "Fairy"
    ],
    baseStats: {
      hp: 65,
      atk: 60,
      def: 75,
      spa: 110,
      spd: 121,
      spe: 64
    },
    weightkg: 0,
    eggGroups: [
      "Fairy",
      "Amorphous"
    ],
    changesFrom: "Alcremie",
    tier: "Illegal",
    id: "alcremiegmax",
    fullname: "pokemon: Alcremie-Gmax",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    baseForme: "",
    doublesTier: "Illegal",
    canHatch: true,
    bst: 495,
    weighthg: 0,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "F",
    genderRatio: {
      M: 0,
      F: 1
    },
    abilities: {
      "0": "Sweet Veil",
      H: "Aroma Veil"
    },
    nfe: false
  },
  falinks: {
    tags: [],
    num: 870,
    name: "Falinks",
    types: [
      "Fighting"
    ],
    baseStats: {
      hp: 65,
      atk: 100,
      def: 100,
      spa: 70,
      spd: 60,
      spe: 75
    },
    weightkg: 62,
    eggGroups: [
      "Fairy",
      "Mineral"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "falinks",
    fullname: "pokemon: Falinks",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Falinks",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 620,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    gender: "N",
    genderRatio: {
      M: 0,
      F: 0
    },
    abilities: {
      "0": "Battle Armor",
      H: "Defiant"
    },
    nfe: false
  },
  pincurchin: {
    tags: [],
    num: 871,
    name: "Pincurchin",
    types: [
      "Electric"
    ],
    baseStats: {
      hp: 48,
      atk: 101,
      def: 95,
      spa: 91,
      spd: 85,
      spe: 15
    },
    weightkg: 1,
    eggGroups: [
      "Water 1",
      "Amorphous"
    ],
    tier: "(PU)",
    doublesTier: "DUU",
    id: "pincurchin",
    fullname: "pokemon: Pincurchin",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Pincurchin",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 435,
    weighthg: 10,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Lightning Rod",
      H: "Electric Surge"
    },
    nfe: false
  },
  snom: {
    tags: [],
    num: 872,
    name: "Snom",
    types: [
      "Ice",
      "Bug"
    ],
    baseStats: {
      hp: 30,
      atk: 25,
      def: 35,
      spa: 45,
      spd: 30,
      spe: 20
    },
    weightkg: 3.8,
    eggGroups: [
      "Bug"
    ],
    tier: "LC",
    id: "snom",
    fullname: "pokemon: Snom",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Snom",
    forme: "",
    baseForme: "",
    doublesTier: "LC",
    canHatch: true,
    bst: 185,
    weighthg: 38,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Ice Scales"
    },
    evos: [
      "Frosmoth"
    ],
    nfe: true
  },
  frosmoth: {
    tags: [],
    num: 873,
    name: "Frosmoth",
    types: [
      "Ice",
      "Bug"
    ],
    baseStats: {
      hp: 70,
      atk: 65,
      def: 60,
      spa: 125,
      spd: 90,
      spe: 65
    },
    weightkg: 42,
    evoType: "levelFriendship",
    evoCondition: "at night",
    eggGroups: [
      "Bug"
    ],
    tier: "RU",
    doublesTier: "(DUU)",
    id: "frosmoth",
    fullname: "pokemon: Frosmoth",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Frosmoth",
    forme: "",
    baseForme: "",
    canHatch: false,
    bst: 475,
    weighthg: 420,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Shield Dust",
      H: "Ice Scales"
    },
    nfe: false,
    prevo: "Snom"
  },
  stonjourner: {
    tags: [],
    num: 874,
    name: "Stonjourner",
    types: [
      "Rock"
    ],
    baseStats: {
      hp: 100,
      atk: 125,
      def: 135,
      spa: 20,
      spd: 20,
      spe: 70
    },
    weightkg: 520,
    eggGroups: [
      "Mineral"
    ],
    tier: "PU",
    doublesTier: "(DUU)",
    id: "stonjourner",
    fullname: "pokemon: Stonjourner",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Stonjourner",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 5200,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Power Spot"
    },
    nfe: false
  },
  eiscue: {
    tags: [],
    num: 875,
    name: "Eiscue",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 110,
      spa: 65,
      spd: 90,
      spe: 50
    },
    weightkg: 89,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    tier: "(PU)",
    doublesTier: "(DUU)",
    id: "eiscue",
    fullname: "pokemon: Eiscue",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseSpecies: "Eiscue",
    forme: "",
    baseForme: "",
    canHatch: true,
    bst: 470,
    weighthg: 890,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ice Face"
    },
    nfe: false,
    otherFormes: [
      "Eiscue-Noice"
    ],
    formeOrder: [
      "Eiscue",
      "Eiscue-Noice"
    ],
    formes: [
      "Eiscue",
      "Eiscue-Noice"
    ]
  },
  eiscuenoice: {
    tags: [],
    num: 875,
    name: "Eiscue-Noice",
    baseSpecies: "Eiscue",
    forme: "Noice",
    types: [
      "Ice"
    ],
    baseStats: {
      hp: 75,
      atk: 80,
      def: 70,
      spa: 65,
      spd: 50,
      spe: 130
    },
    weightkg: 89,
    eggGroups: [
      "Water 1",
      "Field"
    ],
    requiredAbility: "Ice Face",
    battleOnly: "Eiscue",
    id: "eiscuenoice",
    fullname: "pokemon: Eiscue-Noice",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
    isNonstandard: null,
    baseForme: "",
    tier: "(PU)",
    doublesTier: "(DUU)",
    canHatch: true,
    bst: 470,
    weighthg: 890,
    unreleasedHidden: false,
    maleOnlyHidden: false,
    gmaxUnreleased: false,
    cannotDynamax: false,
    changesFrom: "Eiscue",
    genderRatio: {
      M: 0.5,
      F: 0.5
    },
    abilities: {
      "0": "Ice Face"
    },
    nfe: false
  },
  indeedee: {
    tags: [],
    num: 876,
    name: "Indeedee",
    baseForme: "M",
    types: [
      "Psychic",
      "Normal"
    ],
    baseStats: {
      hp: 60,
      atk: 65,
      def: 55,
      spa: 105,
      spd: 95,
      spe: 95
    },
    weightkg: 28,
    eggGroups: [
      "Fairy"
    ],
    tier: "RU",
    doublesTier: "DUU",
    id: "indeedee",
    fullname: "pokemon: Indeedee",
    effectType: "Pokemon",
    kind: "Species",
    gen: 8,
    shortDesc: "",
    desc: "",
      M: 1,