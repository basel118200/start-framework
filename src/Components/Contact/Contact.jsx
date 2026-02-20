import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                {/* Title */}
                <h2 className="section-title text-center text-uppercase mb-0 mt-5 py-3">CONATCT SECTION</h2>

                {/* Divider */}
                <div className="section-divider divider-dark">
                    <i className="fas fa-star star-icon"></i>
                </div>

                {/* Form */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form className="contact-form">
                            {/* Name Input */}
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
                                    required
                                />
                                <label>userName:</label>
                            </div>

                            {/* Age Input */}
                            <div className="form-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="age"
                                    required
                                />
                                <label>userAge:</label>
                            </div>

                            {/* Email Input */}
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="email"
                                    required
                                />
                                <label>userEmail:</label>
                            </div>

                            {/* Password Input */}
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    required
                                />
                                <label>userPassword:</label>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <button
                                    className="submit-btn text-white text-uppercase"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
