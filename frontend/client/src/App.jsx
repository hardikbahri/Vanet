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
import False4 from "./components/False4444" 

import Welcome2 from "./components/Welcome2";
import W3 from "./components/W3";
import W4 from "./components/W4";
import Scenario1_2 from "./components/Scenario1_2";
import Scenario122 from "./components/Scenario1_2_2";
import Scenario1_2_3 from "./components/Scenario1_2_3";
import False from "./components/False"
import False2 from "./components/False2"
import False3 from "./components/False3"
import {rsu,str1} from "./utils/constants"

import Scenario1_3 from "./components/Scenario1_3";
import Scenario1_4 from "./components/Scenario1_4";
import Scenario2_1 from "./components/Scenario2/Scenario2_1";
import Scenario2_2 from "./components/Scenario2/Scenario2_2";
import Scenario2_3 from "./components/Scenario2/Scenario2_3";
import S2_4 from './components/Scenario2/s2_4'
import S2_4_1 from './components/Scenario2/s2_4_1'
import S2_4_2 from './components/Scenario2/s2_4_2'
import S2_5_1 from './components/Scenario2/s2_5_1'
import S2_5_2 from './components/Scenario2/s2_5_2'


import S2_5 from './components/Scenario2/s2_5'
import S2_6 from './components/Scenario2/s2_6'
import S2_7 from './components/Scenario2/s2_7'
import {car1,car4,car6,acar} from "./utils/constants"
import S1_3_1 from "./components/S1_3_1"
import S1_3_2 from "./components/S1_3_2"




function App() { 
  const [ user, setLoginUser] = useState({})
  return (
    

    
      <BrowserRouter>
      
     <Routes> 
      <Route exact path="/" element={user && user._id ?  <> <div className=""> <div className="gradient-bg-welcome">   <Navbar/> <Welcome /> <Services /> <Transactions /> <Footer /></div></div> </> : <Login setLoginUser={setLoginUser}/>}>
       

        </Route>
           <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}>
           </Route>

          <Route path="/register" element={<Register />}>
            
          </Route>
          <Route path="/1" element={ rsu==false ? <>            <div className=""> 
       <div className="gradient-bg-welcome">
          <False2 />
          <Transactions />
          <Footer />
          </div>
         </div> </> : <>  
             
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Scenario1_2 />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/2" element={<>
            <div className=""> 
       <div className="gradient-bg-welcome">
          <Navbar />
          <Scenario122 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/3" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <Scenario1_2_3 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/4" element={<>
            <div className="min-h-screen"> 
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
         <Route path="/5" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S1_3_1 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/6" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S1_3_2 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/7" element={car1==false&&car4==false&&car6==false ? <>            <div className=""> 
       <div className="gradient-bg-welcome">
          <False />
          <Transactions />
          <Footer />
          </div>
         </div> </> : <>
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
          <Route path="/8" element={<>
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
          <Route path="/9" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <Scenario2_2 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
          <Route path="/10" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <Scenario2_3 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/11" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_6 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/12" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_4 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/13" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_4_1 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/14" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_4_2 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/15" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_5 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>
            

         </Route>
         <Route path="/16" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_5_1 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>
            

         </Route>
         <Route path="/17" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_5_2 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>
            

         </Route>
         <Route path="/18" element={acar==true?<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <False3/>
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>:<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_7/>
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/19" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <False />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/20" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <False2 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/21" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <False3 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>

         </Route>
         <Route path="/22" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <S2_7 />
          <Services />
          <Transactions />
          <Footer />
          </div>
         </div> 
          </>}>
            

         </Route>
         <Route path="/23" element={<>
            <div className="min-h-screen"> 
       <div className="gradient-bg-welcome">
          <Navbar />
          
          <False4 />
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