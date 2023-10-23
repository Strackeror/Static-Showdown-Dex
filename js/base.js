const ResourcePrefix = Config.baseurl+"images/"

function getItemIcon(item) {
    var _item;
    var num = 0;
    if (typeof item === "string" && exports.BattleItems)
      item = exports.BattleItems[toID(item)];
    if ((_item = item) != null && _item.spritenum) num = item.spritenum;

    var top = Math.floor(num / 16) * 24;
    var left = (num % 16) * 24;
    return ( "background:transparent url("+ResourcePrefix+"sprites/itemicons-sheet.png?g9) no-repeat scroll -"+left+"px -"+top+"px" );
}

function getTypeIcon(type, b) {
  type = toID(type);
  if (!type) type = "???";
  var sanitizedType = type.replace(/\?/g, "%3f");
  return ( '<img src="'+ResourcePrefix+"sprites/types/"+sanitizedType+'.png" alt="'+type+'" height="14" width="32" class="pixelated'+(b ? " b" : "")+'" />' );
};

function getPokemonIcon(pokemon) {
  var _pokemon,
    _pokemon2,
    _pokemon3,
    _pokemon3$volatiles,
    _pokemon4,
    _pokemon5;
  if (pokemon === "pokeball") {
    return ( "background:transparent url("+ResourcePrefix+"sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -0px 4px" );
  } else if (pokemon === "pokeball-statused") {
    return ( "background:transparent url("+ResourcePrefix+"sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -40px 4px" );
  } else if (pokemon === "pokeball-fainted") {
    return ( "background:transparent url("+ResourcePrefix+"sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px;opacity:.4;filter:contrast(0)" );
  } else if (pokemon === "pokeball-none") {
    return ( "background:transparent url("+ResourcePrefix+"sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px" );
  }

  var id = toID(pokemon);
  if (!pokemon || typeof pokemon === "string") pokemon = null;

  if ((_pokemon = pokemon) != null && _pokemon.speciesForme)
    id = toID(pokemon.speciesForme);

  if ((_pokemon2 = pokemon) != null && _pokemon2.species)
    id = toID(pokemon.species);

  if (
    (_pokemon3 = pokemon) != null &&
    (_pokemon3$volatiles = _pokemon3.volatiles) != null &&
    _pokemon3$volatiles.formechange &&
    !pokemon.volatiles.transform
  ) {
    id = toID(pokemon.volatiles.formechange[1]);
  }
  var num = +id;

  var top = Math.floor(num / 12) * 30;
  var left = (num % 12) * 40;
  var fainted =
    (_pokemon5 = pokemon) != null && _pokemon5.fainted
      ? ";opacity:.3;filter:grayscale(100%) brightness(.5)"
      : "";
  return ( "background:transparent url("+ResourcePrefix+"sprites/pokemonicons-sheet.png?v12) no-repeat scroll -"+left+"px -"+top+"px"+fainted );
}

function getCategoryIcon(category) {
  var categoryID = toID(category);
  var sanitizedCategory = "";
  switch (categoryID) {
    case "physical":
    case "special":
    case "status":
      sanitizedCategory =
        categoryID.charAt(0).toUpperCase()+categoryID.slice(1);
      break;
    default:
      sanitizedCategory = "undefined";
      break;
  }

  return ( '<img src="'+ResourcePrefix+"sprites/categories/"+sanitizedCategory+'.png" alt="'+sanitizedCategory+'" height="14" width="32" class="pixelated" />' );
};

function escapeHTML(str, jsEscapeToo) {
	str = String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	if (jsEscapeToo) str = str.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');
	return str;
};

function toID(text) {
  if (typeof text !== "string" && typeof text !== "number") return "";
  return (""+text).toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function getID(obj, text) {
  return obj[toID(text)]
}

if (typeof window === "undefined") {
  global.window = global;
} else {
  window.exports = window;
}