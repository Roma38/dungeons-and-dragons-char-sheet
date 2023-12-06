import { useState } from 'react';
import { Button } from '../';
import style from "./ButtonsSection.module.scss";

function ButtonsSection() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className={style.buttonsSection}>
      <h2>Button Component</h2>

      <section>
        <h3>Default and Primary Button</h3>
        <Button>Default Button</Button>
        <Button primary>Primary Button</Button>
      </section>

      <section>
        <h3>Disabled Button</h3>
        <Button disabled>Default Button</Button>
        <Button primary disabled>Primary Button</Button>
      </section>

      <section>
        <h3>Size Property</h3>
        <h4>Small</h4>
        <Button size='small'>Default</Button>
        <Button primary size='small'>Primary</Button>
        <h4>Medium</h4>
        <Button size='medium'>Default</Button>
        <Button primary size='medium'>Primary</Button>
        <h4>Large</h4>
        <Button size='large'>Default</Button>
        <Button primary size='large'>Primary</Button>
      </section>

      <section>
        <h3>Rounded Button</h3>
        <Button size='small' circle>Default</Button>
        <Button primary size='small' circle>Primary</Button>
        <Button size='medium' circle>Default</Button>
        <Button primary size='medium' circle>Primary</Button>
        <Button size='large' circle>Default</Button>
        <Button primary size='large' circle>Primary</Button>
      </section>

      <section>
        <h3>Loading</h3>
        <Button 
          size='small' 
          circle 
          loading={isLoading}
        >
          Click Me
        </Button>

        <Button 
          primary 
          size='small' 
          loading={isLoading} 
          onClick={() => setIsLoading(!isLoading)}
        >
          Click Me
        </Button>

        <Button 
          size='medium' 
          loading onClick={() => setIsLoading(!isLoading)}
        >
          Click Me
        </Button>

        <Button 
          primary 
          size='medium' 
          circle 
          loading={isLoading} 
          onClick={() => setIsLoading(!isLoading)}
        >
          Click Me
        </Button>

        <Button 
          size='large' 
          loading={isLoading} 
          onClick={() => setIsLoading(!isLoading)
        }>
          Click Me
        </Button>

        <Button 
          primary 
          size='large' 
          circle 
          loading={isLoading} 
          onClick={() => setIsLoading(!isLoading)}
        >
          Click Me
        </Button>
      </section>
    </div>
  );
}

export default ButtonsSection;
