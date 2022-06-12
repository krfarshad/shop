// import ProductsData from "../../Data/ProductsData";
import CardProduct from "./card-product/CardProduct";
import React, { useState, useEffect } from "react";
import Loading from "../../loading/Loading";
function Shop() {
  const [ProductsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) =>{
        setProductsData(data)
      });
  }, []);
  if(ProductsData.length){
    return (
      <main className="product-wrapper py-20 " >
          
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7
         max-w-[1200px] mx-auto px-8">
         
        {ProductsData.map((Productdata) => {
          return <CardProduct Productdata={Productdata} key={Productdata.id} />;
        })}
        </div>
      </main>
    );
  }else{
    return(
      <Loading />
    )
  }

}

export default Shop;