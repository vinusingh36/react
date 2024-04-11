
import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';
import TodoItem from './Components/TodoItem';

function App() {
  return (
    <div className="App">
      <h2>React App</h2>
      <Todo />
      <TodoItem />
      <Counter />
    </div>
  );
}

export default App;
