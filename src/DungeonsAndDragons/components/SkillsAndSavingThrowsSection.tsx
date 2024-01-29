import { ChangeEvent } from 'react';
import { Input } from '../../components';
import { ISkills, ISavingThrows, IBackstory } from '../types';
import { FormActionTypes, SavingThrowFormAction, SkillFormAction, BackstoryFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  skills: ISkills;
  savingThrows: ISavingThrows;
  otherProficiencies: IBackstory['otherProficiencies'];
  dispatch: React.Dispatch<SavingThrowFormAction | SkillFormAction | BackstoryFormAction>;
}

function SkillsAndSavingThrowsSection({ skills, savingThrows, otherProficiencies, dispatch }: IProps) {
  const changeSavingThrowHandler = (key: keyof ISavingThrows, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeSavingThrow, key, value })
  };

  const changeSkillHandler = (key: keyof ISkills, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeSkill, key, value })
  };

  const changeBackstoryHandler = (key: keyof IBackstory, e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value })
  };

  const { passiveWisdom, ...rest } = savingThrows;
  const savingThrowsArray = Object.entries(rest) as [keyof ISavingThrows, ISavingThrows[keyof ISavingThrows]][];
  const skillsArray = Object.entries(skills) as [keyof ISkills, ISkills[keyof ISkills]][];
  return (
    <section className={style.second_column}>
      <div className={style.small_fields_group}>
        { savingThrowsArray.map(([key, value]) => (
          <label key={key} className={style.small_field}>
            <Input
              className={style.bottom_border_field}
              type="number"
              value={value}
              onChange={e => changeSavingThrowHandler(key, e)}
            />
            {key}
          </label>
        )) }
        SAVING THROWS
      </div>

      <div className={style.small_fields_group}>
        {skillsArray.map(([key, value]) => (
          <label key={key} className={style.small_field}>
            <Input
              className={style.bottom_border_field}
              type="number"
              value={value}
              onChange={e => changeSkillHandler(key, e)}
            />
            {key}
          </label>
        ))}
        SKILLS
      </div>
      
      <div className={style.section}>
        <label className={style.large_number_field}>
          <Input
            type="number"
            value={passiveWisdom}
            onChange={e => changeSavingThrowHandler('passiveWisdom', e)}
          />
          <span>PASSIVE WISDOM (PERCEPTION)</span>
        </label>

        <label className={style.column + ' align-center'}>
          <textarea rows={5} value={otherProficiencies} onChange={e => changeBackstoryHandler('otherProficiencies', e)} />
          OTHER PROFICIENCIES & LANGUAGES
        </label>
      </div>
    </section>
  );
}

export default SkillsAndSavingThrowsSection;
