import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { DeathSaves, AttacksAndSpellcasting } from '.';
import { ICombat, IBackstory, TDice } from '../types';
import { FormActionTypes, CombatFormAction, BackstoryFormAction, TCombatValues, DeathSavesFormAction, AttackFormAction, HitDiceFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";
import inputStyles from "../../components/Input/Input.module.scss";

const DICES: TDice[] = [ 4, 6, 8, 10, 12, 20];

interface IProps {
  combat: ICombat;
  equipment: IBackstory['equipment'];
  dispatch: React.Dispatch<CombatFormAction | BackstoryFormAction | DeathSavesFormAction | AttackFormAction | HitDiceFormAction>;
}

function CombatSection({ combat, equipment, dispatch }: IProps) {
  const changeCombatHandler: (key: keyof TCombatValues) => ChangeEventHandler<HTMLInputElement> = key => e => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeCombat, key, value });
  };

  const changeBackstoryHandler: (key: keyof IBackstory) => ChangeEventHandler<HTMLTextAreaElement> = key => e => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value });
  };

  const changeHitDiceHandler: (index: number) => ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = index => e => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeHitDice, index, value });
  }

  return (
    <section className={style.third_column}>
      <div className={style.bordered_section}>
        <label className="display-flex">
          Hit Point Maximum
          <Input 
            className={style.bottom_border_field}
            type="number"
            value={combat.hitPointMaximum}
            onChange={changeCombatHandler('hitPointMaximum')}
            min={0}
          />
        </label>

        <label>
          <Input 
            type="number" 
            value={combat.currentHitPoints} 
            onChange={changeCombatHandler('currentHitPoints')} 
            min={0}
          />
          CURRENT HIT POINTS
        </label>
      </div>

      <div className={style.bordered_section}>
        <label>
          <Input 
            type="number" 
            value={combat.temporaryHitPoints} 
            onChange={changeCombatHandler('temporaryHitPoints')}
            min={0}
          />
          TEMPORARY HIT POINTS
        </label>
      </div>

      <div className={style.boxes}>
        <div className={style.bordered_section}>
          <label className="display-flex">
            Total
            <Input
              className={style.bottom_border_field}
              type="number"
              value={combat.total}
              onChange={changeCombatHandler('total')}
              min={0}
            />
          </label>
          <div className={style.inputs_group}>
            <Input 
              type="number" 
              value={combat.hitDice[0]} 
              onChange={changeHitDiceHandler(0)} 
              min={1}
            />

            <select
              className={inputStyles.input + ' ' + inputStyles.medium}
              value={combat.hitDice[1]}
              onChange={changeHitDiceHandler(1)}
            >
              {DICES.map(dice => <option key={dice} value={dice}>d{dice}</option>)}
            </select>

            <Input 
              type="number" 
              value={combat.hitDice[2]} 
              onChange={changeHitDiceHandler(2)} 
            />
          </div>
          HIT DICE
        </div>
        <DeathSaves deathSaves={combat.deathSaves} dispatch={dispatch} />
      </div>
      <AttacksAndSpellcasting attacks={combat.attacks} dispatch={dispatch} />

      <label className={style.column}>
        <textarea rows={5} value={equipment} onChange={changeBackstoryHandler('equipment')} />
        EQUIPMENT
      </label>
    </section>
  );
}

export default CombatSection;

