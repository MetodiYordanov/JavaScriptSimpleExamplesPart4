function heroesInfo(inputInfo) {
    let result = [];
    for (const hero of inputInfo) {
        const heroInfo = hero.split(' / ');
        const heroName = heroInfo[0];
        const heroLevel = heroInfo[1];
        const heroAbilities = heroInfo[2];
        
        result.push({
            Hero: heroName,
            level: parseInt(heroLevel, 10),
            items: heroAbilities
        });
    }

    result = result.sort((firstHero, secondHero) => firstHero.level - secondHero.level);
    for (const heroToPrint of result) {
        console.log(`Hero: ${heroToPrint.Hero}`);
        console.log(`level => ${heroToPrint.level}`);
        console.log(`items => ${heroToPrint.items}`);
    }
}

// example input:
heroesInfo(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heroesInfo(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);