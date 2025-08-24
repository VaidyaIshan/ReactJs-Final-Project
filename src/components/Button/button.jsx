import { Link } from "react-router";
export default function Button(){
    return(
    <div className="bg-[#1E1E1E] w-150 h-30 text-white font-bold text-4xl hover:bg-amber-600 justify-center items-center flex rounded-4xl mt-10">
        <Link to="/bookspage">
          <h1 className="">SHOP NOW</h1>
          </Link>

        </div>
    );
}