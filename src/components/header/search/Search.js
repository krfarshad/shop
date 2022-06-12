import { Link } from 'react-router-dom';
import { useState , useRef} from 'react';
import SingleProduct from '../../singleProduct/SingleProduct';
import Loading from '../../loading/Loading';
function Search() {
    const [search, setSearch] = useState(false);
    const [Products, setProducts] = useState([]);
    const [ProductsData, setProductsData] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [Waiting, setWaiting] = useState(true);
    const textInput = useRef(null);

    const getProducts = async () => {
        const response = await fetch(
            "https://fakestoreapi.com/products/"
        );
        const data = await response.json();
        setProductsData(data)
        setWaiting(false);
    }

    const handle_search_product = (value) => {
        // Array.from(value).map(item=>{

        // })
        const results = Array.from(ProductsData).filter((item) => {
            const title = item.title.toLowerCase();
            return title.indexOf(value) > -1;
        });
        setSearchProduct(results);
    }
    const getSearchPost = (value) => {
        if (!ProductsData.length) {
            getProducts();
        }
        handle_search_product(value)

    }

    const handleSearchInput = (e) => {
        e.preventDefault();
        const inputValue = e.target.value;
        if (inputValue.length > 2) {
            setSearch(true);
            getSearchPost(inputValue);
        } else {
            setSearch(false)
        }
    }

    const closeSearchWrapper = (e) => {
        setSearch(false);
        textInput.current.value='';
    }


    return (
        <>
            {/* search input */}
            <input className="border border-gray-300 rounded-lg p-2 w-full md:w-96 bg-white shadow-sm shadow-gray-200 oultine-none
            focus:oultine-none  " type="search" placeholder="search ..." onChange={handleSearchInput}  ref={textInput}  />

            {/* search box */}

            <div className={`search-wrapper shadow-sm shadow-gray-200 p-2 rounded-lg absolute left-8 top-14 z-20 max-h-96 overflow-hidden
             w-full md:w-96 bg-white opacity-0 hidden transition-all ease-linear ${search ? 'active-search' : ''} `}>
                {Waiting ?
                    <Loading /> :
                    <>
                        {
                            searchProduct.length ? Array.from(searchProduct).map(item => {
                                // serach item
                                return (
                                    <>
                                        <li className='list-none' key={item.id}>
                                            <Link className='py-4 text-sm  flex items-center border-b border-gray-200 w-full hover:bg-red-200 transition-all ease-linear'
                                                element={<SingleProduct key={item.id} />} to={`products/${item.id}`} onClick={closeSearchWrapper}>
                                                <img className='w-10 h-10 object-contain rounded-lg overflow-auto mr-4' src={item.image} alt={item.title} /><span>{item.title}</span>
                                            </Link>
                                        </li>
                                    </>)
                            }) : `nothing found`
                        }
                    </>
                }
            </div>

        </>
    )
}
export default Search;