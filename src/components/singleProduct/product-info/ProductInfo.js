import ProductCategories from './product-categories/ProductCategories';
import ProductTitle from './product-title/ProductTitle';
import ProductPrice from './product-price/ProductPrice';
import ProductDescription from './product-title/product-description/ProductDescription';
function PoructInfo({description ,category ,title ,rating ,price }){

return (
    <>
      <div className="produc-info  w-full md:w-1/2">
            {/* product title */}
                <ProductTitle title={title} />
            {/* product categories */}
                <ProductCategories category={category} />
            {/* product description */}
                <ProductDescription description={description} /> 
            {/* product price */}
                <ProductPrice price={price} />

      </div>
    </>
)
}
export default PoructInfo;