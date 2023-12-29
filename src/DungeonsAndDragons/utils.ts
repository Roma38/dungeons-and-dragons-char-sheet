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
  ChangeHitDice = "ChangeHitDice",
}

export type TCombatValues = Omit<ICombat, 'deathSaves' | 'attacks' | 'hitDice'>;

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

export interface HitDiceFormAction {
  type: FormActionTypes.ChangeHitDice;
  index: number;
  value: ICombat['hitDice'][number];
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
  | AttackFormAction
  | HitDiceFormAction;

export function formReducer(state: ICharacterSheet, action: FormActions) {
  const stateClone = structuredClone(state);
  
  switch (action.type) {
    case FormActionTypes.ChangeInfo: {
      if (action.key === "experiencePoints") {
        stateClone.info.experiencePoints = Number(action.value);
        const {level, proficiencyBonus} = getLevelAndProficiencyBonus(Number(action.value));
        stateClone.info.level = level;
        stateClone.stats.proficiencyBonus = proficiencyBonus;
      } else {
        stateClone.info[action.key] = action.value; //@TODO: resolve
      }
      return stateClone;
    }
    case FormActionTypes.ChangeAbility: {
      stateClone.abilytyScores[action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeStats: {
      stateClone.stats[action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeSavingThrow: {
      stateClone.savingThrows[action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeSkill: {
      stateClone.skills[action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeBackstory: {
      stateClone.backstory[action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeCombat: {
      stateClone.combat[action.key] = action.value; //@TODO: resolve
      return stateClone;
    }
    case FormActionTypes.ChangeDeathSave: {
      stateClone.combat.deathSaves[action.key][action.index] =
        !stateClone.combat.deathSaves[action.key][action.index];
      return stateClone;
    }
    case FormActionTypes.ChangeAttack: {
      stateClone.combat.attacks[action.index][action.key] = action.value;
      return stateClone;
    }
    case FormActionTypes.ChangeHitDice: {
      stateClone.combat.hitDice[action.index] = action.value;
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
        class: "Barbarian",
        level: 1,
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
        proficiencyBonus: 2,
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
        hitDice: [1, 4, 0],
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

    function getLevelAndProficiencyBonus(exp: IInfo['experiencePoints']): { level: IInfo['level'], proficiencyBonus: IStats['proficiencyBonus']} {
      switch (true) {
        case exp < 300:
          return {level: 1, proficiencyBonus: 2};
        case exp < 900:
          return {level: 2, proficiencyBonus: 2};
        case exp < 2700:
          return { level: 3, proficiencyBonus: 2 };
        case exp < 6500:
          return { level: 4, proficiencyBonus: 2 };
        case exp < 14000:
          return { level: 5, proficiencyBonus: 3 };
        case exp < 23000:
          return { level: 6, proficiencyBonus: 3 };
        case exp < 34000:
          return { level: 7, proficiencyBonus: 3 };
        case exp < 48000:
          return { level: 8, proficiencyBonus: 3 };
        case exp < 64000:
          return { level: 9, proficiencyBonus: 4 };
        case exp < 85000:
          return { level: 10, proficiencyBonus: 4 };
        case exp < 100000:
          return { level: 11, proficiencyBonus: 4 };
        case exp < 120000:
          return { level: 12, proficiencyBonus: 4 };
        case exp < 140000:
          return { level: 13, proficiencyBonus: 5 };
        case exp < 165000:
          return { level: 14, proficiencyBonus: 5 };
        case exp < 195000:
          return { level: 15, proficiencyBonus: 5 };
        case exp < 225000:
          return { level: 16, proficiencyBonus: 5 };
        case exp < 265000:
          return { level: 17, proficiencyBonus: 6 };
        case exp < 305000:
          return { level: 18, proficiencyBonus: 6 };
        case exp < 355000:
          return { level: 19, proficiencyBonus: 6 };
        default:
          return { level: 20, proficiencyBonus: 6 };
      }
    }