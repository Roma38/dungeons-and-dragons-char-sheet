import { ICharacterSheet, IInfo, IAbilityScores, IStats, ISavingThrows, ISkills, IBackstory } from "./types";

export enum FormActionTypes {
  ChangeInfo = "ChangeInfo",
  ChangeAbility = "ChangeAbility",
  ChangeStats = "ChangeStats",
  ChangeSavingThrow = "ChangeSavingThrow",
  ChangeSkill = "ChangeSkill",
  ChangeBackstory = "ChangeBackstory",
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

export interface StatsFormAction {
  type: FormActionTypes.ChangeStats;
  key: keyof IStats;
  value: IStats[keyof IStats];
}

export interface SavingThrowFormAction {
  type: FormActionTypes.ChangeSavingThrow;
  key: keyof ISavingThrows;
  value: ISavingThrows[keyof ISavingThrows];
}

export interface SkillFormAction {
  type: FormActionTypes.ChangeSkill;
  key: keyof ISkills;
  value: ISkills[keyof ISkills];
}

export interface BackstoryFormAction {
  type: FormActionTypes.ChangeBackstory;
  key: keyof IBackstory;
  value: IBackstory[keyof IBackstory];
}

export type FormActions =
  | InfoFormAction
  | AbilityFormAction
  | StatsFormAction
  | SavingThrowFormAction
  | SkillFormAction
  | BackstoryFormAction;


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
    case FormActionTypes.ChangeStats: {
      stateClone.stats[key] = value;
      return stateClone;
    }
    case FormActionTypes.ChangeSavingThrow: {
      stateClone.savingThrows[key] = value;
      return stateClone;
    }
    case FormActionTypes.ChangeSkill: {
      stateClone.skills[key] = value;
      return stateClone;
    }
    case FormActionTypes.ChangeBackstory: {
      stateClone.backstory[key] = value;
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
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
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