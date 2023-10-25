for (let data of [BattlePokedex, BattleMovedex, BattleItems, BattleAbilities, BattleTypeChart]) {
	for (let key in data) {
		data[key].id = key;
	}
}
