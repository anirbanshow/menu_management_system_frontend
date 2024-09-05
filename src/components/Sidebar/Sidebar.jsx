import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { changesidebar } from '../../store/SidebarSlice';

const Sidebar = () => {

    const dispatch = useDispatch();
    const sidebarSelector = useSelector(state => state?.sidebar);

    function sidebarHandler(name) {
        dispatch(changesidebar(name));
    }

    return (
        <div className="menu_sidebar">

            <div className="top_area">
                <svg width={70} height={22} viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_907_143)">
                        <path d="M47.3547 0.429688H51.6828V21.0174H47.3547V0.429688Z" fill="white" fillOpacity="0.8" />
                        <path d="M54.7659 0.429688V4.40709H60.2189V21.0167H64.547V4.40709H70V0.429688H54.7659Z" fill="white" fillOpacity="0.8" />
                        <mask id="mask0_907_143" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={70} height={22}>
                            <path d="M0 0.429504H70V21.5709H0V0.429504Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_907_143)">
                            <path d="M26.864 15.8052V12.1029H19.6645V0.981262H15.6479V13.3748C15.6479 13.694 15.7107 14.01 15.8328 14.3049C15.9549 14.5999 16.1339 14.8678 16.3596 15.0935C16.5853 15.3192 16.8533 15.4982 17.1482 15.6203C17.4431 15.7425 17.7592 15.8053 18.0783 15.8052H26.864Z" fill="white" />
                            <path d="M35.4767 16.3591C37.0521 16.3593 38.5922 15.8922 39.9022 15.0171C41.2121 14.1419 42.2332 12.898 42.8362 11.4425C43.4391 9.98705 43.597 8.38547 43.2897 6.84031C42.9825 5.29514 42.2239 3.8758 41.11 2.76176C39.996 1.64772 38.5767 0.889033 37.0316 0.581634C35.4865 0.274234 33.8849 0.431933 32.4294 1.03479C30.9738 1.63764 29.7298 2.65857 28.8545 3.96847C27.9793 5.27838 27.5121 6.81841 27.5121 8.39383C27.512 9.43982 27.7179 10.4756 28.1182 11.442C28.5184 12.4084 29.105 13.2865 29.8446 14.0261C30.5842 14.7658 31.4622 15.3525 32.4286 15.7528C33.395 16.1531 34.4307 16.3591 35.4767 16.3591ZM35.4767 4.10913C36.5926 4.12334 37.6572 4.58021 38.4363 5.37926C39.2154 6.17831 39.6452 7.25411 39.6312 8.37003C39.6456 8.92468 39.5488 9.4766 39.3465 9.99324C39.1442 10.5099 38.8404 10.9808 38.4532 11.3782C38.066 11.7756 37.6032 12.0914 37.092 12.307C36.5807 12.5227 36.0315 12.6338 35.4767 12.6338C34.9218 12.6338 34.3726 12.5227 33.8614 12.307C33.3502 12.0914 32.8873 11.7756 32.5001 11.3782C32.1129 10.9808 31.8092 10.5099 31.6069 9.99324C31.4046 9.4766 31.3078 8.92468 31.3222 8.37003C31.3087 7.25423 31.739 6.17877 32.5183 5.38013C33.2977 4.58149 34.3623 4.12507 35.4781 4.11123" fill="white" />
                            <path d="M4.1202 11.2477C4.1202 9.5533 4.79331 7.92826 5.99147 6.7301C7.18962 5.53195 8.81466 4.85884 10.5091 4.85884H12.9689V0.982239H10.2942C7.56401 0.982239 4.94564 2.0668 3.0151 3.99734C1.08456 5.92788 0 8.54625 0 11.2764C0 14.0066 1.08456 16.625 3.0151 18.5555C4.94564 20.4861 7.56401 21.5706 10.2942 21.5706H43.442V17.6366H10.5091C8.81466 17.6366 7.18962 16.9635 5.99147 15.7654C4.79331 14.5672 4.1202 12.9422 4.1202 11.2477Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_907_143">
                            <rect width={70} height={21} fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18V16H16V18H3ZM19.6 17L14.6 12L19.6 7L21 8.4L17.4 12L21 15.6L19.6 17ZM3 13V11H13V13H3ZM3 8V6H16V8H3Z" fill="white" />
                </svg>
            </div>

            <nav>

                <div className={`mb-3 p-2 each_menu ${sidebarSelector === "systems" && 'active'} `}>
                    <h2 onClick={() => { sidebarHandler("systems") }}>
                        <i className="fa-solid fa-folder" />
                        System
                    </h2>
                    {
                        sidebarSelector === "systems" && (
                            <ul>
                                <li>
                                    <NavLink to="/system-code">
                                        <i className="fa-solid fa-bars" />
                                        System Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/properties">
                                        <i className="fa-solid fa-bars" />
                                        Properties
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menus">
                                        <i className="fa-solid fa-bars" />
                                        Menus
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/api-list">
                                        <i className="fa-solid fa-bars" />
                                        Api List
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>

                <div className={`mb-3 p-2 each_menu ${sidebarSelector === "userGroup" && 'active'} `}>
                    <h2 onClick={() => { sidebarHandler("userGroup") }}>
                        <i className="fa-solid fa-folder" />
                        User &amp; Group
                    </h2>
                    {
                        sidebarSelector === "userGroup" && (
                            <ul>
                                <li>
                                    <NavLink to="/users" className="active">
                                        <i className="fa-solid fa-bars" />
                                        users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/groups">
                                        <i className="fa-solid fa-bars" />
                                        groups
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }

                </div>

                <div className={`mb-3 p-2 each_menu ${sidebarSelector === "competition" && 'active'} `}>
                    <h2 onClick={() => { sidebarHandler("competition") }}>
                        <i className="fa-solid fa-folder" />
                        Competition
                    </h2>
                    {
                        sidebarSelector === "competition" && (
                            <ul>
                                <li>
                                    <NavLink to="/competitors" className="active">
                                        <i className="fa-solid fa-bars" />
                                        Competitors
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/analysis">
                                        <i className="fa-solid fa-bars" />
                                        Analysis
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>

            </nav>

        </div>
    )
}

export default Sidebar