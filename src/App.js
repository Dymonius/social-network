import {Routes, Route} from "react-router-dom";

import PostsList from './modules/PostsList/PostsList'
import TodoList from "./modules/TodoList/TodoList";
import UserList from "./modules/UserList/UserList";
import Navigation from "./modules/Navigation/Navigation";
import User from "./modules/User/User";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<PostsList/>}/>
                <Route path='todo' element={<TodoList/>}/>
                <Route path='users/*' element={<UserList/>}/>
                <Route path='users/:id/*' element={<User/>}/>
            </Route>
        </Routes>
    );
}

export default App;
