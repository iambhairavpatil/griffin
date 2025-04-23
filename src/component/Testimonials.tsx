const Testimonials: React.FC = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-6">
                            <h4 className="mb-4 text-muted">People Are Talking</h4>

                            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <div>
                                            <div className="mb-3 fs-4 text-warning">⭐⭐⭐⭐⭐</div>
                                            <p className="lead">“Absolutely love the scent. It lasts long and feels luxurious.”</p>
                                            <p className="text-muted small">– Emily R.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div>
                                            <div className="mb-3 fs-4 text-warning">⭐⭐⭐⭐⭐</div>
                                            <p className="lead">“Elegant and timeless. My go-to perfume for every occasion.”</p>
                                            <p className="text-muted small">– James P.</p>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div>
                                            <div className="mb-3 fs-4 text-warning">⭐⭐⭐⭐⭐</div>
                                            <p className="lead">“Smells amazing! I always get compliments when I wear it.”</p>
                                            <p className="text-muted small">– Sofia L.</p>
                                        </div>
                                    </div>
                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>


                        <div className="col-md-6 text-center">
                            <img src="./images/new_arrival3.png" alt="Customer talking" className="img-fluid rounded shadow" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonials