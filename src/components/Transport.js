import classes from './Pages/Home.module.css';

function Transport(props){
// console.log(props);
    function getId(url) {
        return url.split("/")[url.split("/").length - 2];
      }

    return (
        <div 
        // className={props.det.pr ?  classes.individual:classes.small_img }
        className={classes.individual}
        // onClick={indi}
        >
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${getId(props.det.url)}.jpg`}
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

export default Transport;