import { useState } from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from "./component/home/home";
import contextUse from "./context/context";
const App = () => {
    return (<>
    <contextUse.Provider  value={{}} >
<BrowserRouter>



<Routes>
   <Route path="/"  element={<Home/>} />
</Routes>



</BrowserRouter>



    </contextUse.Provider>
    
    </>  );
}
 
export default App;