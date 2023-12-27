import { ICharacterSheet, IInfo, IAbilityScores, IStats, ISavingThrows, ISkills, IBackstory, ICombat, IAttack } from "./types";

export enum FormActionTypes {
  ChangeInfo = "ChangeInfo",
  ChangeAbility = "ChangeAbility",
  ChangeStats = "ChangeStats",
  ChangeSavingThrow = "ChangeSavingThrow",
  ChangeSkill = "ChangeSkill",
  ChangeCombat = "ChangeCombat",
  ChangeBackstory = "ChangeBackstory",
  ChangeDeathSave = "ChangeDeathSave",
  ChangeAttack = "ChangeAttack",
}

export type TCombatValues = Omit<ICombat, 'deathSaves' | 'attacks'>;

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

export interface CombatFormAction {
  type: FormActionTypes.ChangeCombat;
  key: keyof TCombatValues;
  value: TCombatValues[keyof TCombatValues];
}

export interface DeathSavesFormAction {
  type: FormActionTypes.ChangeDeathSave;
  key: keyof ICombat['deathSaves'];
  index: number;
}

export interface AttackFormAction {
  type: FormActionTypes.ChangeAttack;
  key: keyof IAttack;
  index: number;
  value: IAttack[keyof IAttack];
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
  | BackstoryFormAction
  | CombatFormAction
  | DeathSavesFormAction
  | AttackFormAction;


export function formReducer(state: ICharacterSheet, action: FormActions) {
  const {type, key} = action;
  const stateClone = structuredClone(state);
  
  switch (type) {
    case FormActionTypes.ChangeInfo: {
      stateClone.info[key] = action.value; //@TODO: resolve
      return stateClone;
    }
    case FormActionTypes.ChangeAbility: {
      stateClone.abilytyScores[key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeStats: {
      stateClone.stats[key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeSavingThrow: {
      stateClone.savingThrows[key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeSkill: {
      stateClone.skills[key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeBackstory: {
      stateClone.backstory[key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeCombat: {
      stateClone.combat[key] = action.value; //@TODO: resolve
      return stateClone;
    }
    case FormActionTypes.ChangeDeathSave: {
      stateClone.combat.deathSaves[key][action.index] =
        !stateClone.combat.deathSaves[key][action.index];
      return stateClone;
    }
    case FormActionTypes.ChangeAttack: {
      stateClone.combat.attacks[action.index][key] = action.value;
      return stateClone;
    }
    default:
      return state;
  }
}

const character_sheet = localStorage.getItem("character_sheet");
export const initFormState: ICharacterSheet = character_sheet
  ? JSON.parse(character_sheet)
  : {
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
          },
        ],
      },
      backstory: {
        personalityTraits: "",
        ideals: "",
        bonds: "",
        flaws: "",
        equipment: "",
        featuresAndTraits: "",
        otherProficiencies: "",
      },
    };