import React from 'react';

const UserAlbum = ({...userAlbum}) => {
    return (
        <div className='card'>
            <h5>ID: {userAlbum.id}</h5>
            <div>Title: {userAlbum.title}</div>
        </div>
    );
};

export default UserAlbum;