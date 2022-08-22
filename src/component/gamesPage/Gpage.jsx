import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import contextUse from "../../context/context";
import queryString from  "query-string"
import './Gpage.css'
const GamePage = (props) => {
    const contextuse = useContext(contextUse)
    let infoGames =contextuse.gamePage[queryString.parse(window.location.search).id-1]
    console.log(infoGames)
    return ( <>
    <section className="gamepage" >
<Link className="p-3 m-3 " to={'/'} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi text-danger bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
</svg></Link>
<div className="d-flex flex-column ">
<h1 className="gamename" >{infoGames.page}</h1>
<div className="row p-4" >
{
 infoGames.games.map((e,i)=>{
        return <button key={i}   className="gamebtn" ><Link className="w-100 h-100 text-decoration-none text-center m-3 fs-1 text-warning" to={''}  >
            <div  >
            
            <h1>{e.nametournaments}</h1>
            <h1>{e.game}</h1>
            </div>
            <div className="d-flex justify-content-around" >
                <h3>{e.team1}</h3>
                <h3>{e.team2}</h3>
            </div>
            </Link></button>
    })
}

</div>
</div>
    </section>
    
    </> );
}
 
export default GamePage;