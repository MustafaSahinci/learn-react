import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bozkurt" age="40" />
        <StatefulGreeting name="Bozkurt" greeting="This is a stateful greeting" />  
    </div>
  );
}

export default App;
