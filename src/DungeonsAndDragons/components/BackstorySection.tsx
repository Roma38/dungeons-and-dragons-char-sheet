import { ChangeEvent } from 'react';
import { IBackstory } from '../types';
import { FormActionTypes, BackstoryFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  backstory: IBackstory;
  dispatch: React.Dispatch<BackstoryFormAction>;
}

function BackstorySection({ backstory, dispatch }: IProps) {
  const changeHandler = (key: keyof IBackstory, e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value })
  };

  return (
    <section className={style.fourth_column}>
      <label className={style.column}>
        <textarea value={backstory.personalityTraits} onChange={e => changeHandler('personalityTraits', e)} rows={5} />
        PERSONALITY TRAITS
      </label>

      <label className={style.column}>
        <textarea value={backstory.ideals} onChange={e => changeHandler('ideals', e)} rows={5} />
        IDEALS
      </label>

      <label className={style.column}>
        <textarea value={backstory.bonds} onChange={e => changeHandler('bonds', e)} rows={5} />
        BONDS
      </label>

      <label className={style.column}>
        <textarea value={backstory.flaws} onChange={e => changeHandler('flaws', e)} rows={5} />
        FLAWS
      </label>

      <label className={style.column}>
        <textarea value={backstory.featuresAndTraits} onChange={e => changeHandler('featuresAndTraits', e)} rows={15} />
        FEATURES & TRAITS
      </label>
    </section>
  );
}

export default BackstorySection;
