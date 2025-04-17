import React, { useEffect, useState } from "react";
import PeopleLike from "./PeopleLike";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import OAuth  from "oauth-1.0a";
import CryptoJS from "crypto-js";


const ProductDetails: React.FC = () => {

  const { id: productId } = useParams();
  const [product, setProduct] = useState<string[]>([]);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [mainimage, setMainimage] = useState<string[]>([]);

  useEffect(() => {

      const customer_key = "ck_9d1343c5533dcde594dd88017901e9dc9a4c513d";
      const consumer_key = "cs_1d2c74719e0a0492806b9da3175f5fdf3972880c";
      const oauth = OAuth({
        consumer: {
          key: customer_key,
          secret: consumer_key
        },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
          return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
      });
  
      const request_data = {
        url: 'https://marathicarworld.com/backend/wordpress/wp-json/wc/v3/products/'+productId,
        method: 'GET'
      };

      console.log(request_data)
  
      const authorization = oauth.authorize(request_data);
      const headers = oauth.toHeader(authorization);
      
      axios.get(request_data.url, { headers })
        .then(response => {
          console.log("***************************************");
          console.log(response.data);
          // setPosts(response.data);
          setProduct(response.data)
          setThumbnails(response.data.images)
          setMainimage(response.data.images[0].src)
        })
        // .then(res => setProducts(res.data.products))
        .catch(error => {
          console.error('Error fetching posts:', error);
        });

      //axios.get(`https://dummyjson.com/products/category/${categoryName}`)
      //axios.get(`http://localhost/griffin/wp-json/wc/v3/products?category=15&oauth_consumer_secret=cs_e2054cc8f75fcfe86d9a48b059724e127cc7ac65&oauth_consumer_key=ck_8a4d1d8e35ef239ca2308e0e69cf198c3058270f&oauth_signature_method=HMAC-SHA1&oauth_timestamp=••••••&oauth_nonce=••••••&oauth_version=••••••&oauth_signature=cs_e2054cc8f75fcfe86d9a48b059724e127cc7ac65`)
      // axios.request(config)
      //  .then(res => setProducts(res.data.products))
      //  .catch(err => console.error("Error loading products:", err));
    
  }, [productId]);

  const [mainImage, setMainImage] = useState(
    "../src/assets/images/p1.jpg",
  );
  const [quantity, setQuantity] = useState(1);

  // const thumbnails = [
  //   "../src/assets/images/p2.jpg",
  //   "../src/assets/images/p3.jpg",
  //   "../src/assets/images/p4.jpg",
  //   "../src/assets/images/p5.jpg",
  //   "../src/assets/images/p6.jpg",
  // ];
  // const { id } = useParams();
  const compare_icon = "../src/assets/images/compare_ico.png";
  const ask_icon = "../src/assets/images/ask_icon.png";
  const share_icon = "../src/assets/images/share_ico.png";

  
  const breadcrumbCategory = product.category;
  const breadcrumbTitle = product.name;
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
                  src={thumb.src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail rounded ${mainImage === thumb ? "border border-primary" : ""}`}
                  onClick={() => setMainImage(thumb.src)}
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
                style={{  objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h2 className="mb-3">{product.name}</h2>
            <p className="text-muted mb-4">SKU: {product.sku}</p>

            <div className="mb-3">
              <span className="h4 me-2">{product.price}</span>
              <span className="text-muted"><s>{product.regular_price}</s></span>
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
            {product.description}
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

            <div className="mb-4 col-3">
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

            {/* <button className="btn btn-outline-secondary btn-lg mb-3">
              <i className="bi bi-heart"></i> Add to Wishlist
            </button> */}

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
              {product.description}
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
