import classes from './Pages/Home.module.css'
import { useNavigate } from "react-router-dom";

function Planet(props){
// console.log(props.det);
const navigate = useNavigate();

function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  function indi(){
  //   console.log(props.det.name);
  // console.log(  getId(props.det.url))
    navigate(`/planet/${getId(props.det.url)}`);
  }
//  console.log(getId(props.det.url));
return(
    <div className={classes.single}>
    <img src={`https://starwars-visualguide.com/assets/img/planets/${getId(props.det.url)}.jpg`} alt="unavailable" className={classes.rect}/>
    <div className={classes.layer3}>
      <div className={classes.arrange}>
      <div className={classes.pl_name}>{props.det.name}</div>
      <div className={classes.dets}>Diameter:{props.det.diameter}</div>
      <div className={classes.dets}>{props.det.terrain}</div>
      <div className={classes.more}  onClick={indi}>More details>></div>
      </div>
    </div>
  </div>
)
}
export default Planet