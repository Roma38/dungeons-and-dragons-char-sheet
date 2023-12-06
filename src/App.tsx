import { useState } from 'react';
import { ButtonsSection, InputSection, Navigation } from './components';
import './App.css';

export type TComponentTab = "button" | "input";
export const COMPONENTS_TABS: TComponentTab[] = ['button', 'input'];

function App() {
  const [activeTab, setActiveTab] = useState(COMPONENTS_TABS[0]);
  return (
    <div className="App">
      <h1>Components Library</h1>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'button' && <ButtonsSection />}
      {activeTab === 'input' && <InputSection />}
    </div>
  );
}

export default App;
