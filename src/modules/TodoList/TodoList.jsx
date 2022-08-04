import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTodos} from "./todoSlice";
import TodoItems from "./components/TodoItems/TodoItems";
import InputField from "./components/InputField/InputField";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const {status, error} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({title}));
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            <h1>Todos List</h1>
            <InputField text={title} handleInput={setTitle} handleSubmit={addTask}/>
            {status === 'loading' && <h2>Loading</h2>}
            {error && <h2>Error: {error}</h2>}
            <TodoItems/>
        </div>
    );
}

export default TodoList;