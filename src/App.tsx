import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputFielt/InputField';
import { ITodoType } from './components/data/tasksData';
import ShowTasks from './components/showTasks/ShowTasks';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodoType[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  }
  return (
    <>
      <section>
        <div className="container">
          <h1 className='header_h1'>Taskify</h1>
          <div className='input_div'>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <ShowTasks todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
