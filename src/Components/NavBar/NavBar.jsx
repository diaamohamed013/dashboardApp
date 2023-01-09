import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assests/images/logo.png'
import '../NavBar/NavBar.scss'

export default function () {
    return (
        <>
            {/* navbar for big screens */}
            <nav className='navBar'>
                <div className="top">
                    <div className="navbar-logo">
                        <div className="logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <h3>Motiv.</h3>
                    </div>
                    <div className="navbar-links">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/dashboard">
                                    <i className='fas fa-qrcode'></i>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='far fa-user-circle'></i>
                                    Assets
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/booking">
                                    <i className='fas fa-car'></i>
                                    Booking
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-bag-shopping'></i>
                                    Sell Cars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-cart-shopping'></i>
                                    Buy Cars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-calendar-days'></i>
                                    Calender
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-message'></i>
                                    Messages
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div className="navbar-links">
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-gear'></i>
                                    Settings
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    Log out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end of navbar for big screens */}

            {/* navbar for responsive screens */}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-logo">
                        <div className="logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <h3>Motiv.</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/dashboard">
                                    <i className='fas fa-qrcode'></i>
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='far fa-user-circle'></i>
                                    Assets
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/booking">
                                    <i className='fas fa-car'></i>
                                    Booking
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-bag-shopping'></i>
                                    Sell Cars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-cart-shopping'></i>
                                    Buy Cars
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-calendar-days'></i>
                                    Calender
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'active' : 'nav-link'
                                }
                                    to="/home">
                                    <i className='fas fa-message'></i>
                                    Messages
                                </NavLink>
                            </li>
                            <div className="nav-services">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="/home">
                                        <i className='fas fa-gear'></i>
                                        Settings
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) =>
                                        isActive ? 'active' : 'nav-link'
                                    }
                                        to="/home">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        Log out
                                    </NavLink>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* end of navbar for responsive screens */}

        </>



    )
}

