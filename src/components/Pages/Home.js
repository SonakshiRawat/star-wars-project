import classes from "./Home.module.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import People from "../People";
import uuid from "react-uuid";
import Planet from "../Planet";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../src/store/index";

function Home() {
const [people,setPeople]=useState([])
const [planet,setPlanet]=useState([])
const dispatch = useDispatch();

    useEffect(()=>{
        async function fetchData(){
            try{
                const res=await axios.get(`https://swapi.dev/api/people`)
                const resp=await axios.get(`https://swapi.dev/api/planets`)
                dispatch(
                  actions({
                    type: "people",
                    val: {res }
                  })
                );
                // console.log(...resp.data.results);
setPeople([...res.data.results])
setPlanet([...resp.data.results])
            } catch (error) {
                console.log("error", error);
              }
        }
        fetchData()
    },[])
    const c = useSelector((state) => state.titles.ti);
    // console.log(c);
// console.log(people);
  return (
    <div className={classes.bg}>
      <div className={classes.layer}>
        <div className={classes.people}>
          <div className={classes.head}>People</div>
          <div className={classes.person}>
             {c.map((n)=>(
<People  key={uuid()} det={n}/>
              ))}
          </div>
        </div>

        <div className={classes.planet}>
          <div className={classes.head}>Planets</div>
          <div className={classes.person}>
     
              {planet.map((n)=>(
<Planet  key={uuid()} det={n}/>
              ))} 
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
