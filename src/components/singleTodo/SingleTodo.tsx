import React, { useState, useRef, useEffect } from 'react'
import '../../styles/singleTodo/SingleTodo.css';
import { ITodoType } from '../data/tasksData'
import { BiEditAlt } from 'react-icons/bi'
// import { MdOutlineNextPlan } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'


interface IProps {
  item: ITodoType;
  todos: ITodoType[];
  setTodos: React.Dispatch<React.SetStateAction<ITodoType[]>>;
}

const SingleTodo = ({ item, todos, setTodos}: IProps) => {
  const [edit, setEdit] = useState<boolean>(false);   // To check if Edit mode is ON or OFF
  const [editTodo, setEditTodo] = useState<string>(item.todo);   // To keep the value of the edited todo


  const handleDelete = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.filter((item) => item.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((item) => (
      item.id === id ? { ...item, todo: editTodo } : item
    )))
    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <>
    <form onSubmit={(e) => handleEdit(e, item.id)} className='singleTodo_form'>
      <div className='singleTodoform_div'>
        {
          edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className='edit_input'
            />
          ) : editTodo
        }
        <div className='btns_div'>
          <span className='span_btn edit' onClick={() => {
            if (!edit && !item.isDone) { setEdit(!edit) }
          }}><BiEditAlt /></span>
          <span className='span_btn delete' onClick={(e) => { handleDelete(e, item.id) }}><RiDeleteBinLine /></span>
        </div>
      </div>
    </form>
    </>
  )
}

export default SingleTodo