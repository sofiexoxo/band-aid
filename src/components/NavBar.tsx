import React, { useState } from 'react';
import { Dropdown } from 'react-daisyui';
import { Link } from 'react-router-dom';
import logo from "./../assets/images/bandaids.svg";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-base-100 shadow-xl rounded-box ghost mb-0 P-0 border-b-0 w-full ">
            <div className="relative" data-theme="valentine">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center relative">
                        <button className="btn btn-ghost btn-circle" tabIndex={0} onClick={toggleDropdown}>
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                        <div className={`dropdown-menu absolute ${isOpen ? '' : 'hidden'} z-[1] top-full left-0 mt-2`}>
                            <Dropdown.Menu className="menu sm:w-52 mt-3">
                                <Link to="/">Homepage</Link>
                                <Link to="/bandpage">Bands</Link>
                                <Link to="/bookingpage">Booking</Link>
                            </Dropdown.Menu>
                        </div>
                    </div>
                    <div className="flex items-center ml-40">
                        <p className="btn btn-ghost font-bold text-3xl">Band-Aid</p>
                        <img src={logo} alt="Logo" className="h-8 w-auto ml-2" />
                    </div>
                    <div className="flex items-center">
                        <Link to="/login" className='btn btn-ghost text-xl'>Login</Link>
                        <Link to="/register" className='btn btn-ghost text-xl'>Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
