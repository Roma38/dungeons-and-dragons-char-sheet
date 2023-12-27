import { ChangeEventHandler } from 'react';
import { IBackstory } from '../types';
import { FormActionTypes, BackstoryFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  backstory: IBackstory;
  dispatch: React.Dispatch<BackstoryFormAction>;
}

function BackstorySection({ backstory, dispatch }: IProps) {
  const changeHandler: (key: keyof IBackstory) => ChangeEventHandler<HTMLTextAreaElement> = key => e => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value })
  };

  return (
    <section className={style.fourth_column}>
      <label>
        <textarea value={backstory.personalityTraits} onChange={changeHandler('personalityTraits')} rows={5} />
        PERSONALITY TRAITS
      </label>

      <label>
        <textarea value={backstory.ideals} onChange={changeHandler('ideals')} rows={5} />
        IDEALS
      </label>

      <label>
        <textarea value={backstory.bonds} onChange={changeHandler('bonds')} rows={5} />
        BONDS
      </label>

      <label>
        <textarea value={backstory.flaws} onChange={changeHandler('flaws')} rows={5} />
        FLAWS
      </label>

      <label>
        <textarea value={backstory.featuresAndTraits} onChange={changeHandler('featuresAndTraits')} rows={15} />
        FEATURES & TRAITS
      </label>
    </section>
  );
}

export default BackstorySection;
