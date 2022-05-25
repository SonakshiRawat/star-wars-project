import classes from "./Pages/Home.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


function People(props) {
//   const c = useSelector((state) => state.titles.ti);
// console.log(c);
const navigate = useNavigate();

  // console.log(props);
  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }
  function indi(){
    //   console.log(props.det.name);
    // console.log(  getId(props.det.url))
      navigate(`/people/${getId(props.det.url)}`);
    }
  // console.log(`https://starwars-visualguide.com/assets/img/characters/${getId(
  //   props.det.url
  // )}.jpg`);
  //  console.log(getId(props.det.url));
  return (
    <div 
    // className={props.det.pr ?  classes.individual:classes.small_img }
    className={classes.individual}
    onClick={indi}
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${getId(
          props.det.url
        )}.jpg`}
        alt=""
        // className={classes.round}
        className={ classes.round}
      /> 
      <div className={classes.layer2}>
        <div className={classes.p_name}>{props.det.name}</div>
      </div>
    </div>
  );
}
export default People;

// `props.det.pr?{classes.small_img}:{classes.round} `
