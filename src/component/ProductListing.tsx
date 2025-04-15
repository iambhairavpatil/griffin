import { useState } from "react";
import ProductCard from "../component/ProductCard";
import { Link } from "react-router-dom";

type Product = {
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

const staticProducts: Product[] = [
  {
    id: 1,
    title: "The Cloud Relaxed Cardigan",
    price: 132,
    originalPrice: 188,
    discountPercentage: 30,
    images: ["../src/assets/images/category3.png"],
    category: "perfume",
    colors: ["#000000", "#4e4e4e", "#b49c7d"],
    tags: [],
  },
  {
    id: 2,
    title: "The Organic Cotton Long Sleeve Turtleneck",
    price: 135,
    originalPrice: 150,
    discountPercentage: 30,
    images: ["../src/assets/images/category4.png"],
    category: "perfume",
    colors: ["#000000", "#222222"],
    tags: ["ORGANIC COTTON"],
  },
  {
    id: 3,
    title: "The Wool Flannel Pant",
    price: 137,
    originalPrice: 188,
    discountPercentage: 30,
    images: ["../src/assets/images/category6.png"],
    category: "perfume",
    colors: ["#000000", "#4e4e4e", "#b49c7d"],
    tags: ["RENEWED MATERIALS"],
  },

  {
    id: 4,
    title: "The Wool Flannel Pant",
    price: 137,
    originalPrice: 188,
    discountPercentage: 30,
    images: ["../src/assets/images/new_arrival3.png"],
    category: "perfume",
    colors: ["#000000"],
    tags: ["RENEWED MATERIALS"],
  },
  {
    id: 5,
    title: "The Wool Flannel Pant",
    price: 137,
    originalPrice: 188,
    discountPercentage: 30,
    images: ["../src/assets/images/slide4.png"],
    category: "perfume",
    colors: ["#000000", "#4e4e4e", "#b49c7d"],
    tags: ["RENEWED MATERIALS"],
  },
  {
    id: 6,
    title: "The Wool Flannel Pant",
    price: 137,
    originalPrice: 188,
    discountPercentage: 30,
    images: ["../src/assets/images/product1.png"],
    category: "perfume",
    colors: ["#000000", "#4e4e4e", "#b49c7d"],
    tags: ["RENEWED MATERIALS"],
    // tags: ["RENEWED MATERIALS", "CLEANER CHEMISTRY"],
  }
];

const ProductListing = () => {
  const [products] = useState<Product[]>(staticProducts);

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
                  image={product.images[0]}
                  name={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  colors={product.colors}
                  tags={product.tags}
                  onSale={product.discountPercentage > 0}
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
