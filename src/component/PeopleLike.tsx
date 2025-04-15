import React, { useEffect, useState } from "react";

const PeopleLike: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prev) => {
                const totalSeconds =
                    prev.days * 86400 +
                    prev.hours * 3600 +
                    prev.minutes * 60 +
                    prev.seconds -
                    1;

                if (totalSeconds <= 0) {
                    clearInterval(countdown);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }

                const days = Math.floor(totalSeconds / 86400);
                const hours = Math.floor((totalSeconds % 86400) / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (

        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Column */}
                <div className="col-md-4 mb-4">
                    <h3 className="mb-3">People Also Loved</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="btn bg-dark text-white mb-3">Buy Now</button>

                    {/* Timer */}
                    <div className="d-flex gap-3">
                        <div className="text-center">
                            <h4 className="border px-3 py-3 shadow rounded">{timeLeft.days}</h4>
                            <small>Days</small>
                        </div>
                        <div className="text-center">
                            <h4 className="border px-3 py-3 shadow rounded">{timeLeft.hours}</h4>
                            <small>Hours</small>
                        </div>
                        <div className="text-center">
                            <h4 className="border px-3 py-3 shadow rounded">{timeLeft.minutes}</h4>
                            <small>Minutes</small>
                        </div>
                        <div className="text-center">
                            <h4 className="border px-3 py-3 shadow rounded">{timeLeft.seconds}</h4>
                            <small>Seconds</small>
                        </div>
                    </div>
                </div>

                {/* Right Column Carousel */}
                <div className="col-md-8 overflow-hidden">
                    <div
                        id="carouselLoved"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        {/* Dots */}
                        <div className="carousel-indicators">
                            {[0, 1].map((index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselLoved"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : undefined}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Carousel Items */}
                        <div className="carousel-inner rounded">
                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="d-flex">
                                    {[0, 1, 2].map((index) => (
                                        <div
                                            key={index}
                                            className="me-3"
                                            style={{
                                                flex: index === 0 ? "0 0 40%" : "0 0 30%",
                                            }}
                                        >
                                            <div className="card h-100 border-0">
                                                <img
                                                    src="../src/assets/images/category6.png"
                                                    className="card-img-top rounded"
                                                    alt={`Product ${index + 1}`}
                                                />
                                                {/* <div className="card-body p-2 text-center">
                                                    <h6 className="mb-1">Product {index + 1}</h6>
                                                    <small className="text-muted">Short Description</small>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="d-flex">
                                    {[3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="me-3"
                                            style={{
                                                flex: index === 3 ? "0 0 40%" : "0 0 30%",
                                            }}
                                        >
                                            <div className="card h-100 border-0">
                                                <img
                                                    src="../src/assets/images/new_arrival1.png"
                                                    className="card-img-top rounded"
                                                    alt={`Product ${index + 1}`}
                                                />
                                                {/* <div className="card-body p-2 text-center">
                                                    <h6 className="mb-1">Product {index + 1}</h6>
                                                    <small className="text-muted">Short Description</small>
                                                </div> */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Arrows */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselLoved"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselLoved"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PeopleLike;