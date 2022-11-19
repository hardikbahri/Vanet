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
import Scenario1_2 from "./components/Scenario1_2";
import Scenario1_3 from "./components/Scenario1_3";
import Scenario1_4 from "./components/Scenario1_4";
import Scenario2_1 from "./components/Scenario2/Scenario2_1";

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
          <Route path="/Scenario1_2" element={<>
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <Scenario1_2 />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/Scenario1_3" element={<>
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <Scenario1_3 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/Scenario1_4" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <Scenario1_4 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/Scenario2_1" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <Scenario2_1 />
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
