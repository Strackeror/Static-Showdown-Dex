import { ModData } from "@pkmn/dex";

export function patch(data: ModData)
{
  data.FormatsData = {...data.FormatsData}
  for (let specieName in data.Species) {
    data.FormatsData[specieName] = {
      inherit: true,
      tier: " ",
    }
  }

  // Hustle Typo
  data.Abilities["hustle"].desc =
    "Greatly boosts the Attack stat by 50% for a 20%\naccuracy drop on most Physical moves.";

  // Fix PPBoosts for low pp moves
  for (let move_key in data.Moves) {
    let move = data.Moves[move_key];
    if (move.pp <= 3) {
      move.noPPBoosts = true;
    }
  }

  // Couple of cases where the base forme should instead show another forme
  let replaceBaseFormes = [
    ["zygarde", "zygarde50"],
    ["gourgeist", "gourgeistsmall"],
  ];
  for (let [baseFormeName, formeName] of replaceBaseFormes) {
    let species = data.Species[formeName];
    let baseSpecies = data.Species[baseFormeName];
    baseSpecies.abilities = species.abilities;
    baseSpecies.baseStats = species.baseStats;
    baseSpecies.prevo = species.prevo;
    baseSpecies.evoLevel = species.evoLevel;
    baseSpecies.evoType = species.evoType;
    baseSpecies.evoItem = species.evoItem;
    data.Learnsets[baseFormeName] = data.Learnsets[formeName];
  }

  data.Species["zygarde"].otherFormes = ["zygarde10", "zygardecomplete"];
  data.Species["zygarde"].formeOrder = ["zygarde", "zygarde10", "zygardecomplete"];
  data.Species["gourgeist"].otherFormes = ["gourgeistsuper"];
  data.Species["gourgeist"].formeOrder = ["gourgeist", "gourgeistsuper"];

  // Combat-Only formes
  let formes = [
    "venusaurmega",
    "charizardmegax",
    "charizardmegay",
    "blastoisemega",
    "beedrillmega",
    "pidgeotmega",
    "alakazammega",
    "slowbromega",
    "gengarmega",
    "kangaskhanmega",
    "pinsirmega",
    "gyaradosmega",
    "aerodactylmega",
    "ampharosmega",
    "steelixmega",
    "scizormega",
    "heracrossmega",
    "houndoommega",
    "tyranitarmega",
    "sceptilemega",
    "blazikenmega",
    "swampertmega",
    "gardevoirmega",
    "sableyemega",
    "mawilemega",
    "aggronmega",
    "medichammega",
    "manectricmega",
    "sharpedomega",
    "cameruptmega",
    "altariamega",
    "banettemega",
    "absolmega",
    "glaliemega",
    "salamencemega",
    "metagrossmega",
    "latiasmega",
    "latiosmega",
    "lopunnymega",
    "garchompmega",
    "lucariomega",
    "abomasnowmega",
    "gallademega",
    "audinomega",
    "dianciemega",
    "mimikyubusted",
    "mimikyubustedtotem",
    "wishiwashischool",
    "shayminsky",
    "darmanitanzen",
    "greninjaash",
    "kyuremwhite",
    "kyuremblack",
    "aegislashblade",
    "meloettapirouette",
    "cherrimsunshine",
  ];

  for (let forme of formes) {
    data.Learnsets[forme] = {}
  }

  let unusables = [
    "mewtwo",
    "mewtwomegax",
    "mewtwomegay",

    "kyogre",
    "kyogreprimal",
    "groudon",
    "groudonprimal",
    "rayquaza",
    "rayquazamega",

    "dialga",
    "palkia",
    "arceus",

    "zekrom",
    "reshiram",

    "xerneas",
    "yveltal",
    "zygardecomplete",
  ];
  // Unusable pokes
  for (let unusable of unusables) {
    data.Learnsets[unusable].learnset = {};
    data.FormatsData[unusable] = {
      inherit: true,
      tier: "Unav",
    }
  }

  // Redundant formes to delete
  let deleteFormes = [
    "pumpkaboosmall",
    "pumpkaboolarge",
    "pumpkaboosuper",
    "gourgeistlarge",
    "gourgeistsmall",
    "zygarde50",
  ];
  for (let formeName of deleteFormes) {
    data.Species[formeName] = {
      inherit: true,
    }

    data.FormatsData[formeName] = {
      inherit: true,
      isNonstandard: "Unobtainable",
    }
  }

  // Minior manual patches
  data.Species["minior"].baseForme = "Meteor";
  data.Species["minior"].cosmeticFormes = []
  data.Learnsets["minior"].learnset = {};

  data.Aliases = {
    "miniorred": "miniorred",
    "miniororange": "miniororange",
  }

  // Pumpkaboo manual patch
  delete data.Species["pumpkaboo"].formeOrder;
  delete data.Species["pumpkaboo"].otherFormes;
  data.Species["pumpkaboo"].evos[1] = "Gourgeist";

  // Aegislash-Blade manual patch
  data.Species["aegislashblade"].abilities = ["Stance Change"]

  // Porygon-Z evo loop
  data.Species["porygonz"].evos = []
};
