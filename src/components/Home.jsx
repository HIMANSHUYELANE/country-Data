import React from "react";
import { useState } from "react";
import "../App.css";
import CardContainer from "./CardContainer";
import Filter from "./Filter";
import Search from "./Search";
import { Outlet } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState("");
  return (
    <div>
      <div className="flex justify-between px-14 my-4 flex-wrap gap-5">
        <Search setQuery={setQuery} />
        <Filter setSelect={setSelect} />
      </div>
      <CardContainer query={query} select={select} />
</div>
  );
}
