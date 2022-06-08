import {   Routes, Route, Link } from "react-router-dom";
function Menu(){
 return(
      <nav>
        <ul>
            <li className="mt-1">
                <Link className="mx-4 dark:text-white" to="/">Home</Link> 
                <Link className="mx-4 dark:text-white" to="shop">Shop</Link>
            </li>
        </ul>
     </nav>
 )
}
export default Menu;