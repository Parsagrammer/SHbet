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
<div className="d-flex justify-content-around w-50" >
<button className="btn buttonNav" ><Link to={''} ></Link></button>
<button className="btn buttonNav" ><Link to={''} ></Link></button>
<button className="btn buttonNav" ><Link to={''} ></Link></button>
<button className="btn buttonNav" ><Link to={''} ></Link></button>
</div>
</nav>

    </section>
    </> );
}
 
export default Home;