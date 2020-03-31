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

Hooks.on("wfrp4e:rollCastTest", testResults => {
    if (!game.settings.get("arcane-marks-careers", "rollMarks"))
        return
    if (testResults.extra.critical)
    {
        if (new Roll("1d10").roll().total == 8)
        {
            let wind = WFRP4E.magicWind[testResults.spell.data.lore.value].toLowerCase();
            if (WFRP_Tables[wind])
            {
                testResults.other.push(`<a class ='table-click' data-table='${wind}'><i class='fas fa-list'></i> Arcane Mark<a> Gained`)
            }
        }
    }
})

Hooks.on("wfrp4e:rollChannelTest", testResults => {
    if (!game.settings.get("arcane-marks-careers", "rollMarks"))
        return
    if (testResults.extra.criticalchannell)
    {
        if (new Roll("1d10").roll().total == 8)
        {
            let wind = WFRP4E.magicWind[testResults.spell.data.lore.value].toLowerCase();
            if (WFRP_Tables[wind])
            {
                testResults.other.push(`<a class ='table-click' data-table='${wind}'><i class='fas fa-list'></i> Arcane Mark<a> Gained`)
            }
        }
    }
})
