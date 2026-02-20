import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                        {/* Title */}
                        <h2 className="section-title">ABOUT COMPONENT</h2>

                        {/* White Divider */}
                        <div className="section-divider divider-white">
                            <i className="fas fa-star star-icon"></i>
                        </div>

                        {/* Content */}
                        <div className="row about-content px-4">
                            <div className="col-md-6 text-start">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-md-6 text-start">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
