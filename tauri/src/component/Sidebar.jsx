import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
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
            icon: <FaUser />,
        },
        {
            path: "/messages",
            name: "Messages",
            icon: <MdMessage />,
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <BiAnalyse />,
        },
        {
            path: "/file-manager",
            name: "File Manager",
            icon: <AiTwotoneFileExclamation />,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
        },
        {
            path: "/order",
            name: "Order",
            icon: <BsCartCheck />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <BiCog />,
            exact: true,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
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
                <div className='sidebar-profile'>
                    <CgProfile className='text-3xl' />
                    <div>
                        <span>Hello</span>
                        <button>Sign in</button>
                    </div>
                </div>

                <button onClick={closeSidebar} className='sidebar-close-button'>
                    <FaWindowClose />
                </button>
            </div>

            <ul className='sidebar-menu'>
                {routes.map((route) => (
                    <li key={route.path} className='sidebar-menu-item'>
                        <div className='flex items-center justify-between'>
                            <Link
                                to={route.path}
                                className='sidebar-menu-link'
                                onClick={handleClick} // Close sidebar on click
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
                                            onClick={handleClick} // Close sidebar on click
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
