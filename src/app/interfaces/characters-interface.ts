import charactersData from "./../../../data/charactersData.json";

export interface CharactersInterface {
  id: Number;
  name: String;
  stats: [
    attack: Number,
    defense: Number,
    hp: Number,
    criticalRate: Number,
    criticalDamage: Number,
    physicalDammage: Number,
    elementalMastery: Number,
    energieRefill: Number,
    healingBonus: Number,
    cryoDamageBonus: Number,
    pyroDamageBonus: Number,
    geoDamageBonus: Number,
    anemoDamageBonus: Number,
    hydroDamageBonus: Number,
    electroDamageBonus: Number
  ];
}
