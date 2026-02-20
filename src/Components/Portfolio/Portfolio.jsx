import React, { useState } from "react";

export default function Portfolio() {
    // State for the modal: null = closed, image object = open
    const [selectedImage, setSelectedImage] = useState(null);

    // Portfolio items data (using real reference images)
    const portfolioItems = [
        { id: 1, src: "https://routeegy.github.io/startFramework/assets/images/poert1.png", alt: "Log Cabin" },
        { id: 2, src: "https://routeegy.github.io/startFramework/assets/images/port2.png", alt: "Tasty Cake" },
        { id: 3, src: "https://routeegy.github.io/startFramework/assets/images/port3.png", alt: "Circus Tent" },
        { id: 4, src: "https://routeegy.github.io/startFramework/assets/images/poert1.png", alt: "Log Cabin" },
        { id: 5, src: "https://routeegy.github.io/startFramework/assets/images/port2.png", alt: "Tasty Cake" },
        { id: 6, src: "https://routeegy.github.io/startFramework/assets/images/port3.png", alt: "Circus Tent" },
    ];

    // Open modal handler
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // Close modal handler
    const closeModal = (e) => {
        // Only close if clicking the overlay or the close button
        if (e.target.classList.contains("portfolio-modal-overlay") || e.target.classList.contains("modal-close-wrapper")) {
            setSelectedImage(null);
        }
    };

    return (
        <section id="portfolio" className="text-center">
            <div className="container">
                {/* Title */}
                <h2 className="section-title text-uppercase mb-0">PORTFOLIO COMPONENT</h2>

                {/* Divider (Dark because background is white) */}
                <div className="section-divider divider-dark">
                    <i className="fas fa-star star-icon"></i>
                </div>

                {/* Portfolio Grid */}
                <div className="portfolio-grid">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="portfolio-item mx-auto"
                            onClick={() => openModal(item)}
                        >
                            <div className="overlay d-flex align-items-center justify-content-center h-100 w-100">
                                <i className="fas fa-plus fa-3x text-white"></i>
                            </div>
                            <img className="img-fluid" src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Portfolio Modal - Rendered conditionally based on state */}
            {selectedImage && (
                <div
                    className="portfolio-modal-overlay"
                    onClick={closeModal}
                >
                    <div className="portfolio-modal rounded-3">
                        {/* Close Button Top Right */}
                        <button
                            className="close-btn modal-close-wrapper"
                            onClick={() => setSelectedImage(null)}
                        >
                            <i className="fas fa-times modal-close-wrapper"></i>
                        </button>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Modal Content */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        {selectedImage.alt}
                                    </h2>

                                    {/* Divider */}
                                    <div className="section-divider divider-dark">
                                        <i className="fas fa-star star-icon"></i>
                                    </div>

                                    {/* Image */}
                                    <img
                                        className="img-fluid rounded mb-5"
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                    />

                                    {/* Description */}
                                    <p className="mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                                    </p>

                                    {/* Close Modal Button */}
                                    <button
                                        className="btn btn-primary modal-close-btn modal-close-wrapper"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <i className="fas fa-times fa-fw modal-close-wrapper"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
