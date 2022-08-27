import { useState } from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from "./component/home/home";
import contextUse from "./context/context";
import GamePage from "./component/gamesPage/Gpage";
import BetPage from "./component/betpage/betpage";
import Register from "../src/component/register/Register"
import Sec from "./component/seclogin/sec";
const App = () => {
    let [gamespage , setgamespage]=useState([
{id:1 , page:'Soccer tournaments' , games:[
    {nametournaments:'ucl' ,  game:"final", year:2022 , teams:['liverpool' , 'realmadrid'] },
    {nametournaments:'Laliga' ,  game:"30th", year:2022  ,  teams:['barcelona' , 'realmadrid'] },
    {nametournaments:'Laliga' ,  game:"30th", year:2022 , teams:['sevia' , 'valencia']  },
    {nametournaments:'Laliga' ,  game:"30th", year:2022  , teams:['betis' , 'spaniol']},

]},
{id:2 , page:'basketball tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , teams:['iran' , 'italy'] },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , teams:['america' ,  'japon'] },
 

]},
{id:3 , page:'box tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , teams:['iran' ,  'italy'] },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , teams:['america' , 'japon'] },
 

]},
{id:4 , page:'riding tournaments' , games:[
    {nametournaments:'bet' ,  game:" final", year:2022 ,teams:['tandar1' ,   'tondar2' , 'alex', 'dark', 'mad'] },
]},
{id:5 , page:'NBA tournaments' , games:[
    {nametournaments:'NBA' ,  game:" final week", year:2022 , teams:['rakly' , 'black born']  },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , teams:['rostwa' , 'american 1290'] },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , teams:['old boys' , 'spartacos'] },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , teams:['mad tiger' , 'losangeles 3156'] },
]},
{id:6 , page:'formol 1 tournaments' , games:[
    {nametournaments:'bet' ,  game:" final", year:2022,teams:['ford' ,   'benz' , 'llambor', 'BMW',  'KIA'] },
]},
{id:7 , page:'FIFA tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022  , teams:['parsa sagharzadeh' , 'jooang Lee'] },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , teams:['alex torento' , 'mohammad algharibi'] },
 

]},
{id:8 , page:'Billiard tournaments' , games:[
    {nametournaments:'asia cup' ,  game:"semi final", year:2022 ,  teams:['mohammd javad sayani' , 'kiria ozakaki']},
    {nametournaments:'asia cup' ,  game:"semi final", year:2022  ,  teams:['jamse Lee' , 'raof'] },


]},

    ])
    return (<>
    <contextUse.Provider  value={{gamePage:gamespage}} >
<BrowserRouter>



<Routes>
   <Route path="/GamesPage"  element={<GamePage/>}  />
   <Route path="/betpage"  element={<BetPage/>} />
   <Route path="/register"  element={<Register/>} />
   <Route  path="/seclogin" element={<Sec/>} /> 
   <Route path="/"  element={<Home/>} />

</Routes>



</BrowserRouter>



    </contextUse.Provider>
    
    </>  );
}
 
export default App;