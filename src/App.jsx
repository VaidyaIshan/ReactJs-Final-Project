import './App.css'
import { Outlet } from "react-router";
function App() {
  return (
    
    <div className='items-center flex justify-center text-9xl bg-lime-700 text-white'>
      <h1>
        Book Verse
      </h1>
      <Outlet />
    </div>
     
    
  )
}
export default App
