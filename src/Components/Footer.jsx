import React from 'react'
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <NavLink to="/about" className="link link-hover">About us</NavLink>
                    <NavLink to="/contact" className="link link-hover">Contact</NavLink>
                    <NavLink to="/privacy" className="link link-hover">Privacy Policy</NavLink>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com" target="_blank">
                            <FaFacebookF size={25} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <FaSquareXTwitter size={25} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank">
                            <FaYoutube size={25} />
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-xl archivo'>Learn<span className='text-red-500 font-bold'>24/7</span></span> </p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
