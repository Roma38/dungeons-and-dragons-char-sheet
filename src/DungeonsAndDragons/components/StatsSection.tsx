import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { IStats } from '../types';
import { FormActionTypes, StatsFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  stats: IStats;
  dispatch: React.Dispatch<StatsFormAction>;
}

function StatsSection({ stats, dispatch }: IProps) {
  const changeHandler: (key: keyof IStats) => ChangeEventHandler<HTMLInputElement> = key => e => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeStats, key, value })
  }

  return (
    <div className={style.wrapper}>
      <div className={style.second_column}>
        <label className={style.large_number_field}>
          <Input type="number" value={stats.inspiration} onChange={changeHandler('inspiration')} />
          <span>INSPIRATION</span>
        </label>

        <label className={style.large_number_field}>
          <Input type="number" value={stats.proficiencyBonus} onChange={changeHandler('proficiencyBonus')} />
          <span>PROFICIENCY BONUS</span>
        </label>
      </div>

      <div className={style.frames}>
        <label className={style.frame}>
          <Input 
            type="number" 
            value={stats.armorClass} 
            onChange={changeHandler('armorClass')} 
            min={0}
          />
          ARMOR CLASS
        </label>

        <label className={style.frame}>
          <Input 
            type="number" 
            value={stats.initiative} 
            onChange={changeHandler('initiative')} 
            min={0}
          />
          INITIATIVE
        </label>

        <label className={style.frame}>
          <Input
            type="number"
            value={stats.speed}
            onChange={changeHandler('speed')}
            min={0}
          />
          SPEED
        </label>
      </div>
    </div>
  );
}

export default StatsSection;
