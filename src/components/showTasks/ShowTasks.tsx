import React, { useState } from 'react'
import '../../styles/showTasks/ShowTasks.css';
import { ITodoType } from '../data/tasksData';
import SingleTodo from '../singleTodo/SingleTodo';

interface IProps {
  todos: ITodoType[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoType[]>>;
}

const ShowTasks = ({ todos, setTodos }: IProps) => {
  const [word, setWord] = useState('');
  console.log(word)

  return (
    <>
      <div className='search_bar_div'>
        <input
          type='text'
          name='find'
          id='find'
          placeholder='Find task...'
          onChange={(e) => setWord(e.target.value)}
          className='search_bar'
        />
        <label htmlFor='find' className='search_bar_label'></label>
      </div>
      <div className='showTasks_div'>
        {
          todos.filter((item) => item.todo.toLocaleLowerCase().includes(word)).map((item) => (
            <SingleTodo
              item={item}
              key={item.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))
        }
      </div>
    </>
  )
}
export default ShowTasks