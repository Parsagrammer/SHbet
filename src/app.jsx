import { useState } from "react";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from "./component/home/home";
import contextUse from "./context/context";
import GamePage from "./component/gamesPage/Gpage";
const App = () => {
    let [gamespage , setgamespage]=useState([
{id:1 , page:'Soccer tournaments' , games:[
    {nametournaments:'ucl' ,  game:"final", year:2022 , team1:'liverpool' , team2:'realmadrid' },
    {nametournaments:'Laliga' ,  game:"30th", year:2022 , team1:'barcelona' , team2:'realmadrid' },
    {nametournaments:'Laliga' ,  game:"30th", year:2022 , team1:'sevia' , team2:'valencia' },
    {nametournaments:'Laliga' ,  game:"30th", year:2022 , team1:'betis' , team2:'spaniol' },

]},
{id:2 , page:'basketball tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'iran' , team2:'italy' },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'america' , team2:'japon' },
 

]},
{id:3 , page:'box tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'iran' , team2:'italy' },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'america' , team2:'japon' },
 

]},
{id:4 , page:'riding tournaments' , games:[
    {nametournaments:'bet' ,  game:" final", year:2022 , team1:'tandar1' , team2:'tondar2' ,team3:'alex' , team4:'dark' , team5:'mad' },
]},
{id:5 , page:'NBA tournaments' , games:[
    {nametournaments:'NBA' ,  game:" final week", year:2022 , team1:'rakly' , team2:'black born' },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , team1:'rostwa' , team2:'american 1290 ' },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , team1:'old boys' , team2:'spartacos' },
    {nametournaments:'NBA' ,  game:" final week", year:2022 , team1:'mad tiger' , team2:'losangeles 3156' },
]},
{id:6 , page:'formol 1 tournaments' , games:[
    {nametournaments:'bet' ,  game:" final", year:2022 , team1:'ford' , team2:'benz' ,team3:'llambor' , team4:'BMW' , team5:'KIA' },
]},
{id:7 , page:'FIFA tournaments' , games:[
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'parsa sagharzadeh' , team2:'jooang Lee' },
    {nametournaments:'world cup' ,  game:"semi final", year:2022 , team1:'alex torento' , team2:'mohammad algharibi' },
 

]},
{id:8 , page:'Billiard tournaments' , games:[
    {nametournaments:'asia cup' ,  game:"semi final", year:2022 , team1:'mohammd javad sayani' , team2:'kiria ozakaki' },
    {nametournaments:'asia cup' ,  game:"semi final", year:2022 , team1:'jamse Lee' , team2:'raof' },
 

]},

    ])
    return (<>
    <contextUse.Provider  value={{gamePage:gamespage}} >
<BrowserRouter>



<Routes>
   <Route path="/GamesPage"  element={<GamePage/>}  />
   <Route path="/"  element={<Home/>} />

</Routes>



</BrowserRouter>



    </contextUse.Provider>
    
    </>  );
}
 
export default App;