import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
    <h1 className="text-dark" >gfhfghfghfg</h1>
    
    </> );
}
 
export default BetPage;<>


</>