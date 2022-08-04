import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserTodos} from "./userTodosSlice";
import {useParams} from "react-router-dom";
import UserTodo from "../UserTodo/UserTodo";

const UserTodos = () => {
    const dispatch = useDispatch();
    const currentUser = useParams();
    const todos = useSelector(state => state.userTodos.userTodos)

    useEffect(() => {
        dispatch(fetchUserTodos(currentUser.id));
    }, []);

    return (
        <ul className='todo__list'>
            {
                todos.map(todo => (
                    <UserTodo
                        key={todo.id}
                        {...todo}
                    />
                ))
            }
        </ul>
    );
};

export default UserTodos;