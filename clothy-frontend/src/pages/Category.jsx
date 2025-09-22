import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { name } = useParams();
  const filtered = products.filter((p) => p.category === name);

  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
export default Category;
