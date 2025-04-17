import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import { toggleCartVisibility } from "../store/slices/cartSlice";
import Cart from "./Cart"; // Import the Cart component

const indiaFlag = "./src/assets/images/india_flag.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Women", href: "/WomenCategory" },
  { label: "Men", href: "/MenCategory" },
  { label: "About", href: "/about" },
];

const categories = [
  "Holiday Gifting",
  "New Arrivals",
  "Best-Sellers",
  "Clothing",
  "Sale",
];

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const isCartVisible = useSelector((state: RootState) => state.cart.isCartVisible);

  const handleCartToggle = () => {
    dispatch(toggleCartVisibility());
  };

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
                  <Link className="nav-link fw-bold small text-dark" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand mx-auto fw-bold fs-5 text-uppercase position-absolute start-50 translate-middle-x"
          >
            The Griffin Original
          </Link>

          {/* Cart Icon */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <a
              href="#"
              className="btn btn-outline-dark position-relative"
              onClick={handleCartToggle}
            >
              <i className="bi bi-cart-fill"></i> Cart
              {totalCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCount}
                </span>
              )}
            </a>
          </div>
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
                <Link className="nav-link fw-bold small text-dark" to={link.href}>
                  {link.label}
                </Link>
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
                <Link
                  to="/category/15"
                  className={`nav-link small text-dark ${
                    category === "Sale" ? "fw-bold text-danger" : ""
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Show Cart When Visible */}
      <Cart isCartVisible={isCartVisible} />
    </header>
  );
};

export default Header;
