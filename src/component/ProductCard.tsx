import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  originalPrice: number;
  colors: string[];
  tags: string[];
  onSale?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  price,
  originalPrice,
  colors,
  tags,
  onSale,
}) => {
  return (
    <Link to={`/product/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 position-relative">
        {onSale && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            30% off
          </span>
        )}
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <p className="text-muted text-decoration-line-through">
            ₹{originalPrice}
          </p>
          <p className="fw-bold">₹{price}</p>

          <div className="d-flex gap-1 mb-2">
            {colors?.map((c, i) => (
              <span
                key={i}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: c,
                  border: "1px solid #aaa",
                }}
              />
            ))}
          </div>

          <div className="d-flex flex-wrap gap-1">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="badge bg-light text-dark border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
