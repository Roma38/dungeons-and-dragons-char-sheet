import { FormEvent, useReducer } from "react";
import { Button } from '../components';
import { TopSection, AbilytySection, StatsSection, SkillsAndSavingThrowsSection, CombatSection, BackstorySection, ImportAndExport } from './components';
import { initFormState, formReducer } from "./utils";
import style from "./DungeonsAndDragons.module.scss";

function DungeonsAndDragons() {
  const [state, dispatch] = useReducer(formReducer, initFormState);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    localStorage.setItem('character_sheet', JSON.stringify(state));
  };
  
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <TopSection info={state.info} dispatch={dispatch} />
      <div className={style.wrapper}>
        <AbilytySection abilytyScores={state.abilytyScores} dispatch={dispatch} />
        <div className={style.column}>
          <StatsSection stats={state.stats} dispatch={dispatch} />
          <div className={style.settings_wrapper}>
            <SkillsAndSavingThrowsSection 
              skills={state.skills} 
              savingThrows={state.savingThrows} 
              otherProficiencies={state.backstory.otherProficiencies}
              dispatch={dispatch}
            />
            <CombatSection 
              combat={state.combat} 
              equipment={state.backstory.equipment} 
              dispatch={dispatch}  
            />
          </div>
        </div>
        <BackstorySection backstory={state.backstory} dispatch={dispatch} />
      </div>
      <div className={style.submit_button_wrapper}>
        <Button type="submit" primary>Submit</Button>
      </div>
      <ImportAndExport data={state} dispatch={dispatch} />
    </form>
  );
}

export default DungeonsAndDragons;
