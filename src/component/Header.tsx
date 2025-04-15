import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "About", href: "#" },
  // { label: "Everworld Stories", href: "#" },
];

const categories = [
  "Holiday Gifting",
  "New Arrivals",
  "Best-Sellers",
  "Clothing",
  "Tops & Sweaters",
  "Pants & Jeans",
  "Outerwear",
  "Shoes & Bags",
  "Sale",
];

const indiaFlag = '../../src/assets/images/india_flag.png';

const Header: React.FC = () => {
  
  const cartCount = useSelector((state: RootState) => state.cart.items);

  return (
    <header className="border-bottom">
      {/* Top Alert Bar */}
      <div className="bg-dark text-white py-1 small">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="w-100 text-center">
            Get early access on launches and offers. <strong>Sign Up For Texts</strong>
          </div>
          <div className="end-0 me-3 d-md-flex align-items-center gap-1">
            <img src={indiaFlag} alt="Country" width="20" height="14" />
            <span>INR</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Desktop Nav Links */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav flex-row gap-3">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a className="nav-link fw-bold small text-dark" href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggler */}
          <button className="navbar-toggler d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <Link to={`/`} className="navbar-brand mx-auto fw-bold fs-5 text-uppercase position-absolute start-50 translate-middle-x">
            The Griffin Original
          </Link>

          {/* Icons - Desktop */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <a href="#" className="text-dark"><i className="bi bi-search fs-5"></i></a>
            <a href="#" className="text-dark"><i className="bi bi-person fs-5"></i></a>
            <a href="#" className="text-dark position-relative">
              <i className="bi bi-bag fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            </a>
          </div>
        </div>

        {/* Icons - Mobile */}
        <div className="container d-flex d-lg-none justify-content-center gap-4 mt-2 pb-2 border-top pt-2">
          <a href="#" className="text-dark"><i className="bi bi-search fs-5"></i></a>
          <a href="#" className="text-dark"><i className="bi bi-person fs-5"></i></a>
          <a href="#" className="text-dark position-relative">
            <i className="bi bi-bag fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link fw-bold small text-dark" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Category Bar */}
      <nav className="bg-white border-top border-bottom py-2">
        <div className="container">
          <ul className="nav justify-content-center flex-wrap gap-2">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <a
                  className={`nav-link small text-dark ${category === "Sale" ? "fw-bold text-danger" : ""}`}
                  href="#"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
