function ImageProduct({image , alt}){
    return(
        <>
        <div className=" w-full md:w-1/2">
            <figure className="p-8">
                <img className="mx-auto max-w-full" src={image} alt={alt} />
            </figure>
        </div>
        </>
    );
}
export default ImageProduct;