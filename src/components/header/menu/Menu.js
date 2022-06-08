import {   Routes, Route, Link, NavLink } from "react-router-dom";
function Menu(){
 return(
      <nav>
        <ul>
            <li className="mt-1">
                <NavLink className="mx-4 dark:text-white" to="/">Home</NavLink> 
                <NavLink className="mx-4 dark:text-white" to="shop">Shop</NavLink>
            </li>
        </ul>
     </nav>
 )
}
export default Menu;