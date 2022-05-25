// import classes from "./Pages/Home.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import People from "./People";
import classes from "./Separate.module.css";
function Separate() {
  let p = useParams();
  const [pep, setPep] = useState([]);
  const [planet, setPlanet] = useState({});
  let arr = [];
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://swapi.dev/api/planets/${p.id}`);

        // console.log(res.data);
        setPlanet(res.data);
        res.data.residents.forEach(async (el) => {
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
  // console.log(planet);
  const jsonObject = pep.map(JSON.stringify);

  //   console.log(jsonObject);

  const uniqueSet = new Set(jsonObject);
  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  // console.log(uniqueArray.length);
  return (
    <div className={classes.bg}>
      <div className={`${classes.layer}, ${classes.center}`}>
        <div className={classes.box}>
          <div className={classes.divide}>
            {/* <div className={classes.main}>Namedff</div> */}
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${p.id}.jpg`}
              alt="unavailable"
              className={classes.img}
            />
            <div className={classes.large}>
              <div className={classes.small}>
                Name:<span className={classes.answer}>{planet.name}</span>
              </div>
              <div className={classes.small}>
                Diameter:
                <span className={classes.answer}>{planet.diameter}</span>
              </div>
              <div className={classes.small}>
                Terrain:<span className={classes.answer}>{planet.terrain}</span>
              </div>
              <div className={classes.small}>
                Population:
                <span className={classes.answer}>{planet.population}</span>
              </div>
              <div className={classes.small}>
                Gravity:<span className={classes.answer}>{planet.gravity}</span>
              </div>
              <div className={classes.small}>
                Orbital Period:
                <span className={classes.answer}>{planet.orbital_period}</span>
              </div>
              <div className={classes.small}>
                Rotation Period:
                <span className={classes.answer}>{planet.rotation_period}</span>
              </div>
            </div>
          </div>
          {/* <div className={classes.left}> */}
          <div className={classes.head}> Residents</div>

          <div className={classes.left}>
            {uniqueArray.length === 0 ? (
              <div className={classes.alternate}>Not available</div>
            ) : (
              uniqueArray.map((n) => <People key={uuid()} det={n} pr={1} />)
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Separate;
