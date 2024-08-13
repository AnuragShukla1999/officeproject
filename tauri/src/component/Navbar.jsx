import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { AuthContext } from '../context/ConfigContext';

const Navbar = () => {

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    // const userLoggedIn = localStorage.getItem('user');


    // const [openSidebar, setOpenSidebar] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);

    // const toggleSideBar = () => {
    //     setOpenSidebar(prev => !prev);
    //     console.log("Sidebar toggled");
    // };

    // const closeSidebar = () => {
    //     setOpenSidebar(false);
    // };

    const toggleUserMenu = () => {
        setOpenUserMenu(prev => !prev);
        console.log("User menu toggled");
    };

    const handleLogout = () => {
        console.log("Logout clicked");
        logout();
        navigate('/');
        setOpenUserMenu(false)
    };

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
            </div>
            <div className='user-actions'>
                <div className='user-profile' onClick={toggleUserMenu}>
                    <CgProfile className='icon'/>
                </div>

                {openUserMenu && (
                    <div className='user-menu'>
                        <div className='user-menu-item' onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;