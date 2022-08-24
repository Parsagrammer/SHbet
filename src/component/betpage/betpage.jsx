import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import contextUse from "../../context/context";
import queryString from  "query-string"
import './betpage.css'

const BetPage = (props) => {
    const contextuse = useContext(contextUse)
    let sportId = contextuse.gamePage[Number (queryString.parse(window.location.search).sportId)]
    let game = Number (queryString.parse(window.location.search).game)
    console.log(sportId)
    console.log(game)

    return ( <>
    <section className="betpage" >
<div className="bets" >
    <h1 className="bet" ><em><b>BeTs</b></em></h1>
</div>
<div className="main" >
<h1 className="title" >{sportId.page}</h1><br />
<h1 className="text-center text-warning my-3 " >
{sportId.games[game].nametournaments}
</h1 >
<h2 className="text-center text-warning my-3 ">
{sportId.games[game].game}

</h2>
<div className="d-flex justify-content-around" >
{
sportId.games[game].teams.map((e ,i)=>{
  return  <>
  <div key={i} >
  <h1 className="text-center text-warning my-3 " key={i} >{e}</h1><br />
  </div>

  </>
})    
}
</div>

</div>
    </section>
    
    </> );
}
 
export default BetPage;<>


</>