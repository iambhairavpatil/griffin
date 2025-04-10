import { useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";


const products = [
  {
    id: 1,
    image: "../src/assets/images/category1.png",
    name: "Floral Perfume",
    price: 999,
    originalPrice: 1299,
    colors: ["#ff69b4", "#fff"],
    tags: ["Floral", "Best Seller"],
    onSale: true,
    category: "perfume"
  },
  {
    id: 2,
    image: "../src/assets/images/category6.png",
    name: "Wooden Candle",
    price: 499,
    originalPrice: 699,
    colors: ["#8B4513", "#000"],
    tags: ["Woody", "New"],
    onSale: false,
    category: "candles"
  }
];

const categories = ["perfume", "candles", "diffuser", "gift sets"];

const ProductListing = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(p => p.category === categoryName);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Category Menu */}
        <div className="col-md-3 mb-3">
          <h5>Categories</h5>
          <ul className="list-group">
            {categories.map((cat) => (
              <a key={cat} href={`/category/${cat}`} className="list-group-item list-group-item-action">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </a>
            ))}
          </ul>
        </div>

        {/* Right Products Display */}
        <div className="col-md-9">
          <div className="row g-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-md-4" key={product.id}>
                  <ProductCard {...product} />
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
