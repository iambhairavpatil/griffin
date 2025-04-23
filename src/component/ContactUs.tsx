import { Line } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="d-flex mb-4">

                        <div className="contact-content">
                            <h2 className="fw-bold mb-1">Call To Us</h2>
                            <p className="mb-1 pt-3"><b>We are available 24/7, 7 days a week.</b></p>
                            <p className="mb-0 pt-0">Phone: +8801611112222</p>

                            <h4 className="py-3">Follow Us</h4>
                           
                            <ul className="social d-flex flex-row gap-3 list-unstyled">
                                <li className="fs-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li className="fs-4">
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-twitter"></i> </a>
                                </li>

                                <li className="fs-4"> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                </li>
                                <li className="fs-4">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <hr />


                    <div className="d-flex">

                        <div>
                            <h2 className="fw-bold mb-1">Write To US</h2>
                            <p className="mb-1">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="mb-0">Emails: customer@exclusive.com</p>
                            <p className="mb-0">Emails: support@exclusive.com</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default ContactUs;