import ImageProduct from "./ImageProduct";
import TitleProduct from "./TitleProduct";
import Price from "./Price";
 function CardProduct({ Productdata }) {
  return (
    <article className="product-item h-[420px] overflow-hidden rounded-md border-1 border-gray-100
     bg-white shadow-md shadow-gray-200 mb-2 hover:shadow-lg transition-all ease-linear hover:-translate-y-2">
      <div className="product-inner">
        {/* image */}
        <ImageProduct src={Productdata.image} alt={Productdata.title} />
        {/* title */}
        <TitleProduct title={Productdata.title} />
        {/* footer */}
        <div className="product-footer text-right text-green">
          <Price cost={Productdata.price} />
        </div>
      </div>
    </article>
  );
}

export default CardProduct;