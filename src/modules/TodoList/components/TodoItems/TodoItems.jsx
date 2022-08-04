import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoItems = () => {
    const todos = useSelector(state => state.todos.todos)
    return (
        <ul className='todo__list'>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))
            }
        </ul>
    );
};

export default TodoItems;