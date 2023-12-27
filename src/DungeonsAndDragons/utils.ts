import { ICharacterSheet, IInfo, IAbilityScores } from "./types";

export enum FormActionTypes {
  ChangeInfo = "ChangeInfo",
  ChangeAbility = "ChangeAbility",
}

export interface InfoFormAction {
  type: FormActionTypes.ChangeInfo;
  key: keyof IInfo;
  value: IInfo[keyof IInfo];
}

export interface AbilityFormAction {
  type: FormActionTypes.ChangeAbility;
  key: keyof IAbilityScores;
  value: IAbilityScores[keyof IAbilityScores];
}

export type FormActions = InfoFormAction | AbilityFormAction;


export function formReducer(state: ICharacterSheet, action: FormActions) {
  const {type, key, value} = action;
  const stateClone = structuredClone(state);
  
  switch (type) {
    case FormActionTypes.ChangeInfo: {
      stateClone.info[key] = value; //@TODO: resolve
      return stateClone;
    }
    case FormActionTypes.ChangeAbility: {
      stateClone.abilytyScores[key] = value;
      return stateClone;
    }
    default:
      return state;
  }
}
export const initFormState: ICharacterSheet = {
  info: {
    characterName: "",
    classAndLevel: "",
    background: "",
    playerName: "",
    race: "Dragonborn",
    alignment: "Lawful good",
    experiencePoints: 0,
  },
  abilytyScores: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  stats: {
    inspiration: 0,
    proficiencyBonus: 0,
    armorClass: 0,
    initiative: 0,
    speed: 0,
  },
  savingThrows: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    passiveWisdom: 0,
  },
  skills: {
    acrobatics: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0,
  },
  combat: {
    hitPointMaximum: 0,
    currentHitPoints: 0,
    temporaryHitPoints: 0,
    total: 0,
    hitDice: "",
    deathSaves: {
      successes: [false, false, false],
      failures: [false, false, false],
    },
    attacks: [
      {
        name: "",
        atkBonus: "",
        damageOrType: "",
      },
      {
        name: "",
        atkBonus: "",
        damageOrType: "",
      },
      {
        name: "",
        atkBonus: "",
        damageOrType: "",
      }
    ],
  },
  backstory: {
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    equipment: '',
    featuresAndTraits: '',
    otherProficiencies: ''
  }
};