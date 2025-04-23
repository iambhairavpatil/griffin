import { Link } from "react-router-dom"

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-footer text-light pt-5 pb-4">
                <div className="container">
                    <div className="row mb-1">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Account</h6>
                                    <ul className="list-unstyled small">
                                        {/* <li><a href="#" className="text-muted text-decoration-none">Login</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Signup</a></li> */}
                                        <li><a href="#" className="text-muted text-decoration-none">Redeem a Gift Card</a></li>
                                    </ul>
                                </div>

                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Company</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">Our Story</a></li>
                                        {/* <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>                                         */}
                                    </ul>
                                </div>


                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Get Help</h6>
                                    <ul className="list-unstyled small">
                                        {/* <li><a href="#" className="text-muted text-decoration-none">FAQs</a></li> */}
                                        <li><a href="#" className="text-muted text-decoration-none">Shipping</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
                                        <li>
                                            <Link
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                to="/contactus"
                                                className="text-muted text-decoration-none">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-md-3 mb-4">
                                    <h6 className="fw-bold footer-nav-title">Connect</h6>
                                    <ul className="list-unstyled small">
                                        <li><a href="#" className="text-muted text-decoration-none">Instagram</a></li>
                                        <li><a href="#" className="text-muted text-decoration-none">Facebook</a></li>
                                        {/* <li><a href="#" className="text-muted text-decoration-none">Pinterest</a></li> */}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* <div className="col-md-4">
                            <form className="d-flex">
                                <input type="email" className="form-control" placeholder="Your email" />
                                <button className="bg-dark"><img src="../../images/arrow.png" alt="arrow" /></button>
                            </form>
                        </div> */}
                    </div>


                    <div className="row border-top border-secondary pt-3">
                        <div className="col d-flex justify-content-center justify-content-md-between gap-4">
                            <Link to={`/PrivacyPolicy`} className="text-muted small text-decoration-none">Privacy Policy</Link>
                            <Link to={`/TermsCondition`} className="text-muted small text-decoration-none">Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col text-center">
                            <small className="text-muted copyright">Griffin &copy; 2025 All Rights Reserved</small>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer