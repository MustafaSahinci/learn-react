import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingList from './components/RenderingList';

function App() {
  return (
    <div className="App">
        <FunctionalGreeting />
        <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bozkurt" age="40" />
        <StatefulGreeting name="Bozkurt" greeting="This is a stateful greeting" />  
        <EventsFunctional />
        <EventsClass />
        <ConditionalRenderingFunctional connected={false} />
        <ConditionalRenderingClass />
        <NestingComponents />
        <MethodsAsPropsParent />
        <RenderingList />
    </div>
  );
}

export default App;
