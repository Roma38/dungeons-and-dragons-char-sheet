import { FormEvent, useReducer } from "react";
import { Button, Input } from '../components';
import { TopSection } from './components';
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
        <section className={style.first_column}>
          <label className={style.frame}>
            STRENGTH
            <Input value={10} disabled/>
            <Input />
          </label>

          <label className={style.frame}>
            DEXTERITY
            <Input value={10} disabled/>
            <Input />
          </label>

          <label className={style.frame}>
            CONSTITUTION
            <Input value={10} disabled/>
            <Input />
          </label>

          <label className={style.frame}>
            INTELLIGENCE
            <Input value={10} disabled/>
            <Input />
          </label>

          <label className={style.frame}>
            WISDOM
            <Input value={10} disabled/>
            <Input />
          </label>

          <label className={style.frame}>
            CHARISMA
            <Input value={10} disabled/>
            <Input />
          </label>
        </section>

        <section className={style.second_column}>
          <div>
            <label className={style.large_number_field}>
              <Input />
              <span>INSPIRATION</span>
            </label>

            <label className={style.large_number_field}>
              <Input />
              <span>PROFICIENCY BONUS</span>
            </label>
          </div>

          <div className={style.small_fields_group}>
            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Strength
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Dexterity
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Constitution
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Intelligence
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Wisdom
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Charisma
            </label>
            SAVING THROWS
          </div>

          <div className={style.small_fields_group}>
            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Acrobatics
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Animal Handling
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Arcana
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Athletics
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Deception
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              History
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Insight
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Intimidation
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Investigation
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Medicine
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Nature
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Perception
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Performance
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Persuasion
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Religion
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Sleight of Hand
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Stealth
            </label>

            <label className={style.small_field}>
              <Input className={style.bottom_border_field} />
              Survival
            </label>
            SKILLS
          </div>

          <label className={style.large_number_field}>
            <Input />
            <span>PASSIVE WISDOM (PERCEPTION)</span>
          </label>

          <label className={style.column + ' align-center'}>
            <textarea rows={5} />
            OTHER PROFICIENCIES & LANGUAGES
          </label>
        </section>

        <section className={style.third_column}>  
          <div className={style.frames}>
            <label className={style.frame}>
              <Input />
              ARMOR CLASS
            </label>

            <label className={style.frame}>
              <Input />
              INITIATIVE
            </label>

            <label className={style.frame}>
              <Input />
              SPEED
            </label>
          </div>

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
