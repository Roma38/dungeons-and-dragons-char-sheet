import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { ICombat } from '../types';
import { FormActionTypes, DeathSavesFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  deathSaves: ICombat['deathSaves'];
  dispatch: React.Dispatch<DeathSavesFormAction>;
}

function DeathSaves({ deathSaves, dispatch }: IProps) {
  const changeHandler: (key: keyof ICombat['deathSaves'], index: number) => ChangeEventHandler<HTMLInputElement> = (key, index) => () => {
    dispatch({ type: FormActionTypes.ChangeDeathSave, key, index })
  }

  return (
    <div className={ style.bordered_section }>
      <div className={style.checkbox_group}>
        SUCCESSES
        {deathSaves.successes.map((isChecked, index) => (
          <Input
            key={index}
            type='checkbox' 
            checked={isChecked} 
            onChange={changeHandler('successes', index)} 
          />
        ))}
      </div>

      <div className={style.checkbox_group}>
        FAILURES
        {deathSaves.failures.map((isChecked, index) => (
          <Input 
            key={index}
            type='checkbox' 
            checked={isChecked} 
            onChange={changeHandler('failures', index)} 
          />
        ))}
      </div>
      DEATH SAVES
    </div >
  );
}

export default DeathSaves;
