import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";


import { FaTableList } from "react-icons/fa6";

import '../styles/Sidebar.css'

const Sidebar = ({ closeSidebar }) => {
    const [openSubRoutes, setOpenSubRoutes] = useState({});

    const toggleSubRoutes = (path) => {
        setOpenSubRoutes(prev => ({
            ...prev,
            [path]: !prev[path]
        }));
    };

    const handleClick = () => {
        closeSidebar();
    };

    const routes = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaHome />,
        },
        {
            path: "/table",
            name: "Table",
            icon: <FaTableList />,
        },
        {
            path: "/saved",
            name: "Saved",
            icon: <AiFillHeart />,
        },
    ];

    return (
        <div className={`sidebar ${closeSidebar ? 'visible' : 'hidden'}`}>
            <div className='sidebar-header'>
                <div>
                    <button onClick={closeSidebar} className='sidebar-close-button'>
                        <FaWindowClose />
                    </button>
                </div>
            </div>


            <ul className='sidebar-menu'>
                {routes.map((route) => (
                    <li key={route.path} className='sidebar-menu-item'>
                        <div className=''>
                            <Link
                                to={route.path}
                                className='sidebar-menu-link'
                                onClick={handleClick}
                            >
                                <div className='text-xl'>{route.icon}</div>
                                <span>{route.name}</span>
                            </Link>
                            {route.subRoutes && (
                                <MdKeyboardArrowDown
                                    onClick={() => toggleSubRoutes(route.path)}
                                    className={`arrow-down ${openSubRoutes[route.path] ? 'rotate' : ''}`}
                                />
                            )}
                        </div>
                        {route.subRoutes && openSubRoutes[route.path] && (
                            <ul className='sidebar-submenu'>
                                {route.subRoutes.map((subRoute) => (
                                    <li key={subRoute.path} className='sidebar-submenu-item'>
                                        <Link
                                            to={subRoute.path}
                                            className='sidebar-submenu-link'
                                            onClick={handleClick}
                                        >
                                            <div className='text-base'>{subRoute.icon}</div>
                                            <span>{subRoute.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
