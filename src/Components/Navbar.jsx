import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import '../index.css'
const Navbar = () => {
    const link = <>
        <>
            <NavLink to="/"> <li className='ml-4 hover:underline'>Home</li></NavLink>
            <NavLink to="/collection"> <li className='ml-4 hover:underline'>Collection</li></NavLink>
            <NavLink to="/about"> <li className='ml-4 hover:underline'>About us</li></NavLink>
            <NavLink to="/privacy"> <li className='ml-4 hover:underline'>Privacy Policy</li></NavLink>
        </>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <img className='w-40' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="dropdown dropdown-end navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                   
                    <div>
                        <div className="btn">Sign Up</div>
                        <div className="btn">Login</div>
                    </div>
                     <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
