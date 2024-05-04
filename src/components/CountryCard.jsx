import React from "react";

export default function CountryCard({name,flag,population,region,capital}) {
  // console.log(flag)
  return (
    <div className="w-[20rem] rounded-lg overflow-hidden shadow-2xl scale-95 hover:scale-100 duration-300">
      <a  href="/country.html?name=Barbados">
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
      </a>
    </div>
  );
}
