


import React, { useContext, useState, useEffect } from "react";
import './Navbar.css';
import { assets } from '../../assets/assets';
import { NavLink } from "react-router-dom";
import { StoreContext } from "../../context/context";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setshowlogin }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 730);
    const { getTotalCartAmount, searchTerm, setSearchTerm } = useContext(StoreContext);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 730);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const NavLinks = () => (
        <>
            <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} onClick={() => setMenuOpen(false)}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} onClick={() => setMenuOpen(false)}>
                    Menu
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} onClick={() => setMenuOpen(false)}>
                    About Us
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`} onClick={() => setMenuOpen(false)}>
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    const handleSignInClick = () => {
        setshowlogin(true);
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white custom-navbar">
                <div className="container-fluid align-items-center">
                    {isMobile && (
                        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </div>
                    )}

                    <div className="navbar-center-logo">
                        <NavLink to='/' className="navbar-brand">
                            <img src={assets.logo} alt="logo" />
                        </NavLink>
                    </div>

                    {!isMobile && (
                        <ul className="navbar-nav nav-links-container">
                            <NavLinks />
                        </ul>
                    )}

                    <div className="right-icons">
                        {/* Desktop Search Input (left of search icon) */}
                        {!isMobile && searchActive && (
                            <input
                                type="text"
                                placeholder="Search food..."
                                className="search-input desktop-search-input left-of-icon"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        )}

                        {/* Search Icon */}
                        <button className="search_btn" onClick={() => setSearchActive(!searchActive)} aria-label="Toggle Search">
                            <img src={assets.search_icon} alt="search" />
                        </button>

                        {/* Cart Icon */}
                        <div className="cart me-2 position-relative">
                            <NavLink to='/cart'>
                                <img src={assets.basket_icon} alt="cart" />
                                {getTotalCartAmount() > 2 && <div className="dot"></div>}
                            </NavLink>
                        </div>

                        {/* Desktop Sign-in Button */}
                        {!isMobile && (
                            <button className="btn2 " onClick={handleSignInClick}>Sign in</button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Search Input */}
            {searchActive && isMobile && (
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search food..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                    />
                </div>
            )}

            {/* Animated Mobile Menu */}
            <div className={`mobile-menu-wrapper ${menuOpen ? "open" : "closed"}`}>
                <div className="mobile-menu">
                    <ul className="navbar-nav">
                        <NavLinks />
                    </ul>
                    <button className="btn2 mt-3" onClick={handleSignInClick}>Sign in</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
