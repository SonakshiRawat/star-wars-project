import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import classes from "./Separate.module.css";
import Transport from "./Transport";

function SeparatePeople(){
    let p = useParams();
    // console.log(p.id);
    const [pep, setPep] = useState([]);
    const [planet, setPlanet] = useState({});
    let arr = [];
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`https://swapi.dev/api/people/${p.id}`);
    
            // console.log(res.data);
            setPlanet(res.data);
            res.data.starships.forEach(async (el) => {
              const resp = await axios.get(`${el}`);
              // console.log(resp.data);
              arr.push(resp.data);
              // console.log(arr);
    
              setPep((n) => [...n, resp.data]);
            });
          } catch (error) {
            console.log("error", error);
          }
        }
        fetchData();
      }, []);

      const jsonObject = pep.map(JSON.stringify);

      //   console.log(jsonObject);
    
      const uniqueSet = new Set(jsonObject);
      const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    
    return (
        <div className={classes.bg}>
          <div className={`${classes.layer}, ${classes.center}`}>
            <div className={classes.box}>
              <div className={classes.divide}>
                {/* <div className={classes.main}>Namedff</div> */}
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${p.id}.jpg`}
                  alt="unavailable"
                  className={classes.img}
                />
          
                <div className={classes.large}>
                  <div className={classes.small}>
                    Name:<span className={classes.answer}>{planet.name}</span>
                  </div>
                  <div className={classes.small}>
                    Birth Year:
                    <span className={classes.answer}>{planet.birth_year}</span>
                  </div>
                  <div className={classes.small}>
                   Eye color:<span className={classes.answer}>{planet.eye_color}</span>
                  </div>
                  <div className={classes.small}>
                    Gender:
                    <span className={classes.answer}>{planet.gender}</span>
                  </div>
                  <div className={classes.small}>
                    Height:<span className={classes.answer}>{planet.height}</span>
                  </div>
                  <div className={classes.small}>
                    Mass:
                    <span className={classes.answer}>{planet.mass}</span>
                  </div>
                  <div className={classes.small}>
                    Skin color:
                    <span className={classes.answer}>{planet.skin_color}</span>
                  </div>
                </div>
              </div>
              <div className={classes.head}> Starships</div>
    
              <div className={classes.left}>
                {uniqueArray.length === 0 ? (
                  <div className={classes.alternate}>Not available</div>
                ) : (
                  uniqueArray.map((n) => <Transport key={uuid()} det={n}  />)
                )}
              </div>
            </div>
          </div>
        </div>
      );
  
}

export default SeparatePeople;