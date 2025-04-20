import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addToCart } from "../store/slices/cartSlice";
import { setLoading } from "../store/slices/loadingSlice";
import PeopleLike from "./PeopleLike";

interface Product {
  id: number;
  name: string;
  price: string;
  regular_price: string;
  description: string;
  sku: string;
  images: { src: string }[];
  category: string;
}

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id: productId } = useParams<{ id: string }>();
  const loading = useSelector((state: RootState) => state.loading.isLoading);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [product, setProduct] = useState<Product | null>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const existingCartItem = cartItems.find(item => item.id === Number(productId));

  useEffect(() => {
    if (existingCartItem) {
      setQuantity(existingCartItem.quantity);
    }
  }, [existingCartItem]);

  useEffect(() => {
    const customer_key = "ck_9d1343c5533dcde594dd88017901e9dc9a4c513d";
    const consumer_key = "cs_1d2c74719e0a0492806b9da3175f5fdf3972880c";

    const oauth = new OAuth({
      consumer: {
        key: customer_key,
        secret: consumer_key,
      },
      signature_method: "HMAC-SHA1",
      hash_function(base_string, key) {
        return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
      },
    });

    const request_data = {
      url: `https://marathicarworld.com/backend/wordpress/wp-json/wc/v3/products/${productId}`,
      method: "GET",
    };

    const headers = oauth.toHeader(oauth.authorize(request_data));
    console.log(headers)

    dispatch(setLoading(true)); // GLOBAL LOADING START

    axios
      .get(request_data.url)
      .then((response) => {
        setProduct(response.data);
        setThumbnails(response.data.images.map((img: any) => img.src));
        setMainImage(response.data.images[0].src);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      })
      .finally(() => {
        dispatch(setLoading(false)); // GLOBAL LOADING END
      });
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          quantity,
          product,
        })
      );
      window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 Scroll to top
    }
  };


  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 loader-wrapper">
        <div className="loader text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="my-3 container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/frontend/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/frontend/category/${product?.category}`}>{product?.category}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.name}
          </li>
        </ol>
      </nav>

      <div className="container my-4">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 d-flex">
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

            <div className="flex-grow-1 ">
              {/* <img
                src={mainImage}
                alt="Product"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover" }}
              /> */}
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Product"
                  className="img-fluid rounded w-100"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div
                  className="bg-light d-flex justify-content-center align-items-center rounded"
                  style={{ width: "100%", height: "400px" }}
                >
                  <span className="text-muted">No Image Available</span>
                </div>
              )}

            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">
            <h2 className="mb-3">{product?.name}</h2>
            <p className="text-muted mb-4">SKU: {product?.sku}</p>

            <div className="mb-3">
              <span className="h4 me-2">₹{product?.price}</span>
              <span className="text-muted">
                <s>₹{product?.regular_price}</s>
              </span>
            </div>

            <div className="mb-3">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="ms-2">4.5 (120 reviews)</span>
            </div>

            <p className="mb-4">{product?.description}</p>

            <div className="mb-4 col-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <button onClick={handleAddToCart} className="btn bg-dark text-white btn-lg mb-3 me-2">
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* People Also Liked */}
      <div className="container-fluid">
        <PeopleLike />
      </div>
    </div>
  );
};

export default ProductDetails;
