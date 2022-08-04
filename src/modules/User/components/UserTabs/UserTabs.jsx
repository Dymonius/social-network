import React, {useState} from 'react';
import './UserTabs.css'
import UserAlbums from "../UserAlbums/UserAlbums";
import UserTodos from "../UserTodos/UserTodos";
import UserPosts from "../UserPosts/UserPosts";

const UserTabs = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='tabs-container'>
            <div>
                <div
                    onClick={() => toggleTab(1)}
                    className={toggleState === 1 ? "tabs active" : "tabs"}>
                    Albums
                </div>
                <div
                    onClick={() => toggleTab(2)}
                    className={toggleState === 2 ? "tabs active" : "tabs"}>
                    Todos
                </div>
                <div
                    onClick={() => toggleTab(3)}
                    className={toggleState === 3 ? "tabs active" : "tabs"}>
                    Posts
                </div>
            </div>
            <div className="container">
                {toggleState === 1 && <UserAlbums/>}
                {toggleState === 2 && <UserTodos/>}
                {toggleState === 3 && <UserPosts/>}

            </div>
        </div>
    );
};

export default UserTabs;