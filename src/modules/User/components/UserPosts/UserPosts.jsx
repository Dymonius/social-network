import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUserPosts} from "./userPostsSlice";

const UserPosts = () => {
    const currentUser = useParams();
    const dispatch = useDispatch();
    const userPosts = useSelector(state => state.userPosts.userPosts);

    useEffect(() => {
        dispatch(fetchUserPosts(currentUser.id));

    }, []);
    return (
        <div>
            {userPosts.map(post => (
                    <div className="card" key={post.id}>
                        <div className="post-list-card__user-id">User: {post.userId}</div>
                        <h5 className="post-list-card__title">{post.title.toUpperCase()}</h5>
                        <div className="post-list-card__body">{post.body}</div>
                    </div>
                )
            )
            }
        </div>
    );
};

export default UserPosts;