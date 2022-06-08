import { useState } from 'react';
function Search() {
    const [search, setSearch] = useState(false);
    const [Products, setProducts] = useState([]);
    const [ProductsData, setProductsData] = useState([]);

  
    const getProducts = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        const data =await response.json();
        setProductsData(data)
   
    }
    const getSearchPost=(value)=>{
        if(ProductsData){
            getProducts();
        }
  
    }

    const handleSearchInput = (e) => {
        e.preventDefault();
        const inputValue = e.target.value;
        if (inputValue.length > 2) {
            setSearch(true);
            getSearchPost(inputValue);
        }else{
            setSearch(false)
        }
    }
    return (
        <>
            <input className="border border-gray-300 rounded-lg p-2 w-full md:w-96 bg-white shadow-sm shadow-gray-200 oultine-none
            focus:oultine-none  " type="search" placeholder="search ..." onChange={handleSearchInput} />
            <div className={`search-wrapper shadow-sm shadow-gray-200 p-2 rounded-lg absolute left-8 -bottom-12
             w-full md:w-96 bg-white opacity-0 hidden transition-all ease-linear ${search ? 'active-search' : ''} `}>
                result
            </div>
        </>
    )
}
export default Search;