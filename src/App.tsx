
import './App.css'

import { Outlet, Link } from 'react-router-dom';

function App() {
  

  return (
     
   <>
       <header>

         <h1>XYZ</h1>

       </header>

           <nav>
            <Link to = "/">Acceuil</Link>
            <Link to = "/a-propos">A propos</Link>
           </nav>

       <Outlet/>
   </>
    
   
     

  );
 
}
export default App

