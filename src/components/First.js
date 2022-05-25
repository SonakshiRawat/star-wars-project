import classes from './First.module.css'
// import { Routes, Route } from "react-router-dom";
// import Home from '../Pages/Home';
import { useNavigate } from "react-router-dom";
// import Pathh from './Pathh';
function First(){
  const navigate = useNavigate();
  function home(e) {
    navigate(`/home`);
  }
    return(
  

   <div className={classes.bg}>
    <div className={classes.layer}>
    {/* <img src="images/logo.png" className={classes.logo}/> */}
<div className={classes.name}>STAR - WARS</div>
<div className={classes.text}>
    <div className={classes.head}>What's the greatest ship design in star wars</div>
    <div className={classes.sub}>Learn about the secrets of star wars</div>
    <button className={classes.explore} onClick={home}>
       Explore
   
   </button>
</div>
    </div>
</div>


    )
}
export default First;