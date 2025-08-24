import { Link } from "react-router";
export default function Navbar(){
    return(
    <>
    <div className="bg-[#1E1E1E] h-20 w-[500px] rounded-[20px] mt-6 flex items-center  p-10 justify-evenly text-xl text-white " >
        
         <Link to="/">
          <h1 className="">Home</h1>
          </Link>
       
       <Link to="/bookspage">
          <h1 className="">Products</h1>
          </Link>

          <Link to="/bookspage">
          <h1 className="">My Cart</h1>
          </Link>
        

          

    </div>
    </>
    );
}