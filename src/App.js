//import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer/>
        <TodoFormContainer></TodoFormContainer>
        <Filteroptions/>
      </header>
    </div>
  );
}

export default App;
