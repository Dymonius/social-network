import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <header>
                <NavLink to="/">Posts List</NavLink>
                <NavLink to="/todo">Todos List</NavLink>
                <NavLink to="/users">Users List</NavLink>
            </header>
            <main className="container">
                <Outlet/>
            </main>
        </>
    );
};

export default Navigation;