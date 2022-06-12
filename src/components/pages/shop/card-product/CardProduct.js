import ImageProduct from "./ImageProduct";
import TitleProduct from "./TitleProduct";
import Category from './Category';
import Price from "./Price";
 function CardProduct({ Productdata }) {
  return (
    <article className="product-item h-[420px] overflow-hidden  200 rounded-md border border-gray-200
     bg-white shadow-md shadow-gray-200 mb-2 hover:shadow-lg transition-all ease-linear hover:-translate-y-2">
      <div className="product-inner relative">
        {/* image */}
        <ImageProduct src={Productdata.image} alt={Productdata.title} id={Productdata.id} />
        {/* title */}
        <TitleProduct title={Productdata.title} id={Productdata.id} />
        {/* footer */}
        <div className="product-footer text-right text-green">
          <Price cost={Productdata.price} />
        </div>
        <Category tag={Productdata.category} />
      </div>
    </article>
  );
}


export default CardProduct;
