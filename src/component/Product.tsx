import { Link } from "react-router-dom"
import { categories } from "../data/categories"; // adjust path if needed
  
  const Product: React.FC = () => {
    return (
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Shop by Category</h2>
          <div className="row g-3">
            {categories.map((category) => (
              <div key={category.id} className="col-6 col-md-2">
                <Link to={`/category/${category.id}`} className="text-decoration-none text-dark">
                  <img src={category.image} className="img-fluid category-img" alt={category.name} />
                  <p>{category.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Product