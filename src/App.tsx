import { useState } from 'react';
import { Button, ButtonsSection, InputSection, Navigation, SliderSection } from './components';
import { DungeonsAndDragons } from './DungeonsAndDragons';
import './App.css';

export type TComponentTab = 'button' | 'input' | 'slider';
export const COMPONENTS_TABS: TComponentTab[] = ['button', 'input', 'slider'];

function App() {
  const [activeTab, setActiveTab] = useState(COMPONENTS_TABS[0]);
  const [isDragonsMode, setIsDragonsMode] = useState(true);
  
  return (
    <div className="App">
      <Button 
        className="mode-toggle" 
        onClick={() => setIsDragonsMode(!isDragonsMode)}
        primary
        circle
      >
        {isDragonsMode ? '←' : '→'}
      </Button>
      <h1>{isDragonsMode ? 'Dungeons And Dragons' : 'Components Library'}</h1>
      {isDragonsMode 
        ? <DungeonsAndDragons /> 
        : <>
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'button' && <ButtonsSection />}
            {activeTab === 'input' && <InputSection />}
            {activeTab === 'slider' && <SliderSection />}
          </>}
      
      <DungeonsAndDragons />
    </div>
  );
}

export default App;
