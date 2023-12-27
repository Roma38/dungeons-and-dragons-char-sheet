import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { DeathSaves } from '.';
import { ICombat, IBackstory } from '../types';
import { FormActionTypes, CombatFormAction, BackstoryFormAction, TCombatValues, DeathSavesFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  combat: ICombat;
  equipment: IBackstory['equipment'];
  dispatch: React.Dispatch<CombatFormAction | BackstoryFormAction | DeathSavesFormAction>;
}

function CombatSection({ combat, equipment, dispatch }: IProps) {
  const changeCombatHandler: (key: keyof TCombatValues) => ChangeEventHandler<HTMLInputElement> = key => e => {
    const value = key === 'hitDice' ? e.target.value : Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeCombat, key, value })
  };

  const changeBackstoryHandler: (key: keyof IBackstory) => ChangeEventHandler<HTMLTextAreaElement> = key => e => {
    const value = e.target.value;
    dispatch({ type: FormActionTypes.ChangeBackstory, key, value })
  };

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
          />
        </label>

        <label>
          <Input 
            type="number" 
            value={combat.currentHitPoints} 
            onChange={changeCombatHandler('currentHitPoints')} 
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
            />
          </label>

          <Input value={combat.hitDice} onChange={changeCombatHandler('hitDice')} />
          HIT DICE
        </div>
        <DeathSaves deathSaves={combat.deathSaves} dispatch={dispatch} />
      </div>

      <div className={style.bordered_section}>
        <table border={0}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ATK BONUS</th>
              <th>DAMAGE/TYPE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Input /></td>
              <td><Input /></td>
              <td><Input /></td>
            </tr>

            <tr>
              <td><Input /></td>
              <td><Input /></td>
              <td><Input /></td>
            </tr>

            <tr>
              <td><Input /></td>
              <td><Input /></td>
              <td><Input /></td>
            </tr>
          </tbody>
        </table>
        ATTACKS & SPELLCASTING
      </div>

      <label className={style.column}>
        <textarea rows={5} value={equipment} onChange={changeBackstoryHandler('equipment')} />
        EQUIPMENT
      </label>
    </section>
  );
}

export default CombatSection;

