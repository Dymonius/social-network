import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../../modules/TodoList/todoSlice';
import postsReducer from '../../modules/PostsList/postsSlice';
import usersReducer from '../../modules/UserList/usersSlice';
import userReducer from '../../modules/User/userSlice';
import userAlbumsReducer from '../../modules/User/components/UserAlbums/userAlbumsSlice';
import userTodosReducer from '../../modules/User/components/UserTodos/userTodosSlice';
import userPostsReducer from '../../modules/User/components/UserPosts/userPostsSlice';


export default configureStore({
    reducer: {
        todos: todoReducer,
        posts: postsReducer,
        users: usersReducer,
        user: userReducer,
        userAlbums: userAlbumsReducer,
        userTodos: userTodosReducer,
        userPosts: userPostsReducer,
    },
})