import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

class WarriorBuild extends ProfBuild {
    constructor(id, name) {
        super(id, Professions.Warrior, name);
    }
}

class BerserkerBannerBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Berserker - Banner - ' + name);
        this.icon += 'berserker.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep2.setTwoHand('Longbow', 'Viper\'s', 'Superior Sigil of Geomancy', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Arms', ['Wounding Precision', 'Blademaster', 'Furious']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Powerful Synergy']);
        this.specialization.setSpec('spec3', 'Berserker', ['Last Blaze', 'Heat the Soul', 'King of Fires']);
        this.skills.setHealSkill('Blood Reckoning');
        this.skills.setUtilitySkills(['Shattering Blow', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Head Butt');
    }
}

class BerserkerDPSBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Berserker - DPS - ' + name);
        this.icon += 'berserker.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.setSingleRune('Superior Rune of the Renegade');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Sword', 'Viper\'s', 'Superior Sigil of Earth');
        this.wep1.setOffHand('Torch', 'Viper\'s', 'Superior Sigil of Malice');
        this.wep2.setTwoHand('Longbow', 'Viper\'s', 'Superior Sigil of Earth', 'Superior Sigil of Malice');
        this.specialization.setSpec('spec1', 'Arms', ['Wounding Precision', 'Blademaster', 'Furious']);
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Burst Mastery']);
        this.specialization.setSpec('spec3', 'Berserker', ['Smash Brawler', 'Heat the Soul', 'King of Fires']);
        this.skills.setHealSkill('Blood Reckoning');
        this.skills.setUtilitySkills(['Shattering Blow', 'Signet of Fury', 'Signet of Might']);
        this.skills.setEliteSkill('Head Butt');
    }
}

class SpellbreakerBannerBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Spellbreaker - Banner - ' + name);
        this.icon += 'spellbreaker.png';
        this.armor.setStats(['Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setStats(['Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s']);
        this.wep1.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Accuracy');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Tactics', ['Empowered', 'Empower Allies', 'Phalanx Strength']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Revenge Counter']);
        this.skills.setHealSkill('"To the Limit!"');
        this.skills.setUtilitySkills(['Kick', 'Banner of Discipline', 'Banner of Strength']);
        this.skills.setEliteSkill('Rampage');
    }
}

class SpellbreakerDPSBuild extends WarriorBuild {
    constructor(id, name) {
        super(id, 'Spellbreaker - DPS - ' + name);
        this.icon += 'spellbreaker.png';
        this.armor.setStats(['Berserker\'s', 'Berserker\'s', 'Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s']);
        this.armor.setSingleRune('Superior Rune of the Scholar');
        this.consumable.setConsumable('Bowl of Sweet and Spicy Butternut Squash Soup', 'Superior Sharpening Stone');
        this.trinket.setStats(['Assassin\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s', 'Berserker\'s']);
        this.wep1.setTwoHand('Greatsword', 'Berserker\'s', 'Superior Sigil of Force', 'Superior Sigil of Accuracy');
        this.wep2.setMainHand('Axe', 'Berserker\'s', 'Superior Sigil of Force');
        this.wep2.setOffHand('Axe', 'Berserker\'s', 'Superior Sigil of Accuracy');
        this.specialization.setSpec('spec1', 'Strength', ['Peak Performance', 'Forceful Greatsword', 'Berserker\'s Power']);
        this.specialization.setSpec('spec2', 'Discipline', ['Warrior\'s Sprint', 'Inspiring Battle Standard', 'Burst Mastery']);
        this.specialization.setSpec('spec3', 'Spellbreaker', ['Pure Strike', 'Loss Aversion', 'Revenge Counter']);
        this.skills.setHealSkill('Healing Signet');
        this.skills.setUtilitySkills(['Kick', 'Bull\'s Charge', 'Signet of Might']);
        this.skills.setEliteSkill('Signet of Rage');
    }
}

export function warBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new BerserkerBannerBuild('bers', 'Standard');

        build = new BerserkerBannerBuild('bersCC', 'CC');
        build.skills.setUtilitySkills(['Wild Blow', 'Banner of Discipline', 'Banner of Strength']);

        build = new BerserkerBannerBuild('bersFury', 'Fury');
        build.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);

        build = new BerserkerBannerBuild('bersSplit', 'Split');
        build.skills.setUtilitySkills(['Shattering Blow', 'Outrage', '']);

        build = new BerserkerDPSBuild('bersDPS', 'Standard');
    }
    // power
    {
        build = new SpellbreakerBannerBuild('spellbrk', 'Standard');

        build = new SpellbreakerBannerBuild('spellbrkFury', 'Fury');
        build.skills.setUtilitySkills(['"For Great Justice!"', 'Banner of Discipline', 'Banner of Strength']);

        build = new SpellbreakerDPSBuild('spellbrkDPS', 'Standard');
    }
}

