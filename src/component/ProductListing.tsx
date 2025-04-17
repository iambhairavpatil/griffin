import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import axios from "axios";
import OAuth  from "oauth-1.0a";
import CryptoJS from "crypto-js";

type Product = {
  name: string;
  regular_price: number;
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  images: string[];
  category: string;
  colors: string[];
  tags: string[];
};



const ProductListing = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (categoryName) {


      const customer_key = "ck_9d1343c5533dcde594dd88017901e9dc9a4c513d";
      const consumer_key = "cs_1d2c74719e0a0492806b9da3175f5fdf3972880c";
      const oauth = new OAuth({
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
        url: 'https://marathicarworld.com/backend/wordpress/wp-json/wc/v3/products?category='+categoryName,
        method: 'GET'
      };
  
      const authorization = oauth.authorize(request_data);
      const headers = oauth.toHeader(authorization);
      
      axios.get(request_data.url, { headers })
        .then(response => {
          console.log("***************************************");
          console.log(response.data);
          // setPosts(response.data);
          setProducts(response.data)
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });      
    }
  }, [categoryName]);


  return (
    <div className="container pt-3 pb-5 text-white">  
       <nav aria-label="breadcrumb" className="mb-3">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item"><Link to="/">Products</Link></li>
    <li className="breadcrumb-item active" aria-current="page">All</li>
  </ol>
</nav>

      <div className="row">
        {/* Left Filter Panel */}
        <div className="col-md-3 mb-4">
          <h5 className="text-dark">Category</h5>
          <div className="mb-4">
            {["Perfume", "Skincare", "Candles", "Oils", "Gift Sets"].map((cat, i) => (
              <div key={i} className="form-check mb-1">
                <input
                  className="form-check-input border-dark"
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                  id={`category-${i}`}
                />&nbsp;
                <label className="form-check-label text-dark " htmlFor={`category-${i}`}>
                  {cat}
                </label>
              </div>
            ))}

            <a href="#" className="text-muted small d-block mt-2">
              View More +
            </a>
          </div>

          <h5 className="text-dark">Color</h5>
          <div className="mb-4 d-flex flex-wrap gap-2">
            {["#000", "#fff", "#c0c0c0", "#f00", "#0f0", "#00f"].map((color, idx) => (
              <div
                key={idx}
                className="rounded-circle border"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: color,
                }}
              ></div>
            ))}
            <a href="#" className="text-muted small d-block mt-2">
              View More +
            </a>
          </div>

          <h5 className="text-dark">Size</h5>
          <div className="d-flex flex-wrap gap-2 text-dark">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => (
              <button key={index} className="btn btn-sm custom-size-btn">
                {size}
              </button>
            ))}
          </div>

        </div>

        {/* Right Product Grid */}
        <div className="col-md-9">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.images[0]["src"]}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.regular_price}
                  // colors={product.colors}
                  tags={product.tags} colors={[]}                  // onSale={product.discountPercentage > 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
