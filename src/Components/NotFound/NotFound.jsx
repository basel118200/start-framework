import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section id="not-found" className="text-center">
            <div className="container">
                {/* Icon */}
                <i className="fas fa-exclamation-triangle fa-5x text-secondary mb-4"></i>

                {/* Title */}
                <h2 className="display-4 fw-bold">Page Not Found</h2>

                {/* Description */}
                <p className="lead mb-5">
                    We couldn't find the page you're looking for. It might have been removed or renamed.
                </p>

                {/* Back Button */}
                <Link to="/" className="btn btn-primary btn-lg">
                    <i className="fas fa-arrow-left me-2"></i>
                    Back Home
                </Link>
            </div>
        </section>
    );
}
