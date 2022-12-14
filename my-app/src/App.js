import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import EventsFunctional from './components/EventsFunctional';
// import EventsClass from './components/EventsClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';
// import RenderingList from './components/RenderingList';
// import LifeCyclesCDM from './components/LifeCyclesCDM';
// import LifeCyclesCDU from './components/LifeCyclesCDU';
// import LifeCyclesCWU from './components/LifeCyclesCWU';
// import ControlledForm from './components/ControlledForm';
// import UnControlledForm from './components/UnControlledForm';
// import SearchBar from './components/SearchBar';
// import ControlledFormHooks from './components/ControlledFormHooks';
// import UseStateWithArrays from './components/UseStateWithArrays';
// import UseStateWithObjects from './components/UseStateWithObjects';
// import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
        <HTTPHooks />
        <hr/> <br/>
        <HTTPPost />
        <hr/> <br/>
        <HTTPRequests />
        <hr/> <br/>
        {/* <UseEffectCounterContainer />
        <hr/> <br/>
        <UseStateWithObjects />
        <hr/> <br/>
        <UseStateWithArrays />
        <hr/> <br/>
        <ControlledFormHooks />
        <hr/> <br/>
        <SearchBar />
        <hr/> <br/>
        <UnControlledForm />
        <hr/> <br/>
        <ControlledForm />
        <hr/> <br/>
        <FunctionalGreeting />
        <hr/> <br/>
        <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bozkurt" age="40" />
        <hr/> <br/>
        <StatefulGreeting name="Bozkurt" greeting="This is a stateful greeting" />  
        <hr/> <br/>
        <EventsFunctional />
        <hr/> <br/>
        <EventsClass />
        <hr/> <br/>
        <ConditionalRenderingFunctional connected={false} />
        <hr/> <br/>
        <ConditionalRenderingClass />
        <hr/> <br/>
        <NestingComponents />
        <hr/> <br/>
        <MethodsAsPropsParent />
        <hr/> <br/>
        <RenderingList />
        <hr/> <br/>
        <LifeCyclesCDM />
        <hr/> <br/>
        <LifeCyclesCDU />
        <hr/> <br/>
        <LifeCyclesCWU />
        <hr/> <br/>         */}
    </div>
  );
}

export default App;
