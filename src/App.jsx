import './App.css'
import { Outlet } from "react-router";
import Navbar from './components/Navbar/navbar';
function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar/>
      <div className='flex  justify-center '>
          <Outlet />
      </div>

    
    </div>
  );
    
   
}
export default App
