import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
        <NavLink
        to={to}
        className={({isActive}) => isActive ? "text-red-500 mx-2" : "mx-2"}
        >
       {children}
        </NavLink>
        </div>
    );
};

export default ActiveLink;