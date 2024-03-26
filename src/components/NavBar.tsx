import React, { useState } from 'react';
import { Dropdown } from 'react-daisyui';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-base-100 mb-40 shadow-xl rounded-box ghost">
            <div className="container mx-auto px-4 relative" data-theme="valentine">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center relative">
                        <button className="btn btn-ghost btn-circle" tabIndex={0} onClick={toggleDropdown}>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        <div className={`dropdown-menu absolute ${isOpen ? '' : 'hidden'} z-[1] top-full left-0 mt-2`}>
                            <Dropdown.Menu className="menu sm:w-52 mt-3">
                                <Link to="/mainpage">Homepage</Link>
                                <Link to="/bandpage">Bands</Link>
                                <Link to="/bookingpage">Booking</Link>
                            </Dropdown.Menu>
                        </div>
                    </div>
                    <div>
                        <p className="btn btn-ghost text-xl">Band-Aid</p>
                    </div>
                    <div className="flex items-center">
                        <button className="btn btn-ghost btn-circle">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <a href="#" className="btn btn-ghost text-xl">Login</a>
                        <a href="#" className="btn btn-ghost text-xl">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
