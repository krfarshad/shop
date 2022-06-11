import { Link } from "react-router-dom";
function Home(){
    return(
        <main className="py-20  content-wrapper">
          <h1 className="text-center text-black dark:text-white text-2xl px-4 my-8">welcome to shop store</h1>
          <Link className=" dark:text-white mx-auto py-4 px-10 bg-slate-600 text-white  rounded-lg table" to="shop">Shop</Link>

        </main>
    )
}

export default Home;