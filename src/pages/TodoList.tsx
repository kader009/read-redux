import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from '../redux/feature/TodoSlice';

const TodoList = () => {
  const [text, SetText] = useState('');
  const [Edittext, SetEditText] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos.todos);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      SetText('');
    }
  };

  const handleupdate = (id: number) => {
    if (text.trim()) {
      dispatch(updateTodo({ id, text }));
      SetText('');
      SetEditText(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="capitalize mb-2">Create list of task here</h1>
        <div>
          <input
            value={text}
            onChange={(e) => SetText(e.target.value)}
            type="text"
            className="p-1"
            placeholder="create task here.."
          />
          <button
            onClick={
              Edittext === null ? handleAdd : () => handleupdate(Edittext)
            }
            className="bg-blue-500 rounded text-white p-1 capitalize ms-2"
          >
            {Edittext === null ? 'Add task' : 'Update'}
          </button>
          <br />
          <ul className="mt-8">
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                className="space-y-3"
              >
                <span onClick={() => dispatch(toggleTodo(todo.id))}>
                  {todo.text}
                </span>
                <button
                  className="bg-black text-white p-1 rounded ms-2"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
                <button
                  className="bg-black text-white p-1 rounded ms-2"
                  onClick={() => {
                    SetEditText(todo.id);
                    SetText(todo.text);
                  }}
                >
                  update
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
