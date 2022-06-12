import { Link } from "react-router-dom";

export default function TitleProduct({ title , id }) {
  return (
    <div className="product-title text-gray-600 text-sm font-semibold p-2 leading-6 h-20 overflow-hidden">
      <h2>
        <Link to={`/products/${id}`}>
          {title}
        </Link>
      </h2>
    </div>
  );
}
