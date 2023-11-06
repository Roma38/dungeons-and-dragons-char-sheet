import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button>Click Me</Button>
      <Button primary>Click Me</Button>
      <Button loading>Click Me</Button>
      
      <Button disabled>Click Me</Button>
      <Button primary>Click Me</Button>
      
      <Button size='small'>Click Me</Button>
      <Button primary size='small'>Click Me</Button>
      <Button size='medium'>Click Me</Button>
      <Button primary size='medium'>Click Me</Button>
      <Button size='large'>Click Me</Button>
      <Button primary size='large'>Click Me</Button>
     
      <Button size='small' circle>Click Me</Button>
      <Button primary size='small' circle>Click Me</Button>
      <Button size='medium' circle>Click Me</Button>
      <Button primary size='medium' circle>Click Me</Button>
      <Button size='large' circle>Click Me</Button>
      <Button primary size='large' circle>Click Me</Button>
    </div>
  );
}

export default App;
