import '../../styles/inputField/InputField.css';
import {AiOutlineClear} from 'react-icons/ai'

interface IProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: IProps) => {

  return (
    <form onSubmit={handleAdd} className='taskify_form'>
      <div className='taskify_div'>
        <input
          type='input'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter e task...'
          className='task_input'
          required
        />
        <button type='submit' className='btn add_task_btn' >Add</button>
        <button className='btn clear_btn' onClick={() => setTodo('')}><AiOutlineClear/></button>
      </div>
    </form>
  )
}

export default InputField
