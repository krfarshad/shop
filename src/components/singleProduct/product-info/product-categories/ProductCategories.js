function ProductCategories({category}){
    return(
        <>
        <div>
            {category && <span className="my-4 text-sm rounded-md bg-fuchsia-600 text-white py-1 px-4">{category}</span>}
        </div>
        </>
    );
}
export default ProductCategories;