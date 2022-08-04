import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./usersSlice";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());

    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <div>
                {users.map(user => (
                    <div className="card" key={user.id}>
                        <h5>{user.name.toUpperCase()}</h5>
                        <div>Username: {user.username}</div>
                        <Link to={user.id.toString()}>User details</Link>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default UserList;