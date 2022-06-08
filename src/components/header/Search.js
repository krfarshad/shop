import { useState } from 'react';
function Search() {
    const [search, setSearch] = useState(false);
    const [Products, setProducts] = useState([]);
    const [ProductsData, setProductsData] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);


  
    const getProducts = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/"
        );
        const data =await response.json();
        setProductsData(data)
   
    }

    const handle_search_product =(value) =>{
            // Array.from(value).map(item=>{

            // })
            const results= Array.from(ProductsData).filter((item) => {   
                const title = item.title.toLowerCase();
                return title.indexOf(value) > -1;
             });
             setSearchProduct(results);
    }
    const getSearchPost=(value)=>{
        if(!ProductsData.length){
            getProducts();
        }
        // handle search result
        handle_search_product(value)

    }

    const handleSearchInput = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
            <div className={`search-wrapper shadow-sm shadow-gray-200 p-2 rounded-lg absolute left-8 top-14 z-20 max-h-96 overflow-hidden
             w-full md:w-96 bg-white opacity-0 hidden transition-all ease-linear ${search ? 'active-search' : ''} `}>
                {searchProduct.length ? Array.from(searchProduct).map(item=>{
                    return  <li className='py-4 text-sm list-none flex items-center border-b border-gray-200'><img className='w-10 h-10 object-contain rounded-lg overflow-auto mr-4' src={item.image} alt={item.title} /><a>{item.title}</a></li>  
                }): `<p>چیزی یافت نشد.</p> ` }
            </div>
        </>
    )
}
export default Search;