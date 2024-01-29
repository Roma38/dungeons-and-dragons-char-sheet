import { ChangeEvent } from 'react';
import { Input } from '../../components';
import { DeathSaves, AttacksAndSpellcasting } from '.';
import { ICombat, IBackstory } from '../types';
import { FormActionTypes, CombatFormAction, BackstoryFormAction, TCombatValues, DeathSavesFormAction, AttackFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  combat: ICombat;
  equipment: IBackstory['equipment'];
  dispatch: React.Dispatch<CombatFormAction | BackstoryFormAction | DeathSavesFormAction | AttackFormAction>;
}

function CombatSection({ combat, equipment, dispatch }: IProps) {
  const changeCombatHandler = (key: keyof TCombatValues, e: ChangeEvent<HTMLInputElement>) => {
    const value = key === 'hitDice' ? e.target.value : Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeCombat, key, value });
  };

  const changeBackstoryHandler = (key: keyof IBackstory, e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value });
  };

  return (
    <section className={style.third_column}>
      <div className={style.bordered_section}>
        <label className={style.secondary_field}>
          Hit Point Maximum
          <Input 
            className={style.bottom_border_field}
            type="number"
            value={combat.hitPointMaximum}
            onChange={e =>changeCombatHandler('hitPointMaximum', e)}
            min={0}
          />
        </label>

        <label>
          <Input 
            type="number" 
            value={combat.currentHitPoints} 
            onChange={e =>changeCombatHandler('currentHitPoints', e)} 
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
            onChange={e =>changeCombatHandler('temporaryHitPoints', e)}
            min={0}
          />
          TEMPORARY HIT POINTS
        </label>
      </div>

      <div className={style.boxes}>
        <div className={style.bordered_section}>
          <label className={style.secondary_field}>
            Total
            <Input
              className={style.bottom_border_field}
              type="number"
              value={combat.total}
              onChange={e =>changeCombatHandler('total', e)}
              min={0}
            />
          </label>

          <Input 
            value={combat.hitDice} 
            onChange={e =>changeCombatHandler('hitDice', e)}
            pattern='(\d+)?d(\d+)([\+\-]\d+)?'
          />
          HIT DICE
        </div>
        <DeathSaves deathSaves={combat.deathSaves} dispatch={dispatch} />
      </div>
      <AttacksAndSpellcasting attacks={combat.attacks} dispatch={dispatch} />

      <div className={style.section}>
        <label className={style.column}>
          <textarea rows={5} value={equipment} onChange={e =>changeBackstoryHandler('equipment', e)} />
          EQUIPMENT
        </label>
      </div>
    </section>
  );
}

export default CombatSection;

