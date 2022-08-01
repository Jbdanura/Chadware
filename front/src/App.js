import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Deals from "./components/Deals"
import Topbar from './components/Topbar';
import {BrowserRouter as Router, Routes,Route,HashRouter} from "react-router-dom"
import Category from './components/Category';
import About from './components/About';
import Contact from './components/Contact';

const App = () =>{
  const [navMobile,setNavMobile] = useState(false)
  const [user,setUser] = useState(null)

  return(
      <div>
         <Topbar setNavMobile={setNavMobile} navMobile={navMobile}/>
         <div className="container">
            <HashRouter>
               <Sidebar setUser={setUser} user={user} navMobile={navMobile}/>
               <Routes>
                  <Route path="/category/:category" element={<Category/>}/>
                  <Route path="/" element={<Deals/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
               </Routes>
            </HashRouter>
         </div>
      </div>
      );

}
export default App;