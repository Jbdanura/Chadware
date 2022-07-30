import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Deals from "./components/Deals"
import Topbar from './components/Topbar';

const App = () =>{
  const [navMobile,setNavMobile] = useState(false)
  const [user,setUser] = useState(null)

  return(
      <div>
         <Topbar setNavMobile={setNavMobile} navMobile={navMobile}/>
         <div className="container">
            <Sidebar setUser={setUser} user={user} navMobile={navMobile}/>
            <Deals/>
         </div>
      </div>
      );

}
export default App;