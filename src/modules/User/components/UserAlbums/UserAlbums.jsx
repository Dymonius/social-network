import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUserAlbums} from "./userAlbumsSlice";
import {useParams} from "react-router-dom";
import UserAlbum from "../UserAlbum/UserAlbum";

const UserAlbums = () => {
    const currentUser = useParams();
    const dispatch = useDispatch();
    const userAlbums = useSelector(state => state.userAlbums.userAlbums);

    useEffect(() => {
        dispatch(fetchUserAlbums(currentUser.id));

    }, []);
    return (
        <>
            {userAlbums.map(userAlbum => (
                <UserAlbum key={userAlbum.id} {...userAlbum}/>
            ))
            }
        </>

    );
};

export default UserAlbums;