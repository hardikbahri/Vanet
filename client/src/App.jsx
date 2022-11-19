import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Onclick from "./components/onclick";
import Onclick2 from "./components/onclick2";
import Onclick3 from "./components/onclick3";

import {Link} from "react-router-dom" 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { useState } from "react";

import Welcome2 from "./components/Welcome2";
import W3 from "./components/W3";
import W4 from "./components/W4";

function App() { 
  const [ user, setLoginUser] = useState({})
  return (
    

    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<>
        <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          <Services />
          <Transactions />
          <Footer />
         </div>
         </div> 
          </>}>
        </Route>
           <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}>
           </Route>

          <Route path="/register" element={<Register />}>
            
          </Route>
          <Route path="/Welcome2" element={<>
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome2 />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/Welcome2/W3" element={<>
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <W3 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/Welcome2/W3/W4" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <W4 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
      </Routes>
      </BrowserRouter>

   
   
  
)}

export default App;
