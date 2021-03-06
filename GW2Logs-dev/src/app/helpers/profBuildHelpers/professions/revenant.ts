import { ProfBuild } from '../../profBuild';
import { Professions } from '../professionUtilities/professions';

/**
 * Standard Revenant build
 */
class RevenantBuild extends ProfBuild {
    /**
     * Create a standard Revenant build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, Professions.Revenant, name);
        this.skills = null;
    }
}

/**
 * Condition Renegade build
 */
class CondiRenegadeBuild extends RevenantBuild {
    /**
     * Create a Condition Renegade build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Renegade - Condition' + name);
        this.icon += 'renegade.png';
        this.armor.setSingleStat('Viper\'s');
        this.armor.set42Rune('Superior Rune of the Nightmare', 'Superior Rune of the Trapper');
        this.consumable.setConsumable('Rare Veggie Pizza', 'Toxic Focusing Crystal');
        this.trinket.setSingleStat('Viper\'s');
        this.wep1.setMainHand('Mace', 'Viper\'s', 'Superior Sigil of Smoldering');
        this.wep1.setOffHand('Axe', 'Viper\'s', 'Superior Sigil of Geomancy');
        this.wep2.setTwoHand('Shortbow', 'Viper\'s', 'Superior Sigil of Smoldering', 'Superior Sigil of Geomancy');
        this.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Diabolic Inferno']);
        this.specialization.setSpec('spec2', 'Devastation', [
            'Ferocious Strikes',
            'Assassin\'s Presence',
            'Swift Termination'
        ]);
        this.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Lasting Legacy']);
        this.profSkills.setSkills(['Legendary Renegade Stance', 'Legendary Demon Stance']);
    }
}

/**
 * Healing Renegade build
 */
class HealRenegadeBuild extends RevenantBuild {
    /**
     * Create a Healing Renegade build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Renegade - Heal' + name);
        this.icon += 'renegade.png';
        this.armor.setSingleStat('Harrier\'s');
        this.armor.setSingleRune('Superior Rune of the Monk');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Harrier\'s');
        this.wep1.setMainHand('Sword', 'Harrier\'s', 'Superior Sigil of Transference');
        this.wep1.setOffHand('Axe', 'Harrier\'s', 'Superior Sigil of Water');
        this.wep2.setTwoHand('Staff', 'Harrier\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
        this.specialization.setSpec('spec1', 'Salvation', [
            'Tranquil Balance',
            'Invoking Harmony',
            'Selfless Amplification'
        ]);
        this.specialization.setSpec('spec2', 'Devastation', [
            'Vicious Lacerations',
            'Assassin\'s Presence',
            'Assassin\'s Annihilation'
        ]);
        this.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Vindication']);
        this.profSkills.setSkills(['Legendary Renegade Stance', 'Legendary Centaur Stance']);
    }
}

/**
 * Healing Herald build
 */
class HealHeraldBuild extends RevenantBuild {
    /**
     * Create a Healing Herald build
     * @param id Id of the build
     * @param name Name of the build
     */
    constructor(id, name) {
        super(id, 'Herald - Heal' + name);
        this.icon += 'herald.png';
        this.armor.setSingleStat('Minstrel\'s');
        this.armor.setSingleRune('Superior Rune of Water');
        this.consumable.setConsumable('Delicious Rice Ball', 'Bountiful Maintenance Oil');
        this.trinket.setSingleStat('Magi\'s');
        this.specialization.setSpec('spec1', 'Retribution', [
            'Close Quarters',
            'Eye for an Eye',
            'Steadfast Rejuvenation'
        ]);
        this.specialization.setSpec('spec2', 'Salvation', [
            'Nourishing Roots',
            'Invoking Harmony',
            'Natural Abundance'
        ]);
        this.specialization.setSpec('spec3', 'Herald', [
            'Radiant Revival',
            'Bolster Fortifications',
            'Soothing Bastion'
        ]);
        this.profSkills.setSkills(['Legendary Centaur Stance', 'Legendary Dragon Stance']);
        this.wep1.setMainHand('Sword', 'Minstrel\'s', 'Superior Sigil of Transference');
        this.wep1.setOffHand('Shield', 'Magi\'s', 'Superior Sigil of Water');

        this.wep2.setTwoHand('Staff', 'Magi\'s', 'Superior Sigil of Transference', 'Superior Sigil of Water');
    }
}

/**
 * Add revenant builds to the database
 */
export function revBuildMaker() {
    let build: ProfBuild = null;
    // Condi
    {
        build = new CondiRenegadeBuild('renCondi', '');
        //
        let variant = build.addOverride('Big Hitbox');
        variant.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Pulsating Pestilence']);
        variant.specialization.setSpec('spec2', 'Devastation', [
            'Ferocious Strikes',
            'Assassin\'s Presence',
            'Swift Termination'
        ]);
        variant.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Vindication']);
        //
        variant = build.addOverride('Invocation');
        variant.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Diabolic Inferno']);
        variant.specialization.setSpec('spec2', 'Invocation', [
            'Forceful Persistence',
            'Spirit Boon',
            'Charged Mists'
        ]);
        variant.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Lasting Legacy']);
        //
        variant = build.addOverride('Invocation - Big Hitbox');
        variant.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Pulsating Pestilence']);
        variant.specialization.setSpec('spec2', 'Invocation', [
            'Forceful Persistence',
            'Spirit Boon',
            'Charged Mists'
        ]);
        variant.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Vindication']);
        //
        variant = build.addOverride('Support');
        variant.profSkills.setSkills(['Legendary Renegade Stance', 'Legendary Centaur Stance']);
        variant.specialization.setSpec('spec1', 'Corruption', ['Venom Enhancement', 'Abyssal Chill', 'Diabolic Inferno']);
        variant.specialization.setSpec('spec2', 'Salvation', [
            'Tranquil Balance',
            'Invoking Harmony',
            'Natural Abundance'
        ]);
        variant.specialization.setSpec('spec3', 'Renegade', ['Blood Fury', 'Heartpiercer', 'Righteous Rebel']);
        //
    }

    // Special
    {

        build = new HealRenegadeBuild('renHeal', '');

        build = new HealHeraldBuild('herDeiVentari', '');

    }
}

