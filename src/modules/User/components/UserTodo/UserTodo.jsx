import './UserTodo.css'
import React from 'react';
import {toggleUserTodoComplete} from "../UserTodos/userTodosSlice";
import {useDispatch} from "react-redux";

const UserTodo = ({id, title, completed}) => {
    const dispatch= useDispatch();
    return (
        <label className='user-todo'>
            <input className='user-todo__check'
                   type="checkbox" checked={completed}
                   onChange={() => dispatch(toggleUserTodoComplete({id}))}
            />
            <span className='user-todo__text'>{title}</span>
        </label>
    );
};

export default UserTodo;