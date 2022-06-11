import { Link, useParams } from "react-router-dom";
function SingleProduct(){
    const {id} = useParams();
   
    return(
        <>
            <section>
              <h1 className="text-black dark:text-white text-center">  this is title</h1>
            </section>
        </>
    )
}
export default SingleProduct;