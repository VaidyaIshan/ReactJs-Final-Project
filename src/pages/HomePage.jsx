import Button from '../components/Button/button'
import Image from '../assets/books.svg'
export default function Home(){
    return(
        <div className='flex'>
        <div className="mt-[200px] ml-[-200px]">
            <h1 className="text-[140px] font-semibold text-white">BOOK VERSE</h1>
            <h2 className="text-[60px] font-semibold text-white">Marketplace for Books</h2>
            <Button/>
        </div>
        <div>
            <img src={Image} className="w-[502px] h-[502px]  "/>
           
            

        </div>
        </div>
     
        
    );
}