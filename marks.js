Hooks.on("wfrp4e:rollCastTest", testResults => {
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