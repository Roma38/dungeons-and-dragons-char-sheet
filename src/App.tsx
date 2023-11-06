import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button>Click Me</Button>
      <Button primary>Click Me</Button>
      <Button loading>Click Me</Button>

      <Button disabled>Click Me</Button>
      <Button primary disabled>Click Me</Button>
    </div>
  );
}

export default App;
