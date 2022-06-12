import { Link } from "react-router-dom";

 function ImageProduct({ src, alt , id }) {
    return (
      <div className="product-image h-[310px] relative p-4">
        <figure className="h-full w-full">
          <Link to={`/products/${id}`}>
            {/* TODO: Please create an image component */}
            <img className="h-full w-auto mx-auto  object-contain" src={src} alt={alt}  />
            </Link>
        </figure>
      </div>
    );
  }
  export default ImageProduct;