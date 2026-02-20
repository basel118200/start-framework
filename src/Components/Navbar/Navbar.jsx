import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all ${isScrolled ? "py-2" : "py-4"}`}
            style={{ backgroundColor: "#2c3e50", transition: "padding 0.4s ease" }}>
            <div className="container">
                <Link className="navbar-brand fw-bolder fs-2 text-uppercase" to="/">
                    START FRAMEWORK
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-white text-uppercase fw-bold px-2 rounded-3" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-white text-uppercase fw-bold px-2 rounded-3" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase fw-bold px-2 rounded-3" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
