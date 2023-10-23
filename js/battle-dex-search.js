"use strict";
/**
 * Search
 *
 * Code for searching for dex information, used by the Dex and
 * Teambuilder.
 *
 * Dependencies: battledata, search-index
 * Optional dependencies: pokedex, moves, items, abilities
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DexSearch = void 0;
function hasAbility(pokemon, ability) {
    for (var key in pokemon.abilities) {
        if (pokemon.abilities[key] == toID(ability)) {
            return true;
        }
        return false;
    }
}
/**

/**
 * Backend for search UIs.
 */
var DexSearch = exports.DexSearch = /** @class */ (function () {
    function DexSearch(searchType, formatid, species) {
        if (searchType === void 0) { searchType = ''; }
        if (formatid === void 0) { formatid = ''; }
        if (species === void 0) { species = ''; }
        this.query = '';
        this.typedSearch = null;
        this.results = null;
        this.exactMatch = false;
        this.firstPokemonColumn = 'Number';
        /**
         * Column to sort by. Default is `null`, a smart sort determined by how good
         * things are according to the base filters, falling back to dex number (for
         * Pokemon) and name (for everything else).
         */
        this.sortCol = null;
        this.reverseSort = false;
        /**
         * Filters for the search result. Does not include the two base filters
         * (format and species).
         */
        this.filters = null;
        this.setType(searchType, formatid, species);
    }
    DexSearch.prototype.getTypedSearch = function (searchType, format, speciesOrSet) {
        if (format === void 0) { format = ''; }
        if (!searchType)
            return null;
        switch (searchType) {
            case 'pokemon': return new BattlePokemonSearch('pokemon', format, speciesOrSet);
            case 'item': return new BattleItemSearch('item', format, speciesOrSet);
            case 'move': return new BattleMoveSearch('move', format, speciesOrSet);
            case 'ability': return new BattleAbilitySearch('ability', format, speciesOrSet);
            case 'type': return new BattleTypeSearch('type', format, speciesOrSet);
            case 'category': return new BattleCategorySearch('category', format, speciesOrSet);
        }
        return null;
    };
    DexSearch.prototype.find = function (query) {
        var _a;
        query = toID(query);
        if (this.query === query && this.results) {
            return false;
        }
        this.query = query;
        if (!query) {
            this.results = ((_a = this.typedSearch) === null || _a === void 0 ? void 0 : _a.getResults(this.filters, this.sortCol, this.reverseSort)) || [];
        }
        else {
            this.results = this.textSearch(query);
        }
        return true;
    };
    DexSearch.prototype.setType = function (searchType, format, speciesOrSet) {
        var _a;
        if (format === void 0) { format = ''; }
        // invalidate caches
        this.results = null;
        if (searchType !== ((_a = this.typedSearch) === null || _a === void 0 ? void 0 : _a.searchType)) {
            this.filters = null;
            this.sortCol = null;
        }
        this.typedSearch = this.getTypedSearch(searchType, format, speciesOrSet);
    };
    DexSearch.prototype.addFilter = function (entry) {
        if (!this.typedSearch)
            return false;
        var type = entry[0];
        if (this.typedSearch.searchType === 'pokemon') {
            if (type === this.sortCol)
                this.sortCol = null;
            if (!['type', 'move', 'ability', 'egggroup', 'tier'].includes(type))
                return false;
            if (type === 'move')
                entry[1] = toID(entry[1]);
            if (!this.filters)
                this.filters = [];
            this.results = null;
            for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
                var filter = _a[_i];
                if (filter[0] === type && filter[1] === entry[1]) {
                    return true;
                }
            }
            this.filters.push(entry);
            return true;
        }
        else if (this.typedSearch.searchType === 'move') {
            if (type === this.sortCol)
                this.sortCol = null;
            if (!['type', 'category', 'pokemon'].includes(type))
                return false;
            if (type === 'pokemon')
                entry[1] = toID(entry[1]);
            if (!this.filters)
                this.filters = [];
            this.filters.push(entry);
            this.results = null;
            return true;
        }
        return false;
    };
    DexSearch.prototype.removeFilter = function (entry) {
        if (!this.filters)
            return false;
        if (entry) {
            var filterid = entry.join(':');
            var deleted = null;
            // delete specific filter
            for (var i = 0; i < this.filters.length; i++) {
                if (filterid === this.filters[i].join(':')) {
                    deleted = this.filters[i];
                    this.filters.splice(i, 1);
                    break;
                }
            }
            if (!deleted)
                return false;
        }
        else {
            this.filters.pop();
        }
        if (!this.filters.length)
            this.filters = null;
        this.results = null;
        return true;
    };
    DexSearch.prototype.toggleSort = function (sortCol) {
        if (this.sortCol === sortCol) {
            if (!this.reverseSort) {
                this.reverseSort = true;
            }
            else {
                this.sortCol = null;
                this.reverseSort = false;
            }
        }
        else {
            this.sortCol = sortCol;
            this.reverseSort = false;
        }
        this.results = null;
    };
    DexSearch.prototype.filterLabel = function (filterType) {
        if (this.typedSearch && this.typedSearch.searchType !== filterType) {
            return 'Filter';
        }
        return null;
    };
    DexSearch.prototype.illegalLabel = function (id) {
        var _a, _b;
        return ((_b = (_a = this.typedSearch) === null || _a === void 0 ? void 0 : _a.illegalReasons) === null || _b === void 0 ? void 0 : _b[id]) || null;
    };
    DexSearch.prototype.textSearch = function (query) {
        var _a, _b, _c;
        query = toID(query);
        this.exactMatch = false;
        var searchType = ((_a = this.typedSearch) === null || _a === void 0 ? void 0 : _a.searchType) || '';
        // If searchType exists, we're searching mainly for results of that type.
        // We'll still search for results of other types, but those results
        // will only be used to filter results for that type.
        var searchTypeIndex = (searchType ? DexSearch.typeTable[searchType] : -1);
        /** searching for "Psychic type" will make the type come up over the move */
        var qFilterType = '';
        if (query.slice(-4) === 'type') {
            if (query.slice(0, -4) in BattleTypeChart) {
                query = query.slice(0, -4);
                qFilterType = 'type';
            }
        }
        // i represents the location of the search index we're looking at
        var i = DexSearch.getClosest(query);
        this.exactMatch = (BattleSearchIndex[i][0] === query);
        // Even with output buffer buckets, we make multiple passes through
        // the search index. searchPasses is a queue of which pass we're on:
        // [passType, i, query]
        // By doing an alias pass after the normal pass, we ensure that
        // mid-word matches only display after start matches.
        var passType = '';
        var searchPasses = [['normal', i, query]];
        // For performance reasons, only do an alias pass if query is at
        // least 2 chars long
        if (query.length > 1)
            searchPasses.push(['alias', i, query]);
        // If there are no matches starting with query: Do a fuzzy match pass
        // Fuzzy matches will still be shown after alias matches
        if (!this.exactMatch && BattleSearchIndex[i][0].substr(0, query.length) !== query) {
            // No results start with this. Do a fuzzy match pass.
            var matchLength = query.length - 1;
            if (!i)
                i++;
            while (matchLength &&
                BattleSearchIndex[i][0].substr(0, matchLength) !== query.substr(0, matchLength) &&
                BattleSearchIndex[i - 1][0].substr(0, matchLength) !== query.substr(0, matchLength)) {
                matchLength--;
            }
            var matchQuery = query.substr(0, matchLength);
            while (i >= 1 && BattleSearchIndex[i - 1][0].substr(0, matchLength) === matchQuery)
                i--;
            searchPasses.push(['fuzzy', i, '']);
        }
        // We split the output buffers into 8 buckets.
        // Bucket 0 is usually unused, and buckets 1-7 represent
        // pokemon, types, moves, etc (see typeTable).
        // When we're done, the buffers are concatenated together to form
        // our results, with each buffer getting its own header, unlike
        // multiple-pass results, which have no header.
        // Notes:
        // - if we have a searchType, that searchType's buffer will be on top
        var bufs = [[], [], [], [], [], [], [], [], [], []];
        var topbufIndex = -1;
        var count = 0;
        var nearMatch = false;
        /** [type, id, typeIndex] */
        var instafilter = null;
        var instafilterSort = [0, 1, 2, 5, 4, 3, 6, 7, 8];
        var illegal = (_b = this.typedSearch) === null || _b === void 0 ? void 0 : _b.illegalReasons;
        // We aren't actually looping through the entirety of the searchIndex
        for (i = 0; i < BattleSearchIndex.length; i++) {
            if (!passType) {
                var searchPass = searchPasses.shift();
                if (!searchPass)
                    break;
                passType = searchPass[0];
                i = searchPass[1];
                query = searchPass[2];
            }
            var entry = BattleSearchIndex[i];
            var id = entry[0];
            var type = entry[1];
            if (!id)
                break;
            if (passType === 'fuzzy') {
                // fuzzy match pass; stop after 2 results
                if (count >= 2) {
                    passType = '';
                    continue;
                }
                nearMatch = true;
            }
            else if (passType === 'exact') {
                // exact pass; stop after 1 result
                if (count >= 1) {
                    passType = '';
                    continue;
                }
            }
            else if (id.substr(0, query.length) !== query) {
                // regular pass, time to move onto our next match
                passType = '';
                continue;
            }
            if (entry.length > 2) {
                // alias entry
                if (passType !== 'alias')
                    continue;
            }
            else {
                // normal entry
                if (passType === 'alias')
                    continue;
            }
            var typeIndex = DexSearch.typeTable[type];
            // For performance, with a query length of 1, we only fill the first bucket
            if (query.length === 1 && typeIndex !== (searchType ? searchTypeIndex : 1))
                continue;
            // For pokemon queries, accept types/tier/abilities/moves/eggroups as filters
            if (searchType === 'pokemon' && (typeIndex === 5 || typeIndex > 7))
                continue;
            // For move queries, accept types/categories as filters
            if (searchType === 'move' && ((typeIndex !== 8 && typeIndex > 4) || typeIndex === 3))
                continue;
            // For move queries in the teambuilder, don't accept pokemon as filters
            if (searchType === 'move' && illegal && typeIndex === 1)
                continue;
            // For ability/item queries, don't accept anything else as a filter
            if ((searchType === 'ability' || searchType === 'item') && typeIndex !== searchTypeIndex)
                continue;
            // Query was a type name followed 'type'; only show types
            if (qFilterType === 'type' && typeIndex !== 2)
                continue;
            // hardcode cases of duplicate non-consecutive aliases
            if ((id === 'megax' || id === 'megay') && 'mega'.startsWith(query))
                continue;
            var matchStart = 0;
            var matchEnd = 0;
            if (passType === 'alias') {
                // alias entry
                // [aliasid, type, originalid, matchStart, originalindex]
                matchStart = entry[3];
                var originalIndex = entry[2];
                if (matchStart) {
                    matchEnd = matchStart + query.length;
                    matchStart += (BattleSearchIndexOffset[originalIndex][matchStart] || '0').charCodeAt(0) - 48;
                    matchEnd += (BattleSearchIndexOffset[originalIndex][matchEnd - 1] || '0').charCodeAt(0) - 48;
                }
                id = BattleSearchIndex[originalIndex][0];
            }
            else {
                matchEnd = query.length;
                if (matchEnd)
                    matchEnd += (BattleSearchIndexOffset[i][matchEnd - 1] || '0').charCodeAt(0) - 48;
            }
            if (searchType && searchTypeIndex !== typeIndex) {
                // This is a filter, set it as an instafilter candidate
                if (!instafilter || instafilterSort[typeIndex] < instafilterSort[instafilter[2]]) {
                    instafilter = [type, id, typeIndex];
                }
            }
            // show types above Arceus formes
            if (topbufIndex < 0 && searchTypeIndex < 2 && passType === 'alias' && !bufs[1].length && bufs[2].length) {
                topbufIndex = 2;
            }
            if (illegal && typeIndex === searchTypeIndex) {
                // Always show illegal results under legal results.
                // This is done by putting legal results (and the type header)
                // in bucket 0, and illegal results in the searchType's bucket.
                // searchType buckets are always on top (but under bucket 0), so
                // illegal results will be seamlessly right under legal results.
                if (!bufs[typeIndex].length && !bufs[0].length) {
                    bufs[0] = [['header', DexSearch.typeName[type]]];
                }
                if (!(id in illegal))
                    typeIndex = 0;
            }
            else {
                if (!bufs[typeIndex].length) {
                    bufs[typeIndex] = [['header', DexSearch.typeName[type]]];
                }
            }
            // don't match duplicate aliases
            var curBufLength = (passType === 'alias' && bufs[typeIndex].length);
            if (curBufLength && bufs[typeIndex][curBufLength - 1][1] === id)
                continue;
            bufs[typeIndex].push([type, id, matchStart, matchEnd]);
            count++;
        }
        var topbuf = [];
        if (nearMatch) {
            topbuf = [['html', "<em>No exact match found. The closest matches alphabetically are:</em>"]];
        }
        if (topbufIndex >= 0) {
            topbuf = topbuf.concat(bufs[topbufIndex]);
            bufs[topbufIndex] = [];
        }
        if (searchTypeIndex >= 0) {
            topbuf = topbuf.concat(bufs[0]);
            topbuf = topbuf.concat(bufs[searchTypeIndex]);
            bufs[searchTypeIndex] = [];
            bufs[0] = [];
        }
        if (instafilter && count < 20) {
            // Result count is less than 20, so we can instafilter
            bufs.push(this.instafilter(searchType, instafilter[0], instafilter[1]));
        }
        this.results = Array.prototype.concat.apply(topbuf, bufs);
        return (_c = this.results) !== null && _c !== void 0 ? _c : [];
    };
    DexSearch.prototype.instafilter = function (searchType, fType, fId) {
        var _a;
        var buf = [];
        var illegalBuf = [];
        var illegal = (_a = this.typedSearch) === null || _a === void 0 ? void 0 : _a.illegalReasons;
        if (searchType === 'pokemon') {
            switch (fType) {
                case 'type':
                    var type = fId.charAt(0).toUpperCase() + fId.slice(1);
                    buf.push(['header', "".concat(type, "-type Pok&eacute;mon")]);
                    for (var id in BattlePokedex) {
                        if (!BattlePokedex[id].types)
                            continue;
                        if (BattlePokedex(id).types.includes(type)) {
                            (illegal && id in illegal ? illegalBuf : buf).push(['pokemon', id]);
                        }
                    }
                    break;
                case 'ability':
                    var ability = getID(BattleAbilities, fId).name;
                    buf.push(['header', "".concat(ability, " Pok&eacute;mon")]);
                    for (var id in BattlePokedex) {
                        if (!BattlePokedex[id].abilities)
                            continue;
                        if (hasAbility(BattlePokedex[id], ability)) {
                            (illegal && id in illegal ? illegalBuf : buf).push(['pokemon', id]);
                        }
                    }
                    break;
            }
        }
        else if (searchType === 'move') {
            switch (fType) {
                case 'type':
                    var type = fId.charAt(0).toUpperCase() + fId.slice(1);
                    buf.push(['header', "".concat(type, "-type moves")]);
                    for (var id in BattleMovedex) {
                        if (BattleMovedex[id].type === type) {
                            (illegal && id in illegal ? illegalBuf : buf).push(['move', id]);
                        }
                    }
                    break;
                case 'category':
                    var category = fId.charAt(0).toUpperCase() + fId.slice(1);
                    buf.push(['header', "".concat(category, " moves")]);
                    for (var id in BattleMovedex) {
                        if (BattleMovedex[id].category === category) {
                            (illegal && id in illegal ? illegalBuf : buf).push(['move', id]);
                        }
                    }
                    break;
            }
        }
        return __spreadArray(__spreadArray([], buf, true), illegalBuf, true);
    };
    DexSearch.getClosest = function (query) {
        // binary search through the index!
        var left = 0;
        var right = BattleSearchIndex.length - 1;
        while (right > left) {
            var mid = Math.floor((right - left) / 2 + left);
            if (BattleSearchIndex[mid][0] === query && (mid === 0 || BattleSearchIndex[mid - 1][0] !== query)) {
                // that's us
                return mid;
            }
            else if (BattleSearchIndex[mid][0] < query) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        if (left >= BattleSearchIndex.length - 1)
            left = BattleSearchIndex.length - 1;
        else if (BattleSearchIndex[left + 1][0] && BattleSearchIndex[left][0] < query)
            left++;
        if (left && BattleSearchIndex[left - 1][0] === query)
            left--;
        return left;
    };
    DexSearch.typeTable = {
        pokemon: 1,
        type: 2,
        tier: 3,
        move: 4,
        item: 5,
        ability: 6,
        egggroup: 7,
        category: 8,
        article: 9,
    };
    DexSearch.typeName = {
        pokemon: 'Pok&eacute;mon',
        type: 'Type',
        tier: 'Tiers',
        move: 'Moves',
        item: 'Items',
        ability: 'Abilities',
        egggroup: 'Egg group',
        category: 'Category',
        article: 'Article',
    };
    return DexSearch;
}());
var BattleTypedSearch = /** @class */ (function () {
    function BattleTypedSearch(searchType, format, speciesOrSet) {
        if (format === void 0) { format = ''; }
        if (speciesOrSet === void 0) { speciesOrSet = ''; }
        /**
         * `species` is the second of two base filters. It constrains results to
         * things that species can use, and affects the default sort.
         */
        this.species = '';
        /**
         * `set` is a pseudo-base filter; it has minor effects on move sorting.
         * (Abilities/items can affect what moves are sorted as usable.)
         */
        this.set = null;
        /**
         * Cached copy of what the results list would be with only base filters
         * (i.e. with an empty `query` and `filters`)
         */
        this.baseResults = null;
        /**
         * Cached copy of all results not in `baseResults` - mostly in case a user
         * is wondering why a specific result isn't showing up.
         */
        this.baseIllegalResults = null;
        this.illegalReasons = null;
        this.results = null;
        this.sortRow = null;
        this.searchType = searchType;
        this.baseResults = null;
        this.baseIllegalResults = null;
        this.species = '';
        this.set = null;
        if (typeof speciesOrSet === 'string') {
            if (speciesOrSet)
                this.species = speciesOrSet;
        }
        else {
            this.set = speciesOrSet;
            this.species = toID(this.set.species);
        }
        if (!searchType || !this.set)
            return;
    }
    BattleTypedSearch.prototype.getResults = function (filters, sortCol, reverseSort) {
        var _this = this;
        if (sortCol === 'type') {
            return __spreadArray([this.sortRow], BattleTypeSearch.prototype.getDefaultResults.call(this), true);
        }
        else if (sortCol === 'category') {
            return __spreadArray([this.sortRow], BattleCategorySearch.prototype.getDefaultResults.call(this), true);
        }
        else if (sortCol === 'ability') {
            return __spreadArray([this.sortRow], BattleAbilitySearch.prototype.getDefaultResults.call(this), true);
        }
        if (!this.baseResults) {
            this.baseResults = this.getBaseResults();
        }
        if (!this.baseIllegalResults) {
            var legalityFilter = {};
            for (var _i = 0, _a = this.baseResults; _i < _a.length; _i++) {
                var _b = _a[_i], resultType = _b[0], value = _b[1];
                if (resultType === this.searchType)
                    legalityFilter[value] = 1;
            }
            this.baseIllegalResults = [];
            this.illegalReasons = {};
            for (var id in this.getTable()) {
                if (!(id in legalityFilter)) {
                    this.baseIllegalResults.push([this.searchType, id]);
                    this.illegalReasons[id] = 'Illegal';
                }
            }
        }
        var results;
        var illegalResults;
        if (filters) {
            results = [];
            illegalResults = [];
            for (var _c = 0, _d = this.baseResults; _c < _d.length; _c++) {
                var result = _d[_c];
                if (this.filter(result, filters)) {
                    if (results.length && result[0] === 'header' && results[results.length - 1][0] === 'header') {
                        results[results.length - 1] = result;
                    }
                    else {
                        results.push(result);
                    }
                }
            }
            if (results.length && results[results.length - 1][0] === 'header') {
                results.pop();
            }
            for (var _e = 0, _f = this.baseIllegalResults; _e < _f.length; _e++) {
                var result = _f[_e];
                if (this.filter(result, filters)) {
                    illegalResults.push(result);
                }
            }
        }
        else {
            results = __spreadArray([], this.baseResults, true);
            illegalResults = null;
        }
        if (sortCol) {
            results = results.filter(function (_a) {
                var rowType = _a[0];
                return rowType === _this.searchType;
            });
            results = this.sort(results, sortCol, reverseSort);
            if (illegalResults) {
                illegalResults = illegalResults.filter(function (_a) {
                    var rowType = _a[0];
                    return rowType === _this.searchType;
                });
                illegalResults = this.sort(illegalResults, sortCol, reverseSort);
            }
        }
        if (this.sortRow) {
            results = __spreadArray([this.sortRow], results, true);
        }
        if (illegalResults && illegalResults.length) {
            results = __spreadArray(__spreadArray(__spreadArray([], results, true), [['header', "Illegal results"]], false), illegalResults, true);
        }
        return results;
    };
    BattleTypedSearch.prototype.canLearn = function (speciesid, moveid) {
        var poke = BattlePokedex[speciesid];
        for (var _i = 0, _a = poke.learnset; _i < _a.length; _i++) {
            var learn = _a[_i];
            if (learn.move == moveid) {
                return true;
            }
        }
        return false;
    };
    return BattleTypedSearch;
}());
var BattlePokemonSearch = /** @class */ (function (_super) {
    __extends(BattlePokemonSearch, _super);
    function BattlePokemonSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortRow = ['sortpokemon', ''];
        return _this;
    }
    BattlePokemonSearch.prototype.filter = function (input, filters) {
        throw new Error("Method not implemented.");
    };
    BattlePokemonSearch.prototype.getTable = function () {
        return BattlePokedex;
    };
    BattlePokemonSearch.prototype.getDefaultResults = function () {
        var results = [];
        for (var id in BattlePokedex) {
            switch (id) {
                case 'bulbasaur':
                    results.push(['header', "Generation 1"]);
                    break;
                case 'chikorita':
                    results.push(['header', "Generation 2"]);
                    break;
                case 'treecko':
                    results.push(['header', "Generation 3"]);
                    break;
                case 'turtwig':
                    results.push(['header', "Generation 4"]);
                    break;
                case 'victini':
                    results.push(['header', "Generation 5"]);
                    break;
                case 'chespin':
                    results.push(['header', "Generation 6"]);
                    break;
                case 'rowlet':
                    results.push(['header', "Generation 7"]);
                    break;
                case 'grookey':
                    results.push(['header', "Generation 8"]);
                    break;
                case 'sprigatito':
                    results.push(['header', "Generation 9"]);
                    break;
                case 'missingno':
                    results.push(['header', "Glitch"]);
                    break;
                case 'syclar':
                    results.push(['header', "CAP"]);
                    break;
                case 'pikachucosplay':
                    continue;
            }
            results.push(['pokemon', id]);
        }
        return results;
    };
    BattlePokemonSearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattlePokemonSearch.prototype.sort = function (results, sortCol, reverseSort) {
        var sortOrder = reverseSort ? -1 : 1;
        if (['hp', 'atk', 'def', 'spa', 'spd', 'spe'].includes(sortCol)) {
            return results.sort(function (_a, _b) {
                var rowType1 = _a[0], id1 = _a[1];
                var rowType2 = _b[0], id2 = _b[1];
                var stat1 = getID(BattlePokedex, id1).baseStats[sortCol];
                var stat2 = getID(BattlePokedex, id2).baseStats[sortCol];
                return (stat2 - stat1) * sortOrder;
            });
        }
        else if (sortCol === 'bst') {
            return results.sort(function (_a, _b) {
                var rowType1 = _a[0], id1 = _a[1];
                var rowType2 = _b[0], id2 = _b[1];
                var base1 = getID(BattlePokedex, id1).baseStats;
                var base2 = getID(BattlePokedex, id2).baseStats;
                var bst1 = base1.hp + base1.atk + base1.def + base1.spa + base1.spd + base1.spe;
                var bst2 = base2.hp + base2.atk + base2.def + base2.spa + base2.spd + base2.spe;
                return (bst2 - bst1) * sortOrder;
            });
        }
        else if (sortCol === 'name') {
            return results.sort(function (_a, _b) {
                var rowType1 = _a[0], id1 = _a[1];
                var rowType2 = _b[0], id2 = _b[1];
                var name1 = id1;
                var name2 = id2;
                return (name1 < name2 ? -1 : name1 > name2 ? 1 : 0) * sortOrder;
            });
        }
        throw new Error("invalid sortcol");
    };
    return BattlePokemonSearch;
}(BattleTypedSearch));
var BattleAbilitySearch = /** @class */ (function (_super) {
    __extends(BattleAbilitySearch, _super);
    function BattleAbilitySearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BattleAbilitySearch.prototype.getTable = function () {
        return BattleAbilities;
    };
    BattleAbilitySearch.prototype.getDefaultResults = function () {
        var results = [];
        for (var id in BattleAbilities) {
            results.push(['ability', id]);
        }
        return results;
    };
    BattleAbilitySearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattleAbilitySearch.prototype.filter = function (row, filters) {
        if (!filters)
            return true;
        if (row[0] !== 'ability')
            return true;
        var ability = getID(BattleAbilities, row[1]);
        for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
            var _a = filters_1[_i], filterType = _a[0], value = _a[1];
            switch (filterType) {
                case 'pokemon':
                    if (!hasAbility(getID(BattlePokedex, value), ability.name))
                        return false;
                    break;
            }
        }
        return true;
    };
    BattleAbilitySearch.prototype.sort = function (results, sortCol, reverseSort) {
        throw new Error("invalid sortcol");
    };
    return BattleAbilitySearch;
}(BattleTypedSearch));
var BattleItemSearch = /** @class */ (function (_super) {
    __extends(BattleItemSearch, _super);
    function BattleItemSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BattleItemSearch.prototype.getTable = function () {
        return BattleItems;
    };
    BattleItemSearch.prototype.getDefaultResults = function () {
        var results = [];
        results.push(['header', "Items"]);
        for (var id in BattleItems) {
            results.push(['item', id]);
        }
        return results;
    };
    BattleItemSearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattleItemSearch.prototype.filter = function (row, filters) {
        throw new Error("invalid filter");
    };
    BattleItemSearch.prototype.sort = function (results, sortCol, reverseSort) {
        throw new Error("invalid sortcol");
    };
    return BattleItemSearch;
}(BattleTypedSearch));
var BattleMoveSearch = /** @class */ (function (_super) {
    __extends(BattleMoveSearch, _super);
    function BattleMoveSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortRow = ['sortmove', ''];
        return _this;
    }
    BattleMoveSearch.prototype.getTable = function () {
        return BattleMovedex;
    };
    BattleMoveSearch.prototype.getDefaultResults = function () {
        var results = [];
        results.push(['header', "Moves"]);
        for (var id in BattleMovedex) {
            results.push(['move', id]);
        }
        return results;
    };
    BattleMoveSearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattleMoveSearch.prototype.filter = function (row, filters) {
        if (!filters)
            return true;
        if (row[0] !== 'move')
            return true;
        var move = getID(BattleMovedex, row[1]);
        for (var _i = 0, filters_2 = filters; _i < filters_2.length; _i++) {
            var _a = filters_2[_i], filterType = _a[0], value = _a[1];
            switch (filterType) {
                case 'type':
                    if (move.type !== value)
                        return false;
                    break;
                case 'category':
                    if (move.category !== value)
                        return false;
                    break;
                case 'pokemon':
                    if (!this.canLearn(value, move.id))
                        return false;
                    break;
            }
        }
        return true;
    };
    BattleMoveSearch.prototype.sort = function (results, sortCol, reverseSort) {
        var sortOrder = reverseSort ? -1 : 1;
        switch (sortCol) {
            case 'power':
                var powerTable_1 = {
                    return: 102, frustration: 102, spitup: 300, trumpcard: 200, naturalgift: 80, grassknot: 120,
                    lowkick: 120, gyroball: 150, electroball: 150, flail: 200, reversal: 200, present: 120,
                    wringout: 120, crushgrip: 120, heatcrash: 120, heavyslam: 120, fling: 130, magnitude: 150,
                    beatup: 24, punishment: 1020, psywave: 1250, nightshade: 1200, seismictoss: 1200,
                    dragonrage: 1140, sonicboom: 1120, superfang: 1350, endeavor: 1399, sheercold: 1501,
                    fissure: 1500, horndrill: 1500, guillotine: 1500,
                };
                return results.sort(function (_a, _b) {
                    var rowType1 = _a[0], id1 = _a[1];
                    var rowType2 = _b[0], id2 = _b[1];
                    var move1 = getID(BattleMovedex, id1);
                    var move2 = getID(BattleMovedex, id2);
                    var pow1 = move1.basePower || powerTable_1[id1] || (move1.category === 'Status' ? -1 : 1400);
                    var pow2 = move2.basePower || powerTable_1[id2] || (move2.category === 'Status' ? -1 : 1400);
                    return (pow2 - pow1) * sortOrder;
                });
            case 'accuracy':
                return results.sort(function (_a, _b) {
                    var rowType1 = _a[0], id1 = _a[1];
                    var rowType2 = _b[0], id2 = _b[1];
                    var accuracy1 = getID(BattleMovedex, id1).accuracy || 0;
                    var accuracy2 = getID(BattleMovedex, id2).accuracy || 0;
                    if (accuracy1 === true)
                        accuracy1 = 101;
                    if (accuracy2 === true)
                        accuracy2 = 101;
                    return (accuracy2 - accuracy1) * sortOrder;
                });
            case 'pp':
                return results.sort(function (_a, _b) {
                    var rowType1 = _a[0], id1 = _a[1];
                    var rowType2 = _b[0], id2 = _b[1];
                    var pp1 = getID(BattleMovedex, id1).pp || 0;
                    var pp2 = getID(BattleMovedex, id2).pp || 0;
                    return (pp2 - pp1) * sortOrder;
                });
            case 'name':
                return results.sort(function (_a, _b) {
                    var rowType1 = _a[0], id1 = _a[1];
                    var rowType2 = _b[0], id2 = _b[1];
                    var name1 = id1;
                    var name2 = id2;
                    return (name1 < name2 ? -1 : name1 > name2 ? 1 : 0) * sortOrder;
                });
        }
        throw new Error("invalid sortcol");
    };
    return BattleMoveSearch;
}(BattleTypedSearch));
var BattleCategorySearch = /** @class */ (function (_super) {
    __extends(BattleCategorySearch, _super);
    function BattleCategorySearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BattleCategorySearch.prototype.getTable = function () {
        return { physical: 1, special: 1, status: 1 };
    };
    BattleCategorySearch.prototype.getDefaultResults = function () {
        return [
            ['category', 'physical'],
            ['category', 'special'],
            ['category', 'status'],
        ];
    };
    BattleCategorySearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattleCategorySearch.prototype.filter = function (row, filters) {
        throw new Error("invalid filter");
    };
    BattleCategorySearch.prototype.sort = function (results, sortCol, reverseSort) {
        throw new Error("invalid sortcol");
    };
    return BattleCategorySearch;
}(BattleTypedSearch));
var BattleTypeSearch = /** @class */ (function (_super) {
    __extends(BattleTypeSearch, _super);
    function BattleTypeSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BattleTypeSearch.prototype.getTable = function () {
        return BattleTypeChart;
    };
    BattleTypeSearch.prototype.getDefaultResults = function () {
        var results = [];
        for (var id in BattleTypeChart) {
            results.push(['type', id]);
        }
        return results;
    };
    BattleTypeSearch.prototype.getBaseResults = function () {
        return this.getDefaultResults();
    };
    BattleTypeSearch.prototype.filter = function (row, filters) {
        throw new Error("invalid filter");
    };
    BattleTypeSearch.prototype.sort = function (results, sortCol, reverseSort) {
        throw new Error("invalid sortcol");
    };
    return BattleTypeSearch;
}(BattleTypedSearch));
