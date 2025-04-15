import React, { useState } from "react";
import PeopleLike from "./PeopleLike";
import { Link, useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const [mainImage, setMainImage] = useState(
    "https://media.istockphoto.com/id/1479137255/photo/perfume.webp?a=1&b=1&s=612x612&w=0&k=20&c=tfmXuSw2IpnxopLpli7V1I3pkKW58VHBS0FO6waNdD8="
  );
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    "https://media.istockphoto.com/id/1479137255/photo/perfume.webp?a=1&b=1&s=612x612&w=0&k=20&c=tfmXuSw2IpnxopLpli7V1I3pkKW58VHBS0FO6waNdD8=",
    "https://media.istockphoto.com/id/1431250620/photo/man-applying-cologne-eau-de-toilette-on-neck.webp?a=1&b=1&s=612x612&w=0&k=20&c=dIoJ_vJes2c-LSCR6_Y40Ex_Td4zf6quUNV9pKmQwas=",
    "https://plus.unsplash.com/premium_photo-1679064286615-e5e4d4940dfc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  // const { id } = useParams();
  const compare_icon = "../src/assets/images/compare_ico.png";
  const ask_icon = "../src/assets/images/ask_icon.png";
  const share_icon = "../src/assets/images/share_ico.png";

  const product = {
    title: "Lorem ipsom",
    category: "Perfume"
  };
  const breadcrumbCategory = product.category.toLowerCase();

  const breadcrumbTitle = product.title;
  return (
    <div>
      <nav aria-label="breadcrumb" className="my-3 container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item">
            <Link to={`/category/${breadcrumbCategory}`}>
              {product.category}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {breadcrumbTitle}
          </li>
        </ol>
      </nav>
      <div className="container my-4">
      
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 d-flex">
            {/* Thumbnails Vertical */}
            <div className="me-3 d-flex flex-column gap-2">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail rounded ${mainImage === thumb ? "border border-primary" : ""}`}
                  onClick={() => setMainImage(thumb)}
                  style={{
                    cursor: "pointer",
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow-1">
              <img
                src={mainImage}
                alt="Product"
                className="img-fluid rounded"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h2 className="mb-3">Lorem Ipsom</h2>
            <p className="text-muted mb-4">SKU: WH1000XM4</p>

            <div className="mb-3">
              <span className="h4 me-2">$349.99</span>
              <span className="text-muted"><s>$399.99</s></span>
            </div>

            <div className="mb-3">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="ms-2">4.5 (120 reviews)</span>
            </div>

            <p className="mb-4">
              fashion and beauty into art, capturing trends and personal style through expert composition.
            </p>

            <div className="mb-4">
              <h5>Color:</h5>
              <div className="btn-group" role="group" aria-label="Color selection">
                <input type="radio" className="btn-check" name="color" id="black" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-dark" htmlFor="black">Black</label>

                <input type="radio" className="btn-check" name="color" id="silver" autoComplete="off" />
                <label className="btn btn-outline-secondary" htmlFor="silver">Silver</label>

                <input type="radio" className="btn-check" name="color" id="blue" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="blue">Blue</label>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">Quantity:</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <button className="btn bg-dark text-white btn-lg mb-3 me-2">
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>

            <button className="btn btn-outline-secondary btn-lg mb-3">
              <i className="bi bi-heart"></i> Add to Wishlist
            </button>

            <div className="mt-4 mb-4">
              <span className="p-3 inline-block"><img src={compare_icon} alt={`icons`} /> Compare</span>
              <span className="p-3 inline-block"><img src={ask_icon} alt={`icons`} /> Ask a question</span>
              <span className="p-3 inline-block"><img src={share_icon} alt={`icons`} /> Share</span>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-5 align-items-center  bg-grey">
          <div className="col-md-6">
            <img
              src="../src/assets/images/peaky.png"
              alt="Product Info"
              className="img-fluid h-100"
            />
          </div>
          <div className="col-md-6">
            <h6>Women Collection</h6>
            <h4 className="mb-3">Product Description</h4>
            <p className="text-muted">
              Experience unmatched sound clarity and comfort. These headphones are designed to provide the
              best acoustic performance while keeping you in style. Whether you're commuting, working, or
              relaxing, they make every moment immersive.
            </p>

            <p>Size: <span className="p-1 px-2 mb-4 bg-dark text-white rounded-circle">M</span></p>
            <p className="text-dark"><b>$100.00</b></p>
            <button className="btn bg-dark text-white btn-lg mb-3 me-2">
              Buy Now
            </button>
          </div>
        </div>

        <div className="container my-5">
          <div className="row text-center">
            {/* Feature 1 */}
            <div className="col-md-3 mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <i className="bi bi-stars fs-1 text-primary mb-2"></i>
                <h6 className="fw-bold">High Quality</h6>
                <p className="text-muted small">Crafted with premium materials for lasting performance.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-3 mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <i className="bi bi-headset fs-1 text-success mb-2"></i>
                <h6 className="fw-bold">24/7 Support</h6>
                <p className="text-muted small">Always here to help, anytime you need us.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-3 mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <i className="bi bi-truck fs-1 text-danger mb-2"></i>
                <h6 className="fw-bold">Fast Delivery</h6>
                <p className="text-muted small">Speedy, secure shipping straight to your door.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-3 mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <i className="bi bi-shield-check fs-1 text-warning mb-2"></i>
                <h6 className="fw-bold">Secure Payment</h6>
                <p className="text-muted small">100% safe checkout with end-to-end encryption.</p>
              </div>
            </div>
          </div>
        </div>
        {/* People Also Loved Block */}
        <PeopleLike />
      </div>
    </div>
  );
};

export default ProductDetails;
