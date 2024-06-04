import BattlePokedex from "../data/pokedex.json";
import BattleMovedex from "../data/moves.json";
import BattleItems from "../data/items.json";
import BattleAbilities from "../data/abilities.json";
import BattleTypeChart from "../data/typechart.json";
import Areas from "../data/areas.json";
import Learnsets from "../data/learnsets.json";
import Icons from "../data/icons.json";
import Config from "../data/config.json";

window.Config = Config;
window.ResourcePrefix = window.Config.baseurl + "images/";

window.BattlePokedex = BattlePokedex;
window.BattleMovedex = BattleMovedex;
window.BattleItems = BattleItems;
window.BattleAbilities = BattleAbilities;
window.BattleTypeChart = BattleTypeChart;
window.Areas = Areas;
window.Learnsets = Learnsets;

window.toID = (text) => {
  if (text?.id) {
    text = text.id;
  } else if (text?.userid) {
    text = text.userid;
  }
  if (typeof text !== "string" && typeof text !== "number") return "";
  return ("" + text).toLowerCase().replace(/[^a-z0-9]+/g, "");
};

window.getID = (obj, text) => {
  return obj[toID(text)];
};

for (let data of [BattlePokedex, BattleMovedex, BattleItems, BattleAbilities, BattleTypeChart]) {
  for (let key in data) {
    data[key].id = key;
  }
}

for (let key in BattlePokedex) {
  for (let evo of BattlePokedex[key].evos ?? []) {
    target = getID(BattlePokedex, evo.target);
    target.prevo = toID(key);
  }
}

window.BattleStatNames = {
  hp: "HP",
  atk: "Atk",
  def: "Def",
  spa: "SpA",
  spd: "SpD",
  spe: "Spe",
};

window.getItemIcon = (item) => {
  let [left, top] = Icons.items[toID(item)] ?? [0, 0];
  return `background:transparent url(${ResourcePrefix}sprites/itemicons-sheet.png) no-repeat scroll ${left}px ${top}px`;
};

window.getTypeIcon = (type) => {
  type = getID(BattleTypeChart, type).name;
  if (!type) type = "None";
  var sanitizedType = type.replace(/\?/g, "%3f");
  return `<img src="${ResourcePrefix}sprites/types/${sanitizedType}.png" alt="${type}" height="14" width="32" class="pixelated" />`;
};

window.getPokemonIcon = (pokemon) => {
  let [left, top] = Icons.pokemon[toID(pokemon)] ?? [0, 0];
  return `background:transparent url(${ResourcePrefix}sprites/pokemonicons-sheet.png?v14) no-repeat scroll ${left}px ${top}px`;
};

window.getCategoryIcon = (category) => {
  var categoryID = toID(category);
  var sanitizedCategory = "";
  switch (categoryID) {
    case "physical":
    case "special":
    case "status":
      sanitizedCategory = categoryID.charAt(0).toUpperCase() + categoryID.slice(1);
      break;
    default:
      sanitizedCategory = "undefined";
      break;
  }

  return (
    '<img src="' +
    ResourcePrefix +
    "sprites/categories/" +
    sanitizedCategory +
    '.png" alt="' +
    sanitizedCategory +
    '" height="14" width="32" class="pixelated" />'
  );
};

window.escapeHTML = (str, jsEscapeToo) => {
  str = String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  if (jsEscapeToo) str = str.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  return str;
};

window.getLearnset = (pokemonId) => {
  let learnset = Learnsets[pokemonId];
  if (!learnset || learnset.length == 0) {
    learnset = Learnsets[toID(BattlePokedex[pokemonId]?.baseSpecies)];
  }
  return learnset ?? [];
};

window.canLearn = (pokemonId, moveId) => {
  return getLearnset(pokemonId).some((n) => n.move == moveId);
};
