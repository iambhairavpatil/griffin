import { useParams } from "react-router-dom";
const CategoryListing: React.FC = () => {
  const { slug } = useParams();

  return (
    <div className="container py-5">
      <h2>Products for category: {slug}</h2>
    </div>
  );
};

export default CategoryListing;
