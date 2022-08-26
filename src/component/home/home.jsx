import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import contextUse from "../../context/context";
import './home.css'
const Home = (props) => {
const contextuse = useContext(contextUse)
console.log(contextuse.gamePage)
return ( <>
    <section className="home">
<nav  >
<div className="d-flex " >
    <h1 className="text-danger" ><em>SH</em></h1>
    <h1 className="text-warning" ><b>Bet</b></h1>

</div>
<div className="d-flex flex-row-reverse justify-content-around w-50" >
<button className="btn buttonNav border-0" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/registergit push -u oriigin main'} >login</Link></button>
<button className="btn buttonNav  border-0" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/live-game'} >Live Games</Link></button>
<button className="btn buttonNav  border-0" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/new Games'} >New Games</Link></button>
<button className="btn buttonNav  border-0" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/trended'} >Trended</Link></button>
</div>
</nav>
<main  >
    <div  className="HRnav" >
<h1 className="text-warning  winner " >winners</h1>
  <div className="d-flex flex-column" >
    </div>      
    </div>
    <div className="main " >
<div className="p-5 row  ">
  <Link   className="gamesbtn"  to={'/GamesPage?id=1'} > <button   className="w-100 h-100 bg-transparent border-0 text-center  fs-1 text-warning">    ScoBeTT</button></Link>
 <Link   className="gamesbtn"  to={'/GamesPage?id=2'}  > <button  className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning">  BasketBeTT</button></Link>
  <Link  className="gamesbtn"  to={'/GamesPage?id=3'}  > <button   className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning"> BoxBeTT</button></Link>
 <Link   className="gamesbtn"  to={'/GamesPage?id=4'}  > <button   className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning"> RidingBeTT</button></Link>
 <Link   className="gamesbtn"  to={'/GamesPage?id=5'}  > <button  className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning">  NBA </button></Link>
 <Link   className="gamesbtn" to={'/GamesPage?id=6'}  > <button    className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning"> F1 BeTT</button></Link>
   <Link  className="gamesbtn"  to={'/GamesPage?id=7'}  > <button  className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning"> FIFA BeTT</button></Link>
 <Link   className="gamesbtn"  to={'/GamesPage?id=8'}  > <button   className="w-100 h-100 bg-transparent border-0  text-center fs-1 text-warning"> Billiard BeTT</button></Link>
</div>

    </div>
    <div className="HRnav" >
<h1 className="text-danger   loser "  >losers</h1>
<div className="d-flex flex-column" >
    </div>   
    </div>
</main>
    </section>
    </> );
}
 
export default Home;