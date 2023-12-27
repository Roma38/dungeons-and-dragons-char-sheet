import { FormEvent, useReducer } from "react";
import { Button } from '../components';
import { TopSection, AbilytySection, StatsSection, SkillsAndSavingThrowsSection, CombatSection } from './components';
import { initFormState, formReducer } from "./utils";
import style from "./DungeonsAndDragons.module.scss";


function DungeonsAndDragons() {
  const [state, dispatch] = useReducer(formReducer, initFormState);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log(state);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <TopSection info={state.info} dispatch={dispatch}  />
      <div className={style.wrapper}>
        <AbilytySection abilytyScores={state.abilytyScores} dispatch={dispatch} />
        <div className={style.column}>
          <StatsSection stats={state.stats} dispatch={dispatch} />
          <div className={style.wrapper}>
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

        <section className={style.fourth_column}>
          <label>
            <textarea rows={5} />
            PERSONALITY TRAITS
          </label>

          <label>
            <textarea rows={5} />
            IDEALS
          </label>

          <label>
            <textarea rows={5} />
            BONDS
          </label>

          <label>
            <textarea rows={5} />
            FLAWS
          </label>

          <label>
            <textarea rows={15} />
            FEATURES & TRAITS
          </label>
        </section>
      </div>
      <div className="align-center">
        <Button primary>Submit</Button>
      </div>
    </form>
  );
}

export default DungeonsAndDragons;
