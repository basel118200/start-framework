import React from "react";

export default function Footer() {
    return (
        <>
            {/* Footer Top */}
            <section id="footer-top" className="py-5" style={{ backgroundColor: "#2c3e50" }}>
                <div className="container py-4">
                    <div className="row text-center text-white">
                        {/* Location */}
                        <div className="col-md-4 mb-5 mb-md-0">
                            <h3 className="fw-bold mb-3">LOCATION</h3>
                            <p className="mb-0">2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        {/* Social Icons */}
                        <div className="col-md-4 mb-5 mb-md-0">
                            <h3 className="fw-bold mb-3">AROUND THE WEB</h3>
                            <ul className="social-icons d-flex justify-content-center list-unstyled gap-2">
                                <li>
                                    <a href="#!" className="text-white border border-1 border-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", textDecoration: "none" }} aria-label="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white border border-1 border-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", textDecoration: "none" }} aria-label="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white border border-1 border-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", textDecoration: "none" }} aria-label="LinkedIn">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white border border-1 border-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", textDecoration: "none" }} aria-label="Dribbble">
                                        <i className="fas fa-globe"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* About Freelancer */}
                        <div className="col-md-4">
                            <h3 className="fw-bold mb-3">ABOUT FREELANCER</h3>
                            <p className="mb-0">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <footer id="footer-bottom" className="py-4" style={{ backgroundColor: "#1a252f" }}>
                <div className="container text-center text-white">
                    <p className="mb-0">Copyright © Your Website 2021</p>
                </div>
            </footer>
        </>
    );
}
