exports.BattleMovedex = {
  "10000000voltthunderbolt": {
    exists: true,
    num: 719,
    accuracy: true,
    basePower: 195,
    category: "Special",
    isNonstandard: "Past",
    name: "10,000,000 Volt Thunderbolt",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "pikashuniumz",
    critRatio: 3,
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Has a very high chance for a critical hit.",
    shortDesc: "Very high critical hit ratio.",
    id: "10000000voltthunderbolt",
    fullname: "move: 10,000,000 Volt Thunderbolt",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  absorb: {
    exists: true,
    num: 71,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Absorb",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "absorb",
    fullname: "move: Absorb",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  accelerock: {
    exists: true,
    num: 709,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Accelerock",
    pp: 20,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "accelerock",
    fullname: "move: Accelerock",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  acid: {
    exists: true,
    num: 51,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Acid",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Poison",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the foe(s) Sp. Def by 1.",
    id: "acid",
    fullname: "move: Acid",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  acidarmor: {
    exists: true,
    num: 151,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acid Armor",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    id: "acidarmor",
    fullname: "move: Acid Armor",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aciddownpour: {
    exists: true,
    num: 628,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Acid Downpour",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "poisoniumz",
    secondary: null,
    target: "normal",
    type: "Poison",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "aciddownpour",
    fullname: "move: Acid Downpour",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  acidspray: {
    exists: true,
    num: 491,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Acid Spray",
    pp: 20,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spd: -2
      }
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 100% chance to lower the target's Special Defense by 2 stages.",
    shortDesc: "100% chance to lower the target's Sp. Def by 2.",
    id: "acidspray",
    fullname: "move: Acid Spray",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -2
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  acrobatics: {
    exists: true,
    num: 512,
    accuracy: 100,
    basePower: 55,
    category: "Physical",
    name: "Acrobatics",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "Power doubles if the user has no held item.",
    id: "acrobatics",
    fullname: "move: Acrobatics",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    desc: "Power doubles if the user has no held item.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  acupressure: {
    exists: true,
    num: 367,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acupressure",
    pp: 30,
    priority: 0,
    flags: {},
    secondary: null,
    target: "adjacentAllyOrSelf",
    type: "Normal",
    zMove: {
      effect: "crit2"
    },
    desc: "Raises a random stat by 2 stages as long as the stat is not already at stage 6. The user can choose to use this move on itself or an adjacent ally. Fails if no stat stage can be raised or if used on an ally with a substitute.",
    shortDesc: "Raises a random stat of the user or an ally by 2.",
    id: "acupressure",
    fullname: "move: Acupressure",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aerialace: {
    exists: true,
    num: 332,
    accuracy: true,
    basePower: 60,
    category: "Physical",
    name: "Aerial Ace",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1,
      slicing: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "This move does not check accuracy.",
    id: "aerialace",
    fullname: "move: Aerial Ace",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  aeroblast: {
    exists: true,
    num: 177,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Aeroblast",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      distance: 1
    },
    critRatio: 2,
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "aeroblast",
    fullname: "move: Aeroblast",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  afteryou: {
    exists: true,
    num: 495,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "After You",
    pp: 15,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The target makes its move immediately after the user this turn, no matter the priority of its selected move. Fails if the target would have moved next anyway, or if the target already moved this turn.",
    shortDesc: "The target makes its move right after the user.",
    id: "afteryou",
    fullname: "move: After You",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  agility: {
    exists: true,
    num: 97,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Agility",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Speed by 2 stages.",
    shortDesc: "Raises the user's Speed by 2.",
    id: "agility",
    fullname: "move: Agility",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aircutter: {
    exists: true,
    num: 314,
    accuracy: 95,
    basePower: 60,
    category: "Special",
    name: "Air Cutter",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      slicing: 1,
      wind: 1
    },
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Flying",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio. Hits adjacent foes.",
    id: "aircutter",
    fullname: "move: Air Cutter",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  airslash: {
    exists: true,
    num: 403,
    accuracy: 95,
    basePower: 75,
    category: "Special",
    name: "Air Slash",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      distance: 1,
      slicing: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "any",
    type: "Flying",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "airslash",
    fullname: "move: Air Slash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  alloutpummeling: {
    exists: true,
    num: 624,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "All-Out Pummeling",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "fightiniumz",
    secondary: null,
    target: "normal",
    type: "Fighting",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "alloutpummeling",
    fullname: "move: All-Out Pummeling",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  allyswitch: {
    exists: true,
    num: 502,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ally Switch",
    pp: 15,
    priority: 2,
    flags: {},
    stallingMove: true,
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The user swaps positions with its ally. Fails if the user is the only Pokemon on its side. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Ally Switch.",
    shortDesc: "User and ally swap positions; using again can fail.",
    id: "allyswitch",
    fullname: "move: Ally Switch",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  amnesia: {
    exists: true,
    num: 133,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Amnesia",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spd: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Special Defense by 2 stages.",
    shortDesc: "Raises the user's Sp. Def by 2.",
    id: "amnesia",
    fullname: "move: Amnesia",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  anchorshot: {
    exists: true,
    num: 677,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    isNonstandard: "Past",
    name: "Anchor Shot",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Steel",
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Prevents the target from switching out.",
    id: "anchorshot",
    fullname: "move: Anchor Shot",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  ancientpower: {
    exists: true,
    num: 246,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Ancient Power",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Rock",
    desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
    shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
    id: "ancientpower",
    fullname: "move: Ancient Power",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  appleacid: {
    exists: true,
    num: 787,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Apple Acid",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 100% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "100% chance to lower the target's Sp. Def by 1.",
    id: "appleacid",
    fullname: "move: Apple Acid",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  aquacutter: {
    exists: true,
    num: 895,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Aqua Cutter",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "aquacutter",
    fullname: "move: Aqua Cutter",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  aquajet: {
    exists: true,
    num: 453,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Aqua Jet",
    pp: 20,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "aquajet",
    fullname: "move: Aqua Jet",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  aquaring: {
    exists: true,
    num: 392,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aqua Ring",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "aquaring",
    condition: {
      onResidualOrder: 6
    },
    secondary: null,
    target: "self",
    type: "Water",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. If the user uses Baton Pass, the replacement will receive the healing effect.",
    shortDesc: "User recovers 1/16 max HP per turn.",
    id: "aquaring",
    fullname: "move: Aqua Ring",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aquastep: {
    exists: true,
    num: 872,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Aqua Step",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      dance: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
    shortDesc: "100% chance to raise the user's Speed by 1.",
    id: "aquastep",
    fullname: "move: Aqua Step",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  aquatail: {
    exists: true,
    num: 401,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Aqua Tail",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    shortDesc: "No additional effect.",
    id: "aquatail",
    fullname: "move: Aqua Tail",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  armorcannon: {
    exists: true,
    num: 890,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Armor Cannon",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Lowers the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
    id: "armorcannon",
    fullname: "move: Armor Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  armthrust: {
    exists: true,
    num: 292,
    accuracy: 100,
    basePower: 15,
    category: "Physical",
    name: "Arm Thrust",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "armthrust",
    fullname: "move: Arm Thrust",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  aromatherapy: {
    exists: true,
    num: 312,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Aromatherapy",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      distance: 1
    },
    target: "allyTeam",
    type: "Grass",
    zMove: {
      effect: "heal"
    },
    desc: "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user.",
    shortDesc: "Cures the user's party of all status conditions.",
    id: "aromatherapy",
    fullname: "move: Aromatherapy",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aromaticmist: {
    exists: true,
    num: 597,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aromatic Mist",
    pp: 20,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    boosts: {
      spd: 1
    },
    secondary: null,
    target: "adjacentAlly",
    type: "Fairy",
    zMove: {
      boost: {
        spd: 2
      }
    },
    desc: "Raises the target's Special Defense by 1 stage. Fails if there is no ally adjacent to the user.",
    shortDesc: "Raises an ally's Sp. Def by 1.",
    id: "aromaticmist",
    fullname: "move: Aromatic Mist",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  assist: {
    exists: true,
    num: 274,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Assist",
    pp: 20,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Blazing Torque, Bounce, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Noxious Torque, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
    shortDesc: "Uses a random move known by a team member.",
    id: "assist",
    fullname: "move: Assist",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  assurance: {
    exists: true,
    num: 372,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Assurance",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Power doubles if the target has already taken damage this turn, other than direct damage from Belly Drum, confusion, Curse, or Pain Split.",
    shortDesc: "Power doubles if target was damaged this turn.",
    id: "assurance",
    fullname: "move: Assurance",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  astonish: {
    exists: true,
    num: 310,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Astonish",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "astonish",
    fullname: "move: Astonish",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  astralbarrage: {
    exists: true,
    num: 825,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Astral Barrage",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ghost",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "astralbarrage",
    fullname: "move: Astral Barrage",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  attackorder: {
    exists: true,
    num: 454,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Attack Order",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "attackorder",
    fullname: "move: Attack Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  attract: {
    exists: true,
    num: 213,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Attract",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "attract",
    condition: {
      noCopy: true,
      onBeforeMovePriority: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
    shortDesc: "A target of the opposite gender gets infatuated.",
    id: "attract",
    fullname: "move: Attract",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aurasphere: {
    exists: true,
    num: 396,
    accuracy: true,
    basePower: 80,
    category: "Special",
    name: "Aura Sphere",
    pp: 20,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      pulse: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Fighting",
    shortDesc: "This move does not check accuracy.",
    id: "aurasphere",
    fullname: "move: Aura Sphere",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  aurawheel: {
    exists: true,
    num: 783,
    accuracy: 100,
    basePower: 110,
    category: "Physical",
    isNonstandard: "Past",
    name: "Aura Wheel",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
    shortDesc: "Morpeko: Electric; Hangry: Dark; 100% +1 Spe.",
    id: "aurawheel",
    fullname: "move: Aura Wheel",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  aurorabeam: {
    exists: true,
    num: 62,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Aurora Beam",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
    shortDesc: "10% chance to lower the target's Attack by 1.",
    id: "aurorabeam",
    fullname: "move: Aurora Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  auroraveil: {
    exists: true,
    num: 694,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aurora Veil",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "auroraveil",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 10
    },
    secondary: null,
    target: "allySide",
    type: "Ice",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail.",
    shortDesc: "For 5 turns, damage to allies halved. Snow only.",
    id: "auroraveil",
    fullname: "move: Aurora Veil",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  autotomize: {
    exists: true,
    num: 475,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Autotomize",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Speed by 2 stages. If the user's Speed was changed, the user's weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1 kg.",
    shortDesc: "Raises the user's Speed by 2; user loses 100 kg.",
    id: "autotomize",
    fullname: "move: Autotomize",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  avalanche: {
    exists: true,
    num: 419,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Avalanche",
    pp: 10,
    priority: -4,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "Power doubles if the user was hit by the target this turn.",
    shortDesc: "Power doubles if user is damaged by the target.",
    id: "avalanche",
    fullname: "move: Avalanche",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  axekick: {
    exists: true,
    num: 853,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Axe Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    hasCrashDamage: true,
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 30% chance to confuse the target. If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
    shortDesc: "30% confusion. User loses 50% max HP if miss.",
    id: "axekick",
    fullname: "move: Axe Kick",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  babydolleyes: {
    exists: true,
    num: 608,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Baby-Doll Eyes",
    pp: 30,
    priority: 1,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 1 stage.",
    shortDesc: "Lowers the target's Attack by 1.",
    id: "babydolleyes",
    fullname: "move: Baby-Doll Eyes",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  banefulbunker: {
    exists: true,
    num: 661,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Baneful Bunker",
    pp: 10,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    volatileStatus: "banefulbunker",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects from moves. Contact: poison.",
    id: "banefulbunker",
    fullname: "move: Baneful Bunker",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  barrage: {
    exists: true,
    num: 140,
    accuracy: 85,
    basePower: 15,
    category: "Physical",
    isNonstandard: "Past",
    name: "Barrage",
    pp: 20,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "barrage",
    fullname: "move: Barrage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  barrier: {
    exists: true,
    num: 112,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Barrier",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    id: "barrier",
    fullname: "move: Barrier",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  batonpass: {
    exists: true,
    num: 226,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Baton Pass",
    pp: 40,
    priority: 0,
    flags: {},
    self: {},
    selfSwitch: "copyvolatile",
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes, confusion, and certain move effects transferred to it.",
    shortDesc: "User switches, passing stat changes and more.",
    id: "batonpass",
    fullname: "move: Baton Pass",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  beakblast: {
    exists: true,
    num: 690,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Beak Blast",
    pp: 15,
    priority: -3,
    flags: {
      bullet: 1,
      protect: 1,
      noassist: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      failcopycat: 1,
      failinstruct: 1
    },
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    desc: "If the user is hit by a contact move this turn before it can execute this move, the attacker is burned.",
    shortDesc: "Burns on contact with the user before it moves.",
    id: "beakblast",
    fullname: "move: Beak Blast",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  beatup: {
    exists: true,
    num: 251,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Beat Up",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Hits one time for the user and one time for each unfainted Pokemon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
    shortDesc: "All healthy allies aid in damaging the target.",
    id: "beatup",
    fullname: "move: Beat Up",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  behemothbash: {
    exists: true,
    num: 782,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Behemoth Bash",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failcopycat: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "No additional effect.",
    id: "behemothbash",
    fullname: "move: Behemoth Bash",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  behemothblade: {
    exists: true,
    num: 781,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Behemoth Blade",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1,
      failcopycat: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "No additional effect.",
    id: "behemothblade",
    fullname: "move: Behemoth Blade",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  belch: {
    exists: true,
    num: 562,
    accuracy: 90,
    basePower: 120,
    category: "Special",
    name: "Belch",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    desc: "This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokemon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.",
    shortDesc: "Cannot be selected until the user eats a Berry.",
    id: "belch",
    fullname: "move: Belch",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  bellydrum: {
    exists: true,
    num: 187,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Belly Drum",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
    shortDesc: "User loses 50% max HP. Maximizes Attack.",
    id: "bellydrum",
    fullname: "move: Belly Drum",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bestow: {
    exists: true,
    num: 516,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Bestow",
    pp: 15,
    priority: 0,
    flags: {
      mirror: 1,
      bypasssub: 1,
      allyanim: 1,
      noassist: 1,
      failcopycat: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The target receives the user's held item. Fails if the user has no item or is holding a Mail or Z-Crystal, if the target is already holding an item, if the user is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, a Pokemon that can Mega Evolve holding the Mega Stone for its species, or if the target is one of those Pokemon and the user is holding the respective item.",
    shortDesc: "User passes its held item to the target.",
    id: "bestow",
    fullname: "move: Bestow",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bide: {
    exists: true,
    num: 117,
    accuracy: true,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bide",
    pp: 10,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    volatileStatus: "bide",
    ignoreImmunity: true,
    condition: {
      duration: 3,
      onLockMove: "bide",
      onDamagePriority: -101
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and does not ignore type immunity.",
    shortDesc: "Waits 2 turns; deals double the damage taken.",
    id: "bide",
    fullname: "move: Bide",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  bind: {
    exists: true,
    num: 20,
    accuracy: 85,
    basePower: 15,
    category: "Physical",
    name: "Bind",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "bind",
    fullname: "move: Bind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  bite: {
    exists: true,
    num: 44,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Bite",
    pp: 25,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Dark",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "bite",
    fullname: "move: Bite",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  bitterblade: {
    exists: true,
    num: 891,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Bitter Blade",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "bitterblade",
    fullname: "move: Bitter Blade",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  bittermalice: {
    exists: true,
    num: 841,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Bitter Malice",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Attack by 1.",
    id: "bittermalice",
    fullname: "move: Bitter Malice",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  blackholeeclipse: {
    exists: true,
    num: 654,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Black Hole Eclipse",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "darkiniumz",
    secondary: null,
    target: "normal",
    type: "Dark",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "blackholeeclipse",
    fullname: "move: Black Hole Eclipse",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  blastburn: {
    exists: true,
    num: 307,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Blast Burn",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "blastburn",
    fullname: "move: Blast Burn",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  blazekick: {
    exists: true,
    num: 299,
    accuracy: 90,
    basePower: 85,
    category: "Physical",
    name: "Blaze Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target and a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio. 10% chance to burn.",
    id: "blazekick",
    fullname: "move: Blaze Kick",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  blizzard: {
    exists: true,
    num: 59,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Blizzard",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "allAdjacentFoes",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target. If the weather is Snow, this move does not check accuracy.",
    shortDesc: "10% chance to freeze foe(s). Can't miss in Snow.",
    id: "blizzard",
    fullname: "move: Blizzard",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  block: {
    exists: true,
    num: 335,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Block",
    pp: 5,
    priority: 0,
    flags: {
      reflectable: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Prevents the target from switching out.",
    id: "block",
    fullname: "move: Block",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bloomdoom: {
    exists: true,
    num: 644,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bloom Doom",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "grassiumz",
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "bloomdoom",
    fullname: "move: Bloom Doom",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  blueflare: {
    exists: true,
    num: 551,
    accuracy: 85,
    basePower: 130,
    category: "Special",
    isNonstandard: "Past",
    name: "Blue Flare",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 20% chance to burn the target.",
    shortDesc: "20% chance to burn the target.",
    id: "blueflare",
    fullname: "move: Blue Flare",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  bodypress: {
    exists: true,
    num: 776,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Body Press",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    overrideOffensiveStat: "def",
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Damage is calculated using the user's Defense stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
    shortDesc: "Uses user's Def stat as Atk in damage calculation.",
    id: "bodypress",
    fullname: "move: Body Press",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  bodyslam: {
    exists: true,
    num: 34,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Body Slam",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "30% chance to paralyze the target.",
    id: "bodyslam",
    fullname: "move: Body Slam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  boltbeak: {
    exists: true,
    num: 754,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bolt Beak",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Power doubles if the user moves before the target.",
    shortDesc: "Power doubles if user moves before the target.",
    id: "boltbeak",
    fullname: "move: Bolt Beak",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  boltstrike: {
    exists: true,
    num: 550,
    accuracy: 85,
    basePower: 130,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bolt Strike",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 20% chance to paralyze the target.",
    shortDesc: "20% chance to paralyze the target.",
    id: "boltstrike",
    fullname: "move: Bolt Strike",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  boneclub: {
    exists: true,
    num: 125,
    accuracy: 85,
    basePower: 65,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bone Club",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 10% chance to make the target flinch.",
    shortDesc: "10% chance to make the target flinch.",
    id: "boneclub",
    fullname: "move: Bone Club",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  bonemerang: {
    exists: true,
    num: 155,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bonemerang",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Ground",
    maxMove: {
      basePower: 130
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "bonemerang",
    fullname: "move: Bonemerang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  bonerush: {
    exists: true,
    num: 198,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Bone Rush",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "bonerush",
    fullname: "move: Bone Rush",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  boomburst: {
    exists: true,
    num: 586,
    accuracy: 100,
    basePower: 140,
    category: "Special",
    name: "Boomburst",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent Pokemon.",
    id: "boomburst",
    fullname: "move: Boomburst",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  bounce: {
    exists: true,
    num: 340,
    accuracy: 85,
    basePower: 85,
    category: "Physical",
    name: "Bounce",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    condition: {
      duration: 2
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "any",
    type: "Flying",
    desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Bounces turn 1. Hits turn 2. 30% paralyze.",
    id: "bounce",
    fullname: "move: Bounce",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  branchpoke: {
    exists: true,
    num: 785,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Branch Poke",
    pp: 40,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "No additional effect.",
    shortDesc: "No additional effect.",
    id: "branchpoke",
    fullname: "move: Branch Poke",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  bravebird: {
    exists: true,
    num: 413,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Brave Bird",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil.",
    id: "bravebird",
    fullname: "move: Brave Bird",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  breakingswipe: {
    exists: true,
    num: 784,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Breaking Swipe",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Dragon",
    desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Attack by 1.",
    id: "breakingswipe",
    fullname: "move: Breaking Swipe",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  breakneckblitz: {
    exists: true,
    num: 622,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Breakneck Blitz",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "normaliumz",
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "breakneckblitz",
    fullname: "move: Breakneck Blitz",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  brickbreak: {
    exists: true,
    num: 280,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Brick Break",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
    shortDesc: "Destroys screens, unless the target is immune.",
    id: "brickbreak",
    fullname: "move: Brick Break",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 140
    }
  },
  brine: {
    exists: true,
    num: 362,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Brine",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Power doubles if the target has less than or equal to half of its maximum HP remaining.",
    shortDesc: "Power doubles if the target's HP is 50% or less.",
    id: "brine",
    fullname: "move: Brine",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  brutalswing: {
    exists: true,
    num: 693,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Brutal Swing",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Dark",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent Pokemon.",
    id: "brutalswing",
    fullname: "move: Brutal Swing",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  bubble: {
    exists: true,
    num: 145,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    isNonstandard: "Past",
    name: "Bubble",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Water",
    desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
    shortDesc: "10% chance to lower the foe(s) Speed by 1.",
    id: "bubble",
    fullname: "move: Bubble",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  bubblebeam: {
    exists: true,
    num: 61,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Bubble Beam",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
    shortDesc: "10% chance to lower the target's Speed by 1.",
    id: "bubblebeam",
    fullname: "move: Bubble Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  bugbite: {
    exists: true,
    num: 450,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Bug Bite",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "User steals and eats the target's Berry.",
    id: "bugbite",
    fullname: "move: Bug Bite",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  bugbuzz: {
    exists: true,
    num: 405,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Bug Buzz",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "bugbuzz",
    fullname: "move: Bug Buzz",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  bulkup: {
    exists: true,
    num: 339,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Bulk Up",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1,
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Fighting",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the user's Attack and Defense by 1 stage.",
    shortDesc: "Raises the user's Attack and Defense by 1.",
    id: "bulkup",
    fullname: "move: Bulk Up",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bulldoze: {
    exists: true,
    num: 523,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Bulldoze",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacent",
    type: "Ground",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance lower adjacent Pkmn Speed by 1.",
    id: "bulldoze",
    fullname: "move: Bulldoze",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  bulletpunch: {
    exists: true,
    num: 418,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Bullet Punch",
    pp: 30,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "bulletpunch",
    fullname: "move: Bullet Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  bulletseed: {
    exists: true,
    num: 331,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Bullet Seed",
    pp: 30,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "bulletseed",
    fullname: "move: Bullet Seed",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  burningjealousy: {
    exists: true,
    num: 807,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Burning Jealousy",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100
    },
    target: "allAdjacentFoes",
    type: "Fire",
    desc: "Has a 100% chance to burn the target if it had a stat stage raised this turn.",
    shortDesc: "100% burns a target that had a stat rise this turn.",
    id: "burningjealousy",
    fullname: "move: Burning Jealousy",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  burnup: {
    exists: true,
    num: 682,
    accuracy: 100,
    basePower: 130,
    category: "Special",
    name: "Burn Up",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    self: {},
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Fails unless the user is a Fire type. If this move is successful and the user is not Terastallized, the user's Fire type becomes typeless as long as it remains active.",
    shortDesc: "User's Fire type becomes typeless; must be Fire.",
    id: "burnup",
    fullname: "move: Burn Up",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  calmmind: {
    exists: true,
    num: 347,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Calm Mind",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spa: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Special Attack and Special Defense by 1 stage.",
    shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1.",
    id: "calmmind",
    fullname: "move: Calm Mind",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  camouflage: {
    exists: true,
    num: 293,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Camouflage",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
    shortDesc: "Changes user's type by terrain (default Normal).",
    id: "camouflage",
    fullname: "move: Camouflage",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  captivate: {
    exists: true,
    num: 445,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Captivate",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      spa: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        spd: 2
      }
    },
    desc: "Lowers the target's Special Attack by 2 stages. The target is unaffected if both the user and the target are the same gender, or if either is genderless. Pokemon with the Oblivious Ability are immune.",
    shortDesc: "Lowers the foe(s) Sp. Atk by 2 if opposite gender.",
    id: "captivate",
    fullname: "move: Captivate",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  catastropika: {
    exists: true,
    num: 658,
    accuracy: true,
    basePower: 210,
    category: "Physical",
    isNonstandard: "Past",
    name: "Catastropika",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "pikaniumz",
    secondary: null,
    target: "normal",
    type: "Electric",
    shortDesc: "No additional effect.",
    id: "catastropika",
    fullname: "move: Catastropika",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  celebrate: {
    exists: true,
    num: 606,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Celebrate",
    pp: 40,
    priority: 0,
    flags: {
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    shortDesc: "No competitive use.",
    id: "celebrate",
    fullname: "move: Celebrate",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    desc: "No competitive use.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  charge: {
    exists: true,
    num: 268,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Charge",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "charge",
    condition: {
      onBasePowerPriority: 9
    },
    boosts: {
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Raises the user's Special Defense by 1 stage. The user's next Electric-type attack will have its power doubled; the effect ends when the user is no longer active, or after the user attempts to use any Electric-type move besides Charge, even if it is not successful.",
    shortDesc: "+1 SpD, user's next Electric move 2x power.",
    id: "charge",
    fullname: "move: Charge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  chargebeam: {
    exists: true,
    num: 451,
    accuracy: 90,
    basePower: 50,
    category: "Special",
    name: "Charge Beam",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 70,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 70% chance to raise the user's Special Attack by 1 stage.",
    shortDesc: "70% chance to raise the user's Sp. Atk by 1.",
    id: "chargebeam",
    fullname: "move: Charge Beam",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 70,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  charm: {
    exists: true,
    num: 204,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Charm",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 2 stages.",
    shortDesc: "Lowers the target's Attack by 2.",
    id: "charm",
    fullname: "move: Charm",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  chatter: {
    exists: true,
    num: 448,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Chatter",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      distance: 1,
      bypasssub: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    noSketch: true,
    secondary: {
      chance: 100,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Flying",
    desc: "Has a 100% chance to confuse the target.",
    shortDesc: "100% chance to confuse the target.",
    id: "chatter",
    fullname: "move: Chatter",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  chillingwater: {
    exists: true,
    num: 886,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Chilling Water",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Attack by 1.",
    id: "chillingwater",
    fullname: "move: Chilling Water",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  chillyreception: {
    exists: true,
    num: 881,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Chilly Reception",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "snow",
    selfSwitch: true,
    secondary: null,
    target: "all",
    type: "Ice",
    desc: "For 5 turns, the weather becomes Snow. The user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
    shortDesc: "Starts Snow. User switches out.",
    id: "chillyreception",
    fullname: "move: Chilly Reception",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  chipaway: {
    exists: true,
    num: 498,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Chip Away",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    ignoreDefensive: true,
    ignoreEvasion: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Ignores the target's stat stage changes, including evasiveness.",
    shortDesc: "Ignores the target's stat stage changes.",
    id: "chipaway",
    fullname: "move: Chip Away",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  circlethrow: {
    exists: true,
    num: 509,
    accuracy: 90,
    basePower: 60,
    category: "Physical",
    name: "Circle Throw",
    pp: 10,
    priority: -6,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      noassist: 1,
      failcopycat: 1
    },
    forceSwitch: true,
    target: "normal",
    type: "Fighting",
    desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target is under the effect of Ingrain, has the Suction Cups Ability, or this move hit a substitute.",
    shortDesc: "Forces the target to switch to a random ally.",
    id: "circlethrow",
    fullname: "move: Circle Throw",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  clamp: {
    exists: true,
    num: 128,
    accuracy: 85,
    basePower: 35,
    category: "Physical",
    isNonstandard: "Past",
    name: "Clamp",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "clamp",
    fullname: "move: Clamp",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  clangingscales: {
    exists: true,
    num: 691,
    accuracy: 100,
    basePower: 110,
    category: "Special",
    isNonstandard: "Past",
    name: "Clanging Scales",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    selfBoost: {
      boosts: {
        def: -1
      }
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dragon",
    desc: "Lowers the user's Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense by 1.",
    id: "clangingscales",
    fullname: "move: Clanging Scales",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  clangoroussoul: {
    exists: true,
    num: 775,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Clangorous Soul",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      sound: 1,
      dance: 1
    },
    boosts: {
      atk: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Dragon",
    desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 33% of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
    shortDesc: "User loses 33% of its max HP. +1 to all stats.",
    id: "clangoroussoul",
    fullname: "move: Clangorous Soul",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  clangoroussoulblaze: {
    exists: true,
    num: 728,
    accuracy: true,
    basePower: 185,
    category: "Special",
    isNonstandard: "Past",
    name: "Clangorous Soulblaze",
    pp: 1,
    priority: 0,
    flags: {
      sound: 1,
      bypasssub: 1
    },
    selfBoost: {
      boosts: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    isZ: "kommoniumz",
    secondary: {},
    target: "allAdjacentFoes",
    type: "Dragon",
    desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
    shortDesc: "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1.",
    id: "clangoroussoulblaze",
    fullname: "move: Clangorous Soulblaze",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {}
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  clearsmog: {
    exists: true,
    num: 499,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Clear Smog",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    shortDesc: "Resets all of the target's stat stages to 0.",
    id: "clearsmog",
    fullname: "move: Clear Smog",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    desc: "Resets all of the target's stat stages to 0.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  closecombat: {
    exists: true,
    num: 370,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Close Combat",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Lowers the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
    id: "closecombat",
    fullname: "move: Close Combat",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  coaching: {
    exists: true,
    num: 811,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Coaching",
    pp: 10,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    boosts: {
      atk: 1,
      def: 1
    },
    target: "adjacentAlly",
    type: "Fighting",
    desc: "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
    shortDesc: "Raises an ally's Attack and Defense by 1.",
    id: "coaching",
    fullname: "move: Coaching",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  coil: {
    exists: true,
    num: 489,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Coil",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1,
      def: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Attack, Defense, and accuracy by 1 stage.",
    shortDesc: "Raises user's Attack, Defense, accuracy by 1.",
    id: "coil",
    fullname: "move: Coil",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  collisioncourse: {
    exists: true,
    num: 878,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Collision Course",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Damage is multiplied by 1.3333 if this move is super effective against the target.",
    shortDesc: "Deals 1.3333x damage with supereffective hits.",
    id: "collisioncourse",
    fullname: "move: Collision Course",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 180
    }
  },
  cometpunch: {
    exists: true,
    num: 4,
    accuracy: 85,
    basePower: 18,
    category: "Physical",
    isNonstandard: "Past",
    name: "Comet Punch",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 100
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "cometpunch",
    fullname: "move: Comet Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  comeuppance: {
    exists: true,
    num: 894,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Comeuppance",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failmefirst: 1
    },
    secondary: null,
    target: "scripted",
    type: "Dark",
    desc: "Deals damage to the last opposing Pokemon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical or special attack this turn.",
    shortDesc: "If hit by an attack, returns 1.5x damage.",
    id: "comeuppance",
    fullname: "move: Comeuppance",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  confide: {
    exists: true,
    num: 590,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Confide",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    boosts: {
      spa: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Lowers the target's Special Attack by 1 stage.",
    shortDesc: "Lowers the target's Sp. Atk by 1.",
    id: "confide",
    fullname: "move: Confide",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  confuseray: {
    exists: true,
    num: 109,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Confuse Ray",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the target to become confused.",
    shortDesc: "Confuses the target.",
    id: "confuseray",
    fullname: "move: Confuse Ray",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  confusion: {
    exists: true,
    num: 93,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Confusion",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 10% chance to confuse the target.",
    shortDesc: "10% chance to confuse the target.",
    id: "confusion",
    fullname: "move: Confusion",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  constrict: {
    exists: true,
    num: 132,
    accuracy: 100,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Constrict",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
    shortDesc: "10% chance to lower the target's Speed by 1.",
    id: "constrict",
    fullname: "move: Constrict",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  continentalcrush: {
    exists: true,
    num: 632,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Continental Crush",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "rockiumz",
    secondary: null,
    target: "normal",
    type: "Rock",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "continentalcrush",
    fullname: "move: Continental Crush",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  conversion: {
    exists: true,
    num: 160,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Conversion",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "The user's type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user's current types.",
    shortDesc: "Changes user's type to match its first move.",
    id: "conversion",
    fullname: "move: Conversion",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  conversion2: {
    exists: true,
    num: 176,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Conversion 2",
    pp: 30,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "The user's type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
    shortDesc: "Changes user's type to resist target's last move.",
    id: "conversion2",
    fullname: "move: Conversion 2",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  copycat: {
    exists: true,
    num: 383,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Copycat",
    pp: 20,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "The user uses the last move used by any Pokemon, including itself. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
    shortDesc: "Uses the last move used in the battle.",
    id: "copycat",
    fullname: "move: Copycat",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  coreenforcer: {
    exists: true,
    num: 687,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Core Enforcer",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dragon",
    zMove: {
      basePower: 140
    },
    desc: "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
    shortDesc: "Nullifies the foe(s) Ability if the foe(s) move first.",
    id: "coreenforcer",
    fullname: "move: Core Enforcer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  corkscrewcrash: {
    exists: true,
    num: 638,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Corkscrew Crash",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "steeliumz",
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "corkscrewcrash",
    fullname: "move: Corkscrew Crash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  corrosivegas: {
    exists: true,
    num: 810,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Corrosive Gas",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Poison",
    desc: "The target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "Removes adjacent Pokemon's held items.",
    id: "corrosivegas",
    fullname: "move: Corrosive Gas",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  cottonguard: {
    exists: true,
    num: 538,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Cotton Guard",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Defense by 3 stages.",
    shortDesc: "Raises the user's Defense by 3.",
    id: "cottonguard",
    fullname: "move: Cotton Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  cottonspore: {
    exists: true,
    num: 178,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Cotton Spore",
    pp: 40,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    id: "cottonspore",
    fullname: "move: Cotton Spore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  counter: {
    exists: true,
    num: 68,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Counter",
    pp: 20,
    priority: -5,
    flags: {
      contact: 1,
      protect: 1,
      failmefirst: 1,
      noassist: 1,
      failcopycat: 1
    },
    condition: {
      duration: 1,
      noCopy: true,
      onRedirectTargetPriority: -1
    },
    secondary: null,
    target: "scripted",
    type: "Fighting",
    maxMove: {
      basePower: 75
    },
    desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
    shortDesc: "If hit by physical attack, returns double damage.",
    id: "counter",
    fullname: "move: Counter",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  courtchange: {
    exists: true,
    num: 756,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Court Change",
    pp: 10,
    priority: 0,
    flags: {
      mirror: 1
    },
    secondary: null,
    target: "all",
    type: "Normal",
    desc: "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, G-Max Cannonade, G-Max Vine Lash, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
    shortDesc: "Swaps user's field effects with the opposing side.",
    id: "courtchange",
    fullname: "move: Court Change",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  covet: {
    exists: true,
    num: 343,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Covet",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failmefirst: 1,
      noassist: 1,
      failcopycat: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "If the user has no item, it steals the target's.",
    id: "covet",
    fullname: "move: Covet",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  crabhammer: {
    exists: true,
    num: 152,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Crabhammer",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "crabhammer",
    fullname: "move: Crabhammer",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  craftyshield: {
    exists: true,
    num: 578,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Crafty Shield",
    pp: 10,
    priority: 3,
    flags: {},
    sideCondition: "craftyshield",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "allySide",
    type: "Fairy",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "The user and its party members are protected from non-damaging attacks made by other Pokemon, including allies, during this turn. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
    shortDesc: "Protects allies from Status moves this turn.",
    id: "craftyshield",
    fullname: "move: Crafty Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  crosschop: {
    exists: true,
    num: 238,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Cross Chop",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "crosschop",
    fullname: "move: Cross Chop",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 180
    }
  },
  crosspoison: {
    exists: true,
    num: 440,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Cross Poison",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: {
      chance: 10,
      status: "psn"
    },
    critRatio: 2,
    target: "normal",
    type: "Poison",
    desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio. 10% chance to poison.",
    id: "crosspoison",
    fullname: "move: Cross Poison",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: [
      {
        chance: 10,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 140
    }
  },
  crunch: {
    exists: true,
    num: 242,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Crunch",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Dark",
    desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
    shortDesc: "20% chance to lower the target's Defense by 1.",
    id: "crunch",
    fullname: "move: Crunch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  crushclaw: {
    exists: true,
    num: 306,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Crush Claw",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
    shortDesc: "50% chance to lower the target's Defense by 1.",
    id: "crushclaw",
    fullname: "move: Crush Claw",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  crushgrip: {
    exists: true,
    num: 462,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Crush Grip",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 190
    },
    maxMove: {
      basePower: 140
    },
    desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
    shortDesc: "More power the more HP the target has left.",
    id: "crushgrip",
    fullname: "move: Crush Grip",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  curse: {
    exists: true,
    num: 174,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Curse",
    pp: 10,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    volatileStatus: "curse",
    condition: {
      onResidualOrder: 12
    },
    secondary: null,
    target: "normal",
    nonGhostTarget: "self",
    type: "Ghost",
    zMove: {
      effect: "curse"
    },
    desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected.",
    shortDesc: "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def.",
    id: "curse",
    fullname: "move: Curse",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  cut: {
    exists: true,
    num: 15,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Cut",
    pp: 30,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "cut",
    fullname: "move: Cut",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  darkestlariat: {
    exists: true,
    num: 663,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Darkest Lariat",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    ignoreEvasion: true,
    ignoreDefensive: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Ignores the target's stat stage changes, including evasiveness.",
    shortDesc: "Ignores the target's stat stage changes.",
    id: "darkestlariat",
    fullname: "move: Darkest Lariat",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  darkpulse: {
    exists: true,
    num: 399,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Dark Pulse",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      pulse: 1,
      mirror: 1,
      distance: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "any",
    type: "Dark",
    desc: "Has a 20% chance to make the target flinch.",
    shortDesc: "20% chance to make the target flinch.",
    id: "darkpulse",
    fullname: "move: Dark Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  darkvoid: {
    exists: true,
    num: 464,
    accuracy: 50,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Dark Void",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "slp",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dark",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Causes the target to fall asleep. This move cannot be used successfully unless the user's current form, while considering Transform, is Darkrai.",
    shortDesc: "Darkrai: Causes the foe(s) to fall asleep.",
    id: "darkvoid",
    fullname: "move: Dark Void",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dazzlinggleam: {
    exists: true,
    num: 605,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Dazzling Gleam",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fairy",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "dazzlinggleam",
    fullname: "move: Dazzling Gleam",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  decorate: {
    exists: true,
    num: 777,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Decorate",
    pp: 15,
    priority: 0,
    flags: {
      allyanim: 1
    },
    secondary: null,
    boosts: {
      atk: 2,
      spa: 2
    },
    target: "normal",
    type: "Fairy",
    desc: "Raises the target's Attack and Special Attack by 2 stages.",
    shortDesc: "Raises the target's Attack and Sp. Atk by 2.",
    id: "decorate",
    fullname: "move: Decorate",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  defendorder: {
    exists: true,
    num: 455,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defend Order",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Raises the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Raises the user's Defense and Sp. Def by 1.",
    id: "defendorder",
    fullname: "move: Defend Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  defensecurl: {
    exists: true,
    num: 111,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defense Curl",
    pp: 40,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 1
    },
    volatileStatus: "defensecurl",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "Raises the user's Defense by 1 stage. As long as the user remains active, the power of the user's Ice Ball and Rollout will be doubled (this effect is not stackable).",
    shortDesc: "Raises the user's Defense by 1.",
    id: "defensecurl",
    fullname: "move: Defense Curl",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  defog: {
    exists: true,
    num: 432,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defog",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness. If there is a terrain active and this move is successful, the terrain will be cleared.",
    shortDesc: "-1 evasion; clears terrain and hazards on both sides.",
    id: "defog",
    fullname: "move: Defog",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  destinybond: {
    exists: true,
    num: 194,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Destiny Bond",
    pp: 5,
    priority: 0,
    flags: {
      bypasssub: 1,
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "destinybond",
    condition: {
      onBeforeMovePriority: -1
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    zMove: {
      effect: "redirect"
    },
    desc: "Until the user's next move, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
    shortDesc: "If an opponent knocks out the user, it also faints.",
    id: "destinybond",
    fullname: "move: Destiny Bond",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  detect: {
    exists: true,
    num: 197,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Detect",
    pp: 5,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    volatileStatus: "protect",
    secondary: null,
    target: "self",
    type: "Fighting",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Prevents moves from affecting the user this turn.",
    id: "detect",
    fullname: "move: Detect",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  devastatingdrake: {
    exists: true,
    num: 652,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Devastating Drake",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "dragoniumz",
    secondary: null,
    target: "normal",
    type: "Dragon",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "devastatingdrake",
    fullname: "move: Devastating Drake",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  diamondstorm: {
    exists: true,
    num: 591,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Diamond Storm",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      chance: 50,
      boosts: {
        def: 2
      }
    },
    secondary: {},
    target: "allAdjacentFoes",
    type: "Rock",
    desc: "Has a 50% chance to raise the user's Defense by 2 stages.",
    shortDesc: "50% chance to raise user's Defense by 2.",
    id: "diamondstorm",
    fullname: "move: Diamond Storm",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {}
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  dig: {
    exists: true,
    num: 91,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dig",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Digs underground turn 1, strikes turn 2.",
    id: "dig",
    fullname: "move: Dig",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  disable: {
    exists: true,
    num: 50,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Disable",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "disable",
    condition: {
      duration: 5,
      noCopy: true,
      onResidualOrder: 17,
      onBeforeMovePriority: 7
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
    shortDesc: "For 4 turns, disables the target's last move used.",
    id: "disable",
    fullname: "move: Disable",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  disarmingvoice: {
    exists: true,
    num: 574,
    accuracy: true,
    basePower: 40,
    category: "Special",
    name: "Disarming Voice",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fairy",
    desc: "This move does not check accuracy.",
    shortDesc: "This move does not check accuracy. Hits foes.",
    id: "disarmingvoice",
    fullname: "move: Disarming Voice",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  discharge: {
    exists: true,
    num: 435,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Discharge",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "allAdjacent",
    type: "Electric",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze adjacent Pokemon.",
    id: "discharge",
    fullname: "move: Discharge",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dive: {
    exists: true,
    num: 291,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dive",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1,
      allyanim: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Dives underwater turn 1, strikes turn 2.",
    id: "dive",
    fullname: "move: Dive",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dizzypunch: {
    exists: true,
    num: 146,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Dizzy Punch",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 20% chance to confuse the target.",
    shortDesc: "20% chance to confuse the target.",
    id: "dizzypunch",
    fullname: "move: Dizzy Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  doodle: {
    exists: true,
    num: 867,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Doodle",
    pp: 10,
    priority: 0,
    flags: {},
    secondary: null,
    target: "adjacentFoe",
    type: "Normal",
    desc: "The user and its ally's Abilities change to match the target's Ability. Does not change Ability if the user's or its ally's is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, Zero to Hero, or already matches the target. Fails if both the user and its ally's Ability already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
    shortDesc: "User and ally's Abilities become target's Ability.",
    id: "doodle",
    fullname: "move: Doodle",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  doomdesire: {
    exists: true,
    num: 353,
    accuracy: 100,
    basePower: 140,
    category: "Special",
    isNonstandard: "Past",
    name: "Doom Desire",
    pp: 5,
    priority: 0,
    flags: {
      futuremove: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Future Sight is already in effect for the target's position.",
    shortDesc: "Hits two turns after being used.",
    id: "doomdesire",
    fullname: "move: Doom Desire",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  doubleedge: {
    exists: true,
    num: 38,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Double-Edge",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil.",
    id: "doubleedge",
    fullname: "move: Double-Edge",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  doublehit: {
    exists: true,
    num: 458,
    accuracy: 90,
    basePower: 35,
    category: "Physical",
    name: "Double Hit",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 120
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "doublehit",
    fullname: "move: Double Hit",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  doubleironbash: {
    exists: true,
    num: 742,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Double Iron Bash",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    multihit: 2,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Steel",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 140
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
    shortDesc: "Hits twice. 30% chance to make the target flinch.",
    id: "doubleironbash",
    fullname: "move: Double Iron Bash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  doublekick: {
    exists: true,
    num: 24,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Double Kick",
    pp: 30,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Fighting",
    maxMove: {
      basePower: 80
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "doublekick",
    fullname: "move: Double Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  doubleshock: {
    exists: true,
    num: 892,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Double Shock",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {},
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Fails unless the user is an Electric type. If this move is successful and the user is not Terastallized, the user's Electric type becomes typeless as long as it remains active.",
    shortDesc: "User's Electric type: typeless; must be Electric.",
    id: "doubleshock",
    fullname: "move: Double Shock",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  doubleslap: {
    exists: true,
    num: 3,
    accuracy: 85,
    basePower: 15,
    category: "Physical",
    isNonstandard: "Past",
    name: "Double Slap",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "doubleslap",
    fullname: "move: Double Slap",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  doubleteam: {
    exists: true,
    num: 104,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Double Team",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's evasiveness by 1 stage.",
    shortDesc: "Raises the user's evasiveness by 1.",
    id: "doubleteam",
    fullname: "move: Double Team",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dracometeor: {
    exists: true,
    num: 434,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Draco Meteor",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    desc: "Lowers the user's Special Attack by 2 stages.",
    shortDesc: "Lowers the user's Sp. Atk by 2.",
    id: "dracometeor",
    fullname: "move: Draco Meteor",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  dragonascent: {
    exists: true,
    num: 620,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Dragon Ascent",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    target: "any",
    type: "Flying",
    desc: "Lowers the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
    id: "dragonascent",
    fullname: "move: Dragon Ascent",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  dragonbreath: {
    exists: true,
    num: 225,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Dragon Breath",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Dragon",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze the target.",
    id: "dragonbreath",
    fullname: "move: Dragon Breath",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  dragonclaw: {
    exists: true,
    num: 337,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dragon Claw",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    shortDesc: "No additional effect.",
    id: "dragonclaw",
    fullname: "move: Dragon Claw",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dragondance: {
    exists: true,
    num: 349,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dragon Dance",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      dance: 1
    },
    boosts: {
      atk: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Dragon",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Attack and Speed by 1 stage.",
    shortDesc: "Raises the user's Attack and Speed by 1.",
    id: "dragondance",
    fullname: "move: Dragon Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dragondarts: {
    exists: true,
    num: 751,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Dragon Darts",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      noparentalbond: 1
    },
    multihit: 2,
    smartTarget: true,
    secondary: null,
    target: "normal",
    type: "Dragon",
    maxMove: {
      basePower: 130
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokemon and its ally once each. If hitting one of these Pokemon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokemon twice instead. If this move is redirected, it hits that target twice.",
    shortDesc: "Hits twice. Doubles: Tries to hit each foe once.",
    id: "dragondarts",
    fullname: "move: Dragon Darts",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  dragonenergy: {
    exists: true,
    num: 820,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Dragon Energy",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dragon",
    desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
    shortDesc: "Less power as user's HP decreases. Hits foe(s).",
    id: "dragonenergy",
    fullname: "move: Dragon Energy",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  dragonhammer: {
    exists: true,
    num: 692,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Dragon Hammer",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    shortDesc: "No additional effect.",
    id: "dragonhammer",
    fullname: "move: Dragon Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  dragonpulse: {
    exists: true,
    num: 406,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Dragon Pulse",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      pulse: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Dragon",
    shortDesc: "No additional effect.",
    id: "dragonpulse",
    fullname: "move: Dragon Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dragonrage: {
    exists: true,
    num: 82,
    accuracy: 100,
    basePower: 0,
    damage: 40,
    category: "Special",
    isNonstandard: "Past",
    name: "Dragon Rage",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    shortDesc: "Deals 40 HP of damage to the target.",
    id: "dragonrage",
    fullname: "move: Dragon Rage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Deals 40 HP of damage to the target.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  dragonrush: {
    exists: true,
    num: 407,
    accuracy: 75,
    basePower: 100,
    category: "Physical",
    name: "Dragon Rush",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Dragon",
    desc: "Has a 20% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "20% chance to make the target flinch.",
    id: "dragonrush",
    fullname: "move: Dragon Rush",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  dragontail: {
    exists: true,
    num: 525,
    accuracy: 90,
    basePower: 60,
    category: "Physical",
    name: "Dragon Tail",
    pp: 10,
    priority: -6,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      noassist: 1,
      failcopycat: 1
    },
    forceSwitch: true,
    target: "normal",
    type: "Dragon",
    desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute.",
    shortDesc: "Forces the target to switch to a random ally.",
    id: "dragontail",
    fullname: "move: Dragon Tail",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  drainingkiss: {
    exists: true,
    num: 577,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Draining Kiss",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      3,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Fairy",
    desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 75% of the damage dealt.",
    id: "drainingkiss",
    fullname: "move: Draining Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  drainpunch: {
    exists: true,
    num: 409,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Drain Punch",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "drainpunch",
    fullname: "move: Drain Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 140
    }
  },
  dreameater: {
    exists: true,
    num: 138,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Dream Eater",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User gains 1/2 HP inflicted. Sleeping target only.",
    id: "dreameater",
    fullname: "move: Dream Eater",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  drillpeck: {
    exists: true,
    num: 65,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Drill Peck",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "No additional effect.",
    id: "drillpeck",
    fullname: "move: Drill Peck",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  drillrun: {
    exists: true,
    num: 529,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Drill Run",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Ground",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "drillrun",
    fullname: "move: Drill Run",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  drumbeating: {
    exists: true,
    num: 778,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Drum Beating",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    id: "drumbeating",
    fullname: "move: Drum Beating",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dualchop: {
    exists: true,
    num: 530,
    accuracy: 90,
    basePower: 40,
    category: "Physical",
    isNonstandard: "Past",
    name: "Dual Chop",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Dragon",
    maxMove: {
      basePower: 130
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "dualchop",
    fullname: "move: Dual Chop",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  dualwingbeat: {
    exists: true,
    num: 814,
    accuracy: 90,
    basePower: 40,
    category: "Physical",
    name: "Dual Wingbeat",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Flying",
    maxMove: {
      basePower: 130
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "dualwingbeat",
    fullname: "move: Dual Wingbeat",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  dynamaxcannon: {
    exists: true,
    num: 744,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Dynamax Cannon",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      failencore: 1,
      nosleeptalk: 1,
      noparentalbond: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    shortDesc: "No additional effect.",
    id: "dynamaxcannon",
    fullname: "move: Dynamax Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  dynamicpunch: {
    exists: true,
    num: 223,
    accuracy: 50,
    basePower: 100,
    category: "Physical",
    name: "Dynamic Punch",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 100,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 100% chance to confuse the target.",
    shortDesc: "100% chance to confuse the target.",
    id: "dynamicpunch",
    fullname: "move: Dynamic Punch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 180
    }
  },
  earthpower: {
    exists: true,
    num: 414,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Earth Power",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "earthpower",
    fullname: "move: Earth Power",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  earthquake: {
    exists: true,
    num: 89,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Earthquake",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Ground",
    desc: "Damage doubles if the target is using Dig.",
    shortDesc: "Hits adjacent Pokemon. Double damage on Dig.",
    id: "earthquake",
    fullname: "move: Earthquake",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  echoedvoice: {
    exists: true,
    num: 497,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Echoed Voice",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "For every consecutive turn that this move is used by at least one Pokemon, this move's power is multiplied by the number of turns to pass, but not more than 5.",
    shortDesc: "Power increases when used on consecutive turns.",
    id: "echoedvoice",
    fullname: "move: Echoed Voice",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  eerieimpulse: {
    exists: true,
    num: 598,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Eerie Impulse",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      spa: -2
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Lowers the target's Special Attack by 2 stages.",
    shortDesc: "Lowers the target's Sp. Atk by 2.",
    id: "eerieimpulse",
    fullname: "move: Eerie Impulse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  eeriespell: {
    exists: true,
    num: 826,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Eerie Spell",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Psychic",
    desc: "If this move is successful and the user has not fainted, the target loses 3 PP from its last move.",
    shortDesc: "Removes 3 PP from the target's last move.",
    id: "eeriespell",
    fullname: "move: Eerie Spell",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  eggbomb: {
    exists: true,
    num: 121,
    accuracy: 75,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Egg Bomb",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "eggbomb",
    fullname: "move: Egg Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  electricterrain: {
    exists: true,
    num: 604,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Electric Terrain",
    pp: 10,
    priority: 0,
    flags: {
      nonsky: 1
    },
    terrain: "electricterrain",
    condition: {
      duration: 5,
      onBasePowerPriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    secondary: null,
    target: "all",
    type: "Electric",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Grounded Pokemon cannot become affected by Yawn or fall asleep from its effect. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.",
    shortDesc: "5 turns. Grounded: +Electric power, can't sleep.",
    id: "electricterrain",
    fullname: "move: Electric Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electrify: {
    exists: true,
    num: 582,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Electrify",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1
    },
    volatileStatus: "electrify",
    condition: {
      duration: 1,
      onModifyTypePriority: -2
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the target's move to become Electric type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
    shortDesc: "Changes the target's move to Electric this turn.",
    id: "electrify",
    fullname: "move: Electrify",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electroball: {
    exists: true,
    num: 486,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Electro Ball",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The power of this move depends on (user's current Speed / target's current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target's current Speed is 0, this move's power is 40.",
    shortDesc: "More power the faster the user is than the target.",
    id: "electroball",
    fullname: "move: Electro Ball",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electrodrift: {
    exists: true,
    num: 879,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Electro Drift",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Damage is multiplied by 1.3333 if this move is super effective against the target.",
    shortDesc: "Deals 1.3333x damage with supereffective hits.",
    id: "electrodrift",
    fullname: "move: Electro Drift",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  electroweb: {
    exists: true,
    num: 527,
    accuracy: 95,
    basePower: 55,
    category: "Special",
    name: "Electroweb",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Electric",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Speed by 1.",
    id: "electroweb",
    fullname: "move: Electroweb",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  embargo: {
    exists: true,
    num: 373,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Embargo",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "embargo",
    condition: {
      duration: 5,
      onResidualOrder: 21
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "For 5 turns, the target's held item has no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by the target. Items thrown at the target with Fling will still activate for it. If the target uses Baton Pass, the replacement will remain unable to use items.",
    shortDesc: "For 5 turns, the target's item has no effect.",
    id: "embargo",
    fullname: "move: Embargo",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ember: {
    exists: true,
    num: 52,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Ember",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target.",
    id: "ember",
    fullname: "move: Ember",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  encore: {
    exists: true,
    num: 227,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Encore",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1,
      failencore: 1
    },
    volatileStatus: "encore",
    condition: {
      duration: 3,
      noCopy: true,
      onResidualOrder: 16
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Blazing Torque, Combat Torque, Copycat, Dynamax Cannon, Encore, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Transform, or Wicked Torque.",
    shortDesc: "Target repeats its last move for its next 3 turns.",
    id: "encore",
    fullname: "move: Encore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  endeavor: {
    exists: true,
    num: 283,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Endeavor",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      noparentalbond: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Deals damage to the target equal to (target's current HP - user's current HP). The target is unaffected if its current HP is less than or equal to the user's current HP.",
    shortDesc: "Lowers the target's HP to the user's HP.",
    id: "endeavor",
    fullname: "move: Endeavor",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  endure: {
    exists: true,
    num: 203,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Endure",
    pp: 10,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    volatileStatus: "endure",
    condition: {
      duration: 1,
      onDamagePriority: -10
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "User survives attacks this turn with at least 1 HP.",
    id: "endure",
    fullname: "move: Endure",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  energyball: {
    exists: true,
    num: 412,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Energy Ball",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "energyball",
    fullname: "move: Energy Ball",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  entrainment: {
    exists: true,
    num: 494,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Entrainment",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Truant, Zen Mode, Zero to Hero, or the same Ability as the user, or if the user's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Zen Mode, or Zero to Hero.",
    shortDesc: "The target's Ability changes to match the user's.",
    id: "entrainment",
    fullname: "move: Entrainment",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  eruption: {
    exists: true,
    num: 284,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Eruption",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fire",
    desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
    shortDesc: "Less power as user's HP decreases. Hits foe(s).",
    id: "eruption",
    fullname: "move: Eruption",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  eternabeam: {
    exists: true,
    num: 795,
    accuracy: 90,
    basePower: 160,
    category: "Special",
    isNonstandard: "Past",
    name: "Eternabeam",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "eternabeam",
    fullname: "move: Eternabeam",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  expandingforce: {
    exists: true,
    num: 797,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Expanding Force",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokemon and has its power multiplied by 1.5.",
    shortDesc: "User on Psychic Terrain: 1.5x power, hits foes.",
    id: "expandingforce",
    fullname: "move: Expanding Force",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  explosion: {
    exists: true,
    num: 153,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "Explosion",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      noparentalbond: 1
    },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
    shortDesc: "Hits adjacent Pokemon. The user faints.",
    id: "explosion",
    fullname: "move: Explosion",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  extrasensory: {
    exists: true,
    num: 326,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Extrasensory",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 10% chance to make the target flinch.",
    shortDesc: "10% chance to make the target flinch.",
    id: "extrasensory",
    fullname: "move: Extrasensory",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  extremeevoboost: {
    exists: true,
    num: 702,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Extreme Evoboost",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "eeviumz",
    boosts: {
      atk: 2,
      def: 2,
      spa: 2,
      spd: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 2 stages.",
    shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 2.",
    id: "extremeevoboost",
    fullname: "move: Extreme Evoboost",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isMax: false,
    ignoreAbility: false
  },
  extremespeed: {
    exists: true,
    num: 245,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Extreme Speed",
    pp: 5,
    priority: 2,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "No additional effect.",
    shortDesc: "Nearly always goes first.",
    id: "extremespeed",
    fullname: "move: Extreme Speed",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  facade: {
    exists: true,
    num: 263,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Facade",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user's burn is ignored.",
    shortDesc: "Power doubles if user is burn/poison/paralyzed.",
    id: "facade",
    fullname: "move: Facade",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  fairylock: {
    exists: true,
    num: 587,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fairy Lock",
    pp: 10,
    priority: 0,
    flags: {
      mirror: 1,
      bypasssub: 1
    },
    pseudoWeather: "fairylock",
    condition: {
      duration: 2
    },
    secondary: null,
    target: "all",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Prevents all active Pokemon from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the effect is already active.",
    shortDesc: "Prevents all Pokemon from switching next turn.",
    id: "fairylock",
    fullname: "move: Fairy Lock",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  fairywind: {
    exists: true,
    num: 584,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Fairy Wind",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    shortDesc: "No additional effect.",
    id: "fairywind",
    fullname: "move: Fairy Wind",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  fakeout: {
    exists: true,
    num: 252,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Fake Out",
    pp: 10,
    priority: 3,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
    shortDesc: "Hits first. First turn out only. 100% flinch chance.",
    id: "fakeout",
    fullname: "move: Fake Out",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  faketears: {
    exists: true,
    num: 313,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Fake Tears",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    boosts: {
      spd: -2
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Lowers the target's Special Defense by 2 stages.",
    shortDesc: "Lowers the target's Sp. Def by 2.",
    id: "faketears",
    fullname: "move: Fake Tears",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  falsesurrender: {
    exists: true,
    num: 793,
    accuracy: true,
    basePower: 80,
    category: "Physical",
    name: "False Surrender",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    shortDesc: "This move does not check accuracy.",
    id: "falsesurrender",
    fullname: "move: False Surrender",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  falseswipe: {
    exists: true,
    num: 206,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "False Swipe",
    pp: 40,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    onDamagePriority: -20,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Leaves the target with at least 1 HP.",
    shortDesc: "Always leaves the target with at least 1 HP.",
    id: "falseswipe",
    fullname: "move: False Swipe",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  featherdance: {
    exists: true,
    num: 297,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Feather Dance",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1,
      dance: 1
    },
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 2 stages.",
    shortDesc: "Lowers the target's Attack by 2.",
    id: "featherdance",
    fullname: "move: Feather Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  feint: {
    exists: true,
    num: 364,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Feint",
    pp: 10,
    priority: 2,
    flags: {
      mirror: 1,
      noassist: 1,
      failcopycat: 1
    },
    breaksProtect: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
    shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard.",
    id: "feint",
    fullname: "move: Feint",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  feintattack: {
    exists: true,
    num: 185,
    accuracy: true,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Feint Attack",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    shortDesc: "This move does not check accuracy.",
    id: "feintattack",
    fullname: "move: Feint Attack",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    desc: "This move does not check accuracy.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  fellstinger: {
    exists: true,
    num: 565,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Fell Stinger",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "Raises the user's Attack by 3 stages if this move knocks out the target.",
    shortDesc: "Raises user's Attack by 3 if this KOes the target.",
    id: "fellstinger",
    fullname: "move: Fell Stinger",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  fierydance: {
    exists: true,
    num: 552,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Fiery Dance",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      dance: 1
    },
    secondary: {
      chance: 50,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 50% chance to raise the user's Special Attack by 1 stage.",
    shortDesc: "50% chance to raise the user's Sp. Atk by 1.",
    id: "fierydance",
    fullname: "move: Fiery Dance",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  fierywrath: {
    exists: true,
    num: 822,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Fiery Wrath",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Dark",
    desc: "Has a 20% chance to make the target flinch.",
    shortDesc: "20% chance to make the foe(s) flinch.",
    id: "fierywrath",
    fullname: "move: Fiery Wrath",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  filletaway: {
    exists: true,
    num: 868,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fillet Away",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 2,
      spa: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "Raises the user's Attack, Special Attack, and Speed by 2 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Special Attack, and Speed stat stages would not change.",
    shortDesc: "+2 Attack, Sp. Atk, Speed for 1/2 user's max HP.",
    id: "filletaway",
    fullname: "move: Fillet Away",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  finalgambit: {
    exists: true,
    num: 515,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Final Gambit",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      noparentalbond: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: {
      basePower: 180
    },
    desc: "Deals damage to the target equal to the user's current HP. If this move is successful, the user faints.",
    shortDesc: "Does damage equal to the user's HP. User faints.",
    id: "finalgambit",
    fullname: "move: Final Gambit",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  fireblast: {
    exists: true,
    num: 126,
    accuracy: 85,
    basePower: 110,
    category: "Special",
    name: "Fire Blast",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target.",
    id: "fireblast",
    fullname: "move: Fire Blast",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  firefang: {
    exists: true,
    num: 424,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Fire Fang",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondaries: [
      {
        chance: 10,
        status: "brn"
      },
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
    shortDesc: "10% chance to burn. 10% chance to flinch.",
    id: "firefang",
    fullname: "move: Fire Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  firelash: {
    exists: true,
    num: 680,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Fire Lash",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
    shortDesc: "100% chance to lower the target's Defense by 1.",
    id: "firelash",
    fullname: "move: Fire Lash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  firepledge: {
    exists: true,
    num: 519,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Fire Pledge",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1,
      pledgecombo: 1
    },
    condition: {
      duration: 4,
      onResidualOrder: 5,
      onResidualSubOrder: 1,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 8
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
    shortDesc: "Use with Grass or Water Pledge for added effect.",
    id: "firepledge",
    fullname: "move: Fire Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  firepunch: {
    exists: true,
    num: 7,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Fire Punch",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target.",
    id: "firepunch",
    fullname: "move: Fire Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  firespin: {
    exists: true,
    num: 83,
    accuracy: 85,
    basePower: 35,
    category: "Special",
    name: "Fire Spin",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "firespin",
    fullname: "move: Fire Spin",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  firstimpression: {
    exists: true,
    num: 660,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "First Impression",
    pp: 10,
    priority: 2,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "Fails unless it is the user's first turn on the field.",
    shortDesc: "Hits first. First turn out only.",
    id: "firstimpression",
    fullname: "move: First Impression",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  fishiousrend: {
    exists: true,
    num: 755,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    isNonstandard: "Past",
    name: "Fishious Rend",
    pp: 10,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Power doubles if the user moves before the target.",
    shortDesc: "Power doubles if user moves before the target.",
    id: "fishiousrend",
    fullname: "move: Fishious Rend",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  fissure: {
    exists: true,
    num: 90,
    accuracy: 30,
    basePower: 0,
    category: "Physical",
    name: "Fissure",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
    shortDesc: "OHKOs the target. Fails if user is a lower level.",
    id: "fissure",
    fullname: "move: Fissure",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flail: {
    exists: true,
    num: 175,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Flail",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
    shortDesc: "More power the less HP the user has left.",
    id: "flail",
    fullname: "move: Flail",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flameburst: {
    exists: true,
    num: 481,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    isNonstandard: "Past",
    name: "Flame Burst",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "If this move is successful, the target's ally loses 1/16 of its maximum HP, rounded down, unless it has the Magic Guard Ability.",
    shortDesc: "Damages Pokemon next to the target as well.",
    id: "flameburst",
    fullname: "move: Flame Burst",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  flamecharge: {
    exists: true,
    num: 488,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Flame Charge",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
    shortDesc: "100% chance to raise the user's Speed by 1.",
    id: "flamecharge",
    fullname: "move: Flame Charge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  flamewheel: {
    exists: true,
    num: 172,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Flame Wheel",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target. Thaws user.",
    id: "flamewheel",
    fullname: "move: Flame Wheel",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  flamethrower: {
    exists: true,
    num: 53,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Flamethrower",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target.",
    id: "flamethrower",
    fullname: "move: Flamethrower",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  flareblitz: {
    exists: true,
    num: 394,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Flare Blitz",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil. 10% chance to burn. Thaws user.",
    id: "flareblitz",
    fullname: "move: Flare Blitz",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  flash: {
    exists: true,
    num: 148,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Flash",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    id: "flash",
    fullname: "move: Flash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flashcannon: {
    exists: true,
    num: 430,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Flash Cannon",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "flashcannon",
    fullname: "move: Flash Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  flatter: {
    exists: true,
    num: 260,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Flatter",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    volatileStatus: "confusion",
    boosts: {
      spa: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Raises the target's Special Attack by 1 stage and confuses it.",
    shortDesc: "Raises the target's Sp. Atk by 1 and confuses it.",
    id: "flatter",
    fullname: "move: Flatter",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  fleurcannon: {
    exists: true,
    num: 705,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Fleur Cannon",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    desc: "Lowers the user's Special Attack by 2 stages.",
    shortDesc: "Lowers the user's Sp. Atk by 2.",
    id: "fleurcannon",
    fullname: "move: Fleur Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  fling: {
    exists: true,
    num: 374,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Fling",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1,
      noparentalbond: 1
    },
    condition: {},
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "The power of this move is based on the user's held item. The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user's held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability.",
    shortDesc: "Flings the user's item at the target. Power varies.",
    id: "fling",
    fullname: "move: Fling",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  flipturn: {
    exists: true,
    num: 812,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Flip Turn",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
    shortDesc: "User switches out after damaging the target.",
    id: "flipturn",
    fullname: "move: Flip Turn",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  floralhealing: {
    exists: true,
    num: 666,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Floral Healing",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      heal: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The target restores 1/2 of its maximum HP, rounded half up. If the terrain is Grassy Terrain, the target instead restores 2/3 of its maximum HP, rounded half down.",
    shortDesc: "Heals the target by 50% of its max HP.",
    id: "floralhealing",
    fullname: "move: Floral Healing",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flowershield: {
    exists: true,
    num: 579,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Flower Shield",
    pp: 10,
    priority: 0,
    flags: {
      distance: 1
    },
    secondary: null,
    target: "all",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Raises the Defense of all active Grass-type Pokemon by 1 stage. Fails if there are no active Grass-type Pokemon.",
    shortDesc: "Raises Defense by 1 of all active Grass types.",
    id: "flowershield",
    fullname: "move: Flower Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flowertrick: {
    exists: true,
    num: 870,
    accuracy: true,
    basePower: 70,
    category: "Physical",
    name: "Flower Trick",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities. This move does not check accuracy.",
    shortDesc: "Always results in a critical hit; no accuracy check.",
    id: "flowertrick",
    fullname: "move: Flower Trick",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  fly: {
    exists: true,
    num: 19,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Fly",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    condition: {
      duration: 2
    },
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Flies up on first turn, then strikes the next turn.",
    id: "fly",
    fullname: "move: Fly",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  flyingpress: {
    exists: true,
    num: 560,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Flying Press",
    pp: 10,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      nonsky: 1
    },
    priority: 0,
    secondary: null,
    target: "any",
    type: "Fighting",
    zMove: {
      basePower: 170
    },
    desc: "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "Combines Flying in its type effectiveness.",
    id: "flyingpress",
    fullname: "move: Flying Press",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  focusblast: {
    exists: true,
    num: 411,
    accuracy: 70,
    basePower: 120,
    category: "Special",
    name: "Focus Blast",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "focusblast",
    fullname: "move: Focus Blast",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  focusenergy: {
    exists: true,
    num: 116,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Focus Energy",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "focusenergy",
    condition: {},
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "Raises the user's chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
    shortDesc: "Raises the user's critical hit ratio by 2.",
    id: "focusenergy",
    fullname: "move: Focus Energy",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  focuspunch: {
    exists: true,
    num: 264,
    accuracy: 100,
    basePower: 150,
    category: "Physical",
    name: "Focus Punch",
    pp: 20,
    priority: -3,
    flags: {
      contact: 1,
      protect: 1,
      punch: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1
    },
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
    shortDesc: "Fails if the user takes damage before it hits.",
    id: "focuspunch",
    fullname: "move: Focus Punch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 200
    }
  },
  followme: {
    exists: true,
    num: 266,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Follow Me",
    pp: 20,
    priority: 2,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "followme",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
    shortDesc: "The foes' moves target the user on the turn used.",
    id: "followme",
    fullname: "move: Follow Me",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  forcepalm: {
    exists: true,
    num: 395,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Force Palm",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze the target.",
    id: "forcepalm",
    fullname: "move: Force Palm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  foresight: {
    exists: true,
    num: 193,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Foresight",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "foresight",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "crit2"
    },
    desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
    shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
    id: "foresight",
    fullname: "move: Foresight",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  forestscurse: {
    exists: true,
    num: 571,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Forest's Curse",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "Causes the Grass type to be added to the target, effectively making it have two or three types. Fails if the target is already a Grass type. If Trick-or-Treat adds a type to the target, it replaces the type added by this move and vice versa.",
    shortDesc: "Adds Grass to the target's type(s).",
    id: "forestscurse",
    fullname: "move: Forest's Curse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  foulplay: {
    exists: true,
    num: 492,
    accuracy: 100,
    basePower: 95,
    category: "Physical",
    name: "Foul Play",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    overrideOffensivePokemon: "target",
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Damage is calculated using the target's Attack stat, including stat stage changes. The user's Ability, item, and burn are used as normal.",
    shortDesc: "Uses target's Attack stat in damage calculation.",
    id: "foulplay",
    fullname: "move: Foul Play",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  freezedry: {
    exists: true,
    num: 573,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Freeze-Dry",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target. This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
    shortDesc: "10% chance to freeze. Super effective on Water.",
    id: "freezedry",
    fullname: "move: Freeze-Dry",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  freezeshock: {
    exists: true,
    num: 553,
    accuracy: 90,
    basePower: 140,
    category: "Physical",
    isNonstandard: "Past",
    name: "Freeze Shock",
    pp: 5,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Charges turn 1. Hits turn 2. 30% paralyze.",
    id: "freezeshock",
    fullname: "move: Freeze Shock",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  freezingglare: {
    exists: true,
    num: 821,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Freezing Glare",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 10% chance to freeze the target.",
    shortDesc: "10% chance to freeze the target.",
    id: "freezingglare",
    fullname: "move: Freezing Glare",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  frenzyplant: {
    exists: true,
    num: 338,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Frenzy Plant",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "frenzyplant",
    fullname: "move: Frenzy Plant",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  frostbreath: {
    exists: true,
    num: 524,
    accuracy: 90,
    basePower: 60,
    category: "Special",
    name: "Frost Breath",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
    shortDesc: "Always results in a critical hit.",
    id: "frostbreath",
    fullname: "move: Frost Breath",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  frustration: {
    exists: true,
    num: 218,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Frustration",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to the greater of ((255 - user's Happiness) * 2/5), rounded down, or 1.",
    shortDesc: "Max 102 power at minimum Happiness.",
    id: "frustration",
    fullname: "move: Frustration",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  furyattack: {
    exists: true,
    num: 31,
    accuracy: 85,
    basePower: 15,
    category: "Physical",
    name: "Fury Attack",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "furyattack",
    fullname: "move: Fury Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  furycutter: {
    exists: true,
    num: 210,
    accuracy: 95,
    basePower: 40,
    category: "Physical",
    name: "Fury Cutter",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used.",
    shortDesc: "Power doubles with each hit, up to 160.",
    id: "furycutter",
    fullname: "move: Fury Cutter",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  furyswipes: {
    exists: true,
    num: 154,
    accuracy: 80,
    basePower: 18,
    category: "Physical",
    name: "Fury Swipes",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 100
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "furyswipes",
    fullname: "move: Fury Swipes",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  fusionbolt: {
    exists: true,
    num: 559,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Fusion Bolt",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Flare.",
    shortDesc: "Power doubles if used after Fusion Flare this turn.",
    id: "fusionbolt",
    fullname: "move: Fusion Bolt",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  fusionflare: {
    exists: true,
    num: 558,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Fusion Flare",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Bolt.",
    shortDesc: "Power doubles if used after Fusion Bolt this turn.",
    id: "fusionflare",
    fullname: "move: Fusion Flare",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  futuresight: {
    exists: true,
    num: 248,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Future Sight",
    pp: 10,
    priority: 0,
    flags: {
      allyanim: 1,
      futuremove: 1
    },
    ignoreImmunity: true,
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
    shortDesc: "Hits two turns after being used.",
    id: "futuresight",
    fullname: "move: Future Sight",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  gastroacid: {
    exists: true,
    num: 380,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Gastro Acid",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    volatileStatus: "gastroacid",
    condition: {},
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, or Zero to Hero, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
    shortDesc: "Nullifies the target's Ability.",
    id: "gastroacid",
    fullname: "move: Gastro Acid",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  geargrind: {
    exists: true,
    num: 544,
    accuracy: 85,
    basePower: 50,
    category: "Physical",
    isNonstandard: "Past",
    name: "Gear Grind",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "geargrind",
    fullname: "move: Gear Grind",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gearup: {
    exists: true,
    num: 674,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Gear Up",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allySide",
    type: "Steel",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Raises the Attack and Special Attack of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
    shortDesc: "Raises Atk, Sp. Atk of allies with Plus/Minus by 1.",
    id: "gearup",
    fullname: "move: Gear Up",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  genesissupernova: {
    exists: true,
    num: 703,
    accuracy: true,
    basePower: 185,
    category: "Special",
    isNonstandard: "Past",
    name: "Genesis Supernova",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "mewniumz",
    secondary: {
      chance: 100,
      self: {}
    },
    target: "normal",
    type: "Psychic",
    desc: "If this move is successful, the terrain becomes Psychic Terrain.",
    shortDesc: "Summons Psychic Terrain.",
    id: "genesissupernova",
    fullname: "move: Genesis Supernova",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {}
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  geomancy: {
    exists: true,
    num: 601,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Geomancy",
    pp: 10,
    priority: 0,
    flags: {
      charge: 1,
      nonsky: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    boosts: {
      spa: 2,
      spd: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Fairy",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "Raises the user's Special Attack, Special Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Charges, then raises SpA, SpD, Spe by 2 turn 2.",
    id: "geomancy",
    fullname: "move: Geomancy",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gigadrain: {
    exists: true,
    num: 202,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Giga Drain",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "gigadrain",
    fullname: "move: Giga Drain",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  gigaimpact: {
    exists: true,
    num: 416,
    accuracy: 90,
    basePower: 150,
    category: "Physical",
    name: "Giga Impact",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "gigaimpact",
    fullname: "move: Giga Impact",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  gigatonhammer: {
    exists: true,
    num: 893,
    accuracy: 100,
    basePower: 160,
    category: "Physical",
    name: "Gigaton Hammer",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    condition: {},
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "Cannot be used twice in a row.",
    id: "gigatonhammer",
    fullname: "move: Gigaton Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    desc: "Cannot be used twice in a row.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  gigavolthavoc: {
    exists: true,
    num: 646,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Gigavolt Havoc",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "electriumz",
    secondary: null,
    target: "normal",
    type: "Electric",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "gigavolthavoc",
    fullname: "move: Gigavolt Havoc",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  glaciallance: {
    exists: true,
    num: 824,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Glacial Lance",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ice",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "glaciallance",
    fullname: "move: Glacial Lance",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  glaciate: {
    exists: true,
    num: 549,
    accuracy: 95,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Glaciate",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Ice",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Speed by 1.",
    id: "glaciate",
    fullname: "move: Glaciate",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  glaiverush: {
    exists: true,
    num: 862,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Glaive Rush",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "glaiverush"
    },
    condition: {
      noCopy: true,
      onBeforeMovePriority: 100
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    desc: "If this move is successful, moves targeted at the user deal double damage and do not check accuracy until the user's next turn.",
    shortDesc: "User takes sure-hit 2x damage until its next turn.",
    id: "glaiverush",
    fullname: "move: Glaive Rush",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  glare: {
    exists: true,
    num: 137,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Glare",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "par",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Paralyzes the target.",
    shortDesc: "Paralyzes the target.",
    id: "glare",
    fullname: "move: Glare",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grassknot: {
    exists: true,
    num: 447,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Grass Knot",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
    shortDesc: "More power the heavier the target.",
    id: "grassknot",
    fullname: "move: Grass Knot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grasspledge: {
    exists: true,
    num: 520,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Grass Pledge",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1,
      pledgecombo: 1
    },
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 9
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
    shortDesc: "Use with Fire or Water Pledge for added effect.",
    id: "grasspledge",
    fullname: "move: Grass Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  grasswhistle: {
    exists: true,
    num: 320,
    accuracy: 55,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Grass Whistle",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "grasswhistle",
    fullname: "move: Grass Whistle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "Causes the target to fall asleep.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grassyglide: {
    exists: true,
    num: 803,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Grassy Glide",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "If the current terrain is Grassy Terrain and the user is grounded, this move has its priority increased by 1.",
    shortDesc: "User on Grassy Terrain: +1 priority.",
    id: "grassyglide",
    fullname: "move: Grassy Glide",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  grassyterrain: {
    exists: true,
    num: 580,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Grassy Terrain",
    pp: 10,
    priority: 0,
    flags: {
      nonsky: 1
    },
    terrain: "grassyterrain",
    condition: {
      duration: 5,
      onBasePowerPriority: 6,
      onResidualOrder: 5,
      onResidualSubOrder: 2,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    secondary: null,
    target: "all",
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
    shortDesc: "5 turns. Grounded: +Grass power, +1/16 max HP.",
    id: "grassyterrain",
    fullname: "move: Grassy Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gravapple: {
    exists: true,
    num: 788,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Grav Apple",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 100% chance to lower the target's Defense by 1 stage. Power is multiplied by 1.5 during Gravity's effect.",
    shortDesc: "Target: 100% -1 Def. During Gravity: 1.5x power.",
    id: "gravapple",
    fullname: "move: Grav Apple",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  gravity: {
    exists: true,
    num: 356,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Gravity",
    pp: 5,
    priority: 0,
    flags: {
      nonsky: 1
    },
    pseudoWeather: "gravity",
    condition: {
      duration: 5,
      onBeforeMovePriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 2
    },
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "For 5 turns, the evasiveness of all active Pokemon is multiplied by 0.6. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, Flying Press, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability can affect Flying types or Pokemon with the Levitate Ability. Fails if this move is already in effect.",
    shortDesc: "5 turns: no Ground immunities, 1.67x accuracy.",
    id: "gravity",
    fullname: "move: Gravity",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  growl: {
    exists: true,
    num: 45,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Growl",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 1 stage.",
    shortDesc: "Lowers the foe(s) Attack by 1.",
    id: "growl",
    fullname: "move: Growl",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  growth: {
    exists: true,
    num: 74,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Growth",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1,
      spa: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
    shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
    id: "growth",
    fullname: "move: Growth",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grudge: {
    exists: true,
    num: 288,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Grudge",
    pp: 5,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    volatileStatus: "grudge",
    condition: {
      onBeforeMovePriority: 100
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    zMove: {
      effect: "redirect"
    },
    desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that move loses all its remaining PP.",
    shortDesc: "If the user faints, the attack used loses all its PP.",
    id: "grudge",
    fullname: "move: Grudge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  guardianofalola: {
    exists: true,
    num: 698,
    accuracy: true,
    basePower: 0,
    category: "Special",
    isNonstandard: "Past",
    name: "Guardian of Alola",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "tapuniumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    desc: "Deals damage to the target equal to 3/4 of its current HP, rounded down, but not less than 1 HP.",
    shortDesc: "Does damage equal to 3/4 target's current HP.",
    id: "guardianofalola",
    fullname: "move: Guardian of Alola",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  guardsplit: {
    exists: true,
    num: 470,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Guard Split",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user and the target have their Defense and Special Defense stats set to be equal to the average of the user and the target's Defense and Special Defense stats, respectively, rounded down. Stat stage changes are unaffected.",
    shortDesc: "Averages Defense and Sp. Def stats with target.",
    id: "guardsplit",
    fullname: "move: Guard Split",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  guardswap: {
    exists: true,
    num: 385,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Guard Swap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user swaps its Defense and Special Defense stat stage changes with the target.",
    shortDesc: "Swaps Defense and Sp. Def changes with target.",
    id: "guardswap",
    fullname: "move: Guard Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  guillotine: {
    exists: true,
    num: 12,
    accuracy: 30,
    basePower: 0,
    category: "Physical",
    name: "Guillotine",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
    shortDesc: "OHKOs the target. Fails if user is a lower level.",
    id: "guillotine",
    fullname: "move: Guillotine",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gunkshot: {
    exists: true,
    num: 441,
    accuracy: 80,
    basePower: 120,
    category: "Physical",
    name: "Gunk Shot",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 30% chance to poison the target.",
    shortDesc: "30% chance to poison the target.",
    id: "gunkshot",
    fullname: "move: Gunk Shot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  gust: {
    exists: true,
    num: 16,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Gust",
    pp: 35,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      distance: 1,
      wind: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
    shortDesc: "Power doubles during Bounce, Fly, and Sky Drop.",
    id: "gust",
    fullname: "move: Gust",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  gyroball: {
    exists: true,
    num: 360,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Gyro Ball",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to (25 * target's current Speed / user's current Speed) + 1, rounded down, but not more than 150. If the user's current Speed is 0, this move's power is 1.",
    shortDesc: "More power the slower the user than the target.",
    id: "gyroball",
    fullname: "move: Gyro Ball",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hail: {
    exists: true,
    num: 258,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Hail",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "hail",
    secondary: null,
    target: "all",
    type: "Ice",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
    shortDesc: "For 5 turns, hail crashes down.",
    id: "hail",
    fullname: "move: Hail",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hammerarm: {
    exists: true,
    num: 359,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Hammer Arm",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    self: {
      boosts: {
        spe: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Lowers the user's Speed by 1 stage.",
    shortDesc: "Lowers the user's Speed by 1.",
    id: "hammerarm",
    fullname: "move: Hammer Arm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 180
    }
  },
  happyhour: {
    exists: true,
    num: 603,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Happy Hour",
    pp: 30,
    priority: 0,
    flags: {},
    secondary: null,
    target: "allySide",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    shortDesc: "No competitive use.",
    id: "happyhour",
    fullname: "move: Happy Hour",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    desc: "No competitive use.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  harden: {
    exists: true,
    num: 106,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Harden",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    id: "harden",
    fullname: "move: Harden",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  haze: {
    exists: true,
    num: 114,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Haze",
    pp: 30,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    secondary: null,
    target: "all",
    type: "Ice",
    zMove: {
      effect: "heal"
    },
    desc: "Resets the stat stages of all active Pokemon to 0.",
    shortDesc: "Eliminates all stat changes.",
    id: "haze",
    fullname: "move: Haze",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  headbutt: {
    exists: true,
    num: 29,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Headbutt",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "headbutt",
    fullname: "move: Headbutt",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  headcharge: {
    exists: true,
    num: 543,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    isNonstandard: "Past",
    name: "Head Charge",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/4 recoil.",
    id: "headcharge",
    fullname: "move: Head Charge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  headlongrush: {
    exists: true,
    num: 838,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Headlong Rush",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    desc: "Lowers the user's Defense and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
    id: "headlongrush",
    fullname: "move: Headlong Rush",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  headsmash: {
    exists: true,
    num: 457,
    accuracy: 80,
    basePower: 150,
    category: "Physical",
    name: "Head Smash",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/2 recoil.",
    id: "headsmash",
    fullname: "move: Head Smash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  healblock: {
    exists: true,
    num: 377,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Heal Block",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "healblock",
    condition: {
      duration: 5,
      onBeforeMovePriority: 6,
      onResidualOrder: 20
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 2
      }
    },
    desc: "For 5 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected.",
    shortDesc: "For 5 turns, the foe(s) is prevented from healing.",
    id: "healblock",
    fullname: "move: Heal Block",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healingwish: {
    exists: true,
    num: 361,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Healing Wish",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    selfdestruct: "ifHit",
    slotCondition: "healingwish",
    condition: {},
    secondary: null,
    target: "self",
    type: "Psychic",
    desc: "The user faints, and if the Pokemon brought out to replace it does not have full HP or has a non-volatile status condition, its HP is fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets either of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
    shortDesc: "User faints. Next hurt Pokemon is fully healed.",
    id: "healingwish",
    fullname: "move: Healing Wish",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healorder: {
    exists: true,
    num: 456,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Heal Order",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user by 50% of its max HP.",
    id: "healorder",
    fullname: "move: Heal Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healpulse: {
    exists: true,
    num: 505,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Heal Pulse",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      pulse: 1,
      reflectable: 1,
      distance: 1,
      heal: 1,
      allyanim: 1
    },
    secondary: null,
    target: "any",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The target restores 1/2 of its maximum HP, rounded half up. If the user has the Mega Launcher Ability, the target instead restores 3/4 of its maximum HP, rounded half down.",
    shortDesc: "Heals the target by 50% of its max HP.",
    id: "healpulse",
    fullname: "move: Heal Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heartstamp: {
    exists: true,
    num: 531,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Heart Stamp",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "heartstamp",
    fullname: "move: Heart Stamp",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  heartswap: {
    exists: true,
    num: 391,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Heart Swap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      effect: "crit2"
    },
    desc: "The user swaps all its stat stage changes with the target.",
    shortDesc: "Swaps all stat changes with target.",
    id: "heartswap",
    fullname: "move: Heart Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heatcrash: {
    exists: true,
    num: 535,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Heat Crash",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "More power the heavier the user than the target.",
    id: "heatcrash",
    fullname: "move: Heat Crash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heatwave: {
    exists: true,
    num: 257,
    accuracy: 90,
    basePower: 95,
    category: "Special",
    name: "Heat Wave",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "allAdjacentFoes",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the foe(s).",
    id: "heatwave",
    fullname: "move: Heat Wave",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  heavyslam: {
    exists: true,
    num: 484,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Heavy Slam",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "More power the heavier the user than the target.",
    id: "heavyslam",
    fullname: "move: Heavy Slam",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  helpinghand: {
    exists: true,
    num: 270,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Helping Hand",
    pp: 20,
    priority: 5,
    flags: {
      bypasssub: 1,
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "helpinghand",
    condition: {
      duration: 1,
      onBasePowerPriority: 10
    },
    secondary: null,
    target: "adjacentAlly",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The power of the target's attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move.",
    shortDesc: "One adjacent ally's move power is 1.5x this turn.",
    id: "helpinghand",
    fullname: "move: Helping Hand",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hex: {
    exists: true,
    num: 506,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Hex",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      basePower: 160
    },
    desc: "Power doubles if the target has a non-volatile status condition.",
    shortDesc: "Power doubles if the target has a status ailment.",
    id: "hex",
    fullname: "move: Hex",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  hiddenpower: {
    exists: true,
    num: 237,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    realMove: "Hidden Power",
    isNonstandard: "Past",
    name: "Hidden Power Water",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    id: "hiddenpower",
    fullname: "move: Hidden Power Water",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    shortDesc: "",
    desc: "",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  highhorsepower: {
    exists: true,
    num: 667,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "High Horsepower",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    shortDesc: "No additional effect.",
    id: "highhorsepower",
    fullname: "move: High Horsepower",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  highjumpkick: {
    exists: true,
    num: 136,
    accuracy: 90,
    basePower: 130,
    category: "Physical",
    name: "High Jump Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      gravity: 1
    },
    hasCrashDamage: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
    shortDesc: "User is hurt by 50% of its max HP if it misses.",
    id: "highjumpkick",
    fullname: "move: High Jump Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 195
    }
  },
  holdback: {
    exists: true,
    num: 610,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Hold Back",
    pp: 40,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    onDamagePriority: -20,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Leaves the target with at least 1 HP.",
    shortDesc: "Always leaves the target with at least 1 HP.",
    id: "holdback",
    fullname: "move: Hold Back",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  holdhands: {
    exists: true,
    num: 607,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hold Hands",
    pp: 40,
    priority: 0,
    flags: {
      bypasssub: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "adjacentAlly",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "No competitive use. Fails if there is no ally adjacent to the user.",
    shortDesc: "No competitive use.",
    id: "holdhands",
    fullname: "move: Hold Hands",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  honeclaws: {
    exists: true,
    num: 468,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hone Claws",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the user's Attack and accuracy by 1 stage.",
    shortDesc: "Raises the user's Attack and accuracy by 1.",
    id: "honeclaws",
    fullname: "move: Hone Claws",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hornattack: {
    exists: true,
    num: 30,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Horn Attack",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "hornattack",
    fullname: "move: Horn Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  horndrill: {
    exists: true,
    num: 32,
    accuracy: 30,
    basePower: 0,
    category: "Physical",
    name: "Horn Drill",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
    shortDesc: "OHKOs the target. Fails if user is a lower level.",
    id: "horndrill",
    fullname: "move: Horn Drill",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hornleech: {
    exists: true,
    num: 532,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Horn Leech",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "hornleech",
    fullname: "move: Horn Leech",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  howl: {
    exists: true,
    num: 336,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Howl",
    pp: 40,
    priority: 0,
    flags: {
      snatch: 1,
      sound: 1
    },
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "allies",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the Attack of the user and all allies 1 stage.",
    shortDesc: "Raises the user's and ally's Attack by 1.",
    id: "howl",
    fullname: "move: Howl",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hurricane: {
    exists: true,
    num: 542,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Hurricane",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      distance: 1,
      wind: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Flying",
    desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
    shortDesc: "30% chance to confuse target. Can't miss in rain.",
    id: "hurricane",
    fullname: "move: Hurricane",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  hydrocannon: {
    exists: true,
    num: 308,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Hydro Cannon",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "hydrocannon",
    fullname: "move: Hydro Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  hydropump: {
    exists: true,
    num: 56,
    accuracy: 80,
    basePower: 110,
    category: "Special",
    name: "Hydro Pump",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    shortDesc: "No additional effect.",
    id: "hydropump",
    fullname: "move: Hydro Pump",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  hydrosteam: {
    exists: true,
    num: 876,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Hydro Steam",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    thawsTarget: true,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "If the current weather is Sunny Day and the user is not holding Utility Umbrella, this move's damage is multiplied by 1.5 instead of halved for being Water type.",
    shortDesc: "During Sunny Day: 1.5x damage instead of half.",
    id: "hydrosteam",
    fullname: "move: Hydro Steam",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  hydrovortex: {
    exists: true,
    num: 642,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Hydro Vortex",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "wateriumz",
    secondary: null,
    target: "normal",
    type: "Water",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "hydrovortex",
    fullname: "move: Hydro Vortex",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  hyperbeam: {
    exists: true,
    num: 63,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Hyper Beam",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "hyperbeam",
    fullname: "move: Hyper Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  hyperdrill: {
    exists: true,
    num: 887,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Hyper Drill",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "Bypasses protection without breaking it.",
    id: "hyperdrill",
    fullname: "move: Hyper Drill",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    desc: "Bypasses protection without breaking it.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  hyperfang: {
    exists: true,
    num: 158,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    isNonstandard: "Past",
    name: "Hyper Fang",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 10% chance to make the target flinch.",
    shortDesc: "10% chance to make the target flinch.",
    id: "hyperfang",
    fullname: "move: Hyper Fang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  hyperspacefury: {
    exists: true,
    num: 621,
    accuracy: true,
    basePower: 100,
    category: "Physical",
    name: "Hyperspace Fury",
    pp: 5,
    priority: 0,
    flags: {
      mirror: 1,
      bypasssub: 1
    },
    breaksProtect: true,
    self: {
      boosts: {
        def: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Lowers the user's Defense by 1 stage. This move cannot be used successfully unless the user's current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
    shortDesc: "Hoopa-U: Lowers user's Def by 1; breaks protect.",
    id: "hyperspacefury",
    fullname: "move: Hyperspace Fury",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  hyperspacehole: {
    exists: true,
    num: 593,
    accuracy: true,
    basePower: 80,
    category: "Special",
    name: "Hyperspace Hole",
    pp: 5,
    priority: 0,
    flags: {
      mirror: 1,
      bypasssub: 1
    },
    breaksProtect: true,
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
    shortDesc: "Breaks the target's protection for this turn.",
    id: "hyperspacehole",
    fullname: "move: Hyperspace Hole",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  hypervoice: {
    exists: true,
    num: 304,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Hyper Voice",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "hypervoice",
    fullname: "move: Hyper Voice",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  hypnosis: {
    exists: true,
    num: 95,
    accuracy: 60,
    basePower: 0,
    category: "Status",
    name: "Hypnosis",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "hypnosis",
    fullname: "move: Hypnosis",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to fall asleep.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  iceball: {
    exists: true,
    num: 301,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    isNonstandard: "Past",
    name: "Ice Ball",
    pp: 20,
    priority: 0,
    flags: {
      bullet: 1,
      contact: 1,
      protect: 1,
      mirror: 1,
      noparentalbond: 1,
      failinstruct: 1
    },
    condition: {
      duration: 1,
      onLockMove: "iceball"
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
    shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
    id: "iceball",
    fullname: "move: Ice Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  icebeam: {
    exists: true,
    num: 58,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Ice Beam",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target.",
    shortDesc: "10% chance to freeze the target.",
    id: "icebeam",
    fullname: "move: Ice Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  iceburn: {
    exists: true,
    num: 554,
    accuracy: 90,
    basePower: 140,
    category: "Special",
    isNonstandard: "Past",
    name: "Ice Burn",
    pp: 5,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 30% chance to burn the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Charges turn 1. Hits turn 2. 30% burn.",
    id: "iceburn",
    fullname: "move: Ice Burn",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  icefang: {
    exists: true,
    num: 423,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Ice Fang",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondaries: [
      {
        chance: 10,
        status: "frz"
      },
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    target: "normal",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target and a 10% chance to make it flinch.",
    shortDesc: "10% chance to freeze. 10% chance to flinch.",
    id: "icefang",
    fullname: "move: Ice Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  icehammer: {
    exists: true,
    num: 665,
    accuracy: 90,
    basePower: 100,
    category: "Physical",
    name: "Ice Hammer",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    self: {
      boosts: {
        spe: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "Lowers the user's Speed by 1 stage.",
    shortDesc: "Lowers the user's Speed by 1.",
    id: "icehammer",
    fullname: "move: Ice Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  icepunch: {
    exists: true,
    num: 8,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Ice Punch",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target.",
    shortDesc: "10% chance to freeze the target.",
    id: "icepunch",
    fullname: "move: Ice Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  iceshard: {
    exists: true,
    num: 420,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Ice Shard",
    pp: 30,
    priority: 1,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "iceshard",
    fullname: "move: Ice Shard",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  icespinner: {
    exists: true,
    num: 861,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Ice Spinner",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
    shortDesc: "Ends the effects of terrain.",
    id: "icespinner",
    fullname: "move: Ice Spinner",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  iciclecrash: {
    exists: true,
    num: 556,
    accuracy: 90,
    basePower: 85,
    category: "Physical",
    name: "Icicle Crash",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Ice",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "iciclecrash",
    fullname: "move: Icicle Crash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  iciclespear: {
    exists: true,
    num: 333,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Icicle Spear",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "iciclespear",
    fullname: "move: Icicle Spear",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  icywind: {
    exists: true,
    num: 196,
    accuracy: 95,
    basePower: 55,
    category: "Special",
    name: "Icy Wind",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Ice",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Speed by 1.",
    id: "icywind",
    fullname: "move: Icy Wind",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  imprison: {
    exists: true,
    num: 286,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Imprison",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      bypasssub: 1,
      mustpressure: 1
    },
    volatileStatus: "imprison",
    condition: {
      noCopy: true,
      onFoeBeforeMovePriority: 4
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 2
      }
    },
    desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
    shortDesc: "No foe can use any move known by the user.",
    id: "imprison",
    fullname: "move: Imprison",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  incinerate: {
    exists: true,
    num: 510,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Incinerate",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fire",
    desc: "The target loses its held item if it is a Berry or a Gem. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "Destroys the foe(s) Berry/Gem.",
    id: "incinerate",
    fullname: "move: Incinerate",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  inferno: {
    exists: true,
    num: 517,
    accuracy: 50,
    basePower: 100,
    category: "Special",
    name: "Inferno",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 100% chance to burn the target.",
    shortDesc: "100% chance to burn the target.",
    id: "inferno",
    fullname: "move: Inferno",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  infernooverdrive: {
    exists: true,
    num: 640,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Inferno Overdrive",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "firiumz",
    secondary: null,
    target: "normal",
    type: "Fire",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "infernooverdrive",
    fullname: "move: Inferno Overdrive",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  infestation: {
    exists: true,
    num: 611,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Infestation",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "infestation",
    fullname: "move: Infestation",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  ingrain: {
    exists: true,
    num: 275,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ingrain",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      nonsky: 1
    },
    volatileStatus: "ingrain",
    condition: {
      onResidualOrder: 7
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
    shortDesc: "Traps/grounds user; heals 1/16 max HP per turn.",
    id: "ingrain",
    fullname: "move: Ingrain",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  instruct: {
    exists: true,
    num: 689,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Instruct",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      bypasssub: 1,
      allyanim: 1,
      failinstruct: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Ice Ball, Instruct, King's Shield, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Obstruct, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, Wicked Torque, any two-turn move, or any recharge move.",
    shortDesc: "The target immediately uses its last used move.",
    id: "instruct",
    fullname: "move: Instruct",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  iondeluge: {
    exists: true,
    num: 569,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Ion Deluge",
    pp: 25,
    priority: 1,
    flags: {},
    pseudoWeather: "iondeluge",
    condition: {
      duration: 1,
      onModifyTypePriority: -2
    },
    secondary: null,
    target: "all",
    type: "Electric",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes Normal-type moves to become Electric type this turn. The effect happens after other effects that change a move's type.",
    shortDesc: "Normal moves become Electric type this turn.",
    id: "iondeluge",
    fullname: "move: Ion Deluge",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  irondefense: {
    exists: true,
    num: 334,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Iron Defense",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Defense by 2 stages.",
    shortDesc: "Raises the user's Defense by 2.",
    id: "irondefense",
    fullname: "move: Iron Defense",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ironhead: {
    exists: true,
    num: 442,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Iron Head",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "ironhead",
    fullname: "move: Iron Head",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  irontail: {
    exists: true,
    num: 231,
    accuracy: 75,
    basePower: 100,
    category: "Physical",
    name: "Iron Tail",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
    shortDesc: "30% chance to lower the target's Defense by 1.",
    id: "irontail",
    fullname: "move: Iron Tail",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  jawlock: {
    exists: true,
    num: 746,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Jaw Lock",
    pp: 10,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
    shortDesc: "Prevents both user and target from switching out.",
    id: "jawlock",
    fullname: "move: Jaw Lock",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  jetpunch: {
    exists: true,
    num: 857,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Jet Punch",
    pp: 15,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    hasSheerForce: true,
    target: "normal",
    type: "Water",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "jetpunch",
    fullname: "move: Jet Punch",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  judgment: {
    exists: true,
    num: 449,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Judgment",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This move's type depends on the user's held Plate.",
    shortDesc: "Type varies based on the held Plate.",
    id: "judgment",
    fullname: "move: Judgment",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  jumpkick: {
    exists: true,
    num: 26,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Jump Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      gravity: 1
    },
    hasCrashDamage: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
    shortDesc: "User is hurt by 50% of its max HP if it misses.",
    id: "jumpkick",
    fullname: "move: Jump Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 180
    }
  },
  junglehealing: {
    exists: true,
    num: 816,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Jungle Healing",
    pp: 10,
    priority: 0,
    flags: {
      heal: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "allies",
    type: "Grass",
    desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
    shortDesc: "User and allies: healed 1/4 max HP, status cured.",
    id: "junglehealing",
    fullname: "move: Jungle Healing",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  karatechop: {
    exists: true,
    num: 2,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    isNonstandard: "Past",
    name: "Karate Chop",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "karatechop",
    fullname: "move: Karate Chop",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  kinesis: {
    exists: true,
    num: 134,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Kinesis",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    id: "kinesis",
    fullname: "move: Kinesis",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  kingsshield: {
    exists: true,
    num: 588,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "King's Shield",
    pp: 10,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1
    },
    stallingMove: true,
    volatileStatus: "kingsshield",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects from damaging attacks. Contact: -1 Atk.",
    id: "kingsshield",
    fullname: "move: King's Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  knockoff: {
    exists: true,
    num: 282,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Knock Off",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "1.5x damage if foe holds an item. Removes item.",
    id: "knockoff",
    fullname: "move: Knock Off",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  kowtowcleave: {
    exists: true,
    num: 869,
    accuracy: true,
    basePower: 85,
    category: "Physical",
    name: "Kowtow Cleave",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    shortDesc: "This move does not check accuracy.",
    id: "kowtowcleave",
    fullname: "move: Kowtow Cleave",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  landswrath: {
    exists: true,
    num: 616,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Land's Wrath",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    zMove: {
      basePower: 185
    },
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "landswrath",
    fullname: "move: Land's Wrath",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  laserfocus: {
    exists: true,
    num: 673,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Laser Focus",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "laserfocus",
    condition: {
      duration: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Until the end of the next turn, the user's attacks will be critical hits.",
    shortDesc: "Until the end of the next turn, user's moves crit.",
    id: "laserfocus",
    fullname: "move: Laser Focus",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lashout: {
    exists: true,
    num: 808,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Lash Out",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Power doubles if the user had a stat stage lowered this turn.",
    shortDesc: "2x power if the user had a stat lowered this turn.",
    id: "lashout",
    fullname: "move: Lash Out",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  lastresort: {
    exists: true,
    num: 387,
    accuracy: 100,
    basePower: 140,
    category: "Physical",
    name: "Last Resort",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This move fails unless the user knows this move and at least one other move, and has used all the other moves it knows at least once each since it became active or Transformed.",
    shortDesc: "Fails unless each known move has been used.",
    id: "lastresort",
    fullname: "move: Last Resort",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  lastrespects: {
    exists: true,
    num: 854,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Last Respects",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "Power is equal to 50+(X*50), where X is the total number of times any Pokemon has fainted on the user's side, and X cannot be greater than 100.",
    shortDesc: "+50 power for each time a party member fainted.",
    id: "lastrespects",
    fullname: "move: Last Respects",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  lavaplume: {
    exists: true,
    num: 436,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Lava Plume",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "allAdjacent",
    type: "Fire",
    desc: "Has a 30% chance to burn the target.",
    shortDesc: "30% chance to burn adjacent Pokemon.",
    id: "lavaplume",
    fullname: "move: Lava Plume",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  leafage: {
    exists: true,
    num: 670,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Leafage",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "No additional effect.",
    id: "leafage",
    fullname: "move: Leafage",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  leafblade: {
    exists: true,
    num: 348,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Leaf Blade",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "leafblade",
    fullname: "move: Leaf Blade",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  leafstorm: {
    exists: true,
    num: 437,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Leaf Storm",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "Lowers the user's Special Attack by 2 stages.",
    shortDesc: "Lowers the user's Sp. Atk by 2.",
    id: "leafstorm",
    fullname: "move: Leaf Storm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  leaftornado: {
    exists: true,
    num: 536,
    accuracy: 90,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Leaf Tornado",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "50% chance to lower the target's accuracy by 1.",
    id: "leaftornado",
    fullname: "move: Leaf Tornado",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  leechlife: {
    exists: true,
    num: 141,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Leech Life",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "leechlife",
    fullname: "move: Leech Life",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  leechseed: {
    exists: true,
    num: 73,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Leech Seed",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "leechseed",
    condition: {
      onResidualOrder: 8
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Mortal Spin or Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
    shortDesc: "1/8 of target's HP is restored to user every turn.",
    id: "leechseed",
    fullname: "move: Leech Seed",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  leer: {
    exists: true,
    num: 43,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Leer",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      def: -1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Lowers the target's Defense by 1 stage.",
    shortDesc: "Lowers the foe(s) Defense by 1.",
    id: "leer",
    fullname: "move: Leer",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  letssnuggleforever: {
    exists: true,
    num: 726,
    accuracy: true,
    basePower: 190,
    category: "Physical",
    isNonstandard: "Past",
    name: "Let's Snuggle Forever",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "mimikiumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    shortDesc: "No additional effect.",
    id: "letssnuggleforever",
    fullname: "move: Let's Snuggle Forever",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  lick: {
    exists: true,
    num: 122,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Lick",
    pp: 30,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze the target.",
    id: "lick",
    fullname: "move: Lick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  lifedew: {
    exists: true,
    num: 791,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Life Dew",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1,
      bypasssub: 1
    },
    heal: [
      1,
      4
    ],
    secondary: null,
    target: "allies",
    type: "Water",
    desc: "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user and its allies by 1/4 their max HP.",
    id: "lifedew",
    fullname: "move: Life Dew",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lightofruin: {
    exists: true,
    num: 617,
    accuracy: 90,
    basePower: 140,
    category: "Special",
    isNonstandard: "Past",
    name: "Light of Ruin",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Fairy",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/2 recoil.",
    id: "lightofruin",
    fullname: "move: Light of Ruin",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  lightscreen: {
    exists: true,
    num: 113,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Light Screen",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "lightscreen",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 2
    },
    secondary: null,
    target: "allySide",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, the user and its party members take 0.5x damage from special attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
    shortDesc: "For 5 turns, special damage to allies is halved.",
    id: "lightscreen",
    fullname: "move: Light Screen",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lightthatburnsthesky: {
    exists: true,
    num: 723,
    accuracy: true,
    basePower: 200,
    category: "Special",
    isNonstandard: "Past",
    name: "Light That Burns the Sky",
    pp: 1,
    priority: 0,
    flags: {},
    ignoreAbility: true,
    isZ: "ultranecroziumz",
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
    id: "lightthatburnsthesky",
    fullname: "move: Light That Burns the Sky",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  liquidation: {
    exists: true,
    num: 710,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Liquidation",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
    shortDesc: "20% chance to lower the target's Defense by 1.",
    id: "liquidation",
    fullname: "move: Liquidation",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  lockon: {
    exists: true,
    num: 199,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Lock-On",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    condition: {
      noCopy: true,
      duration: 2,
      onSourceInvulnerabilityPriority: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
    shortDesc: "User's next move will not miss the target.",
    id: "lockon",
    fullname: "move: Lock-On",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lovelykiss: {
    exists: true,
    num: 142,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Lovely Kiss",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "lovelykiss",
    fullname: "move: Lovely Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to fall asleep.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lowkick: {
    exists: true,
    num: 67,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Low Kick",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: {
      basePower: 160
    },
    desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
    shortDesc: "More power the heavier the target.",
    id: "lowkick",
    fullname: "move: Low Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  lowsweep: {
    exists: true,
    num: 490,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Low Sweep",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    id: "lowsweep",
    fullname: "move: Low Sweep",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 120
    }
  },
  luckychant: {
    exists: true,
    num: 381,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Lucky Chant",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "luckychant",
    condition: {
      duration: 5,
      onCriticalHit: false,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 6
    },
    secondary: null,
    target: "allySide",
    type: "Normal",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "For 5 turns, the user and its party members cannot be struck by a critical hit. Fails if the effect is already active on the user's side.",
    shortDesc: "For 5 turns, shields user's party from critical hits.",
    id: "luckychant",
    fullname: "move: Lucky Chant",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  luminacrash: {
    exists: true,
    num: 855,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Lumina Crash",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spd: -2
      }
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 100% chance to lower the target's Special Defense by 2 stages.",
    shortDesc: "100% chance to lower the target's Sp. Def by 2.",
    id: "luminacrash",
    fullname: "move: Lumina Crash",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -2
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  lunardance: {
    exists: true,
    num: 461,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Lunar Dance",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1,
      dance: 1
    },
    selfdestruct: "ifHit",
    slotCondition: "lunardance",
    condition: {},
    secondary: null,
    target: "self",
    type: "Psychic",
    desc: "The user faints, and if the Pokemon brought out to replace it does not have full HP or PP, or has a non-volatile status condition, its HP and PP are fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets any of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
    shortDesc: "User faints. Next hurt Pkmn is cured, max HP/PP.",
    id: "lunardance",
    fullname: "move: Lunar Dance",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lunge: {
    exists: true,
    num: 679,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Lunge",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Attack by 1.",
    id: "lunge",
    fullname: "move: Lunge",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  lusterpurge: {
    exists: true,
    num: 295,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    isNonstandard: "Past",
    name: "Luster Purge",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 50% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "50% chance to lower the target's Sp. Def by 1.",
    id: "lusterpurge",
    fullname: "move: Luster Purge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  machpunch: {
    exists: true,
    num: 183,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Mach Punch",
    pp: 30,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "machpunch",
    fullname: "move: Mach Punch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  magicalleaf: {
    exists: true,
    num: 345,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Magical Leaf",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "This move does not check accuracy.",
    id: "magicalleaf",
    fullname: "move: Magical Leaf",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  magiccoat: {
    exists: true,
    num: 277,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Magic Coat",
    pp: 15,
    priority: 4,
    flags: {},
    volatileStatus: "magiccoat",
    condition: {
      duration: 1,
      onTryHitPriority: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 2
      }
    },
    desc: "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
    shortDesc: "Bounces back certain non-damaging moves.",
    id: "magiccoat",
    fullname: "move: Magic Coat",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magicpowder: {
    exists: true,
    num: 750,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Magic Powder",
    pp: 20,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Causes the target to become a Psychic type. Fails if the target is an Arceus or a Silvally, if the target is already purely Psychic type, or if the target is Terastallized.",
    shortDesc: "Changes the target's type to Psychic.",
    id: "magicpowder",
    fullname: "move: Magic Powder",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magicroom: {
    exists: true,
    num: 478,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magic Room",
    pp: 10,
    priority: 0,
    flags: {
      mirror: 1
    },
    pseudoWeather: "magicroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 6
    },
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, the held items of all active Pokemon have no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by all active Pokemon. If this move is used during the effect, the effect ends.",
    shortDesc: "For 5 turns, all held items have no effect.",
    id: "magicroom",
    fullname: "move: Magic Room",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magmastorm: {
    exists: true,
    num: 463,
    accuracy: 75,
    basePower: 100,
    category: "Special",
    name: "Magma Storm",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "magmastorm",
    fullname: "move: Magma Storm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  magnetbomb: {
    exists: true,
    num: 443,
    accuracy: true,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Magnet Bomb",
    pp: 20,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "This move does not check accuracy.",
    id: "magnetbomb",
    fullname: "move: Magnet Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "This move does not check accuracy.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  magneticflux: {
    exists: true,
    num: 602,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magnetic Flux",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      distance: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allySide",
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Raises the Defense and Special Defense of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
    shortDesc: "Raises Def, Sp. Def of allies with Plus/Minus by 1.",
    id: "magneticflux",
    fullname: "move: Magnetic Flux",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magnetrise: {
    exists: true,
    num: 393,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magnet Rise",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      gravity: 1
    },
    volatileStatus: "magnetrise",
    condition: {
      duration: 5,
      onResidualOrder: 18
    },
    secondary: null,
    target: "self",
    type: "Electric",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "For 5 turns, the user is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the user uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the user is under any of their effects. Fails if the user is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows.",
    shortDesc: "For 5 turns, the user has immunity to Ground.",
    id: "magnetrise",
    fullname: "move: Magnet Rise",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magnitude: {
    exists: true,
    num: 222,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Magnitude",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Ground",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 140
    },
    desc: "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig.",
    shortDesc: "Hits adjacent Pokemon. Power varies; 2x on Dig.",
    id: "magnitude",
    fullname: "move: Magnitude",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  makeitrain: {
    exists: true,
    num: 874,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Make It Rain",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -1
      }
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Steel",
    desc: "Lowers the user's Special Attack by 1 stage.",
    shortDesc: "Lowers the user's Sp. Atk by 1. Hits foe(s).",
    id: "makeitrain",
    fullname: "move: Make It Rain",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  maliciousmoonsault: {
    exists: true,
    num: 696,
    accuracy: true,
    basePower: 180,
    category: "Physical",
    isNonstandard: "Past",
    name: "Malicious Moonsault",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "inciniumz",
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "Damage doubles if the target used Minimize.",
    id: "maliciousmoonsault",
    fullname: "move: Malicious Moonsault",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  matblock: {
    exists: true,
    num: 561,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Mat Block",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      nonsky: 1,
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    sideCondition: "matblock",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "allySide",
    type: "Fighting",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn. Fails unless it is the user's first turn on the field, if the user moves last this turn, or if this move is already in effect for the user's side.",
    shortDesc: "Protects allies from damaging attacks. Turn 1 only.",
    id: "matblock",
    fullname: "move: Mat Block",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  maxairstream: {
    exists: true,
    num: 766,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Airstream",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Flying",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Allies: +1 Speed.",
    id: "maxairstream",
    fullname: "move: Max Airstream",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxdarkness: {
    exists: true,
    num: 772,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Darkness",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Dark",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Foes: -1 Sp. Def.",
    id: "maxdarkness",
    fullname: "move: Max Darkness",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxflare: {
    exists: true,
    num: 757,
    accuracy: true,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Flare",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Fire",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sunny Day begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Sunny Day.",
    id: "maxflare",
    fullname: "move: Max Flare",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxflutterby: {
    exists: true,
    num: 758,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Flutterby",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Bug",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Foes: -1 Sp. Atk.",
    id: "maxflutterby",
    fullname: "move: Max Flutterby",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxgeyser: {
    exists: true,
    num: 765,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Geyser",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Water",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Rain Dance begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Rain Dance.",
    id: "maxgeyser",
    fullname: "move: Max Geyser",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxguard: {
    exists: true,
    num: 743,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Max Guard",
    pp: 10,
    priority: 4,
    flags: {},
    isMax: true,
    stallingMove: true,
    volatileStatus: "maxguard",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "The user is protected from nearly all attacks made by other Pokemon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects user from moves & Max Moves this turn.",
    id: "maxguard",
    fullname: "move: Max Guard",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    ignoreAbility: false
  },
  maxhailstorm: {
    exists: true,
    num: 763,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Hailstorm",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Ice",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Hail begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Hail.",
    id: "maxhailstorm",
    fullname: "move: Max Hailstorm",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxknuckle: {
    exists: true,
    num: 761,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Knuckle",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Fighting",
    desc: "Boosts the user and its allies' Attack by 1 stage. BP scales with the base move's BP. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Allies: +1 Attack.",
    id: "maxknuckle",
    fullname: "move: Max Knuckle",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxlightning: {
    exists: true,
    num: 759,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Lightning",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Electric",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Electric Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Electric Terrain.",
    id: "maxlightning",
    fullname: "move: Max Lightning",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxmindstorm: {
    exists: true,
    num: 769,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Mindstorm",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Psychic",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Psychic Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Psychic Terrain.",
    id: "maxmindstorm",
    fullname: "move: Max Mindstorm",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxooze: {
    exists: true,
    num: 764,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Ooze",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Poison",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Allies: +1 Sp. Atk.",
    id: "maxooze",
    fullname: "move: Max Ooze",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxovergrowth: {
    exists: true,
    num: 773,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Overgrowth",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Grass",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Grassy Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Grassy Terrain.",
    id: "maxovergrowth",
    fullname: "move: Max Overgrowth",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxphantasm: {
    exists: true,
    num: 762,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Phantasm",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Ghost",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Foes: -1 Defense.",
    id: "maxphantasm",
    fullname: "move: Max Phantasm",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxquake: {
    exists: true,
    num: 771,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Quake",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Ground",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Allies: +1 Sp. Def.",
    id: "maxquake",
    fullname: "move: Max Quake",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxrockfall: {
    exists: true,
    num: 770,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Rockfall",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Rock",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sandstorm begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Sandstorm.",
    id: "maxrockfall",
    fullname: "move: Max Rockfall",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxstarfall: {
    exists: true,
    num: 767,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Starfall",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Fairy",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the effect of Misty Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Starts Misty Terrain.",
    id: "maxstarfall",
    fullname: "move: Max Starfall",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxsteelspike: {
    exists: true,
    num: 774,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Steelspike",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Steel",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Allies: +1 Defense.",
    id: "maxsteelspike",
    fullname: "move: Max Steelspike",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxstrike: {
    exists: true,
    num: 760,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Strike",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Normal",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Foes: -1 Speed.",
    id: "maxstrike",
    fullname: "move: Max Strike",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maxwyrmwind: {
    exists: true,
    num: 768,
    accuracy: true,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Max Wyrmwind",
    pp: 10,
    priority: 0,
    flags: {},
    isMax: true,
    self: {},
    target: "adjacentFoe",
    type: "Dragon",
    desc: "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
    shortDesc: "Base move affects power. Foes: -1 Attack.",
    id: "maxwyrmwind",
    fullname: "move: Max Wyrmwind",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  meanlook: {
    exists: true,
    num: 212,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mean Look",
    pp: 5,
    priority: 0,
    flags: {
      reflectable: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Prevents the target from switching out.",
    id: "meanlook",
    fullname: "move: Mean Look",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  meditate: {
    exists: true,
    num: 96,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Meditate",
    pp: 40,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    id: "meditate",
    fullname: "move: Meditate",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mefirst: {
    exists: true,
    num: 382,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Me First",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      bypasssub: 1,
      failencore: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    condition: {
      duration: 1,
      onBasePowerPriority: 12
    },
    secondary: null,
    target: "adjacentFoe",
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The user uses the move the target chose for use this turn against it, if possible, with its power multiplied by 1.5. The move must be a damaging move other than Beak Blast, Belch, Blazing Torque, Combat Torque, Comeuppance, Counter, Covet, Focus Punch, Magical Torque, Me First, Metal Burst, Mirror Coat, Noxious Torque, Shell Trap, Struggle, Thief, or Wicked Torque. Fails if the target moves before the user. Ignores the target's substitute for the purpose of copying the move.",
    shortDesc: "Copies a foe at 1.5x power. User must be faster.",
    id: "mefirst",
    fullname: "move: Me First",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  megadrain: {
    exists: true,
    num: 72,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Mega Drain",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 120
    },
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "megadrain",
    fullname: "move: Mega Drain",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  megahorn: {
    exists: true,
    num: 224,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Megahorn",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    shortDesc: "No additional effect.",
    id: "megahorn",
    fullname: "move: Megahorn",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  megakick: {
    exists: true,
    num: 25,
    accuracy: 75,
    basePower: 120,
    category: "Physical",
    name: "Mega Kick",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "megakick",
    fullname: "move: Mega Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  megapunch: {
    exists: true,
    num: 5,
    accuracy: 85,
    basePower: 80,
    category: "Physical",
    name: "Mega Punch",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "megapunch",
    fullname: "move: Mega Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  memento: {
    exists: true,
    num: 262,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Memento",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    boosts: {
      atk: -2,
      spa: -2
    },
    selfdestruct: "ifHit",
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      effect: "healreplacement"
    },
    desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target's stats cannot be changed.",
    shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints.",
    id: "memento",
    fullname: "move: Memento",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  menacingmoonrazemaelstrom: {
    exists: true,
    num: 725,
    accuracy: true,
    basePower: 200,
    category: "Special",
    isNonstandard: "Past",
    name: "Menacing Moonraze Maelstrom",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "lunaliumz",
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Ignores the Abilities of other Pokemon.",
    id: "menacingmoonrazemaelstrom",
    fullname: "move: Menacing Moonraze Maelstrom",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  metalburst: {
    exists: true,
    num: 368,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Metal Burst",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      failmefirst: 1
    },
    secondary: null,
    target: "scripted",
    type: "Steel",
    desc: "Deals damage to the last opposing Pokemon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical or special attack this turn.",
    shortDesc: "If hit by an attack, returns 1.5x damage.",
    id: "metalburst",
    fullname: "move: Metal Burst",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  metalclaw: {
    exists: true,
    num: 232,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Metal Claw",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 10% chance to raise the user's Attack by 1 stage.",
    shortDesc: "10% chance to raise the user's Attack by 1.",
    id: "metalclaw",
    fullname: "move: Metal Claw",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  metalsound: {
    exists: true,
    num: 319,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Metal Sound",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1,
      allyanim: 1
    },
    boosts: {
      spd: -2
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Lowers the target's Special Defense by 2 stages.",
    shortDesc: "Lowers the target's Sp. Def by 2.",
    id: "metalsound",
    fullname: "move: Metal Sound",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  meteorassault: {
    exists: true,
    num: 794,
    accuracy: 100,
    basePower: 150,
    category: "Physical",
    isNonstandard: "Past",
    name: "Meteor Assault",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      recharge: 1,
      mirror: 1,
      failinstruct: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "meteorassault",
    fullname: "move: Meteor Assault",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 200
    }
  },
  meteorbeam: {
    exists: true,
    num: 800,
    accuracy: 90,
    basePower: 120,
    category: "Special",
    name: "Meteor Beam",
    pp: 10,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2.",
    id: "meteorbeam",
    fullname: "move: Meteor Beam",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  meteormash: {
    exists: true,
    num: 309,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Meteor Mash",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 20,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
    shortDesc: "20% chance to raise the user's Attack by 1.",
    id: "meteormash",
    fullname: "move: Meteor Mash",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  metronome: {
    exists: true,
    num: 118,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Metronome",
    pp: 10,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    noMetronome: [
      "After You",
      "Apple Acid",
      "Armor Cannon",
      "Assist",
      "Astral Barrage",
      "Aura Wheel",
      "Baneful Bunker",
      "Beak Blast",
      "Behemoth Bash",
      "Behemoth Blade",
      "Belch",
      "Bestow",
      "Blazing Torque",
      "Body Press",
      "Branch Poke",
      "Breaking Swipe",
      "Celebrate",
      "Chatter",
      "Chilling Water",
      "Chilly Reception",
      "Clangorous Soul",
      "Collision Course",
      "Combat Torque",
      "Comeuppance",
      "Copycat",
      "Counter",
      "Covet",
      "Crafty Shield",
      "Decorate",
      "Destiny Bond",
      "Detect",
      "Diamond Storm",
      "Doodle",
      "Double Iron Bash",
      "Double Shock",
      "Dragon Ascent",
      "Dragon Energy",
      "Drum Beating",
      "Dynamax Cannon",
      "Electro Drift",
      "Endure",
      "Eternabeam",
      "False Surrender",
      "Feint",
      "Fiery Wrath",
      "Fillet Away",
      "Fleur Cannon",
      "Focus Punch",
      "Follow Me",
      "Freeze Shock",
      "Freezing Glare",
      "Glacial Lance",
      "Grav Apple",
      "Helping Hand",
      "Hold Hands",
      "Hyper Drill",
      "Hyperspace Fury",
      "Hyperspace Hole",
      "Ice Burn",
      "Instruct",
      "Jet Punch",
      "Jungle Healing",
      "King's Shield",
      "Life Dew",
      "Light of Ruin",
      "Magical Torque",
      "Make It Rain",
      "Mat Block",
      "Me First",
      "Meteor Assault",
      "Metronome",
      "Mimic",
      "Mind Blown",
      "Mirror Coat",
      "Mirror Move",
      "Moongeist Beam",
      "Nature Power",
      "Nature's Madness",
      "Noxious Torque",
      "Obstruct",
      "Order Up",
      "Origin Pulse",
      "Overdrive",
      "Photon Geyser",
      "Plasma Fists",
      "Population Bomb",
      "Pounce",
      "Power Shift",
      "Precipice Blades",
      "Protect",
      "Pyro Ball",
      "Quash",
      "Quick Guard",
      "Rage Fist",
      "Rage Powder",
      "Raging Bull",
      "Raging Fury",
      "Relic Song",
      "Revival Blessing",
      "Ruination",
      "Salt Cure",
      "Secret Sword",
      "Shed Tail",
      "Shell Trap",
      "Silk Trap",
      "Sketch",
      "Sleep Talk",
      "Snap Trap",
      "Snarl",
      "Snatch",
      "Snore",
      "Snowscape",
      "Spectral Thief",
      "Spicy Extract",
      "Spiky Shield",
      "Spirit Break",
      "Spotlight",
      "Springtide Storm",
      "Steam Eruption",
      "Steel Beam",
      "Strange Steam",
      "Struggle",
      "Sunsteel Strike",
      "Surging Strikes",
      "Switcheroo",
      "Techno Blast",
      "Thief",
      "Thousand Arrows",
      "Thousand Waves",
      "Thunder Cage",
      "Thunderous Kick",
      "Tidy Up",
      "Trailblaze",
      "Transform",
      "Trick",
      "Twin Beam",
      "V-create",
      "Wicked Blow",
      "Wicked Torque",
      "Wide Guard"
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "A random move is selected for use, other than After You, Apple Acid, Armor Cannon, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Chilling Water, Chilly Reception, Clangorous Soul, Collision Course, Combat Torque, Comeuppance, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Doodle, Double Iron Bash, Double Shock, Dragon Ascent, Dragon Energy, Drum Beating, Dynamax Cannon, Electro Drift, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fillet Away, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyper Drill, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jet Punch, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Magical Torque, Make It Rain, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Noxious Torque, Obstruct, Order Up, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Population Bomb, Pounce, Power Shift, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Fist, Rage Powder, Raging Bull, Raging Fury, Relic Song, Revival Blessing, Ruination, Salt Cure, Secret Sword, Shed Tail, Shell Trap, Silk Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Snowscape, Spectral Thief, Spicy Extract, Spiky Shield, Spirit Break, Spotlight, Springtide Storm, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Tidy Up, Trailblaze, Transform, Trick, Twin Beam, V-create, Wicked Blow, Wicked Torque, or Wide Guard.",
    shortDesc: "Picks a random move.",
    id: "metronome",
    fullname: "move: Metronome",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  milkdrink: {
    exists: true,
    num: 208,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Milk Drink",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user by 50% of its max HP.",
    id: "milkdrink",
    fullname: "move: Milk Drink",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mimic: {
    exists: true,
    num: 102,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mimic",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      bypasssub: 1,
      allyanim: 1,
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Assist, Behemoth Bash, Behemoth Blade, Belch, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Transform, or Wicked Torque.",
    shortDesc: "The last move the target used replaces this one.",
    id: "mimic",
    fullname: "move: Mimic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mindblown: {
    exists: true,
    num: 720,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    isNonstandard: "Past",
    name: "Mind Blown",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    mindBlownRecoil: true,
    secondary: null,
    target: "allAdjacent",
    type: "Fire",
    desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability. This move is prevented from executing and the user does not lose HP if any active Pokemon has the Damp Ability, or if this move is Fire type and the user is affected by Powder or the weather is Primordial Sea.",
    shortDesc: "User loses 50% max HP. Hits adjacent Pokemon.",
    id: "mindblown",
    fullname: "move: Mind Blown",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  mindreader: {
    exists: true,
    num: 170,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Mind Reader",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
    shortDesc: "User's next move will not miss the target.",
    id: "mindreader",
    fullname: "move: Mind Reader",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  minimize: {
    exists: true,
    num: 107,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Minimize",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "minimize",
    condition: {
      noCopy: true
    },
    boosts: {
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
    shortDesc: "Raises the user's evasiveness by 2.",
    id: "minimize",
    fullname: "move: Minimize",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  miracleeye: {
    exists: true,
    num: 357,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Miracle Eye",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "miracleeye",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Psychic-type attacks can hit the target if it is a Dark type. Fails if the target is already affected, or affected by Foresight or Odor Sleuth.",
    shortDesc: "Psychic hits Dark. Evasiveness ignored.",
    id: "miracleeye",
    fullname: "move: Miracle Eye",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mirrorcoat: {
    exists: true,
    num: 243,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Mirror Coat",
    pp: 20,
    priority: -5,
    flags: {
      protect: 1,
      failmefirst: 1,
      noassist: 1
    },
    condition: {
      duration: 1,
      noCopy: true,
      onRedirectTargetPriority: -1
    },
    secondary: null,
    target: "scripted",
    type: "Psychic",
    desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
    shortDesc: "If hit by special attack, returns double damage.",
    id: "mirrorcoat",
    fullname: "move: Mirror Coat",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  mirrormove: {
    exists: true,
    num: 119,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Mirror Move",
    pp: 20,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        atk: 2
      }
    },
    desc: "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move.",
    shortDesc: "User uses the target's last used move against it.",
    id: "mirrormove",
    fullname: "move: Mirror Move",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mirrorshot: {
    exists: true,
    num: 429,
    accuracy: 85,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Mirror Shot",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "30% chance to lower the target's accuracy by 1.",
    id: "mirrorshot",
    fullname: "move: Mirror Shot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  mist: {
    exists: true,
    num: 54,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mist",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "mist",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 4
    },
    secondary: null,
    target: "allySide",
    type: "Ice",
    zMove: {
      effect: "heal"
    },
    desc: "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user's side.",
    shortDesc: "For 5 turns, protects user's party from stat drops.",
    id: "mist",
    fullname: "move: Mist",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mistball: {
    exists: true,
    num: 296,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    isNonstandard: "Past",
    name: "Mist Ball",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 50% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "50% chance to lower the target's Sp. Atk by 1.",
    id: "mistball",
    fullname: "move: Mist Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  mistyexplosion: {
    exists: true,
    num: 802,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Misty Explosion",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Fairy",
    desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
    shortDesc: "User faints. User on Misty Terrain: 1.5x power.",
    id: "mistyexplosion",
    fullname: "move: Misty Explosion",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  mistyterrain: {
    exists: true,
    num: 581,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Misty Terrain",
    pp: 10,
    priority: 0,
    flags: {
      nonsky: 1
    },
    terrain: "mistyterrain",
    condition: {
      duration: 5,
      onBasePowerPriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    secondary: null,
    target: "all",
    type: "Fairy",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokemon is multiplied by 0.5 and grounded Pokemon cannot be inflicted with a non-volatile status condition nor confusion. Grounded Pokemon can become affected by Yawn but cannot fall asleep from its effect. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.",
    shortDesc: "5 turns. Can't status,-Dragon power vs grounded.",
    id: "mistyterrain",
    fullname: "move: Misty Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  moonblast: {
    exists: true,
    num: 585,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Moonblast",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Fairy",
    desc: "Has a 30% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
    id: "moonblast",
    fullname: "move: Moonblast",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  moongeistbeam: {
    exists: true,
    num: 714,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Moongeist Beam",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Ignores the Abilities of other Pokemon.",
    id: "moongeistbeam",
    fullname: "move: Moongeist Beam",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  moonlight: {
    exists: true,
    num: 236,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Moonlight",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Fairy",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
    shortDesc: "Heals the user by a weather-dependent amount.",
    id: "moonlight",
    fullname: "move: Moonlight",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  morningsun: {
    exists: true,
    num: 234,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Morning Sun",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
    shortDesc: "Heals the user by a weather-dependent amount.",
    id: "morningsun",
    fullname: "move: Morning Sun",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mortalspin: {
    exists: true,
    num: 866,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Mortal Spin",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      status: "psn"
    },
    target: "allAdjacentFoes",
    type: "Poison",
    desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to poison the target.",
    shortDesc: "Poisons foes, frees user from hazards/bind/leech.",
    id: "mortalspin",
    fullname: "move: Mortal Spin",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  mudbomb: {
    exists: true,
    num: 426,
    accuracy: 85,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Mud Bomb",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "30% chance to lower the target's accuracy by 1.",
    id: "mudbomb",
    fullname: "move: Mud Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  mudshot: {
    exists: true,
    num: 341,
    accuracy: 95,
    basePower: 55,
    category: "Special",
    name: "Mud Shot",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    id: "mudshot",
    fullname: "move: Mud Shot",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  mudslap: {
    exists: true,
    num: 189,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Mud-Slap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "100% chance to lower the target's accuracy by 1.",
    id: "mudslap",
    fullname: "move: Mud-Slap",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  mudsport: {
    exists: true,
    num: 300,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Mud Sport",
    pp: 15,
    priority: 0,
    flags: {
      nonsky: 1
    },
    pseudoWeather: "mudsport",
    condition: {
      duration: 5,
      onBasePowerPriority: 1,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 4
    },
    secondary: null,
    target: "all",
    type: "Ground",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
    shortDesc: "For 5 turns, Electric-type attacks have 1/3 power.",
    id: "mudsport",
    fullname: "move: Mud Sport",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  muddywater: {
    exists: true,
    num: 330,
    accuracy: 85,
    basePower: 90,
    category: "Special",
    name: "Muddy Water",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Water",
    desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "30% chance to lower the foe(s) accuracy by 1.",
    id: "muddywater",
    fullname: "move: Muddy Water",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  multiattack: {
    exists: true,
    num: 718,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    isNonstandard: "Past",
    name: "Multi-Attack",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 185
    },
    maxMove: {
      basePower: 95
    },
    desc: "This move's type depends on the user's held Memory.",
    shortDesc: "Type varies based on the held Memory.",
    id: "multiattack",
    fullname: "move: Multi-Attack",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mysticalfire: {
    exists: true,
    num: 595,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Mystical Fire",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
    id: "mysticalfire",
    fullname: "move: Mystical Fire",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  nastyplot: {
    exists: true,
    num: 417,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nasty Plot",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spa: 2
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Special Attack by 2 stages.",
    shortDesc: "Raises the user's Sp. Atk by 2.",
    id: "nastyplot",
    fullname: "move: Nasty Plot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  naturalgift: {
    exists: true,
    num: 363,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Natural Gift",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The type and power of this move depend on the user's held Berry, and the Berry is lost. Fails if the user is not holding a Berry, if the user has the Klutz Ability, or if Embargo or Magic Room is in effect for the user.",
    shortDesc: "Power and type depends on the user's Berry.",
    id: "naturalgift",
    fullname: "move: Natural Gift",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  naturepower: {
    exists: true,
    num: 267,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Nature Power",
    pp: 20,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain.",
    shortDesc: "Attack depends on terrain (default Tri Attack).",
    id: "naturepower",
    fullname: "move: Nature Power",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  naturesmadness: {
    exists: true,
    num: 717,
    accuracy: 90,
    basePower: 0,
    category: "Special",
    isNonstandard: "Past",
    name: "Nature's Madness",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
    shortDesc: "Does damage equal to 1/2 target's current HP.",
    id: "naturesmadness",
    fullname: "move: Nature's Madness",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  needlearm: {
    exists: true,
    num: 302,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Needle Arm",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "needlearm",
    fullname: "move: Needle Arm",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  neverendingnightmare: {
    exists: true,
    num: 636,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Never-Ending Nightmare",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "ghostiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "neverendingnightmare",
    fullname: "move: Never-Ending Nightmare",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  nightdaze: {
    exists: true,
    num: 539,
    accuracy: 95,
    basePower: 85,
    category: "Special",
    name: "Night Daze",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 40,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Dark",
    desc: "Has a 40% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "40% chance to lower the target's accuracy by 1.",
    id: "nightdaze",
    fullname: "move: Night Daze",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 40,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  nightmare: {
    exists: true,
    num: 171,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Nightmare",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "nightmare",
    condition: {
      noCopy: true,
      onResidualOrder: 11
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn.",
    shortDesc: "A sleeping target is hurt by 1/4 max HP per turn.",
    id: "nightmare",
    fullname: "move: Nightmare",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  nightshade: {
    exists: true,
    num: 101,
    accuracy: 100,
    basePower: 0,
    damage: "level",
    category: "Special",
    name: "Night Shade",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "Deals damage to the target equal to the user's level.",
    shortDesc: "Does damage equal to the user's level.",
    id: "nightshade",
    fullname: "move: Night Shade",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  nightslash: {
    exists: true,
    num: 400,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Night Slash",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "nightslash",
    fullname: "move: Night Slash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  nobleroar: {
    exists: true,
    num: 568,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Noble Roar",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    boosts: {
      atk: -1,
      spa: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack and Special Attack by 1 stage.",
    shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
    id: "nobleroar",
    fullname: "move: Noble Roar",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  noretreat: {
    exists: true,
    num: 748,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "No Retreat",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "noretreat",
    condition: {},
    boosts: {
      atk: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Fighting",
    desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",
    shortDesc: "Raises all stats by 1 (not acc/eva). Traps user.",
    id: "noretreat",
    fullname: "move: No Retreat",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  nuzzle: {
    exists: true,
    num: 609,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Nuzzle",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 100% chance to paralyze the target.",
    shortDesc: "100% chance to paralyze the target.",
    id: "nuzzle",
    fullname: "move: Nuzzle",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  oblivionwing: {
    exists: true,
    num: 613,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Oblivion Wing",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      distance: 1,
      heal: 1
    },
    drain: [
      3,
      4
    ],
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 75% of the damage dealt.",
    id: "oblivionwing",
    fullname: "move: Oblivion Wing",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  obstruct: {
    exists: true,
    num: 792,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Obstruct",
    pp: 10,
    priority: 4,
    flags: {
      failinstruct: 1
    },
    stallingMove: true,
    volatileStatus: "obstruct",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Dark",
    desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects from damaging attacks. Contact: -2 Def.",
    id: "obstruct",
    fullname: "move: Obstruct",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  oceanicoperetta: {
    exists: true,
    num: 697,
    accuracy: true,
    basePower: 195,
    category: "Special",
    isNonstandard: "Past",
    name: "Oceanic Operetta",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "primariumz",
    secondary: null,
    target: "normal",
    type: "Water",
    shortDesc: "No additional effect.",
    id: "oceanicoperetta",
    fullname: "move: Oceanic Operetta",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  octazooka: {
    exists: true,
    num: 190,
    accuracy: 85,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Octazooka",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
    shortDesc: "50% chance to lower the target's accuracy by 1.",
    id: "octazooka",
    fullname: "move: Octazooka",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          accuracy: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  octolock: {
    exists: true,
    num: 753,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Octolock",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "octolock",
    condition: {
      onResidualOrder: 14
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Traps target, lowers Def and SpD by 1 each turn.",
    id: "octolock",
    fullname: "move: Octolock",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  odorsleuth: {
    exists: true,
    num: 316,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Odor Sleuth",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    volatileStatus: "foresight",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye.",
    shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
    id: "odorsleuth",
    fullname: "move: Odor Sleuth",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ominouswind: {
    exists: true,
    num: 466,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    isNonstandard: "Past",
    name: "Ominous Wind",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
    shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
    id: "ominouswind",
    fullname: "move: Ominous Wind",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  orderup: {
    exists: true,
    num: 856,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Order Up",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1
    },
    secondary: null,
    hasSheerForce: true,
    target: "normal",
    type: "Dragon",
    desc: "If an ally Tatsugiri has activated its Commander Ability, this move raises the user's Attack by 1 stage if the Tatsugiri is Curly Form, Defense by 1 stage if Droopy Form, or Speed by 1 stage if Stretchy Form. The effect happens whether or not this move is successful, and even if the Tatsugiri that activated the effect has since fainted.",
    shortDesc: "Curly|Droopy|Stretchy eaten: +1 Atk|Def|Spe.",
    id: "orderup",
    fullname: "move: Order Up",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  originpulse: {
    exists: true,
    num: 618,
    accuracy: 85,
    basePower: 110,
    category: "Special",
    name: "Origin Pulse",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      pulse: 1,
      mirror: 1
    },
    target: "allAdjacentFoes",
    type: "Water",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "originpulse",
    fullname: "move: Origin Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  outrage: {
    exists: true,
    num: 200,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Outrage",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failinstruct: 1
    },
    self: {
      volatileStatus: "lockedmove"
    },
    secondary: null,
    target: "randomNormal",
    type: "Dragon",
    desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
    shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
    id: "outrage",
    fullname: "move: Outrage",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  overdrive: {
    exists: true,
    num: 786,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Overdrive",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Electric",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits foe(s).",
    id: "overdrive",
    fullname: "move: Overdrive",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  overheat: {
    exists: true,
    num: 315,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Overheat",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    desc: "Lowers the user's Special Attack by 2 stages.",
    shortDesc: "Lowers the user's Sp. Atk by 2.",
    id: "overheat",
    fullname: "move: Overheat",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  painsplit: {
    exists: true,
    num: 220,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Pain Split",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user and the target's HP become the average of their current HP, rounded down, but not more than the maximum HP of either one.",
    shortDesc: "Shares HP of user and target equally.",
    id: "painsplit",
    fullname: "move: Pain Split",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  paraboliccharge: {
    exists: true,
    num: 570,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Parabolic Charge",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      heal: 1
    },
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "allAdjacent",
    type: "Electric",
    desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
    shortDesc: "User recovers 50% of the damage dealt.",
    id: "paraboliccharge",
    fullname: "move: Parabolic Charge",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  partingshot: {
    exists: true,
    num: 575,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Parting Shot",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      effect: "healreplacement"
    },
    desc: "Lowers the target's Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if the target's Attack and Special Attack stat stages were both unchanged, or if there are no unfainted party members.",
    shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches.",
    id: "partingshot",
    fullname: "move: Parting Shot",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  payback: {
    exists: true,
    num: 371,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Payback",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Power doubles if the user moves after the target this turn, including actions taken through Instruct or the Dancer Ability. Switching in does not count as an action.",
    shortDesc: "Power doubles if the user moves after the target.",
    id: "payback",
    fullname: "move: Payback",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  payday: {
    exists: true,
    num: 6,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Pay Day",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "No additional effect.",
    shortDesc: "Scatters coins.",
    id: "payday",
    fullname: "move: Pay Day",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  peck: {
    exists: true,
    num: 64,
    accuracy: 100,
    basePower: 35,
    category: "Physical",
    name: "Peck",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "No additional effect.",
    id: "peck",
    fullname: "move: Peck",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  perishsong: {
    exists: true,
    num: 195,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Perish Song",
    pp: 5,
    priority: 0,
    flags: {
      sound: 1,
      distance: 1,
      bypasssub: 1
    },
    condition: {
      duration: 4,
      onResidualOrder: 24
    },
    secondary: null,
    target: "all",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Each active Pokemon receives a perish count of 4 if it doesn't already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down.",
    shortDesc: "All active Pokemon will faint in 3 turns.",
    id: "perishsong",
    fullname: "move: Perish Song",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  petalblizzard: {
    exists: true,
    num: 572,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Petal Blizzard",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Grass",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent Pokemon.",
    id: "petalblizzard",
    fullname: "move: Petal Blizzard",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  petaldance: {
    exists: true,
    num: 80,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Petal Dance",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      dance: 1,
      failinstruct: 1
    },
    self: {
      volatileStatus: "lockedmove"
    },
    secondary: null,
    target: "randomNormal",
    type: "Grass",
    desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
    shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
    id: "petaldance",
    fullname: "move: Petal Dance",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  phantomforce: {
    exists: true,
    num: 566,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Phantom Force",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      mirror: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    breaksProtect: true,
    condition: {
      duration: 2,
      onInvulnerability: false
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection.",
    id: "phantomforce",
    fullname: "move: Phantom Force",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  photongeyser: {
    exists: true,
    num: 722,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Photon Geyser",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
    id: "photongeyser",
    fullname: "move: Photon Geyser",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  pinmissile: {
    exists: true,
    num: 42,
    accuracy: 95,
    basePower: 25,
    category: "Physical",
    name: "Pin Missile",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "pinmissile",
    fullname: "move: Pin Missile",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  plasmafists: {
    exists: true,
    num: 721,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Plasma Fists",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    pseudoWeather: "iondeluge",
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "If this move is successful, causes Normal-type moves to become Electric type this turn.",
    shortDesc: "Normal moves become Electric type this turn.",
    id: "plasmafists",
    fullname: "move: Plasma Fists",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  playnice: {
    exists: true,
    num: 589,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Play Nice",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 1 stage.",
    shortDesc: "Lowers the target's Attack by 1.",
    id: "playnice",
    fullname: "move: Play Nice",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  playrough: {
    exists: true,
    num: 583,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Play Rough",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Fairy",
    desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
    shortDesc: "10% chance to lower the target's Attack by 1.",
    id: "playrough",
    fullname: "move: Play Rough",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  pluck: {
    exists: true,
    num: 365,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Pluck",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "User steals and eats the target's Berry.",
    id: "pluck",
    fullname: "move: Pluck",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  poisonfang: {
    exists: true,
    num: 305,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Poison Fang",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      status: "tox"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 50% chance to badly poison the target.",
    shortDesc: "50% chance to badly poison the target.",
    id: "poisonfang",
    fullname: "move: Poison Fang",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        status: "tox"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  poisongas: {
    exists: true,
    num: 139,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Poison Gas",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "psn",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Poisons the target.",
    shortDesc: "Poisons the foe(s).",
    id: "poisongas",
    fullname: "move: Poison Gas",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  poisonjab: {
    exists: true,
    num: 398,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Poison Jab",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 30% chance to poison the target.",
    shortDesc: "30% chance to poison the target.",
    id: "poisonjab",
    fullname: "move: Poison Jab",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  poisonpowder: {
    exists: true,
    num: 77,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Poison Powder",
    pp: 35,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "psn",
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Poisons the target.",
    shortDesc: "Poisons the target.",
    id: "poisonpowder",
    fullname: "move: Poison Powder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  poisonsting: {
    exists: true,
    num: 40,
    accuracy: 100,
    basePower: 15,
    category: "Physical",
    name: "Poison Sting",
    pp: 35,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 30% chance to poison the target.",
    shortDesc: "30% chance to poison the target.",
    id: "poisonsting",
    fullname: "move: Poison Sting",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  poisontail: {
    exists: true,
    num: 342,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Poison Tail",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio. 10% chance to poison.",
    id: "poisontail",
    fullname: "move: Poison Tail",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: [
      {
        chance: 10,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  pollenpuff: {
    exists: true,
    num: 676,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Pollen Puff",
    pp: 15,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "If the target is an ally, this move restores 1/2 of its maximum HP, rounded down, instead of dealing damage.",
    shortDesc: "If the target is an ally, heals 50% of its max HP.",
    id: "pollenpuff",
    fullname: "move: Pollen Puff",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  poltergeist: {
    exists: true,
    num: 809,
    accuracy: 90,
    basePower: 110,
    category: "Physical",
    name: "Poltergeist",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    shortDesc: "Fails if the target has no held item.",
    id: "poltergeist",
    fullname: "move: Poltergeist",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    desc: "Fails if the target has no held item.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  populationbomb: {
    exists: true,
    num: 860,
    accuracy: 90,
    basePower: 20,
    category: "Physical",
    name: "Population Bomb",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    multihit: 10,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Hits ten times. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit ten times. If the user is holding Loaded Dice, this move hits four to ten times at random without checking accuracy between hits.",
    shortDesc: "Hits 10 times. Each hit can miss.",
    id: "populationbomb",
    fullname: "move: Population Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  pounce: {
    exists: true,
    num: 884,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Pounce",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    id: "pounce",
    fullname: "move: Pounce",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  pound: {
    exists: true,
    num: 1,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Pound",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "pound",
    fullname: "move: Pound",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  powder: {
    exists: true,
    num: 600,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Powder",
    pp: 20,
    priority: 1,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "powder",
    condition: {
      duration: 1,
      onTryMovePriority: -1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      boost: {
        spd: 2
      }
    },
    desc: "If the target uses a Fire-type move this turn, it is prevented from executing and the target loses 1/4 of its maximum HP, rounded half up. This effect does not happen if the Fire-type move is prevented by Primordial Sea.",
    shortDesc: "If using a Fire move, target loses 1/4 max HP.",
    id: "powder",
    fullname: "move: Powder",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powdersnow: {
    exists: true,
    num: 181,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Powder Snow",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "allAdjacentFoes",
    type: "Ice",
    desc: "Has a 10% chance to freeze the target.",
    shortDesc: "10% chance to freeze the foe(s).",
    id: "powdersnow",
    fullname: "move: Powder Snow",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  powergem: {
    exists: true,
    num: 408,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Power Gem",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    shortDesc: "No additional effect.",
    id: "powergem",
    fullname: "move: Power Gem",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  powersplit: {
    exists: true,
    num: 471,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Split",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user and the target have their Attack and Special Attack stats set to be equal to the average of the user and the target's Attack and Special Attack stats, respectively, rounded down. Stat stage changes are unaffected.",
    shortDesc: "Averages Attack and Sp. Atk stats with target.",
    id: "powersplit",
    fullname: "move: Power Split",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powerswap: {
    exists: true,
    num: 384,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Swap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user swaps its Attack and Special Attack stat stage changes with the target.",
    shortDesc: "Swaps Attack and Sp. Atk stat stages with target.",
    id: "powerswap",
    fullname: "move: Power Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powertrick: {
    exists: true,
    num: 379,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Trick",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "powertrick",
    condition: {},
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass.",
    shortDesc: "Switches user's Attack and Defense stats.",
    id: "powertrick",
    fullname: "move: Power Trick",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powertrip: {
    exists: true,
    num: 681,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Power Trip",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
    shortDesc: " + 20 power for each of the user's stat boosts.",
    id: "powertrip",
    fullname: "move: Power Trip",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  poweruppunch: {
    exists: true,
    num: 612,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    isNonstandard: "Past",
    name: "Power-Up Punch",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
    shortDesc: "100% chance to raise the user's Attack by 1.",
    id: "poweruppunch",
    fullname: "move: Power-Up Punch",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  powerwhip: {
    exists: true,
    num: 438,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Power Whip",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "No additional effect.",
    id: "powerwhip",
    fullname: "move: Power Whip",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  precipiceblades: {
    exists: true,
    num: 619,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Precipice Blades",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    target: "allAdjacentFoes",
    type: "Ground",
    desc: "No additional effect.",
    shortDesc: "No additional effect. Hits adjacent foes.",
    id: "precipiceblades",
    fullname: "move: Precipice Blades",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  present: {
    exists: true,
    num: 217,
    accuracy: 90,
    basePower: 0,
    category: "Physical",
    name: "Present",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down.",
    shortDesc: "40, 80, 120 power, or heals target 1/4 max HP.",
    id: "present",
    fullname: "move: Present",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  prismaticlaser: {
    exists: true,
    num: 711,
    accuracy: 100,
    basePower: 160,
    category: "Special",
    isNonstandard: "Past",
    name: "Prismatic Laser",
    pp: 10,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "prismaticlaser",
    fullname: "move: Prismatic Laser",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  protect: {
    exists: true,
    num: 182,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Protect",
    pp: 10,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    volatileStatus: "protect",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Prevents moves from affecting the user this turn.",
    id: "protect",
    fullname: "move: Protect",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  psybeam: {
    exists: true,
    num: 60,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Psybeam",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 10% chance to confuse the target.",
    shortDesc: "10% chance to confuse the target.",
    id: "psybeam",
    fullname: "move: Psybeam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  psyblade: {
    exists: true,
    num: 875,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Psyblade",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "If the current terrain is Electric Terrain, this move's power is multiplied by 1.5.",
    shortDesc: "During Electric Terrain: 1.5x power.",
    id: "psyblade",
    fullname: "move: Psyblade",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  psychup: {
    exists: true,
    num: 244,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Psych Up",
    pp: 10,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "The user copies all of the target's current stat stage changes.",
    shortDesc: "Copies the target's current stat stages.",
    id: "psychup",
    fullname: "move: Psych Up",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  psychic: {
    exists: true,
    num: 94,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Psychic",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "10% chance to lower the target's Sp. Def by 1.",
    id: "psychic",
    fullname: "move: Psychic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  psychicfangs: {
    exists: true,
    num: 706,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Psychic Fangs",
    pp: 10,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
    shortDesc: "Destroys screens, unless the target is immune.",
    id: "psychicfangs",
    fullname: "move: Psychic Fangs",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  psychicterrain: {
    exists: true,
    num: 678,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Psychic Terrain",
    pp: 10,
    priority: 0,
    flags: {
      nonsky: 1
    },
    terrain: "psychicterrain",
    condition: {
      duration: 5,
      onTryHitPriority: 4,
      onBasePowerPriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
    shortDesc: "5 turns. Grounded: +Psychic power, priority-safe.",
    id: "psychicterrain",
    fullname: "move: Psychic Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  psychoboost: {
    exists: true,
    num: 354,
    accuracy: 90,
    basePower: 140,
    category: "Special",
    isNonstandard: "Past",
    name: "Psycho Boost",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Lowers the user's Special Attack by 2 stages.",
    shortDesc: "Lowers the user's Sp. Atk by 2.",
    id: "psychoboost",
    fullname: "move: Psycho Boost",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  psychocut: {
    exists: true,
    num: 427,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Psycho Cut",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "psychocut",
    fullname: "move: Psycho Cut",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  psychoshift: {
    exists: true,
    num: 375,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Psycho Shift",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    self: {},
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 2
      }
    },
    desc: "The user's non-volatile status condition is transferred to the target, and the user is then cured. Fails if the user has no non-volatile status condition or if the target already has one.",
    shortDesc: "Transfers the user's status ailment to the target.",
    id: "psychoshift",
    fullname: "move: Psycho Shift",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  psyshock: {
    exists: true,
    num: 473,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Psyshock",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Deals damage to the target based on its Defense instead of Special Defense.",
    shortDesc: "Damages target based on Defense, not Sp. Def.",
    id: "psyshock",
    fullname: "move: Psyshock",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  psystrike: {
    exists: true,
    num: 540,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Psystrike",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Deals damage to the target based on its Defense instead of Special Defense.",
    shortDesc: "Damages target based on Defense, not Sp. Def.",
    id: "psystrike",
    fullname: "move: Psystrike",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  psywave: {
    exists: true,
    num: 149,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    isNonstandard: "Past",
    name: "Psywave",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Deals damage to the target equal to (user's level) * (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP.",
    shortDesc: "Random damage equal to 0.5x-1.5x user's level.",
    id: "psywave",
    fullname: "move: Psywave",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  pulverizingpancake: {
    exists: true,
    num: 701,
    accuracy: true,
    basePower: 210,
    category: "Physical",
    isNonstandard: "Past",
    name: "Pulverizing Pancake",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "snorliumz",
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "pulverizingpancake",
    fullname: "move: Pulverizing Pancake",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  punishment: {
    exists: true,
    num: 386,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Punishment",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to 60+(X*20), where X is the target's total stat stage changes that are greater than 0, but not more than 200 power.",
    shortDesc: "60 power +20 for each of the target's stat boosts.",
    id: "punishment",
    fullname: "move: Punishment",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  purify: {
    exists: true,
    num: 685,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Purify",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      heal: 1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "The target is cured if it has a non-volatile status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded down.",
    shortDesc: "Cures target's status; heals user 1/2 max HP if so.",
    id: "purify",
    fullname: "move: Purify",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  pursuit: {
    exists: true,
    num: 228,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    isNonstandard: "Past",
    name: "Pursuit",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
    shortDesc: "If a foe is switching out, hits it at 2x power.",
    id: "pursuit",
    fullname: "move: Pursuit",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  pyroball: {
    exists: true,
    num: 780,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Pyro Ball",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1,
      bullet: 1
    },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 10% chance to burn the target.",
    shortDesc: "10% chance to burn the target. Thaws user.",
    id: "pyroball",
    fullname: "move: Pyro Ball",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  quash: {
    exists: true,
    num: 511,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Quash",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Causes the target to take its turn after all other Pokemon this turn, no matter the priority of its selected move. Fails if the target already moved this turn.",
    shortDesc: "Forces the target to move last this turn.",
    id: "quash",
    fullname: "move: Quash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  quickattack: {
    exists: true,
    num: 98,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Quick Attack",
    pp: 30,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "quickattack",
    fullname: "move: Quick Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  quickguard: {
    exists: true,
    num: 501,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Quick Guard",
    pp: 15,
    priority: 3,
    flags: {
      snatch: 1
    },
    sideCondition: "quickguard",
    condition: {
      duration: 1,
      onTryHitPriority: 4
    },
    secondary: null,
    target: "allySide",
    type: "Fighting",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
    shortDesc: "Protects allies from priority attacks this turn.",
    id: "quickguard",
    fullname: "move: Quick Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  quiverdance: {
    exists: true,
    num: 483,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Quiver Dance",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      dance: 1
    },
    boosts: {
      spa: 1,
      spd: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Special Attack, Special Defense, and Speed by 1 stage.",
    shortDesc: "Raises the user's Sp. Atk, Sp. Def, Speed by 1.",
    id: "quiverdance",
    fullname: "move: Quiver Dance",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rage: {
    exists: true,
    num: 99,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    isNonstandard: "Past",
    name: "Rage",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "rage"
    },
    condition: {
      onBeforeMovePriority: 100
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Once this move is successfully used, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
    shortDesc: "Raises the user's Attack by 1 if hit during use.",
    id: "rage",
    fullname: "move: Rage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  ragefist: {
    exists: true,
    num: 889,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Rage Fist",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "Power is equal to 50+(X*50), where X is the total number of times the user has been hit by a damaging attack during the battle, even if the user did not lose HP from the attack. X cannot be greater than 6 and does not reset upon switching out or fainting. Each hit of a multi-hit attack is counted, but confusion damage is not counted.",
    shortDesc: "+50 power for each time user was hit. Max 6 hits.",
    id: "ragefist",
    fullname: "move: Rage Fist",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  ragepowder: {
    exists: true,
    num: 476,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rage Powder",
    pp: 20,
    priority: 2,
    flags: {
      powder: 1,
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "ragepowder",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
    shortDesc: "The foes' moves target the user on the turn used.",
    id: "ragepowder",
    fullname: "move: Rage Powder",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ragingbull: {
    exists: true,
    num: 873,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Raging Bull",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated. If the user's current form is a Paldean Tauros, this move's type changes to match. Fighting type for Combat Breed, Fire type for Blaze Breed, and Water type for Aqua Breed.",
    shortDesc: "Destroys screens. Type depends on user's form.",
    id: "ragingbull",
    fullname: "move: Raging Bull",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  raindance: {
    exists: true,
    num: 240,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rain Dance",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "RainDance",
    secondary: null,
    target: "all",
    type: "Water",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the weather becomes Rain Dance. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance.",
    shortDesc: "For 5 turns, heavy rain powers Water moves.",
    id: "raindance",
    fullname: "move: Rain Dance",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rapidspin: {
    exists: true,
    num: 229,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Rapid Spin",
    pp: 40,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Normal",
    desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
    shortDesc: "Free user from hazards/bind/Leech Seed; +1 Spe.",
    id: "rapidspin",
    fullname: "move: Rapid Spin",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  razorleaf: {
    exists: true,
    num: 75,
    accuracy: 95,
    basePower: 55,
    category: "Physical",
    name: "Razor Leaf",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Grass",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio. Hits adjacent foes.",
    id: "razorleaf",
    fullname: "move: Razor Leaf",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  razorshell: {
    exists: true,
    num: 534,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Razor Shell",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Water",
    desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
    shortDesc: "50% chance to lower the target's Defense by 1.",
    id: "razorshell",
    fullname: "move: Razor Shell",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  razorwind: {
    exists: true,
    num: 13,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Razor Wind",
    pp: 10,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Charges, then hits foe(s) turn 2. High crit ratio.",
    id: "razorwind",
    fullname: "move: Razor Wind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  recover: {
    exists: true,
    num: 105,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Recover",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user by 50% of its max HP.",
    id: "recover",
    fullname: "move: Recover",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  recycle: {
    exists: true,
    num: 278,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Recycle",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
    shortDesc: "Restores the item the user last used.",
    id: "recycle",
    fullname: "move: Recycle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  reflect: {
    exists: true,
    num: 115,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflect",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "reflect",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 1
    },
    secondary: null,
    target: "allySide",
    type: "Psychic",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "For 5 turns, the user and its party members take 0.5x damage from physical attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
    shortDesc: "For 5 turns, physical damage to allies is halved.",
    id: "reflect",
    fullname: "move: Reflect",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  reflecttype: {
    exists: true,
    num: 513,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflect Type",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the user's types to become the same as the current types of the target. If the target's current types include typeless and a non-added type, typeless is ignored. If the target's current types include typeless and an added type from Forest's Curse or Trick-or-Treat, typeless is copied as the Normal type instead. Fails if the user is an Arceus or a Silvally, if the user is Terastallized, or if the target's current type is typeless alone.",
    shortDesc: "User becomes the same type as the target.",
    id: "reflecttype",
    fullname: "move: Reflect Type",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  refresh: {
    exists: true,
    num: 287,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Refresh",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
    shortDesc: "User cures its burn, poison, or paralysis.",
    id: "refresh",
    fullname: "move: Refresh",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  relicsong: {
    exists: true,
    num: 547,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Relic Song",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      chance: 10,
      status: "slp"
    },
    target: "allAdjacentFoes",
    type: "Normal",
    desc: "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active.",
    shortDesc: "10% chance to sleep foe(s). Meloetta transforms.",
    id: "relicsong",
    fullname: "move: Relic Song",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "slp"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  rest: {
    exists: true,
    num: 156,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rest",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.",
    shortDesc: "User sleeps 2 turns and restores HP and status.",
    id: "rest",
    fullname: "move: Rest",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  retaliate: {
    exists: true,
    num: 514,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Retaliate",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Power doubles if one of the user's party members fainted last turn.",
    shortDesc: "Power doubles if an ally fainted last turn.",
    id: "retaliate",
    fullname: "move: Retaliate",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  "return": {
    exists: true,
    num: 216,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    isNonstandard: "Past",
    name: "Return",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
    shortDesc: "Max 102 power at maximum Happiness.",
    id: "return",
    fullname: "move: Return",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  revelationdance: {
    exists: true,
    num: 686,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Revelation Dance",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      dance: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
    shortDesc: "Type varies based on the user's primary type.",
    id: "revelationdance",
    fullname: "move: Revelation Dance",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  revenge: {
    exists: true,
    num: 279,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Revenge",
    pp: 10,
    priority: -4,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Power doubles if the user was hit by the target this turn.",
    shortDesc: "Power doubles if user is damaged by the target.",
    id: "revenge",
    fullname: "move: Revenge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  reversal: {
    exists: true,
    num: 179,
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    name: "Reversal",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: {
      basePower: 160
    },
    desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
    shortDesc: "More power the less HP the user has left.",
    id: "reversal",
    fullname: "move: Reversal",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  revivalblessing: {
    exists: true,
    num: 863,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Revival Blessing",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: {},
    slotCondition: "revivalblessing",
    selfSwitch: true,
    condition: {
      duration: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "A fainted party member is selected and revived with 1/2 its max HP, rounded down. Fails if there are no fainted party members.",
    shortDesc: "Revives a fainted Pokemon to 50% HP.",
    id: "revivalblessing",
    fullname: "move: Revival Blessing",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  risingvoltage: {
    exists: true,
    num: 804,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Rising Voltage",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    maxMove: {
      basePower: 140
    },
    desc: "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
    shortDesc: "2x power if target is grounded in Electric Terrain.",
    id: "risingvoltage",
    fullname: "move: Rising Voltage",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 140
    }
  },
  roar: {
    exists: true,
    num: 46,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Roar",
    pp: 20,
    priority: -6,
    flags: {
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1,
      allyanim: 1,
      noassist: 1,
      failcopycat: 1
    },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
    shortDesc: "Forces the target to switch to a random ally.",
    id: "roar",
    fullname: "move: Roar",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  roaroftime: {
    exists: true,
    num: 459,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Roar of Time",
    pp: 5,
    priority: 0,
    flags: {
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "roaroftime",
    fullname: "move: Roar of Time",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  rockblast: {
    exists: true,
    num: 350,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Rock Blast",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Rock",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "rockblast",
    fullname: "move: Rock Blast",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rockclimb: {
    exists: true,
    num: 431,
    accuracy: 85,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Rock Climb",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 20% chance to confuse the target.",
    shortDesc: "20% chance to confuse the target.",
    id: "rockclimb",
    fullname: "move: Rock Climb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  rockpolish: {
    exists: true,
    num: 397,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rock Polish",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Rock",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Speed by 2 stages.",
    shortDesc: "Raises the user's Speed by 2.",
    id: "rockpolish",
    fullname: "move: Rock Polish",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rockslide: {
    exists: true,
    num: 157,
    accuracy: 90,
    basePower: 75,
    category: "Physical",
    name: "Rock Slide",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Rock",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the foe(s) flinch.",
    id: "rockslide",
    fullname: "move: Rock Slide",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  rocksmash: {
    exists: true,
    num: 249,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Rock Smash",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
    shortDesc: "50% chance to lower the target's Defense by 1.",
    id: "rocksmash",
    fullname: "move: Rock Smash",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  rockthrow: {
    exists: true,
    num: 88,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Rock Throw",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    shortDesc: "No additional effect.",
    id: "rockthrow",
    fullname: "move: Rock Throw",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  rocktomb: {
    exists: true,
    num: 317,
    accuracy: 95,
    basePower: 60,
    category: "Physical",
    name: "Rock Tomb",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Rock",
    desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
    shortDesc: "100% chance to lower the target's Speed by 1.",
    id: "rocktomb",
    fullname: "move: Rock Tomb",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  rockwrecker: {
    exists: true,
    num: 439,
    accuracy: 90,
    basePower: 150,
    category: "Physical",
    isNonstandard: "Past",
    name: "Rock Wrecker",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      recharge: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
    shortDesc: "User cannot move next turn.",
    id: "rockwrecker",
    fullname: "move: Rock Wrecker",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  roleplay: {
    exists: true,
    num: 272,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Role Play",
    pp: 10,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Zen Mode, Zero to Hero, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Flower Gift, Forecast, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
    shortDesc: "User replaces its Ability with the target's.",
    id: "roleplay",
    fullname: "move: Role Play",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rollingkick: {
    exists: true,
    num: 27,
    accuracy: 85,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Rolling Kick",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "rollingkick",
    fullname: "move: Rolling Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  rollout: {
    exists: true,
    num: 205,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    name: "Rollout",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      noparentalbond: 1,
      failinstruct: 1
    },
    condition: {
      duration: 1,
      onLockMove: "rollout"
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
    shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
    id: "rollout",
    fullname: "move: Rollout",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  roost: {
    exists: true,
    num: 355,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Roost",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    self: {
      volatileStatus: "roost"
    },
    condition: {
      duration: 1,
      onResidualOrder: 25,
      onTypePriority: -1
    },
    secondary: null,
    target: "self",
    type: "Flying",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up. If the user is not Terastallized, until the end of the turn Flying-type users lose their Flying type and pure Flying-type users become Normal type. Does nothing if the user's HP is full.",
    shortDesc: "Heals 50% HP. Flying-type removed 'til turn ends.",
    id: "roost",
    fullname: "move: Roost",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rototiller: {
    exists: true,
    num: 563,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Rototiller",
    pp: 10,
    priority: 0,
    flags: {
      distance: 1,
      nonsky: 1
    },
    secondary: null,
    target: "all",
    type: "Ground",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the Attack and Special Attack of all grounded Grass-type Pokemon on the field by 1 stage.",
    shortDesc: "Raises Atk/Sp. Atk of grounded Grass types by 1.",
    id: "rototiller",
    fullname: "move: Rototiller",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  round: {
    exists: true,
    num: 496,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Round",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If there are other active Pokemon that chose this move for use this turn, those Pokemon take their turn immediately after the user, in Speed order, and this move's power is 120 for each other user.",
    shortDesc: "Power doubles if others used Round this turn.",
    id: "round",
    fullname: "move: Round",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  ruination: {
    exists: true,
    num: 877,
    accuracy: 90,
    basePower: 0,
    category: "Special",
    name: "Ruination",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
    shortDesc: "Does damage equal to 1/2 target's current HP.",
    id: "ruination",
    fullname: "move: Ruination",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  sacredfire: {
    exists: true,
    num: 221,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Sacred Fire",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    secondary: {
      chance: 50,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 50% chance to burn the target.",
    shortDesc: "50% chance to burn the target. Thaws user.",
    id: "sacredfire",
    fullname: "move: Sacred Fire",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: [
      {
        chance: 50,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  sacredsword: {
    exists: true,
    num: 533,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Sacred Sword",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    ignoreEvasion: true,
    ignoreDefensive: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Ignores the target's stat stage changes, including evasiveness.",
    shortDesc: "Ignores the target's stat stage changes.",
    id: "sacredsword",
    fullname: "move: Sacred Sword",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  safeguard: {
    exists: true,
    num: 219,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Safeguard",
    pp: 25,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "safeguard",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 3
    },
    secondary: null,
    target: "allySide",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokemon. Pokemon on the user's side cannot become affected by Yawn but can fall asleep from its effect. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
    shortDesc: "For 5 turns, protects user's party from status.",
    id: "safeguard",
    fullname: "move: Safeguard",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  saltcure: {
    exists: true,
    num: 864,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Salt Cure",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    condition: {
      noCopy: true,
      onResidualOrder: 13
    },
    secondary: {
      chance: 100,
      volatileStatus: "saltcure"
    },
    target: "normal",
    type: "Rock",
    desc: "Causes damage to the target equal to 1/8 of its maximum HP (1/4 if the target is Steel or Water type), rounded down, at the end of each turn during effect. This effect ends when the target is no longer active.",
    shortDesc: "Deals 1/8 max HP each turn; 1/4 on Steel, Water.",
    id: "saltcure",
    fullname: "move: Salt Cure",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        volatileStatus: "saltcure"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  sandattack: {
    exists: true,
    num: 28,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Sand Attack",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    id: "sandattack",
    fullname: "move: Sand Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sandstorm: {
    exists: true,
    num: 201,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sandstorm",
    pp: 10,
    priority: 0,
    flags: {
      wind: 1
    },
    weather: "Sandstorm",
    secondary: null,
    target: "all",
    type: "Rock",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
    shortDesc: "For 5 turns, a sandstorm rages. Rock: 1.5x SpD.",
    id: "sandstorm",
    fullname: "move: Sandstorm",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sandtomb: {
    exists: true,
    num: 328,
    accuracy: 85,
    basePower: 35,
    category: "Physical",
    name: "Sand Tomb",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Ground",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "sandtomb",
    fullname: "move: Sand Tomb",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  savagespinout: {
    exists: true,
    num: 634,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Savage Spin-Out",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "buginiumz",
    secondary: null,
    target: "normal",
    type: "Bug",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "savagespinout",
    fullname: "move: Savage Spin-Out",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  scald: {
    exists: true,
    num: 503,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Scald",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Water",
    desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
    shortDesc: "30% chance to burn the target. Thaws target.",
    id: "scald",
    fullname: "move: Scald",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  scaleshot: {
    exists: true,
    num: 799,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Scale Shot",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    selfBoost: {
      boosts: {
        def: -1,
        spe: 1
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times. User: -1 Def, +1 Spe after last hit.",
    id: "scaleshot",
    fullname: "move: Scale Shot",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  scaryface: {
    exists: true,
    num: 184,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Scary Face",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the target's Speed by 2.",
    id: "scaryface",
    fullname: "move: Scary Face",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  scorchingsands: {
    exists: true,
    num: 815,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Scorching Sands",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Ground",
    desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
    shortDesc: "30% chance to burn the target. Thaws target.",
    id: "scorchingsands",
    fullname: "move: Scorching Sands",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  scratch: {
    exists: true,
    num: 10,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Scratch",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "scratch",
    fullname: "move: Scratch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  screech: {
    exists: true,
    num: 103,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Screech",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1,
      allyanim: 1
    },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Lowers the target's Defense by 2 stages.",
    shortDesc: "Lowers the target's Defense by 2.",
    id: "screech",
    fullname: "move: Screech",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  searingshot: {
    exists: true,
    num: 545,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Searing Shot",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "allAdjacent",
    type: "Fire",
    desc: "Has a 30% chance to burn the target.",
    shortDesc: "30% chance to burn adjacent Pokemon.",
    id: "searingshot",
    fullname: "move: Searing Shot",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  searingsunrazesmash: {
    exists: true,
    num: 724,
    accuracy: true,
    basePower: 200,
    category: "Physical",
    isNonstandard: "Past",
    name: "Searing Sunraze Smash",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "solganiumz",
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Ignores the Abilities of other Pokemon.",
    id: "searingsunrazesmash",
    fullname: "move: Searing Sunraze Smash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  secretpower: {
    exists: true,
    num: 290,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Secret Power",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain.",
    shortDesc: "Effect varies with terrain. (30% paralysis chance)",
    id: "secretpower",
    fullname: "move: Secret Power",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  secretsword: {
    exists: true,
    num: 548,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    isNonstandard: "Past",
    overrideDefensiveStat: "def",
    name: "Secret Sword",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Deals damage to the target based on its Defense instead of Special Defense.",
    shortDesc: "Damages target based on Defense, not Sp. Def.",
    id: "secretsword",
    fullname: "move: Secret Sword",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  seedbomb: {
    exists: true,
    num: 402,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Seed Bomb",
    pp: 15,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "No additional effect.",
    id: "seedbomb",
    fullname: "move: Seed Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  seedflare: {
    exists: true,
    num: 465,
    accuracy: 85,
    basePower: 120,
    category: "Special",
    isNonstandard: "Past",
    name: "Seed Flare",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 40,
      boosts: {
        spd: -2
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 40% chance to lower the target's Special Defense by 2 stages.",
    shortDesc: "40% chance to lower the target's Sp. Def by 2.",
    id: "seedflare",
    fullname: "move: Seed Flare",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: [
      {
        chance: 40,
        boosts: {
          spd: -2
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  seismictoss: {
    exists: true,
    num: 69,
    accuracy: 100,
    basePower: 0,
    damage: "level",
    category: "Physical",
    name: "Seismic Toss",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    maxMove: {
      basePower: 75
    },
    desc: "Deals damage to the target equal to the user's level.",
    shortDesc: "Does damage equal to the user's level.",
    id: "seismictoss",
    fullname: "move: Seismic Toss",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  selfdestruct: {
    exists: true,
    num: 120,
    accuracy: 100,
    basePower: 200,
    category: "Physical",
    name: "Self-Destruct",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      noparentalbond: 1
    },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
    shortDesc: "Hits adjacent Pokemon. The user faints.",
    id: "selfdestruct",
    fullname: "move: Self-Destruct",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  shadowball: {
    exists: true,
    num: 247,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Shadow Ball",
    pp: 15,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
    shortDesc: "20% chance to lower the target's Sp. Def by 1.",
    id: "shadowball",
    fullname: "move: Shadow Ball",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  shadowbone: {
    exists: true,
    num: 708,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    isNonstandard: "Past",
    name: "Shadow Bone",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Ghost",
    desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
    shortDesc: "20% chance to lower the target's Defense by 1.",
    id: "shadowbone",
    fullname: "move: Shadow Bone",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  shadowclaw: {
    exists: true,
    num: 421,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Shadow Claw",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "shadowclaw",
    fullname: "move: Shadow Claw",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  shadowforce: {
    exists: true,
    num: 467,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Shadow Force",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      mirror: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    breaksProtect: true,
    condition: {
      duration: 2,
      onInvulnerability: false
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection.",
    id: "shadowforce",
    fullname: "move: Shadow Force",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  shadowpunch: {
    exists: true,
    num: 325,
    accuracy: true,
    basePower: 60,
    category: "Physical",
    name: "Shadow Punch",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    shortDesc: "This move does not check accuracy.",
    id: "shadowpunch",
    fullname: "move: Shadow Punch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  shadowsneak: {
    exists: true,
    num: 425,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Shadow Sneak",
    pp: 30,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "shadowsneak",
    fullname: "move: Shadow Sneak",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  sharpen: {
    exists: true,
    num: 159,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Sharpen",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the user's Attack by 1 stage.",
    shortDesc: "Raises the user's Attack by 1.",
    id: "sharpen",
    fullname: "move: Sharpen",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  shatteredpsyche: {
    exists: true,
    num: 648,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Shattered Psyche",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "psychiumz",
    secondary: null,
    target: "normal",
    type: "Psychic",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "shatteredpsyche",
    fullname: "move: Shattered Psyche",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  shedtail: {
    exists: true,
    num: 880,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shed Tail",
    pp: 10,
    priority: 0,
    flags: {},
    volatileStatus: "substitute",
    self: {},
    selfSwitch: "shedtail",
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user takes 1/2 of its maximum HP, rounded up, and creates a substitute that has 1/4 of the user's maximum HP, rounded down. The user is replaced with another Pokemon in its party and the selected Pokemon has the substitute transferred to it. Fails if the user would faint, or if there are no unfainted party members.",
    shortDesc: "User takes 1/2 its max HP to pass a substitute.",
    id: "shedtail",
    fullname: "move: Shed Tail",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sheercold: {
    exists: true,
    num: 329,
    accuracy: 30,
    basePower: 0,
    category: "Special",
    name: "Sheer Cold",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    ohko: "Ice",
    target: "normal",
    type: "Ice",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune.",
    shortDesc: "OHKOs non-Ice targets. Fails if user's lower level.",
    id: "sheercold",
    fullname: "move: Sheer Cold",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  shellsidearm: {
    exists: true,
    num: 801,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Shell Side Arm",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 20% chance to poison the target. This move becomes a physical attack that makes contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
    shortDesc: "20% psn. Physical+contact if it would be stronger.",
    id: "shellsidearm",
    fullname: "move: Shell Side Arm",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  shellsmash: {
    exists: true,
    num: 504,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shell Smash",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: -1,
      spd: -1,
      atk: 2,
      spa: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Lowers the user's Defense and Special Defense by 1 stage. Raises the user's Attack, Special Attack, and Speed by 2 stages.",
    shortDesc: "Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2.",
    id: "shellsmash",
    fullname: "move: Shell Smash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  shelltrap: {
    exists: true,
    num: 704,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    isNonstandard: "Past",
    name: "Shell Trap",
    pp: 5,
    priority: -3,
    flags: {
      protect: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1
    },
    condition: {
      duration: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fire",
    desc: "Fails unless the user is hit by a physical attack from an opponent this turn before it can execute the move. If the user was hit and has not fainted, it attacks immediately after being hit, and the effect ends. If the opponent's physical attack had a secondary effect removed by the Sheer Force Ability, it does not count for the purposes of this effect.",
    shortDesc: "User must take physical damage before moving.",
    id: "shelltrap",
    fullname: "move: Shell Trap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  shiftgear: {
    exists: true,
    num: 508,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shift Gear",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spe: 2,
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
    shortDesc: "Raises the user's Speed by 2 and Attack by 1.",
    id: "shiftgear",
    fullname: "move: Shift Gear",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  shockwave: {
    exists: true,
    num: 351,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Shock Wave",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    shortDesc: "This move does not check accuracy.",
    id: "shockwave",
    fullname: "move: Shock Wave",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  shoreup: {
    exists: true,
    num: 659,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shore Up",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Ground",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Sandstorm, the user instead restores 2/3 of its maximum HP, rounded half down.",
    shortDesc: "User restores 1/2 its max HP; 2/3 in Sandstorm.",
    id: "shoreup",
    fullname: "move: Shore Up",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  signalbeam: {
    exists: true,
    num: 324,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    isNonstandard: "Past",
    name: "Signal Beam",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 10% chance to confuse the target.",
    shortDesc: "10% chance to confuse the target.",
    id: "signalbeam",
    fullname: "move: Signal Beam",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  silktrap: {
    exists: true,
    num: 852,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Silk Trap",
    pp: 10,
    priority: 4,
    flags: {},
    stallingMove: true,
    volatileStatus: "silktrap",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    target: "self",
    type: "Bug",
    desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Speed lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects from damaging attacks. Contact: -1 Spe.",
    id: "silktrap",
    fullname: "move: Silk Trap",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  silverwind: {
    exists: true,
    num: 318,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    isNonstandard: "Past",
    name: "Silver Wind",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
    shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
    id: "silverwind",
    fullname: "move: Silver Wind",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  sing: {
    exists: true,
    num: 47,
    accuracy: 55,
    basePower: 0,
    category: "Status",
    name: "Sing",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "sing",
    fullname: "move: Sing",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to fall asleep.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sinisterarrowraid: {
    exists: true,
    num: 695,
    accuracy: true,
    basePower: 180,
    category: "Physical",
    isNonstandard: "Past",
    name: "Sinister Arrow Raid",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "decidiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    shortDesc: "No additional effect.",
    id: "sinisterarrowraid",
    fullname: "move: Sinister Arrow Raid",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  sketch: {
    exists: true,
    num: 166,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Sketch",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1,
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    noSketch: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows.",
    shortDesc: "Permanently copies the last move target used.",
    id: "sketch",
    fullname: "move: Sketch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  skillswap: {
    exists: true,
    num: 285,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Skill Swap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, Zen Mode, or Zero to Hero.",
    shortDesc: "The user and the target trade Abilities.",
    id: "skillswap",
    fullname: "move: Skill Swap",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  skittersmack: {
    exists: true,
    num: 806,
    accuracy: 90,
    basePower: 70,
    category: "Physical",
    name: "Skitter Smack",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "100% chance to lower target's Sp. Atk by 1.",
    id: "skittersmack",
    fullname: "move: Skitter Smack",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  skullbash: {
    exists: true,
    num: 130,
    accuracy: 100,
    basePower: 130,
    category: "Physical",
    isNonstandard: "Past",
    name: "Skull Bash",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2.",
    id: "skullbash",
    fullname: "move: Skull Bash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  skyattack: {
    exists: true,
    num: 143,
    accuracy: 90,
    basePower: 140,
    category: "Physical",
    name: "Sky Attack",
    pp: 5,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1,
      distance: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    critRatio: 2,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "any",
    type: "Flying",
    desc: "Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
    shortDesc: "Charges, then hits turn 2. 30% flinch. High crit.",
    id: "skyattack",
    fullname: "move: Sky Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  skydrop: {
    exists: true,
    num: 507,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Sky Drop",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1
    },
    condition: {
      duration: 2,
      onFoeTrapPokemonPriority: -15,
      onFoeBeforeMovePriority: 12,
      onRedirectTargetPriority: 99
    },
    secondary: null,
    target: "any",
    type: "Flying",
    desc: "This attack takes the target into the air with the user on the first turn and executes on the second. Pokemon weighing 200 kg or more cannot be lifted. On the first turn, the user and the target avoid all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. The user and the target cannot make a move between turns, but the target can select a move to use. This move cannot damage Flying-type Pokemon. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop.",
    shortDesc: "User and foe fly up turn 1. Damages on turn 2.",
    id: "skydrop",
    fullname: "move: Sky Drop",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  skyuppercut: {
    exists: true,
    num: 327,
    accuracy: 90,
    basePower: 85,
    category: "Physical",
    isNonstandard: "Past",
    name: "Sky Uppercut",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
    shortDesc: "Can hit Pokemon using Bounce, Fly, or Sky Drop.",
    id: "skyuppercut",
    fullname: "move: Sky Uppercut",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  slackoff: {
    exists: true,
    num: 303,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Slack Off",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user by 50% of its max HP.",
    id: "slackoff",
    fullname: "move: Slack Off",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  slam: {
    exists: true,
    num: 21,
    accuracy: 75,
    basePower: 80,
    category: "Physical",
    name: "Slam",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "slam",
    fullname: "move: Slam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  slash: {
    exists: true,
    num: 163,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Slash",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "slash",
    fullname: "move: Slash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  sleeppowder: {
    exists: true,
    num: 79,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Sleep Powder",
    pp: 15,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "sleeppowder",
    fullname: "move: Sleep Powder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to fall asleep.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sleeptalk: {
    exists: true,
    num: 214,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sleep Talk",
    pp: 10,
    priority: 0,
    flags: {
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    sleepUsable: true,
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "crit2"
    },
    desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, Wicked Torque, or any two-turn move.",
    shortDesc: "User must be asleep. Uses another known move.",
    id: "sleeptalk",
    fullname: "move: Sleep Talk",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sludge: {
    exists: true,
    num: 124,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Sludge",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 30% chance to poison the target.",
    shortDesc: "30% chance to poison the target.",
    id: "sludge",
    fullname: "move: Sludge",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 120
    }
  },
  sludgebomb: {
    exists: true,
    num: 188,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Sludge Bomb",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 30% chance to poison the target.",
    shortDesc: "30% chance to poison the target.",
    id: "sludgebomb",
    fullname: "move: Sludge Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  sludgewave: {
    exists: true,
    num: 482,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Sludge Wave",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "allAdjacent",
    type: "Poison",
    desc: "Has a 10% chance to poison the target.",
    shortDesc: "10% chance to poison adjacent Pokemon.",
    id: "sludgewave",
    fullname: "move: Sludge Wave",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  smackdown: {
    exists: true,
    num: 479,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Smack Down",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    volatileStatus: "smackdown",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
    shortDesc: "Removes the target's Ground immunity.",
    id: "smackdown",
    fullname: "move: Smack Down",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  smartstrike: {
    exists: true,
    num: 684,
    accuracy: true,
    basePower: 70,
    category: "Physical",
    name: "Smart Strike",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    shortDesc: "This move does not check accuracy.",
    id: "smartstrike",
    fullname: "move: Smart Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "This move does not check accuracy.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  smellingsalts: {
    exists: true,
    num: 265,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Smelling Salts",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis.",
    shortDesc: "Power doubles if target is paralyzed, and cures it.",
    id: "smellingsalts",
    fullname: "move: Smelling Salts",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  smog: {
    exists: true,
    num: 123,
    accuracy: 70,
    basePower: 30,
    category: "Special",
    name: "Smog",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 40,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    desc: "Has a 40% chance to poison the target.",
    shortDesc: "40% chance to poison the target.",
    id: "smog",
    fullname: "move: Smog",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 40,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  smokescreen: {
    exists: true,
    num: 108,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Smokescreen",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    desc: "Lowers the target's accuracy by 1 stage.",
    shortDesc: "Lowers the target's accuracy by 1.",
    id: "smokescreen",
    fullname: "move: Smokescreen",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  snaptrap: {
    exists: true,
    num: 779,
    accuracy: 100,
    basePower: 35,
    category: "Physical",
    isNonstandard: "Past",
    name: "Snap Trap",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "snaptrap",
    fullname: "move: Snap Trap",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  snarl: {
    exists: true,
    num: 555,
    accuracy: 95,
    basePower: 55,
    category: "Special",
    name: "Snarl",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Dark",
    desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1.",
    id: "snarl",
    fullname: "move: Snarl",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  snatch: {
    exists: true,
    num: 289,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Snatch",
    pp: 10,
    priority: 4,
    flags: {
      bypasssub: 1,
      mustpressure: 1,
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "snatch",
    condition: {
      duration: 1,
      onAnyPrepareHitPriority: -1
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
    shortDesc: "User steals certain support moves to use itself.",
    id: "snatch",
    fullname: "move: Snatch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  snipeshot: {
    exists: true,
    num: 745,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Snipe Shot",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    tracksTarget: true,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.",
    shortDesc: "High critical hit ratio. Cannot be redirected.",
    id: "snipeshot",
    fullname: "move: Snipe Shot",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  snore: {
    exists: true,
    num: 173,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Snore",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    sleepUsable: true,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 30% chance to make the target flinch. Fails if the user is not asleep.",
    shortDesc: "User must be asleep. 30% chance to flinch target.",
    id: "snore",
    fullname: "move: Snore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  snowscape: {
    exists: true,
    num: 883,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Snowscape",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "snow",
    secondary: null,
    target: "all",
    type: "Ice",
    desc: "For 5 turns, the weather becomes Snow. During the effect, the Defense of Ice-type Pokemon is multiplied by 1.5 when taking damage from a physical attack. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Snow.",
    shortDesc: "For 5 turns, snow falls. Ice: 1.5x Def.",
    id: "snowscape",
    fullname: "move: Snowscape",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  soak: {
    exists: true,
    num: 487,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Soak",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, if the target is already purely Water type, or if the target is Terastallized.",
    shortDesc: "Changes the target's type to Water.",
    id: "soak",
    fullname: "move: Soak",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  softboiled: {
    exists: true,
    num: 135,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Soft-Boiled",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP, rounded half up.",
    shortDesc: "Heals the user by 50% of its max HP.",
    id: "softboiled",
    fullname: "move: Soft-Boiled",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  solarbeam: {
    exists: true,
    num: 76,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Solar Beam",
    pp: 10,
    priority: 0,
    flags: {
      charge: 1,
      protect: 1,
      mirror: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
    shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight.",
    id: "solarbeam",
    fullname: "move: Solar Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  solarblade: {
    exists: true,
    num: 669,
    accuracy: 100,
    basePower: 125,
    category: "Physical",
    name: "Solar Blade",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      slicing: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
    shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight.",
    id: "solarblade",
    fullname: "move: Solar Blade",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  sonicboom: {
    exists: true,
    num: 49,
    accuracy: 90,
    basePower: 0,
    damage: 20,
    category: "Special",
    isNonstandard: "Past",
    name: "Sonic Boom",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Deals 20 HP of damage to the target.",
    shortDesc: "Always does 20 HP of damage.",
    id: "sonicboom",
    fullname: "move: Sonic Boom",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  soulstealing7starstrike: {
    exists: true,
    num: 699,
    accuracy: true,
    basePower: 195,
    category: "Physical",
    isNonstandard: "Past",
    name: "Soul-Stealing 7-Star Strike",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "marshadiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    shortDesc: "No additional effect.",
    id: "soulstealing7starstrike",
    fullname: "move: Soul-Stealing 7-Star Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "No additional effect.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  spacialrend: {
    exists: true,
    num: 460,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    name: "Spacial Rend",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Dragon",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "spacialrend",
    fullname: "move: Spacial Rend",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  spark: {
    exists: true,
    num: 209,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Spark",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 30% chance to paralyze the target.",
    shortDesc: "30% chance to paralyze the target.",
    id: "spark",
    fullname: "move: Spark",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  sparklingaria: {
    exists: true,
    num: 664,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    isNonstandard: "Past",
    name: "Sparkling Aria",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      dustproof: true,
      chance: 100,
      volatileStatus: "sparklingaria"
    },
    target: "allAdjacent",
    type: "Water",
    desc: "If the user has not fainted, the target is cured of its burn.",
    shortDesc: "The target is cured of its burn.",
    id: "sparklingaria",
    fullname: "move: Sparkling Aria",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        dustproof: true,
        chance: 100,
        volatileStatus: "sparklingaria"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  spectralthief: {
    exists: true,
    num: 712,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Spectral Thief",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      bypasssub: 1
    },
    stealsBoosts: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    desc: "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
    shortDesc: "Steals target's boosts before dealing damage.",
    id: "spectralthief",
    fullname: "move: Spectral Thief",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  speedswap: {
    exists: true,
    num: 683,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Speed Swap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "The user swaps its Speed stat with the target. Stat stage changes are unaffected.",
    shortDesc: "Swaps Speed stat with target.",
    id: "speedswap",
    fullname: "move: Speed Swap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spicyextract: {
    exists: true,
    num: 858,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spicy Extract",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      atk: 2,
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "Raises the target's Attack by 2 stages and lowers its Defense by 2 stages.",
    shortDesc: "Raises target's Atk by 2 and lowers its Def by 2.",
    id: "spicyextract",
    fullname: "move: Spicy Extract",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spiderweb: {
    exists: true,
    num: 169,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Spider Web",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Prevents the target from switching out.",
    id: "spiderweb",
    fullname: "move: Spider Web",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spikecannon: {
    exists: true,
    num: 131,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    isNonstandard: "Past",
    name: "Spike Cannon",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 120
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "spikecannon",
    fullname: "move: Spike Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 120
    }
  },
  spikes: {
    exists: true,
    num: 191,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spikes",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      nonsky: 1,
      mustpressure: 1
    },
    sideCondition: "spikes",
    condition: {},
    secondary: null,
    target: "foeSide",
    type: "Ground",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
    shortDesc: "Hurts grounded foes on switch-in. Max 3 layers.",
    id: "spikes",
    fullname: "move: Spikes",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spikyshield: {
    exists: true,
    num: 596,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spiky Shield",
    pp: 10,
    priority: 4,
    flags: {
      noassist: 1,
      failcopycat: 1
    },
    stallingMove: true,
    volatileStatus: "spikyshield",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
    shortDesc: "Protects from moves. Contact: loses 1/8 max HP.",
    id: "spikyshield",
    fullname: "move: Spiky Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spinout: {
    exists: true,
    num: 859,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Spin Out",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spe: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "Lowers the user's Speed by 2 stages.",
    shortDesc: "Lowers the user's Speed by 2.",
    id: "spinout",
    fullname: "move: Spin Out",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  spiritbreak: {
    exists: true,
    num: 789,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Spirit Break",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Fairy",
    desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
    id: "spiritbreak",
    fullname: "move: Spirit Break",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  spiritshackle: {
    exists: true,
    num: 662,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Spirit Shackle",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Ghost",
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Prevents the target from switching out.",
    id: "spiritshackle",
    fullname: "move: Spirit Shackle",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  spitup: {
    exists: true,
    num: 255,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    name: "Spit Up",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Power is equal to 100 times the user's Stockpile count. Fails if the user's Stockpile count is 0. Whether or not this move is successful, the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
    shortDesc: "More power with more uses of Stockpile.",
    id: "spitup",
    fullname: "move: Spit Up",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  spite: {
    exists: true,
    num: 180,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Spite",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      effect: "heal"
    },
    desc: "Causes the target's last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
    shortDesc: "Lowers the PP of the target's last move by 4.",
    id: "spite",
    fullname: "move: Spite",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  splash: {
    exists: true,
    num: 150,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Splash",
    pp: 40,
    priority: 0,
    flags: {
      gravity: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 3
      }
    },
    shortDesc: "No competitive use.",
    id: "splash",
    fullname: "move: Splash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No competitive use.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  splinteredstormshards: {
    exists: true,
    num: 727,
    accuracy: true,
    basePower: 190,
    category: "Physical",
    isNonstandard: "Past",
    name: "Splintered Stormshards",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "lycaniumz",
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
    shortDesc: "Ends the effects of terrain.",
    id: "splinteredstormshards",
    fullname: "move: Splintered Stormshards",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  spore: {
    exists: true,
    num: 147,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Spore",
    pp: 15,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    shortDesc: "Causes the target to fall asleep.",
    id: "spore",
    fullname: "move: Spore",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to fall asleep.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spotlight: {
    exists: true,
    num: 671,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Spotlight",
    pp: 15,
    priority: 3,
    flags: {
      protect: 1,
      reflectable: 1,
      allyanim: 1,
      noassist: 1,
      failcopycat: 1
    },
    volatileStatus: "spotlight",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal.",
    shortDesc: "Target's foes' moves are redirected to it this turn.",
    id: "spotlight",
    fullname: "move: Spotlight",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stealthrock: {
    exists: true,
    num: 446,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Stealth Rock",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      mustpressure: 1
    },
    sideCondition: "stealthrock",
    condition: {},
    secondary: null,
    target: "foeSide",
    type: "Rock",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
    shortDesc: "Hurts foes on switch-in. Factors Rock weakness.",
    id: "stealthrock",
    fullname: "move: Stealth Rock",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  steameruption: {
    exists: true,
    num: 592,
    accuracy: 95,
    basePower: 110,
    category: "Special",
    name: "Steam Eruption",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      defrost: 1
    },
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Water",
    desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
    shortDesc: "30% chance to burn the target. Thaws target.",
    id: "steameruption",
    fullname: "move: Steam Eruption",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  steamroller: {
    exists: true,
    num: 537,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    isNonstandard: "Past",
    name: "Steamroller",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Bug",
    desc: "Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "30% chance to make the target flinch.",
    id: "steamroller",
    fullname: "move: Steamroller",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  steelbeam: {
    exists: true,
    num: 796,
    accuracy: 95,
    basePower: 140,
    category: "Special",
    name: "Steel Beam",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    mindBlownRecoil: true,
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.",
    shortDesc: "User loses 50% max HP.",
    id: "steelbeam",
    fullname: "move: Steel Beam",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 200
    }
  },
  steelroller: {
    exists: true,
    num: 798,
    accuracy: 100,
    basePower: 130,
    category: "Physical",
    name: "Steel Roller",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "Fails if there is no terrain active. Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
    shortDesc: "Fails if there is no terrain active. Ends the terrain.",
    id: "steelroller",
    fullname: "move: Steel Roller",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  steelwing: {
    exists: true,
    num: 211,
    accuracy: 90,
    basePower: 70,
    category: "Physical",
    name: "Steel Wing",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          def: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
    shortDesc: "10% chance to raise the user's Defense by 1.",
    id: "steelwing",
    fullname: "move: Steel Wing",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            def: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  stickyweb: {
    exists: true,
    num: 564,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sticky Web",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1
    },
    sideCondition: "stickyweb",
    condition: {},
    secondary: null,
    target: "foeSide",
    type: "Bug",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
    shortDesc: "Lowers Speed of grounded foes by 1 on switch-in.",
    id: "stickyweb",
    fullname: "move: Sticky Web",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stockpile: {
    exists: true,
    num: 254,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Stockpile",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "stockpile",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "Raises the user's Defense and Special Defense by 1 stage. The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
    shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
    id: "stockpile",
    fullname: "move: Stockpile",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stokedsparksurfer: {
    exists: true,
    num: 700,
    accuracy: true,
    basePower: 175,
    category: "Special",
    isNonstandard: "Past",
    name: "Stoked Sparksurfer",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "aloraichiumz",
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 100% chance to paralyze the target.",
    shortDesc: "100% chance to paralyze the target.",
    id: "stokedsparksurfer",
    fullname: "move: Stoked Sparksurfer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  stomp: {
    exists: true,
    num: 23,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Stomp",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
    shortDesc: "30% chance to make the target flinch.",
    id: "stomp",
    fullname: "move: Stomp",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  stompingtantrum: {
    exists: true,
    num: 707,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Stomping Tantrum",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    desc: "Power doubles if the user's last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King's Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move's power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows.",
    shortDesc: "Power doubles if the user's last move failed.",
    id: "stompingtantrum",
    fullname: "move: Stomping Tantrum",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  stoneedge: {
    exists: true,
    num: 444,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Stone Edge",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "Has a higher chance for a critical hit.",
    shortDesc: "High critical hit ratio.",
    id: "stoneedge",
    fullname: "move: Stone Edge",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  storedpower: {
    exists: true,
    num: 500,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Stored Power",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
    shortDesc: " + 20 power for each of the user's stat boosts.",
    id: "storedpower",
    fullname: "move: Stored Power",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stormthrow: {
    exists: true,
    num: 480,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    name: "Storm Throw",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
    shortDesc: "Always results in a critical hit.",
    id: "stormthrow",
    fullname: "move: Storm Throw",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  strangesteam: {
    exists: true,
    num: 790,
    accuracy: 95,
    basePower: 90,
    category: "Special",
    isNonstandard: "Past",
    name: "Strange Steam",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Fairy",
    desc: "Has a 20% chance to confuse the target.",
    shortDesc: "20% chance to confuse the target.",
    id: "strangesteam",
    fullname: "move: Strange Steam",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  strength: {
    exists: true,
    num: 70,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Strength",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "strength",
    fullname: "move: Strength",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  strengthsap: {
    exists: true,
    num: 668,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Strength Sap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      heal: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack by 1 stage. The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target's Attack stat stage is -6.",
    shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1.",
    id: "strengthsap",
    fullname: "move: Strength Sap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stringshot: {
    exists: true,
    num: 81,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "String Shot",
    pp: 40,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Bug",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Lowers the target's Speed by 2 stages.",
    shortDesc: "Lowers the foe(s) Speed by 2.",
    id: "stringshot",
    fullname: "move: String Shot",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  struggle: {
    exists: true,
    num: 165,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Struggle",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      failencore: 1,
      failmefirst: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    noSketch: true,
    struggleRecoil: true,
    secondary: null,
    target: "randomNormal",
    type: "Normal",
    desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
    shortDesc: "User loses 1/4 of its max HP.",
    id: "struggle",
    fullname: "move: Struggle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  strugglebug: {
    exists: true,
    num: 522,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Struggle Bug",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Bug",
    desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
    shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1.",
    id: "strugglebug",
    fullname: "move: Struggle Bug",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  stuffcheeks: {
    exists: true,
    num: 747,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Stuff Cheeks",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "This move cannot be selected unless the user is holding a Berry. The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.",
    shortDesc: "Must hold Berry to use. User eats Berry, Def +2.",
    id: "stuffcheeks",
    fullname: "move: Stuff Cheeks",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stunspore: {
    exists: true,
    num: 78,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Stun Spore",
    pp: 30,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "par",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Paralyzes the target.",
    shortDesc: "Paralyzes the target.",
    id: "stunspore",
    fullname: "move: Stun Spore",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  submission: {
    exists: true,
    num: 66,
    accuracy: 80,
    basePower: 80,
    category: "Physical",
    isNonstandard: "Past",
    name: "Submission",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/4 recoil.",
    id: "submission",
    fullname: "move: Submission",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  substitute: {
    exists: true,
    num: 164,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Substitute",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      nonsky: 1
    },
    volatileStatus: "substitute",
    condition: {
      onTryPrimaryHitPriority: -1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
    shortDesc: "User takes 1/4 its max HP to put in a substitute.",
    id: "substitute",
    fullname: "move: Substitute",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  subzeroslammer: {
    exists: true,
    num: 650,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Subzero Slammer",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "iciumz",
    secondary: null,
    target: "normal",
    type: "Ice",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "subzeroslammer",
    fullname: "move: Subzero Slammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  suckerpunch: {
    exists: true,
    num: 389,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Sucker Punch",
    pp: 5,
    priority: 1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
    shortDesc: "Usually goes first. Fails if target is not attacking.",
    id: "suckerpunch",
    fullname: "move: Sucker Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  sunnyday: {
    exists: true,
    num: 241,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sunny Day",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "sunnyday",
    secondary: null,
    target: "all",
    type: "Fire",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "For 5 turns, the weather becomes Sunny Day. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day.",
    shortDesc: "For 5 turns, intense sunlight powers Fire moves.",
    id: "sunnyday",
    fullname: "move: Sunny Day",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sunsteelstrike: {
    exists: true,
    num: 713,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Sunsteel Strike",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Steel",
    desc: "This move and its effects ignore the Abilities of other Pokemon.",
    shortDesc: "Ignores the Abilities of other Pokemon.",
    id: "sunsteelstrike",
    fullname: "move: Sunsteel Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  superfang: {
    exists: true,
    num: 162,
    accuracy: 90,
    basePower: 0,
    category: "Physical",
    name: "Super Fang",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
    shortDesc: "Does damage equal to 1/2 target's current HP.",
    id: "superfang",
    fullname: "move: Super Fang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  superpower: {
    exists: true,
    num: 276,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Superpower",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        atk: -1,
        def: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Lowers the user's Attack and Defense by 1 stage.",
    shortDesc: "Lowers the user's Attack and Defense by 1.",
    id: "superpower",
    fullname: "move: Superpower",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    },
    zMove: {
      basePower: 190
    }
  },
  supersonic: {
    exists: true,
    num: 48,
    accuracy: 55,
    basePower: 0,
    category: "Status",
    name: "Supersonic",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    shortDesc: "Causes the target to become confused.",
    id: "supersonic",
    fullname: "move: Supersonic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "Causes the target to become confused.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  supersonicskystrike: {
    exists: true,
    num: 626,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Supersonic Skystrike",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "flyiniumz",
    secondary: null,
    target: "normal",
    type: "Flying",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "supersonicskystrike",
    fullname: "move: Supersonic Skystrike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  surf: {
    exists: true,
    num: 57,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Surf",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Water",
    desc: "Damage doubles if the target is using Dive.",
    shortDesc: "Hits adjacent Pokemon. Double damage on Dive.",
    id: "surf",
    fullname: "move: Surf",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  surgingstrikes: {
    exists: true,
    num: 818,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Surging Strikes",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      punch: 1,
      mirror: 1
    },
    willCrit: true,
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
    shortDesc: "Always results in a critical hit. Hits 3 times.",
    id: "surgingstrikes",
    fullname: "move: Surging Strikes",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  swagger: {
    exists: true,
    num: 207,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Swagger",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    volatileStatus: "confusion",
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the target's Attack by 2 stages and confuses it.",
    shortDesc: "Raises the target's Attack by 2 and confuses it.",
    id: "swagger",
    fullname: "move: Swagger",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  swallow: {
    exists: true,
    num: 256,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swallow",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
    shortDesc: "Heals the user based on uses of Stockpile.",
    id: "swallow",
    fullname: "move: Swallow",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sweetkiss: {
    exists: true,
    num: 186,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Sweet Kiss",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      boost: {
        spa: 1
      }
    },
    shortDesc: "Causes the target to become confused.",
    id: "sweetkiss",
    fullname: "move: Sweet Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    desc: "Causes the target to become confused.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sweetscent: {
    exists: true,
    num: 230,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Sweet Scent",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      evasion: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "Lowers the target's evasiveness by 2 stages.",
    shortDesc: "Lowers the foe(s) evasiveness by 2.",
    id: "sweetscent",
    fullname: "move: Sweet Scent",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  swift: {
    exists: true,
    num: 129,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Swift",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    desc: "This move does not check accuracy.",
    shortDesc: "This move does not check accuracy. Hits foes.",
    id: "swift",
    fullname: "move: Swift",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  switcheroo: {
    exists: true,
    num: 415,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Switcheroo",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1,
      noassist: 1,
      failcopycat: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
    shortDesc: "User switches its held item with the target's.",
    id: "switcheroo",
    fullname: "move: Switcheroo",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  swordsdance: {
    exists: true,
    num: 14,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swords Dance",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1,
      dance: 1
    },
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Attack by 2 stages.",
    shortDesc: "Raises the user's Attack by 2.",
    id: "swordsdance",
    fullname: "move: Swords Dance",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  synchronoise: {
    exists: true,
    num: 485,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    isNonstandard: "Past",
    name: "Synchronoise",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacent",
    type: "Psychic",
    desc: "The target is immune if it does not share a type with the user.",
    shortDesc: "Hits adjacent Pokemon sharing the user's type.",
    id: "synchronoise",
    fullname: "move: Synchronoise",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  synthesis: {
    exists: true,
    num: 235,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Synthesis",
    pp: 5,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
    shortDesc: "Heals the user by a weather-dependent amount.",
    id: "synthesis",
    fullname: "move: Synthesis",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tackle: {
    exists: true,
    num: 33,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Tackle",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "tackle",
    fullname: "move: Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  tailglow: {
    exists: true,
    num: 294,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Tail Glow",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      spa: 3
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    desc: "Raises the user's Special Attack by 3 stages.",
    shortDesc: "Raises the user's Sp. Atk by 3.",
    id: "tailglow",
    fullname: "move: Tail Glow",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tailslap: {
    exists: true,
    num: 541,
    accuracy: 85,
    basePower: 25,
    category: "Physical",
    name: "Tail Slap",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
    shortDesc: "Hits 2-5 times in one turn.",
    id: "tailslap",
    fullname: "move: Tail Slap",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tailwhip: {
    exists: true,
    num: 39,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tail Whip",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      def: -1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Lowers the target's Defense by 1 stage.",
    shortDesc: "Lowers the foe(s) Defense by 1.",
    id: "tailwhip",
    fullname: "move: Tail Whip",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tailwind: {
    exists: true,
    num: 366,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tailwind",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1,
      wind: 1
    },
    sideCondition: "tailwind",
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 5
    },
    secondary: null,
    target: "allySide",
    type: "Flying",
    zMove: {
      effect: "crit2"
    },
    desc: "For 4 turns, the user and its party members have their Speed doubled. Fails if this move is already in effect for the user's side.",
    shortDesc: "For 4 turns, allies' Speed is doubled.",
    id: "tailwind",
    fullname: "move: Tailwind",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  takedown: {
    exists: true,
    num: 36,
    accuracy: 85,
    basePower: 90,
    category: "Physical",
    name: "Take Down",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/4 recoil.",
    id: "takedown",
    fullname: "move: Take Down",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  takeheart: {
    exists: true,
    num: 850,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Take Heart",
    pp: 15,
    priority: 0,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    desc: "The user cures its non-volatile status condition. Raises the user's Special Attack and Special Defense by 1 stage.",
    shortDesc: "Cures user's status, raises Sp. Atk, Sp. Def by 1.",
    id: "takeheart",
    fullname: "move: Take Heart",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tarshot: {
    exists: true,
    num: 749,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tar Shot",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "tarshot",
    condition: {
      onEffectivenessPriority: -2
    },
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    desc: "Lowers the target's Speed by 1 stage. Until the target switches out, the effectiveness of Fire-type moves is doubled against it.",
    shortDesc: "Target gets -1 Spe and becomes weaker to Fire.",
    id: "tarshot",
    fullname: "move: Tar Shot",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  taunt: {
    exists: true,
    num: 269,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Taunt",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "taunt",
    condition: {
      duration: 3,
      onResidualOrder: 15,
      onBeforeMovePriority: 5
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
    shortDesc: "Target can't use status moves its next 3 turns.",
    id: "taunt",
    fullname: "move: Taunt",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tearfullook: {
    exists: true,
    num: 715,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tearful Look",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      mirror: 1
    },
    boosts: {
      atk: -1,
      spa: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack and Special Attack by 1 stage.",
    shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
    id: "tearfullook",
    fullname: "move: Tearful Look",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  teatime: {
    exists: true,
    num: 752,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Teatime",
    pp: 10,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    secondary: null,
    target: "all",
    type: "Normal",
    desc: "All active Pokemon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokemon is holding a Berry.",
    shortDesc: "All active Pokemon consume held Berries.",
    id: "teatime",
    fullname: "move: Teatime",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  technoblast: {
    exists: true,
    num: 546,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    isNonstandard: "Past",
    name: "Techno Blast",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "This move's type depends on the user's held Drive.",
    shortDesc: "Type varies based on the held Drive.",
    id: "technoblast",
    fullname: "move: Techno Blast",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  tectonicrage: {
    exists: true,
    num: 630,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Tectonic Rage",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "groundiumz",
    secondary: null,
    target: "normal",
    type: "Ground",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "tectonicrage",
    fullname: "move: Tectonic Rage",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  teeterdance: {
    exists: true,
    num: 298,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Teeter Dance",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      dance: 1
    },
    volatileStatus: "confusion",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "Causes the target to become confused.",
    shortDesc: "Confuses adjacent Pokemon.",
    id: "teeterdance",
    fullname: "move: Teeter Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  telekinesis: {
    exists: true,
    num: 477,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Telekinesis",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      gravity: 1,
      allyanim: 1
    },
    volatileStatus: "telekinesis",
    condition: {
      duration: 3,
      onAccuracyPriority: -1,
      onResidualOrder: 19
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    desc: "For 3 turns, the target cannot avoid any attacks made against it, other than OHKO moves, as long as it remains active. During the effect, the target is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the target uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the target is under any of their effects. Fails if the target is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows. The target is immune to this move on use if its species is Diglett, Dugtrio, Alolan Diglett, Alolan Dugtrio, Sandygast, Palossand, or Gengar while Mega-Evolved. Mega Gengar cannot be under this effect by any means.",
    shortDesc: "For 3 turns, target floats but moves can't miss it.",
    id: "telekinesis",
    fullname: "move: Telekinesis",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  teleport: {
    exists: true,
    num: 100,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Teleport",
    pp: 20,
    priority: -6,
    flags: {},
    selfSwitch: true,
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "heal"
    },
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
    shortDesc: "User switches out.",
    id: "teleport",
    fullname: "move: Teleport",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  terablast: {
    exists: true,
    num: 851,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Tera Blast",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      mustpressure: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "If the user is Terastallized, this move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes, and this move's type becomes the same as the user's Tera Type.",
    shortDesc: "If Terastallized: Phys. if Atk > SpA, type = Tera.",
    id: "terablast",
    fullname: "move: Tera Blast",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  terrainpulse: {
    exists: true,
    num: 805,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Terrain Pulse",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      pulse: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power doubles if the user is grounded and a terrain is active, and this move's type changes to match. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain.",
    shortDesc: "User on terrain: power doubles, type varies.",
    id: "terrainpulse",
    fullname: "move: Terrain Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  thief: {
    exists: true,
    num: 168,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Thief",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failmefirst: 1,
      noassist: 1,
      failcopycat: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
    shortDesc: "If the user has no item, it steals the target's.",
    id: "thief",
    fullname: "move: Thief",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  thousandarrows: {
    exists: true,
    num: 614,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Thousand Arrows",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    volatileStatus: "smackdown",
    ignoreImmunity: {
      Ground: true
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    zMove: {
      basePower: 180
    },
    desc: "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is a Flying type and is not already grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
    shortDesc: "Grounds adjacent foes. First hit neutral on Flying.",
    id: "thousandarrows",
    fullname: "move: Thousand Arrows",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  thousandwaves: {
    exists: true,
    num: 615,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    isNonstandard: "Past",
    name: "Thousand Waves",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
    shortDesc: "Hits adjacent foes. Prevents them from switching.",
    id: "thousandwaves",
    fullname: "move: Thousand Waves",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  thrash: {
    exists: true,
    num: 37,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Thrash",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      failinstruct: 1
    },
    self: {
      volatileStatus: "lockedmove"
    },
    secondary: null,
    target: "randomNormal",
    type: "Normal",
    desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
    shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
    id: "thrash",
    fullname: "move: Thrash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  throatchop: {
    exists: true,
    num: 675,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Throat Chop",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    condition: {
      duration: 2,
      onBeforeMovePriority: 6,
      onResidualOrder: 22
    },
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Dark",
    desc: "For 2 turns, the target cannot use sound-based moves.",
    shortDesc: "For 2 turns, the target cannot use sound moves.",
    id: "throatchop",
    fullname: "move: Throat Chop",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  thunder: {
    exists: true,
    num: 87,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Thunder",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
    shortDesc: "30% chance to paralyze. Can't miss in rain.",
    id: "thunder",
    fullname: "move: Thunder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  thunderbolt: {
    exists: true,
    num: 85,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Thunderbolt",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 10% chance to paralyze the target.",
    shortDesc: "10% chance to paralyze the target.",
    id: "thunderbolt",
    fullname: "move: Thunderbolt",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  thundercage: {
    exists: true,
    num: 819,
    accuracy: 90,
    basePower: 80,
    category: "Special",
    name: "Thunder Cage",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "thundercage",
    fullname: "move: Thunder Cage",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  thunderfang: {
    exists: true,
    num: 422,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Thunder Fang",
    pp: 15,
    priority: 0,
    flags: {
      bite: 1,
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondaries: [
      {
        chance: 10,
        status: "par"
      },
      {
        chance: 10,
        volatileStatus: "flinch"
      }
    ],
    target: "normal",
    type: "Electric",
    desc: "Has a 10% chance to paralyze the target and a 10% chance to make it flinch.",
    shortDesc: "10% chance to paralyze. 10% chance to flinch.",
    id: "thunderfang",
    fullname: "move: Thunder Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  thunderouskick: {
    exists: true,
    num: 823,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Thunderous Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Fighting",
    desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
    shortDesc: "100% chance to lower the target's Defense by 1.",
    id: "thunderouskick",
    fullname: "move: Thunderous Kick",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  thunderpunch: {
    exists: true,
    num: 9,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Thunder Punch",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      punch: 1
    },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 10% chance to paralyze the target.",
    shortDesc: "10% chance to paralyze the target.",
    id: "thunderpunch",
    fullname: "move: Thunder Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  thundershock: {
    exists: true,
    num: 84,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Thunder Shock",
    pp: 30,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 10% chance to paralyze the target.",
    shortDesc: "10% chance to paralyze the target.",
    id: "thundershock",
    fullname: "move: Thunder Shock",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  thunderwave: {
    exists: true,
    num: 86,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Thunder Wave",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "par",
    ignoreImmunity: false,
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "Paralyzes the target. This move does not ignore type immunity.",
    shortDesc: "Paralyzes the target.",
    id: "thunderwave",
    fullname: "move: Thunder Wave",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tickle: {
    exists: true,
    num: 321,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tickle",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    boosts: {
      atk: -1,
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack and Defense by 1 stage.",
    shortDesc: "Lowers the target's Attack and Defense by 1.",
    id: "tickle",
    fullname: "move: Tickle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tidyup: {
    exists: true,
    num: 882,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tidy Up",
    pp: 10,
    priority: 0,
    flags: {},
    secondary: null,
    target: "self",
    type: "Normal",
    desc: "Raises the user's Attack and Speed by 1 stage. Removes subtitutes from all active Pokemon and ends the effects of Spikes, Stealth Rock, Sticky Web, and Toxic Spikes for both sides.",
    shortDesc: "User +1 Atk, Spe. Clears all substitutes/hazards.",
    id: "tidyup",
    fullname: "move: Tidy Up",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  topsyturvy: {
    exists: true,
    num: 576,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Topsy-Turvy",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "The target's positive stat stages become negative and vice versa. Fails if all of the target's stat stages are 0.",
    shortDesc: "Inverts the target's stat stages.",
    id: "topsyturvy",
    fullname: "move: Topsy-Turvy",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  torchsong: {
    exists: true,
    num: 871,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Torch Song",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Fire",
    desc: "Has a 100% chance to raise the user's Special Attack by 1 stage.",
    shortDesc: "100% chance to raise the user's Sp. Atk by 1.",
    id: "torchsong",
    fullname: "move: Torch Song",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  torment: {
    exists: true,
    num: 259,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Torment",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1
    },
    volatileStatus: "torment",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
    shortDesc: "Target can't select the same move twice in a row.",
    id: "torment",
    fullname: "move: Torment",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  toxic: {
    exists: true,
    num: 92,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Toxic",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "tox",
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
    shortDesc: "Badly poisons the target. Poison types can't miss.",
    id: "toxic",
    fullname: "move: Toxic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  toxicspikes: {
    exists: true,
    num: 390,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Toxic Spikes",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1,
      nonsky: 1,
      mustpressure: 1
    },
    sideCondition: "toxicspikes",
    condition: {},
    secondary: null,
    target: "foeSide",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
    shortDesc: "Poisons grounded foes on switch-in. Max 2 layers.",
    id: "toxicspikes",
    fullname: "move: Toxic Spikes",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  toxicthread: {
    exists: true,
    num: 672,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Toxic Thread",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "psn",
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Lowers the target's Speed by 1 stage and poisons it.",
    shortDesc: "Lowers the target's Speed by 1 and poisons it.",
    id: "toxicthread",
    fullname: "move: Toxic Thread",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  trailblaze: {
    exists: true,
    num: 885,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Trailblaze",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
    shortDesc: "100% chance to raise the user's Speed by 1.",
    id: "trailblaze",
    fullname: "move: Trailblaze",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  transform: {
    exists: true,
    num: 144,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Transform",
    pp: 10,
    priority: 0,
    flags: {
      allyanim: 1,
      failencore: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
    shortDesc: "Copies target's stats, moves, types, and Ability.",
    id: "transform",
    fullname: "move: Transform",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  triattack: {
    exists: true,
    num: 161,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Tri Attack",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20
    },
    target: "normal",
    type: "Normal",
    desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
    shortDesc: "20% chance to paralyze or burn or freeze target.",
    id: "triattack",
    fullname: "move: Tri Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  trick: {
    exists: true,
    num: 271,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Trick",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      allyanim: 1,
      noassist: 1,
      failcopycat: 1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 2
      }
    },
    desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
    shortDesc: "User switches its held item with the target's.",
    id: "trick",
    fullname: "move: Trick",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  trickortreat: {
    exists: true,
    num: 567,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Trick-or-Treat",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    desc: "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest's Curse adds a type to the target, it replaces the type added by this move and vice versa.",
    shortDesc: "Adds Ghost to the target's type(s).",
    id: "trickortreat",
    fullname: "move: Trick-or-Treat",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  trickroom: {
    exists: true,
    num: 433,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Trick Room",
    pp: 5,
    priority: -7,
    flags: {
      mirror: 1
    },
    pseudoWeather: "trickroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 1
    },
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    desc: "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
    shortDesc: "Goes last. For 5 turns, turn order is reversed.",
    id: "trickroom",
    fullname: "move: Trick Room",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tripleaxel: {
    exists: true,
    num: 813,
    accuracy: 90,
    basePower: 20,
    category: "Physical",
    name: "Triple Axel",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 3,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: {
      basePower: 120
    },
    maxMove: {
      basePower: 140
    },
    desc: "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
    id: "tripleaxel",
    fullname: "move: Triple Axel",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tripledive: {
    exists: true,
    num: 865,
    accuracy: 95,
    basePower: 30,
    category: "Physical",
    name: "Triple Dive",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 3,
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Hits three times.",
    shortDesc: "Hits 3 times.",
    id: "tripledive",
    fullname: "move: Triple Dive",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  triplekick: {
    exists: true,
    num: 167,
    accuracy: 90,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Triple Kick",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    multihit: 3,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: {
      basePower: 120
    },
    maxMove: {
      basePower: 80
    },
    desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
    shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
    id: "triplekick",
    fullname: "move: Triple Kick",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tropkick: {
    exists: true,
    num: 688,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Trop Kick",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Grass",
    desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
    shortDesc: "100% chance to lower the target's Attack by 1.",
    id: "tropkick",
    fullname: "move: Trop Kick",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  trumpcard: {
    exists: true,
    num: 376,
    accuracy: true,
    basePower: 0,
    category: "Special",
    isNonstandard: "Past",
    name: "Trump Card",
    pp: 5,
    noPPBoosts: true,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP.",
    shortDesc: "More power the fewer PP this move has left.",
    id: "trumpcard",
    fullname: "move: Trump Card",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  twinbeam: {
    exists: true,
    num: 888,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Twin Beam",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Psychic",
    desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times in one turn.",
    id: "twinbeam",
    fullname: "move: Twin Beam",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  twineedle: {
    exists: true,
    num: 41,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    isNonstandard: "Past",
    name: "Twineedle",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: 2,
    secondary: {
      chance: 20,
      status: "psn"
    },
    target: "normal",
    type: "Bug",
    maxMove: {
      basePower: 100
    },
    desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
    shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
    id: "twineedle",
    fullname: "move: Twineedle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    zMove: {
      basePower: 100
    }
  },
  twinkletackle: {
    exists: true,
    num: 656,
    accuracy: true,
    basePower: 1,
    category: "Physical",
    isNonstandard: "Past",
    name: "Twinkle Tackle",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "fairiumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    shortDesc: "Power is equal to the base move's Z-Power.",
    id: "twinkletackle",
    fullname: "move: Twinkle Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    desc: "Power is equal to the base move's Z-Power.",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  twister: {
    exists: true,
    num: 239,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Twister",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      wind: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Dragon",
    desc: "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
    shortDesc: "20% chance to make the foe(s) flinch.",
    id: "twister",
    fullname: "move: Twister",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  uturn: {
    exists: true,
    num: 369,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "U-turn",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
    shortDesc: "User switches out after damaging the target.",
    id: "uturn",
    fullname: "move: U-turn",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  uproar: {
    exists: true,
    num: 253,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Uproar",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      bypasssub: 1,
      nosleeptalk: 1,
      failinstruct: 1
    },
    self: {
      volatileStatus: "uproar"
    },
    condition: {
      duration: 3,
      onResidualOrder: 28,
      onResidualSubOrder: 1,
      onLockMove: "uproar"
    },
    secondary: null,
    target: "randomNormal",
    type: "Normal",
    desc: "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
    shortDesc: "Lasts 3 turns. Active Pokemon cannot fall asleep.",
    id: "uproar",
    fullname: "move: Uproar",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  vacuumwave: {
    exists: true,
    num: 410,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Vacuum Wave",
    pp: 30,
    priority: 1,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "No additional effect.",
    shortDesc: "Usually goes first.",
    id: "vacuumwave",
    fullname: "move: Vacuum Wave",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  vcreate: {
    exists: true,
    num: 557,
    accuracy: 95,
    basePower: 180,
    category: "Physical",
    name: "V-create",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    self: {
      boosts: {
        spe: -1,
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: {
      basePower: 220
    },
    desc: "Lowers the user's Speed, Defense, and Special Defense by 1 stage.",
    shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1.",
    id: "vcreate",
    fullname: "move: V-create",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  venomdrench: {
    exists: true,
    num: 599,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Venom Drench",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned.",
    shortDesc: "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1.",
    id: "venomdrench",
    fullname: "move: Venom Drench",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  venoshock: {
    exists: true,
    num: 474,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Venoshock",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    desc: "Power doubles if the target is poisoned.",
    shortDesc: "Power doubles if the target is poisoned.",
    id: "venoshock",
    fullname: "move: Venoshock",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 120
    }
  },
  vinewhip: {
    exists: true,
    num: 22,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Vine Whip",
    pp: 25,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    shortDesc: "No additional effect.",
    id: "vinewhip",
    fullname: "move: Vine Whip",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  visegrip: {
    exists: true,
    num: 11,
    accuracy: 100,
    basePower: 55,
    category: "Physical",
    name: "Vise Grip",
    pp: 30,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    shortDesc: "No additional effect.",
    id: "visegrip",
    fullname: "move: Vise Grip",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 100
    }
  },
  vitalthrow: {
    exists: true,
    num: 233,
    accuracy: true,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Vital Throw",
    pp: 10,
    priority: -1,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "This move does not check accuracy.",
    shortDesc: "This move does not check accuracy. Goes last.",
    id: "vitalthrow",
    fullname: "move: Vital Throw",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 140
    }
  },
  voltswitch: {
    exists: true,
    num: 521,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Volt Switch",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
    shortDesc: "User switches out after damaging the target.",
    id: "voltswitch",
    fullname: "move: Volt Switch",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  volttackle: {
    exists: true,
    num: 344,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Volt Tackle",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil. 10% chance to paralyze target.",
    id: "volttackle",
    fullname: "move: Volt Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  wakeupslap: {
    exists: true,
    num: 358,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Wake-Up Slap",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    desc: "Power doubles if the target is asleep. If the user has not fainted, the target wakes up.",
    shortDesc: "Power doubles if target is asleep, and wakes it.",
    id: "wakeupslap",
    fullname: "move: Wake-Up Slap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 140
    }
  },
  waterfall: {
    exists: true,
    num: 127,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Waterfall",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Water",
    desc: "Has a 20% chance to make the target flinch.",
    shortDesc: "20% chance to make the target flinch.",
    id: "waterfall",
    fullname: "move: Waterfall",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  watergun: {
    exists: true,
    num: 55,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Water Gun",
    pp: 25,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    shortDesc: "No additional effect.",
    id: "watergun",
    fullname: "move: Water Gun",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  waterpledge: {
    exists: true,
    num: 518,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Water Pledge",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      nonsky: 1,
      pledgecombo: 1
    },
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 7
    },
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
    shortDesc: "Use with Grass or Fire Pledge for added effect.",
    id: "waterpledge",
    fullname: "move: Water Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  waterpulse: {
    exists: true,
    num: 352,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Water Pulse",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      pulse: 1,
      mirror: 1,
      distance: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Water",
    desc: "Has a 20% chance to confuse the target.",
    shortDesc: "20% chance to confuse the target.",
    id: "waterpulse",
    fullname: "move: Water Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "confusion"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  watershuriken: {
    exists: true,
    num: 594,
    accuracy: 100,
    basePower: 15,
    category: "Special",
    name: "Water Shuriken",
    pp: 20,
    priority: 1,
    flags: {
      protect: 1,
      mirror: 1
    },
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times.",
    shortDesc: "Usually goes first. Hits 2-5 times in one turn.",
    id: "watershuriken",
    fullname: "move: Water Shuriken",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  watersport: {
    exists: true,
    num: 346,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Water Sport",
    pp: 15,
    priority: 0,
    flags: {
      nonsky: 1
    },
    pseudoWeather: "watersport",
    condition: {
      duration: 5,
      onBasePowerPriority: 1,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 3
    },
    secondary: null,
    target: "all",
    type: "Water",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
    shortDesc: "For 5 turns, Fire-type attacks have 1/3 power.",
    id: "watersport",
    fullname: "move: Water Sport",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  waterspout: {
    exists: true,
    num: 323,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Water Spout",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Water",
    desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
    shortDesc: "Less power as user's HP decreases. Hits foe(s).",
    id: "waterspout",
    fullname: "move: Water Spout",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    },
    zMove: {
      basePower: 200
    }
  },
  wavecrash: {
    exists: true,
    num: 834,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Wave Crash",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil.",
    id: "wavecrash",
    fullname: "move: Wave Crash",
    effectType: "Move",
    kind: "Move",
    gen: 9,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  weatherball: {
    exists: true,
    num: 311,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Weather Ball",
    pp: 10,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Snow, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, this move remains Normal type and does not double in power.",
    shortDesc: "Power doubles and type varies in each weather.",
    id: "weatherball",
    fullname: "move: Weather Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  whirlpool: {
    exists: true,
    num: 250,
    accuracy: 85,
    basePower: 35,
    category: "Special",
    name: "Whirlpool",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "whirlpool",
    fullname: "move: Whirlpool",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  whirlwind: {
    exists: true,
    num: 18,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Whirlwind",
    pp: 20,
    priority: -6,
    flags: {
      reflectable: 1,
      mirror: 1,
      bypasssub: 1,
      allyanim: 1,
      wind: 1,
      noassist: 1,
      failcopycat: 1
    },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
    shortDesc: "Forces the target to switch to a random ally.",
    id: "whirlwind",
    fullname: "move: Whirlwind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wickedblow: {
    exists: true,
    num: 817,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Wicked Blow",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      punch: 1,
      mirror: 1
    },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
    shortDesc: "Always results in a critical hit.",
    id: "wickedblow",
    fullname: "move: Wicked Blow",
    effectType: "Move",
    kind: "Move",
    gen: 8,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 140
    }
  },
  wideguard: {
    exists: true,
    num: 469,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wide Guard",
    pp: 10,
    priority: 3,
    flags: {
      snatch: 1
    },
    sideCondition: "wideguard",
    condition: {
      duration: 1,
      onTryHitPriority: 4
    },
    secondary: null,
    target: "allySide",
    type: "Rock",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
    shortDesc: "Protects allies from multi-target moves this turn.",
    id: "wideguard",
    fullname: "move: Wide Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wildcharge: {
    exists: true,
    num: 528,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Wild Charge",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      1,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Electric",
    desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 1/4 recoil.",
    id: "wildcharge",
    fullname: "move: Wild Charge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  willowisp: {
    exists: true,
    num: 261,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Will-O-Wisp",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    status: "brn",
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Burns the target.",
    shortDesc: "Burns the target.",
    id: "willowisp",
    fullname: "move: Will-O-Wisp",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wingattack: {
    exists: true,
    num: 17,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Wing Attack",
    pp: 35,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "No additional effect.",
    id: "wingattack",
    fullname: "move: Wing Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  wish: {
    exists: true,
    num: 273,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wish",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1,
      heal: 1
    },
    slotCondition: "Wish",
    condition: {
      duration: 2,
      onResidualOrder: 4
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
    shortDesc: "Next turn, 50% of the user's max HP is restored.",
    id: "wish",
    fullname: "move: Wish",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  withdraw: {
    exists: true,
    num: 110,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Withdraw",
    pp: 40,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Water",
    zMove: {
      boost: {
        def: 1
      }
    },
    desc: "Raises the user's Defense by 1 stage.",
    shortDesc: "Raises the user's Defense by 1.",
    id: "withdraw",
    fullname: "move: Withdraw",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wonderroom: {
    exists: true,
    num: 472,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wonder Room",
    pp: 10,
    priority: 0,
    flags: {
      mirror: 1
    },
    pseudoWeather: "wonderroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 5
    },
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    desc: "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends.",
    shortDesc: "For 5 turns, all Defense and Sp. Def stats switch.",
    id: "wonderroom",
    fullname: "move: Wonder Room",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  woodhammer: {
    exists: true,
    num: 452,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Wood Hammer",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    recoil: [
      33,
      100
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
    shortDesc: "Has 33% recoil.",
    id: "woodhammer",
    fullname: "move: Wood Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  workup: {
    exists: true,
    num: 526,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Work Up",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    boosts: {
      atk: 1,
      spa: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    desc: "Raises the user's Attack and Special Attack by 1 stage.",
    shortDesc: "Raises the user's Attack and Sp. Atk by 1.",
    id: "workup",
    fullname: "move: Work Up",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  worryseed: {
    exists: true,
    num: 388,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Worry Seed",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      allyanim: 1
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Gulp Missile, Hadron Engine, Ice Face, Insomnia, Multitype, Orichalcum Pulse, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Truant, Zen Mode, or Zero to Hero.",
    shortDesc: "The target's Ability becomes Insomnia.",
    id: "worryseed",
    fullname: "move: Worry Seed",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wrap: {
    exists: true,
    num: 35,
    accuracy: 90,
    basePower: 15,
    category: "Physical",
    name: "Wrap",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Normal",
    desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
    shortDesc: "Traps and damages the target for 4-5 turns.",
    id: "wrap",
    fullname: "move: Wrap",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  wringout: {
    exists: true,
    num: 378,
    accuracy: 100,
    basePower: 0,
    category: "Special",
    isNonstandard: "Past",
    name: "Wring Out",
    pp: 5,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 190
    },
    maxMove: {
      basePower: 140
    },
    desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
    shortDesc: "More power the more HP the target has left.",
    id: "wringout",
    fullname: "move: Wring Out",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  xscissor: {
    exists: true,
    num: 404,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "X-Scissor",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      slicing: 1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    shortDesc: "No additional effect.",
    id: "xscissor",
    fullname: "move: X-Scissor",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    desc: "No additional effect.",
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  yawn: {
    exists: true,
    num: 281,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Yawn",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1
    },
    volatileStatus: "yawn",
    condition: {
      noCopy: true,
      duration: 2,
      onResidualOrder: 23
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    desc: "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
    shortDesc: "Puts the target to sleep after 1 turn.",
    id: "yawn",
    fullname: "move: Yawn",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  zapcannon: {
    exists: true,
    num: 192,
    accuracy: 50,
    basePower: 120,
    category: "Special",
    name: "Zap Cannon",
    pp: 5,
    priority: 0,
    flags: {
      bullet: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 100% chance to paralyze the target.",
    shortDesc: "100% chance to paralyze the target.",
    id: "zapcannon",
    fullname: "move: Zap Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  zenheadbutt: {
    exists: true,
    num: 428,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Zen Headbutt",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    desc: "Has a 20% chance to make the target flinch.",
    shortDesc: "20% chance to make the target flinch.",
    id: "zenheadbutt",
    fullname: "move: Zen Headbutt",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  zingzap: {
    exists: true,
    num: 716,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Zing Zap",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Electric",
    desc: "Has a 30% chance to make the target flinch.",
    shortDesc: "30% chance to make the target flinch.",
    id: "zingzap",
    fullname: "move: Zing Zap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  }
};