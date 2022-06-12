import Shop from "../shop/Shop";
import { Link } from "react-router-dom";
function NotFound(){
 return(
    <div className="container mx-atuo p-6">
        <h1 className="text-center text-black dark:text-white font-bold text-4xl">404</h1>
        <h6 className="text-center text-black dark:text-white my-8 font-semibold text-md">We have nothing find</h6>
        <Link  className="mx-auto table my-4 rounded-md bg-teal-400 text-center text-white p-2" to="/shop" elemennt={<Shop />} >Shop </Link>
 

    </div>
 )
}
export default NotFound;