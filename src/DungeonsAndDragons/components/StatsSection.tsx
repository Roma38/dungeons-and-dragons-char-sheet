import { ChangeEvent } from 'react';
import { Input } from '../../components';
import { IStats } from '../types';
import { FormActionTypes, StatsFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";

interface IProps {
  stats: IStats;
  dispatch: React.Dispatch<StatsFormAction>;
}

function StatsSection({ stats, dispatch }: IProps) {
  const changeHandler = (key: keyof IStats, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch({ type: FormActionTypes.ChangeStats, key, value })
  }

  return (
    <div className={style.settings_wrapper}>
      <div className={style.second_col_top_section}>
        <label className={style.large_number_field}>
          <Input type="number" value={stats.inspiration} onChange={e => changeHandler('inspiration', e)} />
          <span>INSPIRATION</span>
        </label>

        <label className={style.large_number_field}>
          <Input value={`+${stats.proficiencyBonus}`} disabled />
          <span>PROFICIENCY BONUS</span>
        </label>
      </div>

      <div className={style.frames}>
        <label className={style.frame}>
          <Input 
            type="number" 
            value={stats.armorClass} 
            onChange={e => changeHandler('armorClass', e)} 
            min={0}
          />
          ARMOR CLASS
        </label>

        <label className={style.frame}>
          <Input 
            type="number" 
            value={stats.initiative} 
            onChange={e => changeHandler('initiative', e)} 
            min={0}
          />
          INITIATIVE
        </label>

        <label className={style.frame}>
          <Input
            type="number"
            value={stats.speed}
            onChange={e => changeHandler('speed', e)}
            min={0}
          />
          SPEED
        </label>
      </div>
    </div>
  );
}

export default StatsSection;
