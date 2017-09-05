var tempCondiArmor = [
  { slot: "helm", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "shoulders", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "coat", stat: "Viper's", rune: "Superior Rune of Balthazar" },
  { slot: "gloves", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "leggings", stat: "Sinister", rune: "Superior Rune of Balthazar" },
  { slot: "boots", stat: "Sinister", rune: "Superior Rune of Balthazar" }
];

var tempCondiTrait = [
  {
    name: "Fire",
    traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
  },
  {
    name: "Arcane",
    traits: ["Arcane Precision", "Final Shielding", "Elemental Surge"]
  },
  {
    name: "Tempest",
    traits: ["Unstable Conduit", "Harmonious Conduit", "Imbued Melodies"]
  }
];

var tempCondiTrinket = [
  { slot: "amulet", stat: "Sinister" },
  { slot: "ring1", stat: "Sinister" },
  { slot: "ring2", stat: "Sinister" },
  { slot: "back", stat: "Sinister" },
  { slot: "earring1", stat: "Sinister" },
  { slot: "earring2", stat: "Sinister" }
];

var tempCondiFood = ["Rare Veggie Pizza", "Toxic Focusing Crystal"];

builds["#tempPS"] = {
  class: Elementalist,
  specializations: tempCondiTrait,
  skills: [
    "Arcane Brilliance",
    "Signet of Fire",
    "Arcane Power",
    "Glyph of Elemental Power",
    "Glyph of Elementals"
  ],
  pets: null,
  armor: tempCondiArmor,
  trinket: tempCondiTrinket,
  weapons: [{
    slot: "mh1",
    type: "Scepter",
    stat: "Sinister",
    sigils: ["Superior Sigil of Bursting"]
  },
  {
    slot: "oh1",
    type: "Warhorn",
    stat: "Viper's",
    sigils: ["Superior Sigil of Smoldering"]
  },
  {
    slot: "mh2",
    type: "",
    stat: "",
    sigils: [""]
  },
  {
    slot: "oh2",
    type: "",
    stat: "",
    sigils: [""]
  }],
  food: tempCondiFood
};

builds["#tempPSMobility"] = {
  class: Elementalist,
  specializations: tempCondiTrait,
  skills: [
    "Arcane Brilliance",
    "Signet of Fire",
    "Arcane Power",
    "Lightning Flash",
    "Glyph of Elementals"
  ],
  pets: null,
  armor: tempCondiArmor,
  trinket: tempCondiTrinket,
  weapons: [{
    slot: "mh1",
    type: "Scepter",
    stat: "Sinister",
    sigils: ["Superior Sigil of Bursting"]
  },
  {
    slot: "oh1",
    type: "Warhorn",
    stat: "Viper's",
    sigils: ["Superior Sigil of Smoldering"]
  },
  {
    slot: "mh2",
    type: "",
    stat: "",
    sigils: [""]
  },
  {
    slot: "oh2",
    type: "",
    stat: "",
    sigils: [""]
  }],
  food: tempCondiFood
};

builds["#tempCondi"] = {
  class: Elementalist,
  specializations: tempCondiTrait,
  skills: [
    "Arcane Brilliance",
    "Signet of Fire",
    "Arcane Power",
    "Glyph of Elemental Power",
    "Conjure Fiery Greatsword"
  ],
  pets: null,
  armor: tempCondiArmor,
  trinket: tempCondiTrinket,
  weapons: [{
    slot: "mh1",
    type: "Dagger",
    stat: "Sinister",
    sigils: ["Superior Sigil of Bursting"]
  },
  {
    slot: "oh1",
    type: "Focus",
    stat: "Viper's",
    sigils: ["Superior Sigil of Smoldering"]
  },
  {
    slot: "mh2",
    type: "",
    stat: "",
    sigils: [""]
  },
  {
    slot: "oh2",
    type: "",
    stat: "",
    sigils: [""]
  }],
  food: tempCondiFood
};

builds["#tempCondiMobility"] = {
  class: Elementalist,
  specializations: tempCondiTrait,
  skills: [
    "Arcane Brilliance",
    "Signet of Fire",
    "Arcane Power",
    "Lightning Flash",
    "Conjure Fiery Greatsword"
  ],
  pets: null,
  armor: tempCondiArmor,
  trinket: tempCondiTrinket,
  weapons: [{
    slot: "mh1",
    type: "Dagger",
    stat: "Sinister",
    sigils: ["Superior Sigil of Bursting"]
  },
  {
    slot: "oh1",
    type: "Focus",
    stat: "Viper's",
    sigils: ["Superior Sigil of Smoldering"]
  },
  {
    slot: "mh2",
    type: "",
    stat: "",
    sigils: [""]
  },
  {
    slot: "oh2",
    type: "",
    stat: "",
    sigils: [""]
  }],
  food: tempCondiFood
};

builds["#tempPower"] = {
  class: Elementalist,
  specializations: [
    {
      name: "Fire",
      traits: ["Burning Precision", "Pyromancer's Training", "Persisting Flames"]
    },
    {
      name: "Air",
      traits: ["Ferocious Winds", "Tempest Defense", "Bolt to the Heart"]
    },
    {
      name: "Tempest",
      traits: ["Gale Song", "Harmonious Conduit", "Imbued Melodies"]
    }
  ],
  skills: [
    "Glyph of Elemental Harmony",
    "Conjure Frost Bow",
    "Glyph of Storms",
    "Signet of Fire",
    "Conjure Fiery Greatsword"
  ],
  pets: null,
  armor: [
    { slot: "helm", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
    {
      slot: "shoulders",
      stat: "Berserker's",
      rune: "Superior Rune of the Scholar"
    },
    { slot: "coat", stat: "Berserker's", rune: "Superior Rune of the Scholar" },
    {
      slot: "gloves",
      stat: "Berserker's",
      rune: "Superior Rune of the Scholar"
    },
    {
      slot: "leggings",
      stat: "Berserker's",
      rune: "Superior Rune of the Scholar"
    },
    { slot: "boots", stat: "Berserker's", rune: "Superior Rune of the Scholar" }
  ],
  trinket: [
    { slot: "amulet", stat: "Berserker's" },
    { slot: "ring1", stat: "Berserker's" },
    { slot: "ring2", stat: "Berserker's" },
    { slot: "back", stat: "Berserker's" },
    { slot: "earring1", stat: "Berserker's" },
    { slot: "earring2", stat: "Berserker's" }
  ],
  weapons: [
    {
      slot: "mh1",
      type: "Staff",
      stat: "Berserker's",
      sigils: ["Superior Sigil of Force", "Superior Sigil of Accuracy"]
    },
    {
      slot: "oh1",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "mh2",
      type: "",
      stat: "",
      sigils: [""]
    },
    {
      slot: "oh2",
      type: "",
      stat: "",
      sigils: [""]
    }
  ],
  food: [
    "Bowl of Sweet and Spicy Butternut Squash Soup",
    "Superior Sharpening Stone"
  ]
};

builds["#tempPower2"] = builds["#tempPower"];

builds["#tempPower3"] = builds["#tempPower"];

builds["#tempPower4"] = builds["#tempPower"];
