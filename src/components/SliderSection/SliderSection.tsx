import { useState } from 'react';
import { Slider } from '../';

function SliderSection() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <h2>Slider Component</h2>

      <section>
        <h3>Basic Slider</h3>
        <Slider value={value} onChange={setValue}/>
      </section>
    </div>
  );
}

export default SliderSection;
