const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-footer text-light pt-5 pb-4">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Account</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">Login</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Signup</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Redeem a Gift Card</a></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Company</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">Our Story</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>                                        
                                    </ul>
                                </div>


                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Get Help</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">FAQs</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Shipping</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
                                    </ul>
                                </div>


                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Connect</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">Instagram</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Facebook</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Pinterest</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-4">
                            <form className="d-flex">
                                <input type="email" className="form-control" placeholder="Your email" />
                                <button className="bg-dark"><img src="../../src/assets/images/arrow.png" alt="arrow" /></button>
                            </form>
                        </div>

                    </div>


                    <div className="row border-top border-secondary pt-3">
                        <div className="col d-flex justify-content-center justify-content-md-start gap-4">
                            <a href="#" className="text-muted small text-decoration-none">Privacy Policy</a>
                            <a href="#" className="text-muted small text-decoration-none">Terms & Conditions</a>
                            <a href="#" className="text-muted small text-decoration-none">Do Not Sell or Share My Personal Information</a>
                            <a href="#" className="text-muted small text-decoration-none">CS Supply Chain Transparency</a>
                            <a href="#" className="text-muted small text-decoration-none">Vendor Code of Conduct</a>
                            <a href="#" className="text-muted small text-decoration-none">Sitemap Pages</a>
                            <a href="#" className="text-muted small text-decoration-none">Sitemap Products</a>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col text-center">
                            <small className="text-muted copyright">&copy; 2025 All Rights Reserved</small>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer