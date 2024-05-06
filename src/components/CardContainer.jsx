import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../../countriesData";

export default function CardContainer({query,select}) {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
    })
  },[])
  return (
    <div className="flex justify-evenly flex-wrap">
      {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query)
        ).filter((country)=>
          country.region.toLowerCase().includes(select)
        )
        .map((country, i) => {
          return (
            <CountryCard
              key={i}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
    </div>
  );
}
