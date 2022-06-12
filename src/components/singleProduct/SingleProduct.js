import {useParams } from "react-router-dom";
import ImageProduct from "./product-image/ImageProduct";
import ProductInfo from './product-info/ProductInfo';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading'
function SingleProduct() {
    const { id } = useParams();
    const [Product, setProduct] = useState(null);
    useEffect(() => {
        setProduct(null);
        fetch(`https://fakestoreapi.com/products/+${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
            });
    }, [id]);

    if (Product) {
    const { description, category, rating, title, image, price } = Product;

        return (<div className="py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    {/* image product */}
                    <ImageProduct image={image} alt={title} />
                    {/* image info */}
                    <ProductInfo description={description} category={category} title={title} rating={rating} price={price} />
                </div>
            </div>
        </div>
        )
    } else {
        return (
               <Loading />
        )
    }




}
export default SingleProduct;