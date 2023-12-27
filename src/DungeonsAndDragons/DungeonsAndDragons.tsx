import { FormEvent, useReducer } from "react";
import { Button, Input } from '../components';
import { TopSection, AbilytySection, StatsSection, SkillsAndSavingThrowsSection } from './components';
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

            <section className={style.third_column}>
              <div className={style.bordered_section}>
                <label className="display-flex">
                  Hit Point Maximum
                  <Input className={style.bottom_border_field} />
                </label>

                <label>
                  <Input />
                  CURRENT HIT POINTS
                </label>
              </div>

              <div className={style.bordered_section}>
                <label>
                  <Input />
                  TEMPORARY HIT POINTS
                </label>
              </div>

              <div className={style.boxes}>
                <div className={style.bordered_section}>
                  <label className="display-flex">
                    Total
                    <Input className={style.bottom_border_field} />
                  </label>

                  <Input />
                  HIT DICE
                </div>

                <div className={style.bordered_section}>
                  <div className={style.checkbox_group}>
                    SUCCESSES
                    <Input type='checkbox' />
                    <Input type='checkbox' />
                    <Input type='checkbox' />
                  </div>

                  <div className={style.checkbox_group}>
                    FAILURES
                    <Input type='checkbox' />
                    <Input type='checkbox' />
                    <Input type='checkbox' />
                  </div>
                  DEATH SAVES
                </div>
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
                <textarea rows={5} />
                EQUIPMENT
              </label>
            </section>
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
