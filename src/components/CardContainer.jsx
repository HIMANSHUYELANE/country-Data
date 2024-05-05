import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import countriesData from "../../countriesData";

export default function CardContainer({query,select}) {
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
              name={country.name.official}
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
