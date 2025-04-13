
import { useParams } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    name: "Floral Perfume",
    image: "../src/assets/images/category1.png",
    price: 999,
    originalPrice: 1299,
    description: "A refreshing floral fragrance that lasts all day.",
  },
  {
    id: 2,
    name: "Wooden Candle",
    image: "../src/assets/images/category6.png",
    price: 499,
    originalPrice: 699,
    description: "Relax with the warm woody scent of this artisan candle.",
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = mockProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <div className="container py-5">Product not found.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">
            <del>₹{product.originalPrice}</del>
          </p>
          <h4 className="fw-bold mb-3">₹{product.price}</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
