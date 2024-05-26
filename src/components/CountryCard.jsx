import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({name,flag,population,region,capital,data}) {
  // console.log(flag)
  return (
    <Link to={`/${name}`} state={data} className="w-[20rem] rounded-lg overflow-hidden shadow-2xl scale-95 hover:scale-100 duration-300">
        <img className="h-[180px] w-[100%]" src={flag} alt="Barbados flag" />
        <div className="m-2">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>{population}
          </p>
          <p>
            <b>Region: </b>{region}
          </p>{" "}
          <p>
            <b>Capital: </b>{capital}
          </p>
        </div>
    </Link>
  ); 
}
