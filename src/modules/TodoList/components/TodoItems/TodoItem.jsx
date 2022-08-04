import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../../todoSlice";

const TodoItem = ({id, title, completed}) => {
    const dispatch= useDispatch();
    return (
        <li className='todo'>
            <input className='todo__check'
                   type="checkbox" checked={completed}
                   onChange={() => dispatch(toggleTodoComplete({id}))}
            />
            <span className='todo__text'>{title}</span>
            <span className='todo__delete' onClick={() => dispatch(removeTodo({id}))}>X</span>

        </li>
    );
};

export default TodoItem;