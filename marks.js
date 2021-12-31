Hooks.on("init", () => {
	game.settings.register("arcane-marks-careers", "rollMarks", {
		name : "Automatically Roll for Arcane Marks",
		hint : "When Critical Casting or Critical Channelling, the system will also roll a d10, if the result is an 8, it displays a link to roll on the Arcane Marks table.",
		scope : "world",
		config : true,
		default : true,
		type : Boolean
	});
})

Hooks.on("wfrp4e:rollCastTest", async test => {
    if (!game.settings.get("arcane-marks-careers", "rollMarks"))
        return

    let wind = (game.wfrp4e.config.magicWind[test.spell.lore.value] || "").toLowerCase();
    if (test.result.critical && game.wfrp4e.tables[wind])
    {
        let roll = Math.ceil(CONFIG.Dice.randomUniform() * 10)
        if (roll == 8)
            test.result.other.push(`<a class ='table-click' data-table='${wind}'><i class='fas fa-list'></i> Arcane Mark</a> Gained`)
        else 
            test.result.other.push(`<b>Arcane Mark Roll</b>: ${roll}`)
    }
})

Hooks.on("wfrp4e:rollChannelTest", async test => {
    if (!game.settings.get("arcane-marks-careers", "rollMarks"))
        return

    let wind = (game.wfrp4e.config.magicWind[test.spell.lore.value] || "").toLowerCase();
    if (test.result.criticalchannell && game.wfrp4e.tables[wind])
    {
        let roll = Math.ceil(CONFIG.Dice.randomUniform() * 10)
        if (roll == 8)
            test.result.other.push(`<a class ='table-click' data-table='${wind}'><i class='fas fa-list'></i> Arcane Mark</a> Gained`)
        else 
            test.result.other.push(`<b>Arcane Mark Roll</b>: ${roll}`)
    }
})
