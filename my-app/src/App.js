import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bozkurt" age="40" />  
    </div>
  );
}

export default App;
