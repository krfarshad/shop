 function ImageProduct({ src, alt }) {
    return (
      <div className="product-image h-[310px] relative p-4">
        <figure className="h-full w-full">
          <a href="#">
            {/* TODO: Please create an image component */}
            <img className="h-full w-auto mx-auto  object-contain" src={src} alt={alt} />
          </a>
        </figure>
      </div>
    );
  }
  export default ImageProduct;