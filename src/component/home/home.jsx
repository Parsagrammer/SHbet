import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import contextUse from "../../context/context";
import './home.css'
const Home = (props) => {
const contextuse = useContext(contextUse)

return ( <>
    <section className="home">
<nav  >
<div className="d-flex " >
    <h1 className="text-danger" ><em>SH</em></h1>
    <h1 className="text-warning" ><b>Bet</b></h1>

</div>
<div className="d-flex flex-row-reverse justify-content-around w-50" >
<button className="btn buttonNav" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/login'} >login</Link></button>
<button className="btn buttonNav" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/live-game'} >Live Games</Link></button>
<button className="btn buttonNav" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/new Games'} >New Games</Link></button>
<button className="btn buttonNav" ><Link className="w-100 h-100 text-decoration-none text-warning " to={'/trended'} >Trended</Link></button>
</div>
</nav>
<main  >
    <div  className="HRnav" >
<h1 className="text-warning  winner " >winners</h1>
  <div className="d-flex flex-column" >
    </div>      
    </div>
    <div className="main" >
<div className="p-5 row  ">
<button   className="gamesbtn" ><Link className="w-100 h-100 text-decoration-none text-center  fs-1 text-warning" to={''}  >ScoBeTT</Link></button>
<button  className="gamesbtn" ><Link className="w-100 h-100 text-decoration-none text-center fs-1 text-warning" to={''}  >BasketBeTT</Link></button>
<button  className="gamesbtn" ><Link className="w-100 h-100 text-decoration-none text-center fs-1 text-warning" to={''}  >BoxBeTT</Link></button>
<button  className="gamesbtn" ><Link className="w-100 h-100 text-decoration-none text-center fs-1 text-warning" to={''}  >RidingBeTT</Link></button>
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