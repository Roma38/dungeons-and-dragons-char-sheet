import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { IAttack } from '../types';
import { FormActionTypes, AttackFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  attacks: IAttack[];
  dispatch: React.Dispatch<AttackFormAction>;
}

function AttacksAndSpellcasting({ attacks, dispatch }: IProps) {
  const changeHandler: (key: keyof IAttack, index: number) => ChangeEventHandler<HTMLInputElement> = (key, index) => (e) => {
    const { value } = e.target;
    dispatch({ type: FormActionTypes.ChangeAttack, key, index, value })
  }

  return (
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
          {attacks.map((attack, index) => (
            <tr key={index}>
              {Object.entries(attack).map(([key, value]) => 
                <td key={key}>
                  <Input value={value} onChange={changeHandler(key as keyof IAttack, index)} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      ATTACKS & SPELLCASTING
    </div>
  );
}

export default AttacksAndSpellcasting;
