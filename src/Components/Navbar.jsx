import React, { use } from 'react'
import logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'
import { AuthContext } from '../Context/AuthProvider'
import { RxAvatar } from 'react-icons/rx'
import { toast, ToastContainer } from 'react-toastify'
const Navbar = () => {
    const link = <>
        <>
            <NavLink to="/"> <li className='ml-4 hover:underline text-[18px]'>Home</li></NavLink>
            <NavLink to="/collection"> <li className='ml-4 hover:underline text-[18px]'>Collection</li></NavLink>
            <NavLink to="/about"> <li className='ml-4 hover:underline text-[18px]'>About us</li></NavLink>
            <NavLink to="/privacy"> <li className='ml-4 hover:underline text-[18px]'>Privacy Policy</li></NavLink>
            <NavLink to="/contact"> <li className='ml-4 hover:underline text-[18px]'>Contact Us</li></NavLink>
        </>
    </>
    const { user, logout } = use(AuthContext);
    const signout = () => {
        logout()
            .then(() => {
                toast('Logged out successfully');
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}

                        </ul>
                    </div>
                    <Link to={'/'}>  <img className='w-35' src={logo} alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative group inline-block ml-2">
                            <div className="w-10 rounded-full ">
                                <img
                                    alt="User Avatar"
                                    src={user ? user.photoURL : 'https://i.ibb.co.com/gZDr8JVQ/266033.png'} />

                            </div>
                            <span className="absolute -right-15 mt-2 w-40 h-10 rounded-xl place-content-center p-2 hidden group-hover:block bg-gray-700 text-white text-sm">{user && user.displayName}</span>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    {user ? (
                        <button onClick={signout} className="btn btn-primary text-white">Logout</button>
                    ) : (
                        <Link to="/auth/login" className="btn btn-primary text-white">Login</Link>
                    )}
                    <ToastContainer/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
