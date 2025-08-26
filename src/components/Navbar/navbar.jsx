import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){
    const { cartItems } = useSelector((state) => state.cart);
    const cartItemCount = cartItems.length;

    return(
    <>
    <div className="bg-[#1E1E1E] h-20 w-[500px] rounded-[20px] mt-6 flex items-center  p-10 justify-evenly text-xl text-white " >
        
         <Link to="/">
          <h1 className="">Home</h1>
          </Link>
       
       <Link to="/bookspage">
          <h1 className="">Products</h1>
          </Link>

          <Link to="/cart" className="relative">
            <h1 className="">My Cart</h1>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link to="/Login">
          <h1 className="">Login</h1>
          </Link>

    </div>
    </>
    );
}