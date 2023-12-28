import { ChangeEventHandler } from 'react';
import { Input } from '../../components';
import { IInfo, TAlignment, TClass, TRace } from '../types';
import { FormActionTypes, InfoFormAction } from '../utils';
import style from "../DungeonsAndDragons.module.scss";
import inputStyles from "../../components/Input/Input.module.scss";


const RACES: TRace[] = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfing', 'Half-Orc', 'Human', 'Tiefling'];
const ALIGNMENTS: TAlignment[] = ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'True neutral', 'Chaotic neutral', 'Lawful evil', 'Neutral evil', 'Chaotic evil'];
const CLASSES: TClass[] = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

interface IProps {
  info: IInfo;
  dispatch: React.Dispatch<InfoFormAction>;
}

function TopSection({ info, dispatch }: IProps) {
  const changeHandler: (key: keyof IInfo) => ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = key => e => {
    const {value} = e.target;
    dispatch({ type: FormActionTypes.ChangeInfo, key, value })
  }

  return (
    <section className={style.top_section}>
      <label className={style.primary_field}>
        <Input value={info.characterName} onChange={changeHandler('characterName')} />
        CHARACTER NAME
      </label>

      <div className={style.top_section_fields}>
        <label>
          <div className={style.select_group}>
            <select
              className={inputStyles.input + ' ' + inputStyles.medium}
              value={info.class}
              onChange={changeHandler('class')}
            >
              {CLASSES.map(item => <option key={item}>{item}</option>)}
            </select>
            <Input value={info.level} disabled />
          </div>
          CLASS & LEVEL
        </label>

        <label>
          <Input value={info.background} onChange={changeHandler('background')} />
          BACKGROUND
        </label>

        <label>
          <Input value={info.playerName} onChange={changeHandler('playerName')} />
          PLAYER NAME
        </label>

        <label>
          <select 
            className={inputStyles.input + ' ' + inputStyles.medium}
            value={info.race}
            onChange={changeHandler('race')}
          >
            {RACES.map(race => <option key={race}>{race}</option>)}
          </select>
          RACE
        </label>

        <label>
          <select 
            className={inputStyles.input + ' ' + inputStyles.medium}
            value={info.alignment}
            onChange={changeHandler('alignment')}
          >
            {ALIGNMENTS.map(alignment => <option key={alignment}>{alignment}</option>)}
          </select>
          ALIGNMENT
        </label>

        <label>
          <Input 
            type='number' 
            value={info.experiencePoints} 
            onChange={changeHandler('experiencePoints')} 
            min={0} 
          />
          EXPERIENCE POINTS
        </label>
      </div>
    </section>
  );
}

export default TopSection;
