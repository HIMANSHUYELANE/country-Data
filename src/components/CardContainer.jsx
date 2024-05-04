import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../../countriesData";

export default function CardContainer({query}) {
  return (
    <div className="flex justify-evenly flex-wrap">
      {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query)
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
