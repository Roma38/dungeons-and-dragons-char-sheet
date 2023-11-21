import { Input } from '../';
import style from "./InputSection.module.scss";

const INPUT_TYPES = [
  'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number',
  'password', 'radio', 'range', 'search', 'tel', 'text', 'time', 'url', 'week', 'reset', 'submit'
];

function InputSection() {
  return (
    <div>
      <h2>Input Component</h2>
      <section>
        <h3>Basic Input</h3>
        <Input />
      </section> 
      
      <section className={style.size_section}>
        <h3>Size Property</h3>
        <Input inputSize='small' placeholder='Small' />
        <Input inputSize='medium' placeholder='Medium' />
        <Input inputSize='large' placeholder='Large' />
      </section>

      <section className={style.type_section}>
        <h3>Types of Input</h3>
        <form onSubmit={e => e.preventDefault()}>
          {INPUT_TYPES.map(type => (
            <label key={type}>
              <code>{type}</code>
              <Input type={type} name={type} />
            </label>)) }
        </form>
      </section> 
    </div>
  );
}

export default InputSection;
