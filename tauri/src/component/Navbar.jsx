import React, { useContext, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { AuthContext } from '../context/ConfigContext';

const Navbar = () => {

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const userLoggedIn = localStorage.getItem('user');


    const [openSidebar, setOpenSidebar] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);

    const toggleSideBar = () => {
        setOpenSidebar(prev => !prev);
        console.log("Sidebar toggled");
    };

    const closeSidebar = () => {
        setOpenSidebar(false);
    };

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
                <FaBars onClick={toggleSideBar} />
                <Link to='/dashboard'>
                    <h4 className='logo-highlight'>LO<span className='logo-highlight'>GO</span>HERE</h4>
                </Link>
            </div>
            <div className='user-actions'>
                <div className='user-profile' onClick={toggleUserMenu}>
                    <CgProfile />
                </div>

                {openUserMenu && (
                    <div className='user-menu'>
                        <Link to="/user-profile" className='user-menu-item' onClick={() => setOpenUserMenu(false)}>
                            User Profile
                        </Link>
                        <div className='user-menu-item' onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                )}
            </div>

            {openSidebar && (
                <Sidebar closeSidebar={closeSidebar} />
            )}
        </div>
    );
}

export default Navbar;
