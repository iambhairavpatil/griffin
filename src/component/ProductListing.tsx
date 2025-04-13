import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  images: string[];
  category: string;
};

const categories = [
  { id: 1, name: "Perfume", slug: "perfume", image: "..." },
  { id: 2, name: "Candles", slug: "candles", image: "..." },
  // ...
];


const ProductListing = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch categories
  useEffect(() => {
    if (!categoryName) {
      axios.get("https://dummyjson.com/products")
        .then(res => setProducts(res.data.products))
        .catch(err => console.error("Error loading products:", err));
    }
  }, [categoryName]);
  

  // Fetch products by category
  useEffect(() => {
    if (categoryName) {
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
        .then(res => setProducts(res.data.products))
        .catch(err => console.error("Error loading products:", err));
    }
  }, [categoryName]);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Category Menu */}
        <div className="col-md-3 mb-3">
          <h5>Categories</h5>
          <ul className="list-group">
          {categories.map((cat) => (
  <Link
    key={cat}
    to={`/category/${cat}`}
    className="list-group-item list-group-item-action text-capitalize"
  >
    {cat.replace(/-/g, ' ')}
  </Link>
))}


          </ul>
        </div>

        {/* Right Product Grid */}
        <div className="col-md-9">
          <div className="row g-3">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-md-4" key={product.id}>
                  <ProductCard
                    id={product.id}
                    image={product.images[0]}
                    name={product.title}
                    price={product.price}
                    originalPrice={Math.round(product.price / (1 - product.discountPercentage / 100))}
                    colors={["#000", "#eee"]}
                    tags={[product.category]}
                    onSale={product.discountPercentage > 0}
                  />
                </div>
              ))
            ) : (
              <p>No products found for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
