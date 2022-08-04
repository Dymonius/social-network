import './User.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import {fetchUser} from "./userSlice";
import UserInfo from "./components/UserInfo/UserInfo";
import UserTabs from "./components/UserTabs/UserTabs";

const User = () => {
    const currentUser = useParams();

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchUser(currentUser.id));
    }, []);


    return (
        <div className='user-details'>
            <UserInfo {...user}/>
            <UserTabs/>
        </div>
    );
}


export default User;