import { data } from "autoprefixer";
import React, { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";

export default function Countrydetails() {
  const [Data, setData] = useState([]);
  const countryName = new URLSearchParams(location.search).get("name");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((resp) => resp.json())
      .then(([data]) => {
        console.log(data);
        // console.log(data.name.common);
        setData({
          cname: data.name.common,
          name: data.name.official,
          flag: data.flags.svg,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          languages: Object.values(data.languages).join(", "),
          currencies:Object.values(data.currencies).map((currency)=> currency.name).join(', '),
          border: Object.values(data.borders).join(", ")
        });
      });
  }, []);
  return (
    <main>
      <div className="">
          <i><a className=" border-2 w-[80px] justify-evenly rounded-md mx-1 border-black my-3 flex items-center" href="/"><FaArrowLeft />Back</a></i>
        <div className="flex ">
          <img className="w-[20rem] mx-auto sm:mx-5 my-10 md:w-[26rem]" src={Data.flag} alt="" />
          <div className="self-center space-y-1">
            <h1>{Data.cname}</h1>
            <div className="space-y-1">
              <p>
                <b>Native Name: </b>
                <span className="">{Data.name}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{Data.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{Data.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{Data.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{Data.capital}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="top-level-domain">{Data.languages}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{Data.currencies}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>
              <span>{Data.border}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
