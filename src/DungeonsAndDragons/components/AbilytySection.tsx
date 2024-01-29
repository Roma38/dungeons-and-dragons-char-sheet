import { ChangeEvent } from 'react';
import { Input } from '../../components';
import { IAbilityScores } from '../types';
import { FormActionTypes, AbilityFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  abilytyScores: IAbilityScores;
  dispatch: React.Dispatch<AbilityFormAction>;
}

function AbilytySection({ abilytyScores, dispatch }: IProps) {
  const changeHandler = (key: keyof IAbilityScores, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value) + 10;
    dispatch({ type: FormActionTypes.ChangeAbility, key, value })
  }
  const abilityScores = Object.entries(abilytyScores) as [keyof IAbilityScores, IAbilityScores[keyof IAbilityScores]][];

  return (
    <section className={style.first_column}>
      {abilityScores.map(([key, value]) => (
        <label key={key} className={style.frame}>
          {key}
          <Input value={value} disabled />
          {/* @TODO: display + sign */}
          <Input type="number" value={value - 10} onChange={e => changeHandler(key, e)} />
        </label>
      ))}
    </section>
  );
}

export default AbilytySection;
