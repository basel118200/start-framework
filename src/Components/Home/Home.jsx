import React from "react";

export default function Home() {
    return (
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        {/* Avatar */}
                        <div className="avatar-container mb-3">
                            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="Avatar" className="w-100" />
                        </div>

                        {/* Title */}
                        <h1>START FRAMEWORK</h1>

                        {/* Divider */}
                        <div className="section-divider divider-white">
                            <i className="fas fa-star star-icon"></i>
                        </div>

                        {/* Subtitle */}
                        <h5>Graphic Artist - Web Designer - Illustrator</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}
