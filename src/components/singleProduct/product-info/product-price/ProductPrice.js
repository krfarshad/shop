function ProductPrice({price}){
    return(
        <>
        <div>
          <span className="text-success text-2xl  rounded-md bg-green-400 py-3 px-10 text-white">{price}</span>
        </div>
        </>
    );
}
export default ProductPrice;