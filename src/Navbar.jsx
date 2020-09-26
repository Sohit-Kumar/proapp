import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='header'>
                <div className='header1'>
                    <NavLink exact activeClassName='active_class' className='nav' to='/' > Home </NavLink>
                    <NavLink exact activeClassName='active_class' className='nav' to='/resume'>  Resume </NavLink>
                    <NavLink exact activeClassName='active_class' className='nav' to='/services'> Services </NavLink>
                    <NavLink exact activeClassName='active_class' className='nav' to='/career'> Career </NavLink>
                </div>
                <div className='header2'>
                    <NavLink exact activeClassName='active_class' className='nav1' to='/login'> Login </NavLink>
                    <NavLink exact activeClassName='active_class' className='nav1' to='/signup'> Signup </NavLink>
                </div>



            </div>
        </>
    );
}

export default Navbar;